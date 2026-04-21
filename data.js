window.BELHER = {
  meta: {
    fecha: "Martes 21 Abr 2026",
    semana: "WK 17",
    actualizado: "21/04/2026 · 14:00"
  },

  alertas: [
    {"nivel":"success","texto":"🚛 CALAVO 20-ABR: 7 trailers despachados — ST-65 (1,600) + ST-64 (1,600) + T-1 (1,648) + JL-119 (1,600) + JL-103 (1,656) + CGG-116 (1,600) + CGG-153 (1,440) = 11,144 cajas totales · Tomate Nogales AZ · Set point 50°F ✓"},
    {"nivel":"success","texto":"OUTBOUND 18-ABR: Bola Calavo 1ª 86.00% / merma 2.91% · Bola Ergo 1ª 82.00% / merma 3.67% · Roma Millennium 1ª 87.20% / merma 2.97% — calidad sólida, mermas bajas en todas las líneas"},
    {"nivel":"warning","texto":"⚠️ AUDITORÍA CALAVO — 18 y 19 de Mayo 2026. Auditor: Javier Martínez (Buyers Edge). Inspeccionará unidades de producción y empaque. Acción: revisar inventarios de materiales e insumos críticos, gestionar servicios pendientes."},
    {"nivel":"success","texto":"💰 POR LIQUIDAR CALAVO — $720,391 acumulado WK01–WK16. La deuda de $5,959,027 quedó cubierta; este saldo crece semana a semana con cada nuevo settle. WK16: $190,335 wire + $607,793 recuperación final de deuda (15-Abr-2026)."},
    {"nivel":"success","texto":"WK15 ACTUAL CONFIRMADO: Revenue $2,144,379 / 53,976 cajas = FOB $39.72/caja (vs proyección $28.50). Acumulado WK01–WK16: $15,992,424 revenue · 818,324 cajas · $19.54 FOB promedio temporada."},
    {"nivel":"warning","texto":"CVGW -3.65% ($26.67 close 16-Abr, desde $27.68) + AVO -6.26% ($13.78, desde $14.70) — presión sectorial continúa. Monitorear si es ajuste macro o señal de debilidad en cadena de valor produce."},
    {"nivel":"info","texto":"ESTADOS FINANCIEROS MARZO '26: EBITDA positivo $2,864,510 vs Budget $2,483,483 (+$381,027). Departamento Tomate lidera resultado mensual. Pendiente formato gerencial para revisión con Antonio."}
  ],

  ebitda: {
    mes:  { nombre: "Marzo 2026",   actual: 2864510, budget: 2483483,  yago: 2530188  },
    ytd:  { nombre: "Jul–Mar 2026", actual: -1217116, budget: -1640625, yago: -4966686 }
  },

  revenue: {
    total:    19848494,   /* FOB $15,992,424 + Nacional $3,856,070 — WK01–WK16 */
    fob:      15992424,
    nacional:  3856070
  },

  /* ══════════════════════════════════════════════════════
     DEUDA TOTAL ABSA · Corte 22 Marzo 2026
     Fuente: Cash Flow ABSA GC 2025-2026 (Leima Leyva)
     ══════════════════════════════════════════════════════ */
  deudas: {
    corte: "22-Mar-2026",
    totalGeneral: 16130436,   /* incluye anticipos nacionales */
    totalSinAnticipos: 15568498,

    calavo: {
      saldo: 0,
      creditoBelher: 720391,
      nota: "Deuda liquidada WK16. Por liquidar acumulado: $720,391 — crece con cada settle semanal. Calavo emitirá wires de liquidación neta hasta fin de temporada."
    },

    bancos: [
      {
        banco: "BanBajío",
        saldo: 3850000,
        creditos: [
          { fecha:"14-Ago-2025", disposicion:1000000, vence_mayo:  500000, vence_junio:  500000, vence_julio:       0 },
          { fecha:"28-Ago-2025", disposicion: 750000, vence_mayo:  600000, vence_junio:  150000, vence_julio:       0 },
          { fecha:"17-Sep-2025", disposicion:1000000, vence_mayo:       0, vence_junio:  400000, vence_julio:  600000 },
          { fecha:"03-Oct-2025", disposicion:1100000, vence_mayo:       0, vence_junio:  400000, vence_julio:  700000 }
        ],
        vencimientos: { mayo2026: 1100000, junio2026: 1450000, julio2026: 1300000 },
        nota: "4 líneas de crédito — vencen May–Jul 2026. Fuente: Hoja 'Créditos Bajio'"
      },
      {
        banco: "Santander",
        saldo: 490000,   /* saldo al 08-Abr-2026 tras amortización 12 */
        creditos: [
          { disposicion: 115000, saldoActual:  63315, fechaFin:"Mar-2027", amortMensual:  3230 },
          { disposicion: 775000, saldoActual: 426685, fechaFin:"Mar-2027", amortMensual: 21770 }
        ],
        amortMensualTotal: 25000,   /* ~$25K/mes pago combinado ambos créditos */
        nota: "2 créditos USD · mensualidad ~$25K · liquidan Mar-2027. Fuente: Hoja 'Santander'"
      }
    ],
    totalBancos: 4340000,   /* BanBajío $3.85M + Santander $490K */

    proveedores: {
      total: 7160000,
      corte: "12-Mar-2026",
      principales: [
        { nombre:"Celulosa y Corrugados de Sonora",     concepto:"Empaques (cartón)",         saldo: 2823510 },
        { nombre:"Sierra Seed Internacional",            concepto:"Semillas",                  saldo:  405900 },
        { nombre:"Aliado Continental",                   concepto:"Insumos agrícolas",          saldo:  260849 },
        { nombre:"Ahern Internacional de México",        concepto:"Insumos / fertilizantes",   saldo:  379876 },
        { nombre:"Hishtil México",                       concepto:"Plántulas / material vegetal",saldo: 239154 },
        { nombre:"LOF Agro de Guasave",                  concepto:"Agroquímicos",               saldo:  160397 },
        { nombre:"Keithly Williams Semillas",            concepto:"Semillas",                  saldo:  197814 },
        { nombre:"ANSA VIDA",                            concepto:"Seguros / servicios",        saldo:  131785 },
        { nombre:"Misael Sánchez Valdivia",              concepto:"Servicios campo",            saldo:  128553 },
        { nombre:"Cuauhtémoc Ángulo Torres",             concepto:"Servicios campo",            saldo:  132141 },
        { nombre:"Transportes CGG",                      concepto:"Flete refrigerado",          saldo:  118307 },
        { nombre:"Otros proveedores (81% cubierto)",     concepto:"Varios",                     saldo: 1181714 }
      ],
      nota: "81% de cuentas por pagar cubiertas en los 21 proveedores principales al 12-Mar-2026"
    },

    impuestos: {
      total: 1144712,   /* USD — converso desde MXP */
      detalle: {
        imssInfonav_vencido:  296000,   /* MXP 5,032,195 — vencido Dic25–Feb26 */
        sat_vencido:          178000,   /* MXP 3,022,000 — IVA + ISR vencido */
        convenioImss:         671000    /* MXP ~12.17M — pagos convenio IMSS 2026-2027 */
      },
      nota: "Convenio IMSS vigente — pagos mensuales de acuerdo a convenio. Multas IMSS pendientes. Tipo cambio aprox 17 MXP/USD."
    },

    anticiposNacional: 561938,   /* anticipos recibidos de clientes nacionales — pasivo */

    resumen: {
      calavo:               0,   /* deuda liquidada WK16 — Calavo ahora debe $720K a Belher */
      bancos:         4340000,
      proveedores:    7160000,
      impuestos:      1144712,
      subtotal:      12644712,
      anticiposNac:    561938,
      total:         13206650
    }
  },

  calavo: {
    revenueTotal:  15992424,   /* WK01–WK16 settle 15-Abr-2026 · 818,324 cajas */
    /* ESTRUCTURA DE COMISIÓN — ACTUALIZADO:
       Calavo cobra 22% de comisión total sobre el FOB.
       De ese 22%, ~10% son gastos reales (flete, inspecciones frontera, Z-code, etc.)
       y el ~12% restante es la ganancia neta de Calavo.
       NO hay anti-dumping reembolsable — el 22% es comisión definitiva. */
    comision:            3518333,   /* 22% total — comisión Calavo (incluye gastos logísticos) */
    comisionPct:             0.22,
    zCode:           1321118,   /* gastos: In&Out, logística, expenses · WK01–WK16 */
    ventaNeta:      11152973,   /* revenueTotal - comision - zCode */
    pickPack:       4091620,    /* = total wire payments WK01–WK16 (P&P $5/caja) */
    intereses:        32128,

    /* ══════════════════════════════════════════════════════
       DEUDA TOTAL CON CALAVO — $6,000,000
       ══════════════════════════════════════════════════════
       MECÁNICA CRÍTICA:
       Los wires semanales ("liq" en el settle) NO son dinero neto a Belher —
       son amortización de la deuda de $6M hasta que quede liquidada.
       SOLO después de cruzar $6M recuperados, Calavo empieza a liquidar
       efectivo real a Belher.

       Composición:
         $5,000,000 — Anticipo capital de trabajo (4 × $1.25M, May–Ago 2025)
         $1,000,000 — Préstamo puente temporada pasada
         ──────────
         $6,000,000 — Total a recuperar antes de liquidación real

       ✅ CRUCE CONFIRMADO WK16 (15-Abr-2026):
         Amortizado acum: $6,679,418 (>100% de deuda total $5,959,027)
         Crédito a favor de Belher: $720,391 — Calavo le debe a Belher
         WK16 liq: $607,793 fue la última amortización — ya pasó el cruce  */
    deudaCalavo: {
      total:           5959027,   /* deuda total real = anticipos + balance 2025 + etiquetas + interés */
      anticipo:        5000000,   /* 4 × $1.25M — May 15, Jun 15, Jul 15, Ago 15 de 2025 */
      prestamoPuente:   931527,   /* balance 2025 season + etiquetas + interés 2021 loan */
      pagosAnticipo: [
        { fecha:"15-May-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Jun-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Jul-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Ago-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"Temp. 2025",  monto: 931527, tipo:"Balance 2025+int", estado:"Recibido" }
      ],
      amortizadoWk16:  6679418,   /* suma columna "liq" WK01–WK16 — CRUCE SUPERADO */
      pendiente:             0,   /* deuda liquidada — cruce ocurrió en WK16 */
      creditoBelher:    720391,   /* Calavo le debe a Belher este saldo positivo */
      avgLiq_wk11_14:   455647,   /* referencia histórica */
      cruceEstimado:   "WK16",    /* cruce confirmado */
      cruceEstimadoFecha: "15-Abr-2026",
      cruceFecha:      "15-Abr-2026",   /* fecha REAL del cruce */
      cruceConfirmado: true
    },
    capitalTrabajo: 5959027,      /* = deudaCalavo.total (real) */
    prestamo:        472037,
    saldoAnterior:   655867,

    /* ══════════════════════════════════════════════════════
       POR LIQUIDAR — saldo acumulado que Calavo debe pagar a Belher en efectivo.
       Fórmula: Revenue - Comisión - Gastos - Loan Amort - P&P Wire ya enviado.
       WK16 base: liq acum $6,679,418 - deuda total $5,959,027 = $720,391
       Crece cada semana: += (Revenue_wk × 0.78) - Gastos_wk - Wire_wk
       Se resetea a 0 cuando Calavo emite wire de liquidación final.          */
    porLiquidar:     720391,    /* actualizar con cada settle — suma acumulada WK01–WK16 */
    saldoActual:     720391,    /* alias legacy — igual a porLiquidar */
    neto:           6564451,

    /* NOTA GENERAL SOBRE SETTLEMENTS:
       Cada settle semanal es PARCIAL — solo incluye las facturas procesadas al corte.
       Las facturas pendientes aparecen en el siguiente settle.
       Nunca usar el settle de la semana en curso como cifra definitiva. */
    notaSettlement: "Settle semanal parcial — facturas pendientes se consolidan en el siguiente periodo. Cifras en curso son estimadas, no definitivas.",
    pagos: [
      { sem:"WK01", wire:"02-Ene", pago:54120,  cajas:10824, cont:6,  estado:"Pagado"   },
      { sem:"WK02", wire:"02-Ene", pago:121400, cajas:24280, cont:14, estado:"Pagado"   },
      { sem:"WK03", wire:"14-Ene", pago:221925, cajas:44385, cont:26, estado:"Pagado"   },
      { sem:"WK04", wire:"21-Ene", pago:243040, cajas:48608, cont:29, estado:"Pagado"   },
      { sem:"WK05", wire:"28-Ene", pago:306600, cajas:61320, cont:36, estado:"Pagado"   },
      { sem:"WK06", wire:"04-Feb", pago:432880, cajas:86576, cont:51, estado:"Pagado"   },
      { sem:"WK07", wire:"11-Feb", pago:446320, cajas:89264, cont:52, estado:"Pagado"   },
      { sem:"WK08", wire:"18-Feb", pago:297720, cajas:59544, cont:35, estado:"Pagado"   },
      { sem:"WK09", wire:"25-Feb", pago:215600, cajas:43120, cont:26, estado:"Pagado"   },
      { sem:"WK10", wire:"04-Mar", pago:349600, cajas:69920, cont:40, estado:"Pagado"   },
      { sem:"WK11", wire:"08-Mar", pago:349000, cajas:69800, cont:39, estado:"Pagado"   },
      { sem:"WK12", wire:"15-Mar", pago:240000,  cajas:48000, cont:29, estado:"Pagado"   },
      { sem:"WK13", wire:"25-Mar", pago:200240,  cajas:40048, cont:24, estado:"Pagado"   },
      { sem:"WK14", wire:"25-Mar", pago:152960,  cajas:30592, cont:18, estado:"Pagado"   },
      { sem:"WK15", wire:"08-Abr", pago:269880,  cajas:53976, cont:33, estado:"Pagado",  fob:39.72, nota:"FOB REAL confirmado WK16 settle: $2,144,379 / 53,976 = $39.72/cj (vs proyección $28.50)" },
      { sem:"WK16", wire:"15-Abr", pago:190335,  cajas:38067, cont:24, estado:"Actual",  fob:28.95, nota:"Revenue $1,101,951 / 38,067 cajas · rework -3 · liq $607,793 · cruce superado" }
    ]
  },

  calidad: {
    semana: {
      desde: "13/04/2026",
      hasta:  "19/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:85.90, segunda:6.70, tercera:4.65, merma:2.75, peso:25.37, dias:3, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:89.80, segunda:5.80, tercera:3.20, merma:1.20, peso:25.12, dias:1, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:86.21, segunda:8.63, tercera:3.58, merma:1.58, peso:25.89, dias:1, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:89.20, mermaPromedio:2.82 },
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:82.01, mermaPromedio:5.12, nota:"Días 1-6: 04/04·5vars, 06/04·3vars, 07/04·4vars (incl Tolin), 08/04·1var, 09/04·3vars, 11/04·4vars. Roma Calavo 11/04 merma 6.00% — PRIMERA VEZ >4% Roma Calavo en temporada. Bola Calavo 09/04 merma 6.78% CRÍTICO. Tolin 07/04 merma 30.18% outlier." },
      { fecha:"WK16", primaPromedio:86.74, mermaPromedio:2.20, nota:"Días 1-3 (13/04-15/04): Bola Calavo (0.93%→4.75%→2.56%), Roma Millennium 13/04 (1.20%), Roma Calavo 14/04 (1.58%). Prom Bola 3 días: 2.75%. Recuperación D3 confirma estabilización tras pico 4.75% en D2." }
    ],
    ultimoOutbound: {
      fecha: "15/04/2026",
      variedades: [
        { nombre:"Bola Calavo", etiqueta:"Calavo", canal:"exportacion", primera:88.61, segunda:4.18, tercera:4.65, merma:2.56, peso:26.62, alerta:false }
      ],
      anterior: {
        fecha: "14/04/2026",
        variedades: [
          { nombre:"Bola Calavo", etiqueta:"Calavo", canal:"exportacion", primera:80.75, segunda:8.25, tercera:6.25, merma:4.75, peso:26.07, alerta:true  },
          { nombre:"Roma Calavo", etiqueta:"Roma",   canal:"exportacion", primera:86.21, segunda:8.63, tercera:3.58, merma:1.58, peso:25.89, alerta:false }
        ]
      }
    }
  },

  tomate: {
    ventas: {
      periodo: { desde:"01/12/2025", hasta:"15/04/2026", label:"WK01–WK16" },
      total:   { cajas:1264440, cajasRoma:null, cajasBola:null, revenue:19848494 },
      exportacion: [
        { etiqueta:"Calavo", cajas:818324, cajasRoma:null, cajasBola:null, revenue:15992424,
          nota:"WK01–WK16 al 15-Abr · P&P total $4,091,620 · FOB prom $19.54/cj · CRUCE DEUDA CONFIRMADO" }
      ],
      nacional: [
        { etiqueta:"Nacional", cajas:446116, cajasRoma:311917, cajasBola:134199, revenue:3856070,
          comisionPct:0.05, comision:192804, revenueNeto:3663267,
          revPorCaja:8.64, revNetoPorCaja:8.21 }
      ]
    },
    /* Precio FOB Calavo por semana — Fuente: Gass Sheet WK15 · "Weekly Liquidations" (Overview Payments sheet)
       Total Revenue / Units Sold (rcvd + rework) · Carlos Valadez + Irene Amezaga · 05-Abr-2026
       WK15 parcial: 53,976 pkgs recibidos pero ventas en curso — FOB final será mayor */
    preciosHistorico: [
      /* USDA WK01–WK10: estimado-ia — anclaje dic-2025 $12.95-14.95 (USDA AMS National FOB Review).
         Progresión estacional vine-ripe 4×4/4×5 2-layer, FOB Nogales AZ. Fuente: USDA AMS + modelo estacional IA. */
      { sem:"WK01", fob:11.80, usda:13.95, tipo:"real",        nota:"10,824 pkgs · $127,737 · USDA est-ia" },
      { sem:"WK02", fob:10.57, usda:13.45, tipo:"real",        nota:"24,280 pkgs · $255,896 · USDA est-ia" },
      { sem:"WK03", fob:11.16, usda:14.95, tipo:"real",        nota:"44,385 pkgs · $495,284 · USDA est-ia" },
      { sem:"WK04", fob:12.85, usda:16.95, tipo:"real",        nota:"48,606 pkgs · $624,488 · USDA est-ia (pico navideño)" },
      { sem:"WK05", fob:15.45, usda:15.95, tipo:"real",        nota:"60,965 pkgs · $942,051 · USDA est-ia" },
      { sem:"WK06", fob:14.55, usda:15.45, tipo:"real",        nota:"85,593 pkgs · $1,245,692 · USDA est-ia" },
      { sem:"WK07", fob:12.72, usda:14.95, tipo:"real",        nota:"86,722 pkgs · $1,103,258 · USDA est-ia" },
      { sem:"WK08", fob:13.69, usda:17.45, tipo:"real",        nota:"58,995 pkgs · $807,878 · USDA est-ia" },
      { sem:"WK09", fob:17.13, usda:21.95, tipo:"real",        nota:"43,120 pkgs · $738,537 · USDA est-ia" },
      { sem:"WK10", fob:27.58, usda:29.95, tipo:"real",        nota:"69,920 pkgs · $1,928,398 — pico de temporada · USDA est-ia" },
      { sem:"WK11", fob:20.46, usda:26.28, tipo:"real", nota:"69,798 pkgs · $1,428,197" },
      { sem:"WK12", fob:19.34, usda:29.62, tipo:"real", nota:"48,000 pkgs · $928,429" },
      { sem:"WK13", fob:22.23, usda:43.75, tipo:"real", nota:"40,048 pkgs · $890,284" },
      { sem:"WK14", fob:24.93, usda:47.95, tipo:"real", nota:"Settle: 30,592 pkgs · $762,704 · Recibido total semana: 57,760 pkgs (676 pallets · 34 cargas) · Rounds +44% vs proy · Roma +121% vs proy · avg FOB mkt $39.34/cj · size mix 20% 45+ / 80% 55 & smaller" },
      { sem:"WK15", fob:39.72, usda:58.95, tipo:"real", nota:"CONFIRMADO WK16 settle: $2,144,379 / 53,976 cajas = $39.72/cj real. Superó proyección $28.50 por +39.7% — ratio FOB/mkt fue 67% (vs 50-52% WK13-14). Vine-ripe Nogales $57.95-59.95 sostenido." },
      { sem:"WK16", fob:28.95, usda:58.45, tipo:"real", nota:"Settle 15-Abr: $1,101,951 / 38,067 cajas = $28.95/cj. Rework -3 cajas. Vine-ripe Nogales $55.95-60.95 (Corbel #0028). Ratio FOB/mkt ~49%." }
    ]
  },

  limon: {
    usda: {
      fecha:      "23/03/2026",
      precio_min: 18.00,
      precio_max: 22.00,
      unidad:     "carton",
      variedad:   "Limón Persa (Persian Lime)",
      mercado:    "FOB Nogales, AZ",
      anterior:   19.50,
      fuente:     "USDA Market News FOB Shipping Point",
      la_terminal: {
        fecha:         "23/03/2026",
        precio_min:    58.00,
        precio_max:    65.00,
        mercado:       "LA Terminal Market",
        unidad:        "flat 200 ct",
        nota:          "Precio por flat de 200 limones (canal foodservice/retail). Distinto al cartón 40lb FOB Nogales.",
        fuente:        "USDA Market News Terminal Market · LA_FV114"
      },
      historico_12m: [
        { mes:"Abr 25", nogales_mid:16.0, la_mid:18.5 },
        { mes:"May 25", nogales_mid:14.5, la_mid:17.0 },
        { mes:"Jun 25", nogales_mid:19.0, la_mid:22.0 },
        { mes:"Jul 25", nogales_mid:22.0, la_mid:25.5 },
        { mes:"Ago 25", nogales_mid:20.5, la_mid:23.5 },
        { mes:"Sep 25", nogales_mid:24.0, la_mid:27.0 },
        { mes:"Oct 25", nogales_mid:22.0, la_mid:25.0 },
        { mes:"Nov 25", nogales_mid:23.5, la_mid:26.5 },
        { mes:"Dic 25", nogales_mid:22.0, la_mid:25.0 },
        { mes:"Ene 26", nogales_mid:21.0, la_mid:24.0 },
        { mes:"Feb 26", nogales_mid:19.5, la_mid:22.5 },
        { mes:"Mar 26", nogales_mid:20.0, la_mid:23.0 }
      ],
      tendencia_4s: [
        { semana:"WK14", nogales_mid:20.5, la_mid:23.5 },
        { semana:"WK15", nogales_mid:21.0, la_mid:24.0 },
        { semana:"WK16", nogales_mid:21.5, la_mid:24.5 },
        { semana:"WK17", nogales_mid:22.0, la_mid:25.0 }
      ]
    },
    temporada: {
      hectareas:        70,
      comprador:        "Maui Fresh International LLC",
      cajas_feb:        3057,
      libras_feb:       122280,
      revenue_feb:      90089,
      fob_caja_feb:     29.47,
      comision_feb:     13513,
      flete_mx_feb:     5665,
      flete_eu_feb:     5400,
      liquidacion_feb:  65511,
      costo_manuf_feb:  56461,
      costo_dist_feb:   24930,
      first_moc_feb:    33628,
      first_moc_pct:    37.3,
      costo_prod_acum:  73640,
      costo_wip_acum:   2533,
      revenue_acum:     90089,
      ebitda_feb:       -29000,
      ebitda_acum:      -29000
    }
  },

  granos: {
    temporada: {
      hectareas:         388,
      hectareas_yago:    323,
      hectareas_budget:  393,
      wip_ytd:           375731,
      gastos_admin_ytd:  10119,
      costos_total_ytd:  385851,
      revenue_ytd:       0,
      ebitda_ytd:        -385851,
      ebitda_yago:       -513373,
      ebitda_var_yago:   127522,
      periodo:           "Jul 2025 – Feb 2026",
      nota:              "Temporada de granos en curso. TRILLA WK15: Dorita+El 17 (31-Mar, 18 ha) + Carrillo (06-Abr, 12 ha) + Carrillo+Campo Beltrán+El Dos (07-Abr, 18 ha, 97.04t) + El Dos+Álamo (08-Abr, 19 ha, 98.51t) + Álamo (09-Abr, 20 ha, 128.53t) + Álamo+El Punk+Quevedo 2+Lora+Caseta (10-Abr, 16 ha) + Quevedo 2+Composta+El Gringo (11-Abr, 16 ha) = 119 ha WK15. TRILLA WK16: El Punk (13-Abr, 12 ha) + El Punk+Las Viudas (14-Abr, 19 ha) + Las Viudas (15-Abr, 25 ha) = 56 ha WK16. ACUMULADO TOTAL: 175 ha. El Panteón+San Blas pendientes. Sin ventas registradas a febrero — producción en cosecha activa. Costos WIP incluyen fertilizantes, semilla, agroquímicos y mano de obra de campo.",
      trilla: [
        { fecha:"31/03/2026", campos:"Dorita + El 17",                                        ha:18, cultivo:"Sorgo" },
        { fecha:"06/04/2026", campos:"Carrillo",                                              ha:12, cultivo:"Sorgo" },
        { fecha:"07/04/2026", campos:"Carrillo + Campo Beltrán + El Dos",                     ha:18, cultivo:"Sorgo", ton:97.04, tolvas:16, fuente:"DIARIO BASCULA 07-Abr PDF" },
        { fecha:"08/04/2026", campos:"El Dos + Álamo",                                        ha:19, cultivo:"Sorgo", ton:98.51, tolvas:16, fuente:"DIARIO BASCULA 08-Abr PDF" },
        { fecha:"09/04/2026", campos:"Álamo",                                                 ha:20, cultivo:"Sorgo", ton:128.53, tolvas:20, fuente:"DIARIO BASCULA 09-Abr PDF" },
        { fecha:"10/04/2026", campos:"Álamo + El Punk + Quevedo 2 + Lora + Caseta",          ha:16, cultivo:"Sorgo" },
        { fecha:"11/04/2026", campos:"Quevedo 2 + Composta + El Gringo",                      ha:16, cultivo:"Sorgo" },
        { fecha:"13/04/2026", campos:"El Punk",                                               ha:12, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 13-Abr" },
        { fecha:"14/04/2026", campos:"El Punk + Las Viudas",                                  ha:19, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 14-Abr" },
        { fecha:"15/04/2026", campos:"Las Viudas",                                            ha:25, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 15-Abr" }
      ]
    }
  },

  cashflow: {
    periodo:             "GC 2025–2026 · OL 8+4 · Forecast Mar 26 – Jul 31, 2026",
    modelo:              "OL 8+4",
    fecha_cierre:        "22/03/2026",
    fuente:              "leima@agbelher.com · 25 Mar 2026",
    moneda:              "USD",
    pendiente_excel:     false,

    saldo_inicial:       21046,
    fecha_ultimo_actual: "22/03/2026",
    saldo_forecast:      -6804221,
    saldo_ajustado:      -1300206,

    anticipos_recibidos: 6792043,
    anticipos_aplicados: 4661061,
    anticipos_por_pagar: 2130983,

    breakeven_precio_base:     15.00,
    breakeven_precio_target:   23.50,
    breakeven_precio_por_caja:  8.50,
    breakeven_volumen:         900000,
    breakeven_monto:           6804221,

    precio_mercado: {
      precio_actual_fob:       20.07,
      precio_requerido_ol:     23.49,
      rango_tipico_min:        27,
      rango_tipico_max:        35,
      sweet_spot:              35,
      pico_historico:          42,
      semana_12_two_layers:    24.95,
      semana_12_25lb:          26.24,
      semana_actual_promedio:  44,
      fecha_actualizacion:     "08/04/2026"
    },

    contratos: [
      { mes:"Marzo", cajas_contrato:229000, cajas_spot:0,      precio_contrato:16.95, escalador_desde:20.95 },
      { mes:"Abril",  cajas_contrato:220000, cajas_spot:173000, precio_contrato:16.95, escalador_desde:20.95 }
    ],

    bridge: [
      { concepto:"Incremento precio $3/caja × 910K cajas (neto comisión)",  monto:2404015, tipo:"precio"  },
      { concepto:"WK Calavo 4 de 4 — agosto 2026",                          monto:1250000, tipo:"calavo"  },
      { concepto:"BanBajío — primer avance agosto 2026",                     monto:1750000, tipo:"bajio"   },
      { concepto:"Ingreso estimado sorgo",                                   monto:100000,  tipo:"otros"   }
    ],

    entradas: [
      { concepto:"Pick & Pack · Calavo WK (Mar 26 – Jul 31)",         monto:3964828, categoria:"Exportación" },
      { concepto:"WK Calavo GC 2026–2027 · capital trabajo (3 de 4)", monto:3750000, categoria:"Exportación" },
      { concepto:"Liquidación final Calavo GC 2025–2026",             monto:1208761, categoria:"Exportación" },
      { concepto:"Recuperación de IVAs (Mar–Jul)",                    monto:302448,  categoria:"Fiscal"      }
    ],

    salidas: [
      { concepto:"Gastos operativos (nóminas, insumos, empaque, flete)", monto:8600000, categoria:"Operación"  },
      { concepto:"Bajío — capital avío (4 disposiciones)",               monto:3850000, categoria:"Financiero" },
      { concepto:"IMSS e INFONAVIT",                                     monto:1023375, categoria:"Fiscal"     },
      { concepto:"Proveedores GC 2026–2027 (semilleras, cinta, plástico)", monto:1114375, categoria:"Inversión"},
      { concepto:"SAT e impuestos",                                      monto:386900,  categoria:"Fiscal"     },
      { concepto:"Bajío — intereses",                                    monto:250000,  categoria:"Financiero" },
      { concepto:"Anticipo 50% plántula GC 2026–2027 (Tajin + Hishtil)", monto:382500, categoria:"Inversión"  },
      { concepto:"Santander — amortizaciones",                           monto:205000,  categoria:"Financiero" },
      { concepto:"Hishtil GC 2024–2025 — 12 abonos mensuales",          monto:239154,  categoria:"Financiero" }
    ],

    historico: [
      { mes:"Jul 25",  entradas:null,    salidas:null,    neto:null,       saldo:60704,    tipo:"real"     },
      { mes:"Ago 25",  entradas:null,    salidas:null,    neto:null,       saldo:722457,   tipo:"real"     },
      { mes:"Oct 25",  entradas:null,    salidas:null,    neto:null,       saldo:7996,     tipo:"real"     },
      { mes:"Nov 25",  entradas:null,    salidas:null,    neto:null,       saldo:29349,    tipo:"real"     },
      { mes:"Dic 25",  entradas:877343,  salidas:804177,  neto:73166,      saldo:82304,    tipo:"real"     },
      { mes:"Ene 26",  entradas:2682400, salidas:2706276, neto:-23876,     saldo:58428,    tipo:"real"     },
      { mes:"Feb 26",  entradas:2481092, salidas:2526852, neto:-45760,     saldo:12668,    tipo:"real"     },
      { mes:"Mar 26",  entradas:312688,  salidas:720079,  neto:-407391,    saldo:-386345,  tipo:"mixto",
        nota:"Real al 22-Mar ($21,046) + forecast Mar 26-31" },
      { mes:"Abr 26",  entradas:2329276, salidas:2476379, neto:-147103,    saldo:-533448,  tipo:"forecast" },
      { mes:"May 26",  entradas:2538251, salidas:5207923, neto:-2669672,   saldo:-3203120, tipo:"forecast",
        nota:"Incluye pago semilleras $983K y WK Calavo $1.25M" },
      { mes:"Jun 26",  entradas:1487060, salidas:3476694, neto:-1989634,   saldo:-5192754, tipo:"forecast",
        nota:"Incluye WK Calavo $1.25M y pagos Bajío $1.45M" },
      { mes:"Jul 26",  entradas:2558761, salidas:4170227, neto:-1611466,   saldo:-6804220, tipo:"forecast",
        nota:"Liquidación Calavo $1.21M + WK $1.25M vs pagos Bajío $1.33M" }
    ],

    pagos_ciclo_siguiente: [
      { concepto:"Semilleras GC 2026–2027",              monto:983590, fecha:"31/05/2026" },
      { concepto:"Anticipo 50% maquila plántula Tajin",  monto:194000, fecha:"10/07/2026" },
      { concepto:"Anticipo 50% plántula Hishtil",        monto:188500, fecha:"17/07/2026" },
      { concepto:"Cinta de riego GC 2026–2027",          monto:73785,  fecha:"26/06/2026" },
      { concepto:"Plástico para acolchado GC 2026–2027", monto:57000,  fecha:"03/07/2026" }
    ]
  },

  mercado: {
    reporte: "Corbel Seeds #0028",
    fecha: "15/04/2026",
    resumen: "Corbel #0028 (15-Abr): Vine-ripe Nogales $55.95–60.95 (depending on size) — leve corrección vs máximo $58.95–60.95 de ayer, mercado firme. Chile Bell verde XL $40.95–42.95 / large $38.95–40.95 (ajuste vs #0027). Roma XL $36.95–40.95 sostenida. Limón seedless Texas suaviza: 175s $58–60 (desde $64–66), 200s $54–56. Jalapeño: sin cotización FOB US en #0028; SNIIM México $1,500/arpilla 30kg. USDA retail OTV +43% · cucumber +20% confirmados. CAPE tariff-refund portal IEEPA live 20-Abr (IFPA/CBP). EU packaging rules Ago-2026.",
    precios: [
      { producto:"Vine-ripe 4×4/4×5 25lb", min:55.95, max:60.95, anterior:58.95, via:"Nogales AZ",  alerta:false },
      { producto:"Roma XL 25lb",            min:36.95, max:40.95, anterior:40.95, via:"Nogales AZ",  alerta:false },
      { producto:"Grape tomato flat",       min:26.95, max:26.95, anterior:24.95, via:"Nogales AZ",  alerta:false },
      { producto:"Chile Bell verde large",  min:38.95, max:40.95, anterior:40.95, via:"Nogales AZ",  alerta:false },
      { producto:"Chile Bell verde XL",     min:40.95, max:42.95, anterior:42.95, via:"Nogales AZ",  alerta:false },
      { producto:"Jalapeño",                min:58.00, max:60.00, anterior:44.00, via:"Texas",        alerta:true  },
      { producto:"Habanero 8lb",            min:39.00, max:42.00, anterior:38.00, via:"Texas",        alerta:false },
      { producto:"Serrano",                 min:68.00, max:70.00, anterior:null,  via:"Texas",        alerta:false },
      { producto:"Cucumber Nogales",        min:30.95, max:30.95, anterior:30.95, via:"Nogales AZ",  alerta:false },
      { producto:"Limón seedless 110s",     min:64.00, max:65.00, anterior:null,  via:"Texas",        alerta:false },
      { producto:"Limón seedless 150s",     min:64.00, max:65.00, anterior:null,  via:"Texas",        alerta:false },
      { producto:"Limón seedless 175s",     min:58.00, max:60.00, anterior:64.00, via:"Texas",        alerta:false },
      { producto:"Limón seedless 200s",     min:54.00, max:56.00, anterior:58.00, via:"Texas",        alerta:false }
    ],
    noticias: [
      { titulo:"CAPE tariff-refund portal IEEPA entra en vigor el 20-Abr-2026 — CBP Phase 1 refunds. Verificar elegibilidad facturas Belher", impacto:"Alto", fuente:"Corbel Seeds #0028 · IFPA · 15-Abr" },
      { titulo:"Vine-ripe Nogales $55.95–60.95 depending on size — mercado firme, USDA retail OTV +43% semanal AMS", impacto:"Alto", fuente:"Corbel Seeds #0028 · USDA AMS · 15-Abr" },
      { titulo:"Limón seedless Texas suaviza: 175s $58–60 (desde $64–66), 200s $54–56 — corrección técnica primaveral en marcha", impacto:"Moderado", fuente:"Corbel Seeds #0028 · USDA Citrus · 15-Abr" },
      { titulo:"Chile Bell verde XL $40.95–42.95 (ajuste leve vs $42.95–44.95 #0027) — mercado GH estable, demanda retail sostenida", impacto:"Moderado", fuente:"Corbel Seeds #0028 · USDA AMS · 15-Abr" },
      { titulo:"EU enforces new packaging rules from August 2026 — exportadores hacia Europa deben preparar cumplimiento de costos", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr" },
      { titulo:"Freight rate volatility rises — aún bajo niveles Covid, pero incertidumbre logística persiste para perecibles", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"17/04", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"15/04", productos:["Tomate","Trilla Sorgo"] },
      { fecha:"14/04", productos:["Tomate","Trilla Sorgo"] },
      { fecha:"13/04", productos:["Tomate","Rezaga Tomate","Trilla Sorgo"] },
      { fecha:"11/04", productos:["Tomate","Limón Persa","Trilla Sorgo"] },
      { fecha:"10/04", productos:["Tomate","Limón Persa","Rezaga Tomate","Trilla Sorgo"] },
      { fecha:"09/04", productos:["Tomate","Chile Habanero","Chile Fresno","Trilla Sorgo"], tinas:14965, kgTomate:151110 }
    ],
    produccionHistorica: {
      /* % kg empacado / kg báscula por semana · 6 temporadas */
      semanas: ['WK01','WK02','WK03','WK04','WK05','WK06','WK07','WK08','WK09','WK10','WK11','WK12','WK13','WK14','WK15'],
      temporadas: [
        { label:'2020-21', data:[52.7, 87.5, 76.4, 99.6, 76.2, 75.5, 75.6, 64.9, 55.6, 74.4, 74.3, 78.6, 80.6, 83.1, 62.6] },
        { label:'2021-22', data:[94.7, 93.5, 89.9, 87.8, 92.4, 85.7, 87.7, 91.8, 84.4, 78.8, 85.8, 89.4, 87.1, 88.3, 83.1] },
        { label:'2022-23', data:[83.3,105.1, 89.7, 98.4, 89.6, 75.7, 85.8, 78.8,102.7, 92.5, 93.8, 90.8, 92.8, 93.1, 88.4] },
        { label:'2023-24', data:[52.9,143.0, 81.4, 81.9, 87.3,108.2, 95.5, 87.4, 81.5, 92.7, 89.4, 87.8, 80.9, 95.4, 82.6] },
        { label:'2024-25', data:[77.8, 99.1, 89.9, 79.6, 83.0, 80.0, 85.3, 75.3, 72.1, 71.6, 72.5, 88.4, 93.3, 85.6, 79.5] },
        { label:'2025-26', data:[85.0, 87.3, 87.4, 85.8, 77.0, 80.3, 73.9, 89.2, 76.0, 84.7, 77.1, 88.6, 81.8, 82.0, 65.6] }
      ]
    },
    produccionSemanal: [
      /* bascCj = cajas equiv 25lb (÷11.34 kg) | cjXxx = cajas empacadas por etiqueta | pctXxx = % del kg báscula */
      { wk:"WK01", bascKg:883690,  bascCj:77928,  pctEmp:85.0, cjCalavo:24840, cjYameto:25840, cjTolin:10248, cjZazu:5600,  cjUrson:0,     cjMillennium:0,    cjOtros:0,    pctCalavo:30.7, pctYameto:33.6, pctTolin:13.5, pctZazu:7.2,  pctUrson:0.0, pctMillennium:0.0, pctOtros:0.0 },
      { wk:"WK02", bascKg:1155860, bascCj:101929, pctEmp:87.3, cjCalavo:39024, cjYameto:15064, cjTolin:10616, cjZazu:18320, cjUrson:2240,  cjMillennium:4800, cjOtros:1,    pctCalavo:37.0, pctYameto:14.8, pctTolin:10.6, pctZazu:18.0, pctUrson:2.2, pctMillennium:4.7, pctOtros:0.0 },
      { wk:"WK03", bascKg:1316130, bascCj:116063, pctEmp:87.4, cjCalavo:47264, cjYameto:4088,  cjTolin:7504,  cjZazu:13120, cjUrson:24640, cjMillennium:3200, cjOtros:2543, pctCalavo:38.9, pctYameto:3.7,  pctTolin:7.3,  pctZazu:11.3, pctUrson:21.2,pctMillennium:2.8, pctOtros:2.2 },
      { wk:"WK04", bascKg:1550690, bascCj:136748, pctEmp:85.8, cjCalavo:56952, cjYameto:21592, cjTolin:10448, cjZazu:4080,  cjUrson:17440, cjMillennium:3200, cjOtros:397,  pctCalavo:40.0, pctYameto:18.3, pctTolin:9.1,  pctZazu:3.0,  pctUrson:12.8,pctMillennium:2.3, pctOtros:0.3 },
      { wk:"WK05", bascKg:2202620, bascCj:194238, pctEmp:77.0, cjCalavo:82752, cjYameto:17664, cjTolin:18664, cjZazu:21600, cjUrson:4608,  cjMillennium:4800, cjOtros:0,    pctCalavo:40.2, pctYameto:10.2, pctTolin:10.7, pctZazu:11.1, pctUrson:2.4, pctMillennium:2.5, pctOtros:0.0 },
      { wk:"WK06", bascKg:2032610, bascCj:179246, pctEmp:80.3, cjCalavo:85440, cjYameto:17368, cjTolin:13176, cjZazu:13740, cjUrson:5760,  cjMillennium:4800, cjOtros:2303, pctCalavo:45.4, pctYameto:11.3, pctTolin:8.8,  pctZazu:7.7,  pctUrson:3.2, pctMillennium:2.7, pctOtros:1.3 },
      { wk:"WK07", bascKg:1464090, bascCj:129111, pctEmp:73.9, cjCalavo:55544, cjYameto:8424,  cjTolin:11304, cjZazu:13820, cjUrson:0,     cjMillennium:3200, cjOtros:1885, pctCalavo:41.5, pctYameto:7.3,  pctTolin:10.4, pctZazu:10.7, pctUrson:0.0, pctMillennium:2.5, pctOtros:1.4 },
      { wk:"WK08", bascKg:901060,  bascCj:79460,  pctEmp:89.2, cjCalavo:38080, cjYameto:5160,  cjTolin:8888,  cjZazu:7680,  cjUrson:0,     cjMillennium:3200, cjOtros:4347, pctCalavo:47.0, pctYameto:7.4,  pctTolin:13.1, pctZazu:9.7,  pctUrson:0.0, pctMillennium:4.0, pctOtros:7.9 },
      { wk:"WK09", bascKg:1464390, bascCj:129137, pctEmp:76.0, cjCalavo:67056, cjYameto:8816,  cjTolin:9072,  cjZazu:7920,  cjUrson:160,   cjMillennium:3200, cjOtros:1522, pctCalavo:49.7, pctYameto:8.1,  pctTolin:8.4,  pctZazu:6.1,  pctUrson:0.1, pctMillennium:2.5, pctOtros:1.2 },
      { wk:"WK10", bascKg:1340040, bascCj:118171, pctEmp:84.7, cjCalavo:67312, cjYameto:9824,  cjTolin:8352,  cjZazu:0,     cjUrson:10240, cjMillennium:3280, cjOtros:298,  pctCalavo:54.7, pctYameto:9.8,  pctTolin:8.4,  pctZazu:0.0,  pctUrson:8.7, pctMillennium:2.8, pctOtros:0.3 },
      { wk:"WK11", bascKg:1012180, bascCj:89259,  pctEmp:77.1, cjCalavo:44072, cjYameto:6264,  cjTolin:6768,  cjZazu:0,     cjUrson:5600,  cjMillennium:3200, cjOtros:1243, pctCalavo:48.3, pctYameto:8.4,  pctTolin:9.0,  pctZazu:0.0,  pctUrson:6.3, pctMillennium:3.6, pctOtros:1.5 },
      { wk:"WK12", bascKg:777850,  bascCj:68595,  pctEmp:87.9, cjCalavo:36448, cjYameto:6264,  cjTolin:6232,  cjZazu:0,     cjUrson:5440,  cjMillennium:3280, cjOtros:1593, pctCalavo:50.9, pctYameto:10.9, pctTolin:10.7, pctZazu:0.0,  pctUrson:7.9, pctMillennium:4.8, pctOtros:2.7 },
      { wk:"WK13", bascKg:657030,  bascCj:57940,  pctEmp:81.8, cjCalavo:29904, cjYameto:2736,  cjTolin:5184,  cjZazu:0,     cjUrson:2240,  cjMillennium:1360, cjOtros:4141, pctCalavo:49.8, pctYameto:5.6,  pctTolin:10.7, pctZazu:0.0,  pctUrson:3.9, pctMillennium:2.3, pctOtros:9.5 },
      { wk:"WK14", bascKg:1074760, bascCj:94778,  pctEmp:82.0, cjCalavo:50664, cjYameto:6120,  cjTolin:5432,  cjZazu:0,     cjUrson:4480,  cjMillennium:4800, cjOtros:4351, pctCalavo:52.0, pctYameto:7.7,  pctTolin:6.8,  pctZazu:0.0,  pctUrson:4.7, pctMillennium:5.1, pctOtros:5.7 },
      { wk:"WK15", bascKg:458030,  bascCj:40391,  pctEmp:65.6, cjCalavo:16056, cjYameto:3704,  cjTolin:1728,  cjZazu:0,     cjUrson:0,     cjMillennium:1600, cjOtros:2843, pctCalavo:38.4, pctYameto:10.1, pctTolin:5.1,  pctZazu:0.0,  pctUrson:0.0, pctMillennium:4.0, pctOtros:8.1 }
    ],
    embarques: [
      { fecha:"17/04/2026", tipo:"Tomate", cargas:1, unidad:"BON-01", destino:"Arizona", estado:"OK", cajas:1600 },
      { fecha:"17/04/2026", tipo:"Tomate", cargas:1, unidad:"BON-02", destino:"Arizona", estado:"OK", cajas:1632 },
      { fecha:"17/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-65", destino:"Arizona", estado:"OK", cajas:1920 },
      { fecha:"15/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-30",   destino:"Arizona", estado:"OK", cajas:1760 },
      { fecha:"15/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-50",   destino:"Arizona", estado:"OK", cajas:1776 },
      { fecha:"14/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-148", destino:"Arizona", estado:"OK", cajas:1920 },
      { fecha:"13/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-111",  destino:"Arizona", estado:"OK", cajas:1600 },
      { fecha:"13/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-99",   destino:"Arizona", estado:"OK", cajas:1760 },
      { fecha:"13/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-77",  destino:"Arizona", estado:"OK", cajas:1600 },
      { fecha:"13/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-157", destino:"Arizona", estado:"OK", cajas:1600 },
      { fecha:"11/04/2026", tipo:"Tomate",      cargas:1, unidad:"CGG-129", destino:"Arizona",              estado:"OK", cajas:1600 },
      { fecha:"11/04/2026", tipo:"Tomate",      cargas:1, unidad:"CGG-1",   destino:"Arizona",              estado:"OK", cajas:1600 },
      { fecha:"11/04/2026", tipo:"Tomate",      cargas:1, unidad:"JL-13",   destino:"Texas (McAllen)",      estado:"OK", cajas:1651 },
      { fecha:"11/04/2026", tipo:"Tomate",      cargas:1, unidad:"JL-42",   destino:"Arizona",              estado:"OK", cajas:1360 },
      { fecha:"11/04/2026", tipo:"Limón/Chile", cargas:1, unidad:"JL-34",   destino:"Arizona (Maui Fresh)", estado:"OK" }
    ]
  },

  correos: [
    {"hora":"23:01","asunto":"20-04-2026 REPORTES GENERALES — Reportes de embarque y empaque adjuntos","de":"EMBARQUES BELHER","leido":false,"fecha":"20/04"},
    {"hora":"22:44","asunto":"REPORTE DIARIO CALAVO 20-04-2026 — 7 trailers: ST-65+ST-64+JL-119+JL-103+CGG-116+CGG-153+T-1 = 11,144 cajas · Tomate · Nogales · Set point 50°F","de":"EMBARQUES BELHER","leido":false,"fecha":"20/04"},
    {"hora":"22:44","asunto":"BILL, MANIFIESTO, DATOS TRANSPORTISTA, FACTURAS XML, PROFORMAS NOGALES CGG — carga Tomate 20/04/2026","de":"EMBARQUES BELHER","leido":false,"fecha":"20/04"},
    {"hora":"21:35","asunto":"BILL, MANIFIESTO, DATOS TRANSPORTISTA, FACTURAS XML, PROFORMAS NOGALES JL — carga Tomate 20/04/2026","de":"EMBARQUES BELHER","leido":false,"fecha":"20/04"},
    {"hora":"19:51","asunto":"REPORTE DE BASCULA 20/04/2026 (TOMATE) — Adjunto","de":"Bascula Belher","leido":false,"fecha":"20/04"},
    {"hora":"19:50","asunto":"REPORTE DE BASCULA 20/04/2026 (REZAGA DE TOMATE) — Adjunto","de":"Bascula Belher","leido":false,"fecha":"20/04"},
    {"hora":"09:22","asunto":"REPORTE DE OUTBOUND TOMATE 18/04/2026 — Bola Calavo 1ª 86.00% merma 2.91% · Ergo 1ª 82.00% · Roma Millennium 1ª 87.20%","de":"Calidad Belher","leido":false,"fecha":"20/04"},
    {"hora":"21:06","asunto":"REPORTE DIARIO CALAVO 18-04-2026 — 3 trailers: JL-101 (1,600) + CGG-138 (1,760) + CGG-21 (1,680) = 5,040 cajas · Tomate · Nogales · Set point 50°F","de":"EMBARQUES BELHER","leido":false,"fecha":"18/04"},
    {"hora":"20:58","asunto":"18-04-2026 REPORTES GENERALES — Reportes de embarque y empaque adjuntos","de":"EMBARQUES BELHER","leido":false,"fecha":"18/04"},
    {"hora":"21:19","asunto":"BILL, MANIFIESTO, DATOS TRANSPORTISTA, FACTURAS XML, PROFORMAS NOGALES CGG — carga Tomate 18/04/2026","de":"EMBARQUES BELHER","leido":false,"fecha":"18/04"},
    {"hora":"19:50","asunto":"BILL, MANIFIESTO, DATOS TRANSPORTISTA, FACTURAS XML, PROFORMAS NOGALES JL — carga Tomate 18/04/2026","de":"EMBARQUES BELHER","leido":false,"fecha":"18/04"},
    {"hora":"17:26","asunto":"REPORTE DE BASCULA 18/04/2026 (TOMATE) — Adjunto","de":"Bascula Belher","leido":false,"fecha":"18/04"},
    {"hora":"09:47","asunto":"REPORTE DE OUTBOUND TOMATE 17/04/2026 — Bola Calavo 1ª 77.68% merma 4.46% · Ergo 1ª 87.07% · Tolín 1ª 68.40% · Roma Tolín 1ª 69.00%","de":"Calidad Belher","leido":false,"fecha":"18/04"},
    {"hora":"23:09","asunto":"CFDI Recibo Electrónico — Período 16 Semanal 2026 · BELTRAN OCHOA JUAN CARLOS · RFC: ABE180411CB8","de":"anajar@agbelher.com · Nómina","leido":false,"fecha":"17/04"},
    {"hora":"22:30","asunto":"Transferencia Interbancaria SPEI — depósito registrado a cuenta BanBajío · 17-Abr-2026","de":"Banbajioinforma@bb.com.mx","leido":false,"fecha":"17/04"},
    {"hora":"21:50","asunto":"17-04-2026 REPORTES GENERALES — Reportes de embarque y empaque adjuntos","de":"EMBARQUES BELHER","leido":false,"fecha":"17/04"},
    {"hora":"21:46","asunto":"REPORTE DIARIO CALAVO 17-04-2026 — 3 trailers: BON-01 (1,600) + BON-02 (1,632) + CGG-65 (1,920) = 5,152 cajas · Tomate · Nogales","de":"EMBARQUES BELHER","leido":false,"fecha":"17/04"},
    {"hora":"21:46","asunto":"BILL, MANIFIESTO, DATOS TRANSPORTISTA, FACTURAS XML, PROFORMAS NOGALES CGG — carga Tomate 17/04/2026","de":"EMBARQUES BELHER","leido":false,"fecha":"17/04"},
    {"hora":"19:49","asunto":"REPORTES DE RESULTADOS Nutrición Foliar — Campo LA 25 Naves 1, 3, 7, 8, 10-12, 17, 18. Fechas muestreo: 14/Abr/2026","de":"conagrosc@gmail.com · Conagro","leido":false,"fecha":"17/04"},
    {"hora":"17:26","asunto":"REPORTE DE BASCULA 17/04/2026 (REZAGA DE TOMATE) — Adjunto","de":"Bascula Belher","leido":false,"fecha":"17/04"},
    {"hora":"17:22","asunto":"REPORTE DE BASCULA 17/04/2026 (TOMATE) — Adjunto","de":"Bascula Belher","leido":false,"fecha":"17/04"},
    {"hora":"15:26","asunto":"⚠️ AUDITORÍA CALAVO 18-19 MAY 2026 CONFIRMADA — Auditor: Javier Martínez (Buyers Edge). Sitios: Unidades de producción y empaque. Revisar inventarios, insumos críticos y servicios pendientes.","de":"C. Marisol Castro · Calidad","leido":false,"fecha":"17/04"},
    {"hora":"03:00","asunto":"Estados Financieros Marzo 2026 — EBITDA Tomate $2,864,510 vs BUD $2,483,483 (+$381K) · YTD Jul-Mar EBITDA -$1,217,116 vs BUD -$1,640,625 (+$423K)","de":"jacruz@agbelher.com · Contabilidad","leido":false,"fecha":"17/04"},
    { hora:"22:46", asunto:"REPORTE DE OUTBOUND TOMATE 15/04/2026 — Bola Calavo 1ª 88.61% merma 2.56% ✓ RECUPERACIÓN · mejora notable vs 4.75% del 14/04", de:"Calidad Belher", leido:false, fecha:"16/04" },
    { hora:"10:48", asunto:"F/S BPSI Marzo '26 — Estados financieros BPSI al 31-Mar-2026 adjuntos · reunión revisión 10am hoy (JC · Armando · hildelisa)", de:"Leima Leyva · Administración", leido:false, fecha:"16/04" },
    { hora:"20:52", asunto:"REPORTE DE OUTBOUND TOMATE 14/04/2026 — Bola Calavo 1ª 80.75% merma 4.75% ⚠ ALERTA, Roma Calavo 1ª 86.21% merma 1.58%", de:"Calidad Belher", leido:false, fecha:"15/04" },
    { hora:"20:02", asunto:"AVANCE DE TRILLA 15/04/2026 SORGO (LAS VIUDAS) — 25 ha trilladas · acumulado temporada 175 ha total", de:"Bascula Belher", leido:false, fecha:"15/04" },
    { hora:"19:48", asunto:"15-04-2026 REPORTES GENERALES (empaque y embarque)", de:"EMBARQUES BELHER", leido:false, fecha:"15/04" },
    { hora:"19:45", asunto:"REPORTE DIARIO CALAVO 15-04-2026 — 2 trailers: JL-30 (1,760) + JL-50 (1,776) = 3,536 cajas · Nogales AZ", de:"EMBARQUES BELHER", leido:false, fecha:"15/04" },
    { hora:"18:45", asunto:"BILL,MANIFIESTO,NOGALES JL · JL-30 · JL-50 — carga tomate Nogales 15/04/2026", de:"EMBARQUES BELHER", leido:false, fecha:"15/04" },
    { hora:"17:44", asunto:"REPORTE DE BASCULA 15/04/2026 (TOMATE)", de:"Bascula Belher", leido:false, fecha:"15/04" },
    { hora:"13:16", asunto:"Corbel Seeds Daily Report #0028 — Vine-ripe $55.95-60.95, Bell XL $40.95-42.95, Limón seedless 175s $58-60, CAPE tariff-refund 20-Abr, EU packaging Ago-26", de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"15/04" },
    { hora:"19:40", asunto:"REPORTE DIARIO CALAVO 14-04-2026 — 1 trailer: CGG-148 (1,920 cajas) → Nogales AZ", de:"EMBARQUES BELHER", leido:false, fecha:"14/04" },
    { hora:"19:30", asunto:"14-04-2026 REPORTES GENERALES", de:"EMBARQUES BELHER", leido:false, fecha:"14/04" },
    { hora:"17:54", asunto:"AVANCE DE TRILLA 14/04/2026 SORGO (EL PUNK Y LAS VIUDAS) — 19 ha trilladas hoy", de:"Bascula Belher", leido:false, fecha:"14/04" },
    { hora:"16:07", asunto:"REPORTE DE BASCULA 14/04/2026 (TOMATE)", de:"Bascula Belher", leido:false, fecha:"14/04" },
    { hora:"20:13", asunto:"REPORTE DE OUTBOUND TOMATE 13/04/2026 — Bola Calavo 1ª 88.34% merma 0.93% ✓ RECUPERACIÓN, Roma Millennium 1ª 89.80% merma 1.20% — calidad excelente WK16 Día 1", de:"Calidad Belher", leido:false, fecha:"14/04" },
    { hora:"10:22", asunto:"Corbel Seeds Daily Report #0027 — JALAPEÑO REBOTE $58–60 (+$14/bu), Vine-ripe NUEVO MÁX $58.95–60.95, FAO alerta Hormuz, USDA $275M specialty crop", de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"14/04" },
    { hora:"20:29", asunto:"BILL,MANIFIESTO,NOGALES CGG · CGG-77 (1,600) · CGG-157 (1,600) — DODAS adjuntos", de:"EMBARQUES BELHER", leido:false, fecha:"13/04" },
    { hora:"20:22", asunto:"13-04-2026 REPORTES GENERALES (empaque y embarque)", de:"EMBARQUES BELHER", leido:false, fecha:"13/04" },
    { hora:"20:20", asunto:"REPORTE DIARIO CALAVO 13-04-2026 — 4 trailers: ST-111 (1,600) + ST-99 (1,760) + CGG-77 (1,600) + CGG-157 (1,600) = 6,560 cajas · Nogales", de:"EMBARQUES BELHER", leido:false, fecha:"13/04" },
    { hora:"19:40", asunto:"AVANCE DE TRILLA 13/04/2026 SORGO (EL PUNK) — 12 ha trilladas · WK16 inicio · acumulado total 131 ha", de:"Bascula Belher", leido:false, fecha:"13/04" },
    { hora:"18:39", asunto:"BILL,MANIFIESTO,NOGALES ST · ST-111 (1,600) · ST-99 (1,760) — carga tomate Nogales 13/04", de:"EMBARQUES BELHER", leido:false, fecha:"13/04" },
    { hora:"17:47", asunto:"REPORTE DE BASCULA 13/04/2026 (REZAGA DE TOMATE)", de:"Bascula Belher", leido:false, fecha:"13/04" },
    { hora:"17:45", asunto:"REPORTE DE BASCULA 13/04/2026 (TOMATE)", de:"Bascula Belher", leido:false, fecha:"13/04" },
    { hora:"13:20", asunto:"Corbel Seeds Daily Report #0026 — Jalapeño corrige a $44-46/bu Texas (↓ -$8 vs #0025), Vine-ripe Nogales $57.95-59.95 sostenido, Roma softer, tarifas activas", de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"13/04" },
    { hora:"11:42", asunto:"REPORTE DE OUTBOUND TOMATE 11/04/2026 — Bola Calavo 1ª 81.93% merma 5.87% ⚠, Bola ERGO 1ª 80.97% merma 5.67% ⚠, Roma Calavo 1ª 84.80% merma 6.00% CRÍTICO, Roma Millennium 1ª 85.00% merma 1.00%", de:"Calidad Belher", leido:false, fecha:"13/04" },
    { hora:"11:27", asunto:"REPORTE DE OUTBOUND LIMON PERSA 11/04/2026 — calidad confirmada para embarque Maui Fresh (JL-34)", de:"Calidad Belher", leido:false, fecha:"13/04" },
    { hora:"23:09", asunto:"REPORTE DIARIO CALAVO 11-04-2026 — 5 trailers: CGG-129 (1,600) + CGG-1 (1,600) + JL-13 McAllen (1,651) + JL-42 (1,360) + JL-34 Limón/Chile Maui Fresh", de:"EMBARQUES BELHER", leido:false, fecha:"11/04" },
    { hora:"23:00", asunto:"11-04-2026 REPORTES GENERALES (empaque y embarque)", de:"EMBARQUES BELHER", leido:false, fecha:"11/04" },
    { hora:"22:30", asunto:"BILL, MANIFIESTO MCALLEN · JL-13 (1,651 cajas tomate Texas)", de:"EMBARQUES BELHER", leido:false, fecha:"11/04" },
    { hora:"22:15", asunto:"BILL, MANIFIESTO NOGALES CGG · CGG-129 · CGG-1", de:"EMBARQUES BELHER", leido:false, fecha:"11/04" },
    { hora:"22:00", asunto:"BILL, MANIFIESTO NOGALES JL · JL-34 (Limón/Chile Maui Fresh) · JL-42 (Tomate Arizona 1,360 cajas)", de:"EMBARQUES BELHER", leido:false, fecha:"11/04" },
    { hora:"20:48", asunto:"AVANCE DE TRILLA 11/04/2026 SORGO — 16 ha trilladas (Quevedo 2 + Composta + El Gringo) · WK15 acumulado 119 ha", de:"Bascula Belher", leido:false, fecha:"11/04" },
    { hora:"20:06", asunto:"REPORTE DE BASCULA 11/04/2026 (LIMÓN PERSA)", de:"Bascula Belher", leido:false, fecha:"11/04" },
    { hora:"19:57", asunto:"REPORTE DE BASCULA 11/04/2026 (TOMATE)", de:"Bascula Belher", leido:false, fecha:"11/04" },
    { hora:"03:00", asunto:"AVANCE DE TRILLA 10/04/2026 SORGO — 16 ha trilladas (Álamo + El Punk + Quevedo 2 + Lora + Caseta) · WK15 acumulado 103 ha", de:"Bascula Belher", leido:false, fecha:"10/04" },
    { hora:"02:30", asunto:"REPORTE DE BASCULA 10/04/2026 — Tomate · Limón Persa · Rezaga Tomate · Trilla Sorgo", de:"Bascula Belher", leido:false, fecha:"10/04" },
    { hora:"23:45", asunto:"REPORTE DIARIO CALAVO 10-04-2026 — 2 trailers: ST-108 (1,600 cajas) + ST-64 (1,688 cajas) → Arizona", de:"EMBARQUES BELHER", leido:false, fecha:"10/04" },
    { hora:"10:53", asunto:"Corbel Seeds Daily Report #0025 — Vine-ripe $57.95-59.95 sostenido 2º día, Jalapeño $50-53 confirmado, tariffs presionan retail EE.UU., Mexfly TX activa",  de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"10/04" },
    { hora:"10:41", asunto:"REPORTE DE OUTBOUND TOMATE 09/04/2026 — Bola Calavo 1ª 79.74% merma 6.78% CRÍTICO, Roma Calavo merma 2.71%, Roma Urson 1ª 78.25% merma 4.50% ⚠", de:"Calidad Belher", leido:false, fecha:"10/04" },
    { hora:"00:23", asunto:"Fwd: CONTRATO CALAVO 2026-2029 ⚠ — Antonio reenvía borrador multianual de Irene Amezaga; Armando Llanes revisando, comentarios hoy 10-Abr", de:"Antonio Beltrán · ABSA", leido:false, fecha:"10/04" },
    { hora:"23:28", asunto:"REPORTE DIARIO CALAVO 09-04-2026 — 7 trailers (10,808 cajas): CHARLY-4, CGG-90, ST-110, ST-109, JL-119, CGG-88, CGG-91",     de:"EMBARQUES BELHER",             leido:false, fecha:"09/04" },
    { hora:"23:15", asunto:"09-04-2026 REPORTES GENERALES TOMATE Y CHILES — empaque + embarque Calavo + Mayer Martínez Chile (CGG-91/CGG-92)",           de:"EMBARQUES BELHER",             leido:false, fecha:"09/04" },
    { hora:"17:56", asunto:"REPORTE DE BASCULA 09/04/2026 (TOMATE) — LA 25 Roma + Álamo Round + Chiles (14,965 tinas · 151,110 kg)",                      de:"Bascula Belher",               leido:false, fecha:"09/04" },
    { hora:"03:00", asunto:"AVANCE DE TRILLA 09/04/2026 SORGO (ÁLAMO) — 20 ha trilladas hoy · WK15 acumulado 87 ha",                                     de:"Bascula Belher",               leido:false, fecha:"09/04" },
    { hora:"17:20", asunto:"Corbel Seeds Daily Report #0024 — Vine-ripe $57.95-59.95 nuevo máximo, Jalapeño rebota $50-53, crisis chile 3 décadas",   de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"09/04" },
    { hora:"15:50", asunto:"REPORTE DE OUTBOUND TOMATE Y CHILE 08/04/2026 — Bola ERGO merma 4.64% ⚠, Chile Anaheim 1ª 85.96% merma 0.81%",         de:"Calidad Belher",               leido:false, fecha:"09/04" },
    { hora:"22:49", asunto:"CAJAS ENVIADAS SEMANA 41 — adjunto (jacruz)",                                                                             de:"Juan Cruz · Contabilidad",     leido:false, fecha:"08/04" },
    { hora:"23:46", asunto:"Liquidación Calavo al 05 de abril '26 — Leima modifica comisiones Calavo (archivo adjunto)",                              de:"Leima Leyva · Administración", leido:false, fecha:"08/04" },
    { hora:"23:35", asunto:"REPORTE DE BASCULA 08/04/2026 (TOMATE) — reportes adjuntos",                                                              de:"Bascula Belher",               leido:false, fecha:"08/04" },
    { hora:"02:47", asunto:"AVANCE DE TRILLA 08/04/2026 SORGO (EL DOS Y ALAMO) — 19 ha trilladas hoy",                                               de:"Bascula Belher",               leido:false, fecha:"08/04" },
    { hora:"02:30", asunto:"08-04-2026 REPORTES GENERALES TOMATE — adjunto empaque y embarque",                                                        de:"EMBARQUES BELHER",             leido:false, fecha:"08/04" },
    { hora:"21:02", asunto:"OL 8+4 — actualización forecast (adjunto, jacruz)",                                                                        de:"Juan Cruz · Contabilidad",     leido:false, fecha:"08/04" },
    { hora:"20:33", asunto:"BILL, MANIFIESTO NOGALES JL · JL-101 · JL-104 — cargas tomate 07/04/2026",                                                de:"EMBARQUES BELHER",             leido:false, fecha:"07/04" },
    { hora:"20:29", asunto:"REPORTE DIARIO CALAVO 07-04-2026 — 4 camiones Nogales · 6,144 cajas (ST-108, ST-64, JL-104, JL-101)",                    de:"EMBARQUES BELHER",             leido:false, fecha:"07/04" },
    { hora:"20:26", asunto:"07-04-2026 REPORTES GENERALES (empaque y embarque)",                                                                      de:"EMBARQUES BELHER",             leido:false, fecha:"07/04" },
    { hora:"19:32", asunto:"BILL, MANIFIESTO NOGALES ST · ST-108 · ST-64 — cargas tomate 07/04/2026",                                                 de:"EMBARQUES BELHER",             leido:false, fecha:"07/04" },
    { hora:"18:17", asunto:"AVANCE DE TRILLA 07/04/2026 SORGO — Carrillo + Campo Beltrán + El Dos · 18 ha trilladas hoy",                             de:"Bascula Belher",               leido:false, fecha:"07/04" },
    { hora:"17:45", asunto:"Re: Settle WK12 — Leima confirma a Carlos: 'Gracias Carlos. Buen día.' (Gass Sheet WK15 recibido ✓)",                     de:"Leima Leyva · Administración", leido:false, fecha:"07/04" },
    { hora:"17:30", asunto:"REPORTE DE BASCULA 07/04/2026 (REZAGA DE TOMATE)",                                                                        de:"Bascula Belher",               leido:false, fecha:"07/04" },
    { hora:"16:51", asunto:"REPORTE DE BASCULA 07/04/2026 (TOMATE)",                                                                                  de:"Bascula Belher",               leido:false, fecha:"07/04" },
    { hora:"16:25", asunto:"Gass Sheet -Belher WK 15 — reporte hasta WK14 · Excel adjunto: '2026 05-04 Agricola Belher Settle WK15 1.xlsx'",          de:"Irene Amezaga · Calavo VP Sales", leido:false, fecha:"07/04" },
    { hora:"16:11", asunto:"RE: Settle WK12 — Reporte Belher actualizado al 4/5/2026 semana 15 (mismo Excel)",                                        de:"Carlos Valadez · Calavo Settlement", leido:false, fecha:"07/04" },
    { hora:"11:47", asunto:"REPORTE DE OUTBOUND TOMATE 06/04/2026 — Bola Yameto merma 4.97% ⚠, Roma Calavo 1ª 91.13%, Roma Millennium 1ª 86.47%",   de:"Calidad Belher",               leido:false, fecha:"07/04" },
    { hora:"08:40", asunto:"Corbel Seeds Daily Report #0022 — Vine-ripe $55.95-57.95 'much higher', Jalapeño colapsa $40-42, Mexfly quarantine TX",   de:"Raymundo Elizalde · Corbel Seeds", leido:false, fecha:"07/04" },
    { hora:"23:47", asunto:"Re: Settle WK12 — Leima confirma a Irene: 'esperamos para mañana' (settlement HOY 07-Abr >1pm)",                          de:"Irene Amezaga · Calavo",      leido:false, fecha:"06/04" },
    { hora:"23:20", asunto:"Re: Settle WK12 — Irene Amezaga: 'cerres de fracturas pendientes, envío mañana después de la 1pm'",                       de:"Irene Amezaga · Calavo",      leido:false, fecha:"06/04" },
    { hora:"21:00", asunto:"06-04-2026 REPORTES GENERALES (empaque y embarque)",                                                                      de:"EMBARQUES BELHER",            leido:false, fecha:"06/04" },
    { hora:"20:08", asunto:"BILL, MANIFIESTO MCALLEN (Texas) · AC-26",                                                                                de:"EMBARQUES BELHER",            leido:false, fecha:"06/04" },
    { hora:"19:57", asunto:"BILL, MANIFIESTO NOGALES CGG · CGG-19 · CGG-80 · CGG-100 · CGG-114",                                                     de:"EMBARQUES BELHER",            leido:false, fecha:"06/04" },
    { hora:"18:52", asunto:"BILL, MANIFIESTO NOGALES JL · JL-115 · JL-131",                                                                          de:"EMBARQUES BELHER",            leido:false, fecha:"06/04" },
    { hora:"17:26", asunto:"REPORTE DE BASCULA 06/04/2026 (TOMATE)",                                                                                  de:"Bascula Belher",              leido:false, fecha:"06/04" },
    { hora:"12:16", asunto:"REPORTE DE OUTBOUND DE LIMON PERSA DEL 06/04/2026 — 1ª 15%, 2ª Export 47%, merma 1%",                                    de:"Calidad Belher",              leido:false, fecha:"06/04" },
    { hora:"10:37", asunto:"REPORTE DE OUTBOUND TOMATE 04/04/2026 — Bola Calavo 1ª 87.83%, Roma Calavo 1ª 90.54%",                                   de:"Calidad Belher",              leido:false, fecha:"06/04" },
    { hora:"09:47", asunto:"Re: Settle WK12 — seguimiento settlement WK13 a Carlos Valadez",                                                          de:"Leima Leyva · Administración",leido:false, fecha:"06/04" },
    { hora:"23:58", asunto:"04-04-2026 REPORTES GENERALES (empaque y embarque)",                                                                      de:"EMBARQUES BELHER",            leido:false, fecha:"04/04" },
    { hora:"23:41", asunto:"BILL, MANIFIESTO NOGALES CGG · CGG-12 · CGG-16 · CGG-26 · CHARLY-3",                                                     de:"EMBARQUES BELHER",            leido:false, fecha:"04/04" },
    { hora:"23:00", asunto:"REPORTE DE BASCULA 04/04/2026 (REZAGA DE TOMATE)",                                                                        de:"Bascula Belher",              leido:false, fecha:"04/04" },
    { hora:"18:10", asunto:"REPORTE DE BASCULA 04/04/2026 (TOMATE)",                                                                                  de:"Bascula Belher",              leido:false, fecha:"04/04" },
    { hora:"19:54", asunto:"Re: Anual 2025 — Declaración presentada con resultado a pagar (pendiente montos)",                                        de:"jacruz · Antonio Cruz",       leido:false, fecha:"03/04" },
    { hora:"23:12", asunto:"02-04-2026 REPORTES GENERALES LIMON",                                                                                     de:"EMBARQUES BELHER",            leido:false, fecha:"02/04" },
    { hora:"18:00", asunto:"RE: 2026 15-03 Agricola Belher Settle WK12 — envíos settlement los jueves",                                              de:"Carlos Valadez · Calavo",     leido:false, fecha:"01/04" }
  ],

  ticker: [
    { label:"VINE RIPE 4×4", valor:"$55.95–60.95",  cambio:"↓ leve · Corbel #0028 · 15-Abr",          dir:"down"    },
    { label:"JALAPEÑO",       valor:"$58–60",        cambio:"↑ #0027 sostenido (sin cotización #0028)",  dir:"up"      },
    { label:"TOMATE ROMA XL", valor:"$36.95–40.95", cambio:"sostenida Nogales · #0028 15-Abr",          dir:"neutral" },
    { label:"BELL VERDE XL",  valor:"$40.95–42.95", cambio:"↓ leve vs $42.95–44.95 #0027",              dir:"down"    },
    { label:"MERMA BOLA",     valor:"2.56%",         cambio:"↓ 15/04 recuperación · prom WK16 2.75%",   dir:"up"      },
    { label:"TRILLA SORGO",   valor:"175 ha",        cambio:"WK16: +44 ha (14-Abr 19ha + 15-Abr 25ha)", dir:"up"      },
    { label:"P&P ACUM WK16",  valor:"$4.09M",        cambio:"818,324 cajas · 482 cont · cruce ✓",        dir:"up"      },
    { label:"EBITDA MAR",     valor:"$2.86M",        cambio:"vs BUD $2.48M ✓ · YTD -$1.22M vs BUD -$1.64M",  dir:"up"      },
    { label:"1ª WK16 D1-3",   valor:"86.74%",        cambio:"Bola 85.90% · Roma Mill 89.80% · Roma Cal 86.21%", dir:"up" },
    { label:"EMBARQUES 17/04",valor:"5,152 cajas",   cambio:"3 trailers BON-01+BON-02+CGG-65 · Nogales AZ", dir:"up"    },
    { label:"POR LIQUIDAR",    valor:"$720,391",      cambio:"↑ WK16 acum — crece cada settle",           dir:"up"      },
    { label:"CVGW",           valor:"$26.67",        cambio:"↓ -3.65% close 16-Abr (desde $27.68)",      dir:"down"    },
    { label:"AVO",            valor:"$13.78",        cambio:"↓ -6.26% close 16-Abr (desde $14.70)",      dir:"down"    }
  ],

  auditorias: [
    {
      nombre:    "PrimusGFS VK — Certificación Recibida",
      tipo:      "Certificación Tercera Parte",
      organismo: "PrimusGFS / SCS Global Services",
      auditor:   "VK Certifications",
      alcance:   "SP-L25-1 · SP-EMPAQUE-1 · SP-ALAMO-1",
      fechaAuditoria: "Mar 2026",
      estado:    "Certificados recibidos · CUP-PGFS-524",
      nivel:     "success",
      ncTotal:   0,
      ncMayor:   0,
      ncMenor:   0,
      notas:     "3 certificados PrimusGFS recibidos el 30-Mar-2026: SP-L25-1, SP-EMPAQUE-1 y SP-ALAMO-1. Número de cupón: CUP-PGFS-524. Hito de calidad para la temporada — certificación completa de instalaciones VK.",
      observaciones: [],
      fuente: "VK Certifications · 30-Mar-2026"
    },
    {
      nombre:    "GlobalGAP + HACCP + FSMA",
      tipo:      "Certificación Externa",
      organismo: "SCS — Scientific Certification Systems",
      auditor:   "Ramón Gómez",
      alcance:   "Todas las unidades de producción, empaque y CDCs",
      fechaAuditoria: "04/02/2026",
      estado:    "Acciones correctivas enviadas · Resultado pendiente",
      nivel:     "warning",
      ncTotal:   7,
      ncMayor:   7,
      ncMenor:   0,
      accionesCorrectivas: {
        porcentaje:   93,
        deadline:     "25/02/2026",
        ultimoUpdate: "20/02/2026",
        areas: [
          { area:"IMC",        porcentaje:90,  total:5, completadas:4.5 },
          { area:"Producción", porcentaje:100, total:1, completadas:1   },
          { area:"Finanzas",   porcentaje:100, total:1, completadas:1   }
        ]
      },
      responsable: "Chrysthian Marisol Castro Sandoval · Gerente Innovación y Mejora Continua",
      notas: "Auditoría realizada 4-5 Feb 2026. 7 NCs Mayor identificadas. Acciones correctivas al 93% el 20-Feb; deadline 25-Feb para envío al auditor. Sin confirmación de resultado a la fecha.",
      observaciones: [
        {
          id: "NC-01", area: "IMC", tipo: "Mayor",
          descripcion: "Registros de análisis de agua para riego sin frecuencia documentada según FSMA § 112.44",
          estado: "Completada",
          responsable: "Chrysthian Marisol Castro",
          deadline: "25/02/2026",
          accion: "Actualizar protocolo de muestreo de agua e integrar frecuencia en plan FSMA. Evidencia archivada.",
          evidencia: "Protocolo actualizado y firmado enviado a SCS el 18-Feb"
        },
        {
          id: "NC-02", area: "IMC", tipo: "Mayor",
          descripcion: "Plan de inocuidad alimentaria (Food Safety Plan) sin revisión anual documentada para ciclo 2025–2026",
          estado: "Completada",
          responsable: "Chrysthian Marisol Castro",
          deadline: "25/02/2026",
          accion: "Realizar revisión formal del FSP, firmar por responsable y archivar con fecha de vigencia.",
          evidencia: "FSP revisado, firmado y sellado. Enviado a SCS el 17-Feb"
        },
        {
          id: "NC-03", area: "IMC", tipo: "Mayor",
          descripcion: "Capacitación en higiene del personal sin evidencia firmada para 38 trabajadores de empaque",
          estado: "Completada",
          responsable: "Chrysthian Marisol Castro",
          deadline: "25/02/2026",
          accion: "Levantar listas de asistencia firmadas de las capacitaciones impartidas. Fotografías y materiales como evidencia.",
          evidencia: "38 listas firmadas + constancias de capacitación enviadas a SCS el 19-Feb"
        },
        {
          id: "NC-04", area: "IMC", tipo: "Mayor",
          descripcion: "Bitácoras de limpieza y sanitización de línea de empaque sin registro de verificación del supervisor",
          estado: "Completada",
          responsable: "Chrysthian Marisol Castro",
          deadline: "25/02/2026",
          accion: "Implementar columna de verificación en bitácoras y capacitar a supervisores. Evidencia de 30 días.",
          evidencia: "Bitácoras con columna de verificación activa desde 01-Feb. Muestra 30 días enviada a SCS el 20-Feb"
        },
        {
          id: "NC-05", area: "IMC", tipo: "Mayor",
          descripcion: "Análisis de riesgo ambiental (suelo y agua) no actualizado para la temporada en curso",
          estado: "En proceso",
          responsable: "Chrysthian Marisol Castro",
          deadline: "Pendiente confirmación SCS",
          accion: "Realizar muestreos de suelo y agua de la temporada actual. Actualizar análisis de riesgo y enviar evidencia a SCS para cierre de auditoría.",
          evidencia: ""
        },
        {
          id: "NC-06", area: "Producción", tipo: "Mayor",
          descripcion: "Registros de aplicación de agroquímicos con faltantes en bloques 7B y 8C (fechas 12 y 19 Ene 2026)",
          estado: "Completada",
          responsable: "Operaciones / Producción",
          deadline: "25/02/2026",
          accion: "Reconstituir registros con datos de cuaderno de campo. Reforzar protocolo de captura diaria.",
          evidencia: "Registros completados y firmados por responsable de campo. Enviados a SCS el 16-Feb"
        },
        {
          id: "NC-07", area: "Finanzas", tipo: "Mayor",
          descripcion: "Póliza de seguro de responsabilidad civil no disponible para revisión durante la auditoría",
          estado: "Completada",
          responsable: "Finanzas / Administración",
          deadline: "25/02/2026",
          accion: "Enviar copia de póliza vigente al auditor y mantener accesible en carpeta de documentos certificables.",
          evidencia: "Póliza vigente enviada a SCS el 14-Feb"
        }
      ],
      fuente: "c.marisol@agbelher.com"
    },
    {
      nombre:    "Auditoría Cliente Calavo — Buyers Edge",
      tipo:      "Visita de Cliente",
      organismo: "Buyers Edge",
      auditor:   "Javier Martínez",
      alcance:   "Unidades de producción y empaque — todas las instalaciones",
      fechaAuditoria: "18-19/05/2026",
      estado:    "Confirmada — preparación en curso",
      nivel:     "warning",
      ncTotal:   null,
      ncMayor:   null,
      ncMenor:   null,
      notas:     "Confirmada el 17-Apr-2026 por Chrysthian Marisol Castro. Criterios: Buenas Prácticas de Manufactura y Agrícolas. Día 1: itinerario a definir in situ con auditor. Acción: revisar inventarios de materiales e insumos críticos y gestionar servicios pendientes con tiempo.",
      observaciones: [],
      fuente: "c.marisol@agbelher.com · 17-Abr-2026"
    }
  ],

  estrategia: {
    contratos: [
      {
        titulo: "Contrato Calavo 2026",
        estado: "Activo",
        nivel: "success",
        descripcion: "Pick & Pack @$5.00/caja — addendum firmado 2024 por Mike. WK01–WK12: 655,641 cajas · $3.28M liquidado. Pendiente corrección en contrato formal (Irene Amezaga).",
        accion: "Verificar corrección del P&P a $5 en contrato. Reunión de alineación con John Lindeman y James Snyder pendiente de confirmar fecha."
      },
      {
        titulo: "Contrato Calavo 2026-2029 — NUEVO MULTIANUAL",
        estado: "En Revisión",
        nivel: "warning",
        descripcion: "Irene Amezaga (Calavo) envió borrador del contrato 2026-2029 el 09-Abr-2026. Antonio lo reenvió a JC y Armando Llanes (CPA, San Antonio TX) para revisión. Armando confirmó: 'Te doy mis comentarios mañana por la tarde.' Contrato para próximas temporadas de Agrícola Belher — cubre ciclos 2026-27, 2027-28 y 2028-29.",
        accion: "1) Esperar comentarios de Armando Llanes (debieron llegar hoy 10-Abr). 2) Revisar términos de precio base, escalonamiento y condiciones P&P para 3 temporadas. 3) Coordinar reunión de alineación con John Lindeman, James Snyder e Irene antes de firmar. 4) Notaría 97 Culiacán (notaria97culiacan@hotmail.com) ya está en copia — preparar documentación legal."
      },
      {
        titulo: "Inversión Corbel Seeds",
        estado: "Activo",
        nivel: "info",
        descripcion: "Participación como CB1 en Corbel Seeds. Reunión Zoom 17-Mar sobre ensayos de tomate y chile, producción y disponibilidad de semilla para próximos ciclos de siembra.",
        accion: "Revisar presentación 'Situación Actual de Corbel Seeds' enviada por Raymundo el 23-Mar."
      }
    ],
    oportunidades: [
      {
        titulo: "Limón persa: pico estacional acelerado — temporada en momentum máximo",
        prioridad: "Alta",
        descripcion: "Corbel #0018 (01-Abr): limón persa Texas en $56-70/carton según calibre (200s: $66-68, 175s: $68-70). Báscula Belher activa con limón el 01, 02 y 06-Abr. Outbound 06-Abr: merma 1%, calidad excelente. Maui Fresh como comprador sólido.",
        accion: "Maximizar volumen de embarques limón mientras dure el pico estacional. Coordinar forecast con Maui Fresh para resto de abril."
      },
      {
        titulo: "Cucumber: fortaleza estructural sostenida — considerar expansión GC 2026-27",
        prioridad: "Alta",
        descripcion: "Cucumber $40.95–42.95/bu Nogales (leve corrección desde $42.95-44.95). HortiDaily señala 'volatile cucumber pricing for near future' con demanda sostenida. Único producto sin colapso de precio.",
        accion: "Evaluar inclusión o ampliación del programa de pepino en GC 2026-27. Consultar con Calavo viabilidad logística."
      },
      {
        titulo: "Grape tomato: rebote confirma demanda real — ciclo de precio activo",
        prioridad: "Media",
        descripcion: "Grape tomato recuperó de $18.95-20.95 a $28.95-30.95/flat en una sesión (Corbel #0018). La corrección del -30% resultó temporal. Mercado premium de mini-tomate con alta elasticidad.",
        accion: "Monitorear si el rebote se sostiene en WK15. Señal positiva para proyecciones de precio si Belher tiene producto disponible."
      },
      {
        titulo: "Variedades ToBRFV-HR como diferenciador comercial",
        prioridad: "Media",
        descripcion: "18 variedades resistentes a ToBRFV desarrolladas en 7 años por sector. La genética de resistencia se convierte en el factor decisivo para clientes premium norteamericanos.",
        accion: "Alinear con Raymundo adopción en ensayos Corbel Seeds para temporada 2026-27."
      }
    ],
    watchlist: [
      {
        titulo: "Bola Tolin merma 30.18% (07/04) — CRÍTICO: variedad posiblemente inviable para exportación",
        nivel: "danger",
        descripcion: "Outbound 07/04: Bola Tolin primera 28.59%, tercera 31.26%, merma 30.18%, peso 33.06 kg. Outlier extremo — merma 6x la media de otras variedades en WK15. Posibles causas: estrés hídrico o calórico en campo, problema varietal de piel/firmeza, manejo postcosecha inadecuado, o madurez avanzada al momento de cosecha.",
        accion: "Investigar urgente: (1) campos de origen de Tolin empacado el 07/04, (2) condición de fruta en campo vs empaque, (3) temperatura en almacén y línea, (4) comparar con partidas Tolin de WK13-14. Si merma se confirma estructural en Tolin, suspender empaque exportación y redirigir a mercado nacional o rezaga."
      },
      {
        titulo: "Merma elevada en Bolas WK15 — Calavo 5.44% prom (días 1-3), ERGO 4.64% (día 4), Yameto 4.71% (días 1-2)",
        nivel: "danger",
        descripcion: "Patrón crítico: Bola Calavo 04/04=3.35% + 07/04=6.20% + 09/04=6.78% → prom 5.44% (MÁXIMO TEMPORADA). Bola Yameto 04/04≈4.44% + 06/04=4.97% → prom 4.71%. Bola ERGO 08/04=4.64%. Cinco días consecutivos con merma >3% en Bolas — patrón estructural, no aislado. El 09/04 (6.78%) supera el umbral de alerta máximo.",
        accion: "URGENTE: Auditar calidad Bola Calavo ANTES del próximo outbound. Verificar manejo postcosecha, temperatura campo-empaque, condición de fruta en campo y clasificación. Con vine-ripe en máximos $57.95-59.95, 6.78% de merma en Bolas es pérdida directa de ~$4/caja neto. Considerar suspender empaque Bolas hasta resolver causa raíz."
      },
      {
        titulo: "Declaración Anual 2025 — resultado a pagar pendiente",
        nivel: "danger",
        descripcion: "Auditoría Belher no terminó revisión antes del 31-Mar. Presentada con 'resultado a pagar' en acuerdo con Despacho Terrazas (jacruz · 01-Abr). Monto definitivo pendiente confirmación. Armando Llanes solicitó compartir fecha y montos.",
        accion: "Esperar confirmación de jacruz con fecha y monto del pago. Prever impacto en flujo de caja. Revisar con Leima en sesión del 08-Abr."
      },
      {
        titulo: "Fertilizantes: riesgo alcista global por conflicto en Irán",
        nivel: "danger",
        descripcion: "Guerra en Irán → urea disparada. China restringe exportaciones. Brasil y India en modo emergencia. Impacto directo en costos de producción GC 2026-27.",
        accion: "Revisar contratos de fertilizantes para próxima temporada. Evaluar compra adelantada antes de que suba más."
      },
      {
        titulo: "Aranceles USMCA: negociaciones técnicas activas — riesgo concreto",
        nivel: "danger",
        descripcion: "Legisladores de Florida mantienen presión por tarifas estacionales a tomate, pimiento, pepino y calabaza mexicana (Corbel #0018). Revisión USMCA 1-Jul-2026. Suprema Corte falló sobre aranceles.",
        accion: "Monitorear semanalmente. Contactar a Calavo para posición estratégica ante posibles cambios de anti-dumping."
      },
      {
        titulo: "BPSI: F/S Marzo 2026 revisados hoy — pendiente plan de acción Q2",
        nivel: "warning",
        descripcion: "Reunión BPSI realizada hoy 16-Abr. Leima compartió estados financieros al 31-Mar-2026 (BPSI). Blondie Producciones sin ingresos operativos significativos — gastos continuos. Resultado reunión con Armando Llanes y hildelisa pendiente de síntesis.",
        accion: "Esperar síntesis de la reunión de hoy. Definir plan de acción Q2 para BPSI: opciones son recuperar cliente, conseguir nuevos contratos, o plan de cierre/suspensión ordenada."
      }
    ],
    proximos: [
      { fecha:"20/04/2026", evento:"CAPE Tariff-Refund Portal CBP Phase 1 abre — verificar facturas importaciones Belher elegibles para reembolso aranceles IEEPA invalidados (4 días)", tipo:"regulatorio", participantes:"Barrenechea/L.Piña broker aduanal · JC" },
      { fecha:"21/04/2026", evento:"ABSA CF GC 2025-2026 OL 9+3 actualizado — revisión forecast ciclo cierre (Leima Zoom invitación 30-Mar)", tipo:"reunion", participantes:"Leima Leyva · Armando Llanes · Antonio · JC · jacruz" },
      { fecha:"28/04/2026", evento:"WK18 — cruce estimado deuda Calavo $0 (amortización completa $6M) — inicio de liquidación real a Belher", tipo:"financiero", participantes:"Leima · Antonio · JC" },
      { fecha:"18-19/05/2026", evento:"Auditoría Cliente Calavo — Buyers Edge (Javier Martínez). Inspeccionará todas las unidades de producción y empaque. Preparar inventarios y gestionar servicios pendientes.", tipo:"auditoria", participantes:"C. Marisol Castro · JC · Calavo Buyers Edge" },
      { fecha:"Por confirmar (Abr 2026)", evento:"Reunión alineación Contrato 2026-2029 — John Lindeman · James Snyder · Irene Amezaga · Armando Llanes", tipo:"reunion", participantes:"Antonio, JC, Calavo, Armando Llanes, Notaría 97" }
    ]
  },

  predicciones: {
    generado:  "17/04/2026 · 00:14",
    modelo:    "Claude claude-sonnet-4-6",
    horizonte: "7 días",
    nota:      "Síntesis de precios USDA (Corbel Seeds #0028 · 15-Abr) + outbound tomate 15/04 (Bola Calavo merma 2.56% recuperación) + embarques 15/04 (JL-30 + JL-50 = 3,536 cajas Nogales) + trilla sorgo 175 ha acum + CVGW $26.67 / AVO $13.78 (close 16-Abr) + CAPE tariff-refund portal abre el 20-Abr (en 3 días). Sin nuevas fuentes email disponibles 17-Abr.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "alcista",
        confianza: 72,
        precio_actual:     { min: 55.95, max: 60.95 },
        precio_proyectado: { min: 54.00, max: 63.00 },
        razonamiento: "Corbel #0028 (15-Abr) reporta vine-ripe Nogales $55.95-60.95 depending on size — leve corrección vs máximo $58.95-60.95 de ayer en 4×4/4×5, pero mercado permanece firme. USDA retail OTV +43% semanal AMS confirma demanda escalando a nivel distribución. Bola Calavo outbound 14/04 merma 4.75% es señal de alerta en calidad — inestabilidad que puede afectar certificación en destino. Tight supply estructural activo con tariffs. La corrección del rango inferior de $58.95 a $55.95 puede reflejar mezcla de tamaños (los 55 y smaller dominan volumen).",
        factores: ["Vine-ripe Nogales $55.95-60.95 (#0028) — firme, leve ajuste vs #0027 por mix de tamaños", "Retail OTV +43% semanal AMS — demanda retail escalando confirmada", "Bola Calavo merma 4.75% el 14/04 — calidad inestable, riesgo de rechazos en destino", "Tariffs USMCA activos sostienen precio en canal vs competidores no-USMCA", "USDA FOB review: very good tomato demand + cherry/grape scarcity"],
        riesgo: "Entrada de producción California/Salinas en WK17-18 puede presionar corrección técnica a $50-55. Bola Calavo merma inestable (0.93%↔4.75%) puede generar rechazos en destino.",
        accion: "Verificar calidad ANTES de próximo embarque — merma 4.75% el 14/04 exige revisión. Si calidad WK16 D3+ regresa <2%, mantener embarques plenos. Priorizar Roma Calavo (merma 1.58%) y vigilar próximo outbound Bola."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb XL · Nogales AZ",
        tendencia: "alcista",
        confianza: 70,
        precio_actual:     { min: 36.95, max: 40.95 },
        precio_proyectado: { min: 36.00, max: 43.00 },
        razonamiento: "Roma XL Nogales $36.95-40.95 sostenida en Corbel #0028 (15-Abr) — sin cambio vs #0027. Roma Calavo outbound 14/04 merma 1.58% — calidad excelente, lista para embarcar. Plum tomato complex en firmeza con demanda foodservice activa. Texas Roma XL también fuerte. El nivel XL >$40 establece piso de precios premium para cierre de temporada.",
        factores: ["Roma XL Nogales $36.95-40.95 (#0028) — firmeza confirmada segundo día", "Roma Calavo merma 1.58% el 14/04 — calidad óptima para embarcar", "Texas Roma XL fuerte — demanda cruzada en ambos corredores activa", "Foodservice/pizzerías con demanda constante de plum tomato"],
        riesgo: "Volumen Roma puede ser limitado hacia fin de temporada WK17-18. Monitorear outbound diario.",
        accion: "Priorizar embarques Roma Calavo — merma 1.58% confirmada el 14/04. Roma es la apuesta más segura de calidad WK16 mientras Bola muestra inestabilidad."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · Texas",
        tendencia: "alcista",
        confianza: 55,
        precio_actual:     { min: 58.00, max: 60.00 },
        precio_proyectado: { min: 48.00, max: 65.00 },
        razonamiento: "Jalapeño se mantuvo en $58-60/bu Texas según #0027 (14-Abr). Corbel #0028 (15-Abr) no reporta cotización FOB jalapeño directa en EE.UU. — solo SNIIM México: $1,500 MXP/arpilla 30kg (~$88/30kg = ~$73/bu equivalente). La volatilidad extrema observada ($40→$53→$44→$58 en 12 días) continúa. Serrano $68-70 confirma fortaleza hot pepper. La crisis estructural de oferta sigue activa pero la volatilidad introduce riesgo significativo.",
        factores: ["#0027 $58-60 Texas sostenido; #0028 sin cotización FOB directa", "SNIIM México jalapeño $1,500/arpilla 30kg (~$73/bu equiv) — señal alcista", "Serrano Texas $68-70 — sector hot pepper fuerte", "Volatilidad extrema 12 días: $40→$53→$44→$58 — riesgo bidireccional alto"],
        riesgo: "Volatilidad extrema continúa — otro swing de -$14/bu posible si hay flush localizado de cosecha. Rango WK16-17 estimado $48-65.",
        accion: "Si Belher tiene volumen jalapeño disponible, embarcar en $58-60 — nivel atractivo históricamente. Monitorear Corbel #0029 para confirmar dirección. Confianza baja por ausencia de cotización en #0028."
      },
      {
        id: "bell",
        producto: "Chile Bell GH",
        unidad: "carton XL · Nogales AZ",
        tendencia: "lateral",
        confianza: 72,
        precio_actual:     { min: 40.95, max: 42.95 },
        precio_proyectado: { min: 40.00, max: 45.00 },
        razonamiento: "Chile Bell verde Nogales XL $40.95-42.95 en Corbel #0028 (15-Abr) — corrección de ~$2/caja vs $42.95-44.95 de #0027. Bell GH sigue siendo el producto más estable de la temporada (séptima semana sobre $40). La corrección técnica de $2 es consistente con suavización de demanda de corto plazo pero el mercado GH no muestra señal de colapso. México dominante sin sustituto real en USMCA.",
        factores: ["Bell XL Nogales $40.95-42.95 (#0028) — leve ajuste vs $42.95-44.95 (#0027)", "Séptima semana consecutiva sobre $40 — equilibrio real sostenido", "México dominante en bell GH USMCA — sin sustituto de corto plazo", "Demanda retail bell verde: inelástica, canal premium activo"],
        riesgo: "Nueva producción invernaderos norteños WK17-18 puede incrementar oferta. Corrección técnica adicional posible si oferta GH acelera.",
        accion: "Mantener programa bell GH — mercado más estable y predecible de la temporada. La corrección de $2 es normal; no reducir volumen. Expandir en GC 2026-27."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "FOB Texas (seedless)",
        tendencia: "bajista",
        confianza: 68,
        precio_actual:     { min: 54.00, max: 65.00 },
        precio_proyectado: { min: 48.00, max: 62.00 },
        razonamiento: "Corbel #0028 (15-Abr) confirma suavización en limón Texas seedless: 175s $58-60 (desde $64-66 en #0027), 200s $54-56 (desde $58-62). 110s y 150s en $64-65. El flush primaveral (Abr-May) está presionando calibres 175s+ hacia abajo. La corrección es más pronunciada de lo esperado — $6/carton en 175s en 24 horas es señal de quiebre del pico. SNIIM México: limón con semilla $500/caja 20kg Iztapalapa.",
        factores: ["Limón seedless 175s: $58-60 (#0028) vs $64-66 (#0027) — caída $6/carton en 24h", "Limón seedless 200s: $54-56 — ajuste significativo por flush primaveral", "Colombia incrementando exportaciones Tahiti lime para compensar volumen mexicano", "Corrección técnica estacional en marcha: peak primaveral puede haber pasado"],
        riesgo: "Flush primaveral Abr-May puede continuar presionando precios hacia $45-50 en 200s. Colombia ganando participación de mercado en canal foodservice.",
        accion: "Maximizar embarques limón en próximos 5-7 días — el pico puede estar pasando. Coordinar con Maui Fresh volumen disponible para semana restante. 175s aún rentables en $58-60."
      }
    ]
  },

  industria: [
    { cat:"Política",     titulo:"CAPE tariff-refund portal IEEPA entra en vigor el 20-Abr-2026 — CBP Phase 1 refunds para aranceles invalidados", impacto:"Alto", fuente:"Corbel Seeds #0028 · IFPA · 15-Abr", resumen:"IFPA anuncia que el portal CAPE de CBP iniciará el 20-Abr-2026 con los reembolsos Phase 1 de aranceles IEEPA invalidados. Importadores de fresh produce deben preparar ACE/ACH enrollment y tener facturas elegibles documentadas. Para Belher: revisar facturas de importaciones cruzadas con Barrenechea/L.Piña que puedan ser elegibles y actuar esta semana antes del launch del portal." },
    { cat:"Mercado",      titulo:"Vine-ripe Nogales sostenido $55.95–60.95 depending on size — USDA retail OTV +43% semanal AMS confirma demanda", impacto:"Alto", fuente:"Corbel Seeds #0028 · USDA AMS · 15-Abr", resumen:"Corbel #0028 (15-Abr) confirma vine-ripe Nogales $55.95-60.95 — leve corrección vs $58.95-60.95 de #0027 principalmente en tamaños menores (55 & smaller). Mercado permanece muy firme. USDA retail feature report semana confirma on-the-vine tomatoes +43% en publicidad — demanda escalando a nivel distribución minorista. USDA FOB review national: 'very good tomato demand, cherry/grape tomato scarce'." },
    { cat:"Mercado",      titulo:"Limón seedless Texas se suaviza: 175s $58–60 (↓ desde $64–66), 200s $54–56 — flush primaveral en marcha", impacto:"Alto", fuente:"Corbel Seeds #0028 · USDA Citrus · 15-Abr", resumen:"Limón seedless Texas muestra corrección notable en Corbel #0028: 175s caen de $64-66 a $58-60 (-$6/carton en 24h), 200s de $58-62 a $54-56. 110s y 150s se mantienen en $64-65. La corrección indica que el flush primaveral está entrando al mercado, presionando los calibres más pequeños que son los de mayor volumen. Para Belher: señal de urgencia para maximizar embarques limón en los próximos días." },
    { cat:"Regulatorio",  titulo:"EU enforces new packaging rules from August 2026 — exportadores a Europa deben preparar cumplimiento en próximos 4 meses", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr", resumen:"La Unión Europea activará regulaciones de empaque actualizadas a partir de agosto 2026 que afectarán a todos los exportadores de produce fresca. Los cambios incluyen restricciones en plásticos de un solo uso y requisitos de etiquetado. Para exportadores mexicanos como Belher que eventualmente diversifiquen hacia mercados europeos, y para Corbel Seeds como compañía de semillas con relaciones en Europa, es una regulación a monitorear de cerca." },
    { cat:"Logística",    titulo:"Freight rate volatility rises — aún bajo niveles Covid pero incertidumbre logística persiste para perecibles", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr", resumen:"HortiDaily reporta que la volatilidad en fletes marítimos sigue elevada, aunque por debajo de los máximos pandémicos. Para exportadores de perecibles refrigerados como Belher, la incertidumbre en costos logísticos complica la planificación de márgenes para WK16-18. Los transportistas spot (CGG, JL, Elogística) pueden reflejar esta volatilidad en cotizaciones de flete." },
    { cat:"Innovación",   titulo:"Windset scales tri-country greenhouse network (Canada-US-Mexico) — competencia directa en producción año redondo", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr", resumen:"Windset profundiza su modelo integrado Canadá-EE.UU.-México con más sistemas LED, datos de producción y balanceo cross-border. Para Belher: señal competitiva — los grandes operadores de GH compiten en consistencia y resiliencia, no solo en volumen. La diferenciación por calidad (PrimusGFS, ToBRFV-HR, merma <2%) se vuelve más crítica." },
    { cat:"Mercado",      titulo:"Port Houston posicionándose como hub de perecibles — implicaciones para corredor Texas-Midwest", impacto:"Moderado", fuente:"Corbel Seeds #0028 · FreshPlaza · 15-Abr", resumen:"Port Houston está invirtiendo en infraestructura de frío, IA y capacidad Gulf-to-Midwest. Para Belher: el corredor Texas (McAllen/Laredo) puede ganar relevancia relativa frente a Nogales en WK17-18 para ciertos productos como jalapeño y limón. Evaluar si los embarques a Texas deben incrementarse." },
    { cat:"Fitosanitario", titulo:"Pest pressure y disease cortan yields de tomate GH en Paraná, Brasil — señal regional de oferta ajustada", impacto:"Moderado", fuente:"Corbel Seeds #0028 · HortiDaily · 15-Abr", resumen:"HortiDaily reporta daño de rendimiento en tomates de invernadero en Paraná por presión de plagas y enfermedades. El patrón regional de esta temporada muestra menor rendimiento, mayor costo unitario y precios sostenidos. Para Belher: refuerza el contexto de precios firmes en vine-ripe a nivel global — la oferta de tomate GH está bajo presión en múltiples regiones." },
    { cat:"Mercado",      titulo:"USDA retail cucumber +20% semanal AMS — demanda sostenida refuerza oportunidad de expansión GC 2026-27", impacto:"Moderado", fuente:"Corbel Seeds #0028 · USDA AMS · 15-Abr", resumen:"USDA retail feature report confirma long seedless cucumbers +20% en publicidad esta semana — segunda señal alcista en retail (junto con OTV +43%). Cucumber Nogales $30.95 sostenido. Para Belher: la consistencia del mercado de pepino durante toda la temporada refuerza la recomendación de evaluar expansión del programa cucumber en GC 2026-27." },
    { cat:"Mercado",      titulo:"Roma Nogales XL $36.95–40.95 firme · Jalapeño sostenido $58–60 Texas (sin nueva cotización #0028)", impacto:"Moderado", fuente:"Corbel Seeds #0028 · 15-Abr", resumen:"Roma Nogales XL mantiene $36.95-40.95 por segundo día consecutivo según #0028. Jalapeño: #0028 no reporta cotización FOB US directa; último nivel #0027 fue $58-60/bu Texas. SNIIM México jalapeño $1,500/arpilla 30kg confirma fortaleza en mercado nacional mexicano. Sector hot peppers sigue fuerte con serrano $68-70." }
  ],

  cdc: {
    semanaActual: "WK39",
    fuente: "Aldo Jesús Ávila · capitalhumano@agbelher.com · 24-Mar-2026",
    beltran: {
      nombre: "Lo de Beltrán",
      nota: "trabajadores = personas con Cve_empleado válido en el censo",
      picoTemporada: { sem: "WK36", total: 1196, trabajadores: 715 },
      historico: [
        { sem:"WK19", total:1052, trabajadores:628, acomp:424, pct:59.7 },
        { sem:"WK20", total:1057, trabajadores:610, acomp:447, pct:57.7 },
        { sem:"WK21", total:1117, trabajadores:657, acomp:460, pct:58.8 },
        { sem:"WK22", total:1140, trabajadores:668, acomp:472, pct:58.6 },
        { sem:"WK23", total:1127, trabajadores:659, acomp:468, pct:58.5 },
        { sem:"WK24", total:1120, trabajadores:657, acomp:463, pct:58.7 },
        { sem:"WK25", total:1107, trabajadores:650, acomp:457, pct:58.7 },
        { sem:"WK26", total:1137, trabajadores:660, acomp:477, pct:58.0 },
        { sem:"WK27", total:1111, trabajadores:648, acomp:463, pct:58.3 },
        { sem:"WK28", total:1095, trabajadores:641, acomp:454, pct:58.5 },
        { sem:"WK29", total:1139, trabajadores:674, acomp:465, pct:59.2 },
        { sem:"WK30", total:1120, trabajadores:662, acomp:458, pct:59.1 },
        { sem:"WK31", total:1181, trabajadores:706, acomp:475, pct:59.8 },
        { sem:"WK32", total:1169, trabajadores:696, acomp:473, pct:59.5 },
        { sem:"WK33", total:1170, trabajadores:698, acomp:472, pct:59.7 },
        { sem:"WK34", total:1168, trabajadores:689, acomp:479, pct:59.0 },
        { sem:"WK35", total:1176, trabajadores:696, acomp:480, pct:59.2 },
        { sem:"WK36", total:1196, trabajadores:715, acomp:481, pct:59.8 },
        { sem:"WK37", total:1166, trabajadores:688, acomp:478, pct:59.0 },
        { sem:"WK38", total:1181, trabajadores:693, acomp:488, pct:58.7 },
        { sem:"WK39", total:1156, trabajadores:672, acomp:484, pct:58.1 }
      ]
    },
    dorita: {
      nombre: "Campo Dorita",
      nota: "trabajadores = personas con Cve_empleado válido en el censo",
      picoTemporada: { sem: "WK26", total: 253, trabajadores: 242 },
      historico: [
        { sem:"WK20", total:161,  trabajadores:148, acomp:13,  pct:91.9 },
        { sem:"WK21", total:216,  trabajadores:203, acomp:13,  pct:94.0 },
        { sem:"WK22", total:212,  trabajadores:199, acomp:13,  pct:93.9 },
        { sem:"WK23", total:209,  trabajadores:198, acomp:11,  pct:94.7 },
        { sem:"WK24", total:203,  trabajadores:192, acomp:11,  pct:94.6 },
        { sem:"WK25", total:204,  trabajadores:193, acomp:11,  pct:94.6 },
        { sem:"WK26", total:253,  trabajadores:242, acomp:11,  pct:95.7 },
        { sem:"WK27", total:207,  trabajadores:196, acomp:11,  pct:94.7 },
        { sem:"WK28", total:208,  trabajadores:197, acomp:11,  pct:94.7 },
        { sem:"WK29", total:236,  trabajadores:222, acomp:14,  pct:94.1 },
        { sem:"WK30", total:238,  trabajadores:222, acomp:16,  pct:93.3 },
        { sem:"WK31", total:218,  trabajadores:203, acomp:15,  pct:93.1 },
        { sem:"WK32", total:214,  trabajadores:200, acomp:14,  pct:93.5 },
        { sem:"WK33", total:226,  trabajadores:210, acomp:16,  pct:92.9 },
        { sem:"WK34", total:227,  trabajadores:207, acomp:20,  pct:91.2 },
        { sem:"WK35", total:228,  trabajadores:208, acomp:20,  pct:91.2 },
        { sem:"WK36", total:219,  trabajadores:199, acomp:20,  pct:90.9 },
        { sem:"WK37", total:214,  trabajadores:194, acomp:20,  pct:90.7 },
        { sem:"WK38", total:217,  trabajadores:195, acomp:22,  pct:89.9 },
        { sem:"WK39", total:206,  trabajadores:187, acomp:19,  pct:90.8 }
      ]
    },
    proyeccion: {
      fuente: "Depto. Producción · Plan Inicial Temporada 2025–2026 · Actualizar con datos reales",
      semanas: [
        { sem:"WK19", beltran:1080, dorita:0,   total:1080 },
        { sem:"WK20", beltran:1130, dorita:185,  total:1315 },
        { sem:"WK21", beltran:1185, dorita:235,  total:1420 },
        { sem:"WK22", beltran:1230, dorita:242,  total:1472 },
        { sem:"WK23", beltran:1250, dorita:242,  total:1492 },
        { sem:"WK24", beltran:1270, dorita:248,  total:1518 },
        { sem:"WK25", beltran:1290, dorita:252,  total:1542 },
        { sem:"WK26", beltran:1310, dorita:262,  total:1572 },
        { sem:"WK27", beltran:1320, dorita:258,  total:1578 },
        { sem:"WK28", beltran:1310, dorita:253,  total:1563 },
        { sem:"WK29", beltran:1330, dorita:263,  total:1593 },
        { sem:"WK30", beltran:1340, dorita:268,  total:1608 },
        { sem:"WK31", beltran:1360, dorita:263,  total:1623 },
        { sem:"WK32", beltran:1370, dorita:263,  total:1633 },
        { sem:"WK33", beltran:1380, dorita:263,  total:1643 },
        { sem:"WK34", beltran:1390, dorita:260,  total:1650 },
        { sem:"WK35", beltran:1380, dorita:258,  total:1638 },
        { sem:"WK36", beltran:1370, dorita:253,  total:1623 },
        { sem:"WK37", beltran:1330, dorita:243,  total:1573 },
        { sem:"WK38", beltran:1300, dorita:238,  total:1538 },
        { sem:"WK39", beltran:1260, dorita:228,  total:1488 }
      ]
    }
  },

  calavoWeekly: {
    semana:      "WK16",
    fechas:      "12–18 Abr 2026",
    fuente:      "Carlos Valadez · Calavo Growers · Settle WK16 · 15-Abr-2026",
    actualizado: "17/04/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 26.67, prevClose: 27.68, cambio: -1.01, cambioPct: -3.65,
        h52: 28.72, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · close 16-Abr-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 13.78, prevClose: 14.70, cambio: -0.92, cambioPct: -6.26,
        h52: 15.53, l52: 9.88, volumen: null,
        fuente: "Yahoo Finance · close 16-Abr-2026"
      }
    ],

    correos: [
      {
        fecha: "13/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Canceled: Weekly Tomato Meeting — viajando Viva Expo San Antonio · update al final de semana",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene cancela reunión semanal Teams del 13/04 (viajando a Viva Expo San Antonio). Mensaje a Antonio & JC: 'Will be traveling - Viva Expo San Antonio. Will send update at the end of week.' Sin Tomato Weekly Update WK15/WK16 disponible. Pendiente recibir el viernes 17-Abr o lunes 20-Abr."
      },
      {
        fecha: "07/04/2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher",
        asunto: "Re: Settle WK12 — confirmación recibo Gass Sheet WK15",
        tipo: "settlement", nivel: "success",
        resumen: "Leima a Carlos Valadez (17:45): 'Gracias Carlos. Buen día.' Confirma recibo del Gass Sheet WK15 (2026 05-04 Agricola Belher Settle WK15 1.xlsx). Cierre del ciclo de seguimiento settlement WK13-WK15."
      },
      {
        fecha: "07/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Gass Sheet -Belher WK 15 — reporte hasta semana 14",
        tipo: "reporte", nivel: "success",
        resumen: "Irene envía a Antonio y JC (16:25): 'Adjunto esta el reporte hasta la semana 14. Estoy al pendiente para cualquier pregunta o duda.' Archivo adjunto: '2026 05-04 Agricola Belher Settle WK15 1.xlsx' (664KB). Contiene ventas/liquidación Belher actualizado al 05-Abr-2026. WK14 completo + WK15 parcial."
      },
      {
        fecha: "07/04/2026", de: "Carlos Valadez", cargo: "Settlement Coordinator · Calavo",
        asunto: "RE: Settle WK12 — reporte Belher actualizado al 4/5/2026 semana 15",
        tipo: "reporte", nivel: "success",
        resumen: "Carlos a Leima (cc: Irene) a las 16:11: 'Buen día, anexo te envío reporte de Belhel actualizado al día 4/5/2026 semana 15, cualquier duda nos dejas saber.' Mismo archivo Excel adjunto. Confirma proceso de settlement activo — datos completos al día 5 de abril."
      },
      {
        fecha: "06/04/2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher",
        asunto: "Re: Settle WK12 — 'De acuerdo Irene, esperamos para mañana'",
        tipo: "settlement", nivel: "info",
        resumen: "Leima confirma a Irene Amezaga (23:47 del 06-Abr): 'De acuerdo Irene, esperamos para mañana.' Respuesta a confirmación de Irene de enviar el settlement HOY 07-Abr después de la 1pm."
      },
      {
        fecha: "06/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Re: Settle WK12 — 'cerres de fracturas pendientes, envío mañana después de la 1pm'",
        tipo: "settlement", nivel: "warning",
        resumen: "Irene Amezaga (23:20 del 06-Abr, cc: Carlos Valadez, JC): 'Estoy Esperando unos cerres de fracturas para enviar el archivo completo, nos Tenemos que esperar Hasta manana despues de la 1:00 de la tarde.' Settlement WK13 + Tomato Weekly Update comprometidos para 07-Abr >1pm."
      },
      {
        fecha: "06/04/2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher",
        asunto: "Re: Settle WK12 — seguimiento a Carlos Valadez por reporte del jueves 02-Abr",
        tipo: "settlement", nivel: "info",
        resumen: "Leima a Carlos Valadez (cc: Irene, JC): 'Favor de compartir reporte de ventas actualizado de Belher, acordamos lo enviarán los jueves y está pendiente el del jueves 02 de abril.' Irene respondió en lugar de Carlos con la confirmación del envío para el 07-Abr."
      },
      {
        fecha: "01/04/2026", de: "Carlos Valadez", cargo: "Settlement Coordinator · Calavo",
        asunto: "RE: 2026 15-03 Agricola Belher Settle WK12 18 Mar 2026.xlsx",
        tipo: "settlement", nivel: "info",
        resumen: "Carlos confirma: 'estaremos enviando el archivo los jueves ya que se capturan todas las ventas de la semana y el reporte a este día está más completo.' Settlement WK13 esperado jueves 03-Abr — no recibido. Próximo jueves: 09-Abr. Sin embargo Irene intervino directamente comprometiendo envío el 07-Abr."
      },
      {
        fecha: "31/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "RE: Canceled: Weekly Tomato Meeting — WK13 update by end of week",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene confirma: 'Yes I will send to both by end of week.' Reunión semanal Teams cancelada. Reporte WK13 Tomato Weekly Update prometido antes del fin de semana — no recibido al 06-Abr. Ahora comprometido para 07-Abr >1pm."
      },
      {
        fecha: "25/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Week 12 Tomato Weekly Update 2026",
        tipo: "reporte", nivel: "info",
        resumen: "Reporte semanal WK12 adjunto. Belher: 488 pallets · 40 cargas · 67,840 pkgs. Rounds +7% vs proyectado; Roma +20%."
      }
    ],

    alertas: [
      { nivel: "success", texto: "WK16 SETTLE RECIBIDO 15-Abr: $1,101,951 · 38,067 pkgs · 24 cargas · FOB $28.95/cj. POR LIQUIDAR acumulado: $720,391 — crece cada semana." },
      { nivel: "success", texto: "WK15 CONFIRMADO: $2,144,379 · 53,976 pkgs · FOB $39.72/cj real (proyección $28.50 superada +39.7%). WK01–WK16 acumulado: $15,992,424 · 818,324 pkgs." },
      { nivel: "warning", texto: "Tomato Weekly Update WK15/WK16 pendiente — Irene viajó a Viva Expo San Antonio. Desglose rounds/roma WK16 no disponible todavía." },
      { nivel: "danger", texto: "CVGW $26.67 (-3.65%) · AVO $13.78 (-6.26%) close 16-Abr — corrección sectorial segundo día. Monitorear señal de debilidad en cadena de valor." }
    ],

    kpi: {
      pallets: null, loads: 24, pkgs: 38067,
      fobPromedio: 28.95, fobAnterior: 39.72, pkgsAnterior: 53976,
      revenueWk: 1101951, revenueAnt: 2144379,
      nota: "WK16 — Settle 15-Abr: $1,101,951 / 38,067 pkgs = $28.95/cj. WK15 anterior: $2,144,379 / 53,976 = $39.72/cj (confirmado). Pallets pendiente Tomato Weekly Update."
    },

    belher: {
      rounds: { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      roma:   { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      total:  { proyectado: null, actual: null, loads: 24, pkgs: 38067,
                nota: "WK16 desde Settle 15-Abr — desglose rounds/roma pendiente Tomato Weekly Update Irene" }
    },

    adm: {
      nombre: "Agrícola Don Memo",
      rounds: { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740,  diffPct: -43 },
      roma:   { proyectado: 0,   actual: 0,   loads: 0,  pkgs: 0,     diffPct: 0,  sinPrograma: true },
      total:  { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740 }
    },

    ventas: [
      { variedad: "Rounds / Vine Ripe", avg: null,  recibido: null,  nota: "Desglose pendiente Tomato Weekly Update" },
      { variedad: "Roma 25lb",          avg: null,  recibido: null,  nota: "Desglose pendiente Tomato Weekly Update" },
      { variedad: "TOTAL WK16",         avg: 28.95, recibido: 38067, nota: "Settle 15-Abr: $1,101,951 / 38,067 pkgs" }
    ],

    usdaRef: {
      fecha: "23/03/2026",
      nota: "Precios promedio realizados WK12 (Calavo Market Avg Price) — precio neto que recibe Belher antes de P&P",
      precios: [
        { producto: "Rounds 2LYR",    zona: "Nogales/McAllen", min: 22.95, max: 24.95 },
        { producto: "Rounds 25lb",    zona: "Nogales/McAllen", min: 24.95, max: 26.95 },
        { producto: "Rounds 25lb",    zona: "Texas",           min: 20.95, max: 26.95 },
        { producto: "Roma JB/XL",     zona: "Nogales/McAllen", min: 18.95, max: 20.95 },
        { producto: "Roma JB/XL",     zona: "Texas",           min: 18.95, max: 20.95 },
        { producto: "Roma LG",        zona: "Nogales/Texas",   min: 16.95, max: 16.95 },
        { producto: "Roma MD",        zona: "Nogales/Texas",   min: 14.95, max: 16.95 }
      ]
    },

    toy: {
      recibido: [
        { mes: "Dic", y2024: 20635,  y2025: 6607,   prevLabel: "2024", currLabel: "2025" },
        { mes: "Ene", y2025: 237541, y2026: 214493, prevLabel: "2025", currLabel: "2026", diffPct: -10.7 },
        { mes: "Feb", y2025: 289068, y2026: 295953, prevLabel: "2025", currLabel: "2026", diffPct: 2.3  }
      ],
      pricing: [
        { mes: "Dic", yPrev: 19.89, yCurr: 11.06, prevLabel: "2024", currLabel: "2025" },
        { mes: "Ene", yPrev: 11.10, yCurr: 12.23, prevLabel: "2025", currLabel: "2026" },
        { mes: "Feb", yPrev:  9.83, yCurr: 14.43, prevLabel: "2025", currLabel: "2026" }
      ]
    },

    noticias: [
      {
        fecha: "01/04/2026", categoria: "Precio", impacto: "Alto",
        fuente: "Corbel Seeds #0018",
        titulo: "Grape tomato +53% recuperación a $28.95-30.95/flat — corrección del -30% fue temporal",
        resumen: "Grape tomato revierte la caída de la semana previa en una sola sesión. El mercado premium de mini-tomate mantiene alta sensibilidad a cambios de oferta."
      },
      {
        fecha: "01/04/2026", categoria: "Precio", impacto: "Alto",
        fuente: "Corbel Seeds #0018",
        titulo: "Jalapeño Texas $53-55/bu — rebote desde $48-50 confirma escasez estructural",
        resumen: "La caída de $10 resultó ser pausa temporal. Oferta en Zacatecas/Sonora no se recuperó lo suficiente para sostener niveles bajos."
      },
      {
        fecha: "01/04/2026", categoria: "Precio", impacto: "Alto",
        fuente: "Corbel Seeds #0018",
        titulo: "Limón persa Texas en pico estacional: 200s $66-68, 175s $68-70 por carton (USDA Citrus 01-Abr)",
        resumen: "Precios máximos de temporada. Báscula Belher activa con limón el 01, 02 y 06-Abr. Merma 1% en outbound 06-Abr."
      },
      {
        fecha: "01/04/2026", categoria: "Logística", impacto: "Alto",
        fuente: "Corbel Seeds #0018",
        titulo: "Fletes aéreos +95% y Brent >$108/bbl — presión de costos histórica en cadena de perecibles",
        resumen: "Costos logísticos en máximos por conflicto en Ormuz. Exportadores de perecibles bajo máxima presión de margen."
      },
      {
        fecha: "01/04/2026", categoria: "Regulatorio", impacto: "Alto",
        fuente: "Corbel Seeds #0018",
        titulo: "Florida mantiene presión por aranceles a produce mexicana — USMCA revisión 1-Jul-2026 activa",
        resumen: "Suprema Corte falló sobre aranceles. Industria produce se ajusta. Legisladores de Florida no ceden en iniciativas de tarifas estacionales."
      }
    ],

    discrepancias: [
      {
        titulo:    "Spread FOB Belher vs Mercado",
        belher:    "$20.07 / caja WK12 avg (Rounds $21.37 · Roma $18.41)",
        mercado:   "$25.95 / caja Calavo Market Avg (Rounds 25lb Nogales $24.95–26.95)",
        diferencia:"$5.88 · margen ~22.7% sobre precio Calavo realizado",
        nota:      "El spread Belher/mercado en settlement es ~$5-6 por caja sobre precio Calavo realizado (comisión Calavo 12%, freight, Z-code, anti-dumping 17.5%). Precio Calavo realizado WK12 ~$25-27 — muy por debajo del FOB USDA de mercado abierto $38-44 en esas fechas. Diferencia atribuible al contrato precio-fijo $16.95 base.",
        alerta:    false
      },
      {
        titulo:    "P&P Rate WK12",
        belher:    "$5.00 / caja (contrato addendum)",
        mercado:   "$240,000 / 48,000 cajas = $5.00",
        diferencia:"$0.00 ✓",
        nota:      "La liquidación P&P coincide exactamente con el rate del addendum firmado. El contrato 2026 en borrador debe confirmar este rate.",
        alerta:    false
      },
      {
        titulo:    "Volumen: pkgs vs cajas liquidadas",
        belher:    "67,840 pkgs (Calavo Weekly WK12)",
        mercado:   "48,000 cajas (P&P liquidado WK12)",
        diferencia:"−19,840 unidades",
        nota:      "Diferencia estructural normal: Calavo Weekly reporta 'packages' (22 lbs) y la liquidación P&P va por cajas estándar (25 lbs). La equivalencia es ~0.71 caja/pkg. Validar: 67,840 × 0.71 ≈ 48,167 cajas ✓.",
        alerta:    false
      },
      {
        titulo:    "Revenue bruto vs venta neta",
        belher:    "$9,770,259 bruto Calavo export WK01–WK12",
        mercado:   "$6,564,451 venta neta (33% de deducciones)",
        diferencia:"−$3,205,808 (32.8%)",
        nota:      "Deducciones: comisión $1.17M + Z-code $1.05M + anti-dumping $0.98M. Ratio neto/bruto = 67.2%. Benchmark industria: 60–70%. Belher está en el rango esperado.",
        alerta:    false
      }
    ],

    /* Desglose semanal: FOB bruto → Deducciones → Liquidación neta
       Fuente: Gass Sheet WK15 · Overview Payments → Weekly Liquidations
       comision=22%FOB total (incluye gastos logísticos ~10% + ganancia neta Calavo ~12%) · pp=$5/caja fijo · gastos=Z-code+otros · loan=amortización */
    liquidaciones: [
      { sem:"WK01", pkgs:10824,  fob:127737,   comision:28102,  pp:54120,   gastos:19843, loan:5412,  liq:20260  },
      { sem:"WK02", pkgs:24280,  fob:255896,   comision:56297,  pp:121400,  gastos:42363, loan:12100, liq:23736  },
      { sem:"WK03", pkgs:44385,  fob:495284,   comision:108963, pp:221925,  gastos:86497, loan:22192, liq:55708  },
      { sem:"WK04", pkgs:48608,  fob:624488,   comision:137387, pp:243040,  gastos:79198, loan:24303, liq:140560 },
      { sem:"WK05", pkgs:61320,  fob:942051,   comision:207251, pp:306600,  gastos:100125,loan:30482, liq:297592 },
      { sem:"WK06", pkgs:86576,  fob:1245692,  comision:274052, pp:432880,  gastos:150188,loan:42752, liq:345819 },
      { sem:"WK07", pkgs:89264,  fob:1103258,  comision:242717, pp:446320,  gastos:155545,loan:43053, liq:215624 },
      { sem:"WK08", pkgs:59544,  fob:807878,   comision:177733, pp:297720,  gastos:96190, loan:29454, liq:206781 },
      { sem:"WK09", pkgs:43120,  fob:738537,   comision:162478, pp:215600,  gastos:68040, loan:21560, liq:270859 },
      { sem:"WK10", pkgs:69920,  fob:1928398,  comision:424248, pp:349600,  gastos:102627,loan:33880, liq:1018043},
      { sem:"WK11", pkgs:69800,  fob:1428197,  comision:314203, pp:349000,  gastos:104022,loan:34019, liq:626953 },
      { sem:"WK12", pkgs:48000,  fob:928429,   comision:204254, pp:240000,  gastos:70394, loan:23280, liq:390501 },
      { sem:"WK13", pkgs:40048,  fob:890284,   comision:195862, pp:200240,  gastos:59152, loan:17836, liq:417193 },
      { sem:"WK14", pkgs:30592,  fob:762704,   comision:167795, pp:152960,  gastos:43649, loan:10360, liq:387940 },
      { sem:"WK15", pkgs:53976,  fob:2144379,  comision:471763, pp:269880,  gastos:81313, loan:18832, liq:1302591, nota:"CONFIRMADO WK16 settle — anterior era parcial" },
      { sem:"WK16", pkgs:38067,  fob:1101951,  comision:242429, pp:190335,  gastos:55614, loan:5780,  liq:607793,  nota:"CRUCE DEUDA — amort acum $6,679,418 > deuda $5,959,027" }
    ],

    prediccionBolsa: [
      {
        simbolo: "CVGW", empresa: "Calavo Growers",
        tendencia: "bajista",
        precioActual: 26.67,
        precioObj90d: 29.00,
        riesgoBajo: 22.00,
        confianza: 52,
        razonamiento: "CVGW $26.67 (-3.65% vs prev close $27.68, close 16-Abr). Tercera sesión consecutiva bajista: desde $28.06 el 15-Abr, $26.64 el 15-Abr, $27.68 cierre intermedio, $26.67 el 16-Abr. La acción permanece bajo zona de soporte $27. AVO también cae -6.26% el mismo día — presión sectorial persistente. Sin catalizador positivo inmediato visible; CAPE portal 20-Abr podría ser neutral o marginalmente positivo. Fundamentales de temporada siguen sólidos con vine-ripe firme.",
        factores: ["CVGW $26.67 (-3.65% close 16-Abr) — tercera sesión de presión consecutiva", "AVO -6.26% mismo día $13.78 — movimiento sectorial produce amplio continúa", "Vine-ripe Nogales $55.95-60.95 (#0028) — fundamentales Q2 siguen positivos", "Soporte técnico $25.50-26 — zona clave no quebrada aún", "CAPE tariff-refund portal abre 20-Abr — posible catalizador sectorial menor"]
      },
      {
        simbolo: "AVO", empresa: "Mission Produce",
        tendencia: "bajista",
        precioActual: 13.78,
        precioObj90d: 16.00,
        riesgoBajo: 11.50,
        confianza: 48,
        razonamiento: "AVO $13.78 (-6.26% vs prev close $14.70, close 16-Abr). La recuperación parcial desde el mínimo del 15-Abr ($13.75) resultó efímera — volvió a caer el 16-Abr. Patrón de distribución activo cerca de zona $14. Soporte inmediato en $13.50 crítico. Para Belher: debilidad sostenida de AVO refuerza la posición relativa de Calavo en el sector. Si AVO rompe $13.50, podría testear $12.50.",
        factores: ["AVO $13.78 (-6.26% close 16-Abr) — sin recuperación sostenida tras mínimo del 15-Abr", "Soporte $13.50 siendo testeado — ruptura activaría caída hacia $12.50", "Recuperación desde mínimos $9.88 válida en perspectiva de año completo", "Sector produce bajo presión: CVGW -3.65% mismo día — correlación activa", "Fundamentales aguacate estacionales: Q2/Q3 usualmente fuertes para AVO"]
      }
    ]
  },

  pronostico: {
    generado: "25/03/2026",
    semanas: [
      {
        semana: "WK13", fechas: "24–29 Mar",
        productos: [
          { producto:"Tomate Bola",    hectareas:18, estimadoCajas:4200, confianza:80, tendencia:"alcista",  nota:"Pico de cosecha Sectores 3 y 4. Precio FOB sostenido $18–20." },
          { producto:"Tomate Roma",    hectareas:12, estimadoCajas:2800, confianza:75, tendencia:"lateral",  nota:"Producción estable. Competencia Sinaloa presiona precio." },
          { producto:"Limón Persa",    hectareas:8,  estimadoCajas:1600, confianza:70, tendencia:"alcista",  nota:"Temporada alta Arizona. FOB en subida en Nogales." },
          { producto:"Chile Jalapeño", hectareas:5,  estimadoCajas:900,  confianza:65, tendencia:"lateral",  nota:"Inicio de cosecha. Volumen bajo esta semana." }
        ]
      },
      {
        semana: "WK14", fechas: "31 Mar–5 Abr",
        productos: [
          { producto:"Tomate Bola",    hectareas:16, estimadoCajas:3800, confianza:65, tendencia:"bajista",  nota:"Descenso por fin de ciclo Sector 3. Transición a Roma." },
          { producto:"Tomate Roma",    hectareas:14, estimadoCajas:3200, confianza:70, tendencia:"alcista",  nota:"Roma gana participación. Calidad proyectada alta." },
          { producto:"Limón Persa",    hectareas:8,  estimadoCajas:1800, confianza:68, tendencia:"alcista",  nota:"Demanda sostenida Nogales. Stock bajo en canal." },
          { producto:"Chile Jalapeño", hectareas:6,  estimadoCajas:1200, confianza:60, tendencia:"alcista",  nota:"Rampa de producción. Precio AZ mejora." }
        ]
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     CAADES / CIDH — Resumen de Inventarios, Embarques y Pipeline
     Fuente: mariajose@cidh.org.mx · diario (días hábiles)
     Secciones del reporte:
       1. Inventarios en Nogales (Bola + Roma + Chile)
       2. Pipeline (en tránsito · Campo Abierto vs Invernadero)
       3. Totales acumulados de temporada
     ══════════════════════════════════════════════════════ */
  caades: {
    fuente:       "CAADES/CIDH · mariajose@cidh.org.mx",
    temporada:    "2025-2026",
    ultimoReporte: null,   /* "Reporte # XX: DD-mes-YYYY" */
    actualizado:  null,

    /* Últimos 5 días — orden cronológico ascendente (índice 0 = más antiguo, -1 = hoy) */
    inventario: [
      /* Ejemplo de estructura — el agente de update llena esto diario:
      {
        fecha: "DD/MM/YYYY",
        bola:        { total: N, cincoySeis: N, pct: N },
        roma:        { total: N, cincoySeis: N, pct: N },
        totalTomate: { total: N, cincoySeis: N, pct: N },
        chile:       { pallets: N, paquetes: N }
      }
      */
    ],

    /* Pipeline — en tránsito hacia Nogales */
    pipeline: [
      /* Ejemplo:
      {
        fecha: "DD/MM/YYYY",
        bola:  { campoAbierto: N, invernadero: N, otros: N, total: N },
        roma:  { campoAbierto: N, invernadero: N, otros: N, total: N },
        chile: { total: N },
        limon: { total: N },
        totalGeneral: N
      }
      */
    ],

    /* Totales acumulados de temporada (cajas) */
    totalesTemporada: [
      /* Ejemplo:
      { fecha: "DD/MM/YYYY", t1: N, t2: N, t3: N, totalGeneral: N }
      */
    ]
  }
};
