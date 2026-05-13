#!/usr/bin/env node
/**
 * EYE → Dashboard proxy
 * Exposes vw_palets y vw_acarreos con la misma interfaz que Supabase PostgREST.
 * Corre en http://localhost:8742
 */
const http = require('http');
const https = require('https');
const url = require('url');

const EYE_BASE = 'http://200.92.203.70:3004';
const TOKEN = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  'eyJVaWQiOiJlYjZiNWY4YS0yN2U2LTRhZDAtODMwYy05MDRlNTBmOGRhNTUiLCJlbWFpbCI6IkRhc2hib2FyZEBHTUFJTC5DT00iLCJzdWIiOiJEYXNoYm9hcmRAR01BSUwuQ09NIiwiQ29tcGFueUlkIjoiMGUwM2EyYTctYjQ4Zi00NjNlLWIzNDctMTQ0NzhiZDc5YWE4IiwiRW1wbG95ZWVJZCI6IiIsImp0aSI6ImFkNWZmZThhLTU3MDgtNDhjMy1iYTU4LTVhOWU1ZjlhYzk0MCIsInJvbGUiOiJFeHRlcm5hbEN1c3RvbWVyIiwibmJmIjoxNzc3NTg4NzM0LCJleHAiOjI1MzQ0NTI3MzQsImlhdCI6MTc3NzU4ODczNCwiaXNzIjoiOEU2MkEzMjgtRUZCRS00QkM2LTg3OUItNzBFNEMwMURDNTQ4LUNENDhENkU0LTQwMTMtNEJFNy1CNzhFLTYxMjc4Nzk0RTQ5NyIsImF1ZCI6IkQxRUUxRjA2LTE0RkEtNDY5QS1BQ0U4LTFGMjM2NDVBNzk2Mi1FMjk5ODhDMi0zODBBLTQxNkQtODE0MS0zQkZEM0FEMUFDRDEifQ',
  '0QulmnGvM_NaWTgHU-oBVBePutmre4oAUwoppPhBfmE'
].join('.');
const PORT  = 8742;
const TTL   = 5 * 60 * 1000; // 5 min cache

/* ── In-memory cache with in-flight dedup ───────────────── */
const _cache    = new Map();
const _inflight = new Map(); // key → Promise<rows>

function cacheGet(key) {
  const e = _cache.get(key);
  if (!e) return null;
  if (Date.now() - e.ts > TTL) { _cache.delete(key); return null; }
  return e.rows;
}

function cacheSet(key, rows) {
  _cache.set(key, { rows, ts: Date.now() });
}

// Returns rows from cache, or waits for an in-flight fetch, or starts one
async function cacheOrFetch(key, fetcher) {
  const cached = cacheGet(key);
  if (cached) return cached;
  if (_inflight.has(key)) return _inflight.get(key);
  const p = fetcher().then(rows => {
    cacheSet(key, rows);
    _inflight.delete(key);
    return rows;
  }).catch(e => {
    _inflight.delete(key);
    throw e;
  });
  _inflight.set(key, p);
  return p;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'apikey, authorization, accept-profile, prefer, content-type',
  'Access-Control-Expose-Headers': 'Content-Range, Range-Unit',
  'Content-Type': 'application/json',
};

/* ── Fetch from EYE ─────────────────────────────────────── */
function eyeFetch(path) {
  return new Promise((resolve, reject) => {
    const opts = url.parse(EYE_BASE + path);
    opts.headers = { 'Authorization': 'Bearer ' + TOKEN };
    http.get(opts, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch { reject(new Error('EYE parse error: ' + body.slice(0, 100))); }
      });
    }).on('error', reject);
  });
}

/* ── Field mapping ──────────────────────────────────────── */
function mapPalet(r) {
  return {
    temporada:       r.temporada,
    folio_palet:     r.folioPalet,
    fecha_empaque:   r.fechaEmpaque,
    agricultor:      r.agricultor,
    lote:            r.lote,
    cve_producto:    r.cveProducto || null,
    producto:        r.producto,
    grupo_cultivo:   r.grupoCultivo,
    cultivo:         r.cultivo,
    color:           r.color,
    etiqueta:        r.etiqueta,
    calidad:         r.calidad,
    envase:          r.envase,
    tamano:          r.tamaño || r.tamano,
    gaseado:         r.gaseado,
    fecha_embarque:  r.fechaEmbarque,
    estado:          r.estado,
    precio:          r.precio,
    peso:            r.peso,
    bultos:          r.bultos,
  };
}

function mapAcarreo(r) {
  const detalles = (r.detalles || []).map(d => ({
    caseta:           d.caseta,
    variedad:         d.variedad,
    cultivo:          d.cultivo,
    color:            d.color,
    cantidad:         d.cantidad,
    kilos:            d.cantidad * (d.pesoPromedio || 0),
    peso_promedio:    d.pesoPromedio,
    tipo_envase:      d.tipoEnvase,
    mayordomo:        d.mayordomo,
  }));
  return {
    folio_remision_hortalizas: r.folioRemisionHortalizas,
    fecha:            r.fecha,
    temporada:        r.temporada,
    linea_transporte: r.lineaTransporte,
    tipo_vehiculo:    r.tipoVehiculo,
    vehiculo:         r.vehiculo,
    operador:         r.operador,
    lote:             r.lote,
    tina:             r.tina,
    hora_llegada_campo:    r.horaLlegadaCampo,
    hora_salida_campo:     r.horaSalidaCampo,
    hora_llegada_empaque:  r.horaLlegadaEmpaque,
    peso_bruto:       r.pesoBruto,
    tara:             r.tara,
    detalles,
  };
}

/* ── Parse PostgREST-style date filters ─────────────────── */
function parseDates(q) {
  // Supabase sends: fecha_empaque=gte.2025-12-01&fecha_empaque=lte.2026-05-11
  let from, to;
  for (const [k, v] of Object.entries(q)) {
    if (typeof v === 'string') {
      if (v.startsWith('gte.')) from = v.slice(4).split('T')[0];
      if (v.startsWith('lte.')) to   = v.slice(4).split('T')[0];
    } else if (Array.isArray(v)) {
      for (const x of v) {
        if (x.startsWith('gte.')) from = x.slice(4).split('T')[0];
        if (x.startsWith('lte.')) to   = x.slice(4).split('T')[0];
      }
    }
  }
  if (!from) { const d = new Date(); from = d.toISOString().split('T')[0]; }
  if (!to)   to = from;
  return { from, to };
}

/* ── Server ─────────────────────────────────────────────── */
const server = http.createServer(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS); res.end(); return;
  }

  const parsed  = url.parse(req.url, true);
  const path    = parsed.pathname;
  const q       = parsed.query;

  const limit  = q.limit  ? parseInt(q.limit)  : null;
  const offset = q.offset ? parseInt(q.offset) : 0;

  function page(allRows) {
    const total = allRows.length;
    const rows  = limit !== null ? allRows.slice(offset, offset + limit) : allRows;
    const lo    = rows.length ? offset : 0;
    const hi    = rows.length ? offset + rows.length - 1 : 0;
    const body  = JSON.stringify(rows);
    res.writeHead(206, {
      ...CORS,
      'Content-Range': `${lo}-${hi}/${total}`,
    });
    res.end(body);
  }

  function send(data, total) {
    const body = JSON.stringify(data);
    res.writeHead(206, {
      ...CORS,
      'Content-Range': `0-${Math.max(data.length-1,0)}/${total ?? data.length}`,
    });
    res.end(body);
  }

  function err(msg) {
    res.writeHead(500, CORS);
    res.end(JSON.stringify({ error: msg }));
  }

  try {
    if (path === '/vw_palets') {
      const { from, to } = parseDates(q);
      const key  = `palets:${from}:${to}`;
      const rows = await cacheOrFetch(key, async () => {
        const raw = await eyeFetch(`/api/eye/v1/Palet?FechaInicial=${from}&FechaFinal=${to}`);
        return (Array.isArray(raw) ? raw : []).map(mapPalet);
      });
      page(rows);

    } else if (path === '/vw_acarreos') {
      const { from, to } = parseDates(q);
      const key  = `acarreos:${from}:${to}`;
      const rows = await cacheOrFetch(key, async () => {
        const raw = await eyeFetch(`/api/eye/v1/Acarreo?FechaInicial=${from}&FechaFinal=${to}`);
        return (Array.isArray(raw) ? raw : []).map(mapAcarreo);
      });
      page(rows);

    } else {
      res.writeHead(404, CORS); res.end(JSON.stringify({ error: 'not found' }));
    }
  } catch (e) {
    console.error(e.message);
    err(e.message);
  }
});

server.listen(PORT, () => {
  console.log(`EYE proxy corriendo en http://localhost:${PORT}`);
});
