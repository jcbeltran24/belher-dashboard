window.BELHER = {
  meta: {
    fecha: "Martes 07 Abr 2026",
    semana: "WK 15",
    actualizado: "07/04/2026 · 10:45"
  },

  alertas: [
    { nivel: "danger",  texto: "Settlement WK13 Calavo — Leima siguió a Carlos Valadez el 06-Abr. Próximo envío estimado: jueves 09-Abr. Sin respuesta confirmada al 07-Abr." },
    { nivel: "danger",  texto: "WK13 Tomato Weekly Update — Irene Amezaga: reporte con más de 9 días de retraso (prometió 'end of week' 31-Mar). Sin reporte al 07-Abr. Seguimiento urgente." },
    { nivel: "warning", texto: "Declaración Anual 2025 Belher — presentada con resultado a pagar en acuerdo con Despacho Terrazas. Monto definitivo pendiente. Revisar en reunión Dashboard con Leima HOY 07-Abr (11am)." },
    { nivel: "success", texto: "WK15 arranca con operaciones: báscula 04-Abr (Tomate + Rezaga), outbound tomate 04-Abr y outbound limón persa 06-Abr recibidos. Merma tomate Bola Calavo 3.35% — bajo umbral 4%." },
    { nivel: "success", texto: "Calidad WK14 cierre: merma promedio semana 3.69% — por debajo del umbral crítico 4.0%. Outbound tomate 04-Abr: Bola Calavo 1ª 87.83%, Roma Calavo 1ª 90.54% — excelente." }
  ],

  ebitda: {
    mes:  { nombre: "Febrero 2026", actual: 2891480, budget: 2305940, yago: 488398 },
    ytd:  { nombre: "Jul–Feb 2026", actual: -3761987, budget: -4124108, yago: -7496875 }
  },

  revenue: {
    total:    13626329,
    fob:       9770259,
    nacional:  3856070
  },

  calavo: {
    revenueTotal:   9770259,
    comision:       1172431,
    zCode:          1052986,
    antiDumping:     980391,
    ventaNeta:      6564451,
    pickPack:       3278205,
    prestamo:        472037,
    intereses:        32128,
    capitalTrabajo: 5000000,
    saldoAnterior:   655867,
    saldoActual:   -2873787,
    neto:           6564451,
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
      { sem:"WK12", wire:"15-Mar", pago:240000, cajas:48000, cont:29, estado:"Actual"   },
      { sem:"WK13", wire:"~09-Abr",pago:null,   cajas:null,  cont:null,estado:"Pendiente"}
    ]
  },

  calidad: {
    semana: {
      desde: "06/04/2026",
      hasta:  "12/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:87.83, segunda:3.98, tercera:4.85, merma:3.35, peso:26.84, dias:1, alerta:false },
        { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:83.81, segunda:6.08, tercera:5.67, merma:4.44, peso:30.68, dias:1, alerta:true  },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:87.58, segunda:5.06, tercera:5.17, merma:2.19, peso:27.49, dias:1, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:90.54, segunda:4.19, tercera:3.13, merma:2.14, peso:27.15, dias:1, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:86.67, segunda:6.00, tercera:3.78, merma:3.56, peso:27.37, dias:1, alerta:false },
        { nombre:"Limón Persa",     etiqueta:"Limón",      canal:"exportacion", primera:15,    segunda:47,   tercera:13,   merma:1,    peso:40.35, dias:1, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK09", primaPromedio:86.20, mermaPromedio:4.10 },
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:89.20, mermaPromedio:2.82 },
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:87.28, mermaPromedio:3.14, nota:"Día 1 — outbound tomate 04/04 · 5 variedades" }
    ],
    ultimoOutbound: {
      fecha: "04/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:87.83, segunda:3.98, tercera:4.85, merma:3.35, peso:26.84, alerta:false },
        { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:83.81, segunda:6.08, tercera:5.67, merma:4.44, peso:30.68, alerta:true  },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:90.54, segunda:4.19, tercera:3.13, merma:2.14, peso:27.15, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:87.58, segunda:5.06, tercera:5.17, merma:2.19, peso:27.49, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:86.67, segunda:6.00, tercera:3.78, merma:3.56, peso:27.37, alerta:false }
      ],
      anterior: {
        fecha: "06/04/2026",
        variedades: [
          { nombre:"Limón Persa", etiqueta:"Limón", canal:"exportacion", primera:15, segunda:47, tercera:13, merma:1, peso:40.35, alerta:false }
        ]
      }
    }
  },

  tomate: {
    ventas: {
      periodo: { desde:"01/12/2025", hasta:"22/03/2026", label:"WK01–WK12" },
      total:   { cajas:1148341, cajasRoma:533667, cajasBola:614674, revenue:13626329 },
      exportacion: [
        { etiqueta:"Calavo", cajas:702225, cajasRoma:null, cajasBola:null, revenue:9770259 }
      ],
      nacional: [
        { etiqueta:"Nacional", cajas:446116, cajasRoma:311917, cajasBola:134199, revenue:3856070 }
      ]
    }
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
      nota:              "Temporada de granos en curso. Cosecha sorgo activa: El 17 (12 ha, 01-Abr). Trilla Dorita+El 17 (18 ha, 31-Mar) completada. El Panteón+San Blas en proceso. Sin ventas registradas a febrero — producción en proceso de cosecha. Costos WIP incluyen fertilizantes, semilla, agroquímicos y mano de obra de campo."
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
      semana_actual_promedio:  29,
      fecha_actualizacion:     "26/03/2026"
    },

    contratos: [
      { mes:"Marzo", cajas_contrato:229000, cajas_spot:0,      precio_contrato:16.95, escalador_desde:20 },
      { mes:"Abril",  cajas_contrato:220000, cajas_spot:173000, precio_contrato:16.95, escalador_desde:20 }
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
    reporte: "Corbel Seeds #0018",
    fecha: "01/04/2026",
    resumen: "Apertura sólida de abril: grape tomato recupera +53% a $28.95-30.95/flat tras corrección extrema de semana previa. Jalapeño rebota a $53-55 Texas — la caída de $10 resultó temporal, escasez estructural persiste. Limón persa Texas en pico estacional: $66-68 para 200s, $68-70 para 175s. Vine-ripe y Roma estables en segundo semana consecutiva. México mantiene control del mercado norteamericano bajo presión múltiple: peso débil, fletes aéreos +95% y riesgo arancelario USMCA vigente al 1-Jul-2026.",
    precios: [
      { producto:"Vine-ripe 4×4 25lb",     min:46.95, max:48.95, anterior:50.95, via:"Nogales AZ",         alerta:false },
      { producto:"Tomate Roma 25lb (XL)",   min:38.95, max:40.95, anterior:40.95, via:"Nogales AZ",         alerta:false },
      { producto:"Grape tomato flat",       min:28.95, max:30.95, anterior:20.95, via:"Nogales AZ",         alerta:true  },
      { producto:"Chile Bell GH (XL)",      min:44.95, max:46.95, anterior:44.95, via:"Nogales AZ",         alerta:false },
      { producto:"Jalapeño",                min:53.00, max:55.00, anterior:50.00, via:"Texas",              alerta:true  },
      { producto:"Habanero 8lb",            min:44.00, max:47.00, anterior:null,   via:"Texas",              alerta:false },
      { producto:"Cucumber",                min:40.95, max:42.95, anterior:44.95, via:"Nogales AZ",         alerta:false },
      { producto:"Limón Persa 40lb",        min:56.00, max:70.00, anterior:44.00, via:"Texas (175s–250s)",  alerta:true  },
      { producto:"Limón Persa flat 200ct",  min:58.00, max:65.00, anterior:58.00, via:"LA Terminal Market", alerta:false }
    ],
    noticias: [
      { titulo:"Grape tomato recupera +53% a $28.95-30.95/flat (12-pint) — corrección extrema de -30% de semana previa resultó temporal", impacto:"Alto",     fuente:"Corbel Seeds #0018" },
      { titulo:"Jalapeño Texas rebota a $53-55/bu desde $48-50 — escasez subyacente confirma que la caída fue pausa, no reversión", impacto:"Alto",           fuente:"Corbel Seeds #0018" },
      { titulo:"Limón persa Texas en pico estacional: 200s $66-68, 175s $68-70, 230s $62-66 por carton 40lb", impacto:"Alto",                                  fuente:"Corbel Seeds #0018" },
      { titulo:"Fletes aéreos +95% y Brent >$108/bbl — cadena de perecibles bajo máxima presión de costos logísticos", impacto:"Alto",                        fuente:"Corbel Seeds #0018" },
      { titulo:"Legisladores Florida refuerzan aranceles estacionales a produce mexicana — revisión USMCA 1-Jul-2026 en curso", impacto:"Alto",               fuente:"Corbel Seeds #0018" },
      { titulo:"Vine-ripe y Roma estables 2ª semana en $46.95-48.95 y $38.95-40.95 — México domina abasto norteamericano bajo múltiples presiones", impacto:"Moderado", fuente:"Corbel Seeds #0018" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"06/04", productos:["Limón Persa"] },
      { fecha:"04/04", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"02/04", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"01/04", productos:["Tomate","Limón Persa"] },
      { fecha:"31/03", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"29/03", productos:["Tomate","Rezaga Tomate"] }
    ],
    embarques: [
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-114", destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-100", destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-80",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-19",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-131",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-115",  destino:"Arizona", estado:"OK" },
      { fecha:"06/04/2026", tipo:"Tomate", cargas:1, unidad:"AC-26",   destino:"Texas",   estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-111",  destino:"Arizona", estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-93",   destino:"Arizona", estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-97",   destino:"Arizona", estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-64",   destino:"Arizona", estado:"OK" },
      { fecha:"04/04/2026", tipo:"Tomate", cargas:1, unidad:"JL-44",   destino:"Arizona", estado:"OK" }
    ]
  },

  correos: [
    { hora:"21:00", asunto:"06-04-2026 REPORTES GENERALES (empaque y embarque)",                                  de:"EMBARQUES BELHER",          leido:false, fecha:"06/04" },
    { hora:"20:08", asunto:"BILL, MANIFIESTO MCALLEN (Texas) · AC-26",                                            de:"EMBARQUES BELHER",          leido:false, fecha:"06/04" },
    { hora:"19:57", asunto:"BILL, MANIFIESTO NOGALES CGG · CGG-19 · CGG-80 · CGG-100 · CGG-114",                 de:"EMBARQUES BELHER",          leido:false, fecha:"06/04" },
    { hora:"18:52", asunto:"BILL, MANIFIESTO NOGALES JL · JL-115 · JL-131",                                       de:"EMBARQUES BELHER",          leido:false, fecha:"06/04" },
    { hora:"12:16", asunto:"REPORTE DE OUTBOUND DE LIMON PERSA DEL 06/04/2026 — 1ª 15%, 2ª Export 47%, merma 1%",de:"Calidad Belher",            leido:false, fecha:"06/04" },
    { hora:"10:37", asunto:"REPORTE DE OUTBOUND TOMATE 04/04/2026 — Bola Calavo 1ª 87.83%, Roma Calavo 1ª 90.54%",de:"Calidad Belher",           leido:false, fecha:"06/04" },
    { hora:"09:47", asunto:"Re: Settle WK12 — seguimiento settlement WK13 a Carlos Valadez",                      de:"Leima Leyva · Administración",leido:false, fecha:"06/04" },
    { hora:"23:58", asunto:"04-04-2026 REPORTES GENERALES (empaque y embarque)",                                  de:"EMBARQUES BELHER",          leido:false, fecha:"04/04" },
    { hora:"23:41", asunto:"BILL, MANIFIESTO NOGALES CGG · CGG-12 · CGG-16 · CGG-26 · CHARLY-3",                 de:"EMBARQUES BELHER",          leido:false, fecha:"04/04" },
    { hora:"22:38", asunto:"BILL, MANIFIESTO NOGALES JL · JL-44 · LC-43",                                         de:"EMBARQUES BELHER",          leido:false, fecha:"04/04" },
    { hora:"21:51", asunto:"BILL, MANIFIESTO MCALLEN (Texas) · JL-13",                                            de:"EMBARQUES BELHER",          leido:false, fecha:"04/04" },
    { hora:"21:49", asunto:"BILL, MANIFIESTO NOGALES ST · ST-111 · ST-64 · ST-97 · ST-93",                        de:"EMBARQUES BELHER",          leido:false, fecha:"04/04" },
    { hora:"23:00", asunto:"REPORTE DE BASCULA 04/04/2026 (REZAGA DE TOMATE)",                                    de:"Bascula Belher",            leido:false, fecha:"04/04" },
    { hora:"18:10", asunto:"REPORTE DE BASCULA 04/04/2026 (TOMATE)",                                              de:"Bascula Belher",            leido:false, fecha:"04/04" },
    { hora:"10:43", asunto:"REPORTE DE OUTBOUND TOMATE Y CHILE 02/04/2026",                                       de:"Calidad Belher",            leido:false, fecha:"04/04" },
    { hora:"19:54", asunto:"Re: Anual 2025 — Declaración presentada con resultado a pagar (pendiente montos)",    de:"jacruz · Antonio Cruz",     leido:false, fecha:"03/04" },
    { hora:"23:12", asunto:"02-04-2026 REPORTES GENERALES LIMON",                                                 de:"EMBARQUES BELHER",          leido:false, fecha:"02/04" },
    { hora:"23:06", asunto:"02-04-2026 REPORTES GENERALES TOMATE",                                                de:"EMBARQUES BELHER",          leido:false, fecha:"02/04" },
    { hora:"13:25", asunto:"REPORTE DE OUTBOUND DE LIMON PERSA DEL 02/04/2026",                                   de:"Calidad Belher",            leido:false, fecha:"02/04" },
    { hora:"18:00", asunto:"RE: 2026 15-03 Agricola Belher Settle WK12 — envíos settlement los jueves",           de:"Carlos Valadez · Calavo",   leido:false, fecha:"01/04" }
  ],

  ticker: [
    { label:"VINE RIPE 4×4", valor:"$46.95–48.95",  cambio:"lateral 2ª semana",       dir:"neutral" },
    { label:"TOMATE ROMA XL", valor:"$38.95–40.95",  cambio:"lateral",                 dir:"neutral" },
    { label:"JALAPEÑO TX",    valor:"$53–55",         cambio:"↑ rebote +$5",            dir:"up"      },
    { label:"CHILE BELL GH",  valor:"$44.95–46.95",  cambio:"↑ leve",                  dir:"up"      },
    { label:"GRAPE TOMATO",   valor:"$28.95–30.95",  cambio:"↑ +53% recuperación",     dir:"up"      },
    { label:"CUCUMBER NOG",   valor:"$40.95–42.95",  cambio:"↓ leve",                  dir:"down"    },
    { label:"VENTA NETA",     valor:"$6.56M",        cambio:"Calavo WK12",             dir:"up"      },
    { label:"SALDO CALAVO",   valor:"-$2.87M",       cambio:"WK13 pendiente",          dir:"down"    },
    { label:"EBITDA FEB",     valor:"$2.89M",        cambio:"vs BUD $2.31M ✓",         dir:"up"      },
    { label:"SETTLE WK13",    valor:"pendiente",     cambio:"Leima siguiendo 06-Abr",  dir:"neutral" },
    { label:"1ª PRIMERA WK15",valor:"87.83%",        cambio:"04-Abr Bola Calavo ↑",    dir:"up"      },
    { label:"MERMA LIMÓN",    valor:"1.00%",         cambio:"06-Abr WK15 día 1",       dir:"up"      },
    { label:"CVGW",           valor:"$27.24",        cambio:"+3.2% 04-Abr",            dir:"up"      },
    { label:"AVO",            valor:"$14.44",        cambio:"+3.6% 04-Abr",            dir:"up"      }
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
        descripcion: "Corbel #0018 (01-Abr): limón persa Texas en $56-70/carton según calibre (200s: $66-68, 175s: $68-70). Báscula Belher activa con limón el 01 y 02-Abr. Outbound 02-Abr: merma 0%, exportación 80%. Maui Fresh como comprador sólido.",
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
        titulo: "Declaración Anual 2025 — resultado a pagar pendiente",
        nivel: "danger",
        descripcion: "Auditoría Belher no terminó revisión antes del 31-Mar. Presentada con 'resultado a pagar' en acuerdo con Despacho Terrazas (jacruz · 01-Abr). Monto definitivo pendiente confirmación. Armando Llanes solicitó compartir fecha y montos.",
        accion: "Esperar confirmación de jacruz con fecha y monto del pago. Prever impacto en flujo de caja. Revisar con Leima en sesión del 07-Abr."
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
      },
      {
        titulo: "Plaga Tizón: agroquímicos $147K sobre budget acumulado",
        nivel: "warning",
        descripcion: "Feb 2026: +$110K en agroquímicos por Tizón. Acumulado Jul-Feb: $147K sobre presupuesto. Tendencia preocupante si persiste.",
        accion: "Evaluar programa preventivo para cierre de temporada."
      }
    ],
    proximos: [
      { fecha:"07/04/2026",   evento:"HOY — Seguimiento Dashboard Belher — sala de juntas 11am–12pm (Leima aceptó 31-Mar). Incluye revisión Declaración Anual 2025 y OL 8+4.", tipo:"reunion",  participantes:"JC · Leima Leyva" },
      { fecha:"09/04/2026",   evento:"Settlement WK13 Calavo — Leima siguió a Carlos Valadez el 06-Abr. Próximo envío estimado: jueves 09-Abr.", tipo:"pago",    participantes:"Leima Leyva · Carlos Valadez · Calavo" },
      { fecha:"Urgente",      evento:"WK13 Tomato Weekly Update — Irene Amezaga: reporte con +8 días de retraso. Pendiente al 06-Abr.", tipo:"reporte",  participantes:"Irene Amezaga · Calavo" },
      { fecha:"13/04/2026",   evento:"Marzo '26 F/S Tomates/Limones/Granos — revisión estados de resultado (10am, jacruz convocó 27-Mar)", tipo:"reunion",  participantes:"jacruz · Leima · Antonio · JC · Armando Llanes · Felipe Calderón CRyA" },
      { fecha:"16/04/2026",   evento:"BPSI F/S Marzo 2026 y Forecast Q2 2026 — revisión financiera y pipeline", tipo:"reunion",  participantes:"JC · Armando Llanes · hildelisa@beautyjunkies.com" },
      { fecha:"21/04/2026",   evento:"ABSA CF GC 2025-2026 OL 9+3 actualizado — revisión forecast ciclo cierre (Leima Zoom invitación 30-Mar)", tipo:"reunion",  participantes:"Leima Leyva · Armando Llanes · Antonio · JC · jacruz" },
      { fecha:"Por confirmar (Abr 2026)", evento:"Reunión alineación Contrato 2026 — John Lindeman · James Snyder · Irene", tipo:"reunion",  participantes:"Antonio, JC, Calavo" }
    ]
  },

  predicciones: {
    generado:  "06/04/2026 · 14:35",
    modelo:    "Claude claude-sonnet-4-6",
    horizonte: "7 días",
    nota:      "Síntesis de precios USDA + Corbel Seeds #0018 (01-Abr) + báscula + calidad outbound tomate 04/04 (Bola Calavo 1ª 87.83%, merma 3.35%) + outbound limón 06/04 (merma 1%, exportación 62%) + noticias de industria. Se regenera automáticamente cada mañana.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "bajista",
        confianza: 65,
        precio_actual:     { min: 46.95, max: 48.95 },
        precio_proyectado: { min: 42.00, max: 49.00 },
        razonamiento: "Vine-ripe se mantiene por segunda semana consecutiva en $46.95-48.95 (Corbel #0018, 01-Abr, usando datos USDA Phoenix 31-Mar). La estabilidad en precio contrasta con el inicio confirmado de la transición a Salinas, California. La calidad outbound Belher del 01-Abr muestra Bola Calavo con merma 4.47% — elevada para la temporada — lo que puede traducirse en menor poder de negociación de precio si persiste. El promedio WK14 hasta hoy: primera 83.76%, merma 3.59%.",
        factores: ["Salinas ya activo — oferta adicional presiona precio a la baja en WK15-16", "Vine-ripe estable 2 semanas: soporte estructural en $44-47 confirmado", "Bola Calavo merma 4.47% (01-Abr) — calidad bajo presión, riesgo de ajuste de precio", "Demanda foodservice/retail sin cambios negativos — soporte de fondo"],
        riesgo: "Si Salinas tiene problemas de calidad inicial o heladas tardías en California, rebote técnico posible a $50+.",
        accion: "Embarcar a precio actual — $46.95-48.95 sigue siendo excelente. Revisar urgente la calidad Bola Calavo al inicio de semana. No especular esperando rebote."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb XL · Nogales AZ",
        tendencia: "lateral",
        confianza: 65,
        precio_actual:     { min: 38.95, max: 40.95 },
        precio_proyectado: { min: 37.00, max: 42.00 },
        razonamiento: "Roma XL se mantiene en $38.95-40.95 Nogales (Corbel #0018). La calidad está mejorando: Roma Calavo pasó de merma 5.60% (30-Mar) a 4.93% (31-Mar) a 1.20% (01-Apr) — tendencia de recuperación clara. Roma Urson estable en 4.00% merma exacto. El promedio WK14 Roma Calavo: primera 80.36%, merma 3.91% — aún bajo, pero mejorando rápidamente. La estabilización de precio coincide con mejora de calidad.",
        factores: ["Precio estable 2 semanas — mercado en equilibrio sin catalizadores", "Roma Calavo merma mejorando: 5.60% → 4.93% → 1.20% en 3 días — recuperación notable", "Salinas afecta también Roma, pero con menor intensidad que vine-ripe", "Demanda constante del canal foodservice/pizzerías"],
        riesgo: "Si calidad Roma Calavo regresa a merma >4%, riesgo de rechazo o descuento de precio.",
        accion: "Mantener ritmo de embarques Roma. Priorizar Roma Urson y Roma Calavo (en recuperación) sobre las partidas con calidad más débil. Seguimiento diario de outbound."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · Texas",
        tendencia: "lateral",
        confianza: 60,
        precio_actual:     { min: 53.00, max: 55.00 },
        precio_proyectado: { min: 48.00, max: 60.00 },
        razonamiento: "Jalapeño Texas rebotó a $53-55/bu (Corbel #0018, 01-Abr) desde $48-50 de la semana previa — recuperando más de la mitad de la caída de $10 en solo una semana. En Nogales cotiza en $48. El patrón confirma que la escasez subyacente en Zacatecas/Sonora no se resolvió: la oferta adicional que presionó el precio a $48-50 fue insuficiente o temporal. Alta volatilidad e incertidumbre en ambas direcciones.",
        factores: ["Rebote desde $48-50 a $53-55 confirma escasez estructural persistente", "Nogales y Texas en niveles distintos ($48 vs $53-55) — base amplia para arbitraje", "Demanda Texas sostenida — soporte por debajo de $50 demostrado", "Alta volatilidad: rango WK13-WK14 ha sido $48-60"],
        riesgo: "Si la oferta en Zacatecas/Sonora se normaliza en las próximas 2 semanas, caída de vuelta a $44-48.",
        accion: "Embarcar producto disponible a $53-55 Texas. Alta volatilidad justifica maximizar salidas cuando precio está en nivel medio-alto. No retener especulando con nuevo pico."
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
        precio_actual:     { min: 56.00, max: 70.00 },
        precio_proyectado: { min: 58.00, max: 72.00 },
        razonamiento: "Limón persa Texas en pico estacional: USDA citrus 01-Abr reporta $68-70 para 175s, $66-68 para 200s, $62-66 para 230s y $56-60 para 250s (Corbel #0018). Báscula Belher procesó limón el 06/04 — arranque WK15 activo. Outbound 06/04: merma 1%, exportación 62%, peso 40.2-40.5 lbs, calibres 200/230/250 activos. Defectos principales: wood pocket, roña y trips — todos menores. El flush primaveral en abril podría moderar precios en WK16-17.",
        factores: ["USDA citrus 01-Abr confirma precios máximos estacionales $56-70 por talla", "Báscula activa 06-Abr (WK15 día 1) — temporada en plena operación", "Merma 1% outbound 06-Abr — calidad excelente; exportación 62%", "Flush primaveral esperado en abril → mayor oferta puede moderar precio en WK16-17"],
        riesgo: "Mayor oferta estacional en abril-mayo + aranceles potenciales USMCA → corrección FOB posible si flush supera expectativas.",
        accion: "Maximizar embarques de limón ahora mientras el precio está en pico. Coordinar con Maui Fresh forecast semanal para resto de abril. Monitorear USDA Nogales para confirmar FOB local."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Grape tomato +53% a $28.95-30.95/flat — corrección extrema de -30% resultó temporal",                               impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"Grape tomato revierte la caída del -30% de la semana previa con rebote inmediato (USDA Phoenix 31-Mar). El mercado premium de mini-tomate sigue respondiendo con alta sensibilidad a cambios de oferta/demanda. Volatilidad bidireccional intensa en este segmento." },
    { cat:"Mercado",      titulo:"Jalapeño Texas rebota a $53-55/bu — escasez subyacente confirma que la caída fue pausa",                            impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"Jalapeño recupera más de la mitad de la caída de $10 en una semana. En Nogales cotiza $48/bu. La oferta en Zacatecas/Sonora no se recuperó lo suficiente para sostener los niveles bajos de $48-50." },
    { cat:"Mercado",      titulo:"Limón persa Texas en máximos estacionales: 200s $66-68, 175s $68-70 por carton 40lb",                               impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"USDA citrus 01-Abr confirma precios por talla: 175s $68-70, 200s $66-68, 230s $62-66, 250s $56-60. Báscula Belher activa con limón el 01 y 02-Abr. Outbound 02-Abr: merma 0%, exportación 80%." },
    { cat:"Logística",    titulo:"Fletes aéreos +95% y Brent >$108/bbl — cadena de perecibles bajo presión máxima",                                   impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"Costos de combustible en máximos recientes por cierre del Estrecho de Ormuz. Fletes aéreos casi duplicados. Para exportadores de perecibles: aumento de prima logística, reducción de ventana de shelf-life y mayor volatilidad en planificación de embarques." },
    { cat:"Regulatorio",  titulo:"Florida legisladores refuerzan presión por aranceles estacionales a produce mexicana — USMCA 1-Jul-2026",            impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"Iniciativas de tarifas estacionales para tomate, pimiento, pepino y calabaza mexicana siguen activas en el Congreso. USTR y Secretaría de Economía en negociaciones técnicas. Suprema Corte de EE.UU. falló sobre aranceles — industria produce se está ajustando." },
    { cat:"Mercado",      titulo:"México bajo presión múltiple: peso volátil + agua + fletes + aranceles",                                             impacto:"Alto",        fuente:"Corbel Seeds #0018", resumen:"Exportadores mexicanos operan con peso volátil, escrutinio hídrico, restricciones climáticas y presión política de EE.UU. El upside: precios firmes en casi todos los productos, con México como proveedor balanceador dominante para el mercado norteamericano." },
    { cat:"Mercado",      titulo:"Precios tomate y pimientos 'históricos' en Europa — escasez global, no exclusivamente norteamericana",               impacto:"Moderado",    fuente:"Corbel Seeds #0018", resumen:"Europa reporta precios récord en varios canales de tomate y pimiento. Italia con cotizaciones muy altas. Analista europeo: 'Nunca he visto precios de tomate tan altos'. La escasez tiene drivers independientes al mercado NAFTA y se retroalimenta globalmente." },
    { cat:"Mercado",      titulo:"Volatilidad pepino persistente — Nogales $40.95-42.95 leve corrección vs $42.95-44.95 previo",                      impacto:"Moderado",    fuente:"Corbel Seeds #0018", resumen:"HortiDaily mantiene señal de 'volatile cucumber pricing for near future'. Oferta México sigue siendo determinante. La fortaleza estructural persiste pese a la corrección. Potencial de expansión para Belher en GC 2026-27." },
    { cat:"Agua",         titulo:"México incumple tratado bilateral de agua — fricción política agro EE.UU.-México escala",                            impacto:"Moderado",    fuente:"Corbel Seeds #0018", resumen:"FreshPlaza reporta el riesgo agrícola por el incumplimiento mexicano del tratado bilateral de agua. Factor que puede desbordarse en negociaciones comerciales más amplias y elevar la fricción política alrededor de produce de importación." },
    { cat:"Innovación",   titulo:"GreenTech Americas satisfecho — México plataforma líder de protected-cropping en el hemisferio",                     impacto:"Moderado",    fuente:"Corbel Seeds #0018", resumen:"Exhibidores y visitantes confirman a México como hub central para tecnología de invernadero. GreenV México abre oficina en Querétaro. México adapta industria de invernadero a nueva realidad de gestión de agua — agua como variable estratégica central." },
    { cat:"Mercado",      titulo:"California propone $100M para CalFresh produce rebates — 168K hogares adicionales",                                  impacto:"Moderado",    fuente:"Corbel Seeds #0018", resumen:"El programa ampliaría cobertura a 168K hogares/mes desde 67K actuales. Señal de demanda estructural alcista para vegetales frescos en California — el mercado más relevante para exportadores mexicanos." },
    { cat:"Mercado",      titulo:"Kazakhstan y Uzbekistán aceleran producción invernadero — presión competitiva futura en tomate y pepino",            impacto:"Bajo",        fuente:"Corbel Seeds #0018", resumen:"Producción controlada en Asia Central en expansión con tecnología avanzada. Señal de largo plazo: el costo-curva de producción global se está moviendo. Para Belher, la ventaja competitiva estará en calidad, certificaciones y relaciones con compradores premium." }
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
    semana:      "WK12",
    fechas:      "16–22 Mar 2026",
    fuente:      "Irene Amezaga · Calavo Growers",
    actualizado: "04/04/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 27.24, prevClose: 26.40, cambio: 0.84, cambioPct: 3.18,
        h52: 28.72, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · 04-Abr-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 14.44, prevClose: 13.94, cambio: 0.50, cambioPct: 3.58,
        h52: 15.02, l52: 9.60, volumen: null,
        fuente: "Yahoo Finance · 04-Abr-2026"
      }
    ],

    correos: [
      {
        fecha: "01/04/2026", de: "Carlos Valadez", cargo: "Settlement Coordinator · Calavo",
        asunto: "RE: 2026 15-03 Agricola Belher Settle WK12 18 Mar 2026.xlsx",
        tipo: "settlement", nivel: "info",
        resumen: "Carlos confirma: 'estaremos enviando el archivo los jueves ya que se capturan todas las ventas de la semana y el reporte a este día está más completo.' Settlement WK13 esperado jueves 03-Abr — no recibido. Próximo jueves: 09-Abr."
      },
      {
        fecha: "31/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "RE: Canceled: Weekly Tomato Meeting — WK13 update by end of week",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene confirma: 'Yes I will send to both by end of week.' Reunión semanal Teams cancelada. Reporte WK13 Tomato Weekly Update prometido antes del fin de semana — no recibido al 06-Abr (8 días de retraso)."
      },
      {
        fecha: "31/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Canceled: Weekly Tomato Meeting",
        tipo: "cancelacion", nivel: "warning",
        resumen: "Reunión semanal Teams cancelada para la semana del 31-Mar. Sin meeting esta semana — el reporte WK13 llegará por correo."
      },
      {
        fecha: "25/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Week 12 Tomato Weekly Update 2026",
        tipo: "reporte", nivel: "info",
        resumen: "Reporte semanal WK12 adjunto. Belher: 488 pallets · 40 cargas · 67,840 pkgs. Rounds +7% vs proyectado; Roma +20%."
      },
      {
        fecha: "25/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "FW: PARTNERSHIP",
        tipo: "fyi", nivel: "info",
        resumen: "Correo de TOPAN Nigeria a tomatosales@calavo.com solicitando partnership. Irene reenvía a JC y Antonio como FYI."
      },
      {
        fecha: "24/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Weekly Tomato Meeting — Teams",
        tipo: "reunion", nivel: "info",
        resumen: "Invitación reunión semanal Teams. Asistentes: Antonio, JC, Jonathan Barbarine, Dora Castro, Elizabeth Bravo, John Lindeman, James Snyder."
      },
      {
        fecha: "19/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "3 Year Contract Update",
        tipo: "contrato", nivel: "warning",
        resumen: "Reunión Teams para actualizar contrato 3 años. Pendiente revisión conjunta con John Lindeman y James Snyder antes de finalizar."
      }
    ],

    alertas: [
      { nivel: "danger",  texto: "WK13 Tomato Weekly Update no recibido al 06-Abr — Irene Amezaga prometió envío 'end of week' (31-Mar). Reporte con 8 días de retraso. Contactar hoy al inicio de operaciones WK15." },
      { nivel: "warning", texto: "Settlement WK13: Carlos Valadez confirmó envíos los jueves. No recibido el 03-Abr. Próximo estimado: jueves 09-Abr." },
      { nivel: "warning", texto: "Contrato 2026 pendiente — borrador recibido 13-Mar con cambios. Reunión de alineación con John Lindeman y James Snyder por confirmar." },
      { nivel: "success", texto: "WK12 sobre proyección: Rounds +7% · Roma +20%. FOB promedio $20.07 vs $18.06 WK11 (+11%)." },
      { nivel: "success", texto: "CVGW $27.24 (+3.2%) · AVO $14.44 (+3.6%) — sector produce con fuerte momentum (04-Abr). CVGW acercándose a máximo 52s $28.72." }
    ],

    kpi: {
      pallets: 488, loads: 40, pkgs: 67840,
      fobPromedio: 20.07, fobAnterior: 18.06, pkgsAnterior: 50053
    },

    belher: {
      rounds: { proyectado: 309, actual: 329, loads: 24, pkgs: 42240, diffPct: 7  },
      roma:   { proyectado: 133, actual: 159, loads: 16, pkgs: 25600, diffPct: 20 },
      total:  { proyectado: 442, actual: 488, loads: 40, pkgs: 67840 }
    },

    adm: {
      nombre: "Agrícola Don Memo",
      rounds: { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740,  diffPct: -43 },
      roma:   { proyectado: 0,   actual: 0,   loads: 0,  pkgs: 0,     diffPct: 0,  sinPrograma: true },
      total:  { proyectado: 43,  actual: 25,  loads: 1,  pkgs: 1740 }
    },

    ventas: [
      { variedad: "Rounds / Vine Ripe", avg: 21.37, recibido: 28606 },
      { variedad: "Roma 25lb",          avg: 16.41, recibido: 16727 }
    ],

    usdaRef: {
      fecha: "23/03/2026",
      precios: [
        { producto: "Vine Ripe 25lb", zona: "Nogales AZ", min: 38.95, max: 43.95, usual: 40.95 },
        { producto: "Vine Ripe 4×5",  zona: "Nogales AZ", min: 36.95, max: 40.95, usual: null  },
        { producto: "Roma 25lb",      zona: "Nogales AZ", min: 32.95, max: 38.95, usual: 34.95 },
        { producto: "Vine Ripe 25lb", zona: "Texas",      min: 36.95, max: 42.95, usual: 38.95 },
        { producto: "Roma 25lb",      zona: "Texas",      min: 34.95, max: 38.95, usual: 35.95 }
      ]
    },

    toy: {
      recibido: [
        { mes: "Dic", y2025: 337541, y2026: 234353 },
        { mes: "Ene", y2025: 209098, y2026: 299053 }
      ],
      pricing: [
        { mes: "Dic", yPrev: 19.89, yCurr: 11.06, prevLabel: "2024", currLabel: "2026" },
        { mes: "Ene", yPrev: 11.19, yCurr: 14.43, prevLabel: "2025", currLabel: "2026" }
      ]
    },

    discrepancias: [
      {
        titulo:    "Spread FOB Belher vs Mercado",
        belher:    "$20.07 / caja (WK12 avg)",
        mercado:   "$40.95 / caja (USDA Nogales usual)",
        diferencia:"$20.88 · margen 50.9%",
        nota:      "El spread es la diferencia entre lo que recibe Belher y el precio de mercado. Incluye comisión Calavo 12%, Z-code, anti-dumping 17.5% y logística. Rango saludable: 45–55%. Monitorear si cae bajo 40%.",
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
        resumen: "Precios máximos de temporada. Báscula Belher activa con limón el 01 y 02-Abr. Merma 0% en outbound 02-Abr."
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

    prediccionBolsa: [
      {
        simbolo: "CVGW", empresa: "Calavo Growers",
        tendencia: "alcista",
        precioActual: 27.24,
        precioObj90d: 29.00,
        riesgoBajo: 22.00,
        confianza: 60,
        razonamiento: "CVGW cierra $27.24 (+3.18% vs cierre anterior $26.40 del 04-Abr). Acción rompiendo hacia máximos de 52 semanas ($28.72). Grape tomato y jalapeño con precios recuperados es positivo para márgenes Q2. El riesgo arancelario USMCA 1-Jul-2026 y la pendiente renegociación del contrato Belher son factores de incertidumbre. Precio objetivo 90 días: $29.00 si mercado de hortalizas se estabiliza.",
        factores: ["Grape tomato y jalapeño recuperando precios — positivo para márgenes", "Riesgo arancelario USMCA podría reducir volumen exportado de socios mexicanos", "Acción acercándose a resistencia técnica en $28.72 (máximo 52s)", "Contrato Belher–Calavo en renegociación — impacto en volumen incierto"]
      },
      {
        simbolo: "AVO", empresa: "Mission Produce",
        tendencia: "alcista",
        precioActual: 14.44,
        precioObj90d: 16.00,
        riesgoBajo: 11.50,
        confianza: 55,
        razonamiento: "AVO cierra $14.44 (+3.58% vs cierre anterior $13.94 del 04-Abr). La recuperación continúa sostenida desde mínimos de $9.60. Para Belher: Mission Produce puede servir como palanca de negociación en renovaciones contractuales con Calavo.",
        factores: ["Recuperación aguacate impulsa múltiplos del sector", "Potencial competidor/alternativa a Calavo — palanca de negociación Belher", "Alta concentración en aguacate, menor exposición al ciclo tomate", "Sesión sólida +3.6% — momentum alcista sostenido"]
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
