window.BELHER = {
  meta: {
    fecha: "Sábado 28 Mar 2026",
    semana: "WK 13",
    actualizado: "28/03/2026 · 08:30"
  },

  alertas: [
    { nivel: "danger",  texto: "CF ABSA GC 2025–2026 (al 22-Mar): saldo requerido para cerrar temporada = $6,804K USD — incluye pagos arranque ciclo 2026–2027 (Leima · 25-Mar)" },
    { nivel: "warning", texto: "Tomate Vine-ripe sube a $50.95/carton en Nogales — nuevo pico histórico de temporada (Corbel #0019 · 27-Mar)" },
    { nivel: "success", texto: "Jalapeño rebota a $58–60/bu en Texas (+21% vs semana previa) — corrección fue temporal, escasez persiste" },
    { nivel: "success", texto: "Grape tomato: $24.95–26.95/flat (+30% vs semana previa) — oportunidad en formatos premium" },
    { nivel: "warning", texto: "US aranceles a México: negociaciones técnicas USMCA activas — revisión 1-Jul-2026 con presión regulatoria" }
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
      { sem:"WK13", wire:"~22-Mar",pago:null,   cajas:null,  cont:null,estado:"Pendiente"}
    ]
  },

  calidad: {
    semana: {
      desde: "23/03/2026",
      hasta:  "29/03/2026",
      variedades: [
        { nombre:"Bola Calavo",  etiqueta:"Calavo",  canal:"exportacion", primera:91.21, segunda:2.32, tercera:3.30, merma:3.18, peso:26.86, dias:2, alerta:false },
        { nombre:"Bola Yameto",  etiqueta:"Yameto",  canal:"exportacion", primera:89.38, segunda:2.72, tercera:4.20, merma:3.69, peso:31.86, dias:1, alerta:false },
        { nombre:"Roma Calavo",  etiqueta:"Calavo",  canal:"exportacion", primera:91.13, segunda:4.41, tercera:2.62, merma:1.84, peso:26.72, dias:2, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK09", primaPromedio:86.20, mermaPromedio:4.10 },
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:90.32, mermaPromedio:2.32 }
    ],
    ultimoOutbound: {
      fecha: "25/03/2026",
      variedades: [
        { nombre:"Bola Calavo", etiqueta:"Calavo", canal:"exportacion", primera:89.99, segunda:2.87, tercera:3.68, merma:3.45, peso:27.06, alerta:false },
        { nombre:"Roma Calavo", etiqueta:"Calavo", canal:"exportacion", primera:88.34, segunda:7.03, tercera:2.90, merma:1.72, peso:25.57, alerta:false }
      ]
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
      nota:              "Temporada de granos en curso. Sin ventas registradas a febrero — producción en proceso de cosecha. Costos WIP incluyen fertilizantes, semilla, agroquímicos y mano de obra de campo."
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
    reporte: "Corbel Seeds #0019",
    fecha: "27/03/2026",
    resumen: "Vine-ripe tomate sube a $50.95/carton en Nogales — nuevo pico histórico de temporada. Jalapeño se recupera a $58–60/bu en Texas (+21% vs semana anterior), confirmando que la corrección fue temporal. Grape tomato escala a $24.95–26.95/flat (+30%). Frost en Sinaloa, Zacatecas, Puebla y Morelos comprime oferta. Negociaciones técnicas USMCA activas — presión arancelaria a hortalizas mexicanas persiste.",
    precios: [
      { producto:"Vine-ripe 4×4 25lb",     min:50.95, max:50.95, anterior:47.95, via:"Nogales AZ",        alerta:false },
      { producto:"Tomate Roma 25lb (XL)",   min:40.95, max:44.95, anterior:39.95, via:"Nogales AZ",        alerta:false },
      { producto:"Grape tomato flat",       min:24.95, max:26.95, anterior:19.95, via:"Nogales AZ",        alerta:true  },
      { producto:"Chile Bell GH (XL)",      min:44.95, max:44.95, anterior:43.95, via:"Nogales AZ",        alerta:false },
      { producto:"Jalapeño",                min:58.00, max:60.00, anterior:49.00, via:"Texas",             alerta:true  },
      { producto:"Anaheim",                 min:34.00, max:36.00, anterior:null,   via:"SoCal/AZ",          alerta:false },
      { producto:"Habanero",                min:44.00, max:47.00, anterior:null,   via:"SoCal/AZ",          alerta:false },
      { producto:"Vine-ripe 4×5 25lb",      min:50.95, max:50.95, anterior:45.00, via:"Nogales AZ",        alerta:false },
      { producto:"Limón Persa flat 200ct",  min:58.00, max:65.00, anterior:55.00, via:"LA Terminal Market", alerta:false }
    ],
    noticias: [
      { titulo:"Vine-ripe $50.95/carton en Nogales — nuevo pico histórico de temporada",              impacto:"Alto",     fuente:"Corbel Seeds #0019" },
      { titulo:"Jalapeño $58–60/bu Texas — rebote +21% tras corrección semana previa",                impacto:"Alto",     fuente:"Corbel Seeds #0019" },
      { titulo:"Frost en Sinaloa, Zacatecas, Puebla y Morelos — precios tomate +86.8% YoY en CDMX", impacto:"Alto",     fuente:"Corbel Seeds #0019" },
      { titulo:"EE.UU. impulsa aranceles a produce mexicano — USMCA negociaciones técnicas activas",  impacto:"Alto",     fuente:"Corbel Seeds #0019" },
      { titulo:"Grape tomato: $24.95–26.95/flat (+30%) — escasez en formatos premium",                impacto:"Moderado", fuente:"Corbel Seeds #0019" },
      { titulo:"Congestion portuaria global: >80% puertos en estado crítico — fletes al alza",        impacto:"Moderado", fuente:"Corbel Seeds #0019" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"27/03", productos:["Tomate","Limón Persa"] },
      { fecha:"26/03", productos:["Tomate","Limón Persa"] },
      { fecha:"25/03", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"24/03", productos:["Tomate"] },
      { fecha:"23/03", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"21/03", productos:["Tomate"] }
    ],
    embarques: [
      { fecha:"27/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-94",    destino:"Arizona", estado:"OK" },
      { fecha:"27/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-95",    destino:"Arizona", estado:"OK" },
      { fecha:"27/03/2026", tipo:"Tomate", cargas:1, unidad:"CGG-90",   destino:"Arizona", estado:"OK" },
      { fecha:"27/03/2026", tipo:"Tomate", cargas:1, unidad:"CGG-88",   destino:"Arizona", estado:"OK" },
      { fecha:"27/03/2026", tipo:"Tomate", cargas:1, unidad:"JL-13",    destino:"Texas",   estado:"OK" },
      { fecha:"25/03/2026", tipo:"Tomate", cargas:1, unidad:"CGG-107",  destino:"Arizona", estado:"OK" },
      { fecha:"25/03/2026", tipo:"Tomate", cargas:1, unidad:"CHARLY-4", destino:"Arizona", estado:"OK" },
      { fecha:"25/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-110",   destino:"Arizona", estado:"OK" },
      { fecha:"25/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-109",   destino:"Arizona", estado:"OK" },
      { fecha:"24/03/2026", tipo:"Tomate", cargas:1, unidad:"JL-50",    destino:"Arizona", estado:"OK" },
      { fecha:"24/03/2026", tipo:"Tomate", cargas:1, unidad:"JL-30",    destino:"Arizona", estado:"OK" },
      { fecha:"24/03/2026", tipo:"Tomate", cargas:1, unidad:"AC-26",    destino:"Texas",   estado:"OK" }
    ]
  },

  correos: [
    { hora:"21:21", asunto:"27-03-2026 REPORTES GENERALES",                          de:"Embarques Belher", leido:false },
    { hora:"21:03", asunto:"BILL,MANIFIESTO NOGALES ST 27-03-2026",                  de:"Embarques Belher", leido:false },
    { hora:"20:33", asunto:"BILL,MANIFIESTO MCALLEN 27-03-2026",                     de:"Embarques Belher", leido:false },
    { hora:"17:26", asunto:"REPORTE DE BASCULA 27/03/2026 (LIMON PERSA)",            de:"Báscula Belher",   leido:false },
    { hora:"17:25", asunto:"REPORTE DE BASCULA 27/03/2026 (TOMATE)",                 de:"Báscula Belher",   leido:false },
    { hora:"17:14", asunto:"BILL,MANIFIESTO NOGALES CGG 27-03-2026",                 de:"Embarques Belher", leido:false },
    { hora:"11:29", asunto:"REPORTE DE OUTBOUND TOMATE 25/03/2026",                  de:"Calidad Belher",   leido:false },
    { hora:"16:26", asunto:"Corbel Seeds Daily News Summary (Report No. 0019)",      de:"Raymundo Elizalde",leido:false }
  ],

  ticker: [
    { label:"VINE RIPE 4×4", valor:"$50.95",         cambio:"+8.5% vs WK",    dir:"up"      },
    { label:"TOMATE ROMA XL", valor:"$40.95–44.95",  cambio:"+7%",            dir:"up"      },
    { label:"JALAPEÑO",       valor:"$58–60",         cambio:"▲+21% rebote",   dir:"up"      },
    { label:"CHILE BELL GH",  valor:"$44.95",         cambio:"lateral",        dir:"neutral" },
    { label:"GRAPE TOMATO",   valor:"$24.95–26.95",   cambio:"+30%",           dir:"up"      },
    { label:"HABANERO",       valor:"$44–47",         cambio:"nuevo dato",     dir:"up"      },
    { label:"VENTA NETA",     valor:"$6.56M",         cambio:"Calavo WK12",    dir:"up"      },
    { label:"SALDO CALAVO",   valor:"-$2.87M",        cambio:"Due to Calavo",  dir:"down"    },
    { label:"EBITDA FEB",     valor:"$2.89M",         cambio:"vs BUD $2.31M ✓",dir:"up"      },
    { label:"WK13 PEND.",     valor:"~$240K",         cambio:"wire ~22-Mar",   dir:"neutral" },
    { label:"1ª PRIMERA",     valor:"89.17%",         cambio:"25-Mar",         dir:"down"    },
    { label:"MERMA PROM",     valor:"2.59%",          cambio:"25-Mar ▼",       dir:"neutral" },
    { label:"CVGW",           valor:"$26.40",         cambio:"+11.0%",         dir:"up"      }
  ],

  auditorias: [
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
        titulo: "Jalapeño: ventana de precio histórico — rebote confirmado",
        prioridad: "Alta",
        descripcion: "Jalapeño rebotó a $58–60/bu en Texas (Corbel #0019, 27-Mar) tras corrección temporal a $48–50. La recuperación en 1 semana confirma escasez estructural. Mientras persista, margen por caja es excepcional.",
        accion: "Priorizar envíos de jalapeño ahora. Evaluar incremento de volumen en próxima siembra. Revisar disponibilidad logística con Calavo."
      },
      {
        titulo: "Vine-ripe en pico histórico — ventana de máximo precio",
        prioridad: "Alta",
        descripcion: "Vine-ripe alcanza $50.95/carton en Nogales (Corbel #0019). Salinas entra en 2-4 semanas. Ventana de precios altos es limitada.",
        accion: "Maximizar envíos esta semana. No retener producto especulando con mayor alza."
      },
      {
        titulo: "Pepino: firmeza estructural sostenida",
        prioridad: "Alta",
        descripcion: "Pepino @$42.95–44.95/bu. HortiDaily: 'Cucumber pricing to stay high for near term.' Fortaleza estructural, no coyuntural.",
        accion: "Considerar inclusión o ampliación del programa de pepino en GC 2026-27."
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
        titulo: "Fertilizantes: riesgo alcista global por conflicto en Irán",
        nivel: "danger",
        descripcion: "Guerra en Irán → urea disparada. China restringe exportaciones. Brasil y India en modo emergencia. Impacto directo en costos de producción GC 2026-27.",
        accion: "Revisar contratos de fertilizantes para próxima temporada. Evaluar compra adelantada antes de que suba más."
      },
      {
        titulo: "BPSI: sin ingresos enero 2026, gastos ~$95K MXN/mes",
        nivel: "warning",
        descripcion: "Blondie Producciones reportó $0 ingresos en enero 2026. Gastos operativos continuos. Pendiente resolución por cancelación de cliente.",
        accion: "Definir plan de acción post-reunión BPSI del 24-Mar."
      },
      {
        titulo: "Plaga Tizón: agroquímicos $147K sobre budget acumulado",
        nivel: "warning",
        descripcion: "Feb 2026: +$110K en agroquímicos por Tizón. Acumulado Jul-Feb: $147K sobre presupuesto. Tendencia preocupante si persiste.",
        accion: "Evaluar programa preventivo para cierre de temporada."
      },
      {
        titulo: "Aranceles USMCA: negociaciones técnicas activas",
        nivel: "warning",
        descripcion: "EE.UU. y México abrieron discusiones técnicas previas a revisión USMCA del 1-Jul-2026. Legisladores de Florida impulsan tarifas estacionales a tomate, pimiento y pepino mexicano.",
        accion: "Monitorear semanalmente. Contactar a Calavo para posición estratégica ante posibles cambios de anti-dumping."
      }
    ],
    proximos: [
      { fecha:"~22-Mar (retrasado)",         evento:"Settlement WK13 Calavo — wire estimado no confirmado al 28-Mar", tipo:"pago",      participantes:"Leima Leyva · Calavo" },
      { fecha:"Mar–Abr 2026",                evento:"Transición: cierre de temporada GC",                               tipo:"operacion", participantes:"Equipo operativo" },
      { fecha:"Por confirmar (Abr 2026)",    evento:"Reunión alineación Contrato 2026 — John Lindeman · James Snyder · Irene", tipo:"reunion", participantes:"Antonio, JC, Calavo" }
    ]
  },

  predicciones: {
    generado:  "28/03/2026 · 08:30",
    modelo:    "Claude claude-sonnet-4-6",
    horizonte: "7 días",
    nota:      "Síntesis de precios USDA + Corbel Seeds #0019 + báscula + calidad outbound + noticias de industria. Se regenera automáticamente cada mañana.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "lateral",
        confianza: 63,
        precio_actual:    { min: 50.95, max: 50.95 },
        precio_proyectado:{ min: 46.00, max: 52.00 },
        razonamiento: "Vine-ripe tocó $50.95/carton en Nogales según datos USDA del 26-Mar (Corbel #0019) — nuevo máximo de temporada. La aceleración se modera: el salto de $46.95 a $50.95 en 2 días (+$4) es significativamente menor que el salto de $31.95 a $46.95 la semana anterior (+$15). Frost en Sinaloa, Zacatecas, Puebla y Morelos mantiene la oferta comprimida. Sin embargo, California propone ampliar CalFresh $100M (FreshPlaza), lo que es positivo para demanda estructural. La transición a Salinas en 2-4 semanas es el principal factor de riesgo bajista.",
        factores: ["Frost en 4 estados mexicanos — oferta muy limitada en Nogales (USDA)", "Precio en máximo histórico de temporada $50.95 — desaceleración de la subida", "California $100M CalFresh expansion → soporte demanda estructural", "Salinas transition estimada en 2-4 semanas → riesgo bajista inminente"],
        riesgo: "Si Salinas entra antes de lo esperado o recuperación climática en Sinaloa, corrección de 15-20% puede ocurrir en 3-5 días. Señal de alerta: vine-ripe baja $3+ en una sesión de mercado.",
        accion: "Maximizar envíos esta semana — el precio está en $50.95 y el riesgo de corrección supera el potencial alcista desde estos niveles. No retener producto especulando con mayor alza. Confirmar volumen con Calavo para WK13 y WK14."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb XL · Nogales AZ",
        tendencia: "lateral",
        confianza: 70,
        precio_actual:    { min: 40.95, max: 44.95 },
        precio_proyectado:{ min: 39.00, max: 46.00 },
        razonamiento: "Roma 25lb XL en Nogales: $40.95-44.95 según USDA del 26-Mar (Corbel #0019). La calidad outbound Belher del 25-Mar muestra Roma primera 88.34% y merma 1.72% — exportable con margen. El canal foodservice mantiene demanda estable. Roma sigue a vine-ripe con 1-2 días de rezago, y el frost en los estados productores sostiene la escasez. Con vine-ripe en $50.95, Roma tiene potencial de seguir subiendo ligeramente.",
        factores: ["Frost en Sinaloa/Zacatecas → escasez Roma sostenida", "Canal foodservice con compromisos abiertos", "Calidad Belher Roma: 88.34% primera · 1.72% merma (25-Mar)", "Roma TX también firme: $40.95-44.95 XL"],
        riesgo: "Si vine-ripe corrige, Roma sigue con rezago de 24-48h. Procesadores con márgenes comprimidos pueden recortar pedidos.",
        accion: "Priorizar XL que cotiza $4-5 más caro que Large. Verificar clasificación de talla antes de embarcar. Esta es la ventana de mayor margen Roma de toda la temporada."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · Texas",
        tendencia: "alcista",
        confianza: 72,
        precio_actual:    { min: 58.00, max: 60.00 },
        precio_proyectado:{ min: 56.00, max: 68.00 },
        razonamiento: "Jalapeño rebotó a $58-60/bu en Texas (Corbel #0018 26-Mar, #0019 27-Mar) tras la corrección temporal a $48-50 la semana anterior. La velocidad de la recuperación (+21% en 1 semana) confirma que la causa subyacente — enfermedad y reducción de oferta en México y Florida — no se resolvió. Corbel #0019 reporta 'weather-related disruptions in pepper regions' con cambios estacionales que afectan disponibilidad. El nivel $58-60 tiene base de soporte sólida mientras la escasez persista.",
        factores: ["Corrección $48-50 fue técnica — escasez subyacente sin resolver", "Recuperación a $58-60 en 1 semana = señal alcista fuerte", "Corbel: weather disruptions en regiones pepper persisten", "Demanda estructural en Texas — mercado jalapeño firme"],
        riesgo: "Recuperación de oferta en Zacatecas/Sonora más rápida que esperada → corrección a $42-48 en 2 semanas.",
        accion: "Si Belher tiene jalapeño disponible, priorizar envíos ahora — la ventana de $58-60 puede no durar más de 2-3 semanas. Es el producto con mayor volatilidad positiva del portafolio."
      },
      {
        id: "bell",
        producto: "Chile Bell GH",
        unidad: "carton XL · Nogales AZ",
        tendencia: "lateral",
        confianza: 70,
        precio_actual:    { min: 44.95, max: 44.95 },
        precio_proyectado:{ min: 43.00, max: 47.00 },
        razonamiento: "Chile Bell GH se mantiene estable en $44.95/carton XL en Nogales (Corbel #0018 y #0019 — 2 días consecutivos de mismo precio). La estabilidad de 3+ semanas en estos niveles confirma equilibrio real de mercado. México sigue siendo proveedor dominante en USMCA con 41.3M lbs de chile bell en la semana al 21-Mar (USDA). Corbel #0019 reporta disrupciones climáticas globales en regiones pepper, lo que puede tensar aún más la oferta.",
        factores: ["3+ semanas de estabilidad — equilibrio real confirmado", "México dominante en bell pepper USMCA (41.3M lbs sem 21-Mar)", "Disrupciones climáticas globales en regiones pepper (Corbel #0019)", "Demanda retail GH premium relativamente inelástica al precio"],
        riesgo: "Nueva producción en invernaderos norteños de México. Señal de alerta: caída de $3+ en 2 sesiones consecutivas.",
        accion: "Mantener programa bell GH a máxima capacidad. Considerar expansión en siembra 2026-27 — el mercado señala valoración premium sostenida por tercer año consecutivo."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "FOB Nogales, AZ",
        tendencia: "lateral",
        confianza: 55,
        precio_actual:    { min: 18.00, max: 22.00 },
        precio_proyectado:{ min: 17.00, max: 24.00 },
        razonamiento: "USDA no disponible hoy (falla de conexión). Último dato FOB Nogales: $18-22/carton 40lb (23-Mar). Corbel #0018 reportó 'lime market recovers after sharp dip, quality dispersion remains wide' — señal de recuperación del mercado. Báscula Belher procesó limón en 27-Mar y 26-Mar, confirmando temporada activa. Limes a través de Texas cotizaron $40-44/carton 35-36 lb (Corbel #0019). La confianza es baja dada la falta de dato USDA fresco.",
        factores: ["Báscula activa: limón procesado 26 y 27-Mar — temporada en curso", "Corbel #0018: lime market recovering after dip", "Flush primaveral México en curso — mayor oferta estacional", "USDA no disponible hoy — incertidumbre en dato de referencia"],
        riesgo: "Implementación de aranceles EE.UU. a produce mexicano → acumulación de oferta → caída adicional en FOB Nogales 15-25%.",
        accion: "Coordinar forecast con Maui Fresh para la siguiente quincena. Monitorear USDA limón Nogales mañana. Explorar compradores alternativos como contingencia ante riesgo arancelario."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Vine-ripe $50.95/carton en Nogales — nuevo pico histórico de temporada",          impacto:"Alto",        fuente:"Corbel Seeds #0019", resumen:"Precios de tomate alcanzan máximos históricos en Nogales impulsados por escasez simultánea en México y Florida. El mercado opera con oferta muy limitada y demanda sostenida." },
    { cat:"Mercado",      titulo:"Jalapeño rebota a $58–60/bu (+21%) — corrección semana previa fue técnica",        impacto:"Alto",        fuente:"Corbel Seeds #0019", resumen:"La recuperación en 1 semana confirma que la escasez subyacente en jalapeño no se resolvió. El nivel $48-50 fue una corrección técnica, no el inicio de una caída prolongada." },
    { cat:"Mercado",      titulo:"Frost en México (Sinaloa, Zacatecas, Puebla, Morelos) — tomate +86.8% YoY en CDMX", impacto:"Alto",      fuente:"Corbel Seeds #0019", resumen:"Daños por helada y clima adverso en principales estados productores. GCMA reporta saladette +86.8% YoY en CDMX (semana 9-13 Mar). Impacto directo en volumen disponible para exportación." },
    { cat:"Logística",    titulo:"EE.UU. y México inician negociaciones técnicas USMCA — revisión 1-Jul-2026",       impacto:"Alto",        fuente:"Corbel Seeds #0019", resumen:"USTR y Secretaría de Economía abrieron discusiones técnicas. Legisladores de Florida impulsan tarifas estacionales a tomate, pimiento, pepino y calabaza mexicana." },
    { cat:"Logística",    titulo:"Congestion portuaria global: >80% puertos en estado crítico",                       impacto:"Alto",        fuente:"Corbel Seeds #0019", resumen:"FreshPlaza reporta más de 80% de puertos mapeados en estado crítico. Para perishables: riesgo de vida de anaquel, tránsitos inciertos y mayor prima por flexibilidad de ruta." },
    { cat:"Logística",    titulo:"Fletes globales al alza — recargos de combustible de emergencia",                   impacto:"Moderado",    fuente:"Corbel Seeds #0019", resumen:"Navieras aplican recargos tras subida del precio del petróleo y cierre del Estrecho de Ormuz. Impacto directo en márgenes de exportadores de produce fresco." },
    { cat:"Logística",    titulo:"Estrecho de Ormuz: carga del Golfo migra a rutas terrestres",                       impacto:"Moderado",    fuente:"Corbel Seeds #0019", resumen:"Maersk reporta capacidad disponible en corredores terrestres para alimentos y medicamentos. El Golfo depende fuertemente de alimentos importados — disrupciones tienen impacto en seguridad alimentaria regional." },
    { cat:"Mercado",      titulo:"California propone $100M para expansión CalFresh produce rebates",                  impacto:"Moderado",    fuente:"Corbel Seeds #0019", resumen:"La propuesta ampliaría el alcance de hogares de 67K a 168K/mes. Positivo para demanda estructural de vegetales frescos en uno de los principales mercados de consumo de EE.UU." },
    { cat:"Clima",        titulo:"Disrupciones climáticas y transiciones estacionales en regiones pepper globales",  impacto:"Moderado",    fuente:"Corbel Seeds #0019", resumen:"Mercado global de pimientos enfrenta suministro irregular por clima adverso y transiciones de temporada. Para exportadores en América, esto abre ventanas de precio oportunistas." },
    { cat:"Innovación",   titulo:"GreenTech Americas cierra con fuerte respuesta — México como hub de tecnología GH", impacto:"Estratégico", fuente:"Corbel Seeds #0019", resumen:"La feria refuerza el papel de México como hub regional para tecnología greenhouse, automatización e insumos de ambiente controlado. La adopción tecnológica deja de ser nicho para volverse necesidad competitiva." },
    { cat:"Innovación",   titulo:"México introduce empaque de charola linerless para produce fresco",                 impacto:"Estratégico", fuente:"Corbel Seeds #0019", resumen:"Troya Alimentos y Ravenwood lanzan charolas de fibra con etiquetas linerless para tomate y cítricos. La innovación en empaque se convierte en diferenciador comercial en retail, especialmente para bajo uso de plástico." },
    { cat:"Innovación",   titulo:"Agrivoltaics reduce uso de agua de riego 50% en producción de tomate",             impacto:"Estratégico", fuente:"Corbel Seeds #0019", resumen:"Investigadores españoles demuestran que sistemas agrivoltaicos pueden reducir uso de agua 50% en producción de tomate. Relevante para zonas de bajo recurso hídrico como el Noroeste de México." },
    { cat:"Mercado",      titulo:"Ventas orgánicas EE.UU. 2025: $22.7B (+5.3% YoY) — categoría en crecimiento",     impacto:"Moderado",    fuente:"Corbel Seeds #0019", resumen:"La producción orgánica sigue siendo la categoría más grande en orgánicos y continúa creciendo. Señal de demanda para programas premium de vegetales y proveedores de insumos." }
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
    actualizado: "28/03/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 26.40, prevClose: 23.79, cambio: 2.61, cambioPct: 10.97,
        h52: 28.72, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · 27-Mar-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 13.94, prevClose: 12.22, cambio: 1.72, cambioPct: 14.07,
        h52: 15.02, l52: 9.60, volumen: null,
        fuente: "Yahoo Finance · 27-Mar-2026"
      }
    ],

    correos: [
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
      { nivel: "warning", texto: "Contrato 2026 pendiente — borrador recibido 13-Mar con cambios. Reunión de alineación con John Lindeman y James Snyder por confirmar." },
      { nivel: "success", texto: "WK12 sobre proyección: Rounds +7% · Roma +20%. FOB promedio $20.07 vs $18.06 WK11 (+11%)." },
      { nivel: "success", texto: "CVGW cotiza $26.40 (+11.0%) · AVO $13.94 (+14.1%) — sector en recuperación sostenida." }
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
        fecha: "27/03/2026", categoria: "Precio", impacto: "Alto",
        fuente: "Corbel Seeds #0019",
        titulo: "Vine-ripe $50.95 NOG — continúa escalada histórica, nuevo máximo de temporada",
        resumen: "Vine-ripe toca $50.95 en Nogales, superando el anterior máximo de $46.95-48.95. Frost en 4 estados mexicanos y escasez simultánea sostienen el pico."
      },
      {
        fecha: "27/03/2026", categoria: "Precio", impacto: "Alto",
        fuente: "Corbel Seeds #0019",
        titulo: "Jalapeño rebota $58-60/bu Texas — escasez estructural confirmada",
        resumen: "La corrección a $48-50 fue técnica. El rebote en 1 semana al nivel previo confirma que la oferta no se recuperó."
      },
      {
        fecha: "27/03/2026", categoria: "Regulatorio", impacto: "Alto",
        fuente: "Corbel Seeds #0019",
        titulo: "EE.UU.-México abren negociaciones técnicas USMCA — revisión 1-Jul-2026",
        resumen: "USTR y Economía México ya tienen discusiones abiertas. Legisladores de Florida presionan por tarifas estacionales a tomate, pimiento y pepino mexicano."
      },
      {
        fecha: "26/03/2026", categoria: "Oferta", impacto: "Alto",
        fuente: "Corbel Seeds #0019",
        titulo: "Frost en Sinaloa, Zacatecas, Puebla y Morelos — tomate +86.8% YoY en CDMX",
        resumen: "Daños por helada elevan precios domésticos de tomate en México. La escasez en mercado interno compite con la disponibilidad de exportación."
      },
      {
        fecha: "26/03/2026", categoria: "Logística", impacto: "Moderado",
        fuente: "Corbel Seeds #0019",
        titulo: ">80% puertos globales en estado crítico — fletes al alza por combustible y congestión",
        resumen: "Puerto congestionados + recargos de combustible por cierre Estrecho de Ormuz elevan costos de envío. Riesgo indirecto para insumos de empaque y maquinaria."
      },
      {
        fecha: "26/03/2026", categoria: "Demanda", impacto: "Moderado",
        fuente: "Corbel Seeds #0019",
        titulo: "California propone $100M para ampliar CalFresh produce rebates — positivo para demanda",
        resumen: "El programa ampliaría cobertura a 168K hogares/mes desde 67K actuales. Señal de demanda estructural alcista para vegetales frescos en California."
      }
    ],

    prediccionBolsa: [
      {
        simbolo: "CVGW", empresa: "Calavo Growers",
        tendencia: "alcista",
        precioActual: 26.40,
        precioObj90d: 28.50,
        riesgoBajo: 22.00,
        confianza: 62,
        razonamiento: "CVGW sube a $26.40 (+11% vs cierre anterior $23.79). La acción está cerca del máximo 52 semanas ($28.72). El pico de precios de tomate en WK13-14 beneficia los márgenes de distribución de Calavo. Sin embargo, la presión arancelaria USMCA y la renegociación del contrato Belher son riesgos latentes. Precio objetivo 90 días: $28.50 si el mercado de hortalizas se mantiene firme.",
        factores: ["Pico de precios tomate $50.95 beneficia márgenes distribución Q1", "Riesgo arancelario USMCA podría reducir volumen exportado de socios mexicanos", "Acción cerca de resistencia técnica en $28.72 (máximo 52s)", "Contrato Belher–Calavo en renegociación — impacto en volumen incierto"]
      },
      {
        simbolo: "AVO", empresa: "Mission Produce",
        tendencia: "alcista",
        precioActual: 13.94,
        precioObj90d: 16.00,
        riesgoBajo: 11.50,
        confianza: 55,
        razonamiento: "AVO sube a $13.94 (+14.1% vs cierre anterior $12.22). La recuperación supera a CVGW en porcentaje, señalando fortaleza en el sector aguacate. Para Belher: Mission Produce compite con Calavo en canal de distribución de hortalizas mexicanas y puede servir como palanca de negociación en renovaciones contractuales.",
        factores: ["Recuperación aguacate impulsa múltiplos sector", "Potencial competidor/alternativa a Calavo — palanca de negociación Belher", "Alta concentración en aguacate, menor exposición al ciclo tomate", "Sector produce recuperando confianza de inversores"]
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
