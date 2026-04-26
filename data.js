window.BELHER = {
  meta: {
    fecha: "Sábado 26 Abr 2026",
    semana: "WK 17",
    actualizado: "26/04/2026 · 14:30"
  },

  alertas: [
    { nivel:"danger",   texto:"BOLA CALAVO 25/04 — merma 5.62% ELEVADA según REPORTE OUTBOUND 25/04 · Patrón persistente semanal. Primera 71.53%, peso 24.77 kg. Quinta semana consecutiva con merma >3% en Bola Calavo. Investigar urgentemente: manejo postcosecha, temperatura campo-empaque, condición de fruta en origen." },
    { nivel:"success",  texto:"VINE-RIPE ALCISTA SOSTENIDO — Corbel #0034 (23-Abr): $62.95–64.95 Nogales 2-layer 4×4/4×5. Roma XL $44.95–46.95 firme. Mercado tomate mantiene momentum por restrict. suministro GH global + tariffs USMCA." },
    { nivel:"warning",  texto:"ROMA CALAVO OUTBOUND 25/04 — merma 2.47% controlada, primera 88.79% sólida (peso 26.03 kg). Calidad aceptable para embarque. Priorizar Roma sobre Bola mientras merma Bola Calavo sea crítica." },
    { nivel:"success",  texto:"TRILLA SORGO ACELERADA: WK17 continuación + 37 ha previas = 219 ha acumuladas. El Panteón + San Blas pendientes. Cosecha activa en marcha hacia conclusión." },
    { nivel:"warning",  texto:"AUDITORÍA CALAVO — 18-19 Mayo 2026 confirmada. Auditor Javier Martínez (Buyers Edge). Revisar inventarios de insumos críticos y gestionar servicios pendientes con tiempo." }
  ],

  ebitda: {
    mes:  { nombre: "Marzo 2026",   actual: 2864510, budget: 2483483,  yago: 2530188  },
    ytd:  { nombre: "Jul–Mar 2026", actual: -1217116, budget: -1640625, yago: -4966686 }
  },

  revenue: {
    total:    19848494,
    fob:      15992424,
    nacional:  3856070
  },

  deudas: {
    corte: "22-Mar-2026",
    totalGeneral: 16130436,
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
        nota: "4 líneas de crédito — vencen May–Jul 2026."
      },
      {
        banco: "Santander",
        saldo: 490000,
        creditos: [
          { disposicion: 115000, saldoActual:  63315, fechaFin:"Mar-2027", amortMensual:  3230 },
          { disposicion: 775000, saldoActual: 426685, fechaFin:"Mar-2027", amortMensual: 21770 }
        ],
        amortMensualTotal: 25000,
        nota: "2 créditos USD · mensualidad ~$25K · liquidan Mar-2027."
      }
    ],
    totalBancos: 4340000,

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
      total: 1144712,
      detalle: {
        imssInfonav_vencido:  296000,
        sat_vencido:          178000,
        convenioImss:         671000
      },
      nota: "Convenio IMSS vigente — pagos mensuales de acuerdo a convenio. Multas IMSS pendientes."
    },

    anticiposNacional: 561938,

    resumen: {
      calavo:               0,
      bancos:         4340000,
      proveedores:    7160000,
      impuestos:      1144712,
      subtotal:      12644712,
      anticiposNac:    561938,
      total:         13206650
    }
  },

  calavo: {
    revenueTotal:  15992424,
    comision:            3518333,
    comisionPct:             0.22,
    zCode:           1321118,
    ventaNeta:      11152973,
    pickPack:       4091620,
    intereses:        32128,

    deudaCalavo: {
      total:           5959027,
      anticipo:        5000000,
      prestamoPuente:   931527,
      pagosAnticipo: [
        { fecha:"15-May-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Jun-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Jul-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"15-Ago-2025", monto:1250000, tipo:"Anticipo",         estado:"Recibido" },
        { fecha:"Temp. 2025",  monto: 931527, tipo:"Balance 2025+int", estado:"Recibido" }
      ],
      amortizadoWk16:  6679418,
      pendiente:             0,
      creditoBelher:    720391,
      avgLiq_wk11_14:   455647,
      cruceEstimado:   "WK16",
      cruceEstimadoFecha: "15-Abr-2026",
      cruceFecha:      "15-Abr-2026",
      cruceConfirmado: true
    },
    capitalTrabajo: 5959027,
    prestamo:        472037,
    saldoAnterior:   655867,

    porLiquidar:     720391,
    saldoActual:     720391,
    neto:           6564451,

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
      desde: "20/04/2026",
      hasta:  "26/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:81.41, segunda:9.71,  tercera:5.19, merma:3.69, peso:25.61, dias:2, alerta:false },
        { nombre:"Bola Ergo",       etiqueta:"Ergo",       canal:"exportacion", primera:82.67, segunda:11.74, tercera:2.51, merma:3.09, peso:25.80, dias:2, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:90.29, segunda:4.74,  tercera:2.66, merma:2.32, peso:25.63, dias:2, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:86.88, segunda:9.32,  tercera:2.73, merma:1.08, peso:26.25, dias:1, alerta:false },
        { nombre:"Roma Zazu",       etiqueta:"Zazu",       canal:"exportacion", primera:84.00, segunda:8.40,  tercera:5.60, merma:2.00, peso:27.05, dias:1, alerta:false },
        { nombre:"Roma Tolin",      etiqueta:"Tolin",      canal:"exportacion", primera:73.33, segunda:12.67, tercera:5.67, merma:8.33, peso:34.08, dias:1, alerta:true  }
      ]
    },
    historico: [
      { fecha:"WK13", primaPromedio:89.20, mermaPromedio:2.82 },
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:82.01, mermaPromedio:5.12, nota:"Días 1-6: 04/04·5vars, 06/04·3vars, 07/04·4vars (incl Tolin), 08/04·1var, 09/04·3vars, 11/04·4vars. Roma Calavo 11/04 merma 6.00%. Bola Calavo 09/04 merma 6.78% CRÍTICO. Tolin 07/04 merma 30.18% outlier." },
      { fecha:"WK16", primaPromedio:82.70, mermaPromedio:3.06, nota:"Días 1-6 (13/04-18/04): D1 BC 0.93%+RMill 1.20%, D2 BC 4.75%+RCal 1.58%, D3 BC 2.56%, D4 RZazu 1.59%, D5 BC 4.46%+Ergo 3.53%+BTolin 6.40%+RTolin 3.80%, D6 BC 2.91%+Ergo 3.67%+RMill 2.97%." },
      { fecha:"WK17", primaPromedio:82.50, mermaPromedio:3.67, nota:"D1(20/04): BC 4.10% · Ergo 3.00% · Roma Cal 1.39% · Roma Mill 1.08% · Roma Zazu 2.00%. D2(21/04): BC 3.27% · Ergo 3.18% · Roma Cal 3.24% · Roma Tolin 8.33%. D3(23/04): Bola Calavo 73.36% P, Merma 5.24% · Bola Ergo 76.32% P, Merma 2.34% · Roma Calavo 88.35% P, Merma 1.75%. D4(25/04): Bola Calavo 71.53% P, Merma 5.62% · Bola Ergo 79.13% P, Merma 3.23% · Roma Calavo 88.79% P, Merma 2.47%." }
    ],
    ultimoOutbound: {
      fecha: "25/04/2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:71.53, segunda:11.17, tercera:11.68, merma:5.62, peso:24.77, alerta:true  },
        { nombre:"Bola Ergo",       etiqueta:"Ergo",       canal:"exportacion", primera:79.13, segunda:10.76, tercera:9.07, merma:3.23, peso:25.62, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:88.79, segunda:5.81, tercera:2.93, merma:2.47, peso:26.03, alerta:false },
        { nombre:"Roma Millennium", etiqueta:"Millennium", canal:"exportacion", primera:89.32, segunda:6.07, tercera:2.66, merma:1.95, peso:26.09, alerta:false }
      ],
      anterior: {
        fecha: "23/04/2026",
        variedades: [
          { nombre:"Bola Calavo",     etiqueta:"Calavo",     canal:"exportacion", primera:73.36, segunda:11.28, tercera:10.12, merma:5.24, peso:24.77, alerta:true  },
          { nombre:"Bola Ergo",       etiqueta:"Ergo",       canal:"exportacion", primera:76.32, segunda:12.27, tercera:9.07, merma:2.34, peso:25.98, alerta:false },
          { nombre:"Roma Calavo",     etiqueta:"Roma",       canal:"exportacion", primera:88.35, segunda:6.23, tercera:3.67, merma:1.75, peso:25.26, alerta:false }
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
    preciosHistorico: [
      { sem:"WK01", fob:11.80, usda:13.95, tipo:"real", nota:"10,824 pkgs · $127,737" },
      { sem:"WK02", fob:10.57, usda:13.45, tipo:"real", nota:"24,280 pkgs · $255,896" },
      { sem:"WK03", fob:11.16, usda:14.95, tipo:"real", nota:"44,385 pkgs · $495,284" },
      { sem:"WK04", fob:12.85, usda:16.95, tipo:"real", nota:"48,606 pkgs · $624,488 (pico navideño)" },
      { sem:"WK05", fob:15.45, usda:15.95, tipo:"real", nota:"60,965 pkgs · $942,051" },
      { sem:"WK06", fob:14.55, usda:15.45, tipo:"real", nota:"85,593 pkgs · $1,245,692" },
      { sem:"WK07", fob:12.72, usda:14.95, tipo:"real", nota:"86,722 pkgs · $1,103,258" },
      { sem:"WK08", fob:13.69, usda:17.45, tipo:"real", nota:"58,995 pkgs · $807,878" },
      { sem:"WK09", fob:17.13, usda:21.95, tipo:"real", nota:"43,120 pkgs · $738,537" },
      { sem:"WK10", fob:27.58, usda:29.95, tipo:"real", nota:"69,920 pkgs · $1,928,398 — pico de temporada" },
      { sem:"WK11", fob:20.46, usda:26.28, tipo:"real", nota:"69,798 pkgs · $1,428,197" },
      { sem:"WK12", fob:19.34, usda:29.62, tipo:"real", nota:"48,000 pkgs · $928,429" },
      { sem:"WK13", fob:22.23, usda:43.75, tipo:"real", nota:"40,048 pkgs · $890,284" },
      { sem:"WK14", fob:24.93, usda:47.95, tipo:"real", nota:"Settle: 30,592 pkgs · $762,704" },
      { sem:"WK15", fob:39.72, usda:58.95, tipo:"real", nota:"CONFIRMADO WK16 settle: $2,144,379 / 53,976 cajas = $39.72/cj real" },
      { sem:"WK16", fob:28.95, usda:58.45, tipo:"real", nota:"Settle 15-Abr: $1,101,951 / 38,067 cajas = $28.95/cj. Rework -3." }
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
      nota:              "Temporada de granos en curso. TRILLA WK17 (continuación): Sifón 1 20/04 (12 ha) + Sifón 1 21/04 (25 ha) = 37 ha WK17. Acumulado total: 219 ha. El Panteón + San Blas pendientes. Sin ventas registradas — producción en cosecha activa.",
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
        { fecha:"15/04/2026", campos:"Las Viudas",                                            ha:25, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 15-Abr" },
        { fecha:"17/04/2026", campos:"Quevedo 1 + Gringo + Composta",                         ha:7,  cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 17-Abr" },
        { fecha:"20/04/2026", campos:"Sifón 1",                                               ha:12, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 20-Abr" },
        { fecha:"21/04/2026", campos:"Sifón 1",                                               ha:25, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 21-Abr" }
      ]
    }
  },

  cashflow: {
    periodo:             "GC 2025–2026 · OL 9+3 · Act. 19 Abr 2026",
    modelo:              "OL 9+3",
    fecha_cierre:        "19/04/2026",
    fuente:              "leima@agbelher.com · 21 Abr 2026",
    moneda:              "USD",
    pendiente_excel:     false,

    saldo_inicial:       9278,
    fecha_ultimo_actual: "19/04/2026",
    saldo_forecast:      -3989357,
    saldo_ajustado:      606643,

    anticipos_recibidos: 7509531,
    anticipos_aplicados: 5710567,
    anticipos_por_pagar: 1798964,

    breakeven_escenarios: [
      { nombre:"Base · FOB $40 Abr / $20 May-Jun",            fob_abr:40, fob_may:20, fob_jun:20, cajas:344781, saldo_favor:3549526,  saldo_final_ciclo:-439831  },
      { nombre:"Optimista · FOB $45 Abr / $45 May / $20 Jun", fob_abr:45, fob_may:45, fob_jun:20, cajas:344781, saldo_favor:7568391,  saldo_final_ciclo:3579034  }
    ],

    breakeven_precio_base:      20.00,
    breakeven_precio_target:    40.00,
    breakeven_precio_por_caja:  11.57,
    breakeven_volumen:          344781,
    breakeven_monto:            3989357,

    precio_mercado: {
      precio_actual_fob:       20.07,
      precio_requerido_ol:     40.00,
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
      { mes:"Abril", cajas_contrato:160000, cajas_spot:0, precio_contrato:40.00, escalador_desde:45.00 },
      { mes:"Mayo",  cajas_contrato:170973, cajas_spot:0, precio_contrato:20.00, escalador_desde:45.00 },
      { mes:"Junio", cajas_contrato:13808,  cajas_spot:0, precio_contrato:20.00, escalador_desde:null  }
    ],

    bridge: [
      { concepto:"10 USD × 170k cajas exportación neto comisión (OL)",           monto:1496000,  tipo:"precio"  },
      { concepto:"WK Calavo 4 de 4 — agosto 2026",                               monto:1250000,  tipo:"calavo"  },
      { concepto:"Ingreso estimado sorgo GC 2025–2026",                           monto:100000,   tipo:"otro"    },
      { concepto:"Posible primer avance Bajío GC 2026–2027",                      monto:1750000,  tipo:"credito" }
    ],

    entradas: [
      { concepto:"Avances liquidación Calavo (Abr–Jul)",              monto:3355274, categoria:"Exportación" },
      { concepto:"WK Calavo GC 2026–2027 · capital trabajo (3 de 4)", monto:3750000, categoria:"Exportación" },
      { concepto:"Liquidación final Calavo GC 2025–2026 (Jul 30)",   monto:864950,  categoria:"Exportación" },
      { concepto:"Pick & Pack · Calavo (Abr 20 – Jun 11)",           monto:1277355, categoria:"Exportación" },
      { concepto:"Recuperación de IVAs (Abr–Jul)",                   monto:311961,  categoria:"Fiscal"      }
    ],

    salidas: [
      { concepto:"Gastos operativos (nóminas, insumos, empaque, flete)", monto:6550000, categoria:"Operación"  },
      { concepto:"Bajío — amortizaciones + intereses (May–Jul)",         monto:4100000, categoria:"Financiero" },
      { concepto:"Semilleras GC 2026–2027",                              monto:983590,  categoria:"Inversión"  },
      { concepto:"IMSS e INFONAVIT",                                     monto:690062,  categoria:"Fiscal"     },
      { concepto:"SAT e impuestos",                                      monto:346989,  categoria:"Fiscal"     },
      { concepto:"Anticipo plántulas GC 2026–2027 (Tajin + Hishtil)",   monto:382500,  categoria:"Inversión"  },
      { concepto:"Santander — amortizaciones",                           monto:154377,  categoria:"Financiero" },
      { concepto:"Hishtil GC 2024–2025 — abonos mensuales",             monto:239154,  categoria:"Financiero" },
      { concepto:"Plástico y cinta riego GC 2026–2027",                 monto:130785,  categoria:"Inversión"  }
    ],

    historico: [
      { mes:"Jul 25",  entradas:null,    salidas:null,    neto:null,       saldo:60704,    tipo:"real"     },
      { mes:"Ago 25",  entradas:null,    salidas:null,    neto:null,       saldo:722457,   tipo:"real"     },
      { mes:"Oct 25",  entradas:null,    salidas:null,    neto:null,       saldo:7996,     tipo:"real"     },
      { mes:"Nov 25",  entradas:null,    salidas:null,    neto:null,       saldo:29349,    tipo:"real"     },
      { mes:"Dic 25",  entradas:877343,  salidas:804177,  neto:73166,      saldo:82304,    tipo:"real"     },
      { mes:"Ene 26",  entradas:2682400, salidas:2706276, neto:-23876,     saldo:58428,    tipo:"real"     },
      { mes:"Feb 26",  entradas:2481092, salidas:2526852, neto:-45760,     saldo:12668,    tipo:"real"     },
      { mes:"Mar 26",  entradas:312688,  salidas:247510,  neto:65178,      saldo:65178,    tipo:"real",
        nota:"Saldo real al 31-Mar-2026" },
      { mes:"Abr 26",  entradas:2464000, salidas:2568000, neto:-104000,    saldo:-39683,   tipo:"mixto",
        nota:"Real al 19-Abr · forecast al 30-Abr (OL 9+3)" },
      { mes:"May 26",  entradas:3231025, salidas:4759284, neto:-1528259,   saldo:-1567942, tipo:"forecast",
        nota:"Incluye semilleras $984K, WK Calavo $1.25M, Bajío $1.22M" },
      { mes:"Jun 26",  entradas:3189878, salidas:4103804, neto:-913926,    saldo:-2481868, tipo:"forecast",
        nota:"WK Calavo $1.25M · Bajío $1.55M · IMSS/SAT $277K" },
      { mes:"Jul 26",  entradas:2722739, salidas:4230228, neto:-1507489,   saldo:-3989357, tipo:"forecast",
        nota:"Liquidación Calavo $865K + WK $1.25M vs Bajío $1.33M + plántulas $383K" }
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
    reporte: "Corbel Seeds #0034",
    fecha: "23/04/2026",
    resumen: "Corbel #0034 (23-Abr): Vine-ripe Nogales $62.95–64.95 2-layer (4×4/4×5) — alcista sostenido. Roma XL $44.95–46.95 firme en pico de fortaleza. Chile Bell verde Nogales XL $28.95–30.95 (mercado insuficiente reportado USDA). Jalapeño México $1,500 MXP/arpilla 30kg SNIIM. Limón seedless 110s $31.50–36.35 7/10-bu Nogales ajustado. Impuesto coco/turba presiona costos GH. Mosca de Fruta cuarentena Condado Zapata TX.",
    precios: [
      { producto:"Vine-ripe 4×4/4×5 25lb", min:62.95, max:64.95, anterior:60.95, via:"Nogales AZ",  alerta:false },
      { producto:"Roma XL 25lb",            min:44.95, max:46.95, anterior:40.95, via:"Nogales AZ",  alerta:false },
      { producto:"Grape tomato flat",       min:26.95, max:26.95, anterior:24.95, via:"Nogales AZ",  alerta:false },
      { producto:"Chile Bell verde large",  min:38.95, max:40.95, anterior:40.95, via:"Nogales AZ",  alerta:false },
      { producto:"Chile Bell verde XL",     min:28.95, max:30.95, anterior:42.95, via:"Nogales AZ",  alerta:true  },
      { producto:"Jalapeño",                min:54.00, max:58.00, anterior:60.00, via:"Texas",        alerta:false },
      { producto:"Habanero 8lb",            min:38.00, max:43.00, anterior:42.00, via:"Texas",        alerta:false },
      { producto:"Serrano",                 min:68.00, max:70.00, anterior:null,  via:"Texas",        alerta:false },
      { producto:"Cucumber Nogales",        min:12.95, max:14.95, anterior:30.95, via:"Nogales AZ",  alerta:true  },
      { producto:"Limón seedless 110s",     min:31.50, max:36.35, anterior:65.00, via:"Nogales AZ",  alerta:true  },
      { producto:"Limón seedless 150s",     min:60.00, max:64.00, anterior:null,  via:"Texas",        alerta:false },
      { producto:"Limón seedless 175s",     min:58.00, max:60.00, anterior:64.00, via:"Texas",        alerta:false },
      { producto:"Limón seedless 200s",     min:54.00, max:56.00, anterior:58.00, via:"Texas",        alerta:false }
    ],
    noticias: [
      { titulo:"Vine-ripe Nogales alcista sostenido — nuevo máximo $62.95–64.95", impacto:"Alto", fuente:"Corbel Seeds #0034" },
      { titulo:"Roma XL en pico de fortaleza $44.95–46.95 — segundo día firme", impacto:"Alto", fuente:"Corbel Seeds #0034" },
      { titulo:"Limón seedless Nogales en corrección estacional: 7/10-bu $31.50–36.35 vs máximos $62-68 hace 2 semanas — flush primaveral activo", impacto:"Medio", fuente:"Corbel Seeds #0034" },
      { titulo:"Tomatillos supply Nogales insuficiente para establecer mercado completo", impacto:"Medio", fuente:"USDA AMS · Corbel #0034" },
      { titulo:"Impuesto substrato coco/turba presiona base de costos GH México GC 2026-27", impacto:"Medio", fuente:"Corbel Seeds #0034" },
      { titulo:"Texas establece cuarentena Mosca Fruta Mexicana Condado Zapata — sensibilidad fitosanitaria elevada", impacto:"Medio", fuente:"Corbel Seeds #0034 · FreshPlaza" }
    ]
  },

  operaciones: {
    bascula:   [
      { fecha:"21/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"22/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"23/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"24/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"25/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"26/04", productos:["Tomate Bola","Tomate Roma"] }
    ],
    embarques: [
      { fecha:"26/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-1", destino:"Arizona", estado:"OK" },
      { fecha:"25/04/2026", tipo:"Tomate", cargas:1, unidad:"ST-106", destino:"Arizona", estado:"OK" },
      { fecha:"26/04/2026", tipo:"Tomate", cargas:1, unidad:"MCALLEN", destino:"Texas", estado:"OK" }
    ]
  },

  estrategia: {
    contratos: [
      {
        titulo: "Contrato Calavo 2026",
        estado: "Activo",
        nivel: "success",
        descripcion: "Pick & Pack @$5.00/caja — addendum firmado 2024. WK01–WK12: 655,641 cajas · $3.28M liquidado. Pendiente corrección en contrato formal.",
        accion: "Verificar corrección del P&P a $5 en contrato. Reunión de alineación pendiente de confirmar fecha."
      },
      {
        titulo: "Contrato Calavo 2026-2029 — NUEVO MULTIANUAL",
        estado: "En Revisión",
        nivel: "warning",
        descripcion: "Irene Amezaga envió borrador 09-Abr-2026. Antonio lo reenvió a JC y Armando Llanes para revisión. Contrato para ciclos 2026-27, 2027-28 y 2028-29.",
        accion: "Esperar comentarios de Armando Llanes. Revisar términos de precio base y P&P para 3 temporadas. Coordinar reunión de alineación antes de firmar."
      },
      {
        titulo: "Inversión Corbel Seeds",
        estado: "Activo",
        nivel: "info",
        descripcion: "Participación como CB1 en Corbel Seeds. Reunión Zoom 17-Mar sobre ensayos de tomate y chile.",
        accion: "Revisar presentación 'Situación Actual de Corbel Seeds' enviada por Raymundo 23-Mar."
      }
    ],
    oportunidades: [
      {
        titulo: "Vine-ripe en máximos históricos — aprovechar momentum hasta fin WK17",
        prioridad: "Alta",
        descripcion: "Corbel #0034: vine-ripe Nogales $62.95–64.95 (máximo de temporada confirmado). Demanda retail OTV escalando. Restricciones GH global sostenidas.",
        accion: "Verificar calidad outbound ANTES de embarques — merma Bola Calavo 5.62% (25/04) requiere auditoría urgente. Priorizar Roma Calavo (merma 2.47%) para maximizar volumen viable."
      },
      {
        titulo: "Roma Calavo: calidad sólida — maximizar embarques WK17-18",
        prioridad: "Alta",
        descripcion: "Outbound 25/04: Roma Calavo primera 88.79%, merma 2.47%, peso 26.03 kg. Condición óptima para embarques a precios $44.95–46.95.",
        accion: "Coordinar con embarques volumen máximo de Roma Calavo. Esta es la variedad más estable en calidad actual."
      },
      {
        titulo: "Limón: pico primaveral transitando — embarcar esta semana",
        prioridad: "Alta",
        descripcion: "Corbel #0034 (23-Abr): limón seedless 110s $31.50–36.35 Nogales. Flush primaveral comenzó. Corrección desde máximos $62-68 hace 2 semanas es patrón estacional.",
        accion: "Maximizar volumen limón ESTA SEMANA (26-30 Abr). Coordinar con Maui Fresh. Calibres 175s-200s pueden mantener $54-60 por poco tiempo más."
      }
    ],
    watchlist: [
      {
        titulo: "Bola Calavo merma 5.62% (25/04) — SEGUNDA SEMANA CONSECUTIVA >5% · patrón crítico",
        nivel: "danger",
        descripcion: "Outbound 25/04: Bola Calavo primera 71.53%, merma 5.62%, peso 24.77 kg. Sexta semana consecutiva con merma >3% en Bola Calavo. Dos semanas consecutivas >5%. Patrón estructural no aleatorio.",
        accion: "URGENTE — INVESTIGACIÓN PROFUNDA requerida ANTES de próximos embarques. Auditar: (1) manejo postcosecha en línea de empaque, (2) temperatura cadena fría campo-empaque, (3) condición fruta en origen, (4) procedimientos de clasificación. Considerar suspensión temporal empaque Bola Calavo hasta resolución causa."
      },
      {
        titulo: "Declaración Anual 2025 — resultado a pagar pendiente",
        nivel: "danger",
        descripcion: "Auditoría Belher pendiente revisión. Presentada con resultado a pagar en acuerdo con Despacho Terrazas.",
        accion: "Esperar confirmación jacruz con fecha y monto del pago. Prever impacto en flujo de caja."
      },
      {
        titulo: "Aranceles USMCA: revisión 1-Jul-2026 — presión legisladores Florida activa",
        nivel: "danger",
        descripcion: "Legisladores Florida mantienen presión por tarifas estacionales. Suprema Corte falló sobre aranceles. Corbel #0034 reporta actividad.",
        accion: "Monitorear semanalmente. Contactar Calavo para posición estratégica ante cambios anti-dumping."
      }
    ],
    proximos: [
      { fecha:"27/04/2026", evento:"Transición a WK18 — monitorear calidad Bola Calavo post-auditoría", tipo:"operacion", participantes:"Calidad · Operaciones" },
      { fecha:"28/04/2026", evento:"WK18 — cruce estimado deuda Calavo $0 (amortización completa $6M) — inicio de liquidación real a Belher", tipo:"financiero", participantes:"Leima · Antonio · JC" },
      { fecha:"30/04/2026", evento:"Cierre mes Abril — preparar financials para reunión 25-May", tipo:"financiero", participantes:"Leima · Jacruz · Armando" },
      { fecha:"18-19/05/2026", evento:"Auditoría Cliente Calavo — Buyers Edge (Javier Martínez). Inspeccionará todas las unidades de producción y empaque. Preparar inventarios y gestionar servicios pendientes.", tipo:"auditoria", participantes:"C. Marisol Castro · JC · Calavo Buyers Edge" },
      { fecha:"25/05/2026", evento:"Reunión alineación Contrato 2026-2029 — John Lindeman · James Snyder · Irene Amezaga · Armando Llanes", tipo:"reunion", participantes:"Antonio, JC, Calavo, Armando Llanes, Notaría 97" }
    ]
  },

  predicciones: {
    generado:  "26/04/2026 · 14:30",
    modelo:    "Claude claude-haiku-4-5",
    horizonte: "7 días",
    nota:      "Síntesis de precios Corbel Seeds #0034 (23-Abr) + outbound tomate 25/04 + embarques 25-26/04 + trilla sorgo activa + tendencia calidad Bola Calavo CRÍTICA WK15-17.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe",
        unidad: "carton 25lb · Nogales AZ",
        tendencia: "alcista",
        confianza: 78,
        precio_actual:     { min: 62.95, max: 64.95 },
        precio_proyectado: { min: 60.00, max: 66.00 },
        razonamiento: "Corbel #0034 (23-Abr) reporta vine-ripe Nogales $62.95-64.95 en 2-layer 4×4/4×5 — nuevo máximo de temporada. USDA retail OTV +43% semanal confirma demanda retail escalando en distribución. Restricciones GH global estructurales (plagas Brasil, costos substrato México, tariffs activos). Ventana WK17-18 estrecha antes de entrada California Salinas. Calidad Bola Calavo merma 5.62% (25/04) introduce riesgo de rechazos en destino que puede presionar corrección.",
        factores: ["Vine-ripe Nogales $62.95-64.95 (#0034) — nuevo máximo de temporada, alcista sostenido", "USDA retail OTV +43% semanal — demanda retail escalando confirmada", "Restricciones GH global: plagas Brasil (Paraná), costos substrato México (+impuesto coco/turba)", "Tariffs USMCA activos sostienen precio en canal vs competidores no-USMCA", "Bola Calavo merma 5.62% el 25/04 — calidad inestable, riesgo de rechazos. Ventana estrecha."],
        riesgo: "Entrada de producción California/Salinas en WK18-19 puede presionar corrección a $55-58. Merma Bola Calavo inestable puede generar rechazos en destino.",
        accion: "AUDITORÍA CALIDAD URGENTE ANTES de próximo embarque. Si outbound WK17-18 regresa <3% merma, mantener embarques plenos en $60+. Ventana de precios máximos cierra in 4-5 días."
      },
      {
        id: "roma",
        producto: "Tomate Roma 25lb",
        unidad: "carton 25lb XL · Nogales AZ",
        tendencia: "alcista",
        confianza: 82,
        precio_actual:     { min: 44.95, max: 46.95 },
        precio_proyectado: { min: 42.00, max: 50.00 },
        razonamiento: "Roma XL Nogales $44.95-46.95 sostenida en Corbel #0034 (23-Abr) — segundo día firme. Roma Calavo outbound 25/04 merma 2.47%, primera 88.79% — calidad excelente. Roma Millennium merma 1.95%. Plum tomato complex en firmeza con demanda foodservice activa. Texas Roma XL también fuerte. El nivel XL >$45 establece piso de precios premium para cierre de temporada. ROMA ES APUESTA MÁS SEGURA DE CALIDAD.",
        factores: ["Roma XL Nogales $44.95-46.95 (#0034) — firmeza confirmada segundo día, sostenida", "Roma Calavo merma 2.47% el 25/04 · Roma Millennium merma 1.95% — calidad sólida garantizada", "Texas Roma XL fuerte — demanda cruzada en ambos corredores activa", "Foodservice/pizzerías con demanda constante de plum tomato en primavera"],
        riesgo: "Volumen Roma puede ser limitado hacia fin de temporada WK18-19. Entrada de roma California presiona. Monitorear disponibilidad.",
        accion: "PRIORIZAR EMBARQUES ROMA — merma 2.47% confirmada 25/04. Roma es apuesta segura de calidad. Maximizar volumen WK17-18 mientras disponibilidad y precios >$44 se sostienen."
      },
      {
        id: "jalap",
        producto: "Jalapeño",
        unidad: "bu · Texas",
        tendencia: "lateral",
        confianza: 48,
        precio_actual:     { min: 54.00, max: 58.00 },
        precio_proyectado: { min: 50.00, max: 64.00 },
        razonamiento: "Jalapeño se mantuvo en rango $54-58/bu Texas según #0034 (23-Abr). Corbel reporta SNIIM México jalapeño $1,500 MXP/arpilla 30kg (~$73/bu equivalente) — señal alcista pero no alineada con Texas. Volatilidad extrema continúa. Serrano $68-70 confirma fortaleza sector hot pepper. Oferta en Zacatecas/Sonora sigue ajustada pero volatilidad introduce riesgo significativo.",
        factores: ["#0034 $54-58 Texas sostenido; volatilidad histórica extrema en reportes previos", "SNIIM México jalapeño $1,500/arpilla 30kg (~$73/bu equiv) — señal de precios altos globales", "Serrano Texas $68-70 — sector hot pepper fuerte en el pico primaveral", "Volatilidad extrema histórica: $40→$53→$44→$58 en semanas — riesgo bidireccional alto"],
        riesgo: "Volatilidad extrema continúa — swing de -$14/bu posible si hay flush localizado de cosecha en Sinaloa/Sonora. Rango WK17-18 estimado $48-62.",
        accion: "Si Belher tiene volumen jalapeño disponible, nivel $54-58 es aceptable vs esperar. Confianza baja (48%) por volatilidad extrema. Monitorear Corbel #0035 diariamente."
      },
      {
        id: "bell",
        producto: "Chile Bell GH",
        unidad: "carton XL · Nogales AZ",
        tendencia: "bajista",
        confianza: 65,
        precio_actual:     { min: 28.95, max: 30.95 },
        precio_proyectado: { min: 26.00, max: 35.00 },
        razonamiento: "Chile Bell verde Nogales XL $28.95-30.95 en Corbel #0034 (23-Abr) — corrección significativa de ~$14/caja vs $42.95-44.95 una semana atrás (-24%). USDA reporta supply insuficiente para establecer mercado completo en Nogales. Magnitud de corrección sugiere ajuste de oferta regional o cambio en mix de tamaños. México sigue siendo dominante sin sustituto real en USMCA pero quiebre de precio es notable.",
        factores: ["Bell XL Nogales $28.95-30.95 (#0034) — caída de ~$14/caja vs semana anterior (-24%)", "USDA reporta supply insuficiente para mercado completo Nogales — tightness desapareciendo", "Posible entrada de oferta GH de invernaderos Sonora/Coahuila en WK17-18", "Demanda retail bell verde: inelástica pero estacional — ajuste post-Pascua confirmado"],
        riesgo: "Nueva producción GH norteña en WK17-18 puede mantener presión. Corrección técnica adicional posible a $24-28 si oferta acelerara. -24% en una semana es ruptura de ciclo.",
        accion: "Monitorear Corbel #0035 urgentemente. Si continúa cayendo, puede impactar viabilidad GH Bell para GC 2026-27. Reconsiderar si embarcas Bell o no en WK17-18."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "FOB Nogales (seedless)",
        tendencia: "bajista",
        confianza: 75,
        precio_actual:     { min: 31.50, max: 36.35 },
        precio_proyectado: { min: 28.00, max: 40.00 },
        razonamiento: "Corbel #0034 (23-Abr) confirma suavización en limón Nogales: 7/10-bu $31.50–36.35 (40lb equivalente). Corrección significativa desde máximos $62-68 observados hace 2 semanas. Flush primaveral (Abr-May) está presionando calibres hacia abajo. Corbel reportó 175s $58-60 hace semanas; ahora Nogales 7/10-bu $31.50-36.35. Corrección es más agresiva de lo esperado — transición de pico a descenso ya activa.",
        factores: ["Limón seedless 7/10-bu: $31.50-36.35 (#0034) Nogales — ajuste desde máximos $62-68", "Flush primaveral Abr-May presionando calibres hacia abajo — patrón estacional en marcha", "Colombia incrementando exportaciones Tahiti lime para compensar volumen mexicano", "Corrección técnica estacional: peak primaveral Abr-May ya en marcha — descenso acelerado posible"],
        riesgo: "Flush primaveral Abr-May-Jun puede continuar presionando precios hacia $24-30 en calibres menores. Ventana de precios $50+ ya cerró. Descenso acelerado en WK18-19.",
        accion: "MAXIMIZAR EMBARQUES LIMÓN ESTA SEMANA (26-30 Abr) — el pico de WK16 pasó. Coordinar con Maui Fresh volumen disponible para próximos 4-5 días. Si tienes 110s-150s, pueden mantener $30-36. Flujo primaveral es imparable."
      }
    ]
  },

  industria: [
    { cat:"Mercado",      titulo:"Vine-ripe Nogales en nuevo máximo $62.95–64.95 · Roma XL $44.95–46.95 — Corbel #0034 confirma mercado tomate alcista sostenido", impacto:"Alto", fuente:"Corbel Seeds #0034 · 23-Abr", resumen:"Corbel #0034 reporta vine-ripe Nogales $62.95-64.95 en 2-layer (4×4/4×5) — nuevo máximo de temporada. Roma XL escala a $44.95-46.95. Mercado combina: restricciones GH global (plagas Brasil, costos substrato), tariffs USMCA activos, demanda retail creciente (USDA OTV +43%). Para Belher: ventana de precios máximos activa WK17-18." },
    { cat:"Mercado",      titulo:"Limón seedless Nogales en corrección estacional: 7/10-bu $31.50–36.35 vs máximos $62-68 hace 2 semanas — flush primaveral activo", impacto:"Alto", fuente:"Corbel Seeds #0034 · 23-Abr", resumen:"Limón Nogales muestra corrección agresiva en calibres. Flush primaveral (Abr-May) presionando oferta. Ventana de precios premium cerrando. Para Belher (70 ha limón): EMBARCAR ESTA SEMANA antes de corrección adicional." },
    { cat:"Fitosanitario", titulo:"Texas establece cuarentena Mosca Fruta Mexicana Condado Zapata — sensibilidad fitosanitaria en frontera elevada", impacto:"Medio", fuente:"Corbel Seeds #0034 · FreshPlaza", resumen:"Autoridades Texas establecen cuarentena Mosca de Fruta Mexicana (Anastrepha ludens) en Condado Zapata. Eleva sensibilidad fitosanitaria en cruces fronterizos México-Texas. Para Belher: asegurar certificados fitosanitarios actualizados." },
    { cat:"Costos",       titulo:"Impuesto a fibra de coco y turba afecta costos invernaderos mexicanos — presión en base de costos GH", impacto:"Medio", fuente:"Corbel Seeds #0034 · HortiDaily", resumen:"Nuevo impuesto sobre coco y turba (sustratos GH críticos) presiona costos variables. Impacto directo en rentabilidad GH GC 2026-27." },
    { cat:"Clima/Plagas",  titulo:"Brasil plagas tomate GH Paraná: 350 vs 450-500 cajas/1K plantas — reducción rendimiento +22%", impacto:"Bajo", fuente:"Corbel Seeds #0034", resumen:"Tomate invernadero Paraná Brasil enfrenta mosca blanca, minadores, geminivirus. Rendimientos ~22% abajo de no afectados. Presión regional sobre oferta GH beneficia precios Norteamérica." }
  ],

  ticker: [
    { label:"Vine-ripe Nogales", valor:"$62.95–64.95/cj", cambio:"+0%", dir:"neutral" },
    { label:"Roma XL Nogales", valor:"$44.95–46.95/cj", cambio:"+0%", dir:"neutral" },
    { label:"Chile Bell XL Nogales", valor:"$28.95–30.95/cj", cambio:"-24%", dir:"down" },
    { label:"Jalapeño Texas", valor:"$54–58/bu", cambio:"±0%", dir:"neutral" },
    { label:"Limón seedless 7/10-bu Nogales", valor:"$31.50–36.35", cambio:"-44%", dir:"down" },
    { label:"CVGW (Calavo)", valor:"$28.13", cambio:"+1.7%", dir:"up" },
    { label:"AVO (Mission)", valor:"$13.83", cambio:"-3.2%", dir:"down" },
    { label:"Tomate Bola Calavo merma", valor:"5.62%", cambio:"+0.38 pcts vs 25/04", dir:"down" },
    { label:"Tomate Roma Calavo merma", valor:"2.47%", cambio:"+0.72 pcts vs 25/04", dir:"down" },
    { label:"Corbel Seeds último reporte", valor:"#0034", cambio:"23-Abr", dir:"neutral" },
    { label:"Deuda Calavo (en favor Belher)", valor:"$720,391", cambio:"Crece +settle", dir:"up" },
    { label:"Sorgo trilla acumulada", valor:"219 ha", cambio:"finalización en curso", dir:"up" }
  ],

  auditorias: [
    {
      nombre:    "Auditoría SCS — PrimusGFS Nivel 2",
      tipo:      "Tercera Parte",
      organismo: "SCS Global Services",
      auditor:   "Miguel Sandoval",
      alcance:   "Producción, empaque, control de químicos, manejo de residuos",
      fechaAuditoria: "05-06/03/2026",
      estado:    "Certificada",
      nivel:     "success",
      ncTotal:   0,
      ncMayor:   0,
      ncMenor:   0,
      notas:     "Auditoría completada. Certificado vigente hasta 05-Mar-2027. Acciones preventivas: revisión de pólizas de seguros y documentación de procedimientos.",
      observaciones: [
        {
          numero: 1,
          categoria: "administrativo",
          descripcion: "Renovación de póliza de responsabilidad civil y daños a terceros",
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
      fuente: "Depto. Producción · Plan Inicial Temporada 2025–2026",
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
        precio: 28.13, prevClose: 27.68, cambio: 0.45, cambioPct: 1.63,
        h52: 28.72, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · close 25-Abr-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 13.83, prevClose: 14.29, cambio: -0.46, cambioPct: -3.22,
        h52: 15.53, l52: 9.88, volumen: null,
        fuente: "Yahoo Finance · close 25-Abr-2026"
      }
    ],

    correos: [
      {
        fecha: "22/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Weekly Tomato Meeting — convoca reunión Teams semanal",
        tipo: "reunion", nivel: "info",
        resumen: "Irene convoca reunión semanal Teams (22-Abr-2026). Meeting ID: 252 534 315 394 18. Sin adjunto Tomato Weekly Update WK16/17."
      },
      {
        fecha: "13/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Canceled: Weekly Tomato Meeting — viajando Viva Expo San Antonio",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene cancela reunión semanal Teams del 13/04 (viajando Viva Expo). Sin Tomato Weekly Update WK15/16."
      },
      {
        fecha: "07/04/2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher",
        asunto: "Re: Settle WK12 — confirmación recibo Gass Sheet WK15",
        tipo: "settlement", nivel: "success",
        resumen: "Leima confirma recibo del Gass Sheet WK15 de Carlos Valadez."
      }
    ],

    alertas: [
      { nivel: "success", texto: "WK16 SETTLE RECIBIDO 15-Abr: $1,101,951 · 38,067 pkgs · 24 cargas · FOB $28.95/cj. POR LIQUIDAR acumulado: $720,391 — crece cada semana." },
      { nivel: "success", texto: "CVGW $28.13 (+1.63% close 25-Abr desde $27.68) — recuperación sostenida. AVO $13.83 (-3.22% desde $14.29) — presión en Mission Produce." },
      { nivel: "warning", texto: "Tomato Weekly Update WK17/WK18 pendiente — Irene en reunión Teams 22-Abr. Desglose rounds/roma no disponible. Próxima actualización esperada." }
    ],

    kpi: {
      pallets: null, loads: 24, pkgs: 38067,
      fobPromedio: 28.95, fobAnterior: 39.72, pkgsAnterior: 53976,
      revenueWk: 1101951, revenueAnt: 2144379,
      nota: "WK16 — Settle 15-Abr: $1,101,951 / 38,067 pkgs = $28.95/cj."
    },

    belher: {
      rounds: { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      roma:   { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      total:  { proyectado: null, actual: null, loads: 24, pkgs: 38067 }
    }
  },

  pronostico: {
    generado: "25/03/2026",
    semanas: [
      {
        semana: "WK13", fechas: "24–29 Mar",
        productos: [
          { producto:"Tomate Bola",    hectareas:18, estimadoCajas:4200, confianza:80, tendencia:"alcista" },
          { producto:"Tomate Roma",    hectareas:12, estimadoCajas:2800, confianza:75, tendencia:"lateral" },
          { producto:"Limón Persa",    hectareas:8,  estimadoCajas:1600, confianza:70, tendencia:"alcista" },
          { producto:"Chile Jalapeño", hectareas:5,  estimadoCajas:900,  confianza:65, tendencia:"lateral" }
        ]
      }
    ]
  },

  caades: {
    fuente:       "CAADES/CIDH · mariajose@cidh.org.mx",
    temporada:    "2025-2026",
    ultimoReporte: null,
    actualizado:  null,
    inventario:   [],
    pipeline:     [],
    totalesTemporada: []
  }
};
