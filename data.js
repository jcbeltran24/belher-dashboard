window.BELHER = {
  meta: {
    fecha: "Miércoles 08 Abr 2026",
    semana: "WK 15",
    actualizado: "08/04/2026 · 07:20"
  },

  alertas: [
    { nivel: "success", texto: "Vine-ripe $55.95–57.95 (4×4/4×5 Nogales) — MÁXIMO DE TEMPORADA sostenido. WK15 día 3 (08/04): ventana de precio crítica antes del cierre de ciclo mexicano. 07/04: 4 camiones Nogales (6,144 cajas). EMBARCAR TODO el volumen disponible." },
    { nivel: "danger",  texto: "Bola Yameto merma 4.71% promedio WK15 (días 1-2): 04/04 = 4.44%, 06/04 = 4.97%. Sin outbound del 07/04 aún — revisar calidad hoy urgente. Con vine-ripe en máximos, cada punto de merma es pérdida directa de precio." },
    { nivel: "success", texto: "CVGW $27.97 (+1.2% 08-Abr) · AVO $15.36 (+3.2% 08-Abr) — sector produce en fuerte momentum. CVGW sigue acercándose a máximo 52s ($28.72). Señal de demanda institucional sostenida." },
    { nivel: "warning",  texto: "HOY 08/04: Revisión Excel Gass Sheet WK15 con Leima — datos de Carlos Valadez + Irene Amezaga (WK14 completo + WK15 parcial). Actualizar liquidaciones formales WK13–WK15 y confirmar wire WK15 ($269,880)." },
    { nivel: "success", texto: "Trilla sorgo completa WK15: Dorita+El 17 (31-Mar, 18 ha) + Carrillo (06-Abr, 12 ha) + Carrillo+Campo Beltrán+El Dos (07-Abr, 18 ha) = 48 ha cosechadas. El Panteón+San Blas pendientes." }
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
    pickPack:       3901285,
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
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:87.83, segunda:3.98,  tercera:4.85, merma:3.35, peso:26.84, dias:1, alerta:false },
        { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:82.39, segunda:7.12,  tercera:5.79, merma:4.71, peso:30.85, dias:2, alerta:true  },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:87.03, segunda:5.94,  tercera:4.71, merma:2.33, peso:26.58, dias:2, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:90.84, segunda:4.66,  tercera:2.63, merma:1.89, peso:26.11, dias:2, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:86.67, segunda:6.00,  tercera:3.78, merma:3.56, peso:27.37, dias:1, alerta:false },
        { nombre:"Limón Persa",     etiqueta:"Limón",      canal:"exportacion", primera:15,    segunda:47,    tercera:13,   merma:1,    peso:40.35, dias:1, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK09", primaPromedio:86.20, mermaPromedio:4.10 },
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:89.20, mermaPromedio:2.82 },
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:86.88, mermaPromedio:3.09, nota:"Días 1-2 — tomate 04/04 · 5 vars + 06/04 · 3 vars" }
    ],
    ultimoOutbound: {
      fecha: "06/04/2026",
      variedades: [
        { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:80.97, segunda:8.16, tercera:5.90, merma:4.97, peso:31.02, alerta:true  },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:91.13, segunda:5.13, tercera:2.13, merma:1.63, peso:25.06, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:86.47, segunda:6.82, tercera:4.24, merma:2.47, peso:25.66, alerta:false }
      ],
      anterior: {
        fecha: "04/04/2026",
        variedades: [
          { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:87.83, segunda:3.98, tercera:4.85, merma:3.35, peso:26.84, alerta:false },
          { nombre:"Bola Yameto",     etiqueta:"Yameto",     canal:"exportacion", primera:83.81, segunda:6.08, tercera:5.67, merma:4.44, peso:30.68, alerta:true  },
          { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:90.54, segunda:4.19, tercera:3.13, merma:2.14, peso:27.15, alerta:false },
          { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:87.58, segunda:5.06, tercera:5.17, merma:2.19, peso:27.49, alerta:false },
          { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:86.67, segunda:6.00, tercera:3.78, merma:3.56, peso:27.37, alerta:false }
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
        { etiqueta:"Nacional", cajas:446116, cajasRoma:311917, cajasBola:134199, revenue:3856070 }
      ]
    },
    /* Precio FOB Calavo por semana — confirmado (real) vs estimado IA (est)
       Fuente real: Calavo Settlement WK11 $19.06, WK12 $20.07 (Irene Amezaga · Calavo)
       Estimado WK01–WK10: derivado de calavoWeekly.toy.pricing (Dic $11.06, Ene $12.23, Feb $14.43)
       Estimado WK13–WK15: extrapolado de mercado USDA Nogales via Corbel Seeds + spread histórico ~$5-6/caja */
    preciosHistorico: [
      { sem:"WK01", fob:10.20, usda:null,  tipo:"est"  },
      { sem:"WK02", fob:10.80, usda:null,  tipo:"est"  },
      { sem:"WK03", fob:11.30, usda:null,  tipo:"est"  },
      { sem:"WK04", fob:11.60, usda:null,  tipo:"est"  },
      { sem:"WK05", fob:11.80, usda:null,  tipo:"est"  },
      { sem:"WK06", fob:12.40, usda:null,  tipo:"est"  },
      { sem:"WK07", fob:12.80, usda:null,  tipo:"est"  },
      { sem:"WK08", fob:13.20, usda:null,  tipo:"est"  },
      { sem:"WK09", fob:14.60, usda:null,  tipo:"est"  },
      { sem:"WK10", fob:17.20, usda:26.95, tipo:"est"  },
      { sem:"WK11", fob:19.06, usda:26.28, tipo:"real" },
      { sem:"WK12", fob:20.07, usda:29.62, tipo:"real" },
      { sem:"WK13", fob:22.23, usda:43.75, tipo:"real", nota:"Revenue settle $890,284 / 40,048 pkgs" },
      { sem:"WK14", fob:24.93, usda:47.95, tipo:"real", nota:"Revenue settle $762,704 / 30,592 pkgs" },
      { sem:"WK15", fob:11.07, usda:56.95, tipo:"est",  nota:"Parcial al 05-Abr · $597,772 / 53,976 pkgs — semana en curso" }
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
      nota:              "Temporada de granos en curso. TRILLA COMPLETADA WK15: Dorita+El 17 (31-Mar, 18 ha) + Carrillo (06-Abr, 12 ha) + Carrillo+Campo Beltrán+El Dos (07-Abr, 18 ha) = 48 ha cosechadas. El Panteón+San Blas pendientes. Sin ventas registradas a febrero — producción en cosecha activa. Costos WIP incluyen fertilizantes, semilla, agroquímicos y mano de obra de campo.",
      trilla: [
        { fecha:"31/03/2026", campos:"Dorita + El 17",                       ha:18, cultivo:"Sorgo" },
        { fecha:"06/04/2026", campos:"Carrillo",                             ha:12, cultivo:"Sorgo" },
        { fecha:"07/04/2026", campos:"Carrillo + Campo Beltrán + El Dos",    ha:18, cultivo:"Sorgo" }
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
    reporte: "Corbel Seeds #0022",
    fecha: "07/04/2026",
    resumen: "Vine-ripe tomate mexicano registra el mayor salto semanal de la temporada: $55.95–57.95/caja (4×4/4×5 Nogales), 'much higher' según USDA Phoenix 07-Abr — sube ~$9 desde $46.95-48.95 de la semana previa. Jalapeño colapsa a $40–42 desde $53–55 (-24%) por llegada de oferta primaveral; el rebote de la semana pasada resultó temporal. Grape tomato sube ligeramente a $30.95–32.95. Roma XL estable. Cucumber baja a $36.95–38.95. Señales estratégicas clave: cuarentena Mexfly en Zapata County Texas, México incumple tratado bilateral de agua, y volumen reducido de limón mexicano abre espacio a Colombia.",
    precios: [
      { producto:"Vine-ripe 4×4 25lb",     min:55.95, max:57.95, anterior:47.95, via:"Nogales AZ",         alerta:false },
      { producto:"Vine-ripe 5×5 25lb",     min:54.95, max:56.95, anterior:null,   via:"Nogales AZ",         alerta:false },
      { producto:"Tomate Roma 25lb (XL)",   min:38.95, max:40.95, anterior:39.95, via:"Nogales AZ",         alerta:false },
      { producto:"Grape tomato flat",       min:30.95, max:32.95, anterior:29.95, via:"Nogales AZ",         alerta:false },
      { producto:"Chile Bell GH (XL)",      min:44.95, max:46.95, anterior:44.95, via:"Nogales AZ",         alerta:false },
      { producto:"Jalapeño",                min:40.00, max:42.00, anterior:54.00, via:"Nogales AZ",         alerta:true  },
      { producto:"Habanero 8lb",            min:38.00, max:40.00, anterior:45.50, via:"Texas",              alerta:false },
      { producto:"Cucumber",                min:36.95, max:38.95, anterior:41.95, via:"Nogales AZ",         alerta:false },
      { producto:"Limón Persa 40lb",        min:56.00, max:70.00, anterior:44.00, via:"Texas (175s–250s)",  alerta:true  },
      { producto:"Limón Persa flat 200ct",  min:58.00, max:65.00, anterior:58.00, via:"LA Terminal Market", alerta:false }
    ],
    noticias: [
      { titulo:"Vine-ripe 4×4/4×5 Nogales 'much higher': $55.95–57.95 — mayor subida semanal de la temporada (+$9/caja desde $46.95-48.95)", impacto:"Alto",     fuente:"Corbel Seeds #0022" },
      { titulo:"Jalapeño colapsa a $40–42 desde $53–55 (-24%) — oferta primaveral llega al mercado; el rebote de la semana pasada resultó temporal", impacto:"Alto", fuente:"Corbel Seeds #0022" },
      { titulo:"Cuarentena Mexfly en Zapata County Texas — APHIS detectó hembra silvestre fecundada; 55 millas cuadradas en cuarentena, mayor escrutinio fitosanitario en frontera", impacto:"Alto", fuente:"Corbel Seeds #0022 · USDA" },
      { titulo:"Volumen reducido de limón mexicano abre espacio a Colombia — Colombia proyecta +15–30% de exportaciones; precios limón sostenidos por escasez mexicana", impacto:"Alto", fuente:"Corbel Seeds #0022 · FreshPlaza" },
      { titulo:"México incumple tratado bilateral de agua — riesgo irrigación en suroeste EE.UU. escala a fricción política agro bilateral", impacto:"Alto", fuente:"Corbel Seeds #0022 · FreshPlaza" },
      { titulo:"Grape tomato sube ligeramente a $30.95–32.95; cucumber baja a $36.95–38.95; Roma XL estable $38.95–40.95", impacto:"Moderado", fuente:"Corbel Seeds #0022" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"07/04", productos:["Tomate","Rezaga Tomate","Trilla Sorgo"] },
      { fecha:"06/04", productos:["Tomate","Limón Persa","Trilla Sorgo"] },
      { fecha:"04/04", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"02/04", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"01/04", productos:["Tomate","Limón Persa"] },
      { fecha:"31/03", productos:["Tomate","Limón Persa","Rezaga Tomate"] },
      { fecha:"29/03", productos:["Tomate","Rezaga Tomate"] }
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
    { label:"VINE RIPE 4×4", valor:"$55.95–57.95",  cambio:"↑ +$9 MÁXIMO TEMPORADA",     dir:"up"      },
    { label:"TOMATE ROMA XL", valor:"$38.95–40.95", cambio:"lateral",                     dir:"neutral" },
    { label:"JALAPEÑO NOG",   valor:"$40–42",        cambio:"↓ -$13 colapso -24%",        dir:"down"    },
    { label:"CHILE BELL GH",  valor:"$44.95–46.95", cambio:"firm sin cambio",             dir:"neutral" },
    { label:"GRAPE TOMATO",   valor:"$30.95–32.95", cambio:"↑ leve +$2",                 dir:"up"      },
    { label:"CUCUMBER NOG",   valor:"$36.95–38.95", cambio:"↓ -$4 leve",                 dir:"down"    },
    { label:"MERMA YAMETO",   valor:"4.97%",         cambio:"⚠ día 2 >4% WK15",          dir:"down"    },
    { label:"VENTA NETA",     valor:"$6.56M",        cambio:"Calavo WK12",                dir:"up"      },
    { label:"P&P ACUM WK15",  valor:"$3.90M",        cambio:"780,257 cajas · 458 cont",   dir:"up"      },
    { label:"EBITDA FEB",     valor:"$2.89M",        cambio:"vs BUD $2.31M ✓",            dir:"up"      },
    { label:"GASS SHEET WK15", valor:"✓ Recibido",   cambio:"Irene + Carlos 07-Abr",      dir:"up"      },
    { label:"1ª WK15 PROM",   valor:"86.88%",        cambio:"Días 1-2 · 8 reportes",      dir:"up"      },
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
        titulo: "Bola Yameto merma >4% — segundo día consecutivo WK15",
        nivel: "danger",
        descripcion: "Outbound tomate 04/04: Yameto merma 4.44%. Outbound tomate 06/04: Yameto merma 4.97%. Promedio WK15 Yameto: 4.71%. Tendencia alcista en merma preocupante.",
        accion: "Revisar causas de merma Yameto con equipo de calidad urgente. Verificar manejo postcosecha, temperatura y logística de campo a empaque."
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
      { fecha:"08/04/2026", evento:"Revisión Excel Gass Sheet WK15 con Leima — Carlos e Irene enviaron '2026 05-04 Agricola Belher Settle WK15 1.xlsx' el 07-Abr. Revisar montos de liquidación WK13–WK14–WK15 y actualizar dashboard con datos reales.", tipo:"pago", participantes:"Leima Leyva · Carlos Valadez · Irene Amezaga · Calavo" },
      { fecha:"13/04/2026", evento:"Marzo '26 F/S Tomates/Limones/Granos — revisión estados de resultado (10am, jacruz convocó 27-Mar)", tipo:"reunion", participantes:"jacruz · Leima · Antonio · JC · Armando Llanes · Felipe Calderón CRyA" },
      { fecha:"16/04/2026", evento:"BPSI F/S Marzo 2026 y Forecast Q2 2026 — revisión financiera y pipeline", tipo:"reunion", participantes:"JC · Armando Llanes · hildelisa@beautyjunkies.com" },
      { fecha:"21/04/2026", evento:"ABSA CF GC 2025-2026 OL 9+3 actualizado — revisión forecast ciclo cierre (Leima Zoom invitación 30-Mar)", tipo:"reunion", participantes:"Leima Leyva · Armando Llanes · Antonio · JC · jacruz" },
      { fecha:"Por confirmar (Abr 2026)", evento:"Reunión alineación Contrato 2026 — John Lindeman · James Snyder · Irene", tipo:"reunion", participantes:"Antonio, JC, Calavo" }
    ]
  },

  predicciones: {
    generado:  "07/04/2026 · 14:35",
    modelo:    "Claude claude-sonnet-4-6",
    horizonte: "7 días",
    nota:      "Síntesis de precios USDA Phoenix (Corbel Seeds #0022 · 07-Abr) + báscula + calidad outbound tomate 04/04 y 06/04 (Bola Yameto merma 4.71% prom WK15, Roma Calavo merma 1.89% prom WK15) + outbound limón 06/04 (merma 1%) + noticias de industria. Se regenera automáticamente cada mañana.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "alcista",
        confianza: 72,
        precio_actual:     { min: 55.95, max: 57.95 },
        precio_proyectado: { min: 51.00, max: 60.00 },
        razonamiento: "Vine-ripe registra el mayor salto semanal de la temporada: USDA Phoenix 07-Abr (Corbel #0022) confirma 'much higher' con 4×4/4×5 en $55.95-57.95 y 5×5/5×6 en $54.95-56.95. El movimiento de +$9/caja desde $46.95-48.95 ocurre durante la ventana de transición a Salinas: menor volumen mexicano antes de que la oferta californiana esté plenamente operativa genera escasez transitoria. Calidad outbound Belher WK15 promedio 2 días: primera 86.88%, merma 3.09% — sólida. Con Yameto en 4.71% merma, priorizar Bola Calavo y Romas para capturar el precio máximo.",
        factores: ["USDA Phoenix 07-Abr 'much higher' — señal de escasez transitoria en ventana Salinas", "Bola Yameto merma 4.71% prom WK15 — calidad riesgo en el producto de mayor precio", "Roma Calavo merma 1.89% prom WK15 — calidad excelente, embarcar prioritariamente", "Cuarentena Mexfly Zapata County TX — mayor escrutinio fitosanitario, disciplina crítica", "Si Salinas consolida oferta en WK16-17, corrección técnica a $48-52 posible"],
        riesgo: "Si cuarentena Mexfly genera inspecciones adicionales o rechazos en McAllen, logística retrasada puede afectar precio neto recibido.",
        accion: "EMBARCAR TODO el volumen disponible HOY — vine-ripe en máximo de temporada $55.95-57.95. Priorizar Bola Calavo y Romas (mejor merma). Verificar phyto Mexfly en manifiestos. La ventana puede cerrar en 1-2 semanas cuando Salinas se active."
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
        tendencia: "bajista",
        confianza: 68,
        precio_actual:     { min: 40.00, max: 42.00 },
        precio_proyectado: { min: 36.00, max: 46.00 },
        razonamiento: "Jalapeño colapsa a $40-42 Nogales (Corbel #0022, 07-Abr) desde $53-55 de la semana pasada — caída de $13/bu (-24%) en una sesión. El rebote de la semana previa resultó completamente temporal. La oferta primaveral de Zacatecas/Sonora llegó al mercado con más fuerza de lo esperado. Corbel #0022 señala 'spring chile crops still awaited' — puede haber más oferta entrando. Habanero también baja a $38-40 (desde $44-47): la corrección es sectorial.",
        factores: ["Oferta primaveral Zacatecas/Sonora llega al mercado — presión bajista confirmada", "Habanero también corrige a $38-40 — baja sectorial en chiles", "Corbel #0022: 'spring chile crops still awaited' — puede haber más presión bajista", "Cuarentena Mexfly Texas eleva fricción logística para embarques McAllen", "Alta volatilidad estructural: rango WK13-15 ha sido $40-60"],
        riesgo: "Si oferta primaveral se agota rápidamente o problemas de calidad limitan disponibilidad, rebote técnico a $48-52 posible en WK16.",
        accion: "No retener jalapeño esperando recuperación — el momentum es bajista. Embarcar a $40-42 si hay producto disponible. Monitorear volumen de oferta en Zacatecas semanalmente. Rango base WK15-16: $38-46."
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
        razonamiento: "Limón persa Texas en pico estacional: USDA citrus 01-Abr reporta $68-70 para 175s, $66-68 para 200s, $62-66 para 230s y $56-60 para 250s (Corbel #0018). Báscula Belher procesó limón el 06/04 (Tomate + Limón confirmados). Outbound 06/04: merma 1%, calidad excelente. El flush primaveral en abril podría moderar precios en WK16-17.",
        factores: ["USDA citrus 01-Abr confirma precios máximos estacionales $56-70 por talla", "Báscula activa 06-Abr — temporada en plena operación", "Merma 1% outbound 06-Abr — calidad excelente", "Flush primaveral esperado en abril → mayor oferta puede moderar precio en WK16-17"],
        riesgo: "Mayor oferta estacional en abril-mayo + aranceles potenciales USMCA → corrección FOB posible si flush supera expectativas.",
        accion: "Maximizar embarques de limón ahora mientras el precio está en pico. Coordinar con Maui Fresh forecast semanal para resto de abril. Monitorear USDA Nogales para confirmar FOB local."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Vine-ripe Nogales 'much higher': $55.95–57.95 (4×4/4×5) — mayor subida semanal de la temporada, +$9/caja",                impacto:"Alto",     fuente:"Corbel Seeds #0022", resumen:"USDA Phoenix 07-Abr confirma vine-ripe mexicano 'much higher'. 25 lb loose cartons 4×4 y 4×5: $55.95-$57.95; 5×5 y 5×6: $54.95-$56.95. La subida de ~$9 ocurre durante la transición a Salinas — escasez transitoria mientras la oferta californiana no está plenamente operativa. Señal fuerte para embarcar a precio máximo." },
    { cat:"Mercado",      titulo:"Jalapeño colapsa a $40–42 desde $53–55 (-24%) — oferta primaveral de Zacatecas/Sonora llega al mercado",                impacto:"Alto",     fuente:"Corbel Seeds #0022", resumen:"El rebote a $53-55 de la semana pasada resultó temporal. Nueva oferta primaveral presionó jalapeño a $40-42 en Nogales. Habanero también baja a $38-40 por 8lb. 'Spring chile crops still awaited to ease tight supply' — pero el mercado ya está cediendo antes del pico de oferta." },
    { cat:"Fitosanitario", titulo:"Cuarentena Mexfly en Zapata County Texas — APHIS detecta hembra silvestre fecundada en 55 millas cuadradas",              impacto:"Alto",     fuente:"Corbel Seeds #0022 · USDA", resumen:"APHIS y Texas establecen cuarentena de mosca de la fruta mexicana en Zapata County. No hay agricultura comercial dentro del área, pero el hallazgo eleva la sensibilidad fitosanitaria en cruce fronterizo Laredo/McAllen. Mayor escrutinio de cargamentos mexicanos esperado. Disciplina fitosanitaria Belher: crítica." },
    { cat:"Mercado",      titulo:"Menor volumen limón mexicano abre espacio a Colombia — Colombia proyecta +15–30% exportaciones Tahiti lime",              impacto:"Alto",     fuente:"Corbel Seeds #0022 · FreshPlaza", resumen:"Caída de flores por clima redujo producción mexicana de limón persa. Colombia entra al mercado norteamericano con volumen adicional. Paradójicamente, la menor oferta mexicana ayuda a sostener precios más altos. Para Belher con 70 ha de limón: la escasez de competencia directa es favorable." },
    { cat:"Agua",         titulo:"México incumple tratado bilateral de agua — disponibilidad hídrica escala a riesgo político bilateral EE.UU.-México",    impacto:"Alto",     fuente:"Corbel Seeds #0022 · FreshPlaza", resumen:"La disponibilidad de agua sigue siendo un tema de política y suministro. El incumplimiento mexicano del tratado bilateral puede desbordarse en negociaciones comerciales más amplias. Para productores del noroeste de México, la gestión del agua se convierte en variable estratégica central para la competitividad." },
    { cat:"Logística",    titulo:"Volatilidad de fletes en alza de nuevo — no en extremos COVID pero escalando lo suficiente para planificación",           impacto:"Alto",     fuente:"Corbel Seeds #0022 · FreshPlaza", resumen:"Volatilidad de fletes vuelve a aumentar ligada a factores geopolíticos. Para exportadores de perecibles: mayor complejidad en planificación de embarques. Combinado con presión de combustible (Ormuz) y fertilizantes, el entorno de costos operativos sigue siendo adverso." },
    { cat:"Regulatorio",  titulo:"México y EE.UU. fortalecen cooperación de inocuidad alimentaria — SADER, SENASICA, COFEPRIS y FDA alineados",           impacto:"Moderado", fuente:"Corbel Seeds #0022 · FreshPlaza", resumen:"Controles preventivos, trazabilidad y cooperación técnica en produce fresca y mínimamente procesada se refuerzan bilateralmente. Para Belher: cumplimiento GlobalGAP, FSMA y PrimusGFS es la palanca competitiva central. Los certificados recibidos en Mar-2026 (CUP-PGFS-524) son activos estratégicos." },
    { cat:"Sanidad",      titulo:"ToBRFV alcanza Ucrania — confirmado en invernaderos de tomate en dos oblasts por pruebas moleculares",                   impacto:"Moderado", fuente:"Corbel Seeds #0022 · HortiDaily", resumen:"El virus de la rugosidad marrón del tomate sigue expandiéndose geográficamente. Para Belher y Corbel Seeds: la resistencia ToBRFV en variedades de ensayo es ahora un diferenciador comercial crítico para clientes premium norteamericanos y europeos." },
    { cat:"Mercado",      titulo:"Grape tomato sube ligeramente a $30.95–32.95; cucumber baja a $36.95–38.95; Roma XL estable $38.95–40.95",             impacto:"Moderado", fuente:"Corbel Seeds #0022", resumen:"Grape tomato mantiene la recuperación iniciada la semana pasada, ahora en $30.95-32.95/flat. Cucumber corrige a $36.95-38.95 desde $40.95-42.95 — señal de mayor oferta. Roma XL sin cambio. Bell pepper GH mantiene firmeza sin precio específico reportado." },
    { cat:"Innovación",   titulo:"Agrivoltaica reduce 50% uso de agua en tomate (investigación española) — convergencia productividad + agua + energía",  impacto:"Moderado", fuente:"Corbel Seeds #0022 · HortiDaily", resumen:"Sistemas agrivoltaicos combinan producción de energía solar con reducción de evapotranspiración. Para Belher en contexto de restricción hídrica y costos de energía: la tecnología apunta a un modelo de greenhouse más resiliente y eficiente. Relevante para planificación GC 2026-27." },
    { cat:"Regulatorio",  titulo:"Reglas de empaque de la UE se endurecen desde agosto 2026 — exportadores deben prepararse ahora",                       impacto:"Moderado", fuente:"Corbel Seeds #0022 · HortiDaily", resumen:"La UE implementa nuevas normas de packaging que afectan a exportadores globales. Aunque Belher no exporta a Europa, los estándares europeos suelen migrar a cadenas retail premium en EE.UU. dentro de 12-24 meses." },
    { cat:"Mercado",      titulo:"Pepino snack gana relevancia retail — formato bite-sized alinea con demanda de conveniencia",                            impacto:"Bajo",     fuente:"Corbel Seeds #0022 · FreshPlaza", resumen:"El pepino snack se consolida como formato de alto valor en retail norteamericano. Potencial de diferenciación para productores con capacidad de segmentación por tamaño y empaque. Señal adicional para evaluar pepino en GC 2026-27 con enfoque en calibres premium." }
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
      { nivel: "success", texto: "Gass Sheet WK15 recibido el 07-Abr: Carlos Valadez (16:11) e Irene Amezaga (16:25) enviaron Excel con datos a WK14 completo + WK15 parcial. Revisar con Leima hoy 08-Abr para actualizar liquidaciones formales." },
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
