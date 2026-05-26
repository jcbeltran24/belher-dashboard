// Tomato FOB shipping-point prices, parsed daily from the public USDA report
// IX_FV120 (Phoenix Shipping Point Vegetables). No API key required.
// Source PDF (updated each business day): ams.usda.gov/mnreports/ix_fv120.pdf
//
// User-relevant crossings: Nogales AZ + Texas (McAllen / Laredo). Otay Mesa is
// kept in the per-crossing detail but excluded from the headline range.
//
// Lemon/lime and chile prices come from the MARS API (api/usda.js, LA Terminal)
// and are intentionally NOT handled here.

const pdf = require('pdf-parse');

const PDF_URL = 'https://www.ams.usda.gov/mnreports/ix_fv120.pdf';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
  'Content-Type': 'application/json',
};

// Map a "MEXICO CROSSINGS THROUGH ..." header to a display label, or null if it
// is not one of the crossings we track.
function classifyCrossing(header) {
  if (/NOGALES/.test(header))   return 'Nogales, AZ';
  if (/OTAY\s+MESA/.test(header)) return 'Otay Mesa, CA';
  // Plain "MEXICO CROSSINGS THROUGH TEXAS" == McAllen / Laredo. Exclude the
  // "SOUTHERN CALIFORNIA AND SAN LUIS" / "SOUTH AND CENTRAL" variants.
  if (/THROUGH\s+TEXAS\b/.test(header) && !/SOUTHERN|CENTRAL/.test(header)) return 'McAllen / Laredo, TX';
  return null;
}

// Crossings that feed the headline bola/roma range (what the user asked for).
const HEADLINE_CROSSINGS = new Set(['Nogales, AZ', 'McAllen / Laredo, TX']);

const MONTHS = { Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12' };

function parseReport(text) {
  const lines = text.split('\n').map(s => s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim());

  // Report date — e.g. "May 22,2026" in the page header.
  let report_date = null, report_date_iso = null, report_date_us = null;
  for (const l of lines.slice(0, 14)) {
    const m = l.match(/^([A-Z][a-z]{2})[a-z]*\s+(\d{1,2}),\s*(\d{4})$/);
    if (m) {
      report_date = `${m[1]} ${m[2]}, ${m[3]}`;
      const mm = MONTHS[m[1]], dd = String(m[2]).padStart(2, '0');
      if (mm) { report_date_iso = `${m[3]}-${mm}-${dd}`; report_date_us = `${mm}/${dd}/${m[3]}`; }
      break;
    }
  }

  // crossing label -> { vine:[ranges], roma:[ranges], grape:[ranges] }
  const data = {};
  let crossing = null; // current crossing label (or null = not tracked)
  let type = null;     // 'vine' | 'roma' | 'grape' | null

  const RANGE = /(\d+\.\d{2})\s*-\s*(\d+\.\d{2})/; // first full low-high range on a line

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!l) continue;

    // Section header detection. A crossing header starts with "MEXICO CROSSINGS
    // THROUGH" (classify it directly). Any other top-level section header (e.g.
    // "OXNARD DISTRICT CALIFORNIA") is the line immediately preceding a
    // "Sales F.O.B. ..." line — those reset the crossing so their commodities
    // are not attributed to the previous crossing.
    if (/^MEXICO CROSSINGS THROUGH/.test(l)) {
      crossing = classifyCrossing(l);
      type = null;
      continue;
    }
    if (i + 1 < lines.length && /^Sales F\.O\.B\./.test(lines[i + 1])) {
      crossing = null; type = null;
      continue;
    }
    if (/^Sales F\.O\.B\./.test(l)) continue; // the FOB line that follows a crossing header

    if (!crossing) continue;

    // Tomato sub-block headers.
    if (/^---TOMATOES,\s*PLUM TYPE/.test(l)) { type = 'roma';  continue; }
    if (/^---TOMATOES,\s*GRAPE TYPE/.test(l)) { type = 'grape'; continue; }
    if (/^---TOMATOES:/.test(l))             { type = 'vine';  continue; }
    if (/^---/.test(l))                       { type = null;   continue; } // other commodity

    if (!type) continue;

    // Skip unit/sub-headers; collect the first full range on price lines.
    const m = l.match(RANGE);
    if (m) {
      const lo = parseFloat(m[1]), hi = parseFloat(m[2]);
      if (lo > 0 && hi >= lo) {
        (data[crossing] = data[crossing] || { vine: [], roma: [], grape: [] })[type].push([lo, hi]);
      }
    }
  }

  function range(pairs) {
    if (!pairs || !pairs.length) return null;
    return { lo: Math.min(...pairs.map(p => p[0])), hi: Math.max(...pairs.map(p => p[1])) };
  }

  // Per-crossing summary.
  const crossings = {};
  for (const [label, v] of Object.entries(data)) {
    crossings[label] = { vine: range(v.vine), roma: range(v.roma), grape: range(v.grape) };
  }

  // Headline range = aggregate of the requested crossings.
  function headline(kind) {
    const all = [];
    for (const [label, v] of Object.entries(data)) {
      if (HEADLINE_CROSSINGS.has(label)) all.push(...v[kind]);
    }
    return range(all);
  }

  return {
    report_date,
    report_date_iso,
    report_date_us,
    source: 'USDA AMS · Phoenix Shipping Point (IX_FV120) · FOB cruce',
    market: 'FOB Nogales / McAllen-Laredo',
    bola:  headline('vine'),
    roma:  headline('roma'),
    grape: headline('grape'),
    crossings,
  };
}

module.exports = async function handler(req, res) {
  if (req && req.method === 'OPTIONS') { res.writeHead(204, CORS); res.end(); return; }
  try {
    const r = await fetch(PDF_URL, { signal: AbortSignal.timeout(20000) });
    if (!r.ok) throw new Error(`USDA PDF ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    const { text } = await pdf(buf);
    const out = parseReport(text);
    if (!out.bola && !out.roma) throw new Error('no tomato prices parsed');
    res.writeHead(200, CORS);
    res.end(JSON.stringify(out));
  } catch (err) {
    res.writeHead(502, CORS);
    res.end(JSON.stringify({ error: err.message }));
  }
};

module.exports.parseReport = parseReport; // exported for local testing
