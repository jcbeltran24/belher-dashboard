const EYE_BASE = 'http://200.92.203.70:3004';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'apikey, authorization, accept-profile, prefer, content-type',
  'Access-Control-Expose-Headers':'Content-Range, Range-Unit',
};

function mapAcarreo(r) {
  const detalles = (r.detalles || []).map(d => ({
    caseta:        d.caseta,
    variedad:      d.variedad,
    cultivo:       d.cultivo,
    color:         d.color,
    cantidad:      d.cantidad,
    kilos:         d.cantidad * (d.pesoPromedio || 0),
    peso_promedio: d.pesoPromedio,
    tipo_envase:   d.tipoEnvase,
    mayordomo:     d.mayordomo,
  }));
  return {
    folio_remision_hortalizas: r.folioRemisionHortalizas,
    fecha:                r.fecha,
    temporada:            r.temporada,
    linea_transporte:     r.lineaTransporte,
    tipo_vehiculo:        r.tipoVehiculo,
    vehiculo:             r.vehiculo,
    operador:             r.operador,
    lote:                 r.lote,
    tina:                 r.tina,
    hora_llegada_campo:   r.horaLlegadaCampo,
    hora_salida_campo:    r.horaSalidaCampo,
    hora_llegada_empaque: r.horaLlegadaEmpaque,
    peso_bruto:           r.pesoBruto,
    tara:                 r.tara,
    detalles,
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

  const token  = process.env.EYE_TOKEN;
  const eyeUrl = `${EYE_BASE}/api/eye/v1/Acarreo?FechaInicial=${from}&FechaFinal=${to}`;

  try {
    const eyeRes = await fetch(eyeUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!eyeRes.ok) throw new Error(`EYE ${eyeRes.status}`);

    const raw     = await eyeRes.json();
    const allRows = (Array.isArray(raw) ? raw : []).map(mapAcarreo);
    const rows    = limit !== null ? allRows.slice(offset, offset + limit) : allRows;
    const lo      = rows.length ? offset : 0;
    const hi      = rows.length ? offset + rows.length - 1 : 0;

    res.writeHead(206, {
      ...CORS,
      'Content-Type':  'application/json',
      'Content-Range': `${lo}-${hi}/${allRows.length}`,
    });
    res.end(JSON.stringify(rows));
  } catch (e) {
    res.writeHead(502, { ...CORS, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
};
