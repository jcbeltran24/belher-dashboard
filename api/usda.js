const MARS_BASE = 'https://marsapi.ams.usda.gov/services/v1.2/reports';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
  'Content-Type': 'application/json',
};

const REPORT = {
  vegetables: 2307, // HC_FV020 — LA Terminal Market Vegetables
  fruits:     2306, // HC_FV010 — LA Terminal Market Fruit
};

const FILTERS = {
  vegetables: r => /tomato|pepper/i.test(r.commodity || ''),
  fruits:     r => /lemon|lime/i.test(r.commodity || ''),
};

function pickPrice(r) {
  const lo = parseFloat(r.mostly_low_price  || r.low_price)  || null;
  const hi = parseFloat(r.mostly_high_price || r.high_price) || null;
  return { lo, hi };
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS); res.end(); return;
  }

  const type = (req.query && req.query.type) || '';
  if (!REPORT[type]) {
    res.writeHead(400, CORS);
    res.end(JSON.stringify({ error: 'type must be vegetables or fruits' }));
    return;
  }

  const key = process.env.USDA_MARS_KEY;
  if (!key) {
    res.writeHead(500, CORS);
    res.end(JSON.stringify({ error: 'USDA_MARS_KEY not configured' }));
    return;
  }

  const auth = 'Basic ' + Buffer.from(`${key}:`).toString('base64');

  function dateStr(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  }

  async function fetchReport(date) {
    const url = `${MARS_BASE}/${REPORT[type]}?q=report_begin_date=${date}&allSections=true`;
    const r = await fetch(url, { headers: { Authorization: auth }, signal: AbortSignal.timeout(20000) });
    if (!r.ok) throw new Error(`MARS ${r.status}`);
    const data = await r.json();
    const details = Array.isArray(data) ? (data.find(s => s.reportSection === 'Report Details')?.results || []) : [];
    const header  = Array.isArray(data) ? (data.find(s => s.reportSection === 'Report Header')?.results?.[0] || {}) : {};
    return { details, header };
  }

  try {
    // Try today first; fall back up to 4 days (weekend/holiday gap)
    let details = [], header = {};
    for (let offset = 0; offset >= -4; offset--) {
      const { details: d, header: h } = await fetchReport(dateStr(offset));
      if (d.length > 0) { details = d; header = h; break; }
    }

    const prices = details
      .filter(FILTERS[type])
      .map(r => ({
        date:        r.report_date,
        commodity:   r.commodity,
        variety:     r.variety,
        origin:      r.origin,
        environment: r.environment,
        package:     r.package,
        item_size:   r.item_size,
        color:       r.properties,
        low_price:   r.low_price,
        high_price:  r.high_price,
        ...pickPrice(r),
        tone:        r.market_tone_comments,
      }));

    const body = JSON.stringify({
      report_date:  header.report_begin_date || today,
      published_at: header.published_Date    || null,
      market:       'Los Angeles Terminal Market',
      count:        prices.length,
      prices,
    });

    res.writeHead(200, CORS);
    res.end(body);
  } catch (err) {
    res.writeHead(502, CORS);
    res.end(JSON.stringify({ error: err.message }));
  }
};
