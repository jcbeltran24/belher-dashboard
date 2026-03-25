window.BELHER = {
  meta: {
    fecha: "Martes 24 Mar 2026",
    semana: "WK 13",
    actualizado: "24/03/2026 · 15:30"
  },

  alertas: [
    { nivel: "warning", texto: "Saldo Calavo WK12: -$2,873,787 — Calavo ha adelantado más del valor cosechado. Saldo se liquida al cierre de temporada." },
    { nivel: "success", texto: "Calidad exportación 23-Mar: merma 1.22% — muy por debajo del umbral 4%. Venta neta Calavo: $6,564,451" },
    { nivel: "success", texto: "Jalapeño Texas: $58–64/bu (+38% vs WK12) — oportunidad de margen activa" },
    { nivel: "danger",  texto: "Fertilizantes Feb: +$110k vs presupuesto (plaga Tizón)" },
    { nivel: "info",    texto: "Reunión CF ABSA: Mié 25-Mar · 2pm | BPSI F/S: Hoy 24-Mar · 10am" }
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
    revenueTotal:   9770259,   /* Ventas brutas Calavo WK01–WK12           */
    comision:       1172431,   /* 12% sobre ventas brutas                  */
    zCode:          1052986,   /* Expenses (Z-code)                        */
    antiDumping:     980391,   /* Anti Dumping Duty                        */
    ventaNeta:      6564451,   /* Venta neta (después de todas deducciones)*/
    pickPack:       3278205,   /* Pick & Pack adelantado recibido          */
    prestamo:        472037,   /* Préstamo Calavo                          */
    intereses:        32128,   /* Intereses sobre préstamo                 */
    capitalTrabajo: 5000000,   /* Capital de trabajo (préstamo temporada)  */
    saldoAnterior:   655867,   /* Balance adeudado de temporada 2025       */
    saldoActual:   -2873787,   /* Due from (to) Beltran al WK12            */
    neto:           6564451,   /* = ventaNeta — usado en KPI Hoy tab       */
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
      desde: "17/03/2026",
      hasta: "23/03/2026",
      variedades: [
        { nombre:"Roma Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:91.20, segunda:4.15, tercera:2.55, merma:1.80, peso:27.10, dias:5, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"nacional",    primera:89.50, segunda:5.90, tercera:2.85, merma:1.55, peso:26.20, dias:5, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"nacional",    primera:88.50, segunda:5.80, tercera:3.10, merma:2.40, peso:26.10, dias:5, alerta:false },
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:90.30, segunda:4.70, tercera:2.90, merma:2.10, peso:23.30, dias:3, alerta:false },
        { nombre:"Bola Millennium", etiqueta:"Millennium", canal:"nacional",    primera:88.10, segunda:6.00, tercera:3.40, merma:2.50, peso:22.80, dias:3, alerta:false }
      ]
    },
    historico: [
      { fecha:"WK09", primaPromedio:86.20, mermaPromedio:4.10 },
      { fecha:"WK10", primaPromedio:87.45, mermaPromedio:3.80 },
      { fecha:"WK11", primaPromedio:88.10, mermaPromedio:3.55 },
      { fecha:"WK12", primaPromedio:88.35, mermaPromedio:3.39 },
      { fecha:"WK13", primaPromedio:91.03, mermaPromedio:1.22 }
    ],
    ultimoOutbound: {
      fecha: "23/03/2026",
      variedades: [
        { nombre:"Roma Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:92.90, segunda:3.77, tercera:2.34, merma:0.99, peso:27.13, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"nacional",    primera:90.70, segunda:6.00, tercera:2.40, merma:0.90, peso:26.28, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"nacional",    primera:89.48, segunda:5.70, tercera:3.04, merma:1.78, peso:26.17, alerta:false }
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
      fuente:     "USDA Market News FOB Shipping Point"
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
      ebitda_acum:      -385851
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

  mercado: {
    reporte: "Corbel Seeds #0015",
    fecha: "23/03/2026",
    resumen: "Mercado extremadamente firme en tomate, pepino y chiles. Jalapeño alcanzó $58–64/bu en Texas (+38% vs WK12), impulsado por brecha productiva en México y Florida. Fertilizantes bajo presión global por conflicto en Medio Oriente.",
    precios: [
      { producto:"Tomate Roma 25lb XL",  min:28.95, max:30.95, anterior:24.45, via:"SoCal/AZ",  alerta:false },
      { producto:"Vine-ripe 4×4 25lb",   min:30.95, max:32.95, anterior:29.95, via:"SoCal/AZ",  alerta:false },
      { producto:"Grape tomato 12-pint", min:16.95, max:16.95, anterior:11.45, via:"SoCal/AZ",  alerta:false },
      { producto:"Pepino 1⅑ bu",         min:42.95, max:44.95, anterior:41.95, via:"SoCal/AZ",  alerta:false },
      { producto:"Chile Bell GH (XL)",   min:40.95, max:42.95, anterior:17.50, via:"SoCal/AZ",  alerta:true  },
      { producto:"Tomate Roma XL (TX)",  min:30.95, max:34.95, anterior:24.45, via:"Texas",     alerta:false },
      { producto:"GH Chile Bell (TX)",   min:17.00, max:18.00, anterior:17.50, via:"Texas",     alerta:false },
      { producto:"Jalapeño (TX)",        min:58.00, max:64.00, anterior:43.50, via:"Texas",     alerta:true  },
      { producto:"Serrano (TX)",         min:58.00, max:62.00, anterior:null,  via:"Texas",     alerta:true  }
    ],
    noticias: [
      { titulo:"Jalapeño sube a $58–64/bu en Texas (+38% semana previa)",          impacto:"Alto",      fuente:"USDA AMS" },
      { titulo:"Weather issues hike prices on peppers, tomatoes, cucumbers",        impacto:"Alto",      fuente:"HortiDaily" },
      { titulo:"Guerra Irán: shock en fertilizantes amenaza costos de producción",  impacto:"Alto",      fuente:"Reuters" },
      { titulo:"China restringe exportaciones de fertilizantes",                    impacto:"Alto",      fuente:"Reuters" },
      { titulo:"Gulf importers race to reroute as Hormuz closure jolts chains",    impacto:"Alto",      fuente:"Reuters" },
      { titulo:"Cucumber pricing to stay high for the near term",                  impacto:"Moderado",  fuente:"HortiDaily" },
      { titulo:"Central California growers brace for heat wave (Salinas transition)",impacto:"Moderado", fuente:"Haul Produce" },
      { titulo:"Brasil alerta por fertilizantes — urea disparada",                 impacto:"Moderado",  fuente:"Reuters" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"23/03", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"21/03", productos:["Tomate"] },
      { fecha:"20/03", productos:["Tomate","Rezaga Tomate","Limón Persa"] },
      { fecha:"19/03", productos:["Tomate"] },
      { fecha:"18/03", productos:["Chile","Limón Persa"] },
      { fecha:"17/03", productos:["Tomate","Rezaga Tomate"] }
    ],
    embarques: [
      { fecha:"23/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-110",   destino:"Arizona", estado:"OK" },
      { fecha:"23/03/2026", tipo:"Tomate", cargas:1, unidad:"ST-109",   destino:"Arizona", estado:"OK" },
      { fecha:"23/03/2026", tipo:"Tomate", cargas:1, unidad:"CGG-114",  destino:"Arizona", estado:"OK" },
      { fecha:"23/03/2026", tipo:"Tomate", cargas:1, unidad:"CGG-100",  destino:"Arizona", estado:"OK" },
      { fecha:"20/03/2026", tipo:"Tomate", cargas:2, unidad:"ST-2341",  destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Chile",  cargas:1, unidad:"CGG-14",   destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Limón",  cargas:3, unidad:"JL-089",   destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Tomate", cargas:2, unidad:"ST-2198",  destino:"Texas",   estado:"OK" },
      { fecha:"18/03/2026", tipo:"Chile",  cargas:1, unidad:"48291",    destino:"Arizona", estado:"OK" },
      { fecha:"17/03/2026", tipo:"Limón",  cargas:2, unidad:"JL-102",   destino:"Arizona", estado:"OK" },
      { fecha:"17/03/2026", tipo:"Tomate", cargas:3, unidad:"ST-2341",  destino:"Arizona", estado:"OK" },
      { fecha:"15/03/2026", tipo:"Tomate", cargas:2, unidad:"CGG-09",   destino:"Texas",   estado:"OK" }
    ]
  },

  correos: [
    { hora:"12:44", asunto:"REPORTE DE OUTBOUND TOMATE 23/03/2026",            de:"Calidad Belher",   leido:false },
    { hora:"21:04", asunto:"23-03-2026 REPORTES GENERALES",                    de:"Embarques Belher", leido:true  },
    { hora:"17:11", asunto:"REPORTE DE BASCULA 23/03/2026 (REZAGA DE TOMATE)", de:"Báscula Belher",   leido:false },
    { hora:"17:07", asunto:"REPORTE DE BASCULA 23/03/2026 (TOMATE)",           de:"Báscula Belher",   leido:false },
    { hora:"18:01", asunto:"Corbel Seeds Daily News Summary #0015",             de:"Raymundo Elizalde",leido:false }
  ],

  ticker: [
    { label:"JALAPEÑO TX",   valor:"$58–64/bu",    cambio:"+38%",    dir:"up"      },
    { label:"TOMATE ROMA",   valor:"$28.95–30.95", cambio:"+26%",    dir:"up"      },
    { label:"VINE RIPE 4×4", valor:"$30.95–32.95", cambio:"+3%",     dir:"up"      },
    { label:"PEPINO",        valor:"$42.95–44.95", cambio:"+2%",     dir:"up"      },
    { label:"CHILE BELL GH", valor:"$40.95–42.95", cambio:"+134%",   dir:"up"      },
    { label:"SERRANO TX",    valor:"$58–62/bu",    cambio:"nuevo",   dir:"up"      },
    { label:"VENTA NETA",    valor:"$6.56M",       cambio:"Calavo WK12",     dir:"up"     },
    { label:"SALDO CALAVO",  valor:"-$2.87M",      cambio:"Due to Calavo",   dir:"down"   },
    { label:"EBITDA FEB",    valor:"$2.89M",       cambio:"vs BUD $2.31M ✓", dir:"up"     },
    { label:"WK12 P&P",      valor:"$240K",        cambio:"48K cajas",       dir:"neutral"},
    { label:"1ª PRIMERA",    valor:"91.03%",       cambio:"23-Mar ▲",  dir:"up"     },
    { label:"MERMA PROM",    valor:"1.22%",        cambio:"23-Mar ▼",  dir:"up"     },
    { label:"FERTILIZ.",     valor:"+$110K",       cambio:"sobre presupuesto", dir:"down" }
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
        accion: "Verificar corrección del P&P a $5 en contrato. Antonio en seguimiento con Irene el 18-Mar."
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
        titulo: "Jalapeño: ventana de precio histórico en Texas",
        prioridad: "Alta",
        descripcion: "Jalapeño escaló a $58–64/bu en Texas (+38% vs WK12). Brecha productiva en México y Florida. Mientras persista escasez, margen por caja es excepcional.",
        accion: "Evaluar incremento de volumen jalapeño en próxima siembra. Revisar disponibilidad logística con Calavo."
      },
      {
        titulo: "Pepino: firmeza estructural sostenida",
        prioridad: "Alta",
        descripcion: "Pepino @$42.95–44.95/bu. HortiDaily: 'Cucumber pricing to stay high for near term.' Fortaleza estructural, no coyuntural — costos elevados y débil rentabilidad distorsionan oferta.",
        accion: "Considerar inclusión o ampliación del programa de pepino en GC 2026-27."
      },
      {
        titulo: "Variedades ToBRFV-HR como diferenciador comercial",
        prioridad: "Media",
        descripcion: "18 variedades resistentes a ToBRFV desarrolladas en 7 años por sector. La genética de resistencia se convierte en el factor decisivo para clientes premium norteamericanos.",
        accion: "Alinear con Raymundo adopción en ensayos Corbel Seeds para temporada 2026-27."
      },
      {
        titulo: "Mini-vegetales y snack formats — categoría en crecimiento",
        prioridad: "Media",
        descripcion: "Categoría snack/mini vegetal acelera. Capacidad de producción año-redondo es el factor decisivo para grandes retailers. Oportunidad para Corbel en breeding.",
        accion: "Revisar pipeline de variedades snack con Raymundo. Evaluar ensayos en campo."
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
        accion: "Incluir en agenda reunión BPSI F/S del 24-Mar. Definir plan de acción."
      },
      {
        titulo: "Plaga Tizón: agroquímicos $147K sobre budget acumulado",
        nivel: "warning",
        descripcion: "Feb 2026: +$110K en agroquímicos por Tizón. Acumulado Jul-Feb: $147K sobre presupuesto. Tendencia preocupante si persiste.",
        accion: "Evaluar programa preventivo para cierre de temporada. Revisar en CF ABSA del 25-Mar."
      },
      {
        titulo: "Nómina agrícola: $33K sobre budget en febrero",
        nivel: "warning",
        descripcion: "Nómina agrícola $178K vs $144K presupuesto en febrero. Diferencia $33K (23% sobre budget). Revisar si es tendencia o pico puntual.",
        accion: "Revisar detalle con Leima en CF ABSA del 25-Mar."
      }
    ],
    proximos: [
      { fecha:"Mar 24-Mar · 10am", evento:"BPSI F/S Febrero 2026 + Forecast Q1",     tipo:"reunion",   participantes:"Juan Carlos, Antonio, Armando Llanes, Hildelisa, Leima" },
      { fecha:"Mié 25-Mar · 2pm",  evento:"CF ABSA Actualizado + Proyección ciclo",   tipo:"reunion",   participantes:"Juan Carlos, Antonio, Armando Llanes, Hildelisa, Leima" },
      { fecha:"~22-Mar",           evento:"Settlement WK13 Calavo (estimado ~$240K)", tipo:"pago",      participantes:"Leima Leyva · Calavo" },
      { fecha:"Mar–Abr 2026",      evento:"Transición: cierre de temporada GC",       tipo:"operacion", participantes:"Equipo operativo" }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Weather issues hike prices on peppers, tomatoes and cucumbers",              impacto:"Alto",       fuente:"HortiDaily",   resumen:"Brecha productiva en México y Florida mantiene mercado corto en chiles, pepino y tomate. Condiciones cálidas, presión de enfermedades y efectos de heladas en Florida." },
    { cat:"Mercado",      titulo:"Cucumber pricing to stay high for the near term",                            impacto:"Moderado",   fuente:"HortiDaily",   resumen:"Costos elevados y débil rentabilidad distorsionan comportamiento normal de oferta-demanda en pepino. Alivio no esperado de inmediato." },
    { cat:"Mercado",      titulo:"Jalapeño Texas escala a $58–64/bu (+38% vs semana previa)",                  impacto:"Alto",       fuente:"USDA AMS",     resumen:"Precios de jalapeño en Texas alcanzan niveles históricos. Escasez estructural por problemas climáticos y de enfermedad en México y Florida." },
    { cat:"Mercado",      titulo:"Northwest storage onions wind down as Mexico and Texas ship fresh",           impacto:"Bajo",       fuente:"Haul Produce",  resumen:"Transición estacional del mercado de cebolla. México y Texas Sur inician envíos de producto fresco mientras bajan stocks del Noroeste." },
    { cat:"Logística",    titulo:"Gulf importers race to reroute as Hormuz closure jolts supply chains",      impacto:"Alto",       fuente:"Reuters",      resumen:"Importadores del Golfo desvían alimentos y perecederos por puertos y rutas aéreas alternas. Fletes más caros y tiempos más largos para todo exportador." },
    { cat:"Logística",    titulo:"Australian carrot exports disrupted as Middle East shipping halts",          impacto:"Moderado",   fuente:"FreshPlaza",   resumen:"Australia ya es afectada por interrupción de envíos a Medio Oriente. Ejemplo concreto de cómo los shocks logísticos alcanzan el comercio vegetal." },
    { cat:"Fertilizantes",titulo:"War in Iran threatens fresh food-price shock across developing world",       impacto:"Alto",       fuente:"Reuters",      resumen:"Disrupciones de gas y envíos endurecen suministro global de fertilizantes, especialmente urea. Riesgo inmediato para presupuestos de nutrientes y decisiones de siembra." },
    { cat:"Fertilizantes",titulo:"China restricts fertiliser exports, further crimping war-tightened supply", impacto:"Alto",       fuente:"Reuters",      resumen:"China endurece exportación de fertilizantes para proteger oferta doméstica, agravando mercado ya tenso por Medio Oriente." },
    { cat:"Fertilizantes",titulo:"Brazil sounds alarm on fertilizers as price spike spurs cheaper alternatives",impacto:"Moderado",  fuente:"Reuters",      resumen:"Brasil ya busca sustitutos de urea ante disparada de precios. Señal de que el mercado global de nutrientes se endurece para todos." },
    { cat:"Fertilizantes",titulo:"India in talks with Russia, Belarus, Morocco to boost fertiliser imports",  impacto:"Moderado",   fuente:"Reuters",      resumen:"India se mueve temprano para asegurar fertilizantes antes de su próximo ciclo de siembra. El scramble global por producto es señal de mercado duro." },
    { cat:"Clima",        titulo:"Central California growers brace for heat wave",                             impacto:"Moderado",   fuente:"Haul Produce",  resumen:"Ola de calor en San Joaquín Valley eleva preocupación sobre ritmo de cosecha y calidad. Puede tensar disponibilidad y complicar timing de transición a Salinas." },
    { cat:"Clima",        titulo:"Little Gem lettuce transitioning to Salinas due to extreme Yuma heat",      impacto:"Bajo",       fuente:"FreshPlaza",   resumen:"Clima muy cálido en Yuma aceleró maduración. Transición a Salinas es punto de equilibrio clave para lechuga Little Gem." },
    { cat:"Innovación",   titulo:"18 variedades tomate ToBRFV-HR desarrolladas en 7 años",                   impacto:"Estratégico",fuente:"HortiDaily",   resumen:"Genética de resistencia a ToBRFV se convierte en diferenciador comercial. Directamente relevante para el programa de breeding de Corbel Seeds." },
    { cat:"Innovación",   titulo:"The market is ready for specialties and innovation — snack vegetables",     impacto:"Estratégico",fuente:"HortiDaily",   resumen:"Empresas de semillas leen mayor demanda de formatos especiales y snack. Capacidad año-redondo es el factor decisivo para penetrar retailer de escala." },
    { cat:"Innovación",   titulo:"Demand picking up, but increasing costs starting to bite",                  impacto:"Moderado",   fuente:"FreshPlaza",   resumen:"Operación UK vegetal reporta demanda estable pero costos de insumos muy dolorosos, especialmente diesel ligado a geopolítica. Recuperación de márgenes más difícil." },
    { cat:"Energía",      titulo:"Stack battery system installed for tomato grower",                          impacto:"Bajo",       fuente:"HortiDaily",   resumen:"Almacenamiento en batería a nivel productor de tomate. La resiliencia productiva depende tanto de ingeniería energética como de manejo de cultivo." },
    { cat:"Energía",      titulo:"Yeager Energy to expand geothermal capacity in Oostland, Netherlands",     impacto:"Bajo",       fuente:"HortiDaily",   resumen:"Expansión geotérmica en zona invernadero de Europa muestra que el sector avanza rápido para estabilizar costos de calor." },
    { cat:"Energía",      titulo:"Dutch grower Vereijken Kwekerijen installs solar panels across seven sites",impacto:"Bajo",       fuente:"HortiDaily",   resumen:"Despliegue solar a gran escala en múltiples sitios de invernadero refuerza que la energía distribuida es ya una estrategia mainstream." }
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
    }
  }
};
