window.BELHER = {
  meta: {
    fecha: "Miércoles 25 Mar 2026",
    semana: "WK 13",
    actualizado: "25/03/2026 · 12:00"
  },

  alertas: [
    { nivel: "warning", texto: "Tomate Vine-ripe sube a $46.95–48.95 (+50% vs WK prev) — mercado en pico histórico según Corbel #0017" },
    { nivel: "warning", texto: "US aranceles a México: USMCA en pre-revisión · riesgo regulatorio para exportaciones de hortalizas" },
    { nivel: "warning", texto: "Jalapeño TX cae a $48–50/bu (-20% vs $58–64 WK prev) — corrección después del pico" },
    { nivel: "success", texto: "Calidad 24-Mar: merma promedio 2.85% · 1ª promedio 91.91% — dentro de parámetros de exportación" },
    { nivel: "danger",  texto: "Fertilizantes Feb: +$110k vs presupuesto (plaga Tizón)" }
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
      { fecha:"WK13", primaPromedio:91.47, mermaPromedio:2.04 }
    ],
    ultimoOutbound: {
      fecha: "24/03/2026",
      variedades: [
        { nombre:"Bola Calavo",  etiqueta:"Calavo",  canal:"exportacion", primera:92.42, segunda:1.76, tercera:2.92, merma:2.90, peso:26.66, alerta:false },
        { nombre:"Bola Yameto", etiqueta:"Yameto",  canal:"exportacion", primera:89.38, segunda:2.72, tercera:4.20, merma:3.69, peso:31.86, alerta:false },
        { nombre:"Roma Calavo",  etiqueta:"Calavo",  canal:"exportacion", primera:93.92, segunda:1.79, tercera:2.33, merma:1.96, peso:27.86, alerta:false }
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
    reporte: "Corbel Seeds #0017",
    fecha: "25/03/2026",
    resumen: "Vine-ripe tomate escala a $46.95–48.95 (+50%) — mercado en pico histórico. Roma sube a $38.95–40.95 (+33%). Jalapeño corrige a $48–50/bu (-20%). Amenaza arancelaria de EE.UU. a México y pre-revisión USMCA generan incertidumbre comercial. Red Sea: Maersk reconfigura rutas.",
    precios: [
      { producto:"Vine-ripe 4×4 25lb",   min:46.95, max:48.95, anterior:31.95, via:"SoCal/AZ",  alerta:true  },
      { producto:"Tomate Roma 25lb",      min:38.95, max:40.95, anterior:29.95, via:"SoCal/AZ",  alerta:true  },
      { producto:"Grape tomato flat",     min:18.95, max:20.95, anterior:16.95, via:"SoCal/AZ",  alerta:false },
      { producto:"Chile Bell GH (XL)",   min:42.95, max:44.95, anterior:41.95, via:"SoCal/AZ",  alerta:false },
      { producto:"Jalapeño",             min:48.00, max:50.00, anterior:61.00, via:"SoCal/AZ",  alerta:true  },
      { producto:"Anaheim",              min:34.00, max:36.00, anterior:null,   via:"SoCal/AZ",  alerta:false },
      { producto:"Habanero",             min:null,  max:null,  anterior:null,   via:"SoCal/AZ",  alerta:false, pendiente:true },
      { producto:"Vine-ripe 4×5 25lb",   min:44.00, max:46.00, anterior:30.00, via:"FOB Nogales, AZ", alerta:true  },
      { producto:"Limón Persa 40lb",     min:18.00, max:22.00, anterior:19.50, via:"FOB Nogales, AZ", alerta:false }
    ],
    noticias: [
      { titulo:"Vine-ripe tomate escala a $46.95–48.95/carton (+50% vs semana previa)",  impacto:"Alto",       fuente:"Corbel Seeds" },
      { titulo:"EE.UU. impulsa aranceles a produce mexicano — USMCA en pre-revisión",    impacto:"Alto",       fuente:"Corbel Seeds" },
      { titulo:"Jalapeño corrige a $48–50/bu después de pico $58–64 — -20%",             impacto:"Moderado",   fuente:"Corbel Seeds" },
      { titulo:"Tomato prices continue to peak in Europe — presión de oferta global",    impacto:"Moderado",   fuente:"Corbel Seeds" },
      { titulo:"Red Sea: Maersk reconfigura rutas — impacto en fletes y tiempos",        impacto:"Moderado",   fuente:"Corbel Seeds" },
      { titulo:"Brazil truckers strike risk — riesgo en cadena de suministro",            impacto:"Moderado",   fuente:"Corbel Seeds" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"24/03", productos:["Tomate"] },
      { fecha:"23/03", productos:["Tomate","Rezaga Tomate"] },
      { fecha:"21/03", productos:["Tomate"] },
      { fecha:"20/03", productos:["Tomate","Rezaga Tomate","Limón Persa"] },
      { fecha:"19/03", productos:["Tomate"] },
      { fecha:"18/03", productos:["Chile","Limón Persa"] }
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
    { hora:"07:30", asunto:"Corbel Seeds Daily News Summary #0017",             de:"Raymundo Elizalde",leido:false },
    { hora:"11:27", asunto:"REPORTE DE OUTBOUND TOMATE 24/03/2026",             de:"Calidad Belher",   leido:false },
    { hora:"21:04", asunto:"24-03-2026 REPORTES GENERALES",                    de:"Embarques Belher", leido:true  },
    { hora:"17:11", asunto:"REPORTE DE BASCULA 24/03/2026 (TOMATE)",           de:"Báscula Belher",   leido:false },
    { hora:"17:07", asunto:"REPORTE DE BASCULA 23/03/2026 (REZAGA DE TOMATE)", de:"Báscula Belher",   leido:true  }
  ],

  ticker: [
    { label:"VINE RIPE 4×4", valor:"$46.95–48.95", cambio:"+50%",    dir:"up"      },
    { label:"TOMATE ROMA",   valor:"$38.95–40.95", cambio:"+33%",    dir:"up"      },
    { label:"JALAPEÑO",      valor:"$48–50",        cambio:"-20%",    dir:"down"    },
    { label:"CHILE BELL GH", valor:"$42.95–44.95", cambio:"+2%",     dir:"up"      },
    { label:"GRAPE TOMATO",  valor:"$18.95–20.95", cambio:"+12%",    dir:"up"      },
    { label:"ANAHEIM",       valor:"$34–36",        cambio:"nuevo",   dir:"up"      },
    { label:"VENTA NETA",    valor:"$6.56M",        cambio:"Calavo WK12",     dir:"up"     },
    { label:"SALDO CALAVO",  valor:"-$2.87M",       cambio:"Due to Calavo",   dir:"down"   },
    { label:"EBITDA FEB",    valor:"$2.89M",        cambio:"vs BUD $2.31M ✓", dir:"up"     },
    { label:"WK12 P&P",      valor:"$240K",         cambio:"48K cajas",       dir:"neutral"},
    { label:"1ª PRIMERA",    valor:"91.91%",        cambio:"24-Mar ▲",  dir:"up"     },
    { label:"MERMA PROM",    valor:"2.85%",         cambio:"24-Mar",    dir:"neutral"},
    { label:"FERTILIZ.",     valor:"+$110K",        cambio:"sobre presupuesto", dir:"down" }
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
      { fecha:"Hoy Mié 25-Mar · 2pm", evento:"CF ABSA Actualizado + Proyección ciclo", tipo:"reunion",   participantes:"Juan Carlos, Antonio, Armando Llanes, Hildelisa, Leima" },
      { fecha:"~22-Mar",              evento:"Settlement WK13 Calavo (estimado ~$240K)", tipo:"pago",      participantes:"Leima Leyva · Calavo" },
      { fecha:"Mar–Abr 2026",         evento:"Transición: cierre de temporada GC",       tipo:"operacion", participantes:"Equipo operativo" }
    ]
  },

  predicciones: {
    generado: "25/03/2026 · 12:00",
    modelo: "Claude claude-opus-4-6",
    horizonte: "7 días",
    nota: "Síntesis de precios USDA + Corbel Seeds + báscula + calidad outbound + noticias de industria. Se regenera automáticamente cada mañana.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · SoCal/Nogales",
        tendencia: "lateral",
        confianza: 65,
        precio_actual:    { min: 46.95, max: 48.95 },
        precio_proyectado:{ min: 42.00, max: 47.00 },
        razonamiento: "El mercado vine-ripe alcanzó +50% en una semana impulsado por escasez simultánea en Florida (enfermedad + clima) y México, con precios europeos también en máximos históricos. Esto confirma una tesis de escasez global, no local. Sin embargo, a +50% el mercado está en territorio de sobrecompra extrema — la transición a Salinas prevista para las próximas 2-3 semanas introducirá volumen significativo. Las primeras 48 horas después de ese evento serán decisivas. En los próximos 7 días el precio debería mantenerse firme ($42-47) pero con riesgo asimétrico a la baja.",
        factores: ["Escasez simultánea Florida + México", "Precios europeos en máximos históricos", "Transición Salinas aún sin volumen", "Calor extremo en Yuma ya completo"],
        riesgo: "Entrada anticipada de volumen de Salinas o recuperación climática en Florida → corrección del 15-20% en menos de 5 días. Señal de alerta: si vine-ripe cae >$3 en una sesión, el mercado se voltea.",
        accion: "Maximizar envíos ahora. El riesgo de seguir subiendo es menor que el riesgo de corrección. No retener producto especulando con mayor alza — la ventana óptima es esta semana."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb · SoCal/Nogales",
        tendencia: "lateral",
        confianza: 72,
        precio_actual:    { min: 38.95, max: 40.95 },
        precio_proyectado:{ min: 37.00, max: 41.00 },
        razonamiento: "Roma sigue la misma dinámica de oferta que vine-ripe pero con menor volatilidad estructural. El spike de +33% se sostiene por compromisos de corto plazo en el canal foodservice — restaurantes y procesadores tienen órdenes abiertas que no pueden cancelar de inmediato. La calidad outbound de Belher está en 93.92% primera (24-Mar) lo que permite sostener precio premium. A diferencia de vine-ripe, Roma tiene una base de demanda más estable que amortigua correcciones bruscas.",
        factores: ["Correlación con vine-ripe pero menor volatilidad", "Canal foodservice con compromisos abiertos", "Calidad exportación Belher en 93.92% primera", "Sin sustitutos directos en procesamiento"],
        riesgo: "Si vine-ripe corrige, Roma sigue dentro de 24-48 horas. Procesadores con márgenes comprimidos pueden recortar pedidos si el precio no cede.",
        accion: "Esta es la ventana de máximo margen por caja Roma de toda la temporada. Priorizar calidad de empaque y clasificación para sostener precio. Confirmar órdenes abiertas con Calavo antes de fin de semana."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · SoCal/AZ",
        tendencia: "lateral",
        confianza: 75,
        precio_actual:    { min: 48.00, max: 50.00 },
        precio_proyectado:{ min: 44.00, max: 52.00 },
        razonamiento: "La corrección de $58-64 → $48-50 (-20%) era técnicamente necesaria y saludable después del pico más extremo del ciclo. Crucialmente, la causa subyacente — enfermedad y clima adverso en México y Florida — no se ha resuelto. Esto significa que la corrección no es el inicio de una caída prolongada sino una normalización. La alta volatilidad del jalapeño (±$6-8 por sesión) continuará. El nivel $48-50 representa un piso de soporte razonablemente sólido mientras la escasez persista.",
        factores: ["Escasez estructural en México y Florida sin resolver", "Corrección técnica post-pico — no derrumbe", "Alta volatilidad inherente al mercado jalapeño", "Demanda sostenida en canal Texas"],
        riesgo: "Recuperación productiva más rápida en Sinaloa/Sonora podría llevar el precio a $38-42 en 10-14 días. Monitorear reportes de campo semanalmente.",
        accion: "Precio actual de $48-50 sigue siendo históricamente muy alto. Si hay volumen disponible de jalapeño, es el producto con mejor margen relativo del portafolio chile en este momento. Priorizar envíos antes de cualquier señal de recuperación de oferta."
      },
      {
        id: "bell",
        producto: "Chile Bell GH",
        unidad: "carton XL · SoCal/AZ",
        tendencia: "lateral",
        confianza: 68,
        precio_actual:    { min: 42.95, max: 44.95 },
        precio_proyectado:{ min: 41.00, max: 46.00 },
        razonamiento: "El bell pepper GH lleva más de dos semanas estabilizado en estos niveles, lo que es la señal más sólida posible de equilibrio real de mercado. A diferencia del jalapeño (pico especulativo puntual), el bell ha tenido una apreciación gradual desde $17.50 hace varias semanas — subida estructural, no coyuntural. La demanda de greenhouse premium en retail es relativamente inelástica al precio. Sin nueva oferta visible (los ciclos de invernadero típicamente tienen 3-4 semanas de anticipo), el rango $41-46 es sostenible.",
        factores: ["2+ semanas de estabilidad = confirmación de equilibrio real", "Subida estructural (no pico especulativo)", "Demanda retail inelástica para GH premium", "Sin oferta nueva visible en el horizonte de 7 días"],
        riesgo: "Nueva producción en invernaderos de Baja California o Sonora. Señal de alerta: si el precio cae $3+ en 2 sesiones consecutivas, oferta nueva está entrando.",
        accion: "Si Belher tiene producción de bell pepper, este es el mejor momento sostenido de la temporada. Evaluar seriamente la expansión en el plan de siembra 2026-27 — el mercado manda una señal clara."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "FOB Nogales, AZ",
        tendencia: "bajista",
        confianza: 60,
        precio_actual:    { min: 18.00, max: 22.00 },
        precio_proyectado:{ min: 16.00, max: 20.00 },
        razonamiento: "La combinación de dos factores presiona a la baja: (1) el flush primaveral de producción de limón persa en México se acentúa en marzo-abril, aumentando oferta naturalmente; (2) el riesgo arancelario EE.UU.-México mencionado en Corbel #0017 podría crear fricción en exportaciones, acumulando oferta en México y agravando la caída de FOB. La confianza es menor (60%) porque el factor arancelario es incierto — paradójicamente podría también generar pánico de compra anticipada que sostenga precios brevemente.",
        factores: ["Flush primaveral de producción México (estacional)", "Tendencia histórica bajista Mar-Abr en limón", "Riesgo arancelario EE.UU. como multiplicador bajista", "Concentración 100% en Maui Fresh sin presión competitiva"],
        riesgo: "Implementación de aranceles EE.UU. a produce mexicano → acumulación de oferta → caída FOB 15-25% adicional en 2-3 semanas.",
        accion: "Priorizar envíos ahora antes de que la presión bajista se materialice. Coordinar con Maui Fresh el forecast de volumen para abril. Urgente: explorar compradores alternativos como contingencia ante el doble riesgo (estacional + arancelario)."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Vine-ripe tomate escala a $46.95–48.95/carton — pico histórico de temporada",   impacto:"Alto",       fuente:"Corbel Seeds #0017", resumen:"Mercado de tomate en máximos históricos para esta temporada. Brecha de oferta sostenida impulsa precios al alza en todos los formatos." },
    { cat:"Mercado",      titulo:"Tomate Roma sube a $38.95–40.95 (+33% vs semana previa)",                       impacto:"Alto",       fuente:"Corbel Seeds #0017", resumen:"Roma 25lb carton rompe niveles altos. Demanda firme de distribuidores y retailers ante escasez en California y Florida." },
    { cat:"Mercado",      titulo:"Jalapeño corrige a $48–50/bu después del pico $58–64 (-20%)",                   impacto:"Moderado",   fuente:"Corbel Seeds #0017", resumen:"Corrección esperada después del pico extremo de la semana previa. Nivel de $48–50 sigue siendo históricamente alto y rentable." },
    { cat:"Mercado",      titulo:"Tomato prices continue to peak in Europe — presión de oferta global",           impacto:"Moderado",   fuente:"Corbel Seeds #0017", resumen:"Europa también enfrenta picos en precio de tomate por problemas de producción en España y Países Bajos. Mercado global ajustado." },
    { cat:"Logística",    titulo:"EE.UU. impulsa aranceles a produce mexicano — USMCA en pre-revisión",           impacto:"Alto",       fuente:"Corbel Seeds #0017", resumen:"Administración Trump acelera revisión del USMCA y presiona con aranceles a hortalizas mexicanas. Riesgo directo para exportaciones de Belher a mercado estadounidense." },
    { cat:"Logística",    titulo:"Red Sea: Maersk reconfigura rutas — impacto en fletes y tiempos de tránsito",  impacto:"Moderado",   fuente:"Corbel Seeds #0017", resumen:"Maersk ajusta rutas por inseguridad en el Mar Rojo. Afecta principalmente exportaciones de Asia y Europa. Presión indirecta en costos de insumos y empaque." },
    { cat:"Logística",    titulo:"Brazil truckers strike risk — posible interrupción en cadena de suministro",    impacto:"Moderado",   fuente:"Corbel Seeds #0017", resumen:"Tensiones laborales en Brasil amenazan con paro de camioneros. Impacto potencial en exportaciones brasileñas de fruta y disrupciones en mercados alternativos." },
    { cat:"Fertilizantes",titulo:"War in Iran threatens fresh food-price shock across developing world",           impacto:"Alto",       fuente:"Reuters",            resumen:"Disrupciones de gas y envíos endurecen suministro global de fertilizantes, especialmente urea. Riesgo inmediato para presupuestos de nutrientes y decisiones de siembra." },
    { cat:"Fertilizantes",titulo:"China restricts fertiliser exports, further crimping war-tightened supply",     impacto:"Alto",       fuente:"Reuters",            resumen:"China endurece exportación de fertilizantes para proteger oferta doméstica, agravando mercado ya tenso por Medio Oriente." },
    { cat:"Clima",        titulo:"Central California growers brace for heat wave",                                impacto:"Moderado",   fuente:"Haul Produce",       resumen:"Ola de calor en San Joaquín Valley eleva preocupación sobre ritmo de cosecha y calidad. Puede tensar disponibilidad y complicar timing de transición a Salinas." },
    { cat:"Innovación",   titulo:"18 variedades tomate ToBRFV-HR desarrolladas en 7 años",                       impacto:"Estratégico",fuente:"HortiDaily",         resumen:"Genética de resistencia a ToBRFV se convierte en diferenciador comercial. Directamente relevante para el programa de breeding de Corbel Seeds." },
    { cat:"Innovación",   titulo:"The market is ready for specialties and innovation — snack vegetables",         impacto:"Estratégico",fuente:"HortiDaily",         resumen:"Empresas de semillas leen mayor demanda de formatos especiales y snack. Capacidad año-redondo es el factor decisivo para penetrar retailer de escala." }
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
  },

  calavoWeekly: {
    semana:      "WK12",
    fechas:      "16–22 Mar 2026",
    fuente:      "Irene Amezaga · Calavo Growers",
    actualizado: "25/03/2026",

    /* ── Acciones en bolsa ── */
    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 25.94, prevClose: 24.57, cambio: 1.37, cambioPct: 5.58,
        h52: 28.72, l52: 18.40, volumen: 303613,
        fuente: "Yahoo Finance"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: null, prevClose: null, cambio: null, cambioPct: null,
        h52: null, l52: null, volumen: null,
        fuente: "N/D"
      }
    ],

    /* ── Correos recientes de @calavo.com ── */
    correos: [
      {
        fecha: "25/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Week 12 Tomato Weekly Update 2026",
        tipo: "reporte", nivel: "info",
        resumen: "Reporte semanal WK12 adjunto. Belher: 488 pallets · 40 cargas · 67,840 pkgs. Rounds +7% vs proyectado; Roma +20%."
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
      },
      {
        fecha: "13/03/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya",
        asunto: "Beltran-Calavo 2026 Contract.docx",
        tipo: "contrato", nivel: "warning",
        resumen: "Borrador contrato 2026 enviado con cambios 'highlighted'. Pendiente revisión vs contrato 2023-2026 existente. Irene coordina con John y James para alinear términos antes de firmar."
      }
    ],

    /* ── Alertas de inteligencia ── */
    alertas: [
      { nivel: "warning", texto: "Contrato 2026 pendiente — borrador recibido 13-Mar con cambios. Reunión de alineación con John Lindeman y James Snyder por confirmar." },
      { nivel: "success", texto: "WK12 sobre proyección: Rounds +7% · Roma +20%. FOB promedio $20.07 vs $18.06 WK11 (+11%)." },
      { nivel: "info",    texto: "CVGW cotiza $25.94 (+5.58%) — cerca de máximo 52 semanas $28.72. Señal positiva para el negocio de aguacate Calavo." }
    ],

    /* ── KPIs de desempeño WK12 ── */
    kpi: {
      pallets: 488, loads: 40, pkgs: 67840,
      fobPromedio: 20.07, fobAnterior: 18.06, pkgsAnterior: 50053
    },

    proyecciones: {
      rounds: { proyectado: 309, actual: 329, loads: 24, pkgs: 42240, diffPct: 7  },
      roma:   { proyectado: 133, actual: 159, loads: 16, pkgs: 25600, diffPct: 20 },
      total:  { proyectado: 442, actual: 488, loads: 40, pkgs: 67840 }
    },

    adm: {
      rounds: { proyectado: 43, actual: 25, loads: 1, pkgs: 1740, diffPct: -43 }
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
    }
  }
};
