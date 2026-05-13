const EYE_BASE = 'http://200.92.203.70:3004';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'apikey, authorization, accept-profile, prefer, content-type',
  'Access-Control-Expose-Headers':'Content-Range, Range-Unit',
};

function mapPalet(r) {
  return {
    temporada:      r.temporada,
    folio_palet:    r.folioPalet,
    fecha_empaque:  r.fechaEmpaque,
    agricultor:     r.agricultor,
    lote:           r.lote,
    cve_producto:   r.cveProducto || null,
    producto:       r.producto,
    grupo_cultivo:  r.grupoCultivo,
    cultivo:        r.cultivo,
    color:          r.color,
    etiqueta:       r.etiqueta,
    calidad:        r.calidad,
    envase:         r.envase,
    tamano:         r.tamaño || r.tamano,
    gaseado:        r.gaseado,
    fecha_embarque: r.fechaEmbarque,
    estado:         r.estado,
    precio:         r.precio,
    peso:           r.peso,
    bultos:         r.bultos,
  };
}

function parseDates(q) {
  let from, to;
  for (const [, v] of Object.entries(q)) {
    const vals = Array.isArray(v) ? v : [v];
    for (const x of vals) {
      if (typeof x === 'string') {
        if (x.startsWith('gte.')) from = x.slice(4).split('T')[0];
        if (x.startsWith('lte.')) to   = x.slice(4).split('T')[0];
      }
    }
  }
  if (!from) from = new Date().toISOString().split('T')[0];
  if (!to)   to   = from;
  return { from, to };
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS); res.end(); return;
  }

  const { from, to } = parseDates(req.query);
  const limit  = req.query.limit  ? parseInt(req.query.limit)  : null;
  const offset = req.query.offset ? parseInt(req.query.offset) : 0;

  const token = process.env.EYE_TOKEN;
  const eyeUrl = `${EYE_BASE}/api/eye/v1/Palet?FechaInicial=${from}&FechaFinal=${to}`;

  try {
    const eyeRes = await fetch(eyeUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!eyeRes.ok) throw new Error(`EYE ${eyeRes.status}`);

    const raw     = await eyeRes.json();
    const allRows = (Array.isArray(raw) ? raw : []).map(mapPalet);
    const rows    = limit !== null ? allRows.slice(offset, offset + limit) : allRows;
    const lo      = rows.length ? offset : 0;
    const hi      = rows.length ? offset + rows.length - 1 : 0;

    res.writeHead(206, {
      ...CORS,
      'Content-Type':    'application/json',
      'Content-Range':   `${lo}-${hi}/${allRows.length}`,
      'Cache-Control':   's-maxage=300, stale-while-revalidate=60',
    });
    res.end(JSON.stringify(rows));
  } catch (e) {
    res.writeHead(502, { ...CORS, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
};
