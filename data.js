window.BELHER = {
  meta: {
    fecha: "Martes 24 Mar 2026",
    semana: "WK 13",
    actualizado: "24/03/2026 · 12:47"
  },

  alertas: [
    { nivel: "success", texto: "Calidad exportación 23-Mar: merma promedio 1.22% — muy por debajo del umbral 4%" },
    { nivel: "success", texto: "Jalapeño Texas: $58–64/bu (+38% vs WK12) — oportunidad de margen activa" },
    { nivel: "danger",  texto: "Fertilizantes Feb: +$110k vs presupuesto (plaga Tizón)" },
    { nivel: "info",    texto: "Reunión CF ABSA: Mié 25-Mar · 2pm | BPSI F/S: Hoy 24-Mar · 10am" },
    { nivel: "info",    texto: "Outbound 23-Mar: Roma Calavo 92.90% · Roma Millennium 90.70% · Roma Urson 89.48%" }
  ],

  ebitda: {
    mes:  { nombre: "Febrero 2026", actual: 2686859, budget: 2305940, yago: 488398 },
    ytd:  { nombre: "Jul–Feb 2026", actual: -4082002, budget: -4124108, yago: -7496875 }
  },

  revenue: {
    total:    11532088,
    fob:       7662531,
    nacional:  3856070
  },

  calavo: {
    revenueTotal: 9770259,
    comision:     2149457,
    pickPack:     3278205,
    zCode:        1052986,
    neto:         3289611,
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
    historico: [
      { fecha:"17/03", primaPromedio:89.50, mermaPromedio:3.00 },
      { fecha:"19/03", primaPromedio:87.69, mermaPromedio:3.62 },
      { fecha:"20/03", primaPromedio:88.50, mermaPromedio:3.50 },
      { fecha:"21/03", primaPromedio:87.72, mermaPromedio:3.42 },
      { fecha:"23/03", primaPromedio:91.03, mermaPromedio:1.22 }
    ],
    ultimoOutbound: {
      fecha: "23/03/2026",
      variedades: [
        { nombre:"Roma Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:92.90, segunda:3.77, tercera:2.34, merma:0.99, peso:27.13, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:90.70, segunda:6.00, tercera:2.40, merma:0.90, peso:26.28, alerta:false },
        { nombre:"Roma Urson",      etiqueta:"Urson",      canal:"exportacion", primera:89.48, segunda:5.70, tercera:3.04, merma:1.78, peso:26.17, alerta:false }
      ]
    }
  },

  tomate: {
    ventas: {
      exportacion: [
        { etiqueta:"Calavo",     cajas:421000, revenue:7662531 },
        { etiqueta:"Urson",      cajas:null,   revenue:null },
        { etiqueta:"Millennium", cajas:null,   revenue:null },
        { etiqueta:"Zazu",       cajas:null,   revenue:null }
      ],
      nacional: [
        { etiqueta:"Yameto", cajas:null, revenue:3856070 },
        { etiqueta:"Tolin",  cajas:null, revenue:null }
      ]
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
      { fecha:"20/03/2026", tipo:"Tomate", cargas:2, unidad:"ST-2341",  destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Chile",  cargas:1, unidad:"CGG-14",   destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Limón",  cargas:3, unidad:"JL-089",   destino:"Arizona", estado:"OK" },
      { fecha:"19/03/2026", tipo:"Tomate", cargas:2, unidad:"ST-2198",  destino:"Texas",   estado:"OK" },
      { fecha:"18/03/2026", tipo:"Chile",  cargas:1, unidad:"48291",    destino:"Arizona", estado:"OK" },
      { fecha:"17/03/2026", tipo:"Limón",  cargas:2, unidad:"JL-102",   destino:"Arizona", estado:"OK" },
      { fecha:"17/03/2026", tipo:"Tomate", cargas:3, unidad:"ST-2341",  destino:"Arizona", estado:"OK" },
      { fecha:"15/03/2026", tipo:"Tomate", cargas:2, unidad:"CGG-09",   destino:"Texas",   estado:"OK" },
      { fecha:"14/03/2026", tipo:"Limón",  cargas:2, unidad:"JL-089",   destino:"Arizona", estado:"OK" },
      { fecha:"13/03/2026", tipo:"Chile",  cargas:1, unidad:"73041",    destino:"Arizona", estado:"OK" },
      { fecha:"13/03/2026", tipo:"Tomate", cargas:2, unidad:"ST-2198",  destino:"Texas",   estado:"OK" },
      { fecha:"12/03/2026", tipo:"Limón",  cargas:3, unidad:"JL-102",   destino:"Arizona", estado:"OK" }
    ]
  },

  correos: [
    { hora:"12:44", asunto:"REPORTE DE OUTBOUND TOMATE 23/03/2026",            de:"Calidad Belher",   leido:false },
    { hora:"21:04", asunto:"23-03-2026 REPORTES GENERALES",                    de:"Embarques Belher", leido:false },
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
    { label:"EBITDA FEB",    valor:"$2.69M",       cambio:"vs BUD $2.31M ✓", dir:"up" },
    { label:"WK12 P&P",      valor:"$240K",        cambio:"48K cajas", dir:"neutral"},
    { label:"1ª PRIMERA",    valor:"91.03%",       cambio:"23-Mar ▲",  dir:"up"     },
    { label:"MERMA PROM",    valor:"1.22%",        cambio:"23-Mar ▼",  dir:"up"     },
    { label:"FERTILIZ.",     valor:"+$110K",       cambio:"sobre presupuesto", dir:"down" }
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
  ]
};
