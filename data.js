window.BELHER = {
  meta: {
    fecha: "Martes 05 May 2026",
    semana: "WK 19",
    actualizado: "05/05/2026 · 16:13"
  },

  alertas: [
    {"nivel":"danger","texto":"OUTBOUND 03/05 BOLA CALAVO 60.96% primera, merma 14.31% CRÍTICO — 2do día consecutivo deterioro. Roma Calavo estable 87.88%, merma 2.57%. Causa TBD: investigar campo/lote urgente."},
    {"nivel":"warning","texto":"VINE RIPE CORRECCIÓN WK19 — Corbel #0039: USDA AMS $66.95–68.95 post-peak. Coachella + Georgia supply entrando. Presión esperada sostenida WK19-20."},
    {"nivel":"success","texto":"LIMES 110s $42 — Peru -30% supply sustain ventana NA. Maximizar embarques WK19 antes flush Colombia/Brasil esperado WK19-20."},
    {"nivel":"info","texto":"SETTLEMENT WK18 AL 26-ABR CONFIRMADO — Revenue $17,746,742 · Saldo a favor $1,206,806 (S/Calavo). Quedan 48k cajas + 7k piso por facturar."},
    {"nivel":"warning","texto":"AUDITORÍA BUYERS EDGE 18-19/05 — 14 días. Javier Martínez inspeccionará todas las unidades de producción y empaque. Revisar inventarios materiales e insumos críticos."}
  ],

  ebitda: {
    mes:  { nombre: "Marzo 2026",   actual: 2864510, budget: 2483483,  yago: 2530188  },
    ytd:  { nombre: "Jul–Mar 2026", actual: -1217116, budget: -1640625, yago: -4966686 }
  },

  revenue: {
    total:    21602812,
    fob:      17746742,
    nacional:  3856070
  },

  deudas: {
    corte: "22-Mar-2026",
    totalGeneral: 16130436,
    totalSinAnticipos: 15568498,

    calavo: {
      saldo: 0,
      creditoBelher: 1206806,
      nota: "Deuda liquidada WK16. Settle acumulado al 26-Abr-2026: saldo a favor Belher $1,206,806 (S/Calavo). Quedan 48k cajas + 7k en piso por facturar."
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
        { nombre:"Celulosa y Corrugados de Sonora",     concepto:"Empaques (cartón)",          saldo: 2823510 },
        { nombre:"Sierra Seed Internacional",            concepto:"Semillas",                   saldo:  405900 },
        { nombre:"Aliado Continental",                   concepto:"Insumos agrícolas",           saldo:  260849 },
        { nombre:"Ahern Internacional de México",        concepto:"Insumos / fertilizantes",    saldo:  379876 },
        { nombre:"Hishtil México",                       concepto:"Plántulas / material vegetal",saldo: 239154 },
        { nombre:"LOF Agro de Guasave",                  concepto:"Agroquímicos",                saldo:  160397 },
        { nombre:"Keithly Williams Semillas",            concepto:"Semillas",                   saldo:  197814 },
        { nombre:"ANSA VIDA",                            concepto:"Seguros / servicios",         saldo:  131785 },
        { nombre:"Misael Sánchez Valdivia",              concepto:"Servicios campo",             saldo:  128553 },
        { nombre:"Cuauhtémoc Ángulo Torres",             concepto:"Servicios campo",             saldo:  132141 },
        { nombre:"Transportes CGG",                      concepto:"Flete refrigerado",           saldo:  118307 },
        { nombre:"Otros proveedores (81% cubierto)",     concepto:"Varios",                      saldo: 1181714 }
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
    revenueTotal:  17746742,
    comision:       1916508,
    comisionPct:        0.22,
    antiDumping:    1775841,
    zCode:          1321118,
    ventaNeta:     12613207,
    pickPack:       4466620,
    intereses:        26789,

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
      creditoBelher:   1206806,
      avgLiq_wk11_14:   455647,
      cruceEstimado:   "WK16",
      cruceEstimadoFecha: "15-Abr-2026",
      cruceFecha:      "15-Abr-2026",
      cruceConfirmado: true
    },
    capitalTrabajo: 5959027,
    prestamo:        472037,
    saldoAnterior:   655867,
    avanceLiquidacion: 350000,

    porLiquidar:    1206806,
    saldoActual:    1206806,
    neto:           1206806,

    notaSettlement: "Settle acumulado al 26-Abr-2026 (WK18): saldo a favor Belher $1,206,806 (S/Calavo reconciliado). Quedan 48k cajas + 7k en piso. Conciliación: Beltrán fee ADM $275,660 + dif comisión $211,934 - dif préstamo $54,927 = $432,667 variaciones. Fuente: Leima 01-May-2026.",
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
      { sem:"WK12", wire:"15-Mar", pago:240000, cajas:48000, cont:29, estado:"Pagado"   },
      { sem:"WK13", wire:"25-Mar", pago:200240, cajas:40048, cont:24, estado:"Pagado"   },
      { sem:"WK14", wire:"25-Mar", pago:152960, cajas:30592, cont:18, estado:"Pagado"   },
      { sem:"WK15", wire:"08-Abr", pago:269880, cajas:53976, cont:33, estado:"Pagado", fob:39.72, nota:"FOB REAL confirmado WK16 settle: $2,144,379 / 53,976 = $39.72/cj" },
      { sem:"WK16", wire:"15-Abr", pago:190335, cajas:38067, cont:24, estado:"Pagado",  fob:28.95, nota:"Settle 15-Abr: $1,101,951 / 38,067 cajas = $28.95/cj. Cruce deuda confirmado." },
      { sem:"WK17", wire:"28-Abr", pago:350000, cajas:null,  cont:null, estado:"Pagado", nota:"Avance de liquidación recibido WK17 — settle acumulado en procesamiento." },
      { sem:"WK18", wire:null,     pago:null,   cajas:null,  cont:null, estado:"Actual", nota:"Settle al 26-Abr: saldo a favor $1,206,806 (S/Calavo). 48k cajas + 7k piso pendientes." }
    ]
  },

  calidad: {
    semana: {
      desde: "04/05/2026",
      hasta:  "10/05/2026",
      variedades: []
    },
    historico: [
      { fecha:"WK14", primaPromedio:84.11, mermaPromedio:3.69 },
      { fecha:"WK15", primaPromedio:82.01, mermaPromedio:5.12, nota:"Días 1-6: 04/04·5vars, 06/04·3vars, 07/04·4vars (incl Tolin), 08/04·1var, 09/04·3vars, 11/04·4vars. Roma Calavo 11/04 merma 6.00%. Bola Calavo 09/04 merma 6.78% CRÍTICO. Tolin 07/04 merma 30.18% outlier." },
      { fecha:"WK16", primaPromedio:82.70, mermaPromedio:3.06, nota:"Días 1-6 (13/04-18/04): D1 BC 0.93%+RMill 1.20%, D2 BC 4.75%+RCal 1.58%, D3 BC 2.56%, D4 RZazu 1.59%, D5 BC 4.46%+Ergo 3.53%+BTolin 6.40%+RTolin 3.80%, D6 BC 2.91%+Ergo 3.67%+RMill 2.97%." },
      { fecha:"WK17", primaPromedio:82.50, mermaPromedio:3.67, nota:"D1(20/04): BC 4.10% · Ergo 3.00% · Roma Cal 1.39% · Roma Mill 1.08% · Roma Zazu 2.00%. D2(21/04): BC 3.27% · Ergo 3.18% · Roma Cal 3.24% · Roma Tolin 8.33%. D3(23/04): Bola Calavo 73.36% P, Merma 5.24% · Bola Ergo 76.32% P, Merma 2.34% · Roma Calavo 88.35% P, Merma 1.75%. D4(25/04): Bola Calavo 71.53% P, Merma 5.62% · Bola Ergo 79.13% P, Merma 3.23% · Roma Calavo 88.79% P, Merma 2.47%." },
      { fecha:"WK18", primaPromedio:82.60, mermaPromedio:3.79, nota:"D1(27/04): BC 81.50%P merma 3.28% · Zazu 89.64%P merma 2.91%. D2(28/04): BC 73.37%P merma 3.16% · RMill 89.13%P merma 2.52% · RZazu 86.58%P merma 2.03%. D3(29/04): BC 82.17%P merma 3.71% · RCal 84.00%P merma 2.00% · RMill 84.44%P merma 2.68%. D4(02/05): BC 84.92%P merma 3.59% · RCal 86.55%P merma 2.72%. D5(03/05): BC 60.96%P merma 14.31% CRÍTICO · RCal 87.88%P merma 2.57%. Promedio recalculado con 12 puntos." }
    ],
    ultimoOutbound: {
      fecha: "03/05/2026",
      variedades: [
        { nombre:"Bola Calavo",  etiqueta:"Calavo", canal:"exportacion", primera:60.96, segunda:12.75, tercera:11.97, merma:14.31, peso:26.04, alerta:true  },
        { nombre:"Roma Calavo",  etiqueta:"Calavo", canal:"exportacion", primera:87.88, segunda:5.87,  tercera:3.68,  merma:2.57,  peso:26.03, alerta:false }
      ],
      anterior: {
        fecha: "02/05/2026",
        variedades: [
          { nombre:"Bola Calavo", etiqueta:"Calavo", canal:"exportacion", primera:84.92, segunda:6.98, tercera:4.51, merma:3.59, peso:20.96, alerta:false },
          { nombre:"Roma Calavo", etiqueta:"Calavo", canal:"exportacion", primera:86.55, segunda:7.18, tercera:3.55, merma:2.72, peso:26.58, alerta:false }
        ]
      },
      ultimoInbound: {
        fecha: "03/05/2026",
        variedades: [
          { nombre:"Tomate entrada", etiqueta:"Inbound", canal:"interno", primera:63, segunda:10, tercera:2, merma:25.00, alerta:true }
        ],
        nota: "Inbound 03/05: 63% primera, 25% merma — deterioro SEVERO confirmado también en outbound Bola (60.96%, merma 14.31%). Roma no afectada."
      }
    }
  },

  tomate: {
    ventas: {
      periodo: { desde:"01/12/2025", hasta:"15/04/2026", label:"WK01–WK16" },
      total:   { cajas:1264440, cajasRoma:null, cajasBola:null, revenue:19848494 },
      exportacion: [
        { etiqueta:"Calavo", cajas:818324, cajasRoma:null, cajasBola:null, revenue:15992424,
          nota:"WK01–WK16 al 15-Abr · P&P total $4,091,620 · FOB prom $19.54/cj · CRUCE DEUDA CONFIRMADO. Settle WK18 (al 26-Abr): revenue sube a $17,746,742 — ver sección Calavo." }
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
        { semana:"WK17", nogales_mid:22.0, la_mid:25.0 },
        { semana:"WK18", nogales_mid:36.0, la_mid:39.0, nota:"Corbel #0039 (30-Abr): Seedless 110s $42, 150s $36-40. USDA sin acceso 01-May." },
        { semana:"WK19", nogales_mid:39.0, la_mid:42.0, nota:"Corbel #0039 (30-Abr): Seedless 110s $42, 150s $36-40. Peru -30% sustain ventana." }
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
      nota:              "Trilla WK18 completada: 264 ha acumuladas en 17 jornadas (31/Mar–02/May). Sifón 2 finalizado 02/05 — 15 ha total. Descanso obligatorio 01/May ejecutado.",
      trilla: [
        { fecha:"31/03/2026", campos:"Dorita + El 17",                                        ha:18, cultivo:"Sorgo" },
        { fecha:"06/04/2026", campos:"Carrillo",                                              ha:12, cultivo:"Sorgo" },
        { fecha:"07/04/2026", campos:"Carrillo + Campo Beltrán + El Dos",                     ha:18, cultivo:"Sorgo", ton:97.04,  tolvas:16, fuente:"DIARIO BASCULA 07-Abr PDF" },
        { fecha:"08/04/2026", campos:"El Dos + Álamo",                                        ha:19, cultivo:"Sorgo", ton:98.51,  tolvas:16, fuente:"DIARIO BASCULA 08-Abr PDF" },
        { fecha:"09/04/2026", campos:"Álamo",                                                 ha:20, cultivo:"Sorgo", ton:128.53, tolvas:20, fuente:"DIARIO BASCULA 09-Abr PDF" },
        { fecha:"10/04/2026", campos:"Álamo + El Punk + Quevedo 2 + Lora + Caseta",           ha:16, cultivo:"Sorgo" },
        { fecha:"11/04/2026", campos:"Quevedo 2 + Composta + El Gringo",                      ha:16, cultivo:"Sorgo" },
        { fecha:"13/04/2026", campos:"El Punk",                                               ha:12, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 13-Abr" },
        { fecha:"14/04/2026", campos:"El Punk + Las Viudas",                                  ha:19, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 14-Abr" },
        { fecha:"15/04/2026", campos:"Las Viudas",                                            ha:25, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 15-Abr" },
        { fecha:"17/04/2026", campos:"Quevedo 1 + Gringo + Composta",                         ha:7,  cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 17-Abr" },
        { fecha:"20/04/2026", campos:"Sifón 1",                                               ha:12, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 20-Abr" },
        { fecha:"21/04/2026", campos:"Sifón 1",                                               ha:25, cultivo:"Sorgo", fuente:"AVANCE TRILLA BASCULA 21-Abr" },
        { fecha:"28/04/2026", campos:"Sifón 1",                                               ha:7,  cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 28/04/2026 SORGO (SIFON I)" },
        { fecha:"29/04/2026", campos:"Sifón 1 y Sifón 2",                                    ha:13, cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 29/04/2026 SORGO (SIFON I Y SIFON 2)" },
        { fecha:"30/04/2026", campos:"Sifón 2",                                               ha:15, cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 30/04/2026 SORGO (SIFON 2)" },
        { fecha:"02/05/2026", campos:"Sifón 2",                                               ha:10, cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 02/05/2026 SORGO (SIFON 2)" },
        { fecha:"04/05/2026", campos:"Sifón 1 y Sifón 2",                                    ha:5,  cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 04/05/2026 SORGO (SIFON 1 Y SIFON 2)" }
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
      { concepto:"Recuperación de IVAs (Abr–Jul)",                   monto:311961,  categoria:"Fiscal"      },
      { concepto:"IVA Febrero 2026 autorizado SAT",                   monto:1752440, categoria:"Fiscal"      }
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
      { mes:"Mar 26",  entradas:312688,  salidas:247510,  neto:65178,      saldo:65178,    tipo:"real",    nota:"Saldo real al 31-Mar-2026" },
      { mes:"Abr 26",  entradas:2464000, salidas:2568000, neto:-104000,    saldo:-39683,   tipo:"mixto",   nota:"Real al 19-Abr · forecast al 30-Abr (OL 9+3)" },
      { mes:"May 26",  entradas:3231025, salidas:4759284, neto:-1528259,   saldo:-1567942, tipo:"forecast", nota:"Incluye semilleras $984K, WK Calavo $1.25M, Bajío $1.22M" },
      { mes:"Jun 26",  entradas:3189878, salidas:4103804, neto:-913926,    saldo:-2481868, tipo:"forecast", nota:"WK Calavo $1.25M · Bajío $1.55M · IMSS/SAT $277K" },
      { mes:"Jul 26",  entradas:2722739, salidas:4230228, neto:-1507489,   saldo:-3989357, tipo:"forecast", nota:"Liquidación Calavo $865K + WK $1.25M vs Bajío $1.33M + plántulas $383K" }
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
    reporte: "Corbel Seeds #0039",
    fecha: "30/04/2026",
    resumen: "Corbel #0039 (30-Abr): Vine ripe 4x4/4x5 2-layer $66.95–68.95 (down desde $68.95-70.95), mercado en transición post-peak. Roma firma pero presionada: $50.95–52.95. Limes Texas levemente firmes: seedless 110s $42, 150s $36-40. Chile bell GH: orange/extra-large $14-15, red $16-18. SNIIM CDMX: Jalapeño Jalisco $28-35/kg ($30 freq), Tomate Bola wholesale $50-54/kg.",
    precios:  [
      { producto:"Vine Ripe 4x4 2-layer",   min:66.95, max:68.95, anterior:70.95, via:"USDA AMS FOB",  alerta:true  },
      { producto:"Roma XL 25lb",            min:50.95, max:52.95, anterior:54.95, via:"Texas",          alerta:true  },
      { producto:"Jalapeño",                min:33.00, max:35.00, anterior:54.00, via:"Texas",          alerta:true  },
      { producto:"Habanero 8lb",            min:32.00, max:34.00, anterior:42.00, via:"Texas",          alerta:false },
      { producto:"Serrano",                 min:51.00, max:53.00, anterior:68.00, via:"Texas",          alerta:false },
      { producto:"Chile Bell orange 11lb",  min:14.00, max:15.00, anterior:11.00, via:"Texas",          alerta:false },
      { producto:"Chile Bell red 11lb",     min:16.00, max:18.00, anterior:15.00, via:"Texas",          alerta:false },
      { producto:"Cucumber medium 1 1/9bu", min:22.95, max:24.95, anterior:30.95, via:"Texas",          alerta:false },
      { producto:"Limón seedless 110s",     min:42.00, max:42.00, anterior:40.00, via:"Texas",          alerta:false },
      { producto:"Limón seedless 150s",     min:36.00, max:40.00, anterior:36.00, via:"Texas",          alerta:false },
      { producto:"Grape tomato",            min:12.95, max:16.95, anterior:null,  via:"Texas",          alerta:false },
      { producto:"Limón California",        min:24.75, max:36.35, anterior:null,  via:"CA Lemon",       alerta:false }
    ],
    noticias: [
      { titulo:"Vine Ripe 4x4 USDA AMS $66.95–68.95 (down desde $68.95-70.95) — mercado en transición post-peak. Last opportunity premium prices WK18.", impacto:"Alto", fuente:"Corbel Seeds #0039 · USDA AMS · 30-Abr" },
      { titulo:"Roma firma bajo supply ajustada NA pero Coachella + Georgia early May presionarán. Precios $50.95-52.95 vs $52.95-54.95 semana pasada.", impacto:"Alto", fuente:"Corbel Seeds #0039 · FreshPlaza" },
      { titulo:"SNIIM CDMX integrado a Corbel: Jalapeño Jalisco $28-35/kg ($30 freq), Tomate Bola wholesale $50-54/kg, Aguacate $40-50/kg. Mercado doméstico activo.", impacto:"Medio", fuente:"Corbel Seeds #0039 · SNIIM · 30-Abr" },
      { titulo:"Green chile bell Nogales cae acelerado (supply end of season), Coachella Valley production increasing, Georgia harvest early May. Transición regional.", impacto:"Medio", fuente:"Corbel Seeds #0039 · FreshPlaza" },
      { titulo:"Limes Texas slightly higher: seedless 110s $42, 150s $36-40. Peru supply -30% (lluvia) mantiene ventana NA pero cierre WK19-20 esperado.", impacto:"Medio", fuente:"Corbel Seeds #0039 · USDA AMS" }
    ]
  },

  operaciones: {
    bascula: [
      { fecha:"25/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"26/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"27/04", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"28/04", productos:["Tomate Bola","Tomate Roma","Rezaga Tomate"] },
      { fecha:"29/04", productos:["Tomate Bola","Tomate Roma","Limón Persa"] },
      { fecha:"30/04", productos:["Tomate Bola","Tomate Roma","Rezaga Tomate"] },
      { fecha:"02/05", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"03/05", productos:["Tomate Bola","Tomate Roma"] },
      { fecha:"04/05", productos:["Tomate Bola","Tomate Roma","Rezaga Tomate"] }
    ],
    embarques: [
      { fecha:"04/05/2026", tipo:"Tomate", cargas:3, unidad:"ST-95, ST-101, JL-32",          destino:"Arizona", estado:"OK" },
      { fecha:"03/05/2026", tipo:"Tomate", cargas:4, unidad:"CHARLY-6, CGG-5, CGG-91, CGG-105",              destino:"Arizona", estado:"OK" },
      { fecha:"03/05/2026", tipo:"Tomate", cargas:1, unidad:"JL-13",                                          destino:"Texas",   estado:"OK" },
      { fecha:"02/05/2026", tipo:"Tomate", cargas:6, unidad:"ST-110, ST-109, CGG-105, CHARLY-6, CGG-5, CGG-91", destino:"Arizona", estado:"OK" },
      { fecha:"02/05/2026", tipo:"Tomate", cargas:1, unidad:"JL-13",                                          destino:"Texas",   estado:"OK" },
      { fecha:"30/04/2026", tipo:"Tomate", cargas:5, unidad:"JL-104, JL-101, ST-11, ST-99, JL-114",           destino:"Arizona", estado:"OK" },
      { fecha:"29/04/2026", tipo:"Tomate", cargas:5, unidad:"CGG-114, CGG-100, CGG-105, CHARLY-6, CGG-24",    destino:"Arizona", estado:"OK" },
      { fecha:"28/04/2026", tipo:"Tomate", cargas:2, unidad:"ST-86, ST-85",                                    destino:"Arizona", estado:"OK" },
      { fecha:"27/04/2026", tipo:"Tomate", cargas:6, unidad:"CGG-114, CGG-100, CGG-105, CHARLY-6, JL-32, JL-11", destino:"Arizona", estado:"OK" },
      { fecha:"26/04/2026", tipo:"Tomate", cargas:1, unidad:"MCALLEN",                                        destino:"Texas",   estado:"OK" },
      { fecha:"26/04/2026", tipo:"Tomate", cargas:1, unidad:"CGG-1",                                          destino:"Arizona", estado:"OK" }
    ]
  },

  correos: [
    {"hora":"16:10","asunto":"HortiDaily Newsletter | martes, 5 de mayo de 2026","de":"mail@hortidaily.es","leido":false,"fecha":"2026-05-05"},
    {"hora":"15:05","asunto":"HortiDaily Newsletter | Tuesday, May 5, 2026","de":"mail@hortidaily.com","leido":false,"fecha":"2026-05-05"},
    { hora:"02:18", asunto:"04-05-2026 REPORTES GENERAELS TOMATE",        de:"embarquesbelher@agbelher.com",   leido:false, fecha:"2026-05-05" },
    { hora:"22:15", asunto:"REPORTE DE BASCULA 04/05/2026 (TOMATE)",      de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-04" },
    { hora:"16:13", asunto:"REPORTE DE OUTBOUND TOMATE 03/05/2026",       de:"calidad@agbelher.com",           leido:false, fecha:"2026-05-04" },
    { hora:"22:20", asunto:"AVANCE DE TRILLA 04/05/2026 SORGO",           de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-04" },
    { hora:"01:35", asunto:"REPORTE DE BASCULA 04/05/2026 (REZAGA)",      de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-05" }
  ],

  ticker: [
    { label:"Outbound Bola Calavo 03/05",   valor:"60.96% 1st / merma 14.31%",  cambio:"CRÍTICO — 2do día deterioro",    dir:"down"    },
    { label:"Outbound Roma Calavo 03/05",   valor:"87.88% 1st / merma 2.57%",   cambio:"estable — no afectada",          dir:"up"      },
    { label:"Saldo Calavo a favor",         valor:"$1,206,806",                  cambio:"settle al 26-Abr",               dir:"up"      },
    { label:"Revenue Calavo acumulado",     valor:"$17,746,742",                 cambio:"WK01–WK18",                      dir:"up"      },
    { label:"Vine Ripe 4x4 USDA",          valor:"$66.95–68.95/cj",             cambio:"corrección WK19 en curso",       dir:"down"    },
    { label:"Roma XL Texas",               valor:"$50.95–52.95/cj",             cambio:"presión Coachella WK19",         dir:"down"    },
    { label:"Limes seedless 110s",         valor:"$42/bu",                       cambio:"Peru -30% sostiene",             dir:"up"      },
    { label:"CVGW (Calavo)",               valor:"$27.64",                       cambio:"-3.1% vs 02-May",                dir:"down"    },
    { label:"AVO (Mission)",               valor:"$13.33",                       cambio:"-6.5% vs prev close",            dir:"down"    },
    { label:"IVA Feb-26 autorizado",       valor:"$1,752,440 MXN",               cambio:"en proceso depósito SAT",        dir:"up"      },
    { label:"Sorgo trilla acumulada",      valor:"279 ha",                       cambio:"19 jornadas completadas",        dir:"up"      },
    { label:"Corbel Seeds última",         valor:"#0039",                        cambio:"30-Abr",                         dir:"neutral" }
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

  estrategia: {
    contratos: [
      {
        titulo: "Contrato Calavo 2026",
        estado: "Activo",
        nivel: "success",
        descripcion: "Pick & Pack @$5.00/caja — addendum firmado 2024. WK01–WK16: 655,641 cajas · $3.28M liquidado. Settle WK18 (al 26-Abr): P&P acumulado $4,466,620.",
        accion: "Verificar corrección del P&P a $5 en contrato. Reunión de alineación pendiente de confirmar fecha."
      },
      {
        titulo: "Contrato Calavo 2026-2029 — NUEVO MULTIANUAL",
        estado: "En Revisión",
        nivel: "warning",
        descripcion: "Irene Amezaga envió borrador 09-Abr-2026. Antonio lo reenvió a JC y Armando Llanes para revisión. Contrato para ciclos 2026-27, 2027-28 y 2028-29.",
        accion: "Reunión alineación 25-May-2026 con John Lindeman · James Snyder · Irene Amezaga · Armando Llanes."
      },
      {
        titulo: "Inversión Corbel Seeds",
        estado: "Activo",
        nivel: "info",
        descripcion: "Participación como CB1 en Corbel Seeds. Reunión Zoom 17-Mar sobre ensayos de tomate y chile. Selección 2025-26 enviada 29-Abr a Jim Augustine / Ross.",
        accion: "Revisar presentación 'Situación Actual de Corbel Seeds' enviada por Raymundo 23-Mar."
      }
    ],
    oportunidades: [
      {
        titulo: "VINE RIPE CORRECCIÓN — ÚLTIMA VENTANA WK19",
        prioridad: "Crítica",
        descripcion: "Corbel #0039 (30-Abr): USDA AMS Vine Ripe 4x4 $66.95-68.95 (down desde $68.95-70.95). Techo de temporada alcanzado. WK19 esperado con corrección sostenida a $60-65 max con Coachella y Georgia entrando.",
        accion: "Embarcar vine-ripe máximo WK19 inicio. Post WK19: reducir exposición. Priorizar roma + limes."
      },
      {
        titulo: "LIMES 110s $42 — VENTANA PERU -30%",
        prioridad: "Alta",
        descripcion: "Corbel #0039: Seedless 110s Texas $42. Peru supply -30% (lluvia) mantiene ventana NA. Ventana esperada cierre WK19-20 con flush primaveral Colombia/Brasil.",
        accion: "Maximizar embarques limón 110s Maui Fresh WK19. Coordinar urgente — ventana se cierra pronto."
      },
      {
        titulo: "ROMA FIRMEZA POST-PEAK — ACTUAR WK19",
        prioridad: "Alta",
        descripcion: "Roma firma bajo supply NA ajustada pero presiones Coachella + Georgia (early May) visibles. Outbound 03/05: Roma Calavo 87.88% primera, merma 2.57% — calidad premium mantenida.",
        accion: "Continuar embarques máximos Roma WK19. Post-WK19 presión esperada — actuar agresivo ahora."
      }
    ],
    watchlist: [
      {
        titulo: "Bola Calavo calidad CRISIS — outbound 03/05 confirma: 60.96% primera, merma 14.31%",
        nivel: "danger",
        descripcion: "Outbound 03/05: Bola Calavo 60.96% 1st · merma 14.31% (vs 84.92% / 3.59% el 02/05). 2do día consecutivo deterioro severo. Roma no afectada (87.88%, 2.57%). Inbound 03/05 también crítico: 63% primera, 25% merma. Patrón apunta a problema de campo específico en Bola.",
        accion: "URGENTE: Identificar campo/variedad/lote Bola que fue outbound 03/05. Pruebas calidad campo. Verificar si afecta cargas WK19. Roma puede continuar, Bola necesita evaluación antes de embarcar."
      },
      {
        titulo: "Declaración Anual ISR 2025 — reunión revisión 25-May",
        nivel: "warning",
        descripcion: "ISR 2025 y PTU: revisión final con jacruz, Antonio, Armando, Despacho Terrazas (Calderon) el 25-May-2026 11am-12pm. Monto ISR a pagar por confirmar.",
        accion: "Preparar materiales. Anticipar monto ISR para flujo Mayo-Junio."
      },
      {
        titulo: "Aranceles USMCA: revisión 1-Jul-2026 — presión legisladores Florida activa",
        nivel: "danger",
        descripcion: "Legisladores Florida mantienen presión por tarifas estacionales. Suprema Corte falló sobre aranceles. Corbel monitorea. Nota de L. Pina en emails de embarque: productos sin USMCA sujetos a 25% + arancel general.",
        accion: "Monitorear semanalmente. Confirmar cobertura USMCA en todos los embarques."
      }
    ],
    proximos: [
      { fecha:"05/05/2026",    evento:"WK19 continuación — embarques máximos de tomate (Roma + Vine-ripe cierre de ventana) y limón 110s antes corrección esperada.", tipo:"operativo", participantes:"Embarques · Calidad" },
      { fecha:"18-19/05/2026", evento:"Auditoría Cliente Calavo — Buyers Edge (Javier Martínez). Inspeccionará todas las unidades de producción y empaque.", tipo:"auditoria", participantes:"C. Marisol Castro · JC · Calavo Buyers Edge" },
      { fecha:"19/05/2026",    evento:"BPSI F/S Abril 2026 y forecast Q2 2026 — Zoom 11am-12pm (GMT-7)", tipo:"financiero", participantes:"Leima · Jacruz · JC · Armando Llanes" },
      { fecha:"25/05/2026",    evento:"Abril '26 F/S (Tomates/Limones/Granos) — Revisión final · 9:30-10:30am", tipo:"financiero", participantes:"JC · Antonio · Leima · Armando · Jacruz · Despacho Terrazas" },
      { fecha:"25/05/2026",    evento:"ABSA Revisión declaración final ISR 2025 y PTU · 11am-12pm", tipo:"financiero", participantes:"JC · Antonio · Armando · Jacruz · fcalderon@cryasociados.com" },
      { fecha:"25/05/2026",    evento:"Reunión alineación Contrato 2026-2029 — John Lindeman · James Snyder · Irene Amezaga · Armando Llanes", tipo:"reunion", participantes:"Antonio, JC, Calavo, Armando Llanes, Notaría 97" },
      { fecha:"26/05/2026",    evento:"Revisión final OL 10+2 P&L y Cash Flow · 10am-11am", tipo:"financiero", participantes:"Antonio · JC · Flavio · Leima · Juan · Armando · Jacruz" }
    ]
  },

  predicciones: {
    generado:  "05/05/2026 · 03:30",
    modelo:    "Claude claude-haiku-4-5-20251001",
    horizonte: "7 días",
    nota:      "Síntesis Corbel Seeds #0039 (30-Abr) + Outbound 02/05-03/05. Vine ripe en corrección clara post-peak. Roma firme pero presión Coachella/Georgia WK19+. Limes Peru -30% sustain pero ventana cierra WK19-20. Bola Calavo CRÍTICO — investigación urgente.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe 4x4",
        unidad: "carton 2-layer · USDA AMS FOB",
        tendencia: "bajista",
        confianza: 78,
        precio_actual:     { min: 66.95, max: 68.95 },
        precio_proyectado: { min: 60.00, max: 68.00 },
        razonamiento: "Corbel #0039 (30-Abr) — USDA AMS Vine Ripe 4x4 (2-layer): $66.95–68.95, down desde $68.95–70.95. Mercado 'mixed but generally firm' — transición post-peak clara. Virginia GH comenzó shipments WK18, California Coachella supply subiendo WK19. Corrección gradual a $60-65 esperada WK19-20.",
        factores: ["USDA AMS $66.95-68.95 (down desde $68.95-70.95)", "Corbel: post-peak transition confirmado", "Virginia GH tomato entrando spot market WK18-19", "California Coachella supply increasing early May", "Prior bookings dominan — spot market pierde fuerza"],
        riesgo: "Si múltiples GH operations lanzan volumen spot WK19, corrección acelerada a $55-60 posible.",
        accion: "ÚLTIMA VENTANA WK19 inicio. Post WK19 expect presión sostenida. Corbel #0039 confirma techo alcanzado."
      },
      {
        id: "roma",
        producto: "Tomate Roma XL",
        unidad: "carton 25lb · Texas",
        tendencia: "bajista",
        confianza: 72,
        precio_actual:     { min: 50.95, max: 52.95 },
        precio_proyectado: { min: 48.00, max: 54.00 },
        razonamiento: "Corbel #0039 (30-Abr): Roma XL Texas $50.95–52.95 (down desde $52.95–54.95 WK17). Roma firme bajo supply NA tight — pero presiones Coachella + Georgia (early May) ya visibles. Outbound 03/05 excelente: Roma Calavo 87.88% primera, merma 2.57% — calidad premium.",
        factores: ["Corbel #0039: Roma $50.95-52.95 (presionada WK19)", "Outbound 03/05: calidad premium (merma <3%)", "Coachella Valley supply increasing WK19", "Georgia harvest early May añade presión", "Supply NA todavía tight pero transición visible"],
        riesgo: "Si Coachella o Georgia supply llega acelerado WK19, corrección a $46-48 posible.",
        accion: "Continuar embarques máximos Roma WK19. Calidad premium. Presión esperada WK20+ — actuar agresivo ahora."
      },
      {
        id: "limon",
        producto: "Limón Persa 40lb",
        unidad: "7/10-bu FOB Texas",
        tendencia: "lateral",
        confianza: 70,
        precio_actual:     { min: 36.00, max: 42.00 },
        precio_proyectado: { min: 32.00, max: 42.00 },
        razonamiento: "Corbel #0039 (30-Abr): Limes Texas 'slightly higher' — seedless 110s $42, 150s $36-40. Peru supply -30% continúa dando ventana NA. Belher báscula 29/04 confirma precio comercialmente viable. Flush primaveral Colombia/Brasil esperado WK19-20 cerrará ventana.",
        factores: ["Corbel #0039: Seedless 110s $42, 150s $36-40", "Belher en báscula 29/04 = precio viable comercialmente", "Peru -30% supply mantiene ventana NA", "SNIIM Limón Veracruz $28 MXN/kg activo", "Flush Colombia/Brasil mayo-junio esperado WK19-20"],
        riesgo: "Flush primaveral podría presionar 110s a $36-38. Ventana cierra WK19-20.",
        accion: "EMBARCAR LIMÓN MÁXIMO WK19. Decisión báscula 29/04 confirma oportunidad viable. Coordinar Maui Fresh urgente."
      },
      {
        id: "bola-calidad",
        producto: "Tomate Bola · calidad CRISIS 03/05",
        unidad: "inbound vs outbound",
        tendencia: "bajista",
        confianza: 88,
        precio_actual:     { min: 66.95, max: 68.95 },
        precio_proyectado: { min: 50.00, max: 65.00 },
        razonamiento: "ALERTA CRÍTICA: Outbound 03/05 Bola Calavo 60.96% primera, merma 14.31% (vs 84.92% / 3.59% el 02/05). Inbound 03/05 también 63% primera, 25% merma. 2 indicadores apuntan al mismo lote/campo con problema grave. Roma no afectada. Si patrón continúa, cargas WK19 de Bola en riesgo de rechazo.",
        factores: ["Outbound 03/05: Bola 60.96% primera, merma 14.31% (CRÍTICO)", "Inbound 03/05: 63% primera, merma 25% (confirma problema)", "Roma Calavo 03/05: 87.88% primera — no afectada", "Divergencia D4→D5: Bola -23.96pp en primera, +10.72pp en merma", "Causa TBD: campo específico, rezaga, daño tránsito"],
        riesgo: "Cargas WK19 de Bola con mismo campo/lote podrían llegar rechazadas o con penalización severa.",
        accion: "INVESTIGACIÓN INMEDIATA: 1) Campo/lote Bola outbound 03/05. 2) Pruebas calidad campo WK19. 3) Separar Bola vs Roma en embarques WK19. 4) Roma sigue — Bola evaluar antes de cargar."
      }
    ]
  },

  industria: [
    { cat:"Calidad",   titulo:"OUTBOUND BOLA CALAVO 03/05 — merma 14.31% CRÍTICO · 2do día deterioro severo confirmado", impacto:"Crítico", fuente:"calidad@agbelher.com · 04-May-2026", resumen:"Outbound 03/05: Bola Calavo 60.96% primera, merma 14.31% — deterioro severo desde outbound 02/05 (84.92%, 3.59%). Roma Calavo 87.88% primera, merma 2.57% estable. Junto al inbound 03/05 (63%, 25% merma), dos indicadores independientes apuntan al mismo problema en Bola. Causa TBD — investigación urgente antes cargas WK19." },
    { cat:"Fiscal",    titulo:"IVA FEBRERO 2026 AUTORIZADO — $1,752,440 MXN — en proceso de depósito SAT", impacto:"Alto", fuente:"jacruz@agbelher.com · 29-Abr-2026", resumen:"Juan Antonio Cruz informa que el SAT autorizó el IVA correspondiente a febrero 2026 por $1,752,440 MXN — descrito como 'importe histórico'. En breve será depositado a cuenta Belher. Recuperación fiscal material que mejora posición de flujo de caja mayo 2026." },
    { cat:"Mercado",   titulo:"Vine Ripe 4x4 USDA AMS $66.95–68.95 — corrección iniciada, transición post-peak WK18-19", impacto:"Alto", fuente:"Corbel Seeds #0039 · USDA AMS · 30-Abr", resumen:"Corbel #0039 (30-Abr): USDA AMS reporta Vine Ripe 4x4 (2-layer cartons) $66.95-68.95 con 'mixed but generally firm' market. Down desde $68.95-70.95 en #0038. Transición post-peak clara. Techo de temporada probablemente alcanzado. WK19 podría ver presión sostenida a $60-65." },
    { cat:"Mercado",   titulo:"SNIIM CDMX integrado a Corbel: Jalapeño $28-35/kg, Tomate Bola $50-54/kg, Aguacate $40-50/kg", impacto:"Alto", fuente:"Corbel Seeds #0039 · SNIIM · 30-Abr", resumen:"Primera vez Corbel integra SNIIM datos verificados. Jalapeño Jalisco $28-35/kg ($30 freq), Tomate wholesale $50-54/kg, Aguacate $40-50/kg. Convergencia precios México-export confirma valores globales justos." },
    { cat:"Mercado",   titulo:"Roma firma pero transición esperada: Coachella Valley + Georgia early May presionarán supply", impacto:"Medio", fuente:"Corbel Seeds #0039 · FreshPlaza · 30-Abr", resumen:"Corbel #0039: 'Roma tomatoes remain firm under tight North American supply conditions'. Pero Coachella Valley supply increasing, Georgia harvest expected early May. Transición regional clara. Presiones esperadas WK19+." },
    { cat:"Mercado",   titulo:"Limes Texas slightly higher: Peru -30% sustenta ventana NA, flush primaveral cierra WK19-20", impacto:"Medio", fuente:"Corbel Seeds #0039 · USDA AMS · 30-Abr", resumen:"Corbel #0039: Mexico limes Texas 'slightly higher' — seedless 110s $42, 150s $36-40. Peru supply -30% (lluvia) mantiene ventana. Ventana esperada cerrar WK19-20 con flush Colombia/Brasil primaveral." },
    { cat:"Mercado",   titulo:"Green chile bell Nogales cae acelerado, Coachella Valley + Georgia early May supply aumenta", impacto:"Medio", fuente:"Corbel Seeds #0039 · FreshPlaza · 30-Abr", resumen:"Nogales green chile bell shipments caen sharply (end-of-season), Coachella Valley increasing, Georgia harvest early May. Transición de supply Mexico → US regional." },
    { cat:"Logística", titulo:"Aranceles USMCA: productos sin USMCA sujetos a 25% + arancel general — aviso activo en embarques", impacto:"Medio", fuente:"L. Pina / embarquesbelher · 03-May-2026", resumen:"Eduardo Castañeda (L. Pina) reitera en threads embarques 03-May: productos México/Canadá sin USMCA sujetos a 25% + arancel general. Confirmar cobertura USMCA en todos embarques. Riesgo activo para WK19+." }
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
    semana:      "WK18",
    fechas:      "28 Abr – 03 May 2026",
    fuente:      "Leima Leyva · Liquidación Calavo al 26-Abr-2026 · 01-May-2026",
    actualizado: "05/05/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 27.64, prevClose: 28.52, cambio: -0.88, cambioPct: -3.1,
        h52: 28.98, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · close 02-May-2026"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 13.33, prevClose: 14.26, cambio: -0.93, cambioPct: -6.5,
        h52: 15.53, l52: 10.00, volumen: null,
        fuente: "Yahoo Finance · 05-May-2026"
      }
    ],

    correos: [
      {
        fecha: "01/05/2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher/ADM",
        asunto: "Liquidación Calavo al 26 abril '26 — saldo a favor $1,206,806",
        tipo: "settlement", nivel: "success",
        resumen: "Leima comparte liquidación acumulada al 26-Abr. Revenue $17,746,742 · Aranceles $1,775,841 · Comisiones $1,916,508 · Venta neta $12,613,207 · P&P $4,466,620. Saldo S/Belher: $1,639,473. Conciliación S/Calavo: $1,206,806. Quedan 48k cajas + 7k piso por facturar."
      },
      {
        fecha: "28/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Canceled: Weekly Tomato Meeting — sin Tomato Weekly Update WK18",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene cancela reunión semanal Teams del 28/04. Sin adjunto Tomato Weekly Update WK17/18. 3 semanas sin reporte formal Calavo."
      },
      {
        fecha: "22/04/2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Weekly Tomato Meeting — convoca reunión Teams semanal",
        tipo: "reunion", nivel: "info",
        resumen: "Irene convoca reunión semanal Teams (22-Abr-2026). Meeting ID: 252 534 315 394 18. Sin adjunto Tomato Weekly Update WK16/17."
      }
    ],

    alertas: [
      { nivel: "success", texto: "LIQUIDACIÓN WK18 AL 26-ABR: Revenue $17,746,742 · Saldo a favor $1,206,806 (S/Calavo). Quedan 48k cajas + 7k piso por facturar." },
      { nivel: "warning", texto: "CVGW $27.64 (-3.1% vs 02-May) · AVO $13.33 (-6.5% vs prev close) — ambos en corrección. CVGW cae $0.88 en 3 días, AVO -0.93." },
      { nivel: "warning", texto: "Tomato Weekly Update WK19 pendiente — Irene canceló reunión 28/04 sin adjunto. 3+ semanas sin reporte formal Calavo." }
    ],

    kpi: {
      pallets: null, loads: 24, pkgs: 38067,
      fobPromedio: 28.95, fobAnterior: 39.72, pkgsAnterior: 53976,
      revenueWk: 1101951, revenueAnt: 2144379,
      nota: "WK16 — Settle 15-Abr: $1,101,951 / 38,067 pkgs = $28.95/cj. Settle acumulado al WK18 (26-Abr): $17,746,742 total."
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
