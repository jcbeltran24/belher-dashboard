(function () {
  'use strict';

  var D = window.BELHER;
  var chartsInit = {};

  /* ── Fecha dinámica: siempre muestra el día de hoy ── */
  (function actualizarFechaHoy() {
    var DIAS  = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    var MESES = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var hoy   = new Date();
    var dia   = DIAS[hoy.getDay()];
    var d     = hoy.getDate();
    var mes   = MESES[hoy.getMonth()];
    var anio  = hoy.getFullYear();

    // Semana de temporada: WK01 arranca el 29-Dic-2025 (lunes)
    var wkBase = new Date('2025-12-29');
    var diffDias = Math.floor((hoy - wkBase) / 86400000);
    var wkNum  = Math.max(1, Math.floor(diffDias / 7) + 1);

    // Hora actual para "actualizado"
    var hh = String(hoy.getHours()).padStart(2,'0');
    var mm = String(hoy.getMinutes()).padStart(2,'0');
    var dd = String(d).padStart(2,'0');
    var mo = String(hoy.getMonth()+1).padStart(2,'0');

    D.meta.fecha      = dia + ' ' + d + ' ' + mes + ' ' + anio;
    D.meta.semana     = 'WK ' + wkNum;
    D.meta.actualizado = dd + '/' + mo + '/' + anio + ' · ' + hh + ':' + mm;
  })();

  /* ── Chart.js global defaults ── */
  Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
  Chart.defaults.font.size   = 11;
  Chart.defaults.color       = '#9ca3af';
  Chart.defaults.animation   = { duration: 700, easing: 'easeInOutQuart' };

  Chart.defaults.plugins.legend.labels.boxWidth       = 8;
  Chart.defaults.plugins.legend.labels.boxHeight      = 8;
  Chart.defaults.plugins.legend.labels.padding        = 16;
  Chart.defaults.plugins.legend.labels.usePointStyle  = true;
  Chart.defaults.plugins.legend.labels.pointStyle     = 'circle';
  Chart.defaults.plugins.legend.labels.color          = '#6b7280';
  Chart.defaults.plugins.legend.labels.font           = { size: 11, weight: '600' };

  Chart.defaults.plugins.tooltip.backgroundColor  = 'rgba(12,33,23,.92)';
  Chart.defaults.plugins.tooltip.titleColor       = 'rgba(255,255,255,.65)';
  Chart.defaults.plugins.tooltip.bodyColor        = '#fff';
  Chart.defaults.plugins.tooltip.borderColor      = 'rgba(255,255,255,.1)';
  Chart.defaults.plugins.tooltip.borderWidth      = 1;
  Chart.defaults.plugins.tooltip.padding          = { x: 13, y: 10 };
  Chart.defaults.plugins.tooltip.cornerRadius     = 12;
  Chart.defaults.plugins.tooltip.titleFont        = { weight: '700', size: 11 };
  Chart.defaults.plugins.tooltip.bodyFont         = { size: 12, weight: '500' };
  Chart.defaults.plugins.tooltip.boxPadding       = 5;

  Chart.defaults.interaction.mode        = 'index';
  Chart.defaults.interaction.intersect   = false;

  Chart.defaults.scale.grid.color        = 'rgba(0,0,0,.045)';
  Chart.defaults.scale.grid.drawBorder   = false;
  Chart.defaults.scale.ticks.padding     = 6;
  Chart.defaults.scale.ticks.font        = { size: 10.5 };

  /* ── Count-up animation ── */
  function countUp(el, end, duration, prefix, suffix) {
    if (!el || isNaN(end)) return;
    prefix = prefix || ''; suffix = suffix || '';
    var start = 0, startTime = null;
    var isNeg = end < 0;
    var absEnd = Math.abs(end);
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      var cur = Math.round(absEnd * ease);
      el.textContent = prefix + (isNeg ? '-' : '') + cur.toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Utils ── */
  var fmt = function (n, dec) {
    if (n == null) return '—';
    dec = dec != null ? dec : 0;
    return '$' + Number(n).toLocaleString('en-US', {minimumFractionDigits: dec, maximumFractionDigits: dec});
  };
  var fmtN = function (n, dec) {
    if (n == null) return '—';
    dec = dec != null ? dec : 0;
    return Number(n).toLocaleString('en-US', {minimumFractionDigits: dec, maximumFractionDigits: dec});
  };
  var pct = function (n, dec) {
    if (n == null) return '—';
    return Number(n).toFixed(dec != null ? dec : 1) + '%';
  };

  /* ── Tab navigation helper ── */
  var navigateToTab = function (tabId) {
    var btn = document.querySelector('#tabNav button[data-tab="' + tabId + '"]');
    if (btn) btn.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Global click handler for data-nav-tab elements */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-nav-tab]');
    if (el) {
      e.preventDefault();
      navigateToTab(el.dataset.navTab);
      if (el.dataset.navTarget) {
        setTimeout(function () {
          var t = document.getElementById(el.dataset.navTarget);
          if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 320);
      }
    }
  });

  /* ── Context Bar (fin-bar) ── */
  (function () {
    var cv  = D.calavo;
    var rev = D.revenue || {};
    var dd  = D.deudas  || {};
    var dc  = cv.deudaCalavo || {};

    // Cajas facturadas export (settle confirmed)
    var cajasExp = 0;
    D.calavo.pagos.forEach(function(p){ cajasExp += p.cajas || 0; });

    // Nacional cajas
    var cajasNac = 0;
    var tc = (D.tomate && D.tomate.ventas) || {};
    if (tc.nacional) tc.nacional.forEach(function(s){ cajasNac += s.cajas || 0; });

    document.getElementById('fbWeek').textContent  = D.meta.semana + ' · HOY';
    document.getElementById('fbFecha').textContent = D.meta.fecha;

    // Venta Bruta Calavo
    document.getElementById('fbVBCalavoVal').textContent = fmt(cv.revenueTotal || rev.fob || 0);
    document.getElementById('fbVBCalavoSub').textContent = fmtN(cajasExp) + ' cajas facturadas';

    // Venta Bruta Nacional
    document.getElementById('fbVBNacionalVal').textContent = fmt(rev.nacional || 0);
    document.getElementById('fbVBNacionalSub').textContent = fmtN(cajasNac) + ' cajas';

    // Venta Bruta Total
    var vbCalavo  = cv.revenueTotal || rev.fob || 0;
    var vbNac     = rev.nacional || 0;
    document.getElementById('fbVBTotalVal').textContent = fmt(vbCalavo + vbNac);
    document.getElementById('fbVBTotalSub').textContent = fmtN(cajasExp + cajasNac) + ' cajas totales';

    // Deuda Total
    var deudaTotal = (dd.resumen && (dd.resumen.total || dd.totalGeneral)) || dd.totalGeneral || 0;
    document.getElementById('fbDeudaVal').textContent = fmt(deudaTotal);
    document.getElementById('fbDeudaSub').textContent = 'Calavo · Bancos · Prov. · SAT';

    // Pendiente a liquidar Calavo
    var pend = dc.pendiente || 0;
    var pct  = dc.total ? Math.round((dc.amortizadoWk15 || 0) / dc.total * 100) : 0;
    document.getElementById('fbPendienteVal').textContent = fmt(pend);
    document.getElementById('fbPendienteSub').textContent = pct + '% amortizado · cruce est. ' + (dc.cruceEstimado || 'WK18');
  })();

  /* ── Footer ── */
  document.getElementById('footerEl').innerHTML =
    '<span>Agrícola Belher</span> · Centro de Inteligencia · GC 2025–2026 · ' +
    D.meta.fecha + ' · Act: ' + D.meta.actualizado +
    ' · Fuentes: Gmail · Calavo · Báscula · Calidad · Corbel Seeds';

  /* ── Tabs ── */
  var tabBtns   = document.querySelectorAll('#tabNav button');
  var tabPanels = document.querySelectorAll('.tab-panel');
  function activateTab(tabId) {
    tabBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    tabPanels.forEach(function (p) { p.classList.remove('active'); });
    var btn = document.querySelector('#tabNav button[data-tab="' + tabId + '"]');
    if (!btn) return;
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.scrollIntoView({ inline:'center', block:'nearest', behavior:'smooth' });
    document.getElementById('tab-' + tabId).classList.add('active');
    /* setTimeout: ensure browser finishes painting before Chart.js measures canvas */
    setTimeout(function(){ initChartsForTab(tabId); }, 60);
    sessionStorage.setItem('belher_tab', tabId);
  }
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { activateTab(btn.dataset.tab); });
  });
  /* Restore last active tab on load/refresh */
  var savedTab = sessionStorage.getItem('belher_tab');
  if (savedTab && document.getElementById('tab-' + savedTab)) activateTab(savedTab);
  else setTimeout(function(){ initChartsForTab('ejecutivo'); }, 60);

  /* ════════════════ HOY ════════════════ */
  function renderHoy() {
    var ebtd = D.ebitda;
    var cv   = D.calavo;
    var rev  = D.revenue || {};

    var avgMerma = D.calidad.historico.length
      ? D.calidad.historico[D.calidad.historico.length - 1].mermaPromedio : 0;
    var avgPrima = D.calidad.historico.length
      ? D.calidad.historico[D.calidad.historico.length - 1].primaPromedio : 0;
    var cargas = D.operaciones.embarques.reduce(function (s, e) { return s + (e.cargas || 1); }, 0);
    var semCount = 0;
    D.calavo.pagos.forEach(function (p) { if (p.pago) semCount++; });
    var cajasYtd = 0;
    D.calavo.pagos.forEach(function (p) { if (p.cajas) cajasYtd += p.cajas; });

    var revTotal = rev.total || 0;
    var revFob   = rev.fob   || 0;
    var revNac   = rev.nacional || 0;
    var calavoPct = revTotal ? (revFob / revTotal * 100).toFixed(0) : 0;
    var nacPct    = revTotal ? (revNac / revTotal * 100).toFixed(0) : 0;

    var ventaNeta   = cv.ventaNeta || cv.neto || 0;
    var saldoActual = cv.saldoActual != null ? cv.saldoActual : cv.neto;
    var saldoNeg    = saldoActual < 0;

    /* ── HERO CARD ── */
    document.getElementById('hoyHero').innerHTML =
      '<div class="hoy-hero">' +
        '<div class="hoy-hero-top">' +
          '<div>' +
            '<div class="hoy-hero-lbl">Revenue Total · Temporada 2025–2026</div>' +
            '<div class="hoy-hero-num">' + fmt(revTotal) + '</div>' +
          '</div>' +
          '<div class="hoy-hero-badge">' +
            '<div class="hbw">' + D.meta.semana + '</div>' +
            '<div class="hbd">' + D.meta.fecha + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="hoy-split-track">' +
          '<div class="hoy-split-calavo" style="width:' + calavoPct + '%"></div>' +
          '<div class="hoy-split-nac"    style="width:' + nacPct    + '%"></div>' +
        '</div>' +
        '<div class="hoy-hero-legs">' +
          '<div class="hoy-leg">' +
            '<div class="hoy-leg-dot" style="background:#22c55e"></div>' +
            '<div>' +
              '<div class="hoy-leg-name">Calavo Export</div>' +
              '<div class="hoy-leg-val">' + fmt(revFob) + ' <span class="hoy-leg-pct">(' + calavoPct + '%)</span></div>' +
            '</div>' +
          '</div>' +
          '<div class="hoy-leg">' +
            '<div class="hoy-leg-dot" style="background:#60a5fa"></div>' +
            '<div>' +
              '<div class="hoy-leg-name">Nacional</div>' +
              '<div class="hoy-leg-val">' + fmt(revNac) + ' <span class="hoy-leg-pct">(' + nacPct + '%)</span></div>' +
            '</div>' +
          '</div>' +
          '<div class="hoy-leg" style="margin-left:auto">' +
            '<div>' +
              '<div class="hoy-leg-netl">Venta Neta Calavo</div>' +
              '<div class="hoy-leg-netv">' + fmt(ventaNeta) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* ── KPI SCORECARD ── */
    var ebitdaMesOK  = ebtd.mes.actual >= ebtd.mes.budget;
    var ebitdaMesVar = ebtd.mes.actual - ebtd.mes.budget;
    var ebitdaPct    = ebtd.mes.budget ? Math.min(ebtd.mes.actual / ebtd.mes.budget * 100, 120) : 0;
    var saldoBarPct  = revFob ? Math.min(Math.abs(ventaNeta) / revFob * 100, 100) : 0;

    function hoyKpi(lbl, val, sub, color, barPct, tagTxt, tagColor, navTab, navTarget) {
      var navAttrs = navTab
        ? ' data-nav-tab="' + navTab + '"' + (navTarget ? ' data-nav-target="' + navTarget + '"' : '') + ' class="hoy-kpi nav-card" title="Ver en detalle →"'
        : ' class="hoy-kpi"';
      return '<div' + navAttrs + '>' +
        '<div class="hoy-kpi-stripe" style="background:' + color + '"></div>' +
        '<div class="hoy-kpi-lbl">' + lbl + '</div>' +
        '<div class="hoy-kpi-val" style="color:' + color + '">' + val + '</div>' +
        '<div class="hoy-kpi-sub">' + sub + '</div>' +
        '<div class="hoy-kpi-bar"><div class="hoy-kpi-bar-fill" style="width:' + barPct + '%;background:' + color + '"></div></div>' +
        '<span class="hoy-kpi-tag" style="background:' + color + '22;color:' + color + '">' + tagTxt + '</span>' +
      '</div>';
    }

    document.getElementById('hoyKpis').innerHTML =
      hoyKpi('Revenue Bruto · WK01–WK12', fmt(revTotal),
        'Calavo ' + fmt(revFob) + ' · Nac ' + fmt(revNac),
        '#16a34a', Math.min(revFob / (revTotal || 1) * 100, 100),
        '↑ CF Leima 22-Mar', '#16a34a', 'optomate') +
      hoyKpi('EBITDA · ' + ebtd.mes.nombre, fmt(ebtd.mes.actual),
        'Budget ' + fmt(ebtd.mes.budget),
        ebitdaMesOK ? '#16a34a' : '#d97706', Math.max(0, ebitdaPct),
        mesPctStr + ' vs budget',
        ebitdaMesOK ? '#16a34a' : '#d97706', 'finanzas') +
      hoyKpi('Venta Neta · Calavo WK12', fmt(ventaNeta),
        'Comisión ' + fmt(cv.comision) + ' · Exp+AD deducidos',
        '#0ea5e9', saldoBarPct,
        'Comisión 12% aplicada', '#0ea5e9', 'finanzas') +
      hoyKpi('Saldo · Due from Calavo', fmt(saldoActual),
        saldoNeg ? 'Calavo ha adelantado más que lo cosechado' : 'Balance a favor de Belher',
        saldoNeg ? '#dc2626' : '#16a34a',
        saldoNeg ? Math.min(Math.abs(saldoActual) / (revFob || 1) * 100, 100) : 80,
        saldoNeg ? '⚠ Due to Calavo' : '✓ A favor de Belher',
        saldoNeg ? '#dc2626' : '#16a34a', 'finanzas');

    /* ── PULSO OPERATIVO ── */
    var lastEmbarque = D.operaciones.embarques[0] || {};
    document.getElementById('hoyPulso').innerHTML =
      '<div class="hoy-pulso-item">' +
        '<div class="hoy-pulso-icon" style="background:#16a34a18">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 19v2M8 19v2M2 10h20"/></svg>' +
        '</div>' +
        '<div><div class="hoy-pulso-val" style="color:#16a34a">' + semCount + '</div><div class="hoy-pulso-lbl">Semanas Liquidadas</div></div>' +
      '</div>' +
      '<div class="hoy-pulso-item">' +
        '<div class="hoy-pulso-icon" style="background:#d9770618">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' +
        '</div>' +
        '<div><div class="hoy-pulso-val" style="color:' + (avgMerma > 4 ? '#dc2626' : '#d97706') + '">' + avgMerma.toFixed(1) + '%</div><div class="hoy-pulso-lbl">Merma Promedio</div></div>' +
      '</div>' +
      '<div class="hoy-pulso-item">' +
        '<div class="hoy-pulso-icon" style="background:#0ea5e918">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' +
        '</div>' +
        '<div><div class="hoy-pulso-val" style="color:#0ea5e9">' + avgPrima.toFixed(1) + '%</div><div class="hoy-pulso-lbl">Primera Calidad</div></div>' +
      '</div>' +
      '<div class="hoy-pulso-item">' +
        '<div class="hoy-pulso-icon" style="background:#8b5cf618">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' +
        '</div>' +
        '<div><div class="hoy-pulso-val" style="color:#8b5cf6">' + cargas + '</div><div class="hoy-pulso-lbl">Cargas Exportadas</div></div>' +
      '</div>';

    /* ── EBITDA DONUTS ── */
    var mesOK    = ebtd.mes.actual >= ebtd.mes.budget;
    var mesVar   = ebtd.mes.actual - ebtd.mes.budget;
    var mesVarPct = ebtd.mes.budget ? ((mesVar) / Math.abs(ebtd.mes.budget) * 100) : 0;
    var mesPctStr = (mesVarPct >= 0 ? '+' : '') + mesVarPct.toFixed(1) + '%';
    var ytdVar    = ebtd.ytd.actual - ebtd.ytd.budget;
    var ytdBetter = ytdVar >= 0;
    var ytdVarPct = ebtd.ytd.budget ? (ytdVar / Math.abs(ebtd.ytd.budget) * 100) : 0;
    var ytdVarPctStr = (ytdVarPct >= 0 ? '+' : '') + ytdVarPct.toFixed(1) + '%';
    var ytdSublbl = ytdBetter ? 'vs budget' : 'vs budget';

    /* Budget bar helper */
    function budgetBarRow(actual, budget, yago) {
      var fillPct = budget ? Math.min(actual / budget * 100, 100) : 0;
      var varAmt  = actual - budget;
      var varPct  = budget ? (varAmt / Math.abs(budget) * 100) : 0;
      var isPos   = varAmt >= 0;
      var varStr  = (isPos ? '+' : '') + varPct.toFixed(1) + '%';
      var barColor = isPos ? '#22c55e' : '#ef4444';
      var yoyStr  = '';
      if (yago != null) {
        var yoyPct = yago ? ((actual - yago) / Math.abs(yago) * 100) : 0;
        yoyStr = '<span class="yoy-pill">vs YA: ' + (yoyPct >= 0 ? '+' : '') + yoyPct.toFixed(1) + '%</span>';
      }
      return '<div class="budget-bar-row">' +
        '<div class="budget-bar-meta" style="margin-bottom:2px"><span>vs Presupuesto</span></div>' +
        '<div class="budget-bar-track"><div class="budget-bar-fill" style="width:' + fillPct.toFixed(1) + '%;background:' + barColor + '"></div></div>' +
        '<div class="budget-bar-meta">' +
          '<span>Act: ' + fmt(actual) + ' · Pres: ' + fmt(budget) + '</span>' +
          '<div style="display:flex;gap:5px;align-items:center">' +
            '<span class="budget-pct-pill ' + (isPos ? 'pos' : 'neg') + '">' + varStr + '</span>' +
            yoyStr +
          '</div>' +
        '</div>' +
      '</div>';
    }

    document.getElementById('ebitdaDonuts').innerHTML =
      '<div class="donut-card">' +
        '<div class="donut-card-title">Mes · ' + ebtd.mes.nombre + '</div>' +
        '<div class="donut-canvas-wrap"><canvas id="chartDonutMes"></canvas>' +
          '<div class="donut-center">' +
            '<div class="dc-pct" style="color:' + (mesOK ? 'var(--green2)' : 'var(--red2)') + '">' + mesPctStr + '</div>' +
            '<div class="dc-lbl">vs budget</div>' +
          '</div>' +
        '</div>' +
        '<div class="donut-amount">' + fmt(ebtd.mes.actual) + '</div>' +
        '<div class="donut-sub">' +
          '<span style="color:' + (mesOK ? 'var(--green2)' : 'var(--red2)') + ';font-weight:700">' +
            (mesOK ? '▲ +' : '▼ ') + fmt(Math.abs(mesVar)) + ' vs budget</span><br>' +
          'Budget <strong>' + fmt(ebtd.mes.budget) + '</strong> &nbsp;·&nbsp; Y/A <strong>' + fmt(ebtd.mes.yago) + '</strong>' +
        '</div>' +
        budgetBarRow(ebtd.mes.actual, ebtd.mes.budget, ebtd.mes.yago) +
      '</div>' +
      '<div class="donut-card">' +
        '<div class="donut-card-title">Acumulado · ' + ebtd.ytd.nombre + '</div>' +
        '<div class="donut-canvas-wrap"><canvas id="chartDonutYtd"></canvas>' +
          '<div class="donut-center">' +
            '<div class="dc-pct" style="color:' + (ytdBetter ? 'var(--green2)' : 'var(--red2)') + '">' + ytdVarPctStr + '</div>' +
            '<div class="dc-lbl">vs budget</div>' +
          '</div>' +
        '</div>' +
        '<div class="donut-amount">' + fmt(ebtd.ytd.actual) + '</div>' +
        '<div class="donut-sub">' +
          '<span style="color:' + (ytdBetter ? 'var(--green2)' : 'var(--red2)') + ';font-weight:700">' +
            (ytdBetter ? '▲ +' : '▼ ') + fmt(Math.abs(ytdVar)) + ' vs budget</span><br>' +
          'Budget <strong>' + fmt(ebtd.ytd.budget) + '</strong> &nbsp;·&nbsp; Y/A <strong>' + fmt(ebtd.ytd.yago) + '</strong>' +
        '</div>' +
        budgetBarRow(ebtd.ytd.actual, ebtd.ytd.budget, ebtd.ytd.yago) +
      '</div>';

    renderDonut('chartDonutMes', ebtd.mes.actual, ebtd.mes.budget, mesOK);
    renderDonut('chartDonutYtd', Math.abs(ytdVar), Math.abs(ebtd.ytd.budget) * 0.2, ytdBetter);

    /* ── ALERTS (new hoy-alert style) ── */
    var iconMap = { success: '✓', warning: '!', danger: '✕', info: 'i' };
    document.getElementById('alertasContainer').innerHTML =
      D.alertas.map(function (a) {
        return '<div class="hoy-alert ' + a.nivel + '">' +
          '<div class="hoy-alert-ico">' + (iconMap[a.nivel] || 'i') + '</div>' +
          '<div class="hoy-alert-txt">' + a.texto + '</div>' +
        '</div>';
      }).join('');

    /* ── CORREOS (new hoy-correo style) ── */
    document.getElementById('correosContainer').innerHTML =
      D.correos.map(function (c) {
        return '<div class="hoy-correo">' +
          '<div class="hoy-correo-dot' + (c.leido ? ' leido' : '') + '"></div>' +
          '<div class="hoy-correo-body">' +
            '<div class="hoy-correo-asunto" title="' + c.asunto.replace(/"/g,'&quot;') + '">' + c.asunto + '</div>' +
            '<div class="hoy-correo-de">' + c.de + '</div>' +
          '</div>' +
          '<div class="hoy-correo-hora">' + c.hora + '</div>' +
        '</div>';
      }).join('');

    /* ── WATCHLIST RISKS ── */
    var wl = (D.estrategia && D.estrategia.watchlist) ? D.estrategia.watchlist : [];
    document.getElementById('hoyWatchlist').innerHTML =
      '<div class="hoy-watch-grid">' +
      wl.map(function (w) {
        var isDanger = w.nivel === 'danger';
        return '<div class="hoy-watch-item nivel-' + w.nivel + '">' +
          '<span class="hoy-watch-nivel ' + (isDanger ? 'd' : 'w') + '">' + (isDanger ? 'Riesgo' : 'Atención') + '</span>' +
          '<div class="hoy-watch-title">' + w.titulo + '</div>' +
          '<div class="hoy-watch-action">→ ' + w.accion + '</div>' +
        '</div>';
      }).join('') +
      '</div>';

    /* ── CASH POSITION SUMMARY ── */
    var pagosActual   = (cv.pagos || []).filter(function (p) { return p.estado === 'Actual'; });
    var pagosPendiente= (cv.pagos || []).filter(function (p) { return p.estado === 'Pendiente'; });
    var estimPendiente = pagosActual.length && pagosActual[0].pago
      ? pagosActual[0].pago * pagosPendiente.length : null;
    var saldoColor = saldoNeg ? 'var(--red2)' : 'var(--green2)';
    var hoyCashEl = document.getElementById('hoyCashSummary');
    if (hoyCashEl) hoyCashEl.innerHTML =
      '<div class="hoy-cf-strip">' +
        '<div class="hoy-cf-item">' +
          '<div class="hoy-cf-lbl">Venta Neta · Calavo</div>' +
          '<div class="hoy-cf-val" style="color:var(--green2)">' + fmt(ventaNeta) + '</div>' +
          '<div class="hoy-cf-sub">Después de comisión, AD y Z-code</div>' +
        '</div>' +
        '<div class="hoy-cf-item">' +
          '<div class="hoy-cf-lbl">P&amp;P + Préstamos Recibidos</div>' +
          '<div class="hoy-cf-val" style="color:var(--muted)">' + fmt((cv.pickPack||0) + (cv.prestamo||0) + (cv.capitalTrabajo||0)) + '</div>' +
          '<div class="hoy-cf-sub">Pick &amp; Pack + Préstamo + Capital</div>' +
        '</div>' +
        '<div class="hoy-cf-item">' +
          '<div class="hoy-cf-lbl">Saldo Due from (to) Beltran</div>' +
          '<div class="hoy-cf-val" style="color:' + saldoColor + '">' + fmt(cv.saldoActual || 0) + '</div>' +
          '<div class="hoy-cf-sub">' + (saldoNeg ? 'Calavo ha adelantado más del cosechado' : 'Balance a favor de Belher') + '</div>' +
        '</div>' +
        (pagosPendiente.length ? '<div class="hoy-cf-item">' +
          '<div class="hoy-cf-lbl">Semanas Pendientes</div>' +
          '<div class="hoy-cf-val" style="color:var(--accent2)">' + pagosPendiente.length + '</div>' +
          '<div class="hoy-cf-sub">' + pagosPendiente.map(function(p){return p.sem;}).join(', ') + (estimPendiente ? ' · est. ' + fmt(estimPendiente) : '') + '</div>' +
        '</div>' : '') +
      '</div>';

    /* ── Count-up: hero revenue number ── */
    setTimeout(function () {
      var heroNumEl = document.querySelector('#hoyHero .hoy-hero-num');
      if (heroNumEl && revTotal) countUp(heroNumEl, revTotal, 900, '$');
    }, 80);

    /* ── CDC Line Chart: Total / Trabajadores / Acompañantes ── */
    var cdcWrap = document.getElementById('hoyCdcChartWrap');
    if (cdcWrap && D.cdc && D.cdc.beltran) {
      var bH = D.cdc.beltran.historico;
      var dH = D.cdc.dorita ? D.cdc.dorita.historico : [];
      var dMap3 = {};
      dH.forEach(function(r){ dMap3[r.sem] = r; });

      var lbl3 = [], totLine = [], trabLine = [], acompLine = [];
      bH.forEach(function(b) {
        if (!b.total || b.total <= 0) return;
        var d3 = dMap3[b.sem] || { total:0, trabajadores:0, acomp:0 };
        lbl3.push(b.sem);
        totLine.push(b.total  + d3.total);
        trabLine.push(b.trabajadores + d3.trabajadores);
        acompLine.push(b.acomp + d3.acomp);
      });

      var lastTot  = totLine[totLine.length-1]   || 0;
      var lastTrab = trabLine[trabLine.length-1]  || 0;
      var lastAco  = acompLine[acompLine.length-1] || 0;
      var lastSem  = lbl3[lbl3.length-1] || '';

      cdcWrap.innerHTML =
        '<div class="card" style="margin-bottom:14px;cursor:pointer" data-nav-tab="cdc" data-nav-target="chartCdcVsProyeccion">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">' +
            '<div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)">Gente en CDC · ' + lastSem + ' <span style="font-weight:400;color:var(--muted)">· ver detalle →</span></div>' +
            '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
              '<span style="font-size:.68rem;color:var(--muted)"><span style="font-size:.8rem;font-weight:800;color:#60a5fa">' + lastTot.toLocaleString() + '</span> total</span>' +
              '<span style="font-size:.68rem;color:var(--muted)"><span style="font-size:.8rem;font-weight:800;color:#4ade80">' + lastTrab.toLocaleString() + '</span> trabajan</span>' +
              '<span style="font-size:.68rem;color:var(--muted)"><span style="font-size:.8rem;font-weight:800;color:#fbbf24">' + lastAco.toLocaleString() + '</span> no trabajan</span>' +
            '</div>' +
          '</div>' +
          '<div style="height:200px"><canvas id="chartHoyCdc"></canvas></div>' +
        '</div>';

      if (chartsInit['chartHoyCdc']) { chartsInit['chartHoyCdc'].destroy(); }
      var ctx2 = document.getElementById('chartHoyCdc');
      if (ctx2) {
        chartsInit['chartHoyCdc'] = new Chart(ctx2.getContext('2d'), {
          type: 'line',
          data: {
            labels: lbl3,
            datasets: [
              { label:'Total',         data: totLine,   borderColor:'#60a5fa', backgroundColor:'rgba(96,165,250,.07)', borderWidth:2, pointRadius:2, pointHoverRadius:5, fill:true,  tension:0.3 },
              { label:'Trabajan',      data: trabLine,  borderColor:'#4ade80', backgroundColor:'rgba(74,222,128,.07)', borderWidth:2, pointRadius:2, pointHoverRadius:5, fill:true,  tension:0.3 },
              { label:'No trabajan',   data: acompLine, borderColor:'#fbbf24', backgroundColor:'rgba(251,191,36,.07)', borderWidth:2, pointRadius:2, pointHoverRadius:5, fill:true,  tension:0.3 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } },
              tooltip: {
                callbacks: {
                  label: function(ctx) {
                    return ctx.dataset.label + ': ' + ctx.parsed.y.toLocaleString() + ' pers.';
                  },
                  afterBody: function(items) {
                    if (items.length < 2) return [];
                    var tot  = items.find(function(i){ return i.datasetIndex === 0; });
                    var trab = items.find(function(i){ return i.datasetIndex === 1; });
                    if (!tot || !trab) return [];
                    var pct = (trab.parsed.y / tot.parsed.y * 100).toFixed(1);
                    return ['— ' + pct + '% trabajan del total'];
                  }
                }
              }
            },
            scales: {
              y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 10 } } },
              x: { grid: { display: false }, ticks: { font: { size: 9 }, maxRotation: 0 } }
            }
          }
        });
      }
    }
  }

  function kpiCard(label, value, sub, valCls, cardCls, pillHtml) {
    return '<div class="kpi-card ' + (cardCls || '') + '">' +
      '<div class="kpi-label">' + label + '</div>' +
      '<div class="kpi-value ' + (valCls || '') + '">' + value + '</div>' +
      '<div class="kpi-sub">' + sub + '</div>' +
      (pillHtml || '') +
    '</div>';
  }
  function pill(dir, txt) {
    return '<span class="kpi-pill ' + dir + '">' + txt + '</span>';
  }

  function renderDonut(id, actual, budget, isGood) {
    var fill  = Math.min(actual / budget, 1.2);
    var rest  = Math.max(0, 1.2 - fill);
    var color = isGood ? '#16a34a' : '#d97706';
    var el = document.getElementById(id);
    if (!el) return;
    new Chart(el.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [fill * 100, rest * 100],
          backgroundColor: [color, 'rgba(0,0,0,.06)'],
          borderWidth: 0,
          circumference: 270,
          rotation: -135
        }]
      },
      options: {
        cutout: '80%',
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        animation: { duration: 900, easing: 'easeInOutQuart' }
      }
    });
  }

  /* ════════════════ EJECUTIVO ════════════════ */
  function renderEjecutivo() {
    var pag  = D.calavo.pagos || [];
    var ph   = (D.tomate && D.tomate.preciosHistorico) || [];
    var liq  = (D.calavoWeekly && D.calavoWeekly.liquidaciones) || [];
    var emb  = (D.operaciones && D.operaciones.embarques) || [];
    var bas  = (D.operaciones && D.operaciones.bascula)   || [];
    var al   = D.alertas || [];
    var iconMap = { success:'✓', danger:'!', warning:'⚠', info:'i' };

    /* Season totals from liquidaciones (exportación Calavo) */
    var totLiqCajas = 0, totRevLiq = 0, totLiq = 0;
    liq.forEach(function(r){ totLiqCajas += r.pkgs||0; totRevLiq += r.fob||0; totLiq += r.liq||0; });
    var avgFob = totLiqCajas > 0 ? totRevLiq / totLiqCajas : 0;

    /* Canal data */
    var rev = D.revenue || {};
    var tc  = (D.tomate && D.tomate.ventas) || {};
    var expCanal = (tc.exportacion && tc.exportacion[0]) || {};
    var nacCanal = (tc.nacional    && tc.nacional[0])    || {};
    var cajasExp = expCanal.cajas || totLiqCajas;
    var cajasNac = nacCanal.cajas || 0;
    var revExp   = rev.fob      || totRevLiq;
    var revNac   = rev.nacional || nacCanal.revenue || 0;

    /* Deuda pendiente */
    var dc   = (D.calavo && D.calavo.deudaCalavo) || {};
    var pend = dc.pendiente || 0;
    var cruceSem = dc.cruceEstimado || '—';

    /* Latest confirmed FOB (tipo:'real') + latest USDA */
    var lastReal = null, lastUsda = null;
    for (var i = ph.length-1; i >= 0; i--) {
      if (!lastReal && ph[i].tipo === 'real') lastReal = ph[i];
      if (!lastUsda && ph[i].usda != null)    lastUsda = ph[i];
      if (lastReal && lastUsda) break;
    }

    /* Today's embarques */
    var todayFecha = emb.length ? emb[0].fecha : null;
    var todayCargas = 0;
    var todayDests  = {};
    emb.forEach(function(e){
      if (e.fecha === todayFecha) {
        todayCargas += (e.cargas || 1);
        todayDests[e.destino] = (todayDests[e.destino] || 0) + (e.cargas || 1);
      }
    });
    var todayProds    = bas.length ? bas[0].productos : [];
    var todayBasFecha = bas.length ? bas[0].fecha    : null;

    /* ── KPI Cards (new compact grid) ── */
    var elExp = document.getElementById('ejExpVal');
    if (elExp) {
      elExp.textContent = fmt(revExp);
      document.getElementById('ejExpSub').textContent = fmtN(totLiqCajas) + ' cajas facturadas · WK01–' + D.meta.semana.replace('WK ','WK');
      document.getElementById('ejExpFoot').innerHTML =
        '<span style="color:#34c759;font-weight:700">$' + avgFob.toFixed(2) + '/caja</span>' +
        '<span style="color:var(--muted)"> prom. acumulado</span>';
    }
    var elNac = document.getElementById('ejNacVal');
    if (elNac) {
      elNac.textContent = fmt(revNac);
      document.getElementById('ejNacSub').textContent = 'venta bruta · sin relación Calavo / deuda';
    }
    var elPrc = document.getElementById('ejPrecioVal');
    if (elPrc) {
      elPrc.textContent = '$' + avgFob.toFixed(2);
      document.getElementById('ejPrecioSub').textContent = 'FOB / caja · acumulado temporada';
      var isEst = lastReal && lastReal.tipo === 'est';
      document.getElementById('ejPrecioFoot').innerHTML = lastReal
        ? '<span style="color:var(--muted)">' + lastReal.sem + ': </span>' +
          '<span style="font-weight:700">$' + lastReal.fob.toFixed(2) + '</span>' +
          (isEst ? ' <span style="font-size:.55rem;background:rgba(251,191,36,.18);color:#fbbf24;padding:1px 5px;border-radius:3px;font-weight:700;letter-spacing:.5px">EST</span>' : '')
        : '';
    }

    /* ── Panel Estratégico — 5 indicadores clave ── */
    var sp = document.getElementById('ejStratPanel');
    if (sp) {
      var dc3  = D.calavo.deudaCalavo || {};
      var dd3  = D.deudas || {};
      var cv3  = D.calavo || {};
      var baj  = (dd3.bancos && dd3.bancos[0]) || {};
      var bajV = baj.vencimientos || {};
      var nacD = (D.tomate && D.tomate.ventas && D.tomate.ventas.nacional && D.tomate.ventas.nacional[0]) || {};

      /* 1 — Cruce Calavo */
      var amort3 = dc3.amortizadoWk15 || 0;
      var total3 = dc3.total || 6000000;
      var pct3   = Math.round(amort3 / total3 * 100);
      var pend3  = dc3.pendiente || 0;

      /* 2 — BanBajío vencimientos urgentes */
      var bajMay = bajV.mayo2026 || 0;
      var bajJun = bajV.junio2026 || 0;
      var bajJul = bajV.julio2026 || 0;

      /* 4 — FOB tendencia (últimas 2 semanas reales) */
      var fobLast = null, fobPrev = null;
      for (var ii = ph.length-1; ii >= 0; ii--) {
        if (ph[ii].tipo === 'real') { if (!fobLast) fobLast = ph[ii]; else if (!fobPrev) { fobPrev = ph[ii]; break; } }
      }

      /* 5 — Canal neto: Nacional vs Exportación */
      var nacRevPorCaja  = nacD.revNetoPorCaja  || (nacD.cajas > 0 ? (nacD.revenue*(1-(nacD.comisionPct||0.05))) / nacD.cajas : 0);
      var totCajasExp3   = 0;
      D.calavo.pagos.forEach(function(p){ totCajasExp3 += p.cajas||0; });
      var fobBrutoXcaja  = totCajasExp3 > 0 ? (D.revenue.fob || 0) / totCajasExp3 : 0;
      /* Neto export: FOB - 22% comisión total Calavo */
      var fobNetoXcaja   = fobBrutoXcaja * (1 - (cv3.comisionPct || 0.22));

      /* Build HTML */
      function ind(lbl, badge, badgeColor, val, valColor, sub, barPct, barColor, rows, action, actionColor) {
        var barH = (typeof barPct === 'number')
          ? '<div class="strat-ind-bar-wrap"><div class="strat-ind-bar" style="width:'+Math.min(barPct,100)+'%;background:'+barColor+'"></div></div>'
          : '';
        var rowsH = rows ? '<div class="strat-ind-rows">'+rows.map(function(r){
          return '<div class="strat-ind-row"><span class="strat-ind-row-k">'+r[0]+'</span><span class="strat-ind-row-v" style="color:'+(r[2]||'rgba(255,255,255,.7)')+'">'+r[1]+'</span></div>';
        }).join('')+'</div>' : '';
        var actH = action ? '<div class="strat-ind-action" style="border-color:'+actionColor+';color:'+actionColor+'">'+action+'</div>' : '';
        return '<div class="strat-ind">' +
          '<span class="strat-ind-badge" style="background:'+badgeColor+'22;color:'+badgeColor+'">'+badge+'</span>' +
          '<div class="strat-ind-lbl">'+lbl+'</div>' +
          '<div class="strat-ind-val" style="color:'+valColor+'">'+val+'</div>' +
          (sub ? '<div class="strat-ind-sub">'+sub+'</div>' : '') +
          barH + rowsH + actH +
        '</div>';
      }

      sp.innerHTML =
        /* 1. Cruce deuda Calavo */
        ind('Cruce Deuda Calavo', 'WK18 · 28-Abr', '#fbbf24',
          fmt(pend3), '#fbbf24',
          'pendiente de $6M — ' + pct3 + '% amortizado',
          pct3, '#34c759',
          [
            ['Amortizado', fmt(amort3), '#34c759'],
            ['Promedio WK11–14', fmt(dc3.avgLiq_wk11_14 || 0) + '/sem', 'var(--muted)'],
            ['Cruce estimado', (dc3.cruceEstimado||'—') + ' · ' + (dc3.cruceEstimadoFecha||''), '#fbbf24']
          ],
          '⚡ Después del cruce, cada wire = efectivo real a Belher', '#fbbf24') +

        /* 2. BanBajío urgente */
        ind('BanBajío · Vencimientos', 'Urgente', '#ef4444',
          fmt(baj.saldo || 3850000), '#ef4444',
          '4 líneas — vencen Mayo–Jul 2026',
          null, null,
          [
            ['Mayo 2026', fmt(bajMay), bajMay > 0 ? '#ef4444' : 'var(--muted)'],
            ['Junio 2026', fmt(bajJun), bajJun > 0 ? '#ef4444' : 'var(--muted)'],
            ['Julio 2026', fmt(bajJul), bajJul > 0 ? '#ef4444' : 'var(--muted)']
          ],
          '→ Renegociar antes de WK18 — usar cruce Calavo como palanca', '#ef4444') +

        /* 4. FOB tendencia */
        (function(){
          var fobIsEst = fobLast && fobLast.tipo === 'est';
          var fobBadge = fobLast ? (fobIsEst ? fobLast.sem + ' · est.' : fobLast.sem) : 'Último';
          var fobBadgeColor = fobLast && fobPrev && fobLast.fob > fobPrev.fob ? '#34c759' : '#fbbf24';
          var fobValColor = fobLast && fobPrev ? (fobLast.fob >= fobPrev.fob ? '#34c759' : '#fbbf24') : '#60a5fa';
          var fobSub = fobLast ? (fobIsEst ? 'estimado · USDA $56.95 · escalador activo' : fobLast.sem) : '';
          return ind('FOB Calavo · Tendencia', fobBadge, fobBadgeColor,
            fobLast ? '$' + fobLast.fob.toFixed(2) : '—', fobValColor,
            fobSub, null, null,
            fobPrev ? [
              ['Semana anterior ('+fobPrev.sem+')', '$'+fobPrev.fob.toFixed(2)+'/caja', 'var(--muted)'],
              ['Variación', (fobLast.fob >= fobPrev.fob ? '+' : '') + (fobLast.fob - fobPrev.fob).toFixed(2), fobLast.fob >= fobPrev.fob ? '#16a34a' : '#dc2626'],
              ['Pico temporada (WK10)', '$27.58/caja', 'var(--muted)']
            ] : null,
            fobIsEst ? '⚡ WK15 estimado al 64% pass-through del escalador — actualizar con settle final' : null,
            '#fbbf24');
        })() +

        /* 5. Canal: Nacional vs Export */
        ind('Neto por Caja · Canales', 'Comparativo', '#60a5fa',
          '$' + nacRevPorCaja.toFixed(2), '#60a5fa',
          'Nacional neto (5% comisión)',
          null, null,
          [
            ['Nacional bruto/caja', '$' + ((nacD.revenue||0) / (nacD.cajas||1)).toFixed(2), '#60a5fa'],
            ['Nacional neto/caja', '$' + nacRevPorCaja.toFixed(2) + ' (−5%)', '#60a5fa'],
            ['Export FOB neto/caja', '$' + fobNetoXcaja.toFixed(2) + ' (−12%)', '#34c759'],
            ['Export: sin Calavo debt', 'Post-WK18', '#fbbf24']
          ],
          '→ Export gana en FOB; Nacional = flujo limpio ya desde hoy', '#60a5fa');
    }

    /* ── Señal del Mercado ── */
    var senEl = document.getElementById('ejSenal');
    if (senEl) {
      var usdaVal  = lastUsda ? lastUsda.usda  : null;
      var fobVal   = lastReal ? lastReal.fob   : null;
      var usdaSem  = lastUsda ? lastUsda.sem   : '—';
      var fobSem   = lastReal ? lastReal.sem   : '—';
      var escActive = usdaVal != null && usdaVal >= 20.95;
      var level     = usdaVal == null ? 'nd' : usdaVal >= 45 ? 'max' : usdaVal >= 30 ? 'alta' : 'normal';
      var senColor  = level==='max' ? '#16a34a' : level==='alta' ? '#d97706' : level==='normal' ? 'var(--muted)' : 'var(--muted)';
      var senLabel  = level==='max' ? 'MERCADO EN MÁXIMOS — EMBARCAR TODO' :
                      level==='alta' ? 'Precio alto — priorizar exportación' :
                      level==='normal' ? 'Mercado normal — operación estándar' : 'Sin datos de mercado';
      senEl.innerHTML = '<div class="ej-senal-card" style="border-color:'+senColor+'">' +
        '<div class="ej-senal-label" style="color:'+senColor+'">'+senLabel+'</div>' +
        '<div class="ej-senal-row"><span class="ej-senal-key">USDA Nogales vine-ripe ('+usdaSem+')</span><span class="ej-senal-val" style="color:'+senColor+'">'+(usdaVal!=null?'$'+usdaVal.toFixed(2):'—')+'</span></div>' +
        '<div class="ej-senal-row"><span class="ej-senal-key">FOB Calavo ('+fobSem+')</span><span class="ej-senal-val">'+(fobVal!=null?'$'+fobVal.toFixed(2):'—')+'</span></div>' +
        '<div class="ej-senal-row"><span class="ej-senal-key">Escalador $20.95</span><span class="ej-senal-val" style="color:'+(escActive?'#34c759':'var(--muted)')+'">'+(escActive&&usdaVal?'✓ Activo +$'+(usdaVal-20.95).toFixed(2):'✗ No activo')+'</span></div>' +
        '<div class="ej-senal-row"><span class="ej-senal-key">Contrato base</span><span class="ej-senal-val">$16.95 / caja</span></div>' +
      '</div>';
    }

    /* ── Báscula & Embarques ── */
    var ejBas = document.getElementById('ejBascula');
    if (ejBas) {
      var destList = Object.keys(todayDests).map(function(d){ return todayDests[d]+' '+d; }).join(' · ');
      ejBas.innerHTML = '<div class="ej-bas-card" style="height:100%;box-sizing:border-box">' +
        '<div class="ej-bas-today">Último día registrado'+(todayBasFecha ? ' · '+todayBasFecha : '')+'</div>' +
        (todayCargas > 0
          ? '<div class="ej-bas-carga-num">'+todayCargas+'</div><div class="ej-bas-carga-lbl">camiones exportados'+(destList?' · '+destList:'')+'</div>'
          : '<div style="color:var(--muted);font-size:.75rem;margin-top:6px">Sin embarques registrados</div>') +
        (todayProds.length
          ? '<div class="ej-bas-productos">'+todayProds.map(function(p){ return '<span class="ej-bas-pill">'+p+'</span>'; }).join('')+'</div>'
          : '') +
      '</div>';
    }

    /* ── Alertas CEO ── */
    var ejAlEl = document.getElementById('ejAlertas');
    if (ejAlEl) {
      ejAlEl.innerHTML = (al.length ? al.map(function(a){
        return '<div class="hoy-alert '+a.nivel+'">' +
          '<div class="hoy-alert-ico">'+(iconMap[a.nivel]||'i')+'</div>' +
          '<div class="hoy-alert-txt">'+a.texto+'</div>' +
        '</div>';
      }).join('') : '');
    }
  }

  /* ════════════════ VENTAS & PRECIO ════════════════ */
  function renderVentas() {
    var liq  = (D.calavoWeekly && D.calavoWeekly.liquidaciones) || [];
    var ph   = (D.tomate && D.tomate.preciosHistorico) || [];
    var cont = (D.cashflow && D.cashflow.contratos) || [];

    /* Season totals */
    var totCajas = 0, totRevenue = 0, totLiq = 0, totComision = 0;
    liq.forEach(function(r){ totCajas+=r.pkgs||0; totRevenue+=r.fob||0; totLiq+=r.liq||0; totComision+=r.comision||0; });
    var avgFob = totCajas > 0 ? totRevenue / totCajas : 0;

    /* KPIs — separado por canal */
    var cv    = D.calavo || {};
    var rev   = D.revenue || {};
    var tc2   = (D.tomate && D.tomate.ventas) || {};
    var nacC  = (tc2.nacional && tc2.nacional[0]) || {};
    var revExp2 = rev.fob      || totRevenue;
    var revNac2 = rev.nacional || nacC.revenue || 0;
    var cajasNac2 = nacC.cajas || 0;
    var precNac   = cajasNac2 > 0 ? revNac2 / cajasNac2 : 0;
    var dc2  = cv.deudaCalavo || {};
    var pend2 = dc2.pendiente || 0;
    var cruce2 = dc2.cruceEstimado || '—';
    var amort2 = dc2.amortizadoWk15 || totLiq;

    var vKpis = document.getElementById('ventasKpis');
    if (vKpis) {
      vKpis.innerHTML =
        /* Exportación */
        '<div class="card" style="padding:18px 16px;border-left:3px solid #34c759">' +
          '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Exportación · Calavo</div>' +
          '<div style="font-size:1.35rem;font-weight:700;color:var(--green2);line-height:1">'+fmtN(totCajas)+'</div>' +
          '<div style="font-size:.67rem;color:var(--muted);margin-top:4px">cajas facturadas</div>' +
          '<div style="font-size:.67rem;color:var(--green2);margin-top:2px;font-weight:600">'+fmt(revExp2)+' bruto · $'+avgFob.toFixed(2)+'/caja</div>' +
        '</div>' +
        /* Nacional */
        '<div class="card" style="padding:18px 16px;border-left:3px solid #60a5fa">' +
          '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Nacional</div>' +
          '<div style="font-size:1.35rem;font-weight:700;color:#60a5fa;line-height:1">'+fmtN(cajasNac2)+'</div>' +
          '<div style="font-size:.67rem;color:var(--muted);margin-top:4px">cajas vendidas</div>' +
          '<div style="font-size:.67rem;color:#60a5fa;margin-top:2px;font-weight:600">'+fmt(revNac2)+' · $'+precNac.toFixed(2)+'/caja</div>' +
        '</div>' +
        /* Amortizado deuda Calavo */
        '<div class="card" style="padding:18px 16px;border-left:3px solid #f59e0b">' +
          '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Amortizado Deuda Calavo</div>' +
          '<div style="font-size:1.35rem;font-weight:700;color:#f59e0b;line-height:1">'+fmt(amort2)+'</div>' +
          '<div style="font-size:.67rem;color:var(--muted);margin-top:4px">de $6M total</div>' +
          '<div style="font-size:.67rem;color:#f59e0b;margin-top:2px;font-weight:600">'+fmt(pend2)+' pendiente</div>' +
        '</div>' +
        /* Cruce a liquidación real */
        '<div class="card" style="padding:18px 16px;border-left:3px solid #34c759;background:rgba(52,199,89,.04)">' +
          '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Inicio Liquidación Real</div>' +
          '<div style="font-size:1.35rem;font-weight:700;color:#34c759;line-height:1">'+cruce2+'</div>' +
          '<div style="font-size:.67rem;color:var(--muted);margin-top:4px">~28-Abr-2026 estimado</div>' +
          '<div style="font-size:.67rem;color:#34c759;margin-top:2px;font-weight:600">Wire = neto real a Belher desde '+cruce2+'</div>' +
        '</div>';
    }

    var vCont0 = document.getElementById('ventasContrato');

    /* Contrato & escalador analysis */
    var vCont = document.getElementById('ventasContrato');
    if (vCont) {
      var html = (vCont._reembBanner || '') + '<div class="card" style="padding:20px 22px">';

      /* Contract summary boxes */
      if (cont.length) {
        html += '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:18px">';
        cont.forEach(function(c){
          html += '<div style="flex:1;min-width:190px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:14px 16px">' +
            '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">'+c.mes+' · '+c.tipo+'</div>' +
            '<div style="font-size:.78rem;color:var(--fg);line-height:1.9">' +
              '<div><span style="color:var(--muted)">Base: </span><b style="color:var(--accent2)">$'+(c.precio_contrato||0).toFixed(2)+'/caja</b></div>' +
              '<div><span style="color:var(--muted)">Escalador activo desde: </span><b style="color:#34c759">$'+(c.escalador_desde||0).toFixed(2)+'</b></div>' +
              '<div><span style="color:var(--muted)">Cajas contrato: </span>'+fmtN(c.cajas_contrato)+'</div>' +
              (c.cajas_spot ? '<div><span style="color:var(--muted)">Cajas spot: </span>'+fmtN(c.cajas_spot)+'</div>' : '') +
            '</div>' +
          '</div>';
        });
        html += '</div>';
      }

      /* FOB vs escalador per-week table */
      html += '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">FOB Real vs Umbrales de Contrato · Por Semana</div>';
      html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.73rem">';
      html += '<thead><tr style="border-bottom:1px solid var(--border)">' +
        '<th style="text-align:left;padding:6px 8px;color:var(--muted);font-weight:600">Sem</th>' +
        '<th style="text-align:right;padding:6px 8px;color:var(--muted);font-weight:600">Cajas</th>' +
        '<th style="text-align:right;padding:6px 8px;color:var(--muted);font-weight:600">FOB/caja</th>' +
        '<th style="text-align:right;padding:6px 8px;color:var(--muted);font-weight:600">USDA ref</th>' +
        '<th style="text-align:right;padding:6px 8px;color:var(--muted);font-weight:600">Escalador</th>' +
        '<th style="text-align:left;padding:6px 8px;color:var(--muted);font-weight:600">Nota</th>' +
      '</tr></thead><tbody>';
      ph.forEach(function(p){
        var liqRow   = liq.find ? liq.find(function(r){ return r.sem===p.sem; }) : null;
        var pkgs     = liqRow ? liqRow.pkgs : null;
        var escActive = p.usda != null && p.usda >= 20.95;
        var fobColor  = p.fob >= 20 ? '#34c759' : p.fob >= 16.95 ? 'var(--accent2)' : '#ef4444';
        var escColor  = escActive ? '#34c759' : 'var(--muted)';
        var rowBg     = p.tipo==='est' ? 'rgba(59,130,246,.04)' : '';
        html += '<tr style="border-bottom:1px solid rgba(0,0,0,.05);background:'+rowBg+'">' +
          '<td style="padding:5px 8px;font-weight:700">'+p.sem+(p.tipo==='est'?' <span style="font-size:.58rem;color:var(--muted);font-weight:400">est</span>':'')+'</td>' +
          '<td style="text-align:right;padding:5px 8px;color:var(--muted)">'+(pkgs!=null?fmtN(pkgs):'—')+'</td>' +
          '<td style="text-align:right;padding:5px 8px;color:'+fobColor+';font-weight:700">$'+p.fob.toFixed(2)+'</td>' +
          '<td style="text-align:right;padding:5px 8px;color:var(--muted)">'+(p.usda!=null?'$'+p.usda.toFixed(2):'—')+'</td>' +
          '<td style="text-align:right;padding:5px 8px;color:'+escColor+';font-weight:600">'+(escActive?'✓ +$'+(p.usda-20.95).toFixed(2):'—')+'</td>' +
          '<td style="padding:5px 8px;font-size:.65rem;color:var(--muted)">'+( p.nota||'')+'</td>' +
        '</tr>';
      });
      html += '</tbody></table></div>';
      html += '</div>';
      vCont.innerHTML = html;
    }
  }

  /* ════════════════ NACIONAL ════════════════ */
  function renderNacional() {
    var tc    = (D.tomate && D.tomate.ventas) || {};
    var nacC  = (tc.nacional && tc.nacional[0])    || {};
    var expC  = (tc.exportacion && tc.exportacion[0]) || {};
    var rev   = D.revenue || {};

    var cajasNac   = nacC.cajas    || 0;
    var cajasRoma  = nacC.cajasRoma  || 0;
    var cajasBola  = nacC.cajasBola  || 0;
    var revNac     = nacC.revenue  || rev.nacional || 0;
    var precNac    = cajasNac > 0 ? revNac / cajasNac : 0;
    var cajasExp   = expC.cajas    || 0;
    var revExp     = rev.fob || 0;
    var precExp    = cajasExp > 0 ? revExp / cajasExp : 0;
    var romaPct    = cajasNac > 0 ? (cajasRoma / cajasNac * 100) : 0;
    var bolaPct    = cajasNac > 0 ? (cajasBola / cajasNac * 100) : 0;

    /* KPIs */
    var el = document.getElementById('nacKpis');
    if (el) {
      el.innerHTML = [
        { lbl:'Cajas Nacionales',    val: fmtN(cajasNac),        sub:'temporada total',                      color:'#60a5fa' },
        { lbl:'Revenue Nacional',    val: fmt(revNac),            sub:'sin comisión Calavo',                  color:'#60a5fa' },
        { lbl:'Precio Promedio',     val: '$'+precNac.toFixed(2), sub:'USD / caja',                           color:'var(--accent2)' },
        { lbl:'vs Export Calavo',    val: '$'+(precNac-precExp).toFixed(2), sub: precNac>precExp?'↑ sobre export':'↓ bajo export', color: precNac>precExp?'#34c759':'#ef4444' }
      ].map(function(k){
        return '<div class="card" style="padding:18px 16px;border-left:3px solid #60a5fa">' +
          '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:6px">'+k.lbl+'</div>' +
          '<div style="font-size:1.35rem;font-weight:700;color:'+k.color+';line-height:1">'+k.val+'</div>' +
          '<div style="font-size:.67rem;color:var(--muted);margin-top:4px">'+k.sub+'</div>' +
        '</div>';
      }).join('');
    }

    /* Roma vs Bola breakdown */
    var canEl = document.getElementById('nacCanales');
    if (canEl) {
      canEl.innerHTML =
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">' +
          '<div class="card" style="padding:18px 20px">' +
            '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Roma</div>' +
            '<div style="font-size:1.6rem;font-weight:800;color:#60a5fa;line-height:1">'+fmtN(cajasRoma)+'</div>' +
            '<div style="font-size:.7rem;color:var(--muted);margin-top:4px">cajas · '+romaPct.toFixed(1)+'% del total nacional</div>' +
            '<div style="background:rgba(0,0,0,.07);border-radius:4px;height:6px;margin-top:8px;overflow:hidden">' +
              '<div style="height:100%;width:'+romaPct.toFixed(0)+'%;background:#60a5fa;border-radius:4px"></div>' +
            '</div>' +
          '</div>' +
          '<div class="card" style="padding:18px 20px">' +
            '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Bola</div>' +
            '<div style="font-size:1.6rem;font-weight:800;color:#818cf8;line-height:1">'+fmtN(cajasBola)+'</div>' +
            '<div style="font-size:.7rem;color:var(--muted);margin-top:4px">cajas · '+bolaPct.toFixed(1)+'% del total nacional</div>' +
            '<div style="background:rgba(0,0,0,.07);border-radius:4px;height:6px;margin-top:8px;overflow:hidden">' +
              '<div style="height:100%;width:'+bolaPct.toFixed(0)+'%;background:#818cf8;border-radius:4px"></div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    /* Notas */
    var notaEl = document.getElementById('nacNotas');
    if (notaEl) {
      notaEl.innerHTML =
        '<div class="hoy-alert info">' +
          '<div class="hoy-alert-ico">i</div>' +
          '<div class="hoy-alert-txt">' +
            'Canal Nacional es <b>independiente de Calavo</b> — precio, logística y clientes son distintos. ' +
            'No aplican comisión Calavo, ni deducción P&P, ni anticipo de capital. ' +
            'Revenue se cobra directamente a clientes nacionales (anticipos: '+fmt((D.deudas&&D.deudas.anticiposNacional)||0)+' recibidos a cuenta).' +
          '</div>' +
        '</div>';
    }
  }

  /* ════════════════ OPERACIONES ════════════════ */
  function renderOperaciones() {
    /* Must be defined first — used in both table render and flota summary */
    var clasificarUnidad = function (unidad) {
      var u = (unidad || '').toUpperCase().trim();
      if (/^ST[\-\s]?\d/i.test(u))  return 'Transfrios (ST)';
      if (/^JL[\-\s]?\d/i.test(u))  return 'Elogística (JL)';
      if (/^CGG[\-\s]?\d/i.test(u)) return 'CGG (CGG)';
      return 'Otros';
    };

    var emb = D.operaciones.embarques;
    /* Only TX / AZ shipments, sorted newest first, capped at 12 */
    var txAz = emb.filter(function (e) {
      var d = (e.destino || '').toLowerCase();
      return d.indexOf('texas') !== -1 || d.indexOf('arizona') !== -1 || d.indexOf('az') !== -1 || d.indexOf('tx') !== -1;
    }).sort(function (a, b) {
      /* parse DD/MM/YYYY for comparison */
      var parse = function (f) { var p = f.split('/'); return new Date(+p[2], +p[1]-1, +p[0]); };
      return parse(b.fecha) - parse(a.fecha);
    }).slice(0, 12);
    document.querySelector('#embTbl tbody').innerHTML = txAz.map(function (e) {
      var tipoCls = e.tipo.toLowerCase().indexOf('tomate') !== -1 ? 'tipo-tomate'
                  : e.tipo.toLowerCase().indexOf('lim') !== -1    ? 'tipo-limon'
                  : 'tipo-chile';
      var destBadge = (e.destino || '').toLowerCase().indexOf('texas') !== -1
        ? '<span class="badge badge-orange">Texas</span>'
        : '<span class="badge badge-blue">Arizona</span>';
      return '<tr>' +
        '<td><strong>' + e.fecha + '</strong></td>' +
        '<td class="td-center" style="font-weight:700;font-size:.9rem">' + (e.cargas || 1) + '</td>' +
        '<td><span class="tipo-pill ' + tipoCls + '">' + e.tipo + '</span></td>' +
        '<td>' + destBadge + '</td>' +
        '<td style="font-family:\'SF Mono\',monospace;font-size:.79rem;font-weight:600">' + (e.unidad || '—') + '</td>' +
        '<td style="font-size:.79rem;color:var(--muted)">' + clasificarUnidad(e.unidad) + '</td>' +
        '<td class="td-center"><span class="badge badge-green">' + e.estado + '</span></td>' +
      '</tr>';
    }).join('');

    /* Carrier summary — last 7 days from most recent shipment */
    var parseDate = function (f) { var p = f.split('/'); return new Date(+p[2], +p[1]-1, +p[0]); };
    var allTxAz = emb; /* already filtered + sorted newest-first */
    var refDate = allTxAz.length ? parseDate(allTxAz[0].fecha) : new Date();
    var cutoff  = new Date(refDate); cutoff.setDate(cutoff.getDate() - 7);
    var week = allTxAz.filter(function (e) { return parseDate(e.fecha) >= cutoff; });
    var FLOTA_PRINCIPAL = ['Transfrios (ST)', 'Elogística (JL)', 'CGG (CGG)'];
    var flotaMap = { 'Otros': { viajes: 0, cargas: 0, unidades: [] } };
    week.forEach(function (e) {
      var carrier = clasificarUnidad(e.unidad);
      if (carrier !== 'Otros') {
        if (!flotaMap[carrier]) flotaMap[carrier] = { viajes: 0, cargas: 0 };
        flotaMap[carrier].viajes++;
        flotaMap[carrier].cargas += (e.cargas || 1);
      } else {
        flotaMap['Otros'].viajes++;
        flotaMap['Otros'].cargas += (e.cargas || 1);
        var u = e.unidad || '?';
        if (flotaMap['Otros'].unidades.indexOf(u) === -1) flotaMap['Otros'].unidades.push(u);
      }
    });
    var flotaRows = FLOTA_PRINCIPAL.filter(function (f) { return flotaMap[f] && flotaMap[f].cargas > 0; })
      .sort(function (a, b) { return flotaMap[b].cargas - flotaMap[a].cargas; })
      .concat(['Otros']);
    var totalViajes = week.length;
    var totalCargas = week.reduce(function (s, e) { return s + (e.cargas || 1); }, 0);
    document.getElementById('flotaResumen').innerHTML =
      '<table style="width:100%;border-collapse:collapse;font-size:.81rem">' +
        '<thead style="background:var(--dark);color:#fff">' +
          '<tr>' +
            '<th style="padding:8px 14px;text-align:left;font-size:.63rem;letter-spacing:.9px;text-transform:uppercase;font-weight:600">Flota</th>' +
            '<th style="padding:8px 14px;text-align:center;font-size:.63rem;letter-spacing:.9px;text-transform:uppercase;font-weight:600">Viajes</th>' +
            '<th style="padding:8px 14px;text-align:center;font-size:.63rem;letter-spacing:.9px;text-transform:uppercase;font-weight:600">Cargas</th>' +
            '<th style="padding:8px 14px;text-align:right;font-size:.63rem;letter-spacing:.9px;text-transform:uppercase;font-weight:600">% del Total</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' +
        flotaRows.map(function (f) {
          var row = flotaMap[f];
          if (!row || (f === 'Otros' && row.cargas === 0)) return '';
          var pctVal = totalCargas ? (row.cargas / totalCargas * 100).toFixed(0) : 0;
          var nameCell = f === 'Otros' && row.unidades && row.unidades.length
            ? f + ' <span style="font-size:.69rem;font-weight:400;color:var(--muted)">· unidades: ' + row.unidades.join(', ') + '</span>'
            : f;
          return '<tr style="border-bottom:1px solid var(--border)">' +
            '<td style="padding:9px 14px;font-weight:600">' + nameCell + '</td>' +
            '<td style="padding:9px 14px;text-align:center">' + row.viajes + '</td>' +
            '<td style="padding:9px 14px;text-align:center;font-weight:700">' + row.cargas + '</td>' +
            '<td style="padding:9px 14px;text-align:right">' +
              '<div style="display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
                '<div style="width:80px;height:6px;background:#e5e7eb;border-radius:4px;overflow:hidden">' +
                  '<div style="width:' + pctVal + '%;height:100%;background:var(--green2);border-radius:4px"></div>' +
                '</div>' +
                '<span style="font-weight:700;min-width:32px">' + pctVal + '%</span>' +
              '</div>' +
            '</td>' +
          '</tr>';
        }).join('') +
        '<tr style="background:#f8faf8;font-weight:700">' +
          '<td style="padding:9px 14px;color:var(--muted);font-size:.75rem;letter-spacing:.5px;text-transform:uppercase">Total</td>' +
          '<td style="padding:9px 14px;text-align:center">' + totalViajes + '</td>' +
          '<td style="padding:9px 14px;text-align:center">' + totalCargas + '</td>' +
          '<td style="padding:9px 14px;text-align:right">100%</td>' +
        '</tr>' +
        '</tbody>' +
      '</table>';

  }


  /* ════════════════ CALIDAD ════════════════ */
  function renderCalidad() {
    var ub = D.calidad.ultimoOutbound;

    /* ── Báscula ── */
    document.getElementById('bascWidget').innerHTML =
      D.operaciones.bascula.map(function (b) {
        var chips = b.productos.map(function (p) {
          var pl = p.toLowerCase();
          var c = pl.indexOf('rezaga') !== -1 ? ' rezaga' : pl.indexOf('lim') !== -1 ? ' limon' : pl.indexOf('chile') !== -1 ? ' chile' : '';
          return '<span class="chip' + c + '">' + p + '</span>';
        }).join('');
        return '<div class="basc-row"><span class="basc-date">' + b.fecha + '</span><div class="basc-chips">' + chips + '</div></div>';
      }).join('');
    document.getElementById('outboundTitle').textContent = 'Calidad Exportación · ' + ub.fecha;

    var avgPrima = ub.variedades.reduce(function (s,v) { return s + v.primera; }, 0) / ub.variedades.length;
    var avgMerma = ub.variedades.reduce(function (s,v) { return s + v.merma;   }, 0) / ub.variedades.length;
    var alertas  = ub.variedades.filter(function (v) { return v.alerta; }).length;
    var hist     = D.calidad.historico;
    var prevPrima = hist.length >= 2 ? hist[hist.length - 2].primaPromedio : null;
    var primaDiff = prevPrima != null ? (avgPrima - prevPrima).toFixed(1) : null;
    var primaDir  = prevPrima != null && avgPrima >= prevPrima ? '▲' : '▼';

    /* ── Inline summary bar ── */
    document.getElementById('calidadSummary').innerHTML =
      '<div class="cal-summary">' +
        '<span class="cal-sum-item good">1ª Primera prom: <strong>' + pct(avgPrima) + '</strong>' +
          (primaDiff != null ? ' <span style="font-size:.72rem">' + primaDir + ' ' + (primaDiff > 0 ? '+' : '') + primaDiff + 'pp</span>' : '') + '</span>' +
        '<span class="cal-sum-sep">·</span>' +
        '<span class="cal-sum-item ' + (avgMerma > 4 ? 'bad' : avgMerma > 3 ? 'warn' : 'good') + '">Merma prom: <strong>' + pct(avgMerma) + '</strong></span>' +
        '<span class="cal-sum-sep">·</span>' +
        '<span class="cal-sum-item ' + (alertas > 0 ? 'bad' : 'good') + '">' + alertas + ' / ' + ub.variedades.length + ' alertas</span>' +
        '<span class="cal-sum-sep">·</span>' +
        '<span class="cal-sum-item" style="font-size:.72rem;color:var(--muted)">' + ub.variedades.length + ' variedades · ' + ub.fecha + '</span>' +
      '</div>';

    /* ── Compact variety rows (shared renderer) ── */
    var renderQualRow = function (v, extraBadge) {
      var tot    = v.primera + v.segunda + v.tercera + v.merma;
      var pCls   = v.primera >= 90 ? 'ok' : 'warn';
      var mCls   = v.merma > 4 ? 'bad' : v.merma > 3 ? 'warn' : 'ok';
      var mBadge = '<span class="qual-merma-badge ' + mCls + '">Merma ' + pct(v.merma) + '</span>';
      return '<div class="qual-row">' +
        '<div class="qr-name">' +
          '<div class="qr-label">' + v.nombre.replace(v.etiqueta || '', '').trim() + '</div>' +
          '<div class="qr-tag">' + (v.etiqueta || '') + (v.alerta ? ' &nbsp;⚠' : '') + (extraBadge || '') + '</div>' +
        '</div>' +
        '<div class="qr-bar">' +
          '<div class="qrb-1" style="width:' + (v.primera/tot*100).toFixed(1) + '%"></div>' +
          '<div class="qrb-2" style="width:' + (v.segunda/tot*100).toFixed(1) + '%"></div>' +
          '<div class="qrb-3" style="width:' + (v.tercera/tot*100).toFixed(1) + '%"></div>' +
          '<div class="qrb-m" style="width:' + (v.merma/tot*100).toFixed(1) + '%"></div>' +
        '</div>' +
        '<div class="qr-primera ' + pCls + '">' + pct(v.primera) + '</div>' +
        '<div class="qr-merma">' + mBadge + '</div>' +
        '<div class="qr-peso">' + fmtN(v.peso,2) + ' lb</div>' +
      '</div>';
    };

    /* Día anterior */
    document.getElementById('qualidadRows').innerHTML = ub.variedades.map(function (v) {
      return renderQualRow(v, '');
    }).join('');

    /* chartCalidad is initialized lazily in initChartsForTab('tomate') to avoid hidden-canvas sizing issues */

    /* Últimos 7 días */
    var sw = D.calidad.semana;
    if (sw && sw.variedades && sw.variedades.length) {
      var avgP7 = sw.variedades.reduce(function(s,v){return s+v.primera;},0)/sw.variedades.length;
      var avgM7 = sw.variedades.reduce(function(s,v){return s+v.merma;},0)/sw.variedades.length;
      document.getElementById('calidadSemana').innerHTML =
        '<div class="cal-summary">' +
          '<span class="cal-sum-item good">1ª Primera prom: <strong>' + pct(avgP7) + '</strong></span>' +
          '<span class="cal-sum-sep">·</span>' +
          '<span class="cal-sum-item ' + (avgM7 > 4 ? 'bad' : avgM7 > 3 ? 'warn' : 'good') + '">Merma prom: <strong>' + pct(avgM7) + '</strong></span>' +
          '<span class="cal-sum-sep">·</span>' +
          '<span class="cal-sum-item" style="font-size:.72rem;color:var(--muted)">' + sw.variedades.length + ' variedades · ' + sw.desde + ' – ' + sw.hasta + '</span>' +
        '</div>' +
        '<div class="card" style="padding:0">' +
          sw.variedades.map(function (v) {
            var diasBadge = v.dias != null ? '<span class="dias-badge">' + v.dias + '/7 días</span>' : '';
            return renderQualRow(v, diasBadge);
          }).join('') +
        '</div>';
    } else {
      document.getElementById('calidadSemana').innerHTML =
        '<div class="card" style="padding:16px;color:var(--muted);font-size:.84rem">Sin datos de la semana disponibles.</div>';
    }
  }

  /* ════════════════ PREDICCIONES IA ════════════════ */
  function renderPredicciones() {
    var P = D.predicciones;
    var el = document.getElementById('prediccionesIA');
    if (!P || !el) return;

    var arrowMap   = { alcista:'↑', bajista:'↓', lateral:'→' };
    var trendLabel = { alcista:'Alcista', bajista:'Bajista', lateral:'Lateral' };

    el.innerHTML =
      '<div class="pred-header-meta">' +
        '<span class="pred-model-chip">✦ ' + (P.modelo || 'Claude') + '</span>' +
        '<span class="pred-horizon-chip">Horizonte: ' + (P.horizonte || '7 días') + '</span>' +
        '<span class="pred-updated">Generado: ' + (P.generado || '') + '</span>' +
      '</div>' +
      '<div class="pred-grid">' +
      (P.items || []).map(function(p) {
        var trend  = p.tendencia || 'lateral';
        var arrow  = arrowMap[trend]  || '→';
        var projColor = trend === 'alcista' ? 'var(--green2)' : trend === 'bajista' ? 'var(--red2)' : '#6366f1';
        var projMid = ((p.precio_proyectado.min + p.precio_proyectado.max) / 2).toFixed(2);
        var nowMid  = ((p.precio_actual.min    + p.precio_actual.max)    / 2).toFixed(2);

        return '<div class="pred-card ' + trend + '">' +

          /* Top row: product name + trend indicator */
          '<div class="pred-top">' +
            '<div>' +
              '<div class="pred-product-name">' + p.producto + '</div>' +
              '<div class="pred-unit">' + p.unidad + '</div>' +
            '</div>' +
            '<div class="pred-trend-col">' +
              '<span class="pred-arrow">' + arrow + '</span>' +
              '<div class="pred-conf-pct">' + p.confianza + '% conf.</div>' +
              '<div class="pred-conf-bar-wrap" style="width:48px">' +
                '<div class="pred-conf-bar-fill" style="width:' + p.confianza + '%"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          /* Price comparison */
          '<div class="pred-price-row">' +
            '<div class="pred-p-now">' +
              '<div class="pred-p-lbl">Precio actual</div>' +
              '<div class="pred-p-val">$' + p.precio_actual.min + '–' + p.precio_actual.max + '</div>' +
              '<div class="pred-conf-bar-wrap" style="margin-top:5px"><div class="pred-conf-bar-fill" style="width:100%;background:rgba(0,0,0,.12)"></div></div>' +
            '</div>' +
            '<div class="pred-p-arrow">' + arrow + '</div>' +
            '<div class="pred-p-proj" style="text-align:right">' +
              '<div class="pred-p-lbl">Proyectado 7 días</div>' +
              '<div class="pred-p-val" style="color:' + projColor + '">$' + p.precio_proyectado.min + '–' + p.precio_proyectado.max + '</div>' +
              '<div style="font-size:.65rem;color:' + projColor + ';font-weight:700;margin-top:3px">' +
                (function(){
                  var chg = ((projMid - nowMid) / nowMid * 100);
                  return (chg >= 0 ? '+' : '') + chg.toFixed(1) + '% mid estimado';
                })() +
              '</div>' +
            '</div>' +
          '</div>' +

          /* Razonamiento */
          '<div class="pred-razon">' + p.razonamiento + '</div>' +

          /* Factores */
          '<div class="pred-factors">' +
            (p.factores || []).map(function(f){
              return '<span class="pred-factor">' + f + '</span>';
            }).join('') +
          '</div>' +

          /* Riesgo */
          '<div class="pred-risk">' +
            '<div class="pred-risk-lbl">Riesgo principal</div>' +
            p.riesgo +
          '</div>' +

          /* Acción CEO */
          '<div class="pred-action">' +
            '<div class="pred-action-lbl">Acción CEO</div>' +
            p.accion +
          '</div>' +

          /* Footer */
          '<div class="pred-footer">' +
            '<span class="pred-model-lbl">✦ ' + (P.modelo || 'Claude') + ' · ' + trendLabel[trend] + ' · ' + p.confianza + '% confianza</span>' +
          '</div>' +

        '</div>';
      }).join('') +
      '</div>';
  }

  /* ════════════════ MERCADO ════════════════ */
  function renderMercado() {
    renderPredicciones();
    var srcEl = document.getElementById('mercadoFechaSrc');
    if (srcEl) srcEl.textContent = D.mercado.reporte + ' · ' + D.mercado.fecha;

    /* Hero cards */
    document.getElementById('priceHeroCards').innerHTML = D.mercado.precios.map(function (p) {
      var mid    = (p.min + p.max) / 2;
      var chgPct = p.anterior ? ((mid - p.anterior) / p.anterior * 100) : null;
      var chgStr = chgPct != null
        ? (chgPct >= 0 ? '▲ +' : '▼ ') + chgPct.toFixed(1) + '% vs ant.'
        : 'Sin dato anterior';
      var chgDir = chgPct == null ? 'na' : chgPct >= 0 ? 'up' : 'dn';
      var n   = p.producto.toLowerCase();
      var cls = (n.indexOf('tomate') !== -1 || n.indexOf('vine') !== -1 || n.indexOf('grape') !== -1)
              ? 'hero-tomate'
              : (n.indexOf('jalape') !== -1 || n.indexOf('serrano') !== -1)
              ? 'hero-jalap'
              : 'hero-other';
      return '<div class="price-hero ' + cls + '">' +
        '<div class="ph-label">' + p.producto + '</div>' +
        '<div class="ph-price">$' + p.min + (p.max !== p.min ? '–' + p.max : '') + '</div>' +
        '<div class="ph-change ' + chgDir + '">' + chgStr + '</div>' +
        '<div class="ph-sub">' + p.via + '</div>' +
      '</div>';
    }).join('');

    /* Price compare cards — sorted Tomate → Limón → Pepino → otros */
    var sorted = D.mercado.precios.slice().sort(function (a, b) {
      var rank = function (p) {
        var n = p.producto.toLowerCase();
        return n.indexOf('tomate') !== -1 || n.indexOf('vine') !== -1 || n.indexOf('grape') !== -1 ? 0
             : n.indexOf('lim') !== -1 ? 1 : n.indexOf('pepino') !== -1 ? 2 : 3;
      };
      return rank(a) - rank(b);
    });
    var scaleMax = Math.max.apply(null, sorted.map(function (p) { return p.max; })) * 1.15;
    document.getElementById('priceCompareGrid').innerHTML = sorted.map(function (p) {
      var mid    = (p.min + p.max) / 2;
      var chgPct = p.anterior != null ? ((mid - p.anterior) / p.anterior * 100) : null;
      var chgStr = chgPct != null
        ? (chgPct >= .5 ? '▲ +' : chgPct <= -.5 ? '▼ ' : '→ ') + Math.abs(chgPct).toFixed(1) + '% vs semana anterior'
        : 'Sin comparativo anterior';
      var chgCls = chgPct == null ? 'neu' : chgPct > .5 ? 'up' : chgPct < -.5 ? 'dn' : 'neu';
      var barColor = chgPct == null
        ? 'rgba(107,114,128,.4)'
        : chgPct > 10  ? 'rgba(22,163,74,.85)'
        : chgPct > 0   ? 'rgba(22,163,74,.55)'
        : chgPct > -10 ? 'rgba(220,38,38,.55)'
        :                'rgba(220,38,38,.85)';
      var minPct  = (p.min / scaleMax * 100).toFixed(1);
      var widPct  = ((p.max - p.min) / scaleMax * 100).toFixed(1);
      var antPct  = p.anterior != null ? (p.anterior / scaleMax * 100).toFixed(1) : null;
      return '<div class="pc-card' + (p.alerta ? ' pc-alert' : '') + '">' +
        '<div class="pc-header">' +
          '<div class="pc-name">' + p.producto + '</div>' +
          '<span class="badge badge-blue">' + p.via + '</span>' +
        '</div>' +
        '<div class="pc-range">' + fmt(p.min,2) + '&nbsp;–&nbsp;' + fmt(p.max,2) + '</div>' +
        '<div class="pc-chg ' + chgCls + '">' + chgStr + '</div>' +
        '<div class="pc-bar-wrap">' +
          '<div class="pc-bar-fill" style="left:' + minPct + '%;width:' + widPct + '%;background:' + barColor + '"></div>' +
          (antPct != null ? '<div class="pc-bar-tick" style="left:' + antPct + '%"></div>' : '') +
        '</div>' +
        '<div class="pc-footer">' +
          '<span>' + (p.anterior != null ? 'Anterior: ' + fmt(p.anterior,2) : 'Sin dato ant.') + '</span>' +
          '<span>Mid: ' + fmt(mid,2) + '</span>' +
        '</div>' +
      '</div>';
    }).join('');

    /* Executive summary */
    document.getElementById('mercadoResumenBox').innerHTML =
      '<p style="font-size:.86rem;line-height:1.7;color:var(--text2)">' + D.mercado.resumen + '</p>';

    /* News list */
    document.getElementById('noticiasList').innerHTML = D.mercado.noticias.map(function (n) {
      var bc = n.impacto === 'Alto' ? 'badge-red' : n.impacto === 'Moderado' ? 'badge-yellow' : 'badge-gray';
      return '<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">' +
        '<span class="badge ' + bc + '" style="flex-shrink:0;margin-top:1px">' + n.impacto + '</span>' +
        '<div><div style="font-size:.84rem;font-weight:600;color:var(--text)">' + n.titulo + '</div>' +
        '<div style="font-size:.71rem;color:var(--muted);margin-top:2px">Fuente: ' + n.fuente + '</div></div>' +
      '</div>';
    }).join('');
  }

  /* ════════════════ FINANZAS ════════════════ */
  /* ════════════════════════════════════════════════════
     CASH FLOW ANALYSIS
  ════════════════════════════════════════════════════ */
  function renderCashFlow() {
    var cf = D.cashflow;
    if (!cf) return;

    /* ── If Excel data is pending, show the season-level CF view ── */
    if (cf.pendiente_excel) {
      var stEl = document.getElementById('cfSrcTag');
      if (stEl) stEl.textContent = cf.fuente + ' · ' + cf.fecha_cierre;

      var req = cf.saldo_requerido_cierre || 0;
      var calPP = D.calavo ? ((D.calavo.pickPack||0) + (D.calavo.revenueTotal||0)) : 0;

      var sigItems = (cf.pagos_ciclo_siguiente || []).map(function(p) {
        return '<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(0,0,0,.06)">' +
          '<span style="color:var(--accent2);font-size:.8rem">›</span>' +
          '<span style="font-size:.78rem;color:var(--text)">' + p.concepto + '</span>' +
          '<span style="margin-left:auto;font-size:.66rem;color:var(--muted)">' + p.nota + '</span>' +
        '</div>';
      }).join('');

      document.getElementById('cfCard').innerHTML =
        /* Header */
        '<div class="cf-header">' +
          '<div style="flex:1">' +
            '<div style="font-size:1rem;font-weight:800;letter-spacing:-.3px;color:var(--text)">' + cf.periodo + '</div>' +
            '<div style="font-size:.71rem;color:var(--muted);margin-top:2px">Modelo ' + (cf.modelo||'OL 8+4') + ' · Cierre al ' + cf.fecha_cierre + ' · ' + cf.moneda + '</div>' +
          '</div>' +
          '<div class="cf-semaforo yellow"><span class="cf-semaforo-dot"></span>⚠ PENDIENTE EXCEL</div>' +
        '</div>' +

        /* Hero: saldo requerido */
        '<div style="background:rgba(239,68,68,.07);border:1.5px solid rgba(239,68,68,.25);border-radius:12px;padding:22px 24px;margin-bottom:18px">' +
          '<div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#f87171;margin-bottom:8px">Saldo Requerido para Cerrar la Temporada</div>' +
          '<div style="font-size:2.4rem;font-weight:900;letter-spacing:-1px;color:#f87171">' + fmt(req) + '</div>' +
          '<div style="font-size:.77rem;color:var(--muted);margin-top:6px;line-height:1.5">' +
            'Necesario para cubrir todos los compromisos hasta el cierre del ciclo GC 2025–2026,<br>' +
            'incluyendo pagos de arranque del ciclo 2026–2027 ya incorporados en el forecast.' +
          '</div>' +
        '</div>' +

        /* 2-col: modelo + pagos ciclo siguiente */
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px">' +
          '<div style="background:var(--bg);border-radius:var(--r);padding:18px 20px">' +
            '<div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:14px">Modelo Forecast · OL 8+4</div>' +
            '<div style="display:flex;gap:10px;margin-bottom:14px">' +
              '<div style="flex:1;background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.2);border-radius:8px;padding:12px;text-align:center">' +
                '<div style="font-size:1.5rem;font-weight:900;color:var(--green2)">8</div>' +
                '<div style="font-size:.65rem;color:var(--muted);margin-top:2px">meses reales<br>Jul 25 – Feb 26</div>' +
              '</div>' +
              '<div style="flex:1;background:rgba(234,179,8,.08);border:1px solid rgba(234,179,8,.2);border-radius:8px;padding:12px;text-align:center">' +
                '<div style="font-size:1.5rem;font-weight:900;color:#facc15">4</div>' +
                '<div style="font-size:.65rem;color:var(--muted);margin-top:2px">meses forecast<br>Mar – Jun 26</div>' +
              '</div>' +
            '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);line-height:1.6">' +
              'Los números de línea detallados están en el Excel adjunto<br>' +
              '<span style="color:var(--accent2);font-weight:600">"Cash Flow ABSA GC 2025-2026 Update 22 Marzo 2026.xlsx"</span><br>' +
              'Captúralos para activar el análisis completo.' +
            '</div>' +
          '</div>' +
          '<div style="background:var(--bg);border-radius:var(--r);padding:18px 20px">' +
            '<div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:12px">Pagos Incluidos · Ciclo 2026–2027</div>' +
            sigItems +
          '</div>' +
        '</div>' +

        /* Calavo settlements as proxy context */
        '<div style="background:var(--bg);border-radius:var(--r);padding:16px 20px">' +
          '<div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:10px">Contexto · Cobros Calavo Confirmados en Temporada</div>' +
          '<div style="font-size:.78rem;color:var(--muted)">Pick &amp; Pack WK01–WK12 confirmado: <strong style="color:var(--green2)">' + fmt(D.calavo ? D.calavo.pickPack : 0) + '</strong> · ' +
          'Revenue FOB bruto: <strong style="color:var(--green2)">' + fmt(D.calavo ? D.calavo.revenueTotal : 0) + '</strong> · ' +
          'Saldo Due from Calavo: <strong style="color:' + ((D.calavo&&D.calavo.saldoActual||0)<0?'var(--red2)':'var(--green2)') + '">' + fmt(D.calavo ? D.calavo.saldoActual : 0) + '</strong></div>' +
        '</div>';

      return; /* skip full render until Excel data is captured */
    }

    /* ── Totals (full render when pendiente_excel = false) ── */
    var totEnt = cf.entradas.reduce(function(s,e){ return s + (e.monto||0); }, 0);
    var totSal = cf.salidas.reduce(function(s,e){ return s + (e.monto||0); }, 0);
    var neto   = totEnt - totSal;
    var saldoFin = (cf.saldo_inicial||0) + neto;
    var coverage = totSal > 0 ? totEnt / totSal : 999;

    /* ── Budget totals ── */
    var totEntBud = cf.entradas.reduce(function(s,e){ return s + (e.budget||0); }, 0);
    var totSalBud = cf.salidas.reduce(function(s,e){ return s + (e.budget||0); }, 0);

    /* ── Burn rate (avg salidas last 3 months of historico) ── */
    var hist = cf.historico;
    var lastThree = hist.slice(-3);
    var burnRate = lastThree.length ? lastThree.reduce(function(s,h){ return s + h.salidas; }, 0) / lastThree.length : totSal;
    var runway = burnRate > 0 ? (saldoFin / burnRate) : 0;

    /* ── Over-budget items (salidas only, sorted by $ variance desc) ── */
    var overBudget = cf.salidas
      .filter(function(s){ return s.budget > 0 && s.monto > s.budget; })
      .map(function(s){ return { concepto:s.concepto, monto:s.monto, budget:s.budget, varAbs:s.monto-s.budget, varPct:(s.monto-s.budget)/s.budget*100 }; })
      .sort(function(a,b){ return b.varAbs - a.varAbs; });

    /* ── CF trend (last 3 months neto: improving / deteriorating / stable) ── */
    var trendDir = 'estable';
    if (hist.length >= 3) {
      var n1 = hist[hist.length-1].neto, n2 = hist[hist.length-2].neto, n3 = hist[hist.length-3].neto;
      if (n1 > n2 && n2 > n3)      trendDir = 'mejorando';
      else if (n1 < n2 && n2 < n3) trendDir = 'deteriorando';
    }

    /* ── Semáforo ── */
    var criticalOver = overBudget.filter(function(o){ return o.varPct >= 30; });
    var semColor, semLabel, semIcon;
    if (coverage < 1.05 || criticalOver.length >= 2) {
      semColor = 'red'; semLabel = 'RIESGO'; semIcon = '⚠';
    } else if (coverage < 1.4 || criticalOver.length >= 1 || trendDir === 'deteriorando') {
      semColor = 'yellow'; semLabel = 'ATENCIÓN'; semIcon = '●';
    } else {
      semColor = 'green'; semLabel = 'SANO'; semIcon = '✓';
    }

    /* ── Source tag ── */
    var stEl = document.getElementById('cfSrcTag');
    if (stEl) stEl.textContent = cf.fuente + ' · ' + cf.fecha_cierre;

    /* ── Build insights ── */
    var insights = [];

    /* Gap de cierre */
    if (cf.saldo_forecast) {
      var bridgeTotal = (cf.bridge || []).reduce(function(s,b){ return s + b.monto; }, 0);
      insights.push({ icon: '🔴', title: 'Déficit CF al 31-Jul: ' + fmt(Math.abs(cf.saldo_forecast)),
        sub: 'Base OL sin ajuste: ' + fmt(cf.saldo_forecast) + '. Bridge escenario (precio +$3/caja + WK 4/4 + BanBajío + sorgo): ' + fmt(bridgeTotal) + ' → saldo ajustado ' + fmt(cf.saldo_ajustado) + '.' });
    }

    /* Break-even */
    if (cf.breakeven_precio_por_caja) {
      var pm = cf.precio_mercado || {};
      var beActual = pm.precio_actual_fob != null ? pm.precio_actual_fob : null;
      var beDelta  = beActual != null ? (beActual - cf.breakeven_precio_target) : null;
      var beIcon = beDelta != null && beDelta >= 0 ? '🟢' : '🔴';
      var beSub = 'FOB promedio sem 12 · Calavo · al 24-Mar: $' + (beActual != null ? beActual.toFixed(2) : '—') + '. Meta break-even: $' + cf.breakeven_precio_target + '/caja · ' + (cf.breakeven_volumen/1000).toFixed(0) + 'K cajas.';
      if (pm.precio_requerido_ol) beSub += ' Precio promedio requerido Mar 26–Jun 30: $' + pm.precio_requerido_ol.toFixed(2) + '.';
      if (pm.semana_actual_promedio) beSub += ' Mercado inicio sem 13: ~$' + pm.semana_actual_promedio + '/caja.';
      var beTitle = 'Break-even $' + cf.breakeven_precio_target + '/caja · FOB sem 12: $' + (beActual != null ? beActual.toFixed(2) : '—');
      if (beDelta != null) beTitle += beDelta >= 0 ? ' (+$' + beDelta.toFixed(2) + ' sobre meta)' : ' (−$' + Math.abs(beDelta).toFixed(2) + ' bajo meta)';
      insights.push({ icon: beIcon, title: beTitle, sub: beSub });
    }

    /* Anticipos */
    if (cf.anticipos_por_pagar) {
      insights.push({ icon: '🟡', title: 'Anticipos venta nacional por liquidar: ' + fmt(cf.anticipos_por_pagar),
        sub: 'Recibidos ' + fmt(cf.anticipos_recibidos) + ' · Aplicados ' + fmt(cf.anticipos_aplicados) + ' · Pendientes ' + fmt(cf.anticipos_por_pagar) + '. Comprometidos con compradores nacionales.' });
    }

    /* Trend */
    var trendIcon = trendDir === 'mejorando' ? '📈' : trendDir === 'deteriorando' ? '📉' : '➡️';
    insights.push({ icon: trendIcon, title: 'Tendencia flujo neto forecast: ' + trendDir,
      sub: hist.filter(function(h){ return h.tipo==='forecast'; }).map(function(h){ return h.mes + ' ' + fmt(h.neto); }).join(' → ') + '. Las pérdidas mensuales se reducen conforme llegan los pagos de Calavo.' });

    /* ── Waterfall bars ── */
    var maxVal = Math.max(totEnt, saldoFin, cf.saldo_inicial) * 1.05;
    function wfBar(val, color, label, amtLabel) {
      var w = (Math.abs(val) / maxVal * 100).toFixed(1);
      return '<div class="cf-wf-row">' +
        '<div class="cf-wf-label"><span>' + label + '</span><span style="color:' + color + '">' + amtLabel + '</span></div>' +
        '<div class="cf-wf-track"><div class="cf-wf-bar" style="width:' + w + '%;background:' + color + '"></div></div>' +
      '</div>';
    }

    /* ── Variance helper ── */
    function varCell(monto, budget) {
      if (!budget) return '<td class="cf-td-var cf-var-ok">—</td>';
      var v = (monto - budget) / budget * 100;
      var cls = v > 15 ? 'cf-var-over' : v < -5 ? 'cf-var-under' : 'cf-var-ok';
      var sign = v > 0 ? '+' : '';
      return '<td class="cf-td-var ' + cls + '">' + sign + v.toFixed(1) + '%</td>';
    }

    /* ── Entradas table ── */
    var entHTML = cf.entradas.map(function(e) {
      var fcBadge = e.forecast ? '<span style="font-size:.55rem;font-weight:700;padding:1px 5px;border-radius:4px;background:rgba(234,179,8,.12);color:#fbbf24;margin-left:5px;vertical-align:middle">FCST</span>' : '';
      return '<tr>' +
        '<td class="cf-td-concepto">' + e.concepto + fcBadge + '</td>' +
        '<td class="cf-td-cat">' + e.categoria + '</td>' +
        '<td class="cf-td-monto" style="color:' + (e.forecast ? 'rgba(22,163,74,.6)' : 'var(--green2)') + '">' + fmt(e.monto) + '</td>' +
        '<td class="cf-td-var cf-var-ok">—</td>' +
      '</tr>';
    }).join('');

    /* ── Salidas table ── */
    var salHTML = cf.salidas.map(function(s) {
      var fcBadge = '<span style="font-size:.55rem;font-weight:700;padding:1px 5px;border-radius:4px;background:rgba(234,179,8,.12);color:#fbbf24;margin-left:5px;vertical-align:middle">FCST</span>';
      return '<tr>' +
        '<td class="cf-td-concepto">' + s.concepto + fcBadge + '</td>' +
        '<td class="cf-td-cat">' + s.categoria + '</td>' +
        '<td class="cf-td-monto">' + fmt(s.monto) + '</td>' +
        '<td class="cf-td-var cf-var-ok">—</td>' +
      '</tr>';
    }).join('');

    /* ── Render ── */
    document.getElementById('cfCard').innerHTML =
      /* Header */
      '<div class="cf-header">' +
        '<div style="flex:1">' +
          '<div style="font-size:1rem;font-weight:800;letter-spacing:-.3px;color:var(--text)">' + cf.periodo + '</div>' +
          '<div style="font-size:.71rem;color:var(--muted);margin-top:2px">Último real ' + cf.fecha_cierre + ' · Forecast Jul 31, 2026 · ' + cf.moneda + '</div>' +
        '</div>' +
        '<div class="cf-semaforo ' + semColor + '"><span class="cf-semaforo-dot"></span>' + semIcon + ' ' + semLabel + '</div>' +
      '</div>' +

      /* KPI strip */
      '<div class="cf-kpi-strip">' +
        '<div class="cf-kpi"><div class="cf-kpi-lbl">Saldo Inicial</div><div class="cf-kpi-val" style="color:var(--muted)">' + fmt(cf.saldo_inicial) + '</div></div>' +
        '<div class="cf-kpi"><div class="cf-kpi-lbl">Total Entradas</div><div class="cf-kpi-val" style="color:var(--green2)">' + fmt(totEnt) + '</div><div class="cf-kpi-sub">budget ' + fmt(totEntBud) + '</div></div>' +
        '<div class="cf-kpi"><div class="cf-kpi-lbl">Total Salidas</div><div class="cf-kpi-val" style="color:var(--text)">' + fmt(totSal) + '</div><div class="cf-kpi-sub">budget ' + fmt(totSalBud) + '</div></div>' +
        '<div class="cf-kpi"><div class="cf-kpi-lbl">Flujo Neto</div><div class="cf-kpi-val" style="color:' + (neto >= 0 ? 'var(--green2)' : 'var(--red)') + '">' + (neto >= 0 ? '+' : '') + fmt(neto) + '</div></div>' +
        '<div class="cf-kpi" style="background:rgba(239,68,68,.07);border-color:rgba(239,68,68,.25)"><div class="cf-kpi-lbl">Saldo Final</div><div class="cf-kpi-val" style="color:' + (saldoFin < 0 ? '#f87171' : '#a5b4fc') + '">' + fmt(Math.round(saldoFin)) + '</div><div class="cf-kpi-sub">cobertura ' + coverage.toFixed(2) + '×</div></div>' +
        (cf.precio_mercado ? (function(){
          var pm = cf.precio_mercado;
          var actual = pm.precio_actual_fob;
          var delta = actual - cf.breakeven_precio_target;
          var bg = delta >= 0 ? 'rgba(34,197,94,.08)' : 'rgba(239,68,68,.07)';
          var bc = delta >= 0 ? 'rgba(34,197,94,.3)'  : 'rgba(239,68,68,.25)';
          var vc = delta >= 0 ? '#4ade80' : '#f87171';
          var sign = delta >= 0 ? '+' : '';
          var sub = sign + '$' + delta.toFixed(2) + ' vs meta $' + cf.breakeven_precio_target;
          return '<div class="cf-kpi" style="background:' + bg + ';border-color:' + bc + '"><div class="cf-kpi-lbl">FOB Avg Sem 12</div><div class="cf-kpi-val" style="color:' + vc + '">$' + actual.toFixed(2) + '</div><div class="cf-kpi-sub">' + sub + '</div></div>';
        })() : '') +
      '</div>' +

      /* Main grid: waterfall + analysis */
      '<div class="cf-main-grid">' +
        /* Waterfall */
        '<div class="cf-waterfall">' +
          '<div class="cf-wf-title">Flujo de Caja · Cascada</div>' +
          wfBar(cf.saldo_inicial, 'rgba(99,102,241,.7)', 'Saldo Inicial', fmt(cf.saldo_inicial)) +
          wfBar(totEnt, 'rgba(22,163,74,.8)', '+ Entradas', fmt(totEnt)) +
          '<div class="cf-wf-sep"></div>' +
          wfBar(totSal, 'rgba(59,130,246,.8)', '− Salidas', fmt(totSal)) +
          '<div class="cf-wf-sep"></div>' +
          wfBar(saldoFin, saldoFin < 0 ? 'rgba(239,68,68,.85)' : 'rgba(22,163,74,.85)', '= Saldo Final', fmt(Math.round(saldoFin))) +
        '</div>' +

        /* Analysis */
        '<div class="cf-analysis">' +
          '<div class="cf-analysis-hdr">Análisis · Señales Clave</div>' +
          insights.map(function(i) {
            return '<div class="cf-insight">' +
              '<div class="cf-insight-icon">' + i.icon + '</div>' +
              '<div class="cf-insight-body">' +
                '<div class="cf-insight-title">' + i.title + '</div>' +
                '<div class="cf-insight-sub">' + i.sub + '</div>' +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>' +

      /* Tables: entradas / salidas */
      '<div class="cf-tables-grid">' +
        '<div class="cf-tbl-wrap">' +
          '<div class="cf-tbl-hdr"><span>Entradas</span><span class="cf-tbl-hdr-total" style="color:var(--green2)">' + fmt(totEnt) + '</span></div>' +
          '<table class="cf-tbl"><tbody>' + entHTML + '</tbody>' +
          '<tfoot class="cf-tbl-foot"><tr>' +
            '<td colspan="2">Total Entradas</td>' +
            '<td class="cf-td-monto" style="color:var(--green2)">' + fmt(totEnt) + '</td>' +
            '<td class="cf-td-var cf-var-ok">—</td>' +
          '</tr></tfoot></table>' +
        '</div>' +
        '<div class="cf-tbl-wrap">' +
          '<div class="cf-tbl-hdr"><span>Salidas</span><span class="cf-tbl-hdr-total">' + fmt(totSal) + '</span></div>' +
          '<table class="cf-tbl"><tbody>' + salHTML + '</tbody>' +
          '<tfoot class="cf-tbl-foot"><tr>' +
            '<td colspan="2">Total Salidas</td>' +
            '<td class="cf-td-monto">' + fmt(totSal) + '</td>' +
            '<td class="cf-td-var cf-var-ok">—</td>' +
          '</tr></tfoot></table>' +
        '</div>' +
      '</div>' +

      /* Saldo chart */
      '<div class="cf-chart-card">' +
        '<div class="cf-chart-title">Saldo de Caja · Evolución Mensual <span style="font-size:.6rem;font-weight:400;color:var(--muted)">real ▬  forecast ╌</span></div>' +
        '<div class="chart-box"><canvas id="chartCFTendencia"></canvas></div>' +
      '</div>' +

      /* Break-even + pagos ciclo siguiente */
      '<div class="cf-bottom-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px">' +
        /* Break-even + bridge */
        '<div style="display:flex;flex-direction:column;gap:10px">' +
          (cf.breakeven_precio_por_caja ? (function(){
            var pm = cf.precio_mercado || {};
            var actual = pm.precio_actual_fob != null ? pm.precio_actual_fob : null;
            var atMeta = actual != null && actual >= cf.breakeven_precio_target;
            var beColor = atMeta ? 'rgba(34,197,94,.06)' : 'rgba(239,68,68,.06)';
            var beBorder = atMeta ? 'rgba(34,197,94,.25)' : 'rgba(239,68,68,.18)';
            var beLblColor = atMeta ? '#4ade80' : '#f87171';
            var actualBlock = actual != null
              ? '<div style="text-align:center">' +
                  '<div style="font-size:.6rem;color:' + beLblColor + '">ACTUAL</div>' +
                  '<div style="font-size:1.4rem;font-weight:900;color:' + beLblColor + '">$' + actual.toFixed(2) + '</div>' +
                  (atMeta ? '<div style="font-size:.55rem;font-weight:800;color:#4ade80;background:rgba(34,197,94,.15);border-radius:4px;padding:1px 5px;margin-top:2px">EN META ✓</div>' : '') +
                '</div>' +
                '<div style="font-size:.9rem;color:var(--muted)">↔</div>'
              : '';
            return '<div style="background:' + beColor + ';border:1px solid ' + beBorder + ';border-radius:12px;padding:16px 18px">' +
              '<div style="font-size:.58rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:' + beLblColor + ';margin-bottom:10px">Break-Even Price · Escenario Total</div>' +
              '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:10px">' +
                '<div style="text-align:center">' +
                  '<div style="font-size:.6rem;color:var(--muted)">OL Base</div>' +
                  '<div style="font-size:1.4rem;font-weight:900;color:var(--muted)">$' + cf.breakeven_precio_base + '</div>' +
                '</div>' +
                '<div style="font-size:1.1rem;color:var(--muted)">→</div>' +
                '<div style="text-align:center">' +
                  '<div style="font-size:.6rem;color:' + beLblColor + '">Break-Even</div>' +
                  '<div style="font-size:1.4rem;font-weight:900;color:' + beLblColor + '">$' + cf.breakeven_precio_target + '</div>' +
                '</div>' +
                '<div style="font-size:1.1rem;color:var(--muted)">→</div>' +
                actualBlock +
                '<div style="text-align:center;margin-left:auto;background:rgba(239,68,68,.1);border-radius:8px;padding:6px 10px">' +
                  '<div style="font-size:.6rem;color:#f87171">Δ requerido</div>' +
                  '<div style="font-size:1.1rem;font-weight:900;color:#f87171">+$' + cf.breakeven_precio_por_caja + '/caja</div>' +
                  '<div style="font-size:.6rem;color:var(--muted)">' + Number(cf.breakeven_volumen).toLocaleString('en-US') + ' cajas</div>' +
                '</div>' +
              '</div>' +
              (pm.rango_tipico_min != null
                ? '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px">' +
                    '<span style="font-size:.65rem;color:var(--muted);background:var(--bg);border-radius:6px;padding:3px 8px">Rango típico: <strong style="color:var(--text)">$' + pm.rango_tipico_min + '–$' + pm.rango_tipico_max + '</strong></span>' +
                    '<span style="font-size:.65rem;color:var(--muted);background:var(--bg);border-radius:6px;padding:3px 8px">Sweet spot: <strong style="color:#fbbf24">$' + pm.sweet_spot + '</strong></span>' +
                    '<span style="font-size:.65rem;color:var(--muted);background:var(--bg);border-radius:6px;padding:3px 8px">Pico histórico: <strong style="color:#f87171">$' + pm.pico_historico + '</strong> (3 días)</span>' +
                  '</div>'
                : '') +
              '<div style="font-size:.68rem;color:var(--muted)">Cubre el déficit completo de <strong style="color:#f87171">' + fmt(Math.abs(cf.saldo_forecast||0)) + '</strong>.' +
                (actual != null ? ' FOB avg sem 12 · Calavo · al 24-Mar: <strong style="color:' + (atMeta ? '#4ade80' : '#f87171') + '">$' + actual.toFixed(2) + '</strong>' + (pm.precio_requerido_ol ? ' · Precio promedio requerido OL: $' + pm.precio_requerido_ol.toFixed(2) : '') + '.' : '') + '</div>' +
            '</div>';
          })() : '') +
          /* Bridge */
          (cf.bridge && cf.bridge.length ? '<div style="background:rgba(234,179,8,.06);border:1px solid rgba(234,179,8,.2);border-radius:12px;padding:16px 18px">' +
            '<div style="font-size:.58rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:#fbbf24;margin-bottom:10px">Bridge · Escenario Realista (+$3/caja)</div>' +
            cf.bridge.map(function(b) {
              return '<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.05)">' +
                '<span style="font-size:.72rem;color:var(--text)">' + b.concepto + '</span>' +
                '<span style="font-size:.78rem;font-weight:700;color:#4ade80;flex-shrink:0;margin-left:8px">+' + fmt(b.monto) + '</span>' +
              '</div>';
            }).join('') +
            '<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:6px;border-top:1px solid rgba(234,179,8,.25)">' +
              '<span style="font-size:.7rem;font-weight:700;color:var(--muted)">Saldo ajustado</span>' +
              '<span style="font-size:.85rem;font-weight:900;color:#fbbf24">' + fmt(cf.saldo_ajustado||0) + '</span>' +
            '</div>' +
          '</div>' : '') +
          (cf.contratos && cf.contratos.length ? '<div style="background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.18);border-radius:12px;padding:16px 18px">' +
            '<div style="font-size:.58rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:#a5b4fc;margin-bottom:10px">Contratos vs Spot · Volumen por Mes</div>' +
            '<table style="width:100%;border-collapse:collapse;font-size:.72rem">' +
              '<thead><tr style="border-bottom:1px solid rgba(0,0,0,.07)">' +
                '<th style="padding:4px 6px;text-align:left;font-size:.6rem;color:var(--muted);font-weight:700">Mes</th>' +
                '<th style="padding:4px 6px;text-align:right;font-size:.6rem;color:var(--muted);font-weight:700">Contrato</th>' +
                '<th style="padding:4px 6px;text-align:right;font-size:.6rem;color:var(--muted);font-weight:700">Spot</th>' +
                '<th style="padding:4px 6px;text-align:right;font-size:.6rem;color:var(--muted);font-weight:700">$/caja</th>' +
              '</tr></thead><tbody>' +
            cf.contratos.map(function(c) {
              return '<tr style="border-bottom:1px solid rgba(0,0,0,.05)">' +
                '<td style="padding:5px 6px;font-weight:600">' + c.mes + '</td>' +
                '<td style="padding:5px 6px;text-align:right;color:#a5b4fc">' + c.cajas_contrato.toLocaleString('en-US') + '</td>' +
                '<td style="padding:5px 6px;text-align:right;color:#fbbf24">' + (c.cajas_spot > 0 ? c.cajas_spot.toLocaleString('en-US') : '—') + '</td>' +
                '<td style="padding:5px 6px;text-align:right;color:var(--muted)">$' + c.precio_contrato.toFixed(2) + '<span style="font-size:.55rem;margin-left:3px">+escal. >' + c.escalador_desde + '</span></td>' +
              '</tr>';
            }).join('') +
            '</tbody></table>' +
            '<div style="font-size:.62rem;color:var(--muted);margin-top:8px">Escalador: participación adicional por caja cuando mercado supera $' + cf.contratos[0].escalador_desde + '/caja. Ej: mercado $30 → +$10/caja.</div>' +
          '</div>' : '') +
        '</div>' +
        /* Pagos ciclo siguiente */
        (cf.pagos_ciclo_siguiente && cf.pagos_ciclo_siguiente.length ? '<div style="background:var(--bg);border-radius:12px;padding:18px 20px">' +
          '<div style="font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:10px">Inversiones Arranque GC 2026–2027</div>' +
          cf.pagos_ciclo_siguiente.map(function(p) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04)">' +
              '<span style="font-size:.73rem;color:var(--text)">' + p.concepto + '</span>' +
              '<div style="text-align:right;flex-shrink:0;margin-left:8px">' +
                '<div style="font-size:.78rem;font-weight:700;color:var(--accent2)">' + fmt(p.monto) + '</div>' +
                '<div style="font-size:.6rem;color:var(--muted)">' + p.fecha + '</div>' +
              '</div>' +
            '</div>';
          }).join('') +
          '<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:6px">' +
            '<span style="font-size:.7rem;font-weight:700;color:var(--muted)">Total inversiones</span>' +
            '<span style="font-size:.82rem;font-weight:900;color:var(--accent2)">' + fmt(cf.pagos_ciclo_siguiente.reduce(function(s,p){ return s+(p.monto||0); },0)) + '</span>' +
          '</div>' +
        '</div>' : '<div></div>') +
      '</div>';

    /* ── Forecast detail table ── */
    var fcstMonths = hist.filter(function(h){ return h.tipo === 'forecast' || h.tipo === 'mixto'; });
    var fcstEl = document.getElementById('cfCard');
    if (fcstMonths.length) {
      var fcstHTML = '<div style="background:var(--bg);border-radius:var(--r);overflow:hidden;margin-bottom:18px">' +
        '<div style="padding:12px 16px;font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);border-bottom:1px solid var(--border);display:flex;justify-content:space-between">' +
          '<span>Detalle Forecast · Mes a Mes</span>' +
          '<span style="color:#fbbf24">Mar 26 – Jul 31, 2026</span>' +
        '</div>' +
        '<table style="width:100%;border-collapse:collapse;font-size:.75rem">' +
          '<thead><tr style="border-bottom:1px solid var(--border)">' +
            '<th style="padding:8px 14px;text-align:left;font-size:.62rem;color:var(--muted);font-weight:700">Mes</th>' +
            '<th style="padding:8px 14px;text-align:right;font-size:.62rem;color:var(--muted);font-weight:700">Entradas</th>' +
            '<th style="padding:8px 14px;text-align:right;font-size:.62rem;color:var(--muted);font-weight:700">Salidas</th>' +
            '<th style="padding:8px 14px;text-align:right;font-size:.62rem;color:var(--muted);font-weight:700">Neto</th>' +
            '<th style="padding:8px 14px;text-align:right;font-size:.62rem;color:var(--muted);font-weight:700">Saldo</th>' +
          '</tr></thead><tbody>' +
        fcstMonths.map(function(h) {
          var tipoBadge = h.tipo === 'mixto'
            ? '<span style="font-size:.52rem;font-weight:700;padding:1px 5px;border-radius:4px;background:rgba(99,102,241,.15);color:#a5b4fc;margin-left:5px">MIXTO</span>'
            : '<span style="font-size:.52rem;font-weight:700;padding:1px 5px;border-radius:4px;background:rgba(234,179,8,.12);color:#fbbf24;margin-left:5px">FCST</span>';
          var netColor = h.neto >= 0 ? 'var(--green2)' : '#f87171';
          var saldoColor = h.saldo >= 0 ? 'var(--text)' : '#f87171';
          var notaHtml = h.nota ? '<div style="font-size:.6rem;color:var(--muted);margin-top:2px">' + h.nota + '</div>' : '';
          return '<tr style="border-bottom:1px solid rgba(255,255,255,.04)">' +
            '<td style="padding:9px 14px;color:var(--text);font-weight:600">' + h.mes + tipoBadge + notaHtml + '</td>' +
            '<td style="padding:9px 14px;text-align:right;color:var(--green2);font-weight:600;font-variant-numeric:tabular-nums">' + (h.entradas != null ? fmt(h.entradas) : '—') + '</td>' +
            '<td style="padding:9px 14px;text-align:right;color:var(--text);font-variant-numeric:tabular-nums">' + (h.salidas != null ? fmt(h.salidas) : '—') + '</td>' +
            '<td style="padding:9px 14px;text-align:right;color:' + netColor + ';font-weight:700;font-variant-numeric:tabular-nums">' + (h.neto >= 0 ? '+' : '') + fmt(h.neto) + '</td>' +
            '<td style="padding:9px 14px;text-align:right;color:' + saldoColor + ';font-weight:800;font-variant-numeric:tabular-nums">' + fmt(h.saldo) + '</td>' +
          '</tr>';
        }).join('') +
        '</tbody></table></div>';
      var chartCard = document.getElementById('cfCard');
      /* Insert before chart */
      var chartDiv = chartCard.querySelector('.cf-chart-card');
      if (chartDiv) chartCard.insertBefore(Object.assign(document.createElement('div'), {innerHTML: fcstHTML}).firstChild, chartDiv);
    }

    /* ── Chart: Saldo de Caja ── */
    var ctx = document.getElementById('chartCFTendencia');
    if (ctx) {
      var saldoActual   = hist.map(function(h){ return h.tipo === 'real' ? h.saldo : null; });
      var saldoForecast = hist.map(function(h){ return h.tipo !== 'real' ? h.saldo : null; });
      var junctionIdx = hist.findIndex(function(h){ return h.tipo !== 'real'; });
      if (junctionIdx > 0) saldoForecast[junctionIdx - 1] = hist[junctionIdx - 1].saldo;

      /* Auto-scale: keep actuals visible by clamping max to just above their range */
      var allSaldos = hist.map(function(h){ return h.saldo; }).filter(function(v){ return v != null; });
      var maxSaldo  = Math.max.apply(null, allSaldos);
      var minSaldo  = Math.min.apply(null, allSaldos);
      var yMax = Math.min(maxSaldo * 1.3, 150000);   /* show positive months clearly */
      var yMin = minSaldo * 1.08;

      new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
          labels: hist.map(function(h){ return h.mes; }),
          datasets: [
            { label:'Saldo · Real', data: saldoActual,
              borderColor:'rgba(99,102,241,.95)', backgroundColor:'rgba(99,102,241,.08)',
              tension:.3, fill:true, pointRadius:5, pointHoverRadius:7, borderWidth:2.5,
              pointBackgroundColor:'rgba(99,102,241,1)' },
            { label:'Saldo · Forecast', data: saldoForecast,
              borderColor:'rgba(250,204,21,.85)', backgroundColor:'rgba(250,204,21,.06)',
              tension:.3, fill:true, pointRadius:4, pointHoverRadius:6, borderWidth:2,
              borderDash:[6,4], pointBackgroundColor:'rgba(250,204,21,.9)' }
          ]
        },
        options: {
          responsive:true, maintainAspectRatio:true,
          plugins: {
            legend: { position:'top' },
            tooltip: { callbacks: { label: function(c){ return ' ' + c.dataset.label + ': $' + Number(c.parsed.y).toLocaleString('en-US', {maximumFractionDigits:0}); } } }
          },
          scales: {
            y: {
              min: yMin, max: yMax,
              ticks: { callback: function(v){ return v >= 1000000 || v <= -1000000 ? '$' + (v/1000000).toFixed(1) + 'M' : '$' + (v/1000).toFixed(0) + 'K'; }, maxTicksLimit: 8 },
            },
            x: { grid: { display:false } }
          }
        }
      });
    }
  }

  function renderFinanzas() {
    var cv = D.calavo;
    var pagos = cv.pagos;
    var totalPago = 0, totalCajas = 0, totalCont = 0, semCount = 0;
    pagos.forEach(function (p) {
      if (p.pago)  { totalPago += p.pago; semCount++; }
      if (p.cajas) totalCajas += p.cajas;
      if (p.cont)  totalCont  += p.cont;
    });
    var pendingWeeks = pagos.filter(function (p) { return p.estado === 'Pendiente'; }).length;

    /* ── CF Calavo summary card ── */
    var cvsaldo = cv.saldoActual;
    var saldoOK = cvsaldo != null && cvsaldo >= 0;
    var revF  = D.revenue || {};
    var tc3   = (D.tomate && D.tomate.ventas) || {};
    var nacC3 = (tc3.nacional && tc3.nacional[0]) || {};
    document.getElementById('finKpis').innerHTML =
      kpiCard('Exportación Calavo · Cajas Fact.', fmt(cv.revenueTotal),
        fmtN(totalCajas) + ' cajas facturadas · $' + (totalCajas ? (cv.revenueTotal/totalCajas).toFixed(2) : '—') + '/caja',
        'pos', 'accent-pos', pill('up', 'FOB Gross')) +
      kpiCard('Nacional · Cajas &amp; Revenue', fmt(revF.nacional || nacC3.revenue || 0),
        fmtN(nacC3.cajas || 0) + ' cajas · sin relación Calavo',
        'dark', 'accent-blue', pill('up', 'canal independiente')) +
      kpiCard('Pick &amp; Pack Recibido', fmt(cv.pickPack), 'WK01–WK' + semCount + ' · $5/caja · independiente de deuda',
        'dark', 'accent-blue', pill('up', '✓ ' + semCount + ' semanas pagadas')) +
      (function(){
        var dc = cv.deudaCalavo || {};
        var pend = dc.pendiente || 0;
        var cruce = dc.cruceEstimado || '—';
        return kpiCard('Pendiente Deuda Calavo', fmt(pend),
          'Liq. real inicia ~' + cruce + ' · Wire ≠ neto hasta cruzar $6M',
          'neg', 'accent-neg',
          pill('down', '⚠ ' + (dc.semanasEstimadas||'~3') + ' sem. para cruzar $0'));
      })();

    try { renderCashFlow(); } catch(e) { console.warn('renderCashFlow error:', e); }

    /* ── Deuda Total ABSA ── */
    (function() {
      var el = document.getElementById('finDeudaTotal');
      if (!el) return;
      var dd = D.deudas || {};
      var rs = dd.resumen || {};
      var bancos = dd.bancos || [];
      var prov   = dd.proveedores || {};
      var imp    = dd.impuestos || {};
      var dc     = (D.calavo && D.calavo.deudaCalavo) || {};

      var items = [
        { lbl:'Calavo',             val: rs.calavo    || 0, color:'#f59e0b', nota:'Wire semanal = amortización · liq. real ~WK18' },
        { lbl:'BanBajío',           val: 3850000,            color:'#ef4444', nota:'Vence May–Jul 2026 · 4 líneas' },
        { lbl:'Santander',          val:  490000,            color:'#ef4444', nota:'~$25K/mes · liquida Mar-2027' },
        { lbl:'Proveedores',        val: rs.proveedores|| 0, color:'#ff9f0a', nota:'Top: Celulosa $2.82M · Sierra $406K · Ahern $380K' },
        { lbl:'SAT + IMSS',         val: rs.impuestos || 0,  color:'#a78bfa', nota:'Convenio IMSS vigente · SAT/IVA pendiente' }
      ];
      var totalMostrado = items.reduce(function(s,i){ return s+i.val; }, 0);

      // Donut-style bar
      var barsHtml = items.map(function(it){
        var pct = totalMostrado > 0 ? (it.val / totalMostrado * 100) : 0;
        return '<div style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px">' +
            '<span style="font-size:.73rem;font-weight:600;color:var(--fg)">'+it.lbl+'</span>' +
            '<span style="font-size:.78rem;font-weight:700;color:'+it.color+'">'+fmt(it.val)+'</span>' +
          '</div>' +
          '<div style="background:rgba(255,255,255,.06);border-radius:4px;height:6px;overflow:hidden;margin-bottom:3px">' +
            '<div style="height:100%;width:'+pct.toFixed(1)+'%;background:'+it.color+';border-radius:4px"></div>' +
          '</div>' +
          '<div style="font-size:.62rem;color:var(--muted)">'+it.nota+'</div>' +
        '</div>';
      }).join('');

      // Vencimientos BanBajío
      var bb = bancos.find(function(b){ return b.banco === 'BanBajío'; }) || {};
      var venc = bb.vencimientos || {};
      var vencHtml =
        '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">Vencimientos BanBajío</div>' +
        ['mayo2026','junio2026','julio2026'].map(function(k){
          var mes = k.replace('2026','').replace('mayo','May').replace('junio','Jun').replace('julio','Jul');
          return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.73rem">' +
            '<span style="color:var(--muted)">'+mes+' 2026</span>' +
            '<span style="font-weight:700;color:#ef4444">'+fmt(venc[k]||0)+'</span>' +
          '</div>';
        }).join('');

      // Top proveedores
      var tops = (prov.principales||[]).slice(0,6);
      var topHtml =
        '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">Top Proveedores</div>' +
        tops.map(function(p){
          return '<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:.7rem">' +
            '<span style="color:var(--muted);max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+p.nombre+'</span>' +
            '<span style="font-weight:600;color:#ff9f0a">'+fmt(p.saldo)+'</span>' +
          '</div>';
        }).join('');

      el.innerHTML =
        /* Total banner */
        '<div style="display:flex;align-items:center;gap:16px;background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.18);border-radius:14px;padding:16px 20px;margin-bottom:14px">' +
          '<div style="flex:1">' +
            '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Deuda Total ABSA · Corte '+( dd.corte||'Mar-2026')+'</div>' +
            '<div style="font-size:2rem;font-weight:900;color:#ef4444;line-height:1">'+fmt(rs.total||dd.totalGeneral||0)+'</div>' +
            '<div style="font-size:.7rem;color:var(--muted);margin-top:4px">Calavo + Bancos + Proveedores + SAT/IMSS</div>' +
          '</div>' +
          '<div style="text-align:right">' +
            '<div style="font-size:.65rem;color:var(--muted)">Sin anticipos</div>' +
            '<div style="font-size:1.1rem;font-weight:700;color:#ef4444">'+fmt(rs.subtotal||0)+'</div>' +
            '<div style="font-size:.65rem;color:var(--muted);margin-top:6px">Anticipos Nacional</div>' +
            '<div style="font-size:.85rem;font-weight:600;color:#60a5fa">'+fmt(rs.anticiposNac||0)+'</div>' +
          '</div>' +
        '</div>' +

        '<div style="display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:16px">' +

          /* Left: bars */
          '<div class="card" style="padding:18px 20px">' +
            '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:12px">Composición</div>' +
            barsHtml +
          '</div>' +

          /* Center: BanBajío vencimientos */
          '<div class="card" style="padding:18px 20px">' +
            vencHtml +
            '<div style="margin-top:14px;background:rgba(239,68,68,.06);border-radius:8px;padding:10px 12px;font-size:.7rem;line-height:1.55;color:var(--muted)">' +
              '<b style="color:#ef4444">Urgente:</b> $1.1M vence May-2026 · $1.45M Jun · $1.3M Jul. Requiere liquidaciones Calavo o refinanciamiento.' +
            '</div>' +
          '</div>' +

          /* Right: top proveedores */
          '<div class="card" style="padding:18px 20px">' +
            topHtml +
            '<div style="margin-top:10px;font-size:.65rem;color:var(--muted)">'+fmt(prov.total||0)+' total · corte '+(prov.corte||'Mar-2026')+'</div>' +
          '</div>' +

        '</div>';
    })();

    /* ── Deuda Calavo & Camino a Liquidación Real ── */
    (function() {
      var el = document.getElementById('finAnticipo');
      if (!el) return;
      var dc    = cv.deudaCalavo || {};
      var total = dc.total || 6000000;
      var rec   = dc.amortizadoWk15 || 0;
      var pend  = dc.pendiente || (total - rec);
      var pct   = Math.min(100, (rec / total * 100));
      var pagos = dc.pagosAnticipo || [];
      var cruce = dc.cruceEstimadoFecha || '—';
      var cruceSem = dc.cruceEstimado || '—';
      var semsLeft = dc.semanasEstimadas || '—';
      var avg   = dc.avgLiq_wk11_14 || 0;

      var pagosHtml = pagos.map(function(p){
        var bgColor = p.tipo === 'Puente' ? 'rgba(96,165,250,.12)' : 'rgba(52,199,89,.10)';
        var txtColor = p.tipo === 'Puente' ? '#60a5fa' : '#34c759';
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:.73rem">' +
          '<span style="color:var(--muted)">'+p.fecha+'</span>' +
          '<span style="font-weight:600">'+fmt(p.monto)+'</span>' +
          '<span style="font-size:.62rem;padding:2px 8px;border-radius:8px;background:'+bgColor+';color:'+txtColor+';font-weight:700">'+p.tipo+'</span>' +
        '</div>';
      }).join('');

      el.innerHTML =
        /* Critical mechanic banner */
        '<div class="hoy-alert warning" style="margin-bottom:12px">' +
          '<div class="hoy-alert-ico">⚠</div>' +
          '<div class="hoy-alert-txt">' +
            '<b>Los wires semanales NO son dinero neto a Belher.</b> Son amortización de la deuda de $6M con Calavo. ' +
            'Calavo se cobra primero — solo después de recuperar los $6M comienza la liquidación real a Belher. ' +
            '<b style="color:#f59e0b">Estimado de cruce: '+cruceSem+' · '+cruce+'</b>' +
          '</div>' +
        '</div>' +

        '<div class="card" style="padding:20px 22px">' +
          '<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:28px">' +

            /* Left: progress + projection */
            '<div>' +
              /* Progress bar */
              '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Amortización · WK01–WK15</div>' +
              '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px">' +
                '<span style="font-size:1.5rem;font-weight:800;color:var(--accent2)">'+fmt(rec)+'</span>' +
                '<span style="font-size:.75rem;color:var(--muted)">de <b style="color:var(--fg)">'+fmt(total)+'</b> total</span>' +
              '</div>' +
              '<div style="background:rgba(255,255,255,.06);border-radius:8px;height:12px;overflow:hidden;margin-bottom:6px">' +
                '<div style="height:100%;width:'+pct.toFixed(1)+'%;background:linear-gradient(90deg,#fbbf24 0%,#f59e0b 60%,#34c759 100%);border-radius:8px"></div>' +
              '</div>' +
              '<div style="display:flex;justify-content:space-between;font-size:.69rem;margin-bottom:18px">' +
                '<span style="color:#34c759;font-weight:700">'+pct.toFixed(1)+'% amortizado</span>' +
                '<span style="color:#f59e0b;font-weight:700">'+fmt(pend)+' pendiente</span>' +
              '</div>' +

              /* Projection box */
              '<div style="background:rgba(52,199,89,.06);border:1.5px solid rgba(52,199,89,.2);border-radius:12px;padding:14px 16px">' +
                '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#34c759;margin-bottom:10px">Proyección — Inicio Liquidación Real</div>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
                  '<div><div style="font-size:.65rem;color:var(--muted)">Semana estimada</div><div style="font-size:1.3rem;font-weight:800;color:#34c759">'+cruceSem+'</div></div>' +
                  '<div><div style="font-size:.65rem;color:var(--muted)">Fecha aprox.</div><div style="font-size:.85rem;font-weight:700;color:var(--fg);margin-top:2px">'+cruce+'</div></div>' +
                  '<div><div style="font-size:.65rem;color:var(--muted)">Pendiente por cruzar</div><div style="font-size:.85rem;font-weight:700;color:#f59e0b;margin-top:2px">'+fmt(pend)+'</div></div>' +
                  '<div><div style="font-size:.65rem;color:var(--muted)">Ritmo WK11–WK14</div><div style="font-size:.85rem;font-weight:700;color:var(--muted);margin-top:2px">'+fmt(avg)+'/sem</div></div>' +
                '</div>' +
                '<div style="margin-top:10px;font-size:.7rem;color:var(--muted);line-height:1.5">A partir de '+cruceSem+', cada wire semanal es <b style="color:var(--fg)">ganancia neta real</b> para Belher.</div>' +
              '</div>' +
            '</div>' +

            /* Right: payment breakdown */
            '<div>' +
              '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Composición de la Deuda ($6M)</div>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">' +
                '<div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px">' +
                  '<div style="font-size:.62rem;color:var(--muted)">Anticipo capital</div>' +
                  '<div style="font-size:1.1rem;font-weight:800;color:#34c759">'+fmt(dc.anticipo||5000000)+'</div>' +
                  '<div style="font-size:.62rem;color:var(--muted)">4 × $1.25M · May–Ago 2025</div>' +
                '</div>' +
                '<div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px">' +
                  '<div style="font-size:.62rem;color:var(--muted)">Préstamo puente</div>' +
                  '<div style="font-size:1.1rem;font-weight:800;color:#60a5fa">'+fmt(dc.prestamoPuente||1000000)+'</div>' +
                  '<div style="font-size:.62rem;color:var(--muted)">Temporada anterior</div>' +
                '</div>' +
              '</div>' +
              pagosHtml +
              '<div style="margin-top:12px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:11px 14px;font-size:.71rem;line-height:1.6;color:var(--muted)">' +
                '<b style="color:var(--fg)">Pick &amp; Pack $5/caja</b> — Se liquida en paralelo, independiente de la deuda. ' +
                'WK01–WK15: <b style="color:var(--fg)">'+fmt(cv.pickPack)+'</b> recibido.' +
              '</div>' +
            '</div>' +

          '</div>' +
        '</div>';
    })();

    /* ── CF Calavo desglose ── */
    var cfRows = [
      { label:'Ventas brutas (FOB)',   val: cv.revenueTotal,   color:'var(--green2)',  bold:false },
      { label:'Comisión Calavo (22%)', val:-cv.comision,       color:'var(--red)',     bold:false, nota:'incluye gastos logísticos' },
      { label:'Expenses (Z-code)',     val:-cv.zCode,          color:'var(--red)',     bold:false },
      { label:'Venta Neta',            val: cv.ventaNeta||cv.neto, color:'var(--green2)', bold:true, sep:true },
      { label:'Pick & Pack recibido',  val:-cv.pickPack,       color:'var(--muted)',   bold:false },
      { label:'Préstamo Calavo',       val:-(cv.prestamo||0),  color:'var(--muted)',   bold:false },
      { label:'Intereses',             val:-(cv.intereses||0), color:'var(--muted)',   bold:false },
      { label:'Capital de trabajo',    val:-(cv.capitalTrabajo||0),color:'var(--muted)',bold:false },
      { label:'Balance temporada 2025',val:-(cv.saldoAnterior||0),color:'var(--muted)',bold:false },
      { label:'Due from (to) Beltran', val: cv.saldoActual||0, color: (cv.saldoActual||0) >= 0 ? 'var(--green2)' : 'var(--red)', bold:true, sep:true }
    ];
    document.getElementById('calavoDesglose').innerHTML =
      '<div class="resp-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:32px">' +
        '<div>' +
          '<div style="font-size:.63rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:14px">Settlement Calavo · WK01–WK12 · 15 Mar 2026</div>' +
          cfRows.map(function(r) {
            return '<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;' +
              (r.sep ? 'border-top:2px solid var(--dark);margin-top:4px;' : 'border-bottom:1px solid var(--border)') + '">' +
              '<span style="font-size:.84rem' + (r.bold?';font-weight:700':'') + '">' + r.label + (r.nota ? ' <span style="font-size:.63rem;color:#34c759;font-weight:600">['+r.nota+']</span>' : '') + '</span>' +
              '<span style="font-weight:' + (r.bold?'800':'600') + ';color:' + r.color + '">' + fmt(Math.abs(r.val)) +
                (r.val < 0 ? ' <span style="opacity:.4;font-size:.72rem">(salida)</span>' : '') +
              '</span></div>';
          }).join('') +
        '</div>' +
        '<div>' +
          '<div style="font-size:.63rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:14px">Resumen de Flujo</div>' +
          '<div style="background:var(--bg);border-radius:10px;padding:18px;margin-bottom:12px">' +
            '<div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Ventas Brutas Calavo</div>' +
            '<div style="font-size:2rem;font-weight:900;letter-spacing:-.5px;color:var(--green2)">' + fmt(cv.revenueTotal) + '</div>' +
            '<div style="font-size:.8rem;color:var(--muted)">Comisión 22%: ' + fmt(cv.comision) + ' · Z-code: ' + fmt(cv.zCode||0) + '</div>' +
          '</div>' +
          '<div style="background:var(--bg);border-radius:10px;padding:18px;margin-bottom:12px">' +
            '<div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Venta Neta</div>' +
            '<div style="font-size:2rem;font-weight:900;letter-spacing:-.5px;color:var(--green2)">' + fmt(cv.ventaNeta||cv.neto) + '</div>' +
            '<div style="font-size:.8rem;color:var(--muted)">Después de comisión 22% y Z-code expenses</div>' +
          '</div>' +
          '<div style="background:' + ((cv.saldoActual||0)<0?'rgba(220,38,38,.08)':'rgba(22,163,74,.08)') + ';border:1.5px solid ' + ((cv.saldoActual||0)<0?'var(--red2)':'var(--green2)') + ';border-radius:10px;padding:18px">' +
            '<div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Due from (to) Beltran</div>' +
            '<div style="font-size:2rem;font-weight:900;letter-spacing:-.5px;color:' + ((cv.saldoActual||0)<0?'var(--red)':'var(--green2)') + '">' + fmt(cv.saldoActual||0) + '</div>' +
            '<div style="font-size:.8rem;color:var(--muted)">' + ((cv.saldoActual||0)<0?'Calavo ha adelantado más del valor cosechado · Se liquida al cierre de temporada':'Balance a favor de Belher') + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* Settlement table */
    document.querySelector('#liquidTbl tbody').innerHTML = pagos.map(function (p) {
      var bmap = { Pagado: 'badge-green', Actual: 'badge-yellow', Pendiente: 'badge-gray' };
      var isPend = p.estado === 'Pendiente';
      return '<tr' + (isPend ? ' style="opacity:.45;font-style:italic"' : '') + '>' +
        '<td><strong>' + p.sem + '</strong></td>' +
        '<td>' + p.wire + '</td>' +
        '<td class="td-num">' + (p.pago  != null ? fmt(p.pago)   : '—') + '</td>' +
        '<td class="td-num">' + (p.cajas != null ? fmtN(p.cajas) : '—') + '</td>' +
        '<td class="td-num">' + (p.cont  != null ? p.cont        : '—') + '</td>' +
        '<td class="td-center"><span class="badge ' + (bmap[p.estado] || 'badge-gray') + '">' + p.estado + '</span></td>' +
      '</tr>';
    }).join('');

    document.getElementById('liquidFoot').innerHTML =
      '<tr style="background:var(--dark);color:#fff;font-weight:700">' +
        '<td colspan="2" style="padding:11px 15px;font-size:.75rem;letter-spacing:.8px">TOTAL CONFIRMADO</td>' +
        '<td class="td-num" style="padding:11px 15px">' + fmt(totalPago) + '</td>' +
        '<td class="td-num" style="padding:11px 15px">' + fmtN(totalCajas) + '</td>' +
        '<td class="td-num" style="padding:11px 15px">' + totalCont + '</td>' +
        '<td></td>' +
      '</tr>';

    /* ── TABLA VARIACIONES SEMANA A SEMANA ── */
    var pagosData = pagos.filter(function(p){ return p.pago != null; });
    var varRows = pagosData.map(function(p, i) {
      var prev = pagosData[i - 1];
      var deltaPago  = prev && prev.pago  ? ((p.pago  - prev.pago)  / prev.pago  * 100) : null;
      var deltaCajas = prev && prev.cajas ? ((p.cajas - prev.cajas) / prev.cajas * 100) : null;
      var fmtDelta = function(d) {
        if (d === null) return '<span style="color:var(--muted)">—</span>';
        var sign = d >= 0 ? '+' : '';
        var col  = d >= 0 ? 'var(--green)' : 'var(--red)';
        var arrow = d >= 0 ? '▲' : '▼';
        return '<span style="color:' + col + ';font-size:.78rem;font-weight:600">' + arrow + ' ' + sign + d.toFixed(1) + '%</span>';
      };
      var pp = p.cajas ? (p.pago / p.cajas).toFixed(2) : null;
      return '<tr>' +
        '<td><strong>' + p.sem + '</strong></td>' +
        '<td style="color:var(--muted);font-size:.78rem">' + p.wire + '</td>' +
        '<td class="td-num">' + fmt(p.pago) + '</td>' +
        '<td class="td-num">' + fmtDelta(deltaPago) + '</td>' +
        '<td class="td-num">' + (p.cajas != null ? fmtN(p.cajas) : '—') + '</td>' +
        '<td class="td-num">' + fmtDelta(deltaCajas) + '</td>' +
        '<td class="td-num" style="color:var(--muted);font-size:.78rem">' + (pp ? '$' + pp : '—') + '</td>' +
        '<td class="td-center"><span class="badge ' + ({'Pagado':'badge-green','Actual':'badge-yellow','Pendiente':'badge-gray'}[p.estado]||'badge-gray') + '">' + p.estado + '</span></td>' +
      '</tr>';
    }).join('');
    var pvEl = document.getElementById('pagosVariaciones');
    if (pvEl) pvEl.innerHTML =
      '<div class="tbl-wrap"><table>' +
        '<thead><tr>' +
          '<th>Sem</th>' +
          '<th>Wire</th>' +
          '<th class="td-num">P&amp;P</th>' +
          '<th class="td-num">Δ P&amp;P</th>' +
          '<th class="td-num">Cajas</th>' +
          '<th class="td-num">Δ Cajas</th>' +
          '<th class="td-num">$/caja</th>' +
          '<th class="td-center">Estado</th>' +
        '</tr></thead>' +
        '<tbody>' + varRows + '</tbody>' +
        '<tfoot><tr style="background:var(--dark);color:#fff;font-weight:700">' +
          '<td colspan="2" style="padding:10px 15px;font-size:.73rem;letter-spacing:.8px">TOTAL WK01–WK15</td>' +
          '<td class="td-num" style="padding:10px 15px">' + fmt(totalPago) + '</td>' +
          '<td></td>' +
          '<td class="td-num" style="padding:10px 15px">' + fmtN(totalCajas) + '</td>' +
          '<td></td>' +
          '<td class="td-num" style="padding:10px 15px;font-size:.78rem;color:#ccc">' + (totalCajas ? '$' + (totalPago/totalCajas).toFixed(2) : '—') + '</td>' +
          '<td></td>' +
        '</tr></tfoot>' +
      '</table></div>';

    /* ── PROYECCIÓN TEMPORADA RESTANTE ── */
    var paidWeeks = pagos.filter(function(p){ return p.pago && p.estado !== 'Pendiente'; });
    var avgPagoSem = paidWeeks.length ? totalPago / paidWeeks.length : 0;
    var avgCajasSem= paidWeeks.length ? totalCajas / paidWeeks.length : 0;
    var pendWeeks  = pagos.filter(function(p){ return p.estado === 'Pendiente'; });
    var actualWeeks= pagos.filter(function(p){ return p.estado === 'Actual'; });
    var estimPend  = pendWeeks.length * avgPagoSem;
    var estimActual= actualWeeks.length && actualWeeks[0].pago ? actualWeeks[0].pago : avgPagoSem;
    var projTotal  = totalPago + estimActual + estimPend;
    var projCajas  = totalCajas + (avgCajasSem * (pendWeeks.length + (actualWeeks.length && !actualWeeks[0].pago ? 1 : 0)));
    var finEl = document.getElementById('finProyeccion');
    if (finEl) {
      finEl.innerHTML =
        '<div class="fin-proj-grid">' +
          '<div class="fin-proj-box">' +
            '<div class="fin-proj-lbl">P&amp;P Confirmado · WK01–WK' + semCount + '</div>' +
            '<div class="fin-proj-val" style="color:var(--green2)">' + fmt(totalPago) + '</div>' +
            '<div class="fin-proj-sub">' + fmtN(totalCajas) + ' cajas · ' + totalCont + ' contenedores · ' + semCount + ' sem. pagadas</div>' +
          '</div>' +
          (actualWeeks.length ? '<div class="fin-proj-box">' +
            '<div class="fin-proj-lbl">Semana Actual · ' + actualWeeks[0].sem + ' (en proceso)</div>' +
            '<div class="fin-proj-val" style="color:var(--accent2)">' + (actualWeeks[0].pago ? fmt(actualWeeks[0].pago) : 'Wire pendiente') + '</div>' +
            '<div class="fin-proj-sub">Wire estimado: ' + actualWeeks[0].wire + '</div>' +
          '</div>' : '') +
          (pendWeeks.length ? '<div class="fin-proj-box">' +
            '<div class="fin-proj-lbl">' + pendWeeks.length + ' Semana' + (pendWeeks.length>1?'s':'') + ' Pendiente' + (pendWeeks.length>1?'s':'') + ' · Estimado</div>' +
            '<div class="fin-proj-val" style="color:var(--muted)">' + fmt(estimPend) + '</div>' +
            '<div class="fin-proj-sub">Basado en promedio ' + fmt(avgPagoSem) + '/sem · ' + pendWeeks.map(function(p){return p.sem;}).join(', ') + '</div>' +
          '</div>' : '') +
          '<div class="fin-proj-box" style="background:rgba(22,163,74,.06);border:1px solid rgba(22,163,74,.2)">' +
            '<div class="fin-proj-lbl">Proyección Total Temporada (P&amp;P)</div>' +
            '<div class="fin-proj-val" style="color:var(--green2)">' + fmt(projTotal) + '</div>' +
            '<div class="fin-proj-sub">≈ ' + fmtN(Math.round(projCajas)) + ' cajas · promedio ' + fmt(avgPagoSem) + '/sem</div>' +
          '</div>' +
        '</div>';
    }
  }

  /* ════════════════ CHARTS ════════════════ */
  function makeChart(cvs, config) {
    if (!cvs) return null;
    if (typeof Chart === 'undefined') return null;
    var ctx = cvs.getContext('2d');
    if (!ctx) return null;
    try { return new Chart(ctx, config); } catch(e) { return null; }
  }

  function initChartsForTab(tab) {

    /* Normalize renamed tabs */
    if (tab === 'optomate') tab = 'tomate';
    if (typeof Chart === 'undefined') return;

    /* ── When Campo tab loads, also initialize CDC (lazy render) ── */
    if (tab === 'tomate' && !chartsInit.cdcTab) {
      chartsInit.cdcTab = true;
      safeRender(renderCdc, 'cdc');
    }

    /* ── Nacional — Precio comparativo (now also rendered in Exportación & Campo tabs) ── */
    if ((tab === 'nacional' || tab === 'ventas' || tab === 'tomate') && !chartsInit.nacPrecio) {
      chartsInit.nacPrecio = true;
      (function() {
        var cvs = document.getElementById('chartNacPrecio');
        if (!cvs) return;
        var tv   = (D.tomate && D.tomate.ventas) || {};
        var nacC = (tv.nacional && tv.nacional[0]) || {};
        var rev  = D.revenue || {};
        var totCajasExp = 0;
        D.calavo.pagos.forEach(function(p){ totCajasExp += p.cajas||0; });
        var cajasNac = nacC.cajas || 1;
        var precNac  = (nacC.revenue || rev.nacional || 0) / cajasNac;
        var precExp  = totCajasExp > 0 ? (rev.fob || 0) / totCajasExp : 0;
        var ctx2d = cvs.getContext('2d');
        if (!ctx2d) return;
        new Chart(ctx2d, {
          type: 'bar',
          data: {
            labels: ['Nacional', 'Exportación Calavo'],
            datasets: [{
              data: [precNac, precExp],
              backgroundColor: ['rgba(59,130,246,.55)', 'rgba(52,199,89,.55)'],
              borderColor: ['rgba(59,130,246,.9)', 'rgba(52,199,89,.9)'],
              borderWidth: 2, borderRadius: 8
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true,
                   ticks: { callback: function(v){ return '$'+v.toFixed(2); }, font: { size: 10 } } },
              x: { grid: { display: false }, ticks: { font: { size: 11 } } }
            }
          }
        });
      })();
    }

    /* ── Ejecutivo — Cajas & FOB dual-axis ── */
    if (tab === 'ejecutivo' && !chartsInit.ejVolFob) {
      chartsInit.ejVolFob = true;
      (function() {
        var cvs = document.getElementById('chartEjVolFob');
        if (!cvs) return;
        var pag = D.calavo.pagos || [];
        var ph  = (D.tomate && D.tomate.preciosHistorico) || [];
        var labels   = pag.map(function(p){ return p.sem; });
        var cajas    = pag.map(function(p){ return p.cajas || 0; });
        var fobMap   = {};
        ph.forEach(function(p){ fobMap[p.sem] = p.fob; });
        var fobLine  = pag.map(function(p){ return fobMap[p.sem] != null ? fobMap[p.sem] : null; });
        var c2d = cvs.getContext('2d');
        if (!c2d) return;
        var grad = c2d.createLinearGradient(0,0,0,160);
        grad.addColorStop(0,'rgba(52,199,89,.28)');
        grad.addColorStop(1,'rgba(52,199,89,.0)');
        new Chart(c2d, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              { type:'bar',  label:'Cajas', data:cajas,   backgroundColor:'rgba(52,199,89,.55)', borderColor:'rgba(52,199,89,.85)', borderWidth:1, borderRadius:4, yAxisID:'y' },
              { type:'line', label:'FOB $/caja', data:fobLine, borderColor:'#d97706', backgroundColor:'rgba(217,119,6,.0)', borderWidth:2.5, pointRadius:3, pointBackgroundColor:'#d97706', tension:.35, yAxisID:'y2', spanGaps:false }
            ]
          },
          options: {
            responsive:true, maintainAspectRatio:false, interaction:{ mode:'index', intersect:false },
            plugins:{ legend:{ labels:{ boxWidth:10, font:{ size:10 } } }, tooltip:{ callbacks:{
              label: function(ctx){ return ctx.dataset.yAxisID==='y2' ? ' FOB $'+ctx.parsed.y.toFixed(2) : ' '+fmtN(ctx.parsed.y)+' cajas'; }
            }}},
            scales:{
              y:  { beginAtZero:true, ticks:{ callback:function(v){ return fmtN(v/1000)+'K'; }, font:{size:9} } },
              y2: { position:'right', beginAtZero:false, grid:{ drawOnChartArea:false }, ticks:{ callback:function(v){ return '$'+v.toFixed(0); }, font:{size:9} } }
            }
          }
        });
      })();
    }

    /* ── Ventas — Volumen vs FOB dual-axis (detailed) ── */
    if (tab === 'ventas' && !chartsInit.ventasVolFob) {
      chartsInit.ventasVolFob = true;
      (function() {
        var cvs = document.getElementById('chartVentasVolFob');
        if (!cvs) return;
        var liq = (D.calavoWeekly && D.calavoWeekly.liquidaciones) || [];
        /* Use preciosHistorico as fallback data source when liquidaciones is empty */
        if (!liq.length && D.calavo && D.calavo.pagos) {
          liq = D.calavo.pagos.filter(function(p){ return p.cajas != null; }).map(function(p){
            return { sem: p.sem, pkgs: p.cajas, fob: p.pago };
          });
        }
        if (!liq.length) {
          cvs.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:.78rem">Sin datos de liquidación disponibles</div>';
          return;
        }
        var ph  = (D.tomate && D.tomate.preciosHistorico) || [];
        var phMap = {};
        ph.forEach(function(p){ phMap[p.sem] = p; });
        var labels  = liq.map(function(r){ return r.sem; });
        var cajas   = liq.map(function(r){ return r.pkgs || 0; });
        var fobPrc  = liq.map(function(r){ return r.pkgs ? (r.fob / r.pkgs) : null; });
        var usdaArr = liq.map(function(r){ return phMap[r.sem] && phMap[r.sem].usda != null ? phMap[r.sem].usda : null; });
        var c2d = cvs.getContext('2d');
        if (!c2d) return;
        new Chart(c2d, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              { type:'bar',  label:'Cajas', data:cajas,  backgroundColor:'rgba(52,199,89,.55)', borderColor:'rgba(52,199,89,.85)', borderWidth:1, borderRadius:4, yAxisID:'y' },
              { type:'line', label:'FOB Calavo $/caja', data:fobPrc,  borderColor:'#d97706', backgroundColor:'transparent', borderWidth:2.5, pointRadius:4, pointBackgroundColor:'#d97706', tension:.3, yAxisID:'y2', spanGaps:true },
              { type:'line', label:'USDA Nogales', data:usdaArr, borderColor:'rgba(59,130,246,.8)', backgroundColor:'transparent', borderWidth:1.5, borderDash:[4,3], pointRadius:3, pointBackgroundColor:'rgba(59,130,246,.8)', tension:.3, yAxisID:'y2', spanGaps:false }
            ]
          },
          options:{
            responsive:true, maintainAspectRatio:false, interaction:{ mode:'index', intersect:false },
            plugins:{
              legend:{ labels:{ boxWidth:10, font:{size:10} } },
              tooltip:{ callbacks:{ label:function(ctx){
                return ctx.dataset.yAxisID==='y'
                  ? ' '+fmtN(ctx.parsed.y)+' cajas'
                  : ' $'+ctx.parsed.y.toFixed(2);
              }}}
            },
            scales:{
              y:  { beginAtZero:true, ticks:{ callback:function(v){ return fmtN(v/1000)+'K'; }, font:{size:9} } },
              y2: { position:'right', beginAtZero:false, min:8, grid:{ drawOnChartArea:false },
                    ticks:{ callback:function(v){ return '$'+v.toFixed(0); }, font:{size:9} },
                    afterDataLimits: function(axis){ axis.max = Math.max(axis.max, 30); } }
            }
          }
        });
      })();
    }

    /* ── Market Intelligence — Price History Charts ── */
    if (tab === 'market' && !chartsInit.miPriceCharts) {
      chartsInit.miPriceCharts = true;

      var miLabels = ['Mar 9','Mar 12','Mar 13','Mar 17','Mar 18','Mar 20','Mar 23','Mar 24','Mar 25','Mar 26','Mar 27','Mar 30','Abr 1','Abr 7'];
      var miVine   = [26.95, 25.95, 25.95, 26.95, 29.95, 31.95, 31.95, 39.95, 47.95, 47.95, 50.95, 47.95, 47.95, 56.95];
      var miRoma   = [15.95, 18.95, 18.45, 19.95, 24.45, 25.95, 29.95, 36.95, 39.95, 41.95, 42.95, 39.95, 39.95, 39.95];
      var miJal    = [35.00, 38.00, 35.00, 35.00, 43.50, 57.00, 61.00, 61.00, 49.00, 59.00, 59.00, 49.00, 51.50, 41.00];
      var miBell   = [14.95, 38.95, 39.95, 34.95,  null, 39.95, 41.95,  null, 43.95, 43.95, 44.95, 44.95, 45.95, 45.95];
      var miLimon  = [ null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null, 42.00, 63.00, 63.00];

      function miAvg(arr) {
        var v = arr.filter(function(x){ return x !== null; });
        return v.reduce(function(s,x){ return s+x; }, 0) / v.length;
      }
      function miAvgLine(arr) {
        var a = parseFloat(miAvg(arr).toFixed(2));
        return arr.map(function(v){ return v !== null ? a : null; });
      }
      function miRenderStat(elId, arr) {
        var valid = arr.filter(function(x){ return x !== null; });
        var last  = valid[valid.length-1];
        var first = valid[0];
        var a     = miAvg(arr);
        var pct   = ((last - first) / first * 100).toFixed(1);
        var dir   = pct >= 0 ? 'up' : 'dn';
        var arrow = pct >= 0 ? '▲' : '▼';
        var el = document.getElementById(elId);
        if (!el) return;
        el.innerHTML =
          '<div class="mi-stat-last">$' + last.toFixed(2) + '</div>' +
          '<div class="mi-stat-chg ' + dir + '">' + arrow + ' ' + Math.abs(pct) + '%</div>' +
          '<div class="mi-stat-avg">x̄ $' + a.toFixed(2) + '</div>';
      }
      miRenderStat('mi-stat-vine',  miVine);
      miRenderStat('mi-stat-roma',  miRoma);
      miRenderStat('mi-stat-jal',   miJal);
      miRenderStat('mi-stat-bell',  miBell);
      miRenderStat('mi-stat-limon', miLimon);

      function miMakeChart(canvasId, data, color) {
        var ctx = document.getElementById(canvasId);
        if (!ctx) return;
        var c2d = ctx.getContext('2d');
        var grad = c2d.createLinearGradient(0, 0, 0, 180);
        grad.addColorStop(0, color + '28');
        grad.addColorStop(1, color + '00');
        new Chart(c2d, {
          type: 'line',
          data: {
            labels: miLabels,
            datasets: [
              {
                label: 'Precio diario',
                data: data,
                borderColor: color,
                backgroundColor: grad,
                borderWidth: 2,
                pointRadius: 3.5,
                pointHoverRadius: 5.5,
                pointBackgroundColor: color,
                pointBorderColor: '#fff',
                pointBorderWidth: 1.5,
                fill: true,
                tension: .35,
                spanGaps: false
              },
              {
                label: 'Promedio período',
                data: miAvgLine(data),
                borderColor: color,
                borderWidth: 1.5,
                borderDash: [5, 4],
                pointRadius: 0,
                pointHoverRadius: 0,
                backgroundColor: 'transparent',
                fill: false,
                spanGaps: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function(ctx) {
                    var v = ctx.parsed.y;
                    if (v == null) return null;
                    return '  ' + ctx.dataset.label + ': $' + v.toFixed(2);
                  }
                }
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(0,0,0,.035)' },
                ticks: { maxRotation: 35, font: { size: 9.5 } }
              },
              y: {
                grid: { color: 'rgba(0,0,0,.035)' },
                ticks: { callback: function(v){ return '$' + v; }, font: { size: 10 } }
              }
            }
          }
        });
      }

      miMakeChart('chartMiVine',  miVine,  '#15803d');
      miMakeChart('chartMiRoma',  miRoma,  '#16a34a');
      miMakeChart('chartMiJal',   miJal,   '#d97706');
      miMakeChart('chartMiBell',  miBell,  '#7c3aed');
      miMakeChart('chartMiLimon', miLimon, '#0891b2');
    }

    /* ── Tomate — quality trend + fleet donut ── */
    if (tab === 'tomate' && !chartsInit.tomateCalidad) {
      chartsInit.tomateCalidad = true;

      /* Quality trend from calidad.historico */
      var hist = D.calidad.historico || [];
      var hLabels = hist.map(function (h) { return h.fecha; });
      var hPrima  = hist.map(function (h) { return h.primaPromedio; });
      var hMerma  = hist.map(function (h) { return h.mermaPromedio; });
      var ctxCal = document.getElementById('chartTomateCalidad');
      if (ctxCal) {
        new Chart(ctxCal.getContext('2d'), {
          type: 'line',
          data: {
            labels: hLabels,
            datasets: [
              {
                label: '1ª Prima %',
                data: hPrima,
                borderColor: 'rgba(22,163,74,.9)',
                backgroundColor: 'rgba(22,163,74,.08)',
                borderWidth: 2.5,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(22,163,74,.9)',
                tension: .35,
                fill: true,
                yAxisID: 'yPrima'
              },
              {
                label: 'Merma %',
                data: hMerma,
                borderColor: 'rgba(220,38,38,.85)',
                backgroundColor: 'rgba(220,38,38,.06)',
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(220,38,38,.85)',
                tension: .35,
                fill: true,
                yAxisID: 'yMerma'
              }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: true, position: 'top' },
              tooltip: {
                callbacks: {
                  label: function (ctx) { return ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) + '%'; }
                }
              }
            },
            scales: {
              yPrima: {
                type: 'linear', position: 'left',
                min: Math.max(0, Math.min.apply(null, hPrima) - 4),
                ticks: { callback: function (v) { return v + '%'; }, font: { size: 10 } },
                grid: { color: 'rgba(0,0,0,.045)' }
              },
              yMerma: {
                type: 'linear', position: 'right',
                min: 0,
                ticks: { callback: function (v) { return v + '%'; }, font: { size: 10 } },
                grid: { drawOnChartArea: false }
              }
            }
          }
        });
      }

      /* Fleet donut from embarques */
      var clasificarU = function (u) {
        u = (u||'').toUpperCase().trim();
        if (/^ST[\-\s]?\d/i.test(u)) return 'Transfrios';
        if (/^JL[\-\s]?\d/i.test(u)) return 'Elogística';
        if (/^CGG[\-\s]?\d/i.test(u)) return 'CGG';
        return 'Otros';
      };
      var embTom = (D.operaciones.embarques || []).filter(function (e) { return e.tipo === 'Tomate'; });
      var fleetMap = {};
      embTom.forEach(function (e) { var k = clasificarU(e.unidad); fleetMap[k] = (fleetMap[k] || 0) + (e.cargas || 1); });
      var fleetLabels = Object.keys(fleetMap);
      var fleetData   = fleetLabels.map(function (k) { return fleetMap[k]; });
      var fleetColors = ['rgba(22,163,74,.8)', 'rgba(29,78,216,.8)', 'rgba(217,119,6,.8)', 'rgba(107,114,128,.6)'];
      var ctxFleet = document.getElementById('chartTomateFlota');
      if (ctxFleet && fleetLabels.length) {
        new Chart(ctxFleet.getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: fleetLabels,
            datasets: [{
              data: fleetData,
              backgroundColor: fleetColors.slice(0, fleetLabels.length),
              borderWidth: 0,
              hoverOffset: 6
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
              legend: {
                display: true, position: 'bottom',
                labels: { font: { size: 10 }, padding: 10, boxWidth: 8, boxHeight: 8 }
              },
              tooltip: {
                callbacks: {
                  label: function (ctx) {
                    var total = ctx.dataset.data.reduce(function (a, b) { return a + b; }, 0);
                    return ctx.label + ': ' + ctx.parsed + ' cargas (' + (ctx.parsed / total * 100).toFixed(0) + '%)';
                  }
                }
              }
            }
          }
        });
      } else if (ctxFleet) {
        document.getElementById('tomateFleetCard').style.display = 'none';
      }

      /* Weekly volume chart (cajas per week from Calavo pagos) */
      var pagosVol = D.calavo.pagos.filter(function (p) { return p.cajas != null; });
      var volLabels = pagosVol.map(function (p) { return p.sem; });
      var volCajas  = pagosVol.map(function (p) { return p.cajas; });
      var maxCajas  = Math.max.apply(null, volCajas);
      var volColors = volCajas.map(function (c, i) {
        if (c === maxCajas) return 'rgba(22,163,74,.92)';
        if (i === volCajas.length - 1) return 'rgba(22,163,74,.65)';
        return 'rgba(22,163,74,.42)';
      });
      var ctxVol = document.getElementById('chartTomateVolumen');
      if (ctxVol) {
        new Chart(ctxVol.getContext('2d'), {
          type: 'bar',
          data: {
            labels: volLabels,
            datasets: [{
              label: 'Cajas',
              data: volCajas,
              backgroundColor: volColors,
              borderRadius: 6,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  title: function (ctx) { return ctx[0].label; },
                  label: function (ctx) {
                    var p = pagosVol[ctx.dataIndex];
                    return [
                      ctx.parsed.y.toLocaleString('en-US') + ' cajas',
                      'Wire: ' + fmt(p.pago) + ' · ' + p.cont + ' cont.'
                    ];
                  }
                }
              }
            },
            scales: {
              y: {
                ticks: { callback: function (v) { return v >= 1000 ? (v/1000).toFixed(0) + 'k' : v; }, font: { size: 10 } },
                grid: { color: 'rgba(0,0,0,.045)' }
              },
              x: { ticks: { font: { size: 10 } }, grid: { display: false } }
            }
          }
        });
      }
    }

    if (tab === 'tomate' && !chartsInit.embarques) {
      chartsInit.embarques = true;
      var emb = D.operaciones.embarques.filter(function (e) {
        var d = (e.destino || '').toLowerCase();
        return d.indexOf('texas') !== -1 || d.indexOf('arizona') !== -1 || d.indexOf('az') !== -1 || d.indexOf('tx') !== -1;
      }).sort(function (a, b) {
        var parse = function (f) { var p = f.split('/'); return new Date(+p[2], +p[1]-1, +p[0]); };
        return parse(a.fecha) - parse(b.fecha); /* oldest→newest for chart axis */
      }).slice(-12);
      var dateMap = {};
      emb.forEach(function (e) { dateMap[e.fecha] = (dateMap[e.fecha] || 0) + (e.cargas || 1); });
      var dates  = Object.keys(dateMap).sort();
      var counts = dates.map(function (d) { return dateMap[d]; });
      new Chart(document.getElementById('chartEmbarques').getContext('2d'), {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [{
            label: 'Cargas',
            data: counts,
            backgroundColor: 'rgba(22,163,74,.75)',
            borderRadius: 8, borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return ' ' + c.parsed.y + ' cargas'; } } } },
          scales: {
            y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: 'rgba(0,0,0,.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    /* ── Tomate: chartCalidad (quality trend) + chartTomatePrecio (Calavo price vs market) ── */
    if (tab === 'tomate' && !chartsInit.calidad) {
      chartsInit.calidad = true;
      var hist = D.calidad.historico;
      var ctxCQ = document.getElementById('chartCalidad');
      if (ctxCQ) {
        new Chart(ctxCQ.getContext('2d'), {
          type: 'bar',
          data: {
            labels: hist.map(function (h) { return h.fecha; }),
            datasets: [
              {
                type: 'line',
                label: '1ª Primera %',
                data: hist.map(function (h) { return h.primaPromedio; }),
                borderColor: '#16a34a', backgroundColor: 'rgba(22,163,74,.10)',
                tension: .35, pointRadius: 6, pointBackgroundColor: '#fff',
                pointBorderColor: '#16a34a', pointBorderWidth: 2.5,
                fill: true, yAxisID: 'yP', borderWidth: 2.5, order: 1
              },
              {
                type: 'bar',
                label: 'Merma %',
                data: hist.map(function (h) { return h.mermaPromedio; }),
                backgroundColor: hist.map(function (h) { return h.mermaPromedio > 4 ? 'rgba(220,38,38,.75)' : h.mermaPromedio > 3 ? 'rgba(217,119,6,.65)' : 'rgba(220,38,38,.35)'; }),
                borderRadius: 4, yAxisID: 'yM', order: 2, barPercentage: 0.5
              }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { position: 'top' },
              tooltip: { callbacks: { label: function (c) { return ' ' + c.dataset.label + ': ' + Number(c.parsed.y).toFixed(2) + '%'; } } }
            },
            scales: {
              yP: { type: 'linear', position: 'left',  min: 82, max: 98,
                    title: { display: true, text: '1ª Primera %' },
                    grid: { color: 'rgba(0,0,0,.05)' },
                    ticks: { callback: function (v) { return v + '%'; } } },
              yM: { type: 'linear', position: 'right', min: 0, max: 8,
                    title: { display: true, text: 'Merma %' },
                    grid: { drawOnChartArea: false },
                    ticks: { callback: function (v) { return v + '%'; } } }
            }
          }
        });
      }
    }

    /* ── Tomate: Precio FOB Calavo vs USDA Vine-ripe ── */
    if (tab === 'tomate' && !chartsInit.tomatePrecio) {
      chartsInit.tomatePrecio = true;
      var ph = (D.tomate && D.tomate.preciosHistorico) || [];
      var ctxTP = document.getElementById('chartTomatePrecio');
      if (ctxTP && ph.length) {
        var phLabels = ph.map(function(p){ return p.sem; });
        var phFob    = ph.map(function(p){ return p.fob; });
        var phUsda   = ph.map(function(p){ return p.usda; });
        /* Point styling: solid circle = real, open triangle = est */
        var phPtBg   = ph.map(function(p){ return p.tipo === 'real' ? '#15803d' : 'rgba(21,128,61,.35)'; });
        var phPtRad  = ph.map(function(p){ return p.tipo === 'real' ? 6 : 4; });
        new Chart(ctxTP.getContext('2d'), {
          type: 'line',
          data: {
            labels: phLabels,
            datasets: [
              {
                label: 'FOB Calavo (Belher)',
                data: phFob,
                borderColor: '#15803d',
                backgroundColor: 'rgba(21,128,61,.08)',
                borderWidth: 2.5,
                pointRadius: phPtRad,
                pointHoverRadius: 7,
                pointBackgroundColor: phPtBg,
                pointBorderColor: '#fff',
                pointBorderWidth: 1.5,
                fill: true,
                tension: .35
              },
              {
                label: 'USDA Vine-ripe Nogales (mercado)',
                data: phUsda,
                borderColor: '#d97706',
                backgroundColor: 'rgba(217,119,6,.06)',
                borderWidth: 2,
                borderDash: [5, 3],
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#d97706',
                pointBorderColor: '#fff',
                pointBorderWidth: 1.5,
                fill: false,
                tension: .35,
                spanGaps: false
              }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { position: 'top' },
              tooltip: {
                callbacks: {
                  label: function(ctx) {
                    var v = ctx.parsed.y;
                    if (v == null) return null;
                    var suffix = '';
                    if (ctx.datasetIndex === 0) {
                      var row = ph[ctx.dataIndex];
                      suffix = row && row.tipo === 'est' ? ' (est.)' : ' ✓ real';
                    }
                    return ' ' + ctx.dataset.label + ': $' + v.toFixed(2) + suffix;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                grid: { color: 'rgba(0,0,0,.045)' },
                ticks: { callback: function(v){ return '$' + v; }, font: { size: 10 } }
              },
              x: { grid: { display: false }, ticks: { font: { size: 10 } } }
            }
          }
        });
        /* Annotation: gap = spread between USDA and FOB */
        var lastReal = ph.filter(function(p){ return p.tipo==='real'; }).slice(-1)[0];
        if (lastReal && lastReal.usda) {
          var spread = (lastReal.usda - lastReal.fob).toFixed(2);
          var lbl = document.createElement('div');
          lbl.style.cssText = 'position:absolute;bottom:10px;right:12px;font-size:.6rem;font-weight:700;letter-spacing:.5px;background:rgba(217,119,6,.12);color:#92400e;padding:3px 8px;border-radius:6px;border:1px solid rgba(217,119,6,.3)';
          lbl.textContent = 'Spread USDA − Calavo: $' + spread + '/caja (WK12)';
          ctxTP.parentElement.style.position = 'relative';
          ctxTP.parentElement.appendChild(lbl);
        }
      }
    }

    /* ── CDC — lazy render on first visit ── */
    if (tab === 'cdc' && !chartsInit.cdcTab) {
      chartsInit.cdcTab = true;
      renderCdc();
    }

    /* ── CAADES — lazy render on first visit ── */
    if (tab === 'caades' && !chartsInit.caades) {
      chartsInit.caades = true;
      renderCaades();
    }

    if (tab === 'finanzas' && !chartsInit.finanzas) {
      chartsInit.finanzas = true;
      var cv  = D.calavo;
      var ebd = D.ebitda;
      var rv  = D.revenue;

      /* Revenue split card (removed from HTML — now only in HOY hero) */
      var fobPct = (rv.fob / rv.total * 100).toFixed(1);
      var nacPct = (rv.nacional / rv.total * 100).toFixed(1);
      var revSplitEl = document.getElementById('revSplitCard');
      if (revSplitEl) revSplitEl.innerHTML =
        '<div class="rev-total-label">Revenue Total · Temporada</div>' +
        '<div class="rev-total-hero">' + fmt(rv.total) + '</div>' +
        '<div class="rev-split-bar">' +
          '<div class="rev-bar-fob" style="width:' + fobPct + '%"></div>' +
          '<div class="rev-bar-nac" style="width:' + nacPct + '%"></div>' +
        '</div>' +
        '<div style="display:flex;gap:6px;font-size:.65rem;color:var(--muted);margin-bottom:18px">' +
          '<span style="color:var(--green2);font-weight:700">█</span> FOB Export ' + fobPct + '% &nbsp;' +
          '<span style="color:#1d4ed8;font-weight:700">█</span> Nacional ' + nacPct + '%' +
        '</div>' +
        '<div class="rev-split-row">' +
          '<div class="rev-split-item">' +
            '<span class="rev-split-name"><span class="rev-split-dot" style="background:var(--green2)"></span>FOB Exportación</span>' +
            '<span class="rev-split-val" style="color:var(--green2)">' + fmt(rv.fob) + '</span>' +
            '<span class="rev-split-pct">' + fobPct + '% del total</span>' +
          '</div>' +
          '<div class="rev-split-item">' +
            '<span class="rev-split-name"><span class="rev-split-dot" style="background:#1d4ed8"></span>Mercado Nacional</span>' +
            '<span class="rev-split-val" style="color:#1d4ed8">' + fmt(rv.nacional) + '</span>' +
            '<span class="rev-split-pct">' + nacPct + '% del total</span>' +
          '</div>' +
        '</div>';

      new Chart(document.getElementById('chartEbitda').getContext('2d'), {
        type: 'bar',
        data: {
          labels: [ebd.mes.nombre, ebd.ytd.nombre],
          datasets: [
            { label:'Actual',       data:[ebd.mes.actual,  ebd.ytd.actual],  backgroundColor:'rgba(22,163,74,.85)',  borderRadius:6 },
            { label:'Budget',       data:[ebd.mes.budget,  ebd.ytd.budget],  backgroundColor:'rgba(217,119,6,.75)',  borderRadius:6 },
            { label:'Año Anterior', data:[ebd.mes.yago,    ebd.ytd.yago],    backgroundColor:'rgba(29,78,216,.55)',  borderRadius:6 }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: function (c) { return ' ' + c.dataset.label + ': $' + Number(c.parsed.y).toLocaleString('en-US'); } } } },
          scales: { y: { ticks: { callback: function (v) { return '$' + (v/1e6).toFixed(1) + 'M'; } }, grid: { color:'rgba(0,0,0,.05)' } } }
        }
      });

      var pagosConf = cv.pagos.filter(function (p) { return p.pago != null; });
      new Chart(document.getElementById('chartPagos').getContext('2d'), {
        type: 'bar',
        data: {
          labels: pagosConf.map(function (p) { return p.sem; }),
          datasets: [{
            label: 'Pago USD',
            data: pagosConf.map(function (p) { return p.pago; }),
            backgroundColor: pagosConf.map(function (p) {
              return p.estado === 'Actual' ? 'rgba(217,119,6,.9)' : 'rgba(21,128,61,.7)';
            }),
            borderRadius: 5, borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return ' $' + Number(c.parsed.y).toLocaleString('en-US'); } } } },
          scales: {
            y: { ticks: { callback: function (v) { return '$' + (v/1000).toFixed(0) + 'k'; } }, grid: { color: 'rgba(0,0,0,.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }
  }

  /* ── TICKER ── */
  function renderTicker() {
    var items = D.ticker.concat(D.ticker);
    document.getElementById('tickerTrack').innerHTML = items.map(function (t) {
      var arrow = t.dir === 'up' ? '▲' : t.dir === 'down' ? '▼' : '●';
      var cls   = t.dir === 'up' ? 't-up' : t.dir === 'down' ? 't-down' : 't-neut';
      return '<span class="ticker-item">' +
        '<span class="t-name">' + t.label + '</span>' +
        '<span class="t-val">'  + t.valor  + '</span>' +
        '<span class="t-chg '  + cls + '">' + arrow + ' ' + t.cambio + '</span>' +
      '</span><span class="t-sep">|</span>';
    }).join('');
  }

  /* ── ESTRATEGIA ── */
  function renderEstrategia() {
    var E = D.estrategia;
    var impactColors = { Alta:'var(--red2)', Media:'var(--accent2)', Baja:'var(--muted)', danger:'var(--red2)', warning:'var(--accent2)', success:'var(--green2)', info:'#3b82f6' };
    function stratCard(item, lbl, bc, xc) {
      var impactKey = item.prioridad || item.nivel;
      var impactColor = impactColors[impactKey] || 'var(--muted)';
      /* Extract any mention of responsible person from accion text */
      var respMatch = (item.accion || '').match(/Antonio|Leima|Raymundo|Chrysthian|Irene|Armando|Hildelisa/);
      var resp = respMatch ? respMatch[0] : null;
      /* Extract any mention of a date */
      var dateMatch = (item.accion + ' ' + item.descripcion).match(/\d{1,2}[–-]\w+|\w+ \d{4}|WK\d{2}|\d{2}\/\d{2}/);
      var deadline = dateMatch ? dateMatch[0] : null;
      return '<div class="strat-card strat-' + (xc || item.nivel) + '">' +
        '<div class="strat-header"><span class="strat-title">' + item.titulo + '</span>' +
          '<span class="badge badge-' + bc + '">' + lbl + '</span></div>' +
        '<p class="strat-desc">' + item.descripcion + '</p>' +
        '<div class="strat-action">→ ' + item.accion + '</div>' +
        '<div class="strat-footer">' +
          (resp ? '<span style="color:var(--muted)">Responsable: <strong>' + resp + '</strong></span>' : '') +
          (deadline ? '<span style="color:var(--muted)">·</span><span style="color:var(--muted)">Ref: <strong>' + deadline + '</strong></span>' : '') +
          '<span class="strat-impact-badge" style="background:' + impactColor + '22;color:' + impactColor + ';margin-left:auto">' + (item.prioridad || item.nivel || '') + '</span>' +
        '</div>' +
      '</div>';
    }
    document.getElementById('contratosContainer').innerHTML =
      E.contratos.map(function (c) { return stratCard(c, c.estado, c.nivel); }).join('');
    document.getElementById('opContainer').innerHTML =
      E.oportunidades.map(function (o) { return stratCard(o, o.prioridad, o.prioridad === 'Alta' ? 'alta' : 'media', 'op'); }).join('');
    document.getElementById('watchContainer').innerHTML =
      E.watchlist.map(function (w) { return stratCard(w, 'Watchlist', w.nivel); }).join('');
    document.querySelector('#agendaTbl tbody').innerHTML =
      E.proximos.map(function (p) {
        return '<tr><td><span class="agenda-fecha">' + p.fecha + '</span></td>' +
          '<td>' + p.evento + '</td>' +
          '<td><span class="agenda-tipo tipo-' + p.tipo + '">' + p.tipo + '</span></td>' +
          '<td style="color:var(--muted);font-size:.76rem">' + p.participantes + '</td></tr>';
      }).join('');
  }

  /* ── INDUSTRIA ── */
  function renderCdc() {
    if (!D.cdc) return;
    var cdc = D.cdc;
    var b = cdc.beltran;
    var d = cdc.dorita;
    var bLast = b.historico[b.historico.length - 1];
    var dLast = d.historico[d.historico.length - 1];

    /* ── HERO CARDS ── */
    function heroCard(entry, pico, cls, accentColor) {
      var pctPico = pico.total ? Math.round(entry.total / pico.total * 100) : 0;
      var trabPct = entry.pct;
      return '<div class="cdc-hero-card ' + cls + '">' +
        '<div class="cdc-hero-name">' + (cls === 'beltran' ? 'Lo de Beltrán' : 'Campo Dorita') + ' · ' + entry.sem + '</div>' +
        '<div class="cdc-hero-total">' + entry.total.toLocaleString() + '</div>' +
        '<div class="cdc-hero-sub">personas en el CDC · pico temporada ' + pico.total.toLocaleString() + ' (' + pico.sem + ')</div>' +
        '<div class="cdc-bar-wrap" style="margin-bottom:6px">' +
          '<div class="cdc-bar-fill" style="width:' + pctPico + '%;background:' + accentColor + '"></div>' +
        '</div>' +
        '<div style="font-size:.65rem;color:rgba(255,255,255,.35);margin-bottom:14px">' + pctPico + '% del pico de temporada</div>' +
        '<div class="cdc-pct-row">' +
          '<div class="cdc-pct-big" style="color:' + accentColor + '">' + trabPct + '%</div>' +
          '<div class="cdc-pct-lbl">trabajan<br>de los censados</div>' +
        '</div>' +
        '<div class="cdc-bar-wrap">' +
          '<div class="cdc-bar-fill" style="width:' + trabPct + '%;background:' + accentColor + '"></div>' +
        '</div>' +
        '<div class="cdc-hero-legs">' +
          '<div class="cdc-leg"><strong>' + entry.trabajadores.toLocaleString() + '</strong> con empleo</div>' +
          '<div class="cdc-leg"><strong>' + entry.acomp.toLocaleString() + '</strong> sin empleo (familia)</div>' +
        '</div>' +
        '<div class="cdc-pico">' +
          '<span>Pico temporada <strong>' + pico.sem + '</strong></span>' +
          '<span><strong>' + pico.trabajadores.toLocaleString() + '</strong> trabajadores</span>' +
        '</div>' +
      '</div>';
    }

    document.getElementById('cdcHero').innerHTML =
      '<div class="cdc-hero">' +
        heroCard(bLast, b.picoTemporada, 'beltran', '#38bdf8') +
        heroCard(dLast, d.picoTemporada, 'dorita',  '#a78bfa') +
      '</div>';

    /* ── STAT CARDS ── */
    var totalActual = bLast.total + dLast.total;
    var totalTrab   = bLast.trabajadores + dLast.trabajadores;
    var totalAcomp  = bLast.acomp + dLast.acomp;
    var pctGlobal   = (totalTrab / totalActual * 100).toFixed(1);

    /* Projected values for WK39 comparison */
    var proyMap = {};
    if (cdc.proyeccion && cdc.proyeccion.semanas) {
      cdc.proyeccion.semanas.forEach(function (s) { proyMap[s.sem] = s; });
    }
    var proy39 = proyMap['WK39'] || { beltran: 1260, dorita: 228, total: 1488 };
    var bActual39 = bLast.total;
    var dActual39 = dLast.total;
    var bProy39   = proy39.beltran;
    var dProy39   = proy39.dorita;
    var bVar39    = bActual39 - bProy39;
    var dVar39    = dActual39 - dProy39;
    var combActual39 = bActual39 + dActual39;
    var combProy39   = bProy39 + dProy39;
    var combVar39    = combActual39 - combProy39;
    function varCell(actual, proy) {
      var diff = actual - proy;
      var pct  = proy ? (diff / proy * 100).toFixed(1) : '0.0';
      var col  = diff >= 0 ? 'var(--green2)' : 'var(--red2)';
      return '<span style="font-weight:700;color:' + col + '">' + actual.toLocaleString() + '</span>' +
             ' <span style="font-size:.72rem;color:' + col + '">(' + (diff >= 0 ? '+' : '') + diff + ' / ' + (diff >= 0 ? '+' : '') + pct + '%)</span>' +
             '<span style="font-size:.68rem;color:var(--muted);margin-left:4px">proy: ' + proy.toLocaleString() + '</span>';
    }

    document.getElementById('cdcCards').innerHTML =
      '<div class="cdc-stat-card">' +
        '<div class="cdc-stat-title">Ambos CDC · Resumen ' + cdc.semanaActual + '</div>' +
        '<div class="cdc-stat-row"><span class="lbl">Total personas censadas</span><span class="val">' + totalActual.toLocaleString() + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Trabajadores activos</span><span class="val" style="color:var(--green2)">' + totalTrab.toLocaleString() + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Acompañantes (familia)</span><span class="val">' + totalAcomp.toLocaleString() + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">% que trabajan (global)</span><span class="val" style="color:var(--green2)">' + pctGlobal + '%</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Fuente</span><span class="val" style="font-size:.7rem;font-weight:400;color:var(--muted)">Censo 2026 · Aldo Ávila</span></div>' +
      '</div>' +
      '<div class="cdc-stat-card">' +
        '<div class="cdc-stat-title">Comparativo vs Pico de Temporada</div>' +
        '<div class="cdc-stat-row"><span class="lbl">Beltrán · actual / pico</span><span class="val">' + bLast.total.toLocaleString() + ' / ' + b.picoTemporada.total.toLocaleString() + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Beltrán · trabajadores / pico</span><span class="val">' + bLast.trabajadores + ' / ' + b.picoTemporada.trabajadores + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Dorita · actual / pico</span><span class="val">' + dLast.total + ' / ' + d.picoTemporada.total + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Dorita · trabajadores / pico</span><span class="val">' + dLast.trabajadores + ' / ' + d.picoTemporada.trabajadores + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Semanas en censo</span><span class="val">' + b.historico.length + ' semanas (WK19–WK39)</span></div>' +
      '</div>' +
      '<div class="cdc-stat-card" style="grid-column:1/-1">' +
        '<div class="cdc-stat-title">Real vs Proyectado · ' + cdc.semanaActual + '</div>' +
        '<div class="cdc-stat-row"><span class="lbl">Lo de Beltrán</span><span class="val">' + varCell(bActual39, bProy39) + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Campo Dorita</span><span class="val">' + varCell(dActual39, dProy39) + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl">Combinado</span><span class="val">' + varCell(combActual39, combProy39) + '</span></div>' +
        '<div class="cdc-stat-row"><span class="lbl" style="font-size:.62rem;color:var(--muted)">Fuente proyección: Depto. Producción · Plan Inicial 2025–2026</span><span class="val"></span></div>' +
      '</div>';

    /* ── TREND CHART: total personas ── */
    var allSems = b.historico.map(function (r) { return r.sem; });
    var bTotales = b.historico.map(function (r) { return r.total; });
    var dMap = {};
    d.historico.forEach(function (r) { dMap[r.sem] = r.total; });
    var dTotales = allSems.map(function (s) { return dMap[s] || null; });

    /* Build projected series aligned to allSems */
    var projBeltran = [];
    var projDorita  = [];
    if (cdc.proyeccion && cdc.proyeccion.semanas) {
      var projMap = {};
      cdc.proyeccion.semanas.forEach(function (s) { projMap[s.sem] = s; });
      projBeltran = allSems.map(function (s) { return projMap[s] ? projMap[s].beltran : null; });
      projDorita  = allSems.map(function (s) { return projMap[s] ? projMap[s].dorita  : null; });
    }

    var ctxT = document.getElementById('chartCdc');
    if (!ctxT) return;
    if (chartsInit['chartCdc']) { chartsInit['chartCdc'].destroy(); }
    chartsInit['chartCdc'] = new Chart(ctxT, {
      type: 'line',
      data: {
        labels: allSems,
        datasets: [
          { label:'Beltrán · Total',        data: bTotales,   borderColor:'#38bdf8', backgroundColor:'rgba(56,189,248,.07)',  borderWidth:2.5, tension:.4, pointRadius:2, pointHoverRadius:5, fill:true  },
          { label:'Beltrán · Trabajan',     data: b.historico.map(function(r){return r.trabajadores;}), borderColor:'#4ade80', backgroundColor:'rgba(74,222,128,.05)', borderWidth:2, tension:.4, pointRadius:2, pointHoverRadius:5, fill:true },
          { label:'Beltrán · No trabajan',  data: b.historico.map(function(r){return r.acomp;}),        borderColor:'#fbbf24', backgroundColor:'rgba(251,191,36,.05)',  borderWidth:2, tension:.4, pointRadius:2, pointHoverRadius:5, fill:true },
          { label:'Dorita · Total',         data: dTotales,   borderColor:'#a78bfa', backgroundColor:'rgba(167,139,250,.07)', borderWidth:2.5, tension:.4, pointRadius:2, pointHoverRadius:5, fill:true  },
          { label:'Dorita · Trabajan',      data: allSems.map(function(s){ var r=d.historico.find(function(x){return x.sem===s;}); return r?r.trabajadores:null; }), borderColor:'#c084fc', borderWidth:2, tension:.4, pointRadius:2, pointHoverRadius:5, fill:false },
          { label:'Dorita · No trabajan',   data: allSems.map(function(s){ var r=d.historico.find(function(x){return x.sem===s;}); return r?r.acomp:null; }),        borderColor:'#f59e0b', borderWidth:2, borderDash:[4,3], tension:.4, pointRadius:2, pointHoverRadius:5, fill:false },
          { label:'Beltrán Proyectado',     data: projBeltran, borderColor:'rgba(56,189,248,.4)',  borderWidth:1.5, borderDash:[5,4], tension:.4, pointRadius:0, pointHoverRadius:4, fill:false },
          { label:'Dorita Proyectado',      data: projDorita,  borderColor:'rgba(167,139,250,.4)', borderWidth:1.5, borderDash:[5,4], tension:.4, pointRadius:0, pointHoverRadius:4, fill:false }
        ]
      },
      options: { responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
        plugins:{
          legend:{ position:'top', labels:{ boxWidth:10, font:{size:10} } },
          tooltip:{ callbacks:{ label:function(ctx){ return ctx.dataset.label+': '+ctx.parsed.y.toLocaleString()+' personas'; } } }
        },
        scales:{ y:{ beginAtZero:false, grid:{color:'rgba(0,0,0,.04)'}, ticks:{font:{size:10}} }, x:{ grid:{display:false}, ticks:{font:{size:9}} } }
      }
    });

    /* ── PCT CHART ── */
    var bPct = b.historico.map(function (r) { return r.pct; });
    var dPctMap = {};
    d.historico.forEach(function (r) { dPctMap[r.sem] = r.pct; });
    var dPct = allSems.map(function (s) { return dPctMap[s] || null; });

    var ctxP = document.getElementById('chartCdcPct');
    if (!ctxP) return;
    if (chartsInit['chartCdcPct']) { chartsInit['chartCdcPct'].destroy(); }
    chartsInit['chartCdcPct'] = new Chart(ctxP, {
      type: 'line',
      data: {
        labels: allSems,
        datasets: [
          { label:'Lo de Beltrán %', data: bPct, borderColor:'#38bdf8', backgroundColor:'rgba(56,189,248,.1)', borderWidth:2.5, tension:.4, pointRadius:3, fill:true },
          { label:'Campo Dorita %', data: dPct, borderColor:'#a78bfa', backgroundColor:'rgba(167,139,250,.1)', borderWidth:2.5, tension:.4, pointRadius:3, fill:true }
        ]
      },
      options: { responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
        plugins:{ legend:{position:'top'}, tooltip:{callbacks:{label:function(ctx){ return ctx.dataset.label+': '+ctx.parsed.y+'%'; }}} },
        scales:{ y:{ beginAtZero:false, min:30, max:80, ticks:{callback:function(v){return v+'%';}}, grid:{color:'rgba(0,0,0,.04)'} }, x:{ grid:{display:false} } }
      }
    });

    /* ── % CUMPLIMIENTO vs PROYECCIÓN ── */
    (function () {
      var kpiEl = document.getElementById('cdcCumplimientoKpis');
      var ctxC  = document.getElementById('chartCdcCumplimiento');
      if (!kpiEl || !ctxC || !cdc.proyeccion) return;

      /* Build % cumplimiento per week for each campo */
      var cumplLabels = [];
      var cumplBeltran = [];
      var cumplDorita  = [];
      var cumplTotal   = [];

      allSems.forEach(function (s) {
        var p = proyMap[s];
        if (!p) return;
        var bRow = b.historico.find(function (r) { return r.sem === s; });
        var dRow = d.historico.find(function (r) { return r.sem === s; });
        if (!bRow) return;
        var realB = bRow.total;
        var realD = dRow ? dRow.total : 0;
        var realT = realB + realD;
        cumplLabels.push(s);
        cumplBeltran.push(p.beltran ? +(realB / p.beltran * 100).toFixed(1) : null);
        cumplDorita.push(p.dorita && dRow ? +(realD / p.dorita * 100).toFixed(1) : null);
        cumplTotal.push(p.total ? +(realT / p.total * 100).toFixed(1) : null);
      });

      /* KPI cards — last week values */
      var lastB = cumplBeltran[cumplBeltran.length - 1];
      var lastD = cumplDorita[cumplDorita.length - 1];
      var lastT = cumplTotal[cumplTotal.length - 1];
      function kpiCard(label, val, campo) {
        var col  = val >= 95 ? '#4ade80' : val >= 85 ? '#fbbf24' : '#f87171';
        var bg   = val >= 95 ? 'rgba(74,222,128,.08)' : val >= 85 ? 'rgba(251,191,36,.08)' : 'rgba(248,113,113,.08)';
        var bdr  = val >= 95 ? 'rgba(74,222,128,.25)' : val >= 85 ? 'rgba(251,191,36,.25)' : 'rgba(248,113,113,.25)';
        var icon = val >= 95 ? '✓' : val >= 85 ? '~' : '↓';
        return '<div style="background:' + bg + ';border:1px solid ' + bdr + ';border-radius:12px;padding:16px 18px;">' +
          '<div style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:6px">' + label + '</div>' +
          '<div style="font-size:2rem;font-weight:900;color:' + col + ';line-height:1;letter-spacing:-.5px">' + val + '<span style="font-size:1rem">%</span></div>' +
          '<div style="font-size:.7rem;color:' + col + ';margin-top:5px;font-weight:700">' + icon + ' vs proyección</div>' +
          '<div style="font-size:.65rem;color:var(--muted);margin-top:3px">' + cdc.semanaActual + '</div>' +
        '</div>';
      }
      kpiEl.innerHTML =
        kpiCard('Lo de Beltrán', lastB, 'beltran') +
        kpiCard('Campo Dorita',  lastD, 'dorita') +
        kpiCard('Combinado',     lastT, 'total');

      /* Line chart */
      if (chartsInit['chartCdcCumplimiento']) chartsInit['chartCdcCumplimiento'].destroy();
      chartsInit['chartCdcCumplimiento'] = new Chart(ctxC, {
        type: 'line',
        data: {
          labels: cumplLabels,
          datasets: [
            { label:'Beltrán %',  data: cumplBeltran, borderColor:'#38bdf8', backgroundColor:'rgba(56,189,248,.08)', borderWidth:2.5, tension:.4, pointRadius:2.5, pointHoverRadius:5, fill:true },
            { label:'Dorita %',   data: cumplDorita,  borderColor:'#a78bfa', backgroundColor:'rgba(167,139,250,.08)', borderWidth:2.5, tension:.4, pointRadius:2.5, pointHoverRadius:5, fill:true },
            { label:'Combinado %',data: cumplTotal,   borderColor:'#4ade80', backgroundColor:'rgba(74,222,128,.05)', borderWidth:2, tension:.4, pointRadius:2, pointHoverRadius:4, borderDash:[4,3], fill:false },
            { label:'Meta 100%',  data: cumplLabels.map(function(){ return 100; }), borderColor:'rgba(0,0,0,.15)', borderWidth:1, borderDash:[6,4], pointRadius:0, fill:false }
          ]
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          interaction:{ mode:'index', intersect:false },
          plugins:{
            legend:{ position:'top' },
            tooltip:{ callbacks:{ label:function(ctx){ return ctx.dataset.label + ': ' + ctx.parsed.y + '%'; } } }
          },
          scales:{
            y:{
              min:60, max:105,
              ticks:{ callback:function(v){ return v + '%'; } },
              grid:{ color:'rgba(0,0,0,.04)' }
            },
            x:{ grid:{ display:false }, ticks:{ font:{ size:9 } } }
          }
        }
      });
    })();

    /* ── VARIANCE CHART: Real vs Proyectado ── */
    var ctxV = document.getElementById('chartCdcVsProyeccion');
    if (ctxV && cdc.proyeccion && cdc.proyeccion.semanas) {
      if (chartsInit['chartCdcVsProyeccion']) { chartsInit['chartCdcVsProyeccion'].destroy(); }
      var varLabels = [];
      var varData   = [];
      var varColors = [];
      allSems.forEach(function (s) {
        if (!proyMap[s]) return;
        var bRow = b.historico.find(function (r) { return r.sem === s; });
        var dRow = d.historico.find(function (r) { return r.sem === s; });
        if (!bRow) return;
        var realComb = bRow.total + (dRow ? dRow.total : 0);
        var projComb = proyMap[s].total;
        var diff = realComb - projComb;
        varLabels.push(s);
        varData.push(diff);
        varColors.push(diff >= 0 ? 'rgba(34,197,94,.7)' : 'rgba(239,68,68,.7)');
      });
      chartsInit['chartCdcVsProyeccion'] = new Chart(ctxV, {
        type: 'bar',
        data: {
          labels: varLabels,
          datasets: [{
            label: 'Varianza (Real − Proyectado)',
            data: varData,
            backgroundColor: varColors,
            borderRadius: 4,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          interaction: { mode:'index', intersect:false },
          plugins: {
            legend: { position:'top' },
            title: { display:true, text:'Varianza Total: Real vs Proyectado (personas)', font:{size:12,weight:'700'}, color:'#374151', padding:{bottom:10} },
            tooltip: { callbacks: { label: function(ctx) {
              var v = ctx.parsed.y;
              return 'Varianza: ' + (v >= 0 ? '+' : '') + v.toLocaleString() + ' personas';
            }}}
          },
          scales: {
            y: { grid: { color:'rgba(0,0,0,.04)' }, ticks: { callback: function(v) { return (v >= 0 ? '+' : '') + v; } } },
            x: { grid: { display:false } }
          }
        }
      });
    }
  }

  function renderIndustria() {
    document.getElementById('industriaTitle').textContent =
      'Noticias de Industria · Corbel Seeds Intel · ' + D.mercado.fecha;
    var noticias = D.industria;
    var cats = ['Todas'].concat(noticias.map(function (n) { return n.cat; })
      .filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var active = 'Todas';
    var filterDiv = document.getElementById('catFilters');
    var newsGrid  = document.getElementById('newsGrid');

    function buildCards() {
      var list = active === 'Todas' ? noticias : noticias.filter(function (n) { return n.cat === active; });
      newsGrid.innerHTML = list.map(function (n) {
        return '<div class="news-card">' +
          '<div class="news-head"><span class="news-cat">' + n.cat + '</span>' +
            '<span class="news-impact imp-' + n.impacto + '">' + n.impacto + '</span>' +
            '<span class="news-fte">' + n.fuente + '</span></div>' +
          '<p class="news-title">' + n.titulo + '</p>' +
          '<p class="news-res">'   + n.resumen + '</p>' +
        '</div>';
      }).join('');
      filterDiv.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('active', b.dataset.cat === active);
      });
    }
    filterDiv.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn" data-cat="' + c + '">' + c + '</button>';
    }).join('');
    filterDiv.addEventListener('click', function (e) {
      if (e.target.classList.contains('filter-btn')) { active = e.target.dataset.cat; buildCards(); }
    });
    buildCards();
  }

  /* ════════════════ PRODUCT TABS (shared helper) ════════════════ */
  function renderProductTab(cfg) {
    var tipo       = cfg.tipo;       // e.g. "Tomate"
    var tabId      = cfg.tabId;      // e.g. "tomate"
    var kpisId     = cfg.kpisId;
    var preciosId  = cfg.preciosId;
    var tblId      = cfg.tblId;
    var badgeCls   = cfg.badgeCls;
    var varId      = cfg.varId || null; // optional varieties grid

    var clasificarUnidad = function (u) {
      u = (u || '').toUpperCase().trim();
      if (/^ST[\-\s]?\d/i.test(u))  return 'Transfrios (ST)';
      if (/^JL[\-\s]?\d/i.test(u))  return 'Elogística (JL)';
      if (/^CGG[\-\s]?\d/i.test(u)) return 'CGG (CGG)';
      return 'Otros';
    };

    /* Embarques for this product */
    var emb = (D.operaciones.embarques || []).filter(function (e) {
      return e.tipo === tipo;
    });
    var totalCargas = emb.reduce(function (s, e) { return s + (e.cargas || 0); }, 0);
    var lastDate    = emb.length ? emb[0].fecha : '—';
    var destinations = {};
    emb.forEach(function (e) { destinations[e.destino] = (destinations[e.destino] || 0) + e.cargas; });
    var destStr = Object.keys(destinations).map(function (k) { return destinations[k] + ' ' + k; }).join(' · ');

    /* Prices for this product */
    var keyMap = { 'Tomate': ['tomate','vine','grape','roma','saladet'], 'Limón': ['lim','lime'], 'Chile': ['jal','ser','chile','pepper','bell'], 'Granos': ['grano','maiz','trigo','frijol','soya','bean'] };
    var keys   = keyMap[tipo] || [tipo.toLowerCase()];
    var precios = (D.mercado.precios || []).filter(function (p) {
      var n = p.producto.toLowerCase();
      return keys.some(function (k) { return n.indexOf(k) !== -1; });
    });

    /* KPI cards */
    document.getElementById(kpisId).innerHTML =
      kpiCard('Cargas Exportadas', totalCargas, 'Temporada · TX &amp; AZ', 'dark', 'accent-blue', null) +
      kpiCard('Último Embarque', lastDate, tipo + ' · exportación', 'dark', 'accent-blue', null) +
      (destStr ? kpiCard('Distribución Destinos', destStr || '—', 'Cargas por mercado', 'dark', 'accent-blue', null) : '') +
      (precios.length ? kpiCard('Precio Rango (Hoy)', precios.length ? fmt(precios[0].min,2) + '–' + fmt(precios[0].max,2) : '—', precios.length ? precios[0].via : '', 'pos', 'accent-pos', null) : '');

    /* Varieties (Tomate only) */
    if (varId && D.calidad && D.calidad.ultimoOutbound) {
      var ub  = D.calidad.ultimoOutbound;
      document.getElementById(varId).innerHTML = ub.variedades.map(function (v) {
        var mCls = v.merma > 4 ? 'bad' : v.merma > 3 ? 'warn' : 'ok';
        var tot  = v.primera + v.segunda + v.tercera + v.merma;
        var pBar = function (val, color) { return '<div style="height:100%;width:' + (val/tot*100).toFixed(1) + '%;background:' + color + ';border-radius:2px"></div>'; };
        return '<div class="qual-card">' +
          '<div class="qual-name">' + v.nombre + '</div>' +
          '<div class="qual-prima">' + pct(v.primera) + '<span style="font-size:.7rem;font-weight:500;opacity:.7"> 1ª Prima</span></div>' +
          '<div class="qual-merma-badge ' + mCls + '">Merma ' + pct(v.merma) + '</div>' +
          '<div class="qual-stack" style="display:flex;height:8px;gap:2px;margin:10px 0 6px;border-radius:4px;overflow:hidden">' +
            pBar(v.primera,'var(--green2)') + pBar(v.segunda,'var(--accent2)') + pBar(v.tercera,'#6366f1') + pBar(v.merma, v.merma>4?'var(--red2)':'rgba(220,38,38,.4)') +
          '</div>' +
          '<div style="display:flex;gap:10px;font-size:.68rem;color:var(--muted)">' +
            '<span>1ª&nbsp;' + pct(v.primera) + '</span><span>2ª&nbsp;' + pct(v.segunda) + '</span>' +
            (v.tercera > 0 ? '<span>3ª&nbsp;' + pct(v.tercera) + '</span>' : '') +
            (v.merma   > 0 ? '<span>Merma&nbsp;' + pct(v.merma) + '</span>' : '') +
          '</div>' +
        '</div>';
      }).join('');
    }

    /* Prices grid */
    var preciosIdEl = document.getElementById(preciosId);
    if (preciosIdEl && precios.length) {
      var scaleMax = Math.max.apply(null, precios.map(function (p) { return p.max; })) * 1.15;
      preciosIdEl.innerHTML = precios.map(function (p) {
        var mid = (p.min + p.max) / 2;
        var chgPct = p.anterior != null ? ((mid - p.anterior) / p.anterior * 100) : null;
        var chgStr = chgPct != null ? (chgPct >= .5 ? '▲ +' : chgPct <= -.5 ? '▼ ' : '→ ') + Math.abs(chgPct).toFixed(1) + '% vs semana anterior' : 'Sin comparativo anterior';
        var chgCls = chgPct == null ? 'neu' : chgPct > .5 ? 'up' : chgPct < -.5 ? 'dn' : 'neu';
        var barColor = chgPct == null ? 'rgba(107,114,128,.4)' : chgPct > 10 ? 'rgba(22,163,74,.85)' : chgPct > 0 ? 'rgba(22,163,74,.55)' : chgPct > -10 ? 'rgba(220,38,38,.55)' : 'rgba(220,38,38,.85)';
        var minPct = (p.min / scaleMax * 100).toFixed(1);
        var widPct = ((p.max - p.min) / scaleMax * 100).toFixed(1);
        var antPct = p.anterior != null ? (p.anterior / scaleMax * 100).toFixed(1) : null;
        return '<div class="pc-card' + (p.alerta ? ' pc-alert' : '') + '">' +
          '<div class="pc-header"><div class="pc-name">' + p.producto + '</div><span class="badge badge-blue">' + p.via + '</span></div>' +
          '<div class="pc-range">' + fmt(p.min,2) + '&nbsp;–&nbsp;' + fmt(p.max,2) + '</div>' +
          '<div class="pc-chg ' + chgCls + '">' + chgStr + '</div>' +
          '<div class="pc-bar-wrap"><div class="pc-bar-fill" style="left:' + minPct + '%;width:' + widPct + '%;background:' + barColor + '"></div>' +
          (antPct != null ? '<div class="pc-bar-tick" style="left:' + antPct + '%"></div>' : '') + '</div>' +
          '<div class="pc-footer"><span>' + (p.anterior != null ? 'Anterior: ' + fmt(p.anterior,2) : 'Sin dato ant.') + '</span><span>Mid: $' + fmt(mid,2) + '</span></div>' +
        '</div>';
      }).join('');
    } else if (preciosIdEl) {
      preciosIdEl.innerHTML = '<div class="card" style="padding:20px;color:var(--muted);font-size:.85rem">Sin precios de mercado disponibles para ' + tipo + ' en el último reporte.</div>';
    }

    /* Shipments table */
    var tbody = document.querySelector('#' + tblId + ' tbody');
    if (tbody) {
      if (emb.length) {
        tbody.innerHTML = emb.map(function (e) {
          var flota = clasificarUnidad(e.unidad);
          var estadoCls = e.estado !== 'OK' ? 'style="color:var(--red2);font-weight:700"' : '';
          return '<tr><td>' + e.fecha + '</td><td class="td-num">' + e.cargas + '</td>' +
            '<td>' + e.unidad + '</td><td>' + flota + '</td>' +
            '<td><span class="badge badge-blue">' + e.destino + '</span></td>' +
            '<td ' + estadoCls + '>' + e.estado + '</td></tr>';
        }).join('');
      } else {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px">Sin embarques registrados para ' + tipo + '</td></tr>';
      }
    }
  }

  /* ── Calavo Intelligence Center ── */
  /* ════════════════ CAADES / CIDH — Inventarios Nogales ════════════════ */
  function renderCaades() {
    var el = document.getElementById('caades-main');
    if (!el) return;
    var C = D.caades;
    if (!C || !C.inventario || C.inventario.length === 0) {
      el.innerHTML =
        '<div class="section-title" style="margin-top:4px">Inventarios Nogales · CAADES <span class="src-tag">CIDH · mariajose@cidh.org.mx · diario</span></div>' +
        '<div class="card" style="padding:18px 20px;color:var(--muted);font-size:.84rem">Sin datos cargados — se actualizan con el próximo /update-belher</div>';
      return;
    }

    var inv  = C.inventario;
    var pip  = C.pipeline   || [];
    var hoy  = inv[inv.length - 1];
    var ayer = inv.length > 1 ? inv[inv.length - 2] : null;

    function fmtN(n) { return n != null ? n.toLocaleString('es-MX') : '—'; }
    function delta(a, b) {
      if (a == null || b == null || b === 0) return '';
      var d = ((a - b) / b * 100);
      var col = d < 0 ? '#34c759' : '#ef4444'; /* menos inventario = bueno para precio */
      var arrow = d < 0 ? '↓' : '↑';
      return '<span style="font-size:.65rem;color:' + col + ';font-weight:700;margin-left:4px">' + arrow + Math.abs(d).toFixed(1) + '%</span>';
    }

    var pipHoy = pip.length > 0 ? pip[pip.length - 1] : null;

    /* ── KPI strip ── */
    var kpis = [
      {
        lbl: 'Inventario Total',
        val: fmtN(hoy.totalTomate && hoy.totalTomate.total),
        sub: 'cajas en Nogales hoy',
        delta: ayer ? delta(hoy.totalTomate && hoy.totalTomate.total, ayer.totalTomate && ayer.totalTomate.total) : '',
        color: '#e8f5ea'
      },
      {
        lbl: 'Bola',
        val: fmtN(hoy.bola && hoy.bola.total),
        sub: (hoy.bola && hoy.bola.pct != null ? hoy.bola.pct + '% talla 5y6' : ''),
        delta: ayer ? delta(hoy.bola && hoy.bola.total, ayer.bola && ayer.bola.total) : '',
        color: '#fef9c3'
      },
      {
        lbl: 'Roma',
        val: fmtN(hoy.roma && hoy.roma.total),
        sub: (hoy.roma && hoy.roma.pct != null ? hoy.roma.pct + '% talla 5y6' : ''),
        delta: ayer ? delta(hoy.roma && hoy.roma.total, ayer.roma && ayer.roma.total) : '',
        color: '#eff6ff'
      },
      {
        lbl: 'Chile · Pallets',
        val: hoy.chile && hoy.chile.pallets != null ? fmtN(hoy.chile.pallets) : '—',
        sub: hoy.chile && hoy.chile.paquetes != null ? fmtN(hoy.chile.paquetes) + ' paquetes' : '',
        delta: '',
        color: '#fff7ed'
      },
      {
        lbl: 'Pipeline Total',
        val: pipHoy && pipHoy.totalGeneral != null ? fmtN(pipHoy.totalGeneral) : '—',
        sub: 'cajas en tránsito a Nogales',
        delta: '',
        color: '#f0fdf4'
      }
    ];

    var kpiHtml = kpis.map(function(k) {
      return '<div style="background:' + k.color + ';border:1px solid rgba(0,0,0,.07);border-radius:14px;padding:16px 16px 14px;display:flex;flex-direction:column;gap:4px">' +
        '<div style="font-size:.58rem;font-weight:700;letter-spacing:1.1px;text-transform:uppercase;color:var(--muted)">' + k.lbl + '</div>' +
        '<div style="font-size:1.35rem;font-weight:800;color:var(--text);line-height:1;letter-spacing:-.02em">' + k.val + k.delta + '</div>' +
        '<div style="font-size:.67rem;color:var(--muted)">' + k.sub + '</div>' +
      '</div>';
    }).join('');

    /* ── 5-day trend bars ── */
    var maxTotal = Math.max.apply(null, inv.map(function(d) { return (d.totalTomate && d.totalTomate.total) || 0; }));
    var barsHtml = inv.map(function(d, i) {
      var tot  = (d.totalTomate && d.totalTomate.total) || 0;
      var bola = (d.bola && d.bola.total) || 0;
      var roma = (d.roma && d.roma.total) || 0;
      var pctH = maxTotal > 0 ? Math.round(tot / maxTotal * 100) : 0;
      var bolaPct = tot > 0 ? Math.round(bola / tot * 100) : 0;
      var isHoy = i === inv.length - 1;
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">' +
        '<div style="font-size:.6rem;font-weight:' + (isHoy ? '800' : '500') + ';color:' + (isHoy ? 'var(--text)' : 'var(--muted)') + '">' + (isHoy ? 'HOY' : d.fecha.slice(0,5)) + '</div>' +
        '<div style="width:100%;height:80px;display:flex;align-items:flex-end;gap:2px">' +
          '<div style="flex:1;background:#22c55e;border-radius:3px 3px 0 0;height:' + bolaPct + '%" title="Bola ' + fmtN(bola) + '"></div>' +
          '<div style="flex:1;background:#60a5fa;border-radius:3px 3px 0 0;height:' + (100 - bolaPct) + '%" title="Roma ' + fmtN(roma) + '"></div>' +
        '</div>' +
        '<div style="font-size:.62rem;font-weight:700;color:var(--text)">' + fmtN(tot) + '</div>' +
      '</div>';
    }).join('');

    var nota = inv.length < 5 ? '<div style="font-size:.67rem;color:var(--muted);margin-top:8px">● Verde = Bola &nbsp;● Azul = Roma &nbsp;· &nbsp;↓ inventario = señal alcista de precio</div>' : '';

    el.innerHTML =
      '<div class="section-title" style="margin-top:4px">Inventarios Nogales · CAADES' +
        '<span class="src-tag">Reporte ' + (C.ultimoReporte || '—') + ' · ' + (C.actualizado || '—') + ' · ' + C.fuente + '</span>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px">' + kpiHtml + '</div>' +
      '<div class="card" style="padding:18px 20px">' +
        '<div style="font-size:.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:12px">Tendencia 5 Días · Cajas Totales en Nogales</div>' +
        '<div style="display:flex;gap:8px;align-items:flex-end">' + barsHtml + '</div>' +
        nota +
      '</div>';
  }

  function renderCalavoWeekly() {
    var CW = D.calavoWeekly;
    if (!CW) return;
    function cFmt(n) { return n != null ? '$' + n.toFixed(2) : '—'; }
    function secHdr(lbl, src) {
      return '<div class="cw-sec"><span class="cw-sec-lbl">' + lbl + '</span>' +
        (src ? '<span class="cw-sec-src">· ' + src + '</span>' : '') +
        '<span class="cw-sec-line"></span></div>';
    }

    /* ── HERO ── */
    var k = CW.kpi;
    var fobChg = k.fobAnterior ? ((k.fobPromedio - k.fobAnterior) / k.fobAnterior * 100) : 0;
    var fobDir = fobChg > 0 ? 'up' : fobChg < 0 ? 'down' : 'flat';
    document.getElementById('cw-header').innerHTML =
      '<div class="cw-hero">' +
        '<div class="cw-hero-top">' +
          '<div>' +
            '<div class="cw-hero-title">Calavo Intelligence</div>' +
            '<div class="cw-hero-sub">Centro de Monitoreo Comercial · ' + CW.fuente + '</div>' +
          '</div>' +
          '<div class="cw-hero-right">' +
            '<div class="cw-live-badge"><span class="cw-live-dot"></span>LIVE</div>' +
            '<div class="cw-hero-wk" style="margin-top:6px">' + CW.semana + '</div>' +
            '<div class="cw-hero-dates">' + CW.fechas + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="cw-hero-kpis">' +
          '<div class="cw-hero-kpi"><div class="cw-hero-kpi-lbl">Pallets</div><div class="cw-hero-kpi-val">' + (k.pallets != null ? k.pallets.toLocaleString() : '—') + '</div><div class="cw-hero-kpi-chg flat">totales</div></div>' +
          '<div class="cw-hero-kpi"><div class="cw-hero-kpi-lbl">Cargas</div><div class="cw-hero-kpi-val">' + k.loads + '</div><div class="cw-hero-kpi-chg flat">loads</div></div>' +
          '<div class="cw-hero-kpi"><div class="cw-hero-kpi-lbl">Paquetes</div><div class="cw-hero-kpi-val">' + Math.round(k.pkgs/1000) + 'K</div><div class="cw-hero-kpi-chg flat">' + k.pkgs.toLocaleString() + '</div></div>' +
          '<div class="cw-hero-kpi"><div class="cw-hero-kpi-lbl">FOB Prom.</div><div class="cw-hero-kpi-val">' + cFmt(k.fobPromedio) + '</div><div class="cw-hero-kpi-chg ' + fobDir + '">' + (fobChg >= 0 ? '+' : '') + fobChg.toFixed(1) + '% vs WK11</div></div>' +
        '</div>' +
      '</div>';

    /* ── STOCK TERMINAL ── */
    var stocksHtml = secHdr('Acciones en Bolsa', 'Yahoo Finance') +
      '<div class="cw-stocks-grid">';
    CW.acciones.forEach(function(s) {
      var has = s.precio != null;
      var dir = has ? (s.cambio >= 0 ? 'up' : 'down') : 'nd';
      var sign = has && s.cambio >= 0 ? '+' : '';
      var rangePct = (has && s.h52 && s.l52) ? ((s.precio - s.l52) / (s.h52 - s.l52) * 100).toFixed(1) : 50;
      var rangeColor = dir === 'up' ? '#34c759' : dir === 'down' ? '#ff453a' : '#007aff';
      var logoMap = { CVGW:'https://logo.clearbit.com/calavo.com', AVO:'https://logo.clearbit.com/missionproduce.com' };
      stocksHtml += '<div class="card cw-stock-card ' + dir + '-card">' +
        '<div class="cw-stock-row1">' +
          '<div>' +
            (logoMap[s.simbolo] ? '<img class="cw-stock-logo" src="' + logoMap[s.simbolo] + '" alt="' + s.nombre + '" onerror="this.style.display=\'none\'">' : '') +
            '<div class="cw-stock-sym">' + s.simbolo + '</div>' +
            '<div class="cw-stock-name">' + s.nombre + '</div>' +
            '<div class="cw-stock-mkt-badge">' + s.mercado + '</div>' +
          '</div>' +
          '<div style="text-align:right">' +
            '<div class="cw-stock-price-big">' + (has ? cFmt(s.precio) : '—') + '</div>' +
            '<div class="cw-stock-chg-row" style="justify-content:flex-end">' +
              '<span class="cw-stock-chg ' + dir + '">' + (has ? sign + cFmt(s.cambio) + ' / ' + sign + s.cambioPct.toFixed(2) + '%' : 'Sin datos') + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        (has ? '<div class="cw-stock-range-bar">' +
          '<div class="cw-stock-range-lbl"><span>' + cFmt(s.l52) + ' 52s min</span><span>' + cFmt(s.h52) + ' 52s max</span></div>' +
          '<div class="cw-stock-range-track">' +
            '<div class="cw-stock-range-fill" style="left:0;width:' + rangePct + '%;background:linear-gradient(90deg,' + rangeColor + '44,' + rangeColor + ')"></div>' +
            '<div class="cw-stock-range-dot" style="left:' + rangePct + '%;background:' + rangeColor + '"></div>' +
          '</div>' +
          '<div class="cw-stock-vol">Vol: ' + (s.volumen ? s.volumen.toLocaleString() : '—') + ' shares</div>' +
        '</div>' : '') +
      '</div>';
    });
    stocksHtml += '</div>';
    document.getElementById('cw-stocks').innerHTML = stocksHtml;

    /* ── INTEL ALERTS ── */
    var lvlMap = { warning:'⚠ ALERTA', success:'▲ OPORTUNIDAD', info:'ℹ INTEL' };
    document.getElementById('cw-alertas').innerHTML =
      secHdr('Señales de Inteligencia') +
      '<div class="cw-feed">' +
      CW.alertas.map(function(a) {
        return '<div class="cw-feed-item ' + a.nivel + '">' +
          '<span class="cw-feed-lvl">' + (lvlMap[a.nivel] || a.nivel.toUpperCase()) + '</span>' +
          '<span class="cw-feed-txt">' + a.texto + '</span>' +
        '</div>';
      }).join('') + '</div>';

    /* ── COMMS TIMELINE ── */
    document.getElementById('cw-correos').innerHTML =
      secHdr('Comunicaciones Calavo', '@calavo.com · Irene Amezaga') +
      '<div class="card" style="padding:16px 20px">' +
      '<div class="cw-timeline">' +
      CW.correos.map(function(c, i) {
        var isLast = i === CW.correos.length - 1;
        return '<div class="cw-tl-item">' +
          '<div class="cw-tl-col">' +
            '<div class="cw-tl-dot ' + c.tipo + '"></div>' +
            (!isLast ? '<div class="cw-tl-line"></div>' : '') +
          '</div>' +
          '<div class="cw-tl-body">' +
            '<div class="cw-tl-meta">' +
              '<span class="cw-tl-fecha">' + c.fecha + '</span>' +
              '<span class="cw-tl-de">' + c.de + '</span>' +
              '<span class="cw-tl-pill ' + c.tipo + '">' + c.tipo + '</span>' +
            '</div>' +
            '<div class="cw-tl-asunto">' + c.asunto + '</div>' +
            '<div class="cw-tl-resumen">' + c.resumen + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
      '</div></div>';

    /* ── KPI PERFORMANCE (already in hero — skip separate section) ── */
    document.getElementById('cw-kpis').innerHTML = '';

    /* ── GROWER MATRIX: Belher vs ADM ── */
    function growerBar(p, accent) {
      var maxVal = Math.max(p.proyectado, p.actual, 1) * 1.15;
      var aPct = Math.min(p.actual   / maxVal * 100, 100).toFixed(1);
      var pPct = Math.min(p.proyectado / maxVal * 100, 100).toFixed(1);
      return '<div class="cw-grow-bar-wrap">' +
        '<div class="cw-grow-bar-fill" style="width:' + aPct + '%;background:' + accent + ';box-shadow:0 0 6px ' + accent + '55"></div>' +
        '<div class="cw-grow-bar-proj-line" style="left:' + pPct + '%"></div>' +
      '</div>';
    }
    function growerRow(lbl, p, accent) {
      if (!p) return '';
      var cls = p.diffPct > 0 ? 'cw-diff-pos' : p.diffPct < 0 ? 'cw-diff-neg' : 'cw-diff-neu';
      if (p.sinPrograma) {
        return '<div class="cw-grow-no-prog">' + lbl + ' — Sin programa esta semana</div>';
      }
      return '<div class="cw-grow-row">' +
        '<div class="cw-grow-top">' +
          '<span class="cw-grow-lbl">' + lbl + '</span>' +
          '<div class="cw-grow-right">' +
            '<span class="cw-grow-actual">' + p.actual + '</span>' +
            '<span class="cw-grow-slash"> /</span>' +
            '<span class="cw-grow-proj">' + p.proyectado + '</span>' +
            '<span class="cw-diff-badge ' + cls + '">' + (p.diffPct >= 0 ? '+' : '') + p.diffPct + '%</span>' +
          '</div>' +
        '</div>' +
        growerBar(p, accent) +
        '<div class="cw-grow-meta">' + (p.loads != null ? p.loads : '—') + ' cargas · ' + (p.pkgs != null ? p.pkgs.toLocaleString() : '—') + ' pkgs</div>' +
      '</div>';
    }
    function growerCard(grower, cls, accent) {
      var tot = grower.total || {};
      return '<div class="card cw-grower-card">' +
        '<div class="cw-grower-hdr ' + cls + '">' +
          '<div class="cw-grower-id">' +
            '<div class="cw-grower-name">' + (cls === 'belher-hdr' ? 'BELHER' : 'ADM') + '</div>' +
            '<div class="cw-grower-fullname">' + (grower.nombre || '') + '</div>' +
          '</div>' +
          '<div class="cw-grower-totals">' +
            '<div class="cw-grower-tot-item"><span class="cw-grower-tot-val">' + (tot.actual || 0) + '</span><span class="cw-grower-tot-lbl">pallets</span></div>' +
            '<div class="cw-grower-tot-item"><span class="cw-grower-tot-val">' + (tot.loads || 0) + '</span><span class="cw-grower-tot-lbl">cargas</span></div>' +
            '<div class="cw-grower-tot-item"><span class="cw-grower-tot-val">' + ((tot.pkgs || 0) > 0 ? (tot.pkgs/1000).toFixed(1) + 'K' : '0') + '</span><span class="cw-grower-tot-lbl">pkgs</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="cw-grow-rows">' +
          growerRow('Rounds / Vine Ripe', grower.rounds, accent) +
          growerRow('Roma 25lb', grower.roma, accent) +
        '</div>' +
      '</div>';
    }
    var bel = CW.belher || {};
    bel.nombre = 'Agrícola Belher';
    document.getElementById('cw-proyecciones').innerHTML =
      secHdr('Matriz de Desempeño · WK' + CW.semana.replace('WK',''), 'Proyectado vs Real') +
      '<div class="cw-growers-grid">' +
        growerCard(bel, 'belher-hdr', '#34c759') +
        (CW.adm ? growerCard(CW.adm, 'adm-hdr', '#007aff') : '') +
      '</div>';

    /* ── FOB VENTAS ── */
    document.getElementById('cw-ventas').innerHTML =
      CW.ventas && CW.ventas.length ?
        secHdr('FOB Promedio por Variedad · ' + CW.semana, 'Belher Sales Summary') +
        '<div class="cw-ventas-grid">' +
        CW.ventas.map(function(v) {
          return '<div class="card cw-venta-card">' +
            '<div class="cw-venta-name">' + v.variedad + '</div>' +
            '<div class="cw-venta-price">' + cFmt(v.avg) + '</div>' +
            '<div class="cw-venta-sub">FOB promedio por caja</div>' +
            '<div class="cw-venta-pkgs">' + v.recibido.toLocaleString() + ' <span class="cw-venta-pkgs-lbl">pkgs recibidos</span></div>' +
          '</div>';
        }).join('') + '</div>'
      : '';

    /* ── USDA REFERENCE ── */
    if (CW.usdaRef && CW.usdaRef.precios) {
      var byZone = {};
      CW.usdaRef.precios.forEach(function(p) {
        if (!byZone[p.zona]) byZone[p.zona] = [];
        byZone[p.zona].push(p);
      });
      var uHtml = secHdr('Referencia USDA FOB', 'USDA Tomato Fax Report · ' + CW.usdaRef.fecha) +
        '<div class="cw-usda-grid">';
      Object.keys(byZone).forEach(function(zona) {
        uHtml += '<div class="card" style="padding:16px 20px">' +
          '<div class="cw-usda-zona">' + zona + '</div>' +
          '<table class="cw-usda-tbl"><tbody>';
        byZone[zona].forEach(function(p) {
          uHtml += '<tr>' +
            '<td class="cw-usda-prod">' + p.producto + '</td>' +
            '<td class="cw-usda-range">' + cFmt(p.min) + '–' + cFmt(p.max) + '</td>' +
            '<td class="cw-usda-usual">' + (p.usual ? 'usual ' + cFmt(p.usual) : '') + '</td>' +
          '</tr>';
        });
        uHtml += '</tbody></table></div>';
      });
      uHtml += '</div>';
      document.getElementById('cw-usda').innerHTML = uHtml;
    } else {
      document.getElementById('cw-usda').innerHTML = '';
    }

    /* ── TOY COMPARISON ── */
    if (CW.toy && CW.toy.recibido) {
    document.getElementById('cw-toy').innerHTML =
      secHdr('Comparativo Año Anterior', 'Belher Sales Summary') +
      '<div class="cw-toy-grid">' +
        '<div class="card" style="padding:16px 20px">' +
          '<div class="cw-toy-ttl">Cajas Recibidas</div>' +
          '<table class="cw-toy-tbl"><thead><tr><th>Mes</th><th>2025</th><th>2026</th><th>Δ</th></tr></thead><tbody>' +
          CW.toy.recibido.map(function(r) {
            var d = (r.y2025 && r.y2026) ? Math.round((r.y2026-r.y2025)/r.y2025*100) : null;
            var c = d!=null ? (d>=0?'cw-toy-pos':'cw-toy-neg') : '';
            return '<tr><td>' + r.mes + '</td><td>' + (r.y2025?r.y2025.toLocaleString():'—') + '</td><td>' + (r.y2026?r.y2026.toLocaleString():'—') + '</td><td class="' + c + '">' + (d!=null?(d>=0?'+':'')+d+'%':'—') + '</td></tr>';
          }).join('') + '</tbody></table></div>' +
        '<div class="card" style="padding:16px 20px">' +
          '<div class="cw-toy-ttl">Precio FOB ($/caja)</div>' +
          '<table class="cw-toy-tbl"><thead><tr><th>Mes</th><th>Ant.</th><th>2026</th><th>Δ</th></tr></thead><tbody>' +
          CW.toy.pricing.map(function(p) {
            var d = (p.yPrev && p.yCurr) ? Math.round((p.yCurr-p.yPrev)/p.yPrev*100) : null;
            var c = d!=null ? (d>=0?'cw-toy-pos':'cw-toy-neg') : '';
            return '<tr><td>' + p.mes + '</td><td>' + cFmt(p.yPrev) + ' <small style="color:var(--muted)">(' + p.prevLabel + ')</small></td><td>' + cFmt(p.yCurr) + '</td><td class="' + c + '">' + (d!=null?(d>=0?'+':'')+d+'%':'—') + '</td></tr>';
          }).join('') + '</tbody></table></div>' +
      '</div>';
    } else {
      document.getElementById('cw-toy').innerHTML = '';
    }

    /* ── PO PRICE HISTORY CHART ── */
    (function() {
      var ph = (D.tomate && D.tomate.preciosHistorico) || [];
      var poEl = document.getElementById('cw-po-chart');
      if (!poEl || !ph.length) return;

      poEl.innerHTML =
        secHdr('Evolución Precio FOB por Semana · PO History', 'Calavo Settle WK11–WK14 confirmado · WK01–WK10 + WK15 estimado IA') +
        '<div class="card" style="padding:20px 20px 14px">' +
          '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px">' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px">' +
              '<span style="width:22px;height:2.5px;background:#34c759;border-radius:2px;display:inline-block"></span>FOB Real (settle confirmado)</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px">' +
              '<span style="width:22px;height:2px;background:#3b82f6;border-radius:2px;display:inline-block;opacity:.7"></span>FOB Estimado (IA)</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px">' +
              '<span style="width:22px;height:1.5px;background:rgba(250,204,21,.7);border-radius:2px;display:inline-block"></span>Contrato $16.95</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px">' +
              '<span style="width:22px;height:1.5px;background:rgba(255,149,0,.75);border-radius:2px;display:inline-block"></span>Escalador desde $20.95</span>' +
          '</div>' +
          '<div style="height:240px"><canvas id="chartPOPrices"></canvas></div>' +
        '</div>';

      setTimeout(function() {
        var cvs = document.getElementById('chartPOPrices');
        if (!cvs) return;
        var labels   = ph.map(function(d) { return d.sem; });
        var fobData  = ph.map(function(d) { return d.fob; });
        var ptBg     = ph.map(function(d) { return d.tipo === 'real' ? '#34c759' : '#3b82f6'; });
        var ptBorder = ph.map(function(d) { return d.tipo === 'real' ? '#34c759' : '#3b82f6'; });
        var ptRadius = ph.map(function(d) { return d.tipo === 'real' ? 5.5 : 4; });
        var nFob     = ph.length;
        var refLine  = function(val) { return ph.map(function() { return val; }); };

        new Chart(cvs.getContext('2d'), {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'FOB $/caja',
                data: fobData,
                fill: 'origin',
                backgroundColor: 'rgba(52,199,89,.07)',
                tension: 0.38,
                borderWidth: 2.5,
                pointRadius: ptRadius,
                pointHoverRadius: 7,
                pointBackgroundColor: ptBg,
                pointBorderColor: 'transparent',
                segment: {
                  borderColor: function(ctx) {
                    var d = ph[ctx.p0DataIndex];
                    return (d && d.tipo === 'real') ? '#34c759' : 'rgba(59,130,246,.75)';
                  },
                  borderDash: function(ctx) {
                    var d = ph[ctx.p0DataIndex];
                    return (d && d.tipo === 'est') ? [5, 4] : undefined;
                  }
                }
              },
              {
                label: 'Contrato $16.95',
                data: refLine(16.95),
                borderColor: 'rgba(250,204,21,.65)',
                backgroundColor: 'transparent',
                borderWidth: 1.5,
                borderDash: [8, 6],
                pointRadius: 0,
                fill: false,
                tension: 0
              },
              {
                label: 'Escalador desde $20.95',
                data: refLine(20.95),
                borderColor: 'rgba(255,149,0,.7)',
                backgroundColor: 'transparent',
                borderWidth: 1.5,
                borderDash: [4, 4],
                pointRadius: 0,
                fill: false,
                tension: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(20,20,28,.92)',
                titleColor: 'rgba(255,255,255,.85)',
                bodyColor: 'rgba(255,255,255,.6)',
                borderColor: 'rgba(255,255,255,.08)',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                  label: function(ctx) {
                    if (ctx.datasetIndex === 0) {
                      var d = ph[ctx.dataIndex];
                      var tag = d.tipo === 'real' ? ' ✓ Real' : ' ~ Estimado';
                      var line = ' FOB: $' + ctx.parsed.y.toFixed(2) + '/caja' + tag;
                      return d.nota ? [line, '  ' + d.nota] : line;
                    }
                    return ' ' + ctx.dataset.label + ': $' + ctx.parsed.y.toFixed(2);
                  }
                }
              }
            },
            scales: {
              y: {
                min: 0,
                suggestedMax: 30,
                ticks: {
                  callback: function(v) { return '$' + v.toFixed(0); },
                  color: 'rgba(255,255,255,.4)',
                  font: { size: 10 },
                  maxTicksLimit: 7
                },
                grid: { color: 'rgba(255,255,255,.04)' }
              },
              x: {
                ticks: { color: 'rgba(255,255,255,.4)', font: { size: 9.5 } },
                grid: { display: false }
              }
            }
          }
        });
      }, 50);
    })();

    /* ── LIQUIDACIONES SEMANALES ── */
    (function() {
      var lq = CW.liquidaciones;
      var lqEl = document.getElementById('cw-liquidaciones');
      if (!lqEl || !lq || !lq.length) return;

      /* ── Stacked bar chart ── */
      lqEl.innerHTML =
        secHdr('Desglose Semanal · FOB → Deducciones → Liquidación', 'Gass Sheet WK15 · Overview Payments · Weekly Liquidations') +
        '<div class="hoy-alert info" style="margin-bottom:10px">' +
          '<div class="hoy-alert-ico">i</div>' +
          '<div class="hoy-alert-txt"><b>Settle semanal parcial.</b> Cada liquidación incluye únicamente las facturas procesadas al corte de esa semana. Las facturas pendientes se consolidan en el siguiente settle. ' +
          'Los datos de la semana en curso son estimados — no usar como cifra definitiva hasta que Calavo confirme el cierre. ' +
          'Comisión en settle = 22% total (incluye gastos logísticos, flete, inspecciones frontera; ~12% ganancia neta Calavo).</div>' +
        '</div>' +
        '<div class="card" style="padding:20px 20px 14px">' +
          '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px">' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;background:#34c759;border-radius:3px;display:inline-block"></span>Liquidación neta</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;background:#ff9f0a;border-radius:3px;display:inline-block"></span>Gastos (Z-code+otros)</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;background:#ff453a;border-radius:3px;display:inline-block"></span>Comisión settle (22% = 12% real + ~10% AD reembolsable)</span>' +
            '<span style="font-size:.63rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;background:#3b82f6;border-radius:3px;display:inline-block"></span>Pick &amp; Pack ($5/caja)</span>' +
          '</div>' +
          '<div style="height:240px"><canvas id="chartLiquidaciones"></canvas></div>' +
        '</div>' +
        /* ── Detail table ── */
        secHdr('Tabla de Liquidaciones WK01–WK15', 'Fuente: Weekly Liquidations · en USD') +
        '<div class="card" style="padding:0;overflow:hidden">' +
          '<div class="tbl-wrap"><table class="liq-tbl" style="width:100%;border-collapse:collapse;font-size:.72rem;font-variant-numeric:tabular-nums">' +
            '<thead><tr>' +
              '<th style="padding:10px 14px;text-align:left;color:var(--muted);font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">WK</th>' +
              '<th style="padding:10px 14px;text-align:right;color:var(--muted);font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Pkgs</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#34c759;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">FOB Total</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#34c759;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">FOB $/caja</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#ff453a;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Comisión</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#3b82f6;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">P&P</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#ff9f0a;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Gastos</th>' +
              '<th style="padding:10px 14px;text-align:right;color:var(--muted);font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Loan</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#fff;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Liquidación</th>' +
              '<th style="padding:10px 14px;text-align:right;color:#fff;font-weight:700;font-size:.6rem;letter-spacing:.8px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.07)">Liq $/caja</th>' +
            '</tr></thead><tbody>' +
            (function() {
              var rows = '';
              var totFob=0,totComis=0,totPP=0,totGast=0,totLoan=0,totLiq=0,totPkgs=0;
              lq.forEach(function(w, i) {
                var fobPk = w.fob / w.pkgs;
                var liqPk = w.liq / w.pkgs;
                var bg = i%2===0 ? 'rgba(255,255,255,.018)' : 'transparent';
                var liqColor = liqPk >= 10 ? '#34c759' : liqPk >= 5 ? '#a3e635' : liqPk >= 2 ? '#facc15' : '#ff9f0a';
                totFob+=w.fob; totComis+=w.comision; totPP+=w.pp; totGast+=w.gastos; totLoan+=w.loan; totLiq+=w.liq; totPkgs+=w.pkgs;
                rows += '<tr style="background:' + bg + '">' +
                  '<td style="padding:8px 14px;font-weight:700;color:rgba(255,255,255,.85)">' + w.sem + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:var(--muted)">' + w.pkgs.toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:#34c759">$' + Math.round(w.fob).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:#34c759;font-weight:600">$' + fobPk.toFixed(2) + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:#ff453a">$' + Math.round(w.comision).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:#3b82f6">$' + Math.round(w.pp).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:#ff9f0a">$' + Math.round(w.gastos).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;color:var(--muted)">$' + Math.round(w.loan).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;font-weight:700;color:#fff">$' + Math.round(w.liq).toLocaleString() + '</td>' +
                  '<td style="padding:8px 14px;text-align:right;font-weight:700;color:' + liqColor + '">$' + liqPk.toFixed(2) + '</td>' +
                '</tr>';
              });
              // Totals row
              rows += '<tr style="background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.12)">' +
                '<td style="padding:9px 14px;font-weight:800;color:#fff;letter-spacing:.5px">TOTAL</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:700;color:rgba(255,255,255,.7)">' + totPkgs.toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:800;color:#34c759">$' + Math.round(totFob).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:800;color:#34c759">$' + (totFob/totPkgs).toFixed(2) + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:700;color:#ff453a">$' + Math.round(totComis).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:700;color:#3b82f6">$' + Math.round(totPP).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:700;color:#ff9f0a">$' + Math.round(totGast).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:700;color:var(--muted)">$' + Math.round(totLoan).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:800;color:#fff">$' + Math.round(totLiq).toLocaleString() + '</td>' +
                '<td style="padding:9px 14px;text-align:right;font-weight:800;color:#34c759">$' + (totLiq/totPkgs).toFixed(2) + '</td>' +
              '</tr>';
              return rows;
            })() +
            '</tbody></table></div>' +
        '</div>';

      /* ── Chart ── */
      setTimeout(function() {
        var cvs = document.getElementById('chartLiquidaciones');
        if (!cvs) return;
        var labels = lq.map(function(w) { return w.sem; });
        function pkVal(fn) { return lq.map(fn); }

        new Chart(cvs.getContext('2d'), {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              { label:'Liquidación neta', data: pkVal(function(w){ return +(w.liq/w.pkgs).toFixed(2); }),
                backgroundColor:'rgba(52,199,89,.82)',  borderWidth:0, stack:'s' },
              { label:'Gastos',           data: pkVal(function(w){ return +(w.gastos/w.pkgs).toFixed(2); }),
                backgroundColor:'rgba(255,159,10,.78)', borderWidth:0, stack:'s' },
              { label:'Comisión',         data: pkVal(function(w){ return +(w.comision/w.pkgs).toFixed(2); }),
                backgroundColor:'rgba(255,69,58,.78)',  borderWidth:0, stack:'s' },
              { label:'Pick & Pack',      data: pkVal(function(w){ return +(w.pp/w.pkgs).toFixed(2); }),
                backgroundColor:'rgba(59,130,246,.80)', borderWidth:0, stack:'s' }
            ]
          },
          options: {
            responsive:true, maintainAspectRatio:false,
            interaction:{ mode:'index', intersect:false },
            plugins:{
              legend:{ display:false },
              tooltip:{
                backgroundColor:'rgba(20,20,28,.93)',
                titleColor:'rgba(255,255,255,.85)',
                bodyColor:'rgba(255,255,255,.65)',
                borderColor:'rgba(255,255,255,.08)',
                borderWidth:1, padding:10,
                callbacks:{
                  afterTitle: function(items) {
                    var i = items[0].dataIndex;
                    var w = lq[i];
                    return 'FOB total: $' + Math.round(w.fob).toLocaleString() + '  (' + w.pkgs.toLocaleString() + ' pkgs)';
                  },
                  label: function(ctx) {
                    var i = ctx.dataIndex;
                    var w = lq[i];
                    var total = w.fob / w.pkgs;
                    var pct = (ctx.parsed.y / total * 100).toFixed(1);
                    return ' ' + ctx.dataset.label + ': $' + ctx.parsed.y.toFixed(2) + '/caja  (' + pct + '%)';
                  },
                  footer: function(items) {
                    var i = items[0].dataIndex;
                    var w = lq[i];
                    return 'FOB $/caja: $' + (w.fob/w.pkgs).toFixed(2) + '  →  Liq $/caja: $' + (w.liq/w.pkgs).toFixed(2);
                  }
                }
              }
            },
            scales:{
              y:{
                stacked:true,
                ticks:{ callback:function(v){ return '$'+v.toFixed(0); }, color:'rgba(255,255,255,.4)', font:{size:10}, maxTicksLimit:7 },
                grid:{ color:'rgba(255,255,255,.04)' }
              },
              x:{ stacked:true, ticks:{ color:'rgba(255,255,255,.4)', font:{size:9.5} }, grid:{ display:false } }
            }
          }
        });
      }, 60);
    })();

    /* ── DISCREPANCIAS ── */
    if (CW.discrepancias && CW.discrepancias.length) {
      document.getElementById('cw-discrepancias').innerHTML =
        secHdr('Análisis de Discrepancias', 'Belher vs Calavo · Detección de anomalías') +
        '<div class="cw-disc-grid">' +
        CW.discrepancias.map(function(d) {
          return '<div class="cw-disc-card' + (d.alerta ? ' alerta' : '') + '">' +
            '<div class="cw-disc-title">' + d.titulo + '</div>' +
            '<div class="cw-disc-row"><span class="cw-disc-lbl">Belher</span><span class="cw-disc-val">' + d.belher + '</span></div>' +
            '<div class="cw-disc-row"><span class="cw-disc-lbl">Calavo / USDA</span><span class="cw-disc-val">' + d.mercado + '</span></div>' +
            '<div class="cw-disc-row"><span class="cw-disc-lbl">Diferencia</span><span class="cw-disc-diff ' + (d.alerta ? 'cw-disc-warn' : 'cw-disc-ok') + '">' + d.diferencia + '</span></div>' +
            '<div class="cw-disc-nota">' + d.nota + '</div>' +
          '</div>';
        }).join('') + '</div>';
    }

    /* ── NOTICIAS MERCADO TOMATE ── */
    if (CW.noticias && CW.noticias.length) {
      document.getElementById('cw-noticias').innerHTML =
        secHdr('Inteligencia de Mercado · Tomate', 'Corbel Seeds · USDA · Prensa especializada') +
        '<div class="cw-news-grid">' +
        CW.noticias.map(function(n) {
          return '<div class="cw-news-card">' +
            '<div class="cw-news-top">' +
              '<span class="cw-news-cat ' + n.categoria + '">' + n.categoria + '</span>' +
              '<span class="cw-news-imp ' + n.impacto + '">' + n.impacto + '</span>' +
              '<span class="cw-news-fuente">' + n.fuente + '</span>' +
            '</div>' +
            '<div class="cw-news-titulo">' + n.titulo + '</div>' +
            '<div class="cw-news-resumen">' + n.resumen + '</div>' +
          '</div>';
        }).join('') + '</div>';
    }

    /* ── PREDICCIONES BOLSA ── */
    if (CW.prediccionBolsa && CW.prediccionBolsa.length) {
      document.getElementById('cw-predicciones').innerHTML =
        secHdr('Perspectiva Bursátil · 90 días', 'Análisis interno · No es asesoría de inversión') +
        '<div class="cw-pred-grid">' +
        CW.prediccionBolsa.map(function(p) {
          return '<div class="cw-pred-card ' + p.tendencia + '">' +
            '<div class="cw-pred-sym">' + p.simbolo + ' · NASDAQ</div>' +
            '<div class="cw-pred-company">' + p.empresa + '</div>' +
            '<div class="cw-pred-row"><span class="cw-pred-lbl">Precio actual</span><span class="cw-pred-val">' + cFmt(p.precioActual) + '</span></div>' +
            '<div class="cw-pred-row"><span class="cw-pred-lbl">Objetivo 90d</span><span class="cw-pred-val">' + cFmt(p.precioObj90d) + '</span></div>' +
            '<div class="cw-pred-row"><span class="cw-pred-lbl">Riesgo bajista</span><span class="cw-pred-val">' + cFmt(p.riesgoBajo) + '</span></div>' +
            '<div class="cw-pred-row"><span class="cw-pred-lbl">Tendencia</span><span class="cw-pred-trend ' + p.tendencia + '">' + (p.tendencia === 'alcista' ? '▲' : p.tendencia === 'bajista' ? '▼' : '→') + ' ' + p.tendencia.toUpperCase() + '</span></div>' +
            '<div class="cw-pred-conf"><span style="font-size:.6rem;color:var(--muted)">Confianza</span><div class="cw-pred-conf-bar"><div class="cw-pred-conf-fill" style="width:' + p.confianza + '%"></div></div><span class="cw-pred-conf-lbl">' + p.confianza + '%</span></div>' +
            '<div class="cw-pred-reason">' + p.razonamiento.substring(0, 220) + '…</div>' +
            (p.factores ? '<ul style="margin:8px 0 0;padding-left:14px">' + p.factores.map(function(f){ return '<li style="font-size:.65rem;color:var(--muted);margin-bottom:3px">' + f + '</li>'; }).join('') + '</ul>' : '') +
          '</div>';
        }).join('') + '</div>';
    }
  }

  function renderTomate() {
    var tv = (D.tomate && D.tomate.ventas) || { exportacion:[], nacional:[] };
    var ub = D.calidad.ultimoOutbound;
    var cv = D.calavo;

    /* ── Core numbers ── */
    var tot         = tv.total || {};
    var expEntry    = tv.exportacion[0] || {};
    var nacEntry    = tv.nacional[0]    || {};
    var cajasTotal  = tot.cajas      || 0;
    var revReal     = tot.revenue    || 0;
    var expCajas    = expEntry.cajas    || 0;
    var nacCajas    = nacEntry.cajas    || 0;
    var expRev      = expEntry.revenue  || 0;
    var nacRev      = nacEntry.revenue  || 0;
    var expPct      = cajasTotal ? (expCajas / cajasTotal * 100) : 0;
    var nacPct      = cajasTotal ? (nacCajas / cajasTotal * 100) : 0;
    var revPorCaja  = cajasTotal ? (revReal / cajasTotal) : 0;
    var expRevPCaja = expCajas ? (expRev / expCajas) : 0;
    var nacRevPCaja = nacCajas ? (nacRev / nacCajas) : 0;
    var periodo     = (tv.periodo && tv.periodo.label) || '';
    var ventaNeta   = cv.ventaNeta || cv.neto || 0;
    var retPct      = expRev ? (ventaNeta / expRev * 100).toFixed(1) : 0;

    /* ── Revenue Pace ── */
    var paidWeeks   = (cv.pagos || []).filter(function(p){ return p.pago && p.estado !== 'Pendiente'; }).length || 12;
    var totalWeeksEst = 20; /* estimated full season weeks */
    var weeksPct    = Math.min(paidWeeks / totalWeeksEst * 100, 100);
    var projRevTotal= paidWeeks ? (revReal / paidWeeks * totalWeeksEst) : 0;
    var projCajasTotal = paidWeeks ? (cajasTotal / paidWeeks * totalWeeksEst) : 0;
    var remainingRev= projRevTotal - revReal;
    setTimeout(function(){
      var paceEl = document.getElementById('tomatePaceStrip');
      if (paceEl) {
        paceEl.innerHTML =
          '<div class="tom-pace-strip">' +
            '<div class="tom-pace-item">' +
              '<div class="tom-pace-lbl">Semanas completadas</div>' +
              '<div class="tom-pace-val">' + paidWeeks + ' / ' + totalWeeksEst + ' est.</div>' +
              '<div class="tom-pace-sub">' + weeksPct.toFixed(0) + '% de temporada</div>' +
            '</div>' +
            '<div class="tom-pace-item">' +
              '<div class="tom-pace-lbl">Revenue acumulado</div>' +
              '<div class="tom-pace-val" style="color:var(--green2)">' + fmt(revReal) + '</div>' +
              '<div class="tom-pace-sub">' + fmtN(cajasTotal) + ' cajas · ' + fmt(revReal/paidWeeks) + '/sem promedio</div>' +
            '</div>' +
            '<div class="tom-pace-item">' +
              '<div class="tom-pace-lbl">Proyección final temporada</div>' +
              '<div class="tom-pace-val" style="color:var(--accent2)">' + fmt(projRevTotal) + '</div>' +
              '<div class="tom-pace-sub">≈ ' + fmtN(Math.round(projCajasTotal)) + ' cajas estimadas · ' + totalWeeksEst + ' sem.</div>' +
            '</div>' +
            '<div class="tom-pace-item">' +
              '<div class="tom-pace-lbl">Revenue restante estimado</div>' +
              '<div class="tom-pace-val" style="color:var(--muted)">' + fmt(remainingRev) + '</div>' +
              '<div class="tom-pace-sub">En ' + (totalWeeksEst - paidWeeks) + ' semanas restantes est.</div>' +
            '</div>' +
          '</div>';
      }
    }, 0);

    /* ── Hero ── */
    var heroEl = document.getElementById('tomateHero');
    heroEl.innerHTML =
      '<div class="tom-hero">' +
        '<div class="th-eyebrow">Tomate · Temporada 2025–2026 · ' + periodo + '</div>' +
        '<div class="th-revenue" id="thTomRevenue">' + fmt(revReal) + '</div>' +
        '<div class="th-cajas">' + fmtN(cajasTotal) + ' cajas totales &nbsp;·&nbsp; ' + fmtN(expCajas) + ' exportación &nbsp;+&nbsp; ' + fmtN(nacCajas) + ' nacional</div>' +
        '<div class="th-split-bar">' +
          '<div class="th-split-fill-exp" style="width:' + expPct.toFixed(1) + '%"></div>' +
          '<div class="th-split-fill-nac"></div>' +
        '</div>' +
        '<div class="th-split-labels">' +
          '<span><strong style="color:#4ade80">' + expPct.toFixed(1) + '%</strong>&nbsp; Exportación</span>' +
          '<span>Nacional &nbsp;<strong style="color:#60a5fa">' + nacPct.toFixed(1) + '%</strong></span>' +
        '</div>' +
        '<div class="th-metrics">' +
          '<div class="th-metric">' +
            '<div class="th-metric-val" style="color:#4ade80">' + fmt(expRev) + '</div>' +
            '<div class="th-metric-lbl">Revenue Export</div>' +
          '</div>' +
          '<div class="th-metric">' +
            '<div class="th-metric-val" style="color:#60a5fa">' + fmt(nacRev) + '</div>' +
            '<div class="th-metric-lbl">Revenue Nacional</div>' +
          '</div>' +
          '<div class="th-metric">' +
            '<div class="th-metric-val" style="color:var(--accent2)">' + fmt(revPorCaja, 2) + '</div>' +
            '<div class="th-metric-lbl">Promedio / Caja</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    setTimeout(function () {
      var el = document.getElementById('thTomRevenue');
      if (el && revReal) countUp(el, revReal, 900, '$');
    }, 80);

    /* ── Channel Revenue Cards ── */
    var expRomaBola = [];
    if (expEntry.cajasRoma) expRomaBola.push(fmtN(expEntry.cajasRoma) + ' Roma');
    if (expEntry.cajasBola) expRomaBola.push(fmtN(expEntry.cajasBola) + ' Bola');
    var nacRomaBola = [];
    if (nacEntry.cajasRoma) nacRomaBola.push(fmtN(nacEntry.cajasRoma) + ' Roma');
    if (nacEntry.cajasBola) nacRomaBola.push(fmtN(nacEntry.cajasBola) + ' Bola');

    document.getElementById('tomateChannels').innerHTML =
      /* Export card */
      '<div class="tom-ch-card ch-export">' +
        '<div class="ch-eyebrow">Exportación · Calavo · AZ / TX</div>' +
        '<div class="ch-rev-row">' +
          '<div>' +
            '<div class="ch-rev-main-val" style="color:var(--green2)">' + fmt(expRev) + '</div>' +
            '<div class="ch-rev-main-lbl">Revenue Bruto FOB</div>' +
          '</div>' +
          '<div class="ch-rev-arrow">→</div>' +
          '<div>' +
            '<div class="ch-rev-net-val" style="color:var(--green)">' + fmt(ventaNeta) + '</div>' +
            '<div class="ch-rev-net-lbl">Venta Neta (' + retPct + '%)</div>' +
          '</div>' +
        '</div>' +
        '<div class="ch-meta">' +
          fmtN(expCajas) + ' cajas' +
          (expRomaBola.length ? ' &nbsp;·&nbsp; ' + expRomaBola.join(' / ') : '') +
          ' &nbsp;·&nbsp; ' + fmt(expRevPCaja, 2) + '/caja' +
        '</div>' +
        '<div class="ch-progress"><div class="ch-progress-fill" style="width:' + expPct.toFixed(1) + '%;background:var(--green2)"></div></div>' +
      '</div>' +
      /* Nacional card */
      '<div class="tom-ch-card ch-nac">' +
        '<div class="ch-eyebrow">Mercado Nacional · MX</div>' +
        '<div class="ch-rev-row">' +
          '<div>' +
            '<div class="ch-rev-main-val" style="color:#1d4ed8">' + fmt(nacRev) + '</div>' +
            '<div class="ch-rev-main-lbl">Revenue Total</div>' +
          '</div>' +
        '</div>' +
        '<div class="ch-meta">' +
          fmtN(nacCajas) + ' cajas' +
          (nacRomaBola.length ? ' &nbsp;·&nbsp; ' + nacRomaBola.join(' / ') : '') +
          ' &nbsp;·&nbsp; ' + fmt(nacRevPCaja, 2) + '/caja<br>' +
          'Yameto · Tolin · Urson · Millennium · Zazu' +
        '</div>' +
        '<div class="ch-progress"><div class="ch-progress-fill" style="width:' + nacPct.toFixed(1) + '%;background:#1d4ed8"></div></div>' +
      '</div>';

    /* ── Calavo Financial Strip (resumen — detalle completo en Finanzas) ── */
    var saldoActual = cv.saldoActual || 0;
    var saldoNeg    = saldoActual < 0;
    document.getElementById('tomateCalavoStrip').innerHTML =
      '<div class="tom-calavo-strip">' +
        '<div class="tcs-item">' +
          '<div class="tcs-val" style="color:var(--green2)">' + fmt(expRev) + '</div>' +
          '<div class="tcs-lbl">Revenue Bruto FOB</div>' +
        '</div>' +
        '<div class="tcs-item">' +
          '<div class="tcs-val" style="color:var(--green)">' + fmt(ventaNeta) + '</div>' +
          '<div class="tcs-lbl">Venta Neta · ' + retPct + '% del bruto</div>' +
        '</div>' +
        '<div class="tcs-item">' +
          '<div class="tcs-val" style="color:' + (saldoNeg ? 'var(--red2)' : 'var(--green2)') + '">' + fmt(saldoActual) + '</div>' +
          '<div class="tcs-lbl">Saldo Due from (to) Beltran</div>' +
        '</div>' +
        '<div class="tcs-item" style="justify-content:center">' +
          '<button onclick="document.querySelector(\'[data-tab=finanzas]\').click()" style="background:rgba(255,255,255,.07);border:1px solid var(--border);border-radius:8px;padding:7px 14px;color:var(--muted);font-size:.68rem;font-weight:600;cursor:pointer;font-family:inherit;letter-spacing:.3px">Ver desglose completo →</button>' +
        '</div>' +
      '</div>';

    /* ── Calidad Summary Card ── */
    var hist = D.calidad.historico || [];
    var lastWk  = hist[hist.length - 1] || {};
    var prevWk  = hist[hist.length - 2] || {};
    var primaDiff = (lastWk.primaPromedio && prevWk.primaPromedio)
      ? (lastWk.primaPromedio - prevWk.primaPromedio).toFixed(1) : null;
    var mermaDiff = (lastWk.mermaPromedio && prevWk.mermaPromedio)
      ? (lastWk.mermaPromedio - prevWk.mermaPromedio).toFixed(2) : null;
    var mermaOk   = lastWk.mermaPromedio != null && lastWk.mermaPromedio < 4;
    document.getElementById('tomateCalidadSummary').innerHTML =
      '<div class="tom-cal-summary">' +
        '<div class="tcs-cal-item">' +
          '<div class="tcs-cal-val" style="color:var(--green2)">' + (lastWk.primaPromedio != null ? lastWk.primaPromedio.toFixed(1) + '%' : '—') + '</div>' +
          '<div class="tcs-cal-lbl">1ª Prima · ' + (lastWk.fecha || '—') +
            (primaDiff != null ? ' <span style="color:' + (primaDiff >= 0 ? 'var(--green2)' : 'var(--red2)') + '">' + (primaDiff >= 0 ? '▲ +' : '▼ ') + Math.abs(primaDiff) + '%</span>' : '') +
          '</div>' +
        '</div>' +
        '<div class="tcs-cal-item">' +
          '<div class="tcs-cal-val" style="color:' + (mermaOk ? 'var(--green2)' : 'var(--red2)') + '">' + (lastWk.mermaPromedio != null ? lastWk.mermaPromedio.toFixed(2) + '%' : '—') + '</div>' +
          '<div class="tcs-cal-lbl">Merma · ' + (mermaOk ? '✓ OK' : '⚠ Alto') +
            (mermaDiff != null ? ' <span style="color:' + (mermaDiff <= 0 ? 'var(--green2)' : 'var(--red2)') + '">' + (mermaDiff <= 0 ? '▼ ' : '▲ +') + Math.abs(mermaDiff) + '%</span>' : '') +
          '</div>' +
        '</div>' +
        '<div class="tcs-cal-item">' +
          '<div class="tcs-cal-val">' + (ub && ub.fecha ? ub.fecha : '—') + '</div>' +
          '<div class="tcs-cal-lbl">Último Outbound</div>' +
        '</div>' +
        '<div class="tcs-cal-item">' +
          '<div class="tcs-cal-val">' + (ub && ub.variedades ? ub.variedades.length : 0) + '</div>' +
          '<div class="tcs-cal-lbl">Variedades activas</div>' +
        '</div>' +
      '</div>';

    /* ── Market Prices ── */
    var tomKeys = ['tomate','vine','grape','roma','saladet'];
    var tPrecios = (D.mercado.precios || []).filter(function (p) {
      var n = p.producto.toLowerCase();
      return tomKeys.some(function (k) { return n.indexOf(k) !== -1; });
    });
    var scaleMax = tPrecios.length ? Math.max.apply(null, tPrecios.map(function (p) { return p.max; })) * 1.15 : 1;
    var tomPreciosEl = document.getElementById('tomatePrecios');
    if (tomPreciosEl) tomPreciosEl.innerHTML = tPrecios.map(function (p) {
      var mid = (p.min + p.max) / 2;
      var chgPct = p.anterior != null ? ((mid - p.anterior) / p.anterior * 100) : null;
      var chgStr = chgPct != null ? (chgPct >= .5 ? '▲ +' : chgPct <= -.5 ? '▼ ' : '→ ') + Math.abs(chgPct).toFixed(1) + '% vs semana anterior' : 'Sin comparativo';
      var chgCls = chgPct == null ? 'neu' : chgPct > .5 ? 'up' : chgPct < -.5 ? 'dn' : 'neu';
      var barColor = chgPct == null ? 'rgba(107,114,128,.4)' : chgPct > 10 ? 'rgba(22,163,74,.85)' : chgPct > 0 ? 'rgba(22,163,74,.55)' : 'rgba(220,38,38,.65)';
      var minPct = (p.min / scaleMax * 100).toFixed(1);
      var widPct = ((p.max - p.min) / scaleMax * 100).toFixed(1);
      var antPct = p.anterior != null ? (p.anterior / scaleMax * 100).toFixed(1) : null;
      return '<div class="pc-card">' +
        '<div class="pc-header"><div class="pc-name">' + p.producto + '</div><span class="badge badge-blue">' + p.via + '</span></div>' +
        '<div class="pc-range">' + fmt(p.min,2) + '&nbsp;–&nbsp;' + fmt(p.max,2) + '</div>' +
        '<div class="pc-chg ' + chgCls + '">' + chgStr + '</div>' +
        '<div class="pc-bar-wrap"><div class="pc-bar-fill" style="left:' + minPct + '%;width:' + widPct + '%;background:' + barColor + '"></div>' +
        (antPct != null ? '<div class="pc-bar-tick" style="left:' + antPct + '%"></div>' : '') + '</div>' +
        '<div class="pc-footer"><span>' + (p.anterior != null ? 'Ant: ' + fmt(p.anterior,2) : '—') + '</span><span>Mid: ' + fmt(mid,2) + '</span></div>' +
      '</div>';
    }).join('') || '<div class="card" style="padding:16px;color:var(--muted);font-size:.84rem">Sin precios de tomate en el último reporte.</div>';

    /* ── Variety quality (collapsible) ── */
    document.getElementById('tomateOutboundFecha').textContent = ub && ub.fecha ? '· ' + ub.fecha : '';

    var etqLabel = function (etq) {
      var map = { Urson:'U', Millennium:'M', Zazu:'Z' };
      return map[etq] || etq;
    };
    var extractVariedad = function (nombre) {
      if (/^bola/i.test(nombre || '')) return 'Bola';
      if (/^roma/i.test(nombre || '')) return 'Roma';
      return nombre;
    };
    var NAMED_ETQ = ['Calavo','Yameto','Tolin'];
    var buildQualMap = function (variedades) {
      var m = {};
      (variedades || []).forEach(function (v) {
        var vari = extractVariedad(v.nombre);
        m[vari + '|' + (v.etiqueta || '')] = v;
      });
      return m;
    };
    var qualMapAyer   = buildQualMap(ub.variedades);
    var qualMapSemana = buildQualMap((D.calidad.semana || {}).variedades);
    var cajasExp = {};
    (tv.exportacion || []).forEach(function (e) { cajasExp[e.etiqueta] = e.cajas; });

    var renderEtqCard = function (etq, vari, isNac, qMap, opts) {
      opts = opts || {};
      var key   = vari + '|' + etq;
      var v     = qMap[key];
      var cajas = isNac ? undefined : cajasExp[etq];
      var lbl   = etqLabel(etq);
      var nacSuffix = etq === 'Yameto' ? ' · 1ª Nac' : etq === 'Tolin' ? ' · 2ª Nac' : '';
      var cajasText = NAMED_ETQ.indexOf(etq) !== -1
        ? (cajas ? fmtN(cajas) + ' cajas' : 'Cajas: pendiente')
        : 'JZ';
      var diasHtml = (opts.showDias && v && v.dias != null)
        ? ' <span class="dias-badge">' + v.dias + '/7 días</span>' : '';
      var top = '<div class="etq-card-mini' + (!v ? ' no-data' : '') + '">' +
        '<div class="ecm-top">' +
          '<span class="ecm-label">' + lbl + nacSuffix + diasHtml + '</span>' +
          '<span class="ecm-cajas">' + cajasText + '</span>' +
        '</div>';
      if (!v) {
        var noMsg = opts.isAyer ? 'No se empacó el ' + ub.fecha : 'Sin datos en los últimos 7 días';
        return top + '<div class="ecm-nodata">' + noMsg + '</div></div>';
      }
      var tot  = (v.primera||0)+(v.segunda||0)+(v.tercera||0)+(v.merma||0);
      var mCls = (v.merma||0) > 4 ? 'bad' : (v.merma||0) > 3 ? 'warn' : 'ok';
      return top +
        '<div class="qual-stack" style="margin:6px 0 5px">' +
          '<div class="qs-prima" style="width:' + (tot?(v.primera/tot*100).toFixed(1):0)+'%"></div>' +
          '<div class="qs-seg"   style="width:' + (tot?(v.segunda/tot*100).toFixed(1):0)+'%"></div>' +
          '<div class="qs-ter"   style="width:' + (tot?(v.tercera/tot*100).toFixed(1):0)+'%"></div>' +
          '<div class="qs-merma" style="width:' + (tot?(v.merma/tot*100).toFixed(1):0)+'%"></div>' +
        '</div>' +
        '<div class="ecm-grades">' +
          '<div><div class="g-val" style="color:var(--green2)">' + pct(v.primera)+'</div><div class="g-lbl">1ª</div></div>' +
          '<div><div class="g-val" style="color:#fbbf24">'        + pct(v.segunda)+'</div><div class="g-lbl">2ª</div></div>' +
          '<div><div class="g-val" style="color:#6366f1">'        + pct(v.tercera)+'</div><div class="g-lbl">3ª</div></div>' +
          '<div><div class="qual-merma-badge '+mCls+'" style="font-size:.7rem;padding:1px 5px;display:inline-block">'+pct(v.merma)+'</div><div class="g-lbl">Merma</div></div>' +
        '</div>' +
        '<div style="font-size:.64rem;color:var(--muted);margin-top:5px">Peso: ' + fmtN(v.peso,2) + ' lb' +
          (v.alerta ? '&nbsp;<span class="badge badge-red" style="font-size:.55rem">⚠</span>' : '') +
        '</div></div>';
    };

    var variedades = ['Roma','Bola'];
    var expEtqs    = ['Calavo'];
    var nacEtqs    = ['Yameto','Tolin','Urson','Millennium','Zazu'];

    var buildVariedadHtml = function (qMap, opts) {
      return variedades.map(function (vari) {
        var nacEntries = nacEtqs.map(function(etq){ return qMap[vari+'|'+etq]; }).filter(Boolean);
        var nacStats = nacEntries.length
          ? { avgPrima: nacEntries.reduce(function(s,v){return s+v.primera;},0)/nacEntries.length,
              avgMerma: nacEntries.reduce(function(s,v){return s+v.merma;},0)/nacEntries.length,
              count: nacEntries.length }
          : null;
        var nacStatsHtml = nacStats
          ? '<div class="nac-group-stats">' +
              '<span class="nac-group-stat">1ª Prima: <strong style="color:var(--green2)">' + pct(nacStats.avgPrima) + '</strong></span>' +
              '<span class="nac-group-stat">Merma: <strong>' + pct(nacStats.avgMerma) + '</strong></span>' +
              '<span class="nac-group-stat muted">' + nacStats.count + ' etiquetas</span>' +
            '</div>'
          : '<div class="nac-group-stats"><span class="nac-group-stat muted">' +
              (opts.isAyer ? 'Sin empaque el ' + ub.fecha : 'Sin datos en los últimos 7 días') +
            '</span></div>';
        var chevronSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
        return '<div class="variedad-section">' +
          '<div class="variedad-title">Variedad · ' + vari + '</div>' +
          '<div class="canal-grid">' +
            '<div class="canal-col">' +
              '<div class="canal-header canal-export" style="margin-bottom:10px"><span class="canal-label">Exportación</span></div>' +
              expEtqs.map(function(etq){ return renderEtqCard(etq,vari,false,qMap,opts); }).join('') +
            '</div>' +
            '<div class="canal-col">' +
              '<div class="canal-header canal-nac" style="margin-bottom:10px"><span class="canal-label">Nacional</span></div>' +
              '<details class="nac-group">' +
                '<summary class="nac-group-summary">' +
                  '<div class="nac-group-sum-content">' +
                    '<div class="nac-group-label">Yameto · Tolin · U · M · Z</div>' +
                    nacStatsHtml +
                  '</div>' +
                  '<div class="nac-chevron">' + chevronSvg + '</div>' +
                '</summary>' +
                '<div class="nac-group-body">' +
                  nacEtqs.map(function(etq){ return renderEtqCard(etq,vari,true,qMap,opts); }).join('') +
                '</div>' +
              '</details>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    };

    document.getElementById('tomateVariedadesAyer').innerHTML =
      buildVariedadHtml(qualMapAyer, { isAyer: true, showDias: false });
    document.getElementById('tomateVariedadesSemana').innerHTML =
      buildVariedadHtml(qualMapSemana, { isAyer: false, showDias: true });

    /* ── Embarques ── */
    var clasificarUnidad = function (u) {
      u = (u||'').toUpperCase().trim();
      if (/^ST[\-\s]?\d/i.test(u)) return 'Transfrios (ST)';
      if (/^JL[\-\s]?\d/i.test(u)) return 'Elogística (JL)';
      if (/^CGG[\-\s]?\d/i.test(u)) return 'CGG (CGG)';
      return 'Otros';
    };
    var emb = (D.operaciones.embarques||[]).filter(function(e){ return e.tipo==='Tomate'; });
    var tbody = document.querySelector('#tomateEmbarquesTbl tbody');
    if (tbody) tbody.innerHTML = emb.length
      ? emb.map(function(e){
          return '<tr><td>'+e.fecha+'</td><td class="td-num">'+e.cargas+'</td><td>'+e.unidad+'</td><td>'+clasificarUnidad(e.unidad)+'</td><td><span class="badge badge-blue">'+e.destino+'</span></td><td>'+e.estado+'</td></tr>';
        }).join('')
      : '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px">Sin embarques registrados</td></tr>';
  }
  function renderLimon() {
    var lt = D.limon && D.limon.temporada;

    /* ── Customer concentration risk banner ── */
    var riskEl = document.getElementById('limonClienteRisk');
    if (riskEl && lt && lt.comprador) {
      var fobTotal = lt.revenue_feb || 0;
      riskEl.innerHTML =
        '<div class="limon-risk-banner">' +
          '<div class="limon-risk-icon">⚠</div>' +
          '<div class="limon-risk-body">' +
            '<div class="limon-risk-title">Concentración de Cliente · 100% en ' + lt.comprador + '</div>' +
            '<div class="limon-risk-txt">Todo el revenue de limón persa (' + fmt(fobTotal) + ' en Feb) depende de un solo comprador. ' +
            'Riesgo: cancelación, renegociación de precio o problemas de capacidad del cliente impactan directamente. ' +
            '<strong>Acción:</strong> Evaluar acercamiento con compradores alternativos (Suntreat, Pacific Organic, otros) para diversificar antes de la próxima temporada.</div>' +
          '</div>' +
        '</div>';
    }

    /* ── KPI row with real financial data ── */
    var kpisEl = document.getElementById('limonKpis');
    if (lt) {
      var fobPorCaja = lt.fob_caja_feb;
      var mocPct     = lt.first_moc_pct;
      var ebitdaKpi  = lt.ebitda_feb != null ? lt.ebitda_feb : lt.ebitda_acum;
      kpisEl.innerHTML =
        kpiCard('Revenue Febrero 2026', fmt(lt.revenue_feb), lt.cajas_feb.toLocaleString('en-US') + ' cajas · ' + lt.libras_feb.toLocaleString('en-US') + ' lb',
          'pos', 'accent-pos', pill('up', 'Maui Fresh · $' + fobPorCaja.toFixed(2) + '/caja FOB')) +
        kpiCard('Liquidación Neta Feb', fmt(lt.liquidacion_feb), 'Comisión ' + fmt(lt.comision_feb) + ' · Fletes ' + fmt(lt.flete_mx_feb + lt.flete_eu_feb),
          'pos', 'accent-pos', pill('up', 'MOC bruto ' + mocPct.toFixed(1) + '%')) +
        kpiCard('Costos Totales Feb', fmt(lt.costo_manuf_feb + lt.costo_dist_feb + lt.comision_feb + lt.flete_mx_feb + lt.flete_eu_feb), 'Manufactura + Dist + Comisión + Fletes',
          'neg', 'accent-neg', null) +
        kpiCard('EBITDA · Cierre Feb 2026', (ebitdaKpi < 0 ? '−' : '+') + fmt(Math.abs(ebitdaKpi)), 'Incluye costos de campo · Jul–Feb',
          ebitdaKpi < 0 ? 'neg' : 'pos', ebitdaKpi < 0 ? 'accent-neg' : 'accent-pos',
          pill(ebitdaKpi < 0 ? 'dn' : 'up', ebitdaKpi < 0 ? 'Pérdida' : 'Rentable'));
    }

    /* ── USDA FOB Nogales + LA Terminal price ── */
    var lu = D.limon && D.limon.usda;
    var usdaEl = document.getElementById('limonUsdaPrice');
    if (lu && lu.precio_min != null) {
      var chgPct = lu.anterior != null ? ((((lu.precio_min+lu.precio_max)/2) - lu.anterior) / lu.anterior * 100) : null;
      var chgStr = chgPct != null ? (chgPct >= .5 ? '▲ +' : chgPct <= -.5 ? '▼ ' : '→ ') + Math.abs(chgPct).toFixed(1) + '% vs sem. ant.' : '';
      var chgCls = chgPct == null ? '' : chgPct > .5 ? 'up' : chgPct < -.5 ? 'dn' : 'neu';
      var la = lu.la_terminal;
      var laChgPct = (la && lu.anterior) ? ((((la.precio_min+la.precio_max)/2) - (lu.anterior + 3.0)) / (lu.anterior + 3.0) * 100) : null;
      var laChgCls = laChgPct == null ? '' : laChgPct > .5 ? 'up' : laChgPct < -.5 ? 'dn' : 'neu';
      var spread = la ? (((la.precio_min+la.precio_max)/2) - ((lu.precio_min+lu.precio_max)/2)).toFixed(2) : null;
      usdaEl.innerHTML =
        '<div class="card" style="padding:0;overflow:hidden">' +
          '<div class="resp-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:0">' +
            /* FOB Nogales */
            '<div style="padding:20px 24px;border-right:1px solid var(--border)">' +
              '<div style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:6px">FOB Nogales, AZ</div>' +
              '<div style="font-size:1.9rem;font-weight:900;letter-spacing:-.5px;line-height:1">' + fmt(lu.precio_min,2) + '&thinsp;–&thinsp;' + fmt(lu.precio_max,2) + '</div>' +
              '<div style="font-size:.72rem;color:var(--muted);margin-top:2px">/' + lu.unidad + ' · 40lb</div>' +
              (chgStr ? '<div class="pc-chg ' + chgCls + '" style="margin-top:6px;font-size:.72rem">' + chgStr + '</div>' : '') +
              '<div style="font-size:.68rem;color:var(--muted);margin-top:8px">' + (lu.anterior != null ? 'Sem. anterior: ' + fmt(lu.anterior,2) : '') + '&nbsp;&nbsp;Act: ' + (lu.fecha||'—') + '</div>' +
            '</div>' +
            /* LA Terminal */
            (la ?
            '<div style="padding:20px 24px;background:rgba(29,78,216,.03)">' +
              '<div style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:6px">LA Terminal Market</div>' +
              '<div style="font-size:1.9rem;font-weight:900;letter-spacing:-.5px;line-height:1;color:var(--blue)">' + fmt(la.precio_min,2) + '&thinsp;–&thinsp;' + fmt(la.precio_max,2) + '</div>' +
              '<div style="font-size:.72rem;color:var(--muted);margin-top:2px">/' + (la.unidad || lu.unidad) + '</div>' +
              (laChgPct != null ? '<div class="pc-chg ' + laChgCls + '" style="margin-top:6px;font-size:.72rem">' + (laChgPct >= .5 ? '▲ +' : laChgPct <= -.5 ? '▼ ' : '→ ') + Math.abs(laChgPct).toFixed(1) + '% vs sem. ant.</div>' : '') +
              (la.nota ? '<div style="font-size:.63rem;color:var(--muted);margin-top:8px;line-height:1.4;border-top:1px solid var(--border);padding-top:7px">' + la.nota + '</div>' : '') +
            '</div>' : '<div style="padding:20px 24px;color:var(--muted);font-size:.8rem;display:flex;align-items:center">Sin datos LA Terminal</div>') +
          '</div>' +
        '</div>';
    } else {
      usdaEl.innerHTML =
        '<div class="card" style="padding:18px 24px;color:var(--muted);font-size:.84rem">' +
          'Precio USDA FOB pendiente · Se actualiza automáticamente desde ' +
          '<a href="https://www.ams.usda.gov/market-news/fruits-vegetables" target="_blank" style="color:var(--accent)">USDA Market News</a>' +
        '</div>';
    }

    /* ── 12-month price chart + 4-week forecast ── */
    var ctxLim = document.getElementById('chartLimonPrecio');
    if (ctxLim && lu && lu.historico_12m) {
      if (chartsInit['chartLimonPrecio']) { chartsInit['chartLimonPrecio'].destroy(); }
      var hist   = lu.historico_12m;
      var fcast  = lu.tendencia_4s || [];
      var histLabels  = hist.map(function(h){ return h.mes; });
      var fcastLabels = fcast.map(function(f){ return f.semana; });
      var allLabels   = histLabels.concat(fcastLabels);
      /* Nogales mid: historical full + forecast extension */
      var nogHist  = hist.map(function(h){ return h.nogales_mid; });
      var nogFcast = hist.map(function(){ return null; }).concat(fcast.map(function(f){ return f.nogales_mid; }));
      /* LA mid: historical full + forecast extension */
      var laHist  = hist.map(function(h){ return h.la_mid; });
      var laFcast = hist.map(function(){ return null; }).concat(fcast.map(function(f){ return f.la_mid; }));
      /* Last hist point bridges to first forecast point */
      if (fcast.length) { nogFcast[hist.length-1] = nogHist[nogHist.length-1]; laFcast[hist.length-1] = laHist[laHist.length-1]; }
      chartsInit['chartLimonPrecio'] = new Chart(ctxLim, {
        type: 'line',
        data: {
          labels: allLabels,
          datasets: [
            { label:'FOB Nogales (mid)', data: nogHist.concat(fcast.map(function(){ return null; })), borderColor:'#16a34a', backgroundColor:'rgba(22,163,74,.08)', borderWidth:2.5, tension:.4, pointRadius:3, pointHoverRadius:5, fill:true },
            { label:'LA Terminal (mid)', data: laHist.concat(fcast.map(function(){ return null; })),  borderColor:'#1d4ed8', backgroundColor:'rgba(29,78,216,.06)', borderWidth:2.5, tension:.4, pointRadius:3, pointHoverRadius:5, fill:true },
            { label:'Nogales Tendencia', data: nogFcast, borderColor:'#16a34a', borderWidth:2, borderDash:[6,4], tension:.4, pointRadius:4, pointStyle:'triangle', fill:false },
            { label:'LA Tendencia',      data: laFcast,  borderColor:'#1d4ed8', borderWidth:2, borderDash:[6,4], tension:.4, pointRadius:4, pointStyle:'triangle', fill:false }
          ]
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          interaction:{ mode:'index', intersect:false },
          plugins:{
            legend:{ position:'top' },
            tooltip:{ callbacks:{ label:function(ctx){ return ctx.dataset.label + ': $' + (ctx.parsed.y != null ? ctx.parsed.y.toFixed(2) : '—'); } } },
            annotation: undefined
          },
          scales:{
            y:{ beginAtZero:false, min:10, ticks:{ callback:function(v){ return '$'+v; } }, grid:{ color:'rgba(0,0,0,.04)' } },
            x:{ grid:{ display:false },
              ticks:{ maxRotation:0, font:{ size:10 } }
            }
          }
        }
      });
      /* Shade forecast zone with a vertical line at month boundary */
      if (fcast.length && ctxLim.parentElement) {
        ctxLim.parentElement.style.position = 'relative';
        var lbl = document.createElement('div');
        lbl.style.cssText = 'position:absolute;top:8px;right:8px;font-size:.6rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--muted);background:var(--card);padding:2px 8px;border-radius:5px;border:1px solid var(--border)';
        lbl.textContent = '--- Pronóstico 4 sem.';
        ctxLim.parentElement.appendChild(lbl);
      }
    }

    /* ── P&L Limón Febrero ── */
    if (lt) {
      var pnlEl = document.getElementById('limonPnl');
      var ebitda = lt.ebitda_feb != null ? lt.ebitda_feb : lt.ebitda_acum;
      var rows = [
        { label:'Revenue FOB Export',     val: lt.revenue_feb,                          color:'var(--green2)' },
        { label:'Comisión (15%)',          val:-lt.comision_feb,                         color:'var(--red2)' },
        { label:'Flete MX + EU',           val:-(lt.flete_mx_feb + lt.flete_eu_feb),     color:'var(--red2)' },
        { label:'Liquidación Neta',        val: lt.liquidacion_feb,                      color:'var(--green2)', bold:true },
        { label:'—', val:null },
        { label:'Costo Manufactura',       val:-lt.costo_manuf_feb,                      color:'var(--red2)' },
        { label:'Costo Distribución',      val:-lt.costo_dist_feb,                       color:'var(--red2)' },
        { label:'First MOC',               val: lt.first_moc_feb,                        color: lt.first_moc_feb >= 0 ? 'var(--green2)' : 'var(--red)', bold:true, pct: lt.first_moc_pct },
        { label:'—', val:null },
        { label:'Costos Producción Acum',  val:-lt.costo_prod_acum,                      color:'var(--red2)', note:'Jul–Feb · Orchard + Campo' },
        { label:'EBITDA · Cierre Feb 2026',val: ebitda,                                  color: ebitda >= 0 ? 'var(--green2)' : 'var(--red)', bold:true, ebitda:true }
      ];
      pnlEl.innerHTML =
        '<div class="resp-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:28px">' +
          '<div>' +
            '<div style="font-size:.63rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:14px">Detalle · Febrero 2026 · Maui Fresh</div>' +
            rows.map(function(r) {
              if (!r.label || r.label === '—') return '<div style="height:10px"></div>';
              var rowStyle = r.ebitda
                ? 'display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-radius:8px;margin-top:4px;background:' + (r.val < 0 ? 'rgba(220,38,38,.07)' : 'rgba(34,197,94,.07)') + ';border:1px solid ' + (r.val < 0 ? 'rgba(220,38,38,.2)' : 'rgba(34,197,94,.2)')
                : 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)';
              return '<div style="' + rowStyle + '">' +
                '<span style="font-size:.84rem' + (r.bold ? ';font-weight:700' : '') + '">' + r.label +
                  (r.note ? '<br><span style="font-size:.68rem;font-weight:400;color:var(--muted)">' + r.note + '</span>' : '') +
                '</span>' +
                '<span style="font-weight:' + (r.bold ? '800' : '600') + ';color:' + (r.color || 'var(--text)') + (r.ebitda ? ';font-size:1.05rem' : '') + '">' +
                  (r.val < 0 ? '−' : '') + fmt(Math.abs(r.val), 0) +
                  (r.val < 0 && !r.ebitda ? ' <span style="opacity:.5;font-size:.75rem">(gasto)</span>' : '') +
                  (r.pct != null ? ' <span style="font-size:.75rem;color:var(--muted)">(' + r.pct.toFixed(1) + '%)</span>' : '') +
                '</span>' +
              '</div>';
            }).join('') +
          '</div>' +
          '<div>' +
            '<div style="font-size:.63rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:14px">Resumen Operativo</div>' +
            '<div style="background:var(--bg);border-radius:10px;padding:18px;margin-bottom:12px">' +
              '<div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Cajas exportadas (40 lb)</div>' +
              '<div style="font-size:2rem;font-weight:900;letter-spacing:-.5px">' + lt.cajas_feb.toLocaleString('en-US') + '</div>' +
              '<div style="font-size:.8rem;color:var(--muted)">' + lt.libras_feb.toLocaleString('en-US') + ' libras · ' + lt.hectareas + ' ha</div>' +
            '</div>' +
            '<div style="background:var(--bg);border-radius:10px;padding:18px;margin-bottom:12px">' +
              '<div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">FOB / Caja (40 lb)</div>' +
              '<div style="font-size:2rem;font-weight:900;letter-spacing:-.5px;color:var(--green2)">' + fmt(lt.fob_caja_feb,2) + '</div>' +
              '<div style="font-size:.8rem;color:var(--muted)">Neto liquidado: ' + fmt(lt.liquidacion_feb / lt.cajas_feb, 2) + '/caja</div>' +
            '</div>' +
            '<div style="background:' + (ebitda < 0 ? 'rgba(220,38,38,.07)' : 'rgba(34,197,94,.07)') + ';border:1.5px solid ' + (ebitda < 0 ? 'rgba(220,38,38,.25)' : 'rgba(34,197,94,.25)') + ';border-radius:10px;padding:18px">' +
              '<div style="font-size:.7rem;font-weight:700;color:' + (ebitda < 0 ? 'var(--red)' : 'var(--green2)') + ';text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">EBITDA · Feb 2026</div>' +
              '<div style="font-size:2.2rem;font-weight:900;letter-spacing:-.5px;color:' + (ebitda < 0 ? 'var(--red)' : 'var(--green2)') + ';line-height:1">' + (ebitda < 0 ? '−' : '+') + fmt(Math.abs(ebitda), 0) + '</div>' +
              '<div style="font-size:.78rem;color:var(--muted);margin-top:5px">Resultado final · incluye costos de campo</div>' +
              '<div style="font-size:.72rem;margin-top:6px;color:' + (ebitda < 0 ? 'var(--red2)' : 'var(--green2)') + ';font-weight:600">' + (ebitda < 0 ? '⚠ Operación en pérdida' : '✓ Operación rentable') + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    /* Prices and shipments */
    var limonKeys = ['lim','lime'];
    var limonPrecios = (D.mercado.precios || []).filter(function (p) {
      var n = p.producto.toLowerCase();
      return limonKeys.some(function (k) { return n.indexOf(k) !== -1; });
    });
    var preciosEl = document.getElementById('limonPrecios');
    if (preciosEl && limonPrecios.length) {
      var scaleMax = Math.max.apply(null, limonPrecios.map(function (p) { return p.max; })) * 1.15;
      preciosEl.innerHTML = limonPrecios.map(function (p) {
        var mid = (p.min + p.max) / 2;
        var chgPct2 = p.anterior != null ? ((mid - p.anterior) / p.anterior * 100) : null;
        var chgStr2 = chgPct2 != null ? (chgPct2 >= .5 ? '▲ +' : chgPct2 <= -.5 ? '▼ ' : '→ ') + Math.abs(chgPct2).toFixed(1) + '% vs semana anterior' : 'Sin comparativo';
        var chgCls2 = chgPct2 == null ? 'neu' : chgPct2 > .5 ? 'up' : chgPct2 < -.5 ? 'dn' : 'neu';
        var minPct = (p.min / scaleMax * 100).toFixed(1);
        var widPct = ((p.max - p.min) / scaleMax * 100).toFixed(1);
        var antPct = p.anterior != null ? (p.anterior / scaleMax * 100).toFixed(1) : null;
        return '<div class="pc-card">' +
          '<div class="pc-header"><div class="pc-name">' + p.producto + '</div><span class="badge badge-blue">' + p.via + '</span></div>' +
          '<div class="pc-range">' + fmt(p.min,2) + '&nbsp;–&nbsp;' + fmt(p.max,2) + '</div>' +
          '<div class="pc-chg ' + chgCls2 + '">' + chgStr2 + '</div>' +
          '<div class="pc-bar-wrap"><div class="pc-bar-fill" style="left:' + minPct + '%;width:' + widPct + '%;background:rgba(22,163,74,.7)"></div>' +
          (antPct != null ? '<div class="pc-bar-tick" style="left:' + antPct + '%"></div>' : '') + '</div>' +
          '<div class="pc-footer"><span>' + (p.anterior != null ? 'Ant: ' + fmt(p.anterior,2) : '—') + '</span><span>Mid: ' + fmt(mid,2) + '</span></div>' +
        '</div>';
      }).join('');
    } else if (preciosEl) {
      preciosEl.innerHTML = '<div class="card" style="padding:16px;color:var(--muted);font-size:.84rem">Sin precios de Limón en el último reporte de mercado.</div>';
    }

    var limonTbody = document.querySelector('#limonEmbarquesTbl tbody');
    if (limonTbody) {
      var limonEmb = (D.operaciones.embarques || []).filter(function (e) { return e.tipo === 'Limón'; });
      var clasificarUnidad = function (u) {
        u = (u||'').toUpperCase().trim();
        if (/^ST[\-\s]?\d/i.test(u)) return 'Transfrios (ST)';
        if (/^JL[\-\s]?\d/i.test(u)) return 'Elogística (JL)';
        if (/^CGG[\-\s]?\d/i.test(u)) return 'CGG (CGG)';
        return 'Otros';
      };
      limonTbody.innerHTML = limonEmb.length
        ? limonEmb.map(function(e){
            return '<tr><td>'+e.fecha+'</td><td class="td-num">'+e.cargas+'</td><td>'+e.unidad+'</td><td>'+clasificarUnidad(e.unidad)+'</td><td><span class="badge badge-blue">'+e.destino+'</span></td><td>'+e.estado+'</td></tr>';
          }).join('')
        : '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px">Sin embarques registrados para Limón</td></tr>';
    }
  }
  function renderChile() {
    renderProductTab({ tipo:'Chile', tabId:'chile', kpisId:'chileKpis', preciosId:'chilePrecios', tblId:'chileEmbarquesTbl', badgeCls:'prod-badge-chile' });

    /* ── Market analysis & opportunity context ── */
    var chilePrecios = (D.mercado.precios || []).filter(function(p){
      var n = p.producto.toLowerCase();
      return n.indexOf('jalap') !== -1 || n.indexOf('serrano') !== -1 || n.indexOf('anaheim') !== -1 || n.indexOf('chile') !== -1 || n.indexOf('bell') !== -1;
    });
    var jalap = chilePrecios.find(function(p){ return p.producto.toLowerCase().indexOf('jalap') !== -1; }) || null;
    var bell  = chilePrecios.find(function(p){ return p.producto.toLowerCase().indexOf('bell') !== -1 || p.producto.toLowerCase().indexOf('chile b') !== -1; }) || null;

    var ctxEl = document.getElementById('chileContext');
    if (!ctxEl) return;

    var cards = '';
    if (jalap) {
      var jalapMid = (jalap.min + jalap.max) / 2;
      var jalapChg = jalap.anterior ? ((jalapMid - jalap.anterior) / jalap.anterior * 100) : null;
      var jalapChgStr = jalapChg != null ? (jalapChg >= 0 ? '▲ +' : '▼ ') + Math.abs(jalapChg).toFixed(0) + '% vs semana anterior' : '';
      var jalapColor  = jalapChg != null && jalapChg > 0 ? 'var(--green2)' : jalapChg != null && jalapChg < -10 ? 'var(--red2)' : 'var(--accent2)';
      cards += '<div class="chile-mkt-card">' +
        '<div class="chile-mkt-hdr">Jalapeño · ' + jalap.via + '</div>' +
        '<div class="chile-mkt-val" style="color:' + jalapColor + '">$' + jalap.min + '–' + jalap.max + '</div>' +
        '<div class="chile-mkt-chg" style="color:' + jalapColor + '">' + jalapChgStr + '</div>' +
        '<div class="chile-mkt-sub">Mid: $' + jalapMid.toFixed(0) + '/bu' + (jalap.anterior ? ' · Anterior: $' + jalap.anterior.toFixed(0) : '') + '</div>' +
        '<div class="chile-mkt-action">→ Verificar volumen disponible para mercado Texas. Precio históricamente alto pese a corrección.</div>' +
      '</div>';
    }
    if (bell) {
      var bellMid = (bell.min + bell.max) / 2;
      var bellChg = bell.anterior ? ((bellMid - bell.anterior) / bell.anterior * 100) : null;
      var bellChgStr = bellChg != null ? (bellChg >= 0 ? '▲ +' : '▼ ') + Math.abs(bellChg).toFixed(0) + '% vs semana anterior' : '';
      cards += '<div class="chile-mkt-card">' +
        '<div class="chile-mkt-hdr">Chile Bell GH · ' + bell.via + '</div>' +
        '<div class="chile-mkt-val" style="color:var(--green2)">$' + bell.min + '–' + bell.max + '</div>' +
        '<div class="chile-mkt-chg" style="color:var(--accent2)">' + bellChgStr + '</div>' +
        '<div class="chile-mkt-sub">Mid: $' + bellMid.toFixed(0) + (bell.anterior ? ' · Anterior: $' + bell.anterior.toFixed(0) : '') + '</div>' +
        '<div class="chile-mkt-action">→ Mercado de bell pepper en niveles elevados. Evaluar incrementar área para próximo ciclo.</div>' +
      '</div>';
    }
    var oppHtml = (jalap || bell)
      ? '<div class="chile-opp-card" style="margin-top:10px">' +
          '<div class="chile-opp-hdr">Señal Estratégica · Temporada 2026–27</div>' +
          '<div class="chile-opp-body">' +
            'El mercado de jalapeño estuvo en $58–64/bu (pico histórico) antes de corregir a $48–50. ' +
            'La brecha productiva en México y Florida persiste — la escasez es estructural, no coyuntural. ' +
            'Chile bell GH mantiene niveles altos ($42–44). <strong>Recomendación: evaluar incrementar hectáreas dedicadas a jalapeño y chile bell en el plan de siembra 2026–27</strong> y revisar disponibilidad logística con Calavo antes del cierre de temporada.' +
          '</div>' +
        '</div>'
      : '';

    ctxEl.innerHTML = '<div class="chile-mkt-grid">' + cards + '</div>' + oppHtml;
  }

  /* ════════════════ GRANOS ════════════════ */
  function renderGranos() {
    var G = D.granos && D.granos.temporada;
    if (!G) return;

    var haVar    = G.hectareas - G.hectareas_yago;
    var haVarCls = haVar >= 0 ? 'pos' : 'neg';
    var haVarStr = (haVar >= 0 ? '▲ +' : '▼ ') + Math.abs(haVar) + ' ha vs Y/A';
    var ebitVar  = G.ebitda_var_yago;
    var ebitVarStr = (ebitVar >= 0 ? '▲ +' : '▼ ') + fmt(Math.abs(ebitVar)) + ' vs Y/A';

    document.getElementById('granosKpis').innerHTML =
      kpiCard('Hectáreas en Producción', fmtN(G.hectareas) + ' ha', 'Budget ' + G.hectareas_budget + ' ha',
        haVar >= 0 ? 'pos' : 'neg', haVar >= 0 ? 'accent-pos' : 'accent-warn',
        pill(haVar >= 0 ? 'up' : 'neu', haVarStr)) +
      kpiCard('Costos WIP Acumulado', fmt(G.wip_ytd), G.periodo,
        'neg', 'accent-neg', pill('neu', 'Producción en proceso')) +
      kpiCard('Gastos Administrativos', fmt(G.gastos_admin_ytd), G.periodo,
        'acc', 'accent-warn', null) +
      kpiCard('EBITDA Temporada', fmt(G.ebitda_ytd), 'Y/A ' + fmt(G.ebitda_yago),
        'neg', 'accent-neg',
        pill('up', ebitVarStr));

    var costoProd   = G.wip_ytd;
    var costoAdmin  = G.gastos_admin_ytd;
    var totalCostos = G.costos_total_ytd;
    var revText     = G.revenue_ytd > 0 ? fmt(G.revenue_ytd) : 'Sin ventas registradas';

    document.getElementById('granosPnl').innerHTML =
      '<div class="resp-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:24px;flex-wrap:wrap">' +
        '<div>' +
          '<div style="font-size:.65rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:16px">INGRESOS</div>' +
          '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">' +
            '<span style="font-size:.85rem">Ventas Nacionales YTD</span>' +
            '<span style="font-weight:700;color:var(--muted)">' + revText + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:2px solid var(--dark);margin-top:4px">' +
            '<span style="font-size:.85rem;font-weight:700">Revenue Total YTD</span>' +
            '<span style="font-weight:800;font-size:1.1rem;color:var(--muted)">' + revText + '</span>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div style="font-size:.65rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-bottom:16px">COSTOS</div>' +
          '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">' +
            '<span style="font-size:.85rem">WIP · Producción en proceso</span>' +
            '<span style="font-weight:700;color:var(--red)">' + fmt(costoProd) + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">' +
            '<span style="font-size:.85rem">Gastos Administrativos</span>' +
            '<span style="font-weight:700;color:var(--red)">' + fmt(costoAdmin) + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:2px solid var(--dark);margin-top:4px">' +
            '<span style="font-size:.85rem;font-weight:700">Total Costos YTD</span>' +
            '<span style="font-weight:800;font-size:1.1rem;color:var(--red)">' + fmt(totalCostos) + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;padding:14px 0 0">' +
            '<span style="font-size:.95rem;font-weight:800">EBITDA YTD</span>' +
            '<div style="text-align:right">' +
              '<div style="font-weight:900;font-size:1.35rem;color:var(--red)">' + fmt(G.ebitda_ytd) + '</div>' +
              '<div style="font-size:.74rem;color:var(--green2);font-weight:600;margin-top:2px">' +
                '▲ ' + fmt(G.ebitda_var_yago) + ' mejor que Y/A (' + fmt(G.ebitda_yago) + ')' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* ── Cost metrics per hectare ── */
    var costMetEl = document.getElementById('granosCostMetrics');
    if (costMetEl && G.hectareas) {
      var costoPorHa = G.costos_total_ytd / G.hectareas;
      var wipPorHa   = G.wip_ytd / G.hectareas;
      var brkEven    = G.hectareas > 0 ? (G.costos_total_ytd / G.hectareas) : 0;
      var vsYagoHa   = G.ebitda_ytd / G.hectareas;
      costMetEl.innerHTML =
        '<div class="granos-cost-grid">' +
          '<div class="granos-cost-card">' +
            '<div class="granos-cost-val">' + fmt(costoPorHa,0) + '</div>' +
            '<div class="granos-cost-lbl">Costo total / ha</div>' +
          '</div>' +
          '<div class="granos-cost-card">' +
            '<div class="granos-cost-val">' + fmt(wipPorHa,0) + '</div>' +
            '<div class="granos-cost-lbl">WIP / ha · Prod. en proceso</div>' +
          '</div>' +
          '<div class="granos-cost-card">' +
            '<div class="granos-cost-val" style="color:var(--red2)">' + fmt(Math.abs(vsYagoHa),0) + '</div>' +
            '<div class="granos-cost-lbl">EBITDA / ha (pérdida activa)</div>' +
          '</div>' +
          '<div class="granos-cost-card">' +
            '<div class="granos-cost-val" style="color:var(--green2)">▲ ' + fmt(G.ebitda_var_yago / G.hectareas, 0) + '</div>' +
            '<div class="granos-cost-lbl">Mejora vs Y/A por ha</div>' +
          '</div>' +
        '</div>' +
        '<div style="font-size:.75rem;color:var(--muted);margin-top:6px">Nota: costos WIP se activan como inventario — EBITDA negativo refleja inversión en temporada activa, no pérdida operativa real. El revenue se realizará en cosecha.</div>';
    }

    document.getElementById('granosNotas').innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:10px">' +
        '<div style="flex-shrink:0;width:3px;height:100%;background:var(--accent2);border-radius:2px;align-self:stretch"></div>' +
        '<p style="font-size:.84rem;line-height:1.75;color:var(--text2)">' + G.nota + '</p>' +
      '</div>' +
      '<div style="margin-top:14px;display:flex;gap:20px;flex-wrap:wrap">' +
        '<div style="background:var(--bg);border-radius:8px;padding:10px 16px;font-size:.78rem">' +
          '<span style="color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-size:.62rem;font-weight:700">Hectáreas</span><br>' +
          '<strong style="font-size:1.1rem">' + G.hectareas + ' ha</strong> actuales · ' + G.hectareas_yago + ' ha Y/A · ' + G.hectareas_budget + ' ha budget' +
        '</div>' +
        '<div style="background:var(--bg);border-radius:8px;padding:10px 16px;font-size:.78rem">' +
          '<span style="color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-size:.62rem;font-weight:700">Período</span><br>' +
          '<strong>' + G.periodo + '</strong>' +
        '</div>' +
        '<div style="background:var(--bg);border-radius:8px;padding:10px 16px;font-size:.78rem">' +
          '<span style="color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-size:.62rem;font-weight:700">Vs Año Anterior</span><br>' +
          '<strong style="color:var(--green2)">▲ +' + fmt(G.ebitda_var_yago) + '</strong> mejor EBITDA' +
        '</div>' +
      '</div>';
  }

  /* ════════════════ AUDITORÍAS ════════════════ */
  function renderAuditorias() {
    var audits = D.auditorias || [];
    var lvlColors = { warning:'var(--accent2)', success:'var(--green2)', danger:'var(--red2)', info:'#3b82f6' };
    var lvlBg     = { warning:'rgba(251,191,36,.15)', success:'rgba(22,163,74,.12)', danger:'rgba(220,38,38,.12)', info:'rgba(59,130,246,.12)' };

    document.getElementById('auditoriasContainer').innerHTML = audits.length
      ? audits.map(function (a) {
          var ac = a.accionesCorrectivas || {};
          var pct100 = (ac.porcentaje || 0);
          var barColor = pct100 >= 95 ? 'var(--green2)' : pct100 >= 70 ? 'var(--accent2)' : 'var(--red2)';

          /* Timeline steps */
          var steps = [
            { lbl:'Confirmación', fecha:'23-Ene', done:true, active:false },
            { lbl:'Auditoría',    fecha:'4-5 Feb', done:true, active:false },
            { lbl:'Acciones',     fecha:'25-Feb', done:pct100>=93, active:pct100<100 && pct100>=21 },
            { lbl:'Resultado',    fecha:'Pendiente', done:false, active:pct100>=93 }
          ];
          var timelineHtml = '<div class="audit-timeline">' +
            steps.map(function(s,i){
              var cls = s.done ? 'done' : s.active ? 'active' : '';
              return '<div class="audit-step '+cls+'">' +
                '<div class="audit-dot"></div>' +
                '<div class="audit-step-lbl">' + s.lbl + '<br><span style="font-size:.6rem;opacity:.7">' + s.fecha + '</span></div>' +
              '</div>';
            }).join('') +
          '</div>';

          /* Area progress bars */
          var areasHtml = (ac.areas || []).map(function (ar) {
            var c = ar.porcentaje >= 100 ? 'var(--green2)' : ar.porcentaje >= 70 ? 'var(--accent2)' : 'var(--red2)';
            return '<div class="audit-progress-row">' +
              '<span style="min-width:90px">' + ar.area + '</span>' +
              '<div class="audit-bar-wrap"><div class="audit-bar-fill" style="width:' + ar.porcentaje + '%;background:' + c + '"></div></div>' +
              '<span style="min-width:36px;text-align:right;font-weight:700">' + ar.porcentaje + '%</span>' +
              '<span style="color:var(--muted);font-size:.7rem">' + ar.completadas + '/' + ar.total + '</span>' +
            '</div>';
          }).join('');

          /* NC observations list */
          var obs = a.observaciones || [];
          var pendientes   = obs.filter(function(o){ return o.estado === 'Pendiente'; });
          var enProceso    = obs.filter(function(o){ return o.estado === 'En proceso'; });
          var completadas  = obs.filter(function(o){ return o.estado === 'Completada'; });
          var sorted = pendientes.concat(enProceso).concat(completadas);

          var ncCountBg = enProceso.length || pendientes.length
            ? 'rgba(251,191,36,.15)' : 'rgba(22,163,74,.12)';
          var ncCountColor = enProceso.length || pendientes.length
            ? 'var(--accent2)' : 'var(--green2)';
          var ncOpen = pendientes.length + enProceso.length;

          var ncHtml = sorted.length ? (
            '<div class="nc-section-hdr">' +
              '<span class="nc-section-title">Observaciones · Hallazgos</span>' +
              '<span class="nc-section-count" style="background:' + ncCountBg + ';color:' + ncCountColor + '">' +
                (ncOpen ? ncOpen + ' activa' + (ncOpen>1?'s':'') : 'Todas completadas') +
              '</span>' +
            '</div>' +
            '<div class="nc-list">' +
              sorted.map(function(nc){
                var slug = nc.estado.toLowerCase().replace(' ','-');
                var pillCls = 's-' + slug;
                var estadoLbl = nc.estado;
                return '<div class="nc-item nc-' + slug + '">' +
                  '<div class="nc-dot"></div>' +
                  '<div class="nc-body">' +
                    '<div class="nc-tags">' +
                      '<span class="nc-id">' + nc.id + '</span>' +
                      '<span class="nc-tipo-badge">' + nc.tipo + '</span>' +
                      '<span class="nc-area-tag">' + nc.area + '</span>' +
                    '</div>' +
                    '<div class="nc-desc">' + nc.descripcion + '</div>' +
                    '<div class="nc-accion-row">' +
                      '<span class="nc-accion-lbl">Acción</span>' +
                      '<span class="nc-accion-txt">' + nc.accion + '</span>' +
                    '</div>' +
                    (nc.evidencia ? '<div class="nc-evidencia">✓ ' + nc.evidencia + '</div>' : '') +
                  '</div>' +
                  '<div class="nc-right">' +
                    '<span class="nc-estado-pill ' + pillCls + '">' + estadoLbl + '</span>' +
                    '<span class="nc-deadline">' + nc.deadline + '</span>' +
                    (nc.responsable ? '<span class="nc-deadline" style="font-style:italic">' + nc.responsable.split(' ').slice(0,2).join(' ') + '</span>' : '') +
                  '</div>' +
                '</div>';
              }).join('') +
            '</div>'
          ) : '';

          return '<div class="audit-card lvl-' + a.nivel + '">' +
            '<div class="audit-header">' +
              '<div>' +
                '<div class="audit-title">' + a.nombre + '</div>' +
                '<div class="audit-meta">' + a.tipo + ' · ' + a.organismo + ' · Auditor: ' + a.auditor + '</div>' +
                '<div class="audit-meta">Alcance: ' + a.alcance + '</div>' +
              '</div>' +
              '<span class="audit-status-badge" style="background:' + lvlBg[a.nivel] + ';color:' + lvlColors[a.nivel] + '">' + a.estado + '</span>' +
            '</div>' +
            timelineHtml +
            '<div class="audit-grid">' +
              '<div class="audit-stat"><div class="audit-stat-val">' + (a.fechaAuditoria||'—') + '</div><div class="audit-stat-lbl">Fecha Auditoría</div></div>' +
              '<div class="audit-stat"><div class="audit-stat-val" style="color:' + (a.ncMayor > 0 ? 'var(--red2)' : 'var(--green2)') + '">' + (a.ncMayor > 0 ? a.ncMayor : '✓') + '</div><div class="audit-stat-lbl">NCs Mayor</div></div>' +
              '<div class="audit-stat"><div class="audit-stat-val" style="color:' + (a.ncMenor > 0 ? 'var(--accent2)' : 'var(--green2)') + '">' + (a.ncMenor > 0 ? a.ncMenor : '✓') + '</div><div class="audit-stat-lbl">NCs Menor</div></div>' +
              '<div class="audit-stat"><div class="audit-stat-val" style="color:' + barColor + '">' + pct100 + '%</div><div class="audit-stat-lbl">Acciones Correctivas</div></div>' +
            '</div>' +
            (areasHtml ? '<div style="font-size:.74rem;font-weight:700;margin-bottom:6px;color:var(--muted)">PROGRESO POR ÁREA · Actualizado ' + (ac.ultimoUpdate||'') + '</div>' + areasHtml : '') +
            ncHtml +
            '<div class="audit-notas">📋 ' + a.notas + '<br><span class="src-tag" style="margin-top:4px;display:inline-block">' + a.fuente + '</span></div>' +
          '</div>';
        }).join('')
      : '<div class="card" style="padding:20px;color:var(--muted)">Sin auditorías registradas.</div>';
  }

  /* ── View toggle (Día Anterior / Últimos 7 días) ── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.vt-btn');
    if (!btn) return;
    var toggle = btn.closest('.view-toggle');
    var group  = toggle.dataset.group;
    var view   = btn.dataset.view;
    toggle.querySelectorAll('.vt-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.view-panel[data-group="' + group + '"]').forEach(function (p) {
      p.classList.toggle('active', p.dataset.view === view);
    });
  });

  /* ════════════════ PRONÓSTICO DE COSECHA ════════════════ */
  function renderPronostico() {
    var pr = D.pronostico;
    if (!pr || !pr.semanas) return;
    var el = document.getElementById('pronosticoSection');
    if (!el) return;

    var html = '<div class="section-title">Pronóstico de Cosecha · 2 Semanas ' +
      '<span class="src-tag">IA · Báscula + Corbel Seeds + USDA</span></div>' +
      '<div class="pronostico-grid">';

    pr.semanas.forEach(function (wk) {
      var maxCajas = Math.max.apply(null, wk.productos.map(function(p){return p.estimadoCajas;}));

      html += '<div class="card" style="padding:0;overflow:hidden">' +
        '<div class="pronostico-wk-hdr">' +
          '<span class="pronostico-wk-lbl">' + wk.semana + '</span>' +
          '<span class="pronostico-wk-dates">' + wk.fechas + '</span>' +
        '</div>';

      wk.productos.forEach(function (p) {
        var barPct = maxCajas ? (p.estimadoCajas / maxCajas * 100).toFixed(1) : 0;
        var confCls = p.confianza >= 75 ? 'hi' : p.confianza >= 60 ? 'mid' : 'lo';
        var tendCls = p.tendencia === 'alcista' ? 'alcista' : p.tendencia === 'bajista' ? 'bajista' : 'lateral';
        var tendLabel = p.tendencia === 'alcista' ? '▲ alcista' : p.tendencia === 'bajista' ? '▼ bajista' : '→ lateral';
        /* color for bar fill */
        var barColor = p.tendencia === 'alcista' ? '#22c55e' : p.tendencia === 'bajista' ? '#ef4444' : '#f59e0b';

        html += '<div class="pronostico-prod-row">' +
          '<div class="pronostico-prod-top">' +
            '<span class="pronostico-prod-name">' + p.producto + '</span>' +
            '<span class="pronostico-cajas">' + p.estimadoCajas.toLocaleString() + ' cajas</span>' +
          '</div>' +
          '<div class="pronostico-bar"><div class="pronostico-bar-fill" style="width:' + barPct + '%;background:' + barColor + '"></div></div>' +
          '<div class="pronostico-badges">' +
            '<span class="pronostico-conf ' + confCls + '">' + p.confianza + '% conf.</span>' +
            '<span class="pronostico-tend ' + tendCls + '">' + tendLabel + '</span>' +
            '<span style="font-size:.6rem;color:var(--muted)">' + p.hectareas + ' ha</span>' +
          '</div>' +
          '<div class="pronostico-nota">' + p.nota + '</div>' +
        '</div>';
      });

      html += '</div>';
    });

    html += '</div>';
    el.innerHTML = html;
  }

  /* ── INIT ── */
  function safeRender(fn, name) {
    try { fn(); } catch(e) { console.warn('render error [' + name + ']:', e); }
  }
  safeRender(renderTicker,       'ticker');
  safeRender(renderEjecutivo,    'ejecutivo');
  safeRender(renderVentas,       'ventas');
  safeRender(renderNacional,     'nacional');
  safeRender(renderHoy,          'hoy');
  safeRender(renderOperaciones,  'operaciones');
  safeRender(renderCalidad,      'calidad');
  safeRender(renderMercado,      'mercado');
  safeRender(renderFinanzas,     'finanzas');
  safeRender(renderTomate,       'tomate');
  safeRender(renderCalavoWeekly, 'calavoWeekly');
  safeRender(renderLimon,        'limon');
  safeRender(renderChile,        'chile');
  safeRender(renderGranos,       'granos');
  safeRender(renderEstrategia,   'estrategia');
  safeRender(renderIndustria,    'industria');
  safeRender(renderAuditorias,   'auditorias');
  /* renderCdc() is called lazily inside initChartsForTab('cdc') */

  /* ════════════════════════════════════════════════
     LAYOUT EDITOR
  ════════════════════════════════════════════════ */
  var LAYOUT_KEY = 'bih_layout_v1';
  var editActive = false;
  var dragSrcBlock = null;

  /* ── Wrap tab panel children into .db-block containers ── */
  function setupEditBlocks() {
    document.querySelectorAll('.tab-panel').forEach(function(panel) {
      var tabId = panel.id;
      var children = Array.from(panel.children);
      var i = 0;
      while (i < children.length) {
        var child = children[i];
        // Skip already-wrapped blocks
        if (child.classList.contains('db-block')) { i++; continue; }
        var wrapper = document.createElement('div');
        wrapper.className = 'db-block';
        // Get a label from section-title text or element id
        var lbl = '';
        if (child.classList.contains('section-title')) {
          lbl = child.textContent.split('·')[0].trim().substring(0, 30);
        } else if (child.id) {
          lbl = child.id.replace(/([A-Z])/g,' $1').replace(/^./,function(s){return s.toUpperCase();}).substring(0,30);
        }
        wrapper.dataset.label = lbl || ('Sección ' + (i+1));
        // If it's a section-title, absorb the immediately following non-section-title siblings into same block
        panel.insertBefore(wrapper, child);
        wrapper.appendChild(child);
        i++;
        if (child.classList.contains('section-title')) {
          // Absorb subsequent siblings until next section-title or end
          children = Array.from(panel.children); // refresh after DOM change
          // children[i] is now the first child after the wrapper we just inserted
          // We need to get the actual next siblings of the wrapper
          var next = wrapper.nextElementSibling;
          while (next && !next.classList.contains('db-block') && !next.classList.contains('section-title')) {
            var toMove = next;
            next = next.nextElementSibling;
            wrapper.appendChild(toMove);
          }
        }
        children = Array.from(panel.children); // refresh
        i = Array.from(panel.children).indexOf(wrapper) + 1;
        // Inject controls
        var label = wrapper.dataset.label || '';
        var controls = document.createElement('div');
        controls.className = 'db-controls';
        controls.innerHTML =
          '<span class="db-handle" title="Arrastrar">⠿</span>' +
          (label ? '<span class="db-lbl">' + label + '</span>' : '') +
          '<button class="db-toggle-btn hide-btn" onclick="dbToggleBlock(this)" title="Ocultar">✕</button>';
        wrapper.appendChild(controls);
        // Placeholder shown when hidden (outside edit mode)
        var ph = document.createElement('div');
        ph.className = 'db-placeholder';
        ph.innerHTML = '— ' + (label || 'Sección') + ' (oculta) —';
        wrapper.appendChild(ph);
        // Drag events — only trigger when handle is grabbed
        var handle = controls.querySelector('.db-handle');
        handle.addEventListener('mousedown', function() { wrapper.draggable = true; });
        handle.addEventListener('mouseup',   function() { wrapper.draggable = false; });
        wrapper.addEventListener('dragstart', dbDragStart);
        wrapper.addEventListener('dragover',  dbDragOver);
        wrapper.addEventListener('dragleave', dbDragLeave);
        wrapper.addEventListener('drop',      dbDrop);
        wrapper.addEventListener('dragend',   dbDragEnd);
      }
    });
  }

  window.dbToggleBlock = function(btn) {
    var block = btn.closest('.db-block');
    var isHidden = block.classList.toggle('db-hidden');
    // Swap button style
    var ctrlBtn = block.querySelector('.db-toggle-btn');
    if (isHidden) {
      ctrlBtn.className = 'db-toggle-btn show-btn';
      ctrlBtn.title = 'Mostrar';
      ctrlBtn.textContent = '👁';
    } else {
      ctrlBtn.className = 'db-toggle-btn hide-btn';
      ctrlBtn.title = 'Ocultar';
      ctrlBtn.textContent = '✕';
    }
  };

  /* Drag and drop */
  function dbDragStart(e) {
    if (!editActive) return;
    dragSrcBlock = this;
    this.classList.add('db-dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  }
  function dbDragOver(e) {
    if (!editActive || !dragSrcBlock || dragSrcBlock === this) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('db-drag-over');
  }
  function dbDragLeave() {
    this.classList.remove('db-drag-over');
  }
  function dbDrop(e) {
    e.stopPropagation();
    if (!editActive || !dragSrcBlock || dragSrcBlock === this) return;
    this.classList.remove('db-drag-over');
    var parent = this.parentNode;
    if (dragSrcBlock.parentNode !== parent) return; // only same tab
    // Insert before or after based on position
    var srcRect = dragSrcBlock.getBoundingClientRect();
    var tgtRect = this.getBoundingClientRect();
    if (srcRect.top < tgtRect.top) {
      // src is above target: move src after target
      parent.insertBefore(dragSrcBlock, this.nextSibling);
    } else {
      // src is below target: move src before target
      parent.insertBefore(dragSrcBlock, this);
    }
  }
  function dbDragEnd() {
    document.querySelectorAll('.db-block').forEach(function(b) {
      b.classList.remove('db-drag-over', 'db-dragging');
      b.draggable = false;
    });
    dragSrcBlock = null;
  }

  /* Save/load layout */
  function saveLayout() {
    var layout = {};
    document.querySelectorAll('.tab-panel').forEach(function(panel) {
      var tabId = panel.id;
      var blocks = Array.from(panel.querySelectorAll(':scope > .db-block'));
      layout[tabId] = {
        order:  blocks.map(function(b) { return b.dataset.label || ''; }),
        hidden: blocks.filter(function(b) { return b.classList.contains('db-hidden'); })
                      .map(function(b) { return b.dataset.label || ''; })
      };
    });
    localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout));
  }

  function loadLayout() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(LAYOUT_KEY) || '{}'); } catch(e) {}
    document.querySelectorAll('.tab-panel').forEach(function(panel) {
      var tabId = panel.id;
      var saved_tab = saved[tabId];
      if (!saved_tab) return;
      var blocks = Array.from(panel.querySelectorAll(':scope > .db-block'));
      // Apply hidden state
      (saved_tab.hidden || []).forEach(function(lbl) {
        var block = blocks.find(function(b){ return b.dataset.label === lbl; });
        if (block && !block.classList.contains('db-hidden')) {
          block.classList.add('db-hidden');
          var btn = block.querySelector('.db-toggle-btn');
          if (btn) { btn.className = 'db-toggle-btn show-btn'; btn.title='Mostrar'; btn.textContent='👁'; }
        }
      });
      // Apply order
      if (saved_tab.order && saved_tab.order.length) {
        saved_tab.order.forEach(function(lbl) {
          var block = blocks.find(function(b){ return b.dataset.label === lbl; });
          if (block) panel.appendChild(block);
        });
      }
    });
  }

  window.toggleEditMode = function() {
    editActive = !editActive;
    document.body.classList.toggle('edit-mode', editActive);
  };

  window.saveAndExitEdit = function() {
    saveLayout();
    editActive = false;
    document.body.classList.remove('edit-mode');
  };

  window.resetLayout = function() {
    if (!confirm('¿Restablecer el layout original? Se borrarán todos los cambios.')) return;
    localStorage.removeItem(LAYOUT_KEY);
    location.reload();
  };

  /* Init: setup blocks after all renders, then load saved layout */
  setupEditBlocks();
  loadLayout();

})();

/* ── Refresh Dashboard ──────────────────────────────── */
window.refreshDashboard = function () {
  var btn = document.getElementById('refreshBtn');
  btn.classList.add('spinning');
  btn.disabled = true;
  // Remove spin class after animation completes so it can spin again next click
  btn.querySelector('svg').addEventListener('animationend', function handler() {
    btn.querySelector('svg').removeEventListener('animationend', handler);
    btn.classList.remove('spinning');
    btn.disabled = false;
  });
  location.reload();
};
