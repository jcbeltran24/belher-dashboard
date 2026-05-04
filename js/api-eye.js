/* ── EYE API Integration · Belher Dashboard ─────────────────────────────────
   Fetches báscula (Acarreo) and producto empacado (Palet) from EYE system,
   merges live data into window.BELHER before the dashboard renders.

   Flow:
     1. On page load  → applyStored() reads today's cached data from localStorage
                        and patches window.BELHER before the render script runs.
     2. Button click  → refreshFromEYE() fetches fresh data → stores → reloads.
   ──────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var CFG = {
    base:       'https://spring-band-bf06.juancarlos-50b.workers.dev',
    token:      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOiJlYjZiNWY4YS0yN2U2LTRhZDAtODMwYy05MDRlNTBmOGRhNTUiLCJlbWFpbCI6IkRhc2hib2FyZEBHTUFJTC5DT00iLCJzdWIiOiJEYXNoYm9hcmRAR01BSUwuQ09NIiwiQ29tcGFueUlkIjoiMGUwM2EyYTctYjQ4Zi00NjNlLWIzNDctMTQ0NzhiZDc5YWE4IiwiRW1wbG95ZWVJZCI6IiIsImp0aSI6ImFkNWZmZThhLTU3MDgtNDhjMy1iYTU4LTVhOWU1ZjlhYzk0MCIsInJvbGUiOiJFeHRlcm5hbEN1c3RvbWVyIiwibmJmIjoxNzc3NTg4NzM0LCJleHAiOjI1MzQ0NTI3MzQsImlhdCI6MTc3NzU4ODczNCwiaXNzIjoiOEU2MkEzMjgtRUZCRS00QkM2LTg3OUItNzBFNEMwMURDNTQ4LUNENDhENkU0LTQwMTMtNEJFNy1CNzhFLTYxMjc4Nzk0RTQ5NyIsImF1ZCI6IkQxRUUxRjA2LTE0RkEtNDY5QS1BQ0U4LTFGMjM2NDVBNzk2Mi1FMjk5ODhDMi0zODBBLTQxNkQtODE0MS0zQkZEM0FEMUFDRDEifQ.0QulmnGvM_NaWTgHU-oBVBePutmre4oAUwoppPhBfmE',
    storageKey: 'belher_eye_v2'
  };

  /* ── Date helpers ─────────────────────────────────────────── */
  function fmtISO(d) { return d.toISOString().split('T')[0]; }
  function fmtDD(d) {
    return ('0'+d.getDate()).slice(-2) + '/' +
           ('0'+(d.getMonth()+1)).slice(-2) + '/' +
           d.getFullYear();
  }
  function isoToDD(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    return fmtDD(d);
  }
  function isoToShort(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    return ('0'+d.getDate()).slice(-2) + '/' + ('0'+(d.getMonth()+1)).slice(-2);
  }
  function todayISO()     { return fmtISO(new Date()); }
  function yesterdayISO() { return fmtISO(new Date(Date.now() - 86400000)); }

  /* ── Network ──────────────────────────────────────────────── */
  function eyeFetch(path) {
    return fetch(CFG.base + path, {
      headers: { 'Authorization': 'Bearer ' + CFG.token }
    }).then(function (r) {
      if (!r.ok) throw new Error('EYE ' + r.status + ' · ' + path);
      return r.json();
    });
  }

  function fetchBoth(fi, ff) {
    var qs = '?FechaInicial=' + fi + '&FechaFinal=' + ff;
    return Promise.all([
      eyeFetch('/api/eye/v1/Acarreo' + qs),
      eyeFetch('/api/eye/v1/Palet'   + qs)
    ]).then(function (results) {
      return { acarreo: results[0], palet: results[1] };
    });
  }

  /* ── Parse Acarreo → bascula + inbound quality ─────────────
     Acarreo = remisiones from field to packing house (inbound)
     Each remisión has: fecha, lote, detalles[].cultivo,
                        inbound[].calidades / daños / merma
  ─────────────────────────────────────────────────────────── */
  function parseAcarreo(rows) {
    if (!rows || !rows.length) return { bascula: [], inbound: [] };

    /* ── Báscula: group by date DD/MM, collect unique products ── */
    var byDate = {};
    rows.forEach(function (r) {
      var short = isoToShort(r.fecha);
      if (!byDate[short]) byDate[short] = { fecha: short, prods: new Set() };
      (r.detalles || []).forEach(function (det) {
        var p = cultToProduct(det.cultivo);
        if (p) byDate[short].prods.add(p);
      });
    });
    var bascula = Object.values(byDate)
      .sort(function (a, b) { return sortShort(a.fecha, b.fecha); })
      .map(function (e) { return { fecha: e.fecha, productos: Array.from(e.prods) }; });

    /* ── Inbound quality: aggregate by variedad across all inbound records ── */
    var varMap = {};
    rows.forEach(function (r) {
      (r.inbound || []).forEach(function (ib) {
        var key = ib.variedad || 'GEN';
        if (!varMap[key]) {
          varMap[key] = {
            variedad: key, cultivo: ib.caseta || '',
            totalFrutos: 0, primera: 0, segunda: 0, tercera: 0,
            mermaArr: [], daños: {}, temperaturas: []
          };
        }
        var v = varMap[key];
        v.totalFrutos += ib.totalFrutos || 0;
        (ib.calidades || []).forEach(function (c) {
          var cal = (c.calidad || '').toUpperCase();
          if (cal === 'PRIMERA') v.primera += c.cantidad || 0;
          else if (cal === 'SEGUNDA') v.segunda += c.cantidad || 0;
          else if (cal === 'TERCERA') v.tercera += c.cantidad || 0;
        });
        if (ib.merma != null) v.mermaArr.push(ib.merma);
        if (ib.temperaturaFruto != null) v.temperaturas.push(ib.temperaturaFruto);
        (ib.daños || []).forEach(function (d) {
          v.daños[d.daño] = (v.daños[d.daño] || 0) + (d.cantidad || 0);
        });
      });
    });

    var inbound = Object.values(varMap).map(function (v) {
      var tot = v.primera + v.segunda + v.tercera;
      var merma = v.mermaArr.length
        ? round1(v.mermaArr.reduce(function(a,b){return a+b;},0) / v.mermaArr.length)
        : 0;
      return {
        variedad:    v.variedad,
        totalFrutos: v.totalFrutos,
        primera:  tot ? round1(v.primera / tot * 100) : 0,
        segunda:  tot ? round1(v.segunda / tot * 100) : 0,
        tercera:  tot ? round1(v.tercera / tot * 100) : 0,
        merma:    merma,
        tempProm: v.temperaturas.length ? round1(avg(v.temperaturas)) : null,
        daños:    v.daños
      };
    });

    return { bascula: bascula, inbound: inbound };
  }

  /* ── Parse Palet → outbound quality per etiqueta + grupoCultivo ─
     Palet = packed pallets ready for shipment.
     Groups by etiqueta (CALAVO / DON MEMO) + grupoCultivo (TOMATE BOLA / ROMA)
     Counts bultos by calidad to get percentages.
  ─────────────────────────────────────────────────────────────── */
  function parsePalet(rows) {
    if (!rows || !rows.length) return null;

    /* Latest pack date */
    var dates = rows.map(function(r){ return r.fechaEmpaque; }).filter(Boolean).sort();
    var latestISO = dates[dates.length - 1];
    var latestDD  = isoToDD(latestISO);

    /* Filter to latest date only */
    var latest = rows.filter(function(r){ return r.fechaEmpaque === latestISO; });

    /* Group by etiqueta + grupoCultivo */
    var groups = {};
    latest.forEach(function (p) {
      var etq  = (p.etiqueta    || 'SIN ETQ').toUpperCase();
      var grp  = (p.grupoCultivo|| 'TOMATE').toUpperCase();
      var key  = etq + '|' + grp;
      if (!groups[key]) groups[key] = { etq:etq, grp:grp, primera:0, segunda:0, tercera:0, pesoTotal:0, bultos:0 };
      var g   = groups[key];
      var cal = (p.calidad || '').toUpperCase();
      var b   = p.bultos || 0;
      if (cal === 'PRIMERA')  g.primera += b;
      else if (cal === 'SEGUNDA') g.segunda += b;
      else if (cal === 'TERCERA') g.tercera += b;
      g.bultos    += b;
      g.pesoTotal += (p.peso || 0) * b;
    });

    var variedades = Object.values(groups).map(function (g) {
      var tot = g.primera + g.segunda + g.tercera;
      var pesoProm = g.bultos ? round2(g.pesoTotal / g.bultos) : null;
      var etqTitle = titleCase(g.etq);
      var grpNombre = grpToNombre(g.grp);
      return {
        nombre:   grpNombre + ' ' + etqTitle,
        etiqueta: etqTitle,
        canal:    'exportacion',
        primera:  tot ? round1(g.primera / tot * 100) : 0,
        segunda:  tot ? round1(g.segunda / tot * 100) : 0,
        tercera:  tot ? round1(g.tercera / tot * 100) : 0,
        merma:    null,   /* supplied from Acarreo when available */
        peso:     pesoProm,
        bultos:   g.bultos,
        alerta:   false
      };
    });

    return { fecha: latestDD, variedades: variedades };
  }

  /* ── Merge into window.BELHER ─────────────────────────────── */
  function mergeIntoBELHER(eyeData) {
    var D = window.BELHER;
    if (!D || !eyeData) return;

    /* 1 · operaciones.bascula ── keep last 8 days */
    if (eyeData.bascula && eyeData.bascula.length) {
      var existing  = (D.operaciones && D.operaciones.bascula) || [];
      var merged    = eyeData.bascula.slice(); // eye data first (newer)
      existing.forEach(function (e) {
        if (!merged.find(function(m){ return m.fecha === e.fecha; }))
          merged.push(e);
      });
      merged.sort(function(a,b){ return sortShort(a.fecha, b.fecha); });
      D.operaciones = D.operaciones || {};
      D.operaciones.bascula = merged.slice(-8);
    }

    /* 2 · calidad.ultimoOutbound ── from Palet (outbound packed) */
    if (eyeData.outbound && eyeData.outbound.variedades && eyeData.outbound.variedades.length) {
      var outb = eyeData.outbound;

      /* Cross-reference merma from Acarreo inbound by variedad name hint */
      if (eyeData.inbound && eyeData.inbound.length) {
        outb.variedades.forEach(function (ov) {
          var match = eyeData.inbound.find(function(ib){
            return grpHints(ov.nombre, ib.variedad);
          });
          if (match) {
            ov.merma  = match.merma;
            ov.alerta = match.merma > 4;
          }
        });
      }

      var prevOut = D.calidad && D.calidad.ultimoOutbound;
      D.calidad = D.calidad || {};
      D.calidad.ultimoOutbound = {
        fecha:      outb.fecha,
        variedades: outb.variedades,
        anterior:   prevOut ? { fecha: prevOut.fecha, variedades: prevOut.variedades } : null,
        ultimoInbound: (prevOut && prevOut.ultimoInbound) || null,
        fuente:     'EYE Live · ' + outb.fecha
      };
    }

    /* 3 · calidad.ultimoOutbound.ultimoInbound ── from Acarreo */
    if (eyeData.inbound && eyeData.inbound.length) {
      D.calidad = D.calidad || {};
      D.calidad.ultimoOutbound = D.calidad.ultimoOutbound || {};
      var todayDD = fmtDD(new Date());
      D.calidad.ultimoOutbound.ultimoInbound = {
        fecha:      todayDD,
        variedades: eyeData.inbound.map(function (ib) {
          return {
            nombre:  'Inbound · Var.' + ib.variedad,
            etiqueta:'Inbound',
            canal:   'interno',
            primera: ib.primera,
            segunda: ib.segunda,
            tercera: ib.tercera,
            merma:   ib.merma,
            alerta:  ib.merma > 4
          };
        }),
        fuente: 'EYE Live · Acarreo'
      };
    }

    /* 4 · mark source flag (used by UI badge) */
    D._eyeLive = {
      fetched: eyeData.fetched,
      fi:      eyeData.fi,
      ff:      eyeData.ff
    };
  }

  /* ── LocalStorage cache ───────────────────────────────────── */
  function storeEYE(eyeData) {
    try { localStorage.setItem(CFG.storageKey, JSON.stringify(eyeData)); } catch(e){}
  }

  function loadEYE() {
    try {
      var raw = localStorage.getItem(CFG.storageKey);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (d.fecha !== todayISO()) return null; // stale — different day
      return d;
    } catch(e) { return null; }
  }

  /* ── Public API ───────────────────────────────────────────── */
  window.EYE = {

    /** Fetch fresh data from EYE API, store, and return */
    fetch: function (fi, ff) {
      fi = fi || yesterdayISO();
      ff = ff || todayISO();
      return fetchBoth(fi, ff).then(function (raw) {
        var parsed   = parseAcarreo(raw.acarreo || []);
        var outbound = parsePalet(raw.palet || []);
        var eyeData  = {
          fi:       fi,
          ff:       ff,
          fecha:    todayISO(),
          fetched:  new Date().toISOString(),
          bascula:  parsed.bascula,
          inbound:  parsed.inbound,
          outbound: outbound
        };
        storeEYE(eyeData);
        return eyeData;
      });
    },

    /** Apply today's stored data to window.BELHER — returns true if applied */
    applyStored: function () {
      var d = loadEYE();
      if (!d) return false;
      mergeIntoBELHER(d);
      return true;
    },

    /** Clear stored cache */
    clear: function () {
      try { localStorage.removeItem(CFG.storageKey); } catch(e){}
    },

    /** Get stored metadata for status badge */
    status: function () {
      var d = loadEYE();
      if (!d) return null;
      return { fetched: d.fetched, fi: d.fi, ff: d.ff };
    }
  };

  /* ── Apply cached data immediately (before render script) ─── */
  var eyeApplied = window.EYE.applyStored();
  if (eyeApplied) {
    var s = window.EYE.status();
    if (s) console.log('[EYE] Cache aplicado · ' + s.fi + ' → ' + s.ff +
                       ' · fetch: ' + s.fetched.slice(11,16) + ' UTC');
  }

  /* ── Button handler ───────────────────────────────────────── */
  window.refreshFromEYE = function () {
    var btn  = document.getElementById('eyeBtn');
    var txt  = btn && btn.querySelector('.eye-txt');
    var spin = btn && btn.querySelector('.eye-spin');
    if (!btn) return;

    btn.disabled = true;
    if (spin) spin.style.display = 'inline-block';
    if (txt)  txt.textContent    = 'Cargando…';

    window.EYE.fetch().then(function () {
      location.reload();
    }).catch(function (err) {
      console.error('[EYE] Error:', err);
      if (spin) spin.style.display = 'none';
      if (txt)  txt.textContent = 'Error — reintenta';
      btn.style.borderColor = 'var(--red2)';
      btn.style.color       = 'var(--red2)';
      setTimeout(function () {
        if (txt)  txt.textContent = 'EYE';
        btn.style.borderColor = '';
        btn.style.color       = '';
        btn.disabled          = false;
      }, 4000);
    });
  };

  /* ── Utility ──────────────────────────────────────────────── */
  function cultToProduct(c) {
    c = (c || '').toUpperCase();
    if (c.includes('ROUND') || c.includes('BOLA'))       return 'Tomate Bola';
    if (c.includes('ROMA'))                               return 'Tomate Roma';
    if (c.includes('GRAPE'))                              return 'Grape Tomato';
    if (c.includes('LIMON') || c.includes('LIME'))        return 'Limón Persa';
    if (c.includes('CHILE') || c.includes('BELL') || c.includes('JAL') || c.includes('PEPPER')) return 'Chile';
    return c ? titleCase(c) : null;
  }

  function grpToNombre(g) {
    g = (g || '').toUpperCase();
    if (g.includes('BOLA') || g.includes('ROUND')) return 'Bola';
    if (g.includes('ROMA'))                        return 'Roma';
    if (g.includes('GRAPE'))                       return 'Grape';
    return titleCase(g);
  }

  /* Loose match between palet outbound name and acarreo variedad */
  function grpHints(outbNombre, ibVariedad) {
    var o = (outbNombre || '').toUpperCase();
    var v = String(ibVariedad || '');
    /* If variedad is numeric we can't match by name, skip cross-ref */
    if (/^\d+$/.test(v)) return false;
    return o.includes(v.toUpperCase());
  }

  function titleCase(s) {
    return (s||'').toLowerCase().replace(/(?:^|\s)\w/g, function(l){ return l.toUpperCase(); });
  }

  function sortShort(a, b) {
    /* Sort DD/MM strings as dates (assume same year) */
    var pa = a.split('/'), pb = b.split('/');
    var da = new Date(2026, +pa[1]-1, +pa[0]);
    var db = new Date(2026, +pb[1]-1, +pb[0]);
    return da - db;
  }

  function avg(arr) { return arr.reduce(function(a,b){return a+b;},0) / arr.length; }
  function round1(n) { return Math.round(n * 10) / 10; }
  function round2(n) { return Math.round(n * 100) / 100; }

})();
