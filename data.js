window.BELHER = {
  meta: {
    fecha: "Jueves 09 Abr 2026",
    semana: "WK 15",
    actualizado: "09/04/2026 · 13:20"
  },

  alertas: [
    { nivel: "success", texto: "Vine-ripe $57.95–59.95 (4×4/4×5 Nogales) — NUEVO MÁXIMO TEMPORADA. Corbel #0024 · 09-Abr: mercado US firm, tight supply en cruceros mexicanos. Jalapeño rebota a $50–53 (+$10 desde $40–42). EMBARCAR todo el volumen disponible." },
    { nivel: "danger",  texto: "Bola Tolin merma 30.18% (07/04) — CRÍTICO: primera 28.59%. Variedad posiblemente inviable para exportación en estado actual. Evaluar urgente manejo postcosecha, estrés de campo, o suspender empaque Tolin para exportación." },
    { nivel: "danger",  texto: "Bola Calavo merma 6.20% (07/04) + Bola ERGO merma 4.64% (08/04) — deterioro calidad en Bolas WK15 (Calavo dias:2 prom 4.78%, Yameto 4.71%). Revisar manejo postcosecha, temperatura campo-empaque y protocolo de selección." },
    { nivel: "success", texto: "CVGW $27.97 (+1.2% 08-Abr) · AVO $15.36 (+3.2% 08-Abr) — sector produce en fuerte momentum. CVGW sigue acercándose a máximo 52s ($28.72). Señal de demanda institucional sostenida." },
    { nivel: "danger",   texto: "URGENTE: Solicitar a Calavo (Irene Amezaga / Carlos Valadez) el desglose 'Gross FOB by item' del Gass Sheet para verificar precio de referencia del contrato. Sin este dato no es posible auditar el escalador ($16.95 base + $4 collar desde $20.95). Escalar hoy mismo." },
    { nivel: "success",  texto: "WK14 REAL: 57,760 pkgs recibidos (676 pallets · 34 cargas) — Rounds +44% vs proyectado · Roma +121% vs proyectado · avg FOB mkt $39.34/cj · settle 30,592 pkgs · $762,704." },
    { nivel: "success",  texto: "Liquidaciones WK01–WK15 cargadas desde Gass Sheet 05-Abr · FOB total $12.87M · 780,257 pkgs · WK15 settle parcial $597,772 (en curso). Confirmar wire WK15 ($269,880)." },
    { nivel: "success", texto: "Trilla sorgo WK15: Dorita+El 17 (31-Mar, 18 ha) + Carrillo (06-Abr, 12 ha) + Carrillo+Campo Beltrán+El Dos (07-Abr, 18 ha) + El Dos+Álamo (08-Abr, 19 ha) = 67 ha cosechadas. El Panteón+San Blas pendientes." }
  ],

  ebitda: {
    mes:  { nombre: "Febrero 2026", actual: 2891480, budget: 2305940, yago: 488398 },
    ytd:  { nombre: "Jul–Feb 2026", actual: -3761987, budget: -4124108, yago: -7496875 }
  },

  revenue: {
    total:    16732676,
    fob:      12876606,
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
      saldo: 2873787,
      nota: "Incluye anticipo capital ($6M), intereses, balance temporada anterior. Wire semanal = amortización — liquidación real inicia ~WK18."
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
      calavo:        2873787,
      bancos:        4340000,
      proveedores:   7160000,
      impuestos:     1144712,
      subtotal:     15518499,
      anticiposNac:   561938,
      total:        16080437
    }
  },

  calavo: {
    revenueTotal:  12876606,
    /* ESTRUCTURA DE COMISIÓN — ACTUALIZADO:
       Calavo cobra 22% de comisión total sobre el FOB.
       De ese 22%, ~10% son gastos reales (flete, inspecciones frontera, Z-code, etc.)
       y el ~12% restante es la ganancia neta de Calavo.
       NO hay anti-dumping reembolsable — el 22% es comisión definitiva. */
    comision:            2832853,   /* 22% total — comisión Calavo (incluye gastos logísticos) */
    comisionPct:             0.22,
    zCode:           1248911,
    ventaNeta:      8794842,
    pickPack:       3901285,
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

       Estado WK15 (08-Abr-2026):
         Amortizado: $4,535,768  (75.6%)
         Pendiente:  $1,464,232  (~3.2 semanas al ritmo WK11-WK14)
         Estimado cruce a $0: WK18 (semana del 28-Abr-2026)               */
    deudaCalavo: {
      total:           6000000,
      anticipo:        5000000,   /* 4 × $1.25M — May 15, Jun 15, Jul 15, Ago 15 de 2025 */
      prestamoPuente:  1000000,   /* préstamo puente temporada anterior */
      pagosAnticipo: [
        { fecha:"15-May-2025", monto:1250000, tipo:"Anticipo", estado:"Recibido" },
        { fecha:"15-Jun-2025", monto:1250000, tipo:"Anticipo", estado:"Recibido" },
        { fecha:"15-Jul-2025", monto:1250000, tipo:"Anticipo", estado:"Recibido" },
        { fecha:"15-Ago-2025", monto:1250000, tipo:"Anticipo", estado:"Recibido" },
        { fecha:"Temp. 2025",  monto:1000000, tipo:"Puente",   estado:"Recibido" }
      ],
      amortizadoWk15:  4535768,   /* suma columna "liq" WK01–WK15 — actualizar con cada settle */
      pendiente:       1464232,   /* 6,000,000 - amortizado — actualizar con cada settle */
      avgLiq_wk11_14:   455647,   /* promedio semanal WK11-WK14 para proyección */
      semanasEstimadas:      3,   /* semanas estimadas para cruzar $0 al ritmo actual */
      cruceEstimado:  "WK18",     /* semana donde Belher empieza a recibir efectivo real */
      cruceEstimadoFecha: "28-Abr-2026"
    },
    capitalTrabajo: 6000000,      /* = deudaCalavo.total */
    prestamo:        472037,
    saldoAnterior:   655867,
    saldoActual:   -2873787,
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
      { sem:"WK15", wire:"08-Abr", pago:269880,  cajas:53976, cont:33, estado:"Actual"   }
    ]
  },

  calidad: {
    semana: {
      desde: "06/04/2026",
      hasta:  "12/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:83.17, segunda:4.94,  tercera:7.13, merma:4.78, peso:24.11, dias:2, alerta:true  },
        { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:82.39, segunda:7.12,  tercera:5.79, merma:4.71, peso:30.85, dias:2, alerta:true  },
        { nombre:"Bola Tolin",      etiqueta:"Tolin",      canal:"exportacion", primera:28.59, segunda:9.96,  tercera:31.26, merma:30.18, peso:33.06, dias:1, alerta:true  },
        { nombre:"Bola ERGO",       etiqueta:"ERGO",       canal:"exportacion", primera:85.38, segunda:4.31,  tercera:5.68, merma:4.64, peso:26.34, dias:1, alerta:true  },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:88.18, segunda:5.57,  tercera:4.19, merma:2.05, peso:26.30, dias:3, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:88.16, segunda:6.11,  tercera:3.22, merma:2.52, peso:26.51, dias:3, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:86.67, segunda:6.00,  tercera:3.78, merma:3.56, peso:27.37, dias:1, alerta:false },
        { nombre:"Limón Persa",     etiqueta:"Limón",      canal:"exportacion", primera:15,    segunda:47,    tercera:13,   merma:1,    peso:40.35, dias:1, alerta:false },
        { nombre:"Chile Anaheim",   etiqueta:"Anaheim",    canal:"exportacion", primera:85.96, segunda:13.10, tercera:0,    merma:0.81, peso:22.47, dias:1, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK09", primaPromedio:86.20, mermaPromedio:4.10 },
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:89.20, mermaPromedio:2.82 },
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:82.24, mermaPromedio:5.31, nota:"Días 1-4: 04/04·5vars, 06/04·3vars, 07/04·4vars, 08/04·1var. Bola Tolin 07/04 merma 30.18% — outlier crítico." }
    ],
    ultimoOutbound: {
      fecha: "08/04/2026",
      variedades: [
        { nombre:"Bola ERGO",     etiqueta:"ERGO",     canal:"exportacion", primera:85.38, segunda:4.31,  tercera:5.68, merma:4.64, peso:26.34, alerta:true  },
        { nombre:"Chile Anaheim", etiqueta:"Anaheim",  canal:"exportacion", primera:85.96, segunda:13.10, tercera:0,    merma:0.81, peso:22.47, alerta:false }
      ],
      anterior: {
        fecha: "07/04/2026",
        variedades: [
          { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:78.50, segunda:5.90, tercera:9.40, merma:6.20, peso:21.38, alerta:true  },
          { nombre:"Bola Tolin",      etiqueta:"Tolin",      canal:"exportacion", primera:28.59, segunda:9.96, tercera:31.26, merma:30.18, peso:33.06, alerta:true  },
          { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:82.80, segunda:9.00, tercera:4.40, merma:3.80, peso:27.33, alerta:false },
          { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:90.50, segunda:4.83, tercera:3.17, merma:1.50, peso:25.76, alerta:false }
        ]
      }
    }
  },

  tomate: {
    ventas: {
      periodo: { desde:"01/12/2025", hasta:"05/04/2026", label:"WK01–WK15" },
      total:   { cajas:1272957, cajasRoma:null, cajasBola:null, revenue:null },
      exportacion: [
        { etiqueta:"Calavo", cajas:826841, cajasRoma:null, cajasBola:null, revenue:null, nota:"WK01–WK15 al 05-Abr · P&P settle $3,901,285" }
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
      { sem:"WK01", fob:11.80, usda:null,  tipo:"real", nota:"10,824 pkgs · $127,737" },
      { sem:"WK02", fob:10.57, usda:null,  tipo:"real", nota:"24,280 pkgs · $255,896" },
      { sem:"WK03", fob:11.16, usda:null,  tipo:"real", nota:"44,385 pkgs · $495,284" },
      { sem:"WK04", fob:12.85, usda:null,  tipo:"real", nota:"48,606 pkgs · $624,488" },
      { sem:"WK05", fob:15.45, usda:null,  tipo:"real", nota:"60,965 pkgs · $942,051" },
      { sem:"WK06", fob:14.55, usda:null,  tipo:"real", nota:"85,593 pkgs · $1,245,692" },
      { sem:"WK07", fob:12.72, usda:null,  tipo:"real", nota:"86,722 pkgs · $1,103,258" },
      { sem:"WK08", fob:13.69, usda:null,  tipo:"real", nota:"58,995 pkgs · $807,878" },
      { sem:"WK09", fob:17.13, usda:null,  tipo:"real", nota:"43,120 pkgs · $738,537" },
      { sem:"WK10", fob:27.58, usda:null,  tipo:"real", nota:"69,920 pkgs · $1,928,398 — pico de temporada" },
      { sem:"WK11", fob:20.46, usda:26.28, tipo:"real", nota:"69,798 pkgs · $1,428,197" },
      { sem:"WK12", fob:19.34, usda:29.62, tipo:"real", nota:"48,000 pkgs · $928,429" },
      { sem:"WK13", fob:22.23, usda:43.75, tipo:"real", nota:"40,048 pkgs · $890,284" },
      { sem:"WK14", fob:24.93, usda:47.95, tipo:"real", nota:"Settle: 30,592 pkgs · $762,704 · Recibido total semana: 57,760 pkgs (676 pallets · 34 cargas) · Rounds +44% vs proy · Roma +121% vs proy · avg FOB mkt $39.34/cj · size mix 20% 45+ / 80% 55 & smaller" },
      { sem:"WK15", fob:28.50, usda:58.95, tipo:"proyectado", nota:"FOB proyectado por IA — settle parcial al 05-Abr ($11.07/caja preliminar, no representativo). Mkt WK15: vine-ripe $57.95–59.95, Roma $32.95–38.95 (Nogales 08-Abr). Ratio FOB/mkt WK13–14 ≈ 50–52% → proyección $28.50. Se actualizará con liquidación final Calavo." }
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
      nota:              "Temporada de granos en curso. TRILLA WK15: Dorita+El 17 (31-Mar, 18 ha) + Carrillo (06-Abr, 12 ha) + Carrillo+Campo Beltrán+El Dos (07-Abr, 18 ha) + El Dos+Álamo (08-Abr, 19 ha) = 67 ha cosechadas. El Panteón+San Blas pendientes. Sin ventas registradas a febrero — producción en cosecha activa. Costos WIP incluyen fertilizantes, semilla, agroquímicos y mano de obra de campo.",
      trilla: [
        { fecha:"31/03/2026", campos:"Dorita + El 17",                       ha:18, cultivo:"Sorgo" },
        { fecha:"06/04/2026", campos:"Carrillo",                             ha:12, cultivo:"Sorgo" },
        { fecha:"07/04/2026", campos:"Carrillo + Campo Beltrán + El Dos",    ha:18, cultivo:"Sorgo" },
        { fecha:"08/04/2026", campos:"El Dos + Álamo",                       ha:19, cultivo:"Sorgo" }
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
    reporte: "Corbel Seeds #0024",
    fecha: "09/04/2026",
    resumen: "USDA Phoenix 08-Abr (Corbel #0024): vine-ripe mexicano sube a $57.95–59.95 (4×4/4×5 Nogales) — nuevo máximo de temporada. Jalapeño rebota fuertemente a $50–53 desde $40–42 (+24%) — recuperación sorpresa tras colapso de la semana previa. Serrano $52–56. Roma baja a $32.95–38.95 (mezcla de tallas). Grape tomato cede a $28.95–30.95. Cucumber Nogales $34.95–36.95. Chile Bell GH (11-lb) $12–16. Limón seeded Texas $38–40 por cartón 35–36 lb; seedless 175s $64–66. Mercado US general: tight supply, higher prices, freight constraints.",
    precios: [
      { producto:"Vine-ripe 4×4/4×5 25lb", min:57.95, max:59.95, anterior:55.95, via:"Nogales AZ",         alerta:false },
      { producto:"Tomate Roma 25lb",        min:32.95, max:38.95, anterior:40.95, via:"Nogales AZ",         alerta:false },
      { producto:"Grape tomato flat",       min:28.95, max:30.95, anterior:30.95, via:"Nogales AZ",         alerta:false },
      { producto:"Chile Bell GH 11-lb",     min:12.00, max:16.00, anterior:46.95, via:"Nogales AZ",         alerta:false },
      { producto:"Jalapeño",                min:50.00, max:53.00, anterior:42.00, via:"Nogales AZ",         alerta:false },
      { producto:"Serrano",                 min:52.00, max:56.00, anterior:null,   via:"Nogales AZ",         alerta:false },
      { producto:"Habanero 8lb",            min:39.00, max:42.00, anterior:40.00, via:"Nogales AZ",         alerta:false },
      { producto:"Cucumber",               min:34.95, max:36.95, anterior:38.95, via:"Nogales AZ",         alerta:false },
      { producto:"Limón seeded 35-36lb",    min:38.00, max:40.00, anterior:null,   via:"Texas",             alerta:false },
      { producto:"Limón seedless 175s",     min:64.00, max:66.00, anterior:null,   via:"Texas",             alerta:false }
    ],
    noticias: [
      { titulo:"Vine-ripe Nogales sube a $57.95–59.95 — nuevo máximo de temporada, mercado US 'firm' con tight supply en cruceros mexicanos", impacto:"Alto", fuente:"Corbel Seeds #0024 · USDA Phoenix 08-Abr" },
      { titulo:"Jalapeño rebota fuertemente a $50–53 desde $40–42 (+24%) — recuperación sorpresa; serrano $52–56; chiles calientes en recuperación sectorial", impacto:"Alto", fuente:"Corbel Seeds #0024 · USDA Phoenix 08-Abr" },
      { titulo:"Peor crisis de oferta de chile en 3 décadas — Bailey Farms: daño por clima en México y Florida; alivio esperado solo cuando cosechas de primavera escalen en mayo", impacto:"Alto", fuente:"Corbel Seeds #0024 · FreshPlaza" },
      { titulo:"Volatilidad del peso complica precios y márgenes para exportadores mexicanos de vegetales — presión en chile bell, cucumber, green beans y hot peppers", impacto:"Alto", fuente:"Corbel Seeds #0024 · FreshPlaza" },
      { titulo:"Cucumber baja a $34.95–36.95 Nogales; grape tomato cede a $28.95–30.95; Roma mezcla de tallas $32.95–38.95", impacto:"Moderado", fuente:"Corbel Seeds #0024 · USDA Phoenix 08-Abr" },
      { titulo:"Cuarentena Mexfly Zapata County Texas vigente — mayor escrutinio fitosanitario en cargamentos mexicanos sigue activo", impacto:"Alto", fuente:"Corbel Seeds #0024 · USDA" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"08/04", productos:["Tomate","Trilla Sorgo"] },
      { fecha:"07/04", productos:["Tomate","Rezaga Tomate","Trilla Sorgo"] },
      { fecha:"06/04", productos:["Tomate","Limón Persa","Trilla Sorgo"] },
      { fecha:"04/04", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"02/04", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"01/04", productos:["Tomate","Limón Persa"] },
      { fecha:"31/03", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"29/03", productos:["Tomate","Rezaga Tomate"] }
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
      { fecha:"07/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-108", destino:"Arizona", estado:"OK" },
      { fecha:"07/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-64",  destino:"Arizona", estado:"OK" },
      { fecha:"07/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-104", destino:"Arizona", estado:"OK" },
      { fecha:"07/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-101", destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-114", destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-100", destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-80",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-19",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-131",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-115",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"AC-26",   destino:"Texas",   estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-111",  destino:"Arizona", estado:"OK" }
    ]
  },

  correos: [
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
    { label:"VINE RIPE 4×4", valor:"$57.95–59.95",  cambio:"↑ NUEVO MÁXIMO TEMPORADA",   dir:"up"      },
    { label:"JALAPEÑO NOG",   valor:"$50–53",        cambio:"↑ +$10 rebote sorpresa",     dir:"up"      },
    { label:"TOMATE ROMA",    valor:"$32.95–38.95", cambio:"mezcla tallas",               dir:"neutral" },
    { label:"CHILE BELL GH",  valor:"$12–16",        cambio:"11-lb carton",               dir:"neutral" },
    { label:"GRAPE TOMATO",   valor:"$28.95–30.95", cambio:"↓ leve -$2",                 dir:"down"    },
    { label:"CUCUMBER NOG",   valor:"$34.95–36.95", cambio:"↓ baja",                     dir:"down"    },
    { label:"MERMA ERGO",     valor:"4.64%",         cambio:"⚠ outbound 08/04",          dir:"down"    },
    { label:"TRILLA SORGO",   valor:"67 ha",         cambio:"WK15 acum · 08-Abr",         dir:"up"      },
    { label:"P&P ACUM WK15",  valor:"$3.90M",        cambio:"780,257 cajas · 458 cont",   dir:"up"      },
    { label:"EBITDA FEB",     valor:"$2.89M",        cambio:"vs BUD $2.31M ✓",            dir:"up"      },
    { label:"GASS SHEET WK15", valor:"✓ Recibido",   cambio:"Irene + Carlos 07-Abr",      dir:"up"      },
    { label:"1ª WK15 PROM",   valor:"82.24%",        cambio:"Días 1-4 · Tolin CRÍTICO",   dir:"down"    },
    { label:"CVGW",           valor:"$27.97",        cambio:"+1.2% 08-Abr",               dir:"up"      },
    { label:"AVO",            valor:"$15.36",        cambio:"+3.2% 08-Abr",               dir:"up"      }
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
        titulo: "Merma elevada en Bolas WK15 — Calavo 4.78% (días 1-2), Yameto 4.71% (días 1-2), ERGO 4.64% (día 1)",
        nivel: "danger",
        descripcion: "Patrón consistente: Bola Calavo 04/04=3.35% + 07/04=6.20% → prom 4.78%. Bola Yameto 04/04≈4.44% + 06/04=4.97% → prom 4.71%. Bola ERGO 08/04=4.64%. Cuatro días consecutivos con merma >4% en Bolas — no es outlier aislado.",
        accion: "Revisar causas de merma en Bolas con equipo de calidad urgente. Verificar manejo postcosecha, temperatura campo-empaque, condición de fruta en campo y clasificación. Con vine-ripe en máximos $57.95-59.95, cada punto de merma es pérdida directa de precio."
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
        titulo: "BPSI: sin ingresos enero 2026, gastos ~$95K MXN/mes",
        nivel: "warning",
        descripcion: "Blondie Producciones reportó $0 ingresos en enero 2026. Gastos operativos continuos. Pendiente resolución por cancelación de cliente.",
        accion: "Definir plan de acción post-reunión BPSI del 16-Abr (F/S Marzo 2026 y Forecast Q2)."
      }
    ],
    proximos: [
      { fecha:"13/04/2026", evento:"Marzo '26 F/S Tomates/Limones/Granos — revisión estados de resultado (10am, jacruz convocó 27-Mar)", tipo:"reunion", participantes:"jacruz · Leima · Antonio · JC · Armando Llanes · Felipe Calderón CRyA" },
      { fecha:"16/04/2026", evento:"BPSI F/S Marzo 2026 y Forecast Q2 2026 — revisión financiera y pipeline", tipo:"reunion", participantes:"JC · Armando Llanes · hildelisa@beautyjunkies.com" },
      { fecha:"21/04/2026", evento:"ABSA CF GC 2025-2026 OL 9+3 actualizado — revisión forecast ciclo cierre (Leima Zoom invitación 30-Mar)", tipo:"reunion", participantes:"Leima Leyva · Armando Llanes · Antonio · JC · jacruz" },
      { fecha:"Por confirmar (Abr 2026)", evento:"Reunión alineación Contrato 2026 — John Lindeman · James Snyder · Irene", tipo:"reunion", participantes:"Antonio, JC, Calavo" }
    ]
  },

  predicciones: {
    generado:  "09/04/2026 · 13:20",
    modelo:    "Claude claude-sonnet-4-6",
    horizonte: "7 días",
    nota:      "Síntesis de precios USDA Phoenix (Corbel Seeds #0024 · 09-Abr) + báscula + calidad outbound tomate 08/04 (Bola ERGO merma 4.64%, Chile Anaheim merma 0.81%) + trilla sorgo 08/04 (El Dos+Álamo 19 ha) + noticias de industria. Se regenera automáticamente cada mañana.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "alcista",
        confianza: 75,
        precio_actual:     { min: 57.95, max: 59.95 },
        precio_proyectado: { min: 54.00, max: 62.00 },
        razonamiento: "Vine-ripe alcanza nuevo máximo de temporada: USDA Phoenix 08-Abr (Corbel #0024) reporta 4×4/4×5 en $57.95-59.95. El mercado US sigue 'firm' con tight supply en cruceros mexicanos y freight constraints. La tendencia es continuación de la escasez transitoria en ventana Salinas — volumen mexicano todavía corto antes de que la oferta californiana esté plenamente operativa. Outbound 08/04 Bola ERGO: merma 4.64% (alerta). Priorizar Romas (mejor merma) y reducir Bolas con merma elevada.",
        factores: ["USDA Phoenix 08-Abr confirma nuevo máximo $57.95-59.95 — continuación alcista", "Peor crisis de chile en 3 décadas (Bailey Farms) — tight supply general en vegetales mexicanos", "Bola ERGO merma 4.64% outbound 08/04 — calidad Bolas en riesgo, priorizar Romas", "Cuarentena Mexfly Zapata County TX activa — escrutinio fitosanitario elevado", "Jalapeño rebota a $50-53 — señal de mercado en recuperación sectorial"],
        riesgo: "Si Salinas consolida oferta en WK16-17, corrección técnica a $52-55 posible. Merma elevada en Bolas puede erosionar precio neto.",
        accion: "EMBARCAR TODO el volumen disponible — vine-ripe en nuevo máximo $57.95-59.95. Priorizar Romas (mejor merma). Disciplina fitosanitaria Mexfly crítica en manifiestos. La ventana es corta."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb XL · Nogales AZ",
        tendencia: "lateral",
        confianza: 65,
        precio_actual:     { min: 38.95, max: 40.95 },
        precio_proyectado: { min: 37.00, max: 42.00 },
        razonamiento: "Roma XL se mantiene en $38.95-40.95 Nogales (Corbel #0018). La calidad mejora notablemente: Roma Calavo promedio WK15 merma 1.89% (días 1-2 promedio: 04/04 2.14% + 06/04 1.63%). Roma Millennium promedio WK15 merma 2.33%. La estabilización de precio coincide con mejora de calidad — señal positiva para sostener volumen y precio.",
        factores: ["Precio estable 2 semanas — mercado en equilibrio sin catalizadores", "Roma Calavo merma en recuperación: promedio WK15 1.89% — excelente", "Salinas afecta también Roma, pero con menor intensidad que vine-ripe", "Demanda constante del canal foodservice/pizzerías"],
        riesgo: "Si calidad Roma Calavo regresa a merma >4%, riesgo de rechazo o descuento de precio.",
        accion: "Mantener ritmo de embarques Roma. Priorizar Roma Calavo (en recuperación) y Roma Millennium. Seguimiento diario de outbound."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · Texas",
        tendencia: "alcista",
        confianza: 68,
        precio_actual:     { min: 50.00, max: 53.00 },
        precio_proyectado: { min: 46.00, max: 56.00 },
        razonamiento: "Jalapeño rebota fuertemente a $50-53 Nogales (Corbel #0024, 09-Abr) desde $40-42 de la semana previa — recuperación de +$10/bu (+24%) en una sesión. La peor crisis de oferta de chile en 3 décadas (Bailey Farms, FreshPlaza) sostiene el precio: daño por clima en México y Florida, alivio esperado solo cuando cosechas de primavera escalen en mayo. Habanero también recupera a $39-42 y serrano se mantiene en $52-56. La baja de la semana previa resultó temporal — el mercado de chiles sigue estructuralmente corto.",
        factores: ["Jalapeño rebota +$10 a $50-53 — recuperación sectorial confirmada", "Peor crisis de oferta de chile en 3 décadas (Bailey Farms) — fundamentales alcistas", "Serrano $52-56 · habanero $39-42 · chiles calientes todos en recuperación", "Alivio de oferta esperado solo en mayo cuando cosechas de primavera escalen", "Alta volatilidad estructural: rango WK13-WK15 fue $40-60"],
        riesgo: "Si cosechas de primavera México/Sonora entran con más volumen del esperado en WK16, nueva corrección bajista posible. Volatilidad muy alta.",
        accion: "Si hay jalapeño o chiles calientes disponibles, el momento de embarcar es ahora — $50-53 con fundamentales de oferta ajustados. Rango probable WK16: $46-55. Cuarentena Mexfly Texas — disciplina fitosanitaria crítica para chiles."
      },
      {
        id: "bell",
        producto: "Chile Bell GH",
        unidad: "carton XL · Nogales AZ",
        tendencia: "alcista",
        confianza: 75,
        precio_actual:     { min: 44.95, max: 46.95 },
        precio_proyectado: { min: 44.00, max: 49.00 },
        razonamiento: "Chile Bell GH (green XL Nogales) registra $44.95-46.95 (Corbel #0018, 01-Abr) — ligero upward desde el $44.95 plano de semanas previas. Quinta semana consecutiva de estabilidad/fortaleza. En un contexto donde vine-ripe bajó desde su pico y jalapeño corrigió duramente, bell pepper GH mantuvo su precio y ahora muestra tendencia alcista suave. Señal de equilibrio real de mercado sostenido por demanda retail premium inelástica.",
        factores: ["Quinta semana consecutiva de fortaleza — equilibrio real, no coyuntural", "Leve upward breakout desde $44.95 plano — nuevo rango $44.95-46.95", "Corrección generalizada de otros productos no afectó bell → diferenciación confirmada", "México dominante en bell GH USMCA sin sustituto disponible en este período"],
        riesgo: "Nueva producción en invernaderos norteños podría incrementar oferta en WK15-17.",
        accion: "Mantener programa bell GH a máxima capacidad. Considerar expansión seria en GC 2026-27 — señal de mercado más sólida y consistente que cualquier otro producto este ciclo."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "FOB Texas / Arizona",
        tendencia: "alcista",
        confianza: 65,
        precio_actual:     { min: 38.00, max: 66.00 },
        precio_proyectado: { min: 36.00, max: 66.00 },
        razonamiento: "Corbel #0024 (09-Abr) reporta limón seeded Texas $38-40 por cartón 35-36 lb, seedless 175s $64-66. El reporte SNIIM para CDMX muestra limón #5 Michoacán en MXN 550 por caja 20 kg (~MXN 27.5/kg). Menos volumen mexicano sigue siendo el driver estructural — Colombia está entrando con +15-30% de exportaciones Tahiti lime para llenar el hueco. Outbound 06/04 Belher: merma 1%, calidad excelente.",
        factores: ["Seeded Texas $38-40/cartón 35-36 lb (Corbel #0024 · USDA 08-Abr)", "Seedless 175s Texas $64-66 — premium por calibre y seedless", "Colombia incrementa +15-30% exportaciones para compensar escasez mexicana", "SNIIM CDMX: limón #5 Michoacán MXN 27.5/kg — mercado nacional firme", "Merma 1% outbound Belher 06-Abr — calidad excelente"],
        riesgo: "Mayor oferta estacional en abril-mayo (flush primaveral) puede presionar precios en WK16-17. Colombia ganando participación de mercado.",
        accion: "Maximizar embarques de limón mientras el precio está sostenido. Coordinar con Maui Fresh forecast para resto de abril. Monitorear USDA Nogales para confirmar FOB local por talla."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Vine-ripe Nogales sube a $57.95–59.95 — nuevo máximo de temporada, mercado US 'firm' con tight supply",                  impacto:"Alto",     fuente:"Corbel Seeds #0024 · USDA Phoenix 08-Abr", resumen:"USDA Phoenix 08-Abr (Corbel #0024) confirma vine-ripe mexicano en $57.95-59.95 (4×4/4×5 25-lb loose). Roma $32.95-38.95 dependiendo de talla. Grape tomato $28.95-30.95/flat. El mercado US sigue firm con tight supply, active trading y freight constraints. Para Belher: ventana de precio en máximos históricos — embarcar todo el volumen disponible." },
    { cat:"Mercado",      titulo:"Jalapeño rebota a $50–53 (+24%) — peor crisis de chile en 3 décadas; serrano $52–56, habanero $39–42",                  impacto:"Alto",     fuente:"Corbel Seeds #0024 · FreshPlaza", resumen:"Jalapeño se recupera de $40-42 a $50-53 Nogales en una sesión. Bailey Farms describe la situación actual como la peor crisis de oferta de peppers en tres décadas tras daño climático en México y Florida. Alivio esperado solo cuando cosechas de primavera escalen en mayo. Serrano $52-56, habanero $39-42/8lb. Chiles calientes en recuperación sectorial." },
    { cat:"Mercado",      titulo:"Peso mexicano bajo presión — volatilidad complica precios y márgenes de exportación de vegetales",                       impacto:"Alto",     fuente:"Corbel Seeds #0024 · FreshPlaza", resumen:"Debilidad del peso, inflación y señales macroeconómicas adversas están complicando la gestión de precios y márgenes para exportadores mexicanos de vegetales. Precios elevados en chile bell, cucumber, green beans y hot peppers en el mercado US. Para Belher: el diferencial cambiario puede mejorar el margen en MXN pero complica comparaciones FOB históricas en USD." },
    { cat:"Fitosanitario", titulo:"Cuarentena Mexfly Zapata County Texas activa — escrutinio fitosanitario elevado en cargamentos mexicanos",              impacto:"Alto",     fuente:"Corbel Seeds #0024 · USDA", resumen:"La cuarentena Mexfly (55 millas cuadradas) en Zapata County sigue activa. No hay agricultura comercial dentro del área pero el hallazgo eleva la sensibilidad fitosanitaria en cruce fronterizo Laredo/McAllen. Mayor escrutinio de manifiestos y cargamentos mexicanos. Disciplina fitosanitaria Belher: crítica." },
    { cat:"Mercado",      titulo:"Cucumber Nogales baja a $34.95–36.95; grape tomato $28.95–30.95; Bell GH 11-lb $12–16 por carton",                     impacto:"Moderado", fuente:"Corbel Seeds #0024 · USDA Phoenix 08-Abr", resumen:"Cucumber Nogales corrige a $34.95-36.95 (vs $36.95-38.95 prev). Grape tomato cede a $28.95-30.95/flat. Chile Bell GH (11-lb cartons) $12-16 dependiendo de color y talla — diferente unidad que el carton XL histórico. Tomatillo $28-30/bushel. Seeded limes Texas $38-40/35-36lb carton; seedless 175s $64-66." },
    { cat:"Comercio",     titulo:"Australia–UE eliminará aranceles en frutas y vegetales — cambio estructural en acceso a mercados premium globales",       impacto:"Moderado", fuente:"Corbel Seeds #0024 · HortiDaily", resumen:"El nuevo TLC Australia-UE eliminará aranceles sobre varios vegetales (cebolla, zanahoria, papa) y mejorará el acceso para otros productos frescos. Una vez ratificado, puede remodelar flujos comerciales en horticultura de alto valor. Para exportadores mexicanos a EE.UU.: señal de que la presión competitiva global en produce seguirá aumentando." },
    { cat:"Comercio",     titulo:"EAEU abre ventanas de importación libre de aranceles para vegetales seleccionados — intervención política ante escasez",  impacto:"Moderado", fuente:"Corbel Seeds #0024 · FreshPlaza", resumen:"La Comisión Económica Euroasiática aprobó cuotas temporales libres de arancel para cebollas, brócoli, coliflor, pepinos, pimientos, berenjena y tomate. Respuesta directa a presión de oferta fuera de temporada. Señal de que los gobiernos globales están interviniendo activamente en mercados de vegetales frescos." },
    { cat:"Sanidad",      titulo:"Tomate en crisis global de oferta — España paga €3/kg en origen, Bélgica en máximos, Marruecos dañado por tormenta",    impacto:"Moderado", fuente:"Corbel Seeds #0024 · FreshPlaza", resumen:"España reporta precios de tomate nunca vistos en Almería (pera ~€3/kg). Bélgica (subasta VBT) con sueltos >€3/kg y truss ~€2.79/kg. Marruecos reporta daño severo post-tormenta febrero en Souss-Massa. La crisis global de tomate es el contexto que sostiene los precios mexicanos en máximos." },
    { cat:"Agua",         titulo:"Yuma: agricultores esperan acuerdo de agua del Río Colorado — riesgo estructural para vegetales de invierno de EE.UU.", impacto:"Moderado", fuente:"Corbel Seeds #0024 · FreshPlaza", resumen:"Productores de Yuma monitorean negociaciones de asignación de agua del Colorado. La base de vegetales de invierno de la región depende de flujos confiables. El riesgo hídrico es una de las mayores amenazas estructurales para los vegetales de invierno de EE.UU. — lo que crea ventana comercial sostenida para productores mexicanos con acceso a agua." }
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
    semana:      "WK14",
    fechas:      "23–29 Mar 2026",
    fuente:      "Carlos Valadez + Irene Amezaga · Calavo Growers · Gass Sheet WK15",
    actualizado: "08/04/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 27.97, prevClose: 27.63, cambio: 0.34, cambioPct: 1.23,
        h52: 28.72, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · 08-Abr-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 15.36, prevClose: 14.89, cambio: 0.47, cambioPct: 3.16,
        h52: 15.36, l52: 9.60, volumen: null,
        fuente: "Yahoo Finance · 08-Abr-2026"
      }
    ],

    correos: [
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
      { nivel: "success", texto: "Liquidaciones WK01–WK15 actualizadas · FOB total $12.87M · 780,257 pkgs. WK15 settle parcial al 05-Abr ($597,772 · 53,976 pkgs) — precio por caja $11.07, settle final pendiente." },
      { nivel: "warning", texto: "Contrato 2026 pendiente — borrador recibido 13-Mar con cambios. Reunión de alineación con John Lindeman y James Snyder por confirmar." },
      { nivel: "success", texto: "WK12 sobre proyección: Rounds +7% · Roma +20%. FOB promedio $20.07 vs $18.06 WK11 (+11%)." },
      { nivel: "success", texto: "CVGW $27.97 (+1.23%) · AVO $15.36 (+3.16%) — sector produce en fuerte momentum (08-Abr). CVGW cerca de máximos de 52 semanas ($28.72 techo). AVO en nuevo máximo 52s $15.36." }
    ],

    kpi: {
      pallets: null, loads: 18, pkgs: 30592,
      fobPromedio: 24.93, fobAnterior: 22.23, pkgsAnterior: 40048,
      nota: "WK14 — loads/pkgs de settle WK15 (Carlos+Irene 07-Abr). FOB = rev/pkgs ($762,704/30,592). Pallets pendiente en Tomato Weekly Update."
    },

    belher: {
      rounds: { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      roma:   { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      total:  { proyectado: null, actual: null, loads: 18, pkgs: 30592,
                nota: "WK14 desde settle WK15 — desglose rounds/roma pendiente Tomato Weekly Update" }
    },

    adm: {
      nombre: "Agrícola Don Memo",
      rounds: { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740,  diffPct: -43 },
      roma:   { proyectado: 0,   actual: 0,   loads: 0,  pkgs: 0,     diffPct: 0,  sinPrograma: true },
      total:  { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740 }
    },

    ventas: [
      { variedad: "Rounds / Vine Ripe", avg: 21.37, recibido: 28806 },
      { variedad: "Roma 25lb",          avg: 18.41, recibido: 16727 }
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
      { sem:"WK15", pkgs:53976,  fob:597772,   comision:131510, pp:269880,  gastos:71079, loan:7104,  liq:118199 }
    ],

    prediccionBolsa: [
      {
        simbolo: "CVGW", empresa: "Calavo Growers",
        tendencia: "alcista",
        precioActual: 27.97,
        precioObj90d: 29.50,
        riesgoBajo: 22.00,
        confianza: 62,
        razonamiento: "CVGW cierra $27.97 (+1.23% vs prev close $27.63, 08-Abr). Acción continúa probando zona de máximos de 52 semanas ($28.72). Momentum sectorial sostenido: AVO también sube +3.16% en la misma sesión. El riesgo arancelario USMCA 1-Jul-2026 y la renegociación del contrato Belher son factores de incertidumbre. Precio objetivo 90 días: $29.50 si mercado de hortalizas se estabiliza y aranceles no se materializan.",
        factores: ["Vine-ripe en máximo temporada $55.95-57.95 — impulsa márgenes Q2 Calavo", "Riesgo arancelario USMCA podría reducir volumen exportado de socios mexicanos", "Acción en zona de resistencia técnica $28.72 (máximo 52s) — posible toma de utilidades", "Sector produce con momentum amplio: AVO +3.16% misma sesión"]
      },
      {
        simbolo: "AVO", empresa: "Mission Produce",
        tendencia: "alcista",
        precioActual: 15.36,
        precioObj90d: 16.50,
        riesgoBajo: 11.50,
        confianza: 57,
        razonamiento: "AVO alcanza nuevo máximo de 52 semanas $15.36 (+3.16% vs prev close $14.89, 08-Abr). La recuperación continúa sostenida desde mínimos de $9.60. Para Belher: Mission Produce puede servir como palanca de negociación en renovaciones contractuales con Calavo.",
        factores: ["Nuevo máximo 52 semanas $15.36 — señal de momentum alcista sostenido", "Recuperación aguacate impulsa múltiplos del sector", "Potencial competidor/alternativa a Calavo — palanca de negociación Belher", "Alta concentración en aguacate, menor exposición al ciclo tomate"]
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
  }
};
