const MARS_BASE = 'https://marsapi.ams.usda.gov/services/v1.2/reports';
const MARS_KEY  = process.env.USDA_MARS_KEY;

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
};

// Report IDs
const REPORT = {
  vegetables: 2307, // HC_FV020 — LA Terminal Market Vegetables (Tomatoes, Chile)
  fruits:     2306, // HC_FV010 — LA Terminal Market Fruit (Lemon, Lime)
};

// Commodities we care about per report type
const FILTERS = {
  vegetables: r => {
    const comm = (r.commodity || '').toUpperCase();
    return comm.includes('TOMATO') || comm.includes('PEPPER');
  },
  fruits: r => {
    const comm = (r.commodity || '').toUpperCase();
    return comm.includes('LEMON') || comm.includes('LIME');
  },
};

function pickPrice(r) {
  // Prefer mostly_low/mostly_high, fall back to low/high
  const lo = parseFloat(r.mostly_low_price  || r.low_price)  || null;
  const hi = parseFloat(r.mostly_high_price || r.high_price) || null;
  return { lo, hi, mid: (lo != null && hi != null) ? +((lo + hi) / 2).toFixed(2) : lo };
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).set(CORS).end();
  }

  const type = req.query.type; // 'vegetables' | 'fruits'
  if (!REPORT[type]) {
    return res.status(400).json({ error: 'type must be vegetables or fruits' });
  }

  if (!MARS_KEY) {
    return res.status(500).json({ error: 'USDA_MARS_KEY not configured' });
  }

  const today = new Date().toISOString().split('T')[0];
  const url   = `${MARS_BASE}/${REPORT[type]}?q=report_begin_date=${today}&allSections=true`;
  const auth  = 'Basic ' + Buffer.from(`${MARS_KEY}:`).toString('base64');

  try {
    const upstream = await fetch(url, {
      headers: { Authorization: auth },
      signal: AbortSignal.timeout(20000),
    });

    if (!upstream.ok) {
      return res.status(502).set(CORS).json({ error: `MARS ${upstream.status}` });
    }

    const data    = await upstream.json();
    const details = Array.isArray(data)
      ? (data.find(s => s.reportSection === 'Report Details')?.results || [])
      : [];

    const header = Array.isArray(data)
      ? (data.find(s => s.reportSection === 'Report Header')?.results?.[0] || {})
      : {};

    const filtered = details
      .filter(FILTERS[type])
      .map(r => ({
        date:       r.report_date,
        commodity:  r.commodity,
        variety:    r.variety,
        origin:     r.origin,
        environment:r.environment,
        package:    r.package,
        item_size:  r.item_size,
        color:      r.properties,
        grade:      r.grade,
        ...pickPrice(r),
        low_price:  r.low_price,
        high_price: r.high_price,
        tone:       r.market_tone_comments,
      }));

    return res.status(200).set(CORS).json({
      report_date:  header.report_begin_date || today,
      published_at: header.published_Date    || null,
      market:       'Los Angeles Terminal Market',
      count:        filtered.length,
      prices:       filtered,
    });
  } catch (err) {
    return res.status(502).set(CORS).json({ error: err.message });
  }
}
