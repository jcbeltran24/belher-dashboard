window.BELHER = {
  meta: {
    fecha: "Miércoles 20 May 2026",
    semana: "WK 21",
    actualizado: "20/05/2026 · 15:41"
  },

  alertas: [
    {"nivel":"info","texto":"📅 REUNIÓN CONTRATO ABSA-CALAVO — Jue 21 May · 1:30–2:30 pm (GMT-7). Zoom: 882 2811 3382 / clave 716942. Anfitrión: Juan Antonio Cruz (jacruz@agbelher.com). Agenda: contrato de distribución."},
    {"nivel":"success","texto":"ADJUNTOS BÁSCULAS 20/05 (descargados 07:53) — 9 archivos procesados: Rezaga de Tomate 19/05, Listado Diario Limón Persa 19/05, y 7 adicionales. Guardados en Drive: Belher Adjuntos."},
    {"nivel":"success","texto":"REPORTES GENERALES TOMATE 19/05 — Embarques Belher confirmó envío de reportes de embarque y empaque de tomate. Operación nocturna completada."},
    {"nivel":"success","texto":"MANIFIESTO LIMÓN PERSA + CHILE HABANERO/FRESNO 19/05 — Chofer: Cristhian Gabriel Franco Barraza (667-429-3236). Caja CGG-116 (placas 992XS7): Limón Persa + Chile Habanero. Caja CGG-134 (placas 85UE82): Chile Anaheim + Fresno. Destino Nogales CGG."},
    {"nivel":"success","texto":"BILL/MANIFIESTOS TOMATE NOGALES CGG 19/05 — Embarques Belher envió documentos completos: bill of lading, manifiesto, datos transportista, facturas XML y proformas."},
    {"nivel":"success","texto":"REPORTES GENERALES LIMÓN Y CHILE 19/05 — Embarques Belher confirmó envío de reportes generales de empaque y embarque de limón persa y chile."},
    {"nivel":"warning","texto":"OUTBOUND TOMATE 18/05 — BOLA YAMETO: 1ª 74.40% / 2ª 15.60% / 3ª 4.80% / Merma 5.20% / Peso prom. 32.59. BOLA TOLIN: 1ª 63.64% / Merma 5.45%. ROMA CALAVO: 1ª 82.13% / Merma 2.80% / Peso prom. 25.89. ROMA YAMETO: 1ª 75.60% / Merma 6.00%."},
    {"nivel":"warning","texto":"🔐 ALERTA SEGURIDAD GOOGLE 17/05 — Nuevo inicio de sesión detectado en jcbeltranochoa@gmail.com (cuenta de recuperación: juancarlos@agbelher.com). Verificar si fue acceso autorizado en myaccount.google.com."},
    {"nivel":"warning","texto":"WK20 CORRECCIÓN CONFIRMADA — Vine-ripe $26 avg (down desde $48 WK19). 4x4/4x5: $30-32, 5x5: $16-18, 6x6: $12-14. Romans: $24-26. AgBelher avg $22-23. Canadá +300% NE markets."},
    {"nivel":"info","texto":"SETTLE WK19 CALAVO — Leima confirmó USD 2,506 a favor según Calavo. Análisis y conciliación en proceso. Armando Llanes (CPA) notificado."},
    {"nivel":"info","texto":"CONTRIBUCIONES POR PAGAR — IMSS-INFONAVIT + SAT: MXP 25.4M / ~$1.4M USD. IMSS-INFONAVIT MXP 21.5M vencido. Requiere atención urgente."}
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
      nota: "Deuda liquidada WK16. Settle acumulado al 26-Abr-2026: saldo a favor Belher $1,206,806 (S/Calavo). WK19 settle (07-May-2026): ~$2.506M a favor S/Calavo (análisis pendiente 08-May). Quedan cajas por facturar."
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
      creditoBelher:   1639473,
      creditoCalavo:   1206806,
      diferencia:       432667,
      avgLiq_wk11_14:   455647,
      cruceEstimado:   "WK16",
      cruceEstimadoFecha: "15-Abr-2026",
      cruceFecha:      "15-Abr-2026",
      cruceConfirmado: true
    },
    capitalTrabajo: 5959027,
    prestamo:        472037,
    intereses:         26789,
    gastosVarios:       2421,
    saldoAnterior:   655867,
    avanceLiquidacion: 350000,

    porLiquidar:    1639473,
    saldoActual:    1639473,
    saldoBelher:    1639473,
    saldoCalavo:    1206806,
    diferencia:      432667,
    neto:           1639473,

    conciliacion: [
      { concepto:"Beltran fee ADM no reconocido por Calavo", monto:  275660, favorDe:"Belher" },
      { concepto:"Dif. comisión — Calavo aplica >22% sobre $17.7M", monto: 211934, favorDe:"Belher" },
      { concepto:"Dif. préstamo + intereses (Calavo aplica menos)", monto: -54927, favorDe:"Belher" }
    ],

    pendientes: {
      cajasPorFacturar: 48000,
      cajasPiso:         7000,
      cajasTotal:       55000,
      lbsPorCaja:          25,
      lbsTotal:       1375000,
      escenarios: [
        { label:"Bajo",  precioCaja: 37, revBruto: 2035000, neto:  712250 },
        { label:"Alto",  precioCaja: 50, revBruto: 2750000, neto:  962500 }
      ],
      saldoTotalBajo:  2351723,
      saldoTotalAlto:  2601973,
      pctComision:       0.22,
      pctOtros:          0.18,
      pctPickPack:       0.25
    },

    accionesPendientes: [
      { prioridad:"Alta",  accion:"Solicitar detalle PO×PO de comisión",      descripcion:"Validar 22% aplicado en cada uno de los 528 POs — diferencia $211,934" },
      { prioridad:"Alta",  accion:"Conciliar Beltran fee ADM $275,660",        descripcion:"Exigir ajuste si está pactado en contrato con Calavo" },
      { prioridad:"Alta",  accion:"Confirmar timeline 55k cajas",              descripcion:"Fecha de facturación 48k pendientes + 7k piso — cash flow $1.0M-$1.4M" },
      { prioridad:"Media", accion:"Validar amortización préstamo",             descripcion:"Conciliar diferencia $54,927 contra saldo de préstamo de infraestructura" },
      { prioridad:"Media", accion:"Solicitar reporte condition cajas en piso", descripcion:"7k cajas en piso con riesgo merma >15% — evaluar dump vs salvamento" },
      { prioridad:"Alta",  accion:"Cerrar memo de conciliación formal",        descripcion:"Firmado por ambas partes antes de iniciar temporada 2026-2027" }
    ],

    waterfallLiquidacion: [
      { concepto:"Ventas brutas",              monto:  17746742, tipo:"ingreso",   subtotal: null },
      { concepto:"Aranceles (anti-dumping)",   monto:  -1775841, tipo:"deduccion", subtotal: null },
      { concepto:"Comisión Calavo (22%)",      monto:  -1916508, tipo:"deduccion", subtotal: null },
      { concepto:"Otros gastos (expenses)",    monto:  -1441186, tipo:"deduccion", subtotal: null },
      { concepto:"VENTA NETA OPERATIVA",       monto:  12613207, tipo:"subtotal",  subtotal: true },
      { concepto:"Pick & Pack",                monto:  -4466620, tipo:"deduccion", subtotal: null },
      { concepto:"Preseason advance",          monto:  -5000000, tipo:"deduccion", subtotal: null },
      { concepto:"Balance temporada 2024-25",  monto:   -655867, tipo:"deduccion", subtotal: null },
      { concepto:"Avance de liquidación",      monto:   -350000, tipo:"deduccion", subtotal: null },
      { concepto:"Préstamo",                   monto:   -472037, tipo:"deduccion", subtotal: null },
      { concepto:"Intereses",                  monto:    -26789, tipo:"deduccion", subtotal: null },
      { concepto:"Gastos varios",              monto:     -2421, tipo:"deduccion", subtotal: null },
      { concepto:"SALDO A FAVOR DE BELHER",    monto:   1639473, tipo:"total",     subtotal: true }
    ],

    conciliacionDetalle: [
      { concepto:"Ventas brutas",          belher:  17746742, calavo:  17746742, diff:       0, nota:"Igual" },
      { concepto:"Aranceles",              belher:  -1775841, calavo:  -1775841, diff:       0, nota:"Igual" },
      { concepto:"Comisión Calavo",        belher:  -1916508, calavo:  -2128442, diff:  211934, nota:"Calavo aplica >22% — diferencia $211,934" },
      { concepto:"Otros gastos",           belher:  -1441186, calavo:  -1441186, diff:       0, nota:"Igual" },
      { concepto:"VENTA NETA OPERATIVA",   belher:  12613207, calavo:  12401273, diff:  211934, nota:"Subtotal", esSubtotal:true },
      { concepto:"Pick & Pack",            belher:  -4466620, calavo:  -4466620, diff:       0, nota:"Igual" },
      { concepto:"Preseason advance",      belher:  -5000000, calavo:  -5000000, diff:       0, nota:"Igual" },
      { concepto:"Balance 2024-25",        belher:   -655867, calavo:   -655867, diff:       0, nota:"Igual" },
      { concepto:"Avance liquidación",     belher:   -350000, calavo:   -350000, diff:       0, nota:"Igual" },
      { concepto:"Préstamo",               belher:   -472037, calavo:   -417110, diff:  -54927, nota:"Calavo aplica menos pago — diferencia $54,927" },
      { concepto:"Intereses",              belher:    -26789, calavo:    -26789, diff:       0, nota:"Igual" },
      { concepto:"Gastos varios",          belher:     -2421, calavo:     -2421, diff:       0, nota:"Igual" },
      { concepto:"Beltran fee ADM",        belher:         0, calavo:   -275660, diff:  275660, nota:"No reconocido por Calavo" },
      { concepto:"SALDO A FAVOR",          belher:   1639473, calavo:   1206806, diff:  432667, nota:"Total diferencia", esSubtotal:true }
    ],

    notaSettlement: "WK18 (26-Abr-2026): Settlement acumulado 528 POs. Según Belher: $1,639,473 · Según Calavo: $1,206,806 · Diferencia: $432,667 (fee ADM $275,660 + dif. comisión $211,934 - dif. préstamo $54,927). WK19 (07-May-2026): Calavo reporta ~$2.506M a favor (análisis conciliación 08-May). Quedan cajas por liquidar. Fuente: conciliación Leima / Calavo.",
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
      { sem:"WK18", wire:"26-Abr", pago:null,   cajas:null,  cont:528,  estado:"Settlement",
        revenueBruto: 17746742, antiDumping: 1775841, comision: 1916508, otrosGastos: 1441186,
        ventaNetaOp: 12613207, pickPack: 4466620, preseason: 5000000, balanceAnt: 655867,
        avanceLiq: 350000, prestamo: 472037, intereses: 26789, gastosVarios: 2421,
        saldoBelher: 1639473, saldoCalavo: 1206806, diferencia: 432667,
        nota:"Settle WK18 (26-Abr-2026): 528 POs facturados. Belher: $1,639,473 · Calavo: $1,206,806 · Diferencia $432,667 = fee ADM $275,660 + dif comisión $211,934 - dif préstamo $54,927. Quedan cajas por liquidar." },
      { sem:"WK19", wire:"07-May", pago:null,   cajas:null,  cont:null, estado:"Settlement",
        saldoCalavo: 2506000, fecha_reporte: "07-May-2026",
        nota:"WK19 Settle (07-May-2026): Calavo reporta ~$2.506M a favor. Análisis y conciliación detallada 08-May por Leima." }
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
      { fecha:"WK18", primaPromedio:82.60, mermaPromedio:3.79, nota:"D1(27/04): BC 81.50%P merma 3.28% · Zazu 89.64%P merma 2.91%. D2(28/04): BC 73.37%P merma 3.16% · RMill 89.13%P merma 2.52% · RZazu 86.58%P merma 2.03%. D3(29/04): BC 82.17%P merma 3.71% · RCal 84.00%P merma 2.00% · RMill 84.44%P merma 2.68%. D4(02/05): BC 84.92%P merma 3.59% · RCal 86.55%P merma 2.72%. D5(03/05): BC 60.96%P merma 14.31% CRÍTICO · RCal 87.88%P merma 2.57%. Promedio recalculado con 12 puntos." },
      { fecha:"WK19", primaPromedio:83.16, mermaPromedio:2.82, nota:"D1(04/05): Inbound 61% primera, merma 19%. Outbound 04/05: BC 80.38% merma 4.40%, RCal 87.43% merma 2.16%. D2(05/05): Outbound 05/05 mejora — BC 79.74% merma 4.20%, RCal 84.30% merma 2.55%, Chile Fresno 80.21% merma 3.38%. D3(06/05): Outbound 06/05 EXCELENTE — Bola 86.29% merma 3.05%, Roma 79.60% merma 1.60%, Chile Anaheim 88.59% merma 0.97%. Patrón sostenido de recuperación calidad." }
    ],
    ultimoOutbound: {
      fecha: "Viernes 15 May 2026",
      variedades: [
        { nombre:"Bola Calavo",     etiqueta:"Calavo", canal:"exportacion", primera:86.29, segunda:5.89, tercera:4.77, merma:3.05, peso:25.40, alerta:false },
        { nombre:"Roma Calavo",     etiqueta:"Calavo", canal:"exportacion", primera:79.60, segunda:10.80, tercera:8.00, merma:1.60, peso:26.84, alerta:false },
        { nombre:"Chile Anaheim",   etiqueta:"Anaheim", canal:"exportacion", primera:88.59, segunda:10.43, tercera:0.98, merma:0.97, peso:25.87, alerta:false }
      ],
      anterior: {
        fecha: "Viernes 15 May 2026",
        variedades: [
          { nombre:"Bola Calavo", etiqueta:"Calavo", canal:"exportacion", primera:79.74, segunda:8.22, tercera:7.85, merma:4.20, peso:25.55, alerta:false },
          { nombre:"Roma Calavo", etiqueta:"Calavo", canal:"exportacion", primera:84.30, segunda:7.73, tercera:5.42, merma:2.55, peso:25.54, alerta:false },
          { nombre:"Chile Fresno", etiqueta:"Fresno", canal:"exportacion", primera:80.21, segunda:16.42, tercera:3.38, merma:3.38, peso:26.78, alerta:false }
        ]
      },
      ultimoInbound: {
        fecha: "Viernes 15 May 2026",
        variedades: [
          { nombre:"Tomate entrada", etiqueta:"Inbound", canal:"interno", primera:56, segunda:11, tercera:8, merma:25.00, alerta:true }
        ],
        nota: "Inbound 05/05: 56% primera, merma 25% — mejorado vs 04/05 (problema anterior en fuente específica). Outbound 05/05 confirma recuperación — no es selección en empaque sino factor de origen 04/05 resuelto. Outbound 06/05 continúa mejora."
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
      nota:              "Trilla WK19 en curso: 292 ha acumuladas en 21 jornadas (31/Mar–06/May). Jornada 06/05: Quevedo 1+Aguaruto completada (13 ha). Sifón finalizados 02/05 — 15 ha total. Descanso obligatorio 01/May ejecutado.",
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
        { fecha:"04/05/2026", campos:"Sifón 1 y Sifón 2",                                    ha:5,  cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 04/05/2026 SORGO (SIFON 1 Y SIFON 2)" },
        { fecha:"05/05/2026", campos:"Quevedo 1",                                             ha:11, cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 05/05/2026 SORGO (QUEVEDO 1)" },
        { fecha:"06/05/2026", campos:"Quevedo 1 + Aguaruto",                                  ha:13, cultivo:"Sorgo", fuente:"AVANCE DE TRILLA 06/05/2026 SORGO (QUEVEDO 1 Y AGUARUTO)" },
        { fecha:"07/05/2026", campos:"Continuación — pendiente reporte",                     ha:null, cultivo:"Sorgo" }
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
    reporte: "Calavo Market Call WK20",
    fecha: "13/05/2026",
    resumen: "WK20: Vine-ripe $26 avg (caída desde $48 WK19). 4x4/4x5: $30-32, algunos $28. 5x5: $16-18, 6x6: $12-14. Romans: $24-26, jumbos $20-22. AgBelher avg $22-23. Primera carga ADM en camino (4x4/4x5, expecting $20s). Romans harvest julio (no junio). Canadá +300% NE markets, Florida subió producción Roma, España importa Romans a NY. Aranceles bajaron 6%→5%. Inventario final: 2,100 Romans tallas pequeñas.",
    precios:  [
      { producto:"Vine Ripe 4x4/4x5",      min:28.00, max:32.00, anterior:48.00, via:"Calavo WK20",   alerta:true  },
      { producto:"Vine Ripe 5x5/5x6",      min:16.00, max:18.00, anterior:null,  via:"Calavo WK20",   alerta:false },
      { producto:"Vine Ripe 6x6",           min:12.00, max:14.00, anterior:null,  via:"Calavo WK20",   alerta:false },
      { producto:"Roma XL 25lb",            min:24.00, max:26.00, anterior:50.95, via:"Calavo WK20",   alerta:true  },
      { producto:"Roma Jumbo 4x4/4x5",      min:20.00, max:22.00, anterior:null,  via:"Calavo WK20",   alerta:false },
      { producto:"AgBelher promedio",       min:22.00, max:23.00, anterior:null,  via:"Calavo WK20",   alerta:false },
      { producto:"Jalapeño",                min:33.00, max:35.00, anterior:54.00, via:"Texas",          alerta:true  },
      { producto:"Habanero 8lb",            min:32.00, max:34.00, anterior:42.00, via:"Texas",          alerta:false },
      { producto:"Chile Bell orange 11lb",  min:14.00, max:15.00, anterior:11.00, via:"Texas",          alerta:false },
      { producto:"Chile Bell red 11lb",     min:16.00, max:18.00, anterior:15.00, via:"Texas",          alerta:false },
      { producto:"Limón seedless 110s",     min:42.00, max:42.00, anterior:40.00, via:"Texas",          alerta:false },
      { producto:"Limón seedless 150s",     min:36.00, max:40.00, anterior:36.00, via:"Texas",          alerta:false }
    ],
    noticias: [
      { titulo:"WK19 precio $26 avg — caída desde $48. 4x4/4x5 $30-32 aún viables, 6x6 ya en $12-14.", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026" },
      { titulo:"Canadá +300% producción NE últimos 2 años — GH high-tech, duty-free, quitando share en NY/Baltimore/Chicago.", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026" },
      { titulo:"Romans harvest julio (no junio). 20-Jun: volumen limitado solo para programa Charlie. Jumbos 4x4/4x5.", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026" },
      { titulo:"Florida aumentó producción Roma significativamente. España importando Romans a NY mercado premium. Guatemala 2 cargas.", impacto:"Medio", fuente:"Calavo Market Call · 13-May-2026" },
      { titulo:"Aranceles bajaron 6%→5%. Importadores pequeños MX no renuevan bonds para resto de temporada.", impacto:"Medio", fuente:"Calavo Market Call · 13-May-2026" },
      { titulo:"Inventario final: 2,100 Romans tallas pequeñas. Calidad actual 2 semanas más — luego enfoque 5x6/6x6.", impacto:"Bajo", fuente:"Calavo Market Call · 13-May-2026" }
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
      { fecha:"04/05", productos:["Tomate Bola","Tomate Roma","Rezaga Tomate"] },
      { fecha:"05/05", productos:["Tomate Bola","Tomate Roma","Sorgo"] },
      { fecha:"06/05", productos:["Tomate Rezaga","Sorgo"] },
      { fecha:"07/05", productos:["Tomate Bola","Tomate Roma","Rezaga Tomate","Limón Persa"] }
    ],
    embarques: [
      { fecha:"07/05/2026", tipo:"Tomate", cargas:1, unidad:"CGG-24", destino:"Nogales", estado:"OK", nota:"07/05 reporte diario Calavo" },
      { fecha:"07/05/2026", tipo:"Reportes", cargas:null, unidad:"Generales", destino:"Múltiple", estado:"OK", nota:"07/05 reportes generales" },
      { fecha:"06/05/2026", tipo:"Chile", cargas:1, unidad:"CHARLY-6", destino:"Arizona", estado:"OK", nota:"06/05 manifiesto chile Anaheim/Fresno" },
      { fecha:"06/05/2026", tipo:"Tomate", cargas:1, unidad:"CGG",     destino:"Nogales", estado:"OK", nota:"06/05 bill/manifiesto tomate Calavo Nogales" },
      { fecha:"06/05/2026", tipo:"Tomate", cargas:1, unidad:"Reporte Calavo", destino:"Múltiple", estado:"OK", nota:"06/05 reporte diario Calavo" },
      { fecha:"05/05/2026", tipo:"Tomate", cargas:1, unidad:"JL (Nogales)", destino:"Arizona", estado:"OK", nota:"05/05 BILL MANIFIESTO JL" },
      { fecha:"05/05/2026", tipo:"Tomate", cargas:1, unidad:"Reportes generales", destino:"Múltiple", estado:"OK", nota:"05/05 Reportes empaque 02:56" },
      { fecha:"04/05/2026", tipo:"Tomate", cargas:3, unidad:"ST-95, ST-101, JL-32",          destino:"Arizona", estado:"OK" },
      { fecha:"03/05/2026", tipo:"Tomate", cargas:4, unidad:"CHARLY-6, CGG-5, CGG-91, CGG-105",              destino:"Arizona", estado:"OK" },
      { fecha:"03/05/2026", tipo:"Tomate", cargas:1, unidad:"JL-13",                                          destino:"Texas",   estado:"OK" },
      { fecha:"02/05/2026", tipo:"Tomate", cargas:6, unidad:"ST-110, ST-109, CGG-105, CHARLY-6, CGG-5, CGG-91", destino:"Arizona", estado:"OK" },
      { fecha:"02/05/2026", tipo:"Tomate", cargas:1, unidad:"JL-13",                                          destino:"Texas",   estado:"OK" },
      { fecha:"30/04/2026", tipo:"Tomate", cargas:5, unidad:"JL-104, JL-101, ST-11, ST-99, JL-114",           destino:"Arizona", estado:"OK" },
      { fecha:"29/04/2026", tipo:"Tomate", cargas:5, unidad:"CGG-114, CGG-100, CGG-105, CHARLY-6, CGG-24",    destino:"Arizona", estado:"OK" }
    ]
  },

  correos: [
    {"hora":"07:54","asunto":"✅ Belher Adjuntos — 9 archivos (20-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-20"},
    {"hora":"21:20","asunto":"19-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"20:35","asunto":"MANIFIESTO DE CARGA DE LIMON PERSA-CHILE HABANERO Y FRESNO","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"20:34","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES CGG","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"20:32","asunto":"19-05-2026 REPORTES GENERALES LIMON","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"20:30","asunto":"19-05-2026 REPORTES GENERALES CHILE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"16:27","asunto":"Invitación: Contrato de Distribución ABSA-CALAVO jue 21 de may de 2026 1:30pm - 2:30pm","de":"jacruz@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"16:47","asunto":"REPORTE DE BASCULA 19/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"15:28","asunto":"REPORTE DE BASCULA 19/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"10:17","asunto":"REPORTE DE OUTBOUND TOMATE 18/05/2026","de":"calidad@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 5 archivos (19-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-19"},
    {"hora":"20:14","asunto":"18-05-2026 REPORTES GENERALES","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-18"},
    {"hora":"10:24","asunto":"Alerta de seguridad para jcbeltranochoa@gmail.com","de":"no-reply@accounts.google.com","leido":false,"fecha":"2026-05-17"},
    {"hora":"21:33","asunto":"REPORTE DIARIO CALAVO 16-05-2026","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"21:32","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES ST","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"21:31","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS MCALLEN","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"21:11","asunto":"16-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"19:02","asunto":"REPORTE DE BASCULA 16/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"14:56","asunto":"REPORTE DE BASCULA 16/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"10:09","asunto":"REPORTE DE OUTBOUND TOMATE 15/05/2026","de":"calidad@agbelher.com","leido":false,"fecha":"2026-05-16"},
    {"hora":"23:14","asunto":"15-05-2026 REPORTE GENERAL CHILE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-15"},
    {"hora":"23:13","asunto":"15-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-15"},
    {"hora":"22:37","asunto":"REPORTE DE BASCULA 15/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-15"},
    {"hora":"15:43","asunto":"REPORTE DE BASCULA 15/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-15"},
    {"hora":"10:00","asunto":"REPORTE DE OUTBOUND TOMATE 14/05/2026","de":"calidad@agbelher.com","leido":false,"fecha":"2026-05-15"},
    {"hora":"20:43","asunto":"14-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-14"},
    {"hora":"20:25","asunto":"14-05-2026 REPORTES GENERALES CHILE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-14"},
    {"hora":"19:03","asunto":"REPORTE DE BASCULA 14/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-14"},
    {"hora":"15:18","asunto":"REPORTE DE BASCULA 14/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-14"},
    {"hora":"10:22","asunto":"REPORTE DE OUTBOUND TOMATE 13/05/2026","de":"calidad@agbelher.com","leido":false,"fecha":"2026-05-14"},
    {"hora":"20:08","asunto":"12-05-2026 REPORTES GENERALES DE TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-12"},
    {"hora":"18:33","asunto":"REPORTE DE BASCULA 12/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-12"},
    {"hora":"15:46","asunto":"REPORTE DE BASCULA 12/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-12"},
    {"hora":"10:09","asunto":"REPORTE DE OUTBOUND TOMATE 11/05/2026","de":"calidad@agbelher.com","leido":false,"fecha":"2026-05-12"},
    {"hora":"22:56","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES CGG","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-11"},
    {"hora":"22:46","asunto":"REPORTE DIARIO CALAVO 11-05-2026","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-11"},
    {"hora":"08:00","asunto":"DETECCIÓN DE CONTAMINANTES EN FRUTAS Y VERDURAS","de":"karen.arenivar@suminsaindustria.com","leido":false,"fecha":"2026-05-11"},
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 8 archivos (10-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-10"},
    {"hora":"21:36","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES CGG","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"21:36","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS MCALLEN","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"21:27","asunto":"09-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"21:25","asunto":"09-05-2026 REPORTES GENERALES CHILE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"21:24","asunto":"REPORTE DIARIO 09-05-2026","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"21:23","asunto":"09-05-2026 REPORTES GENERALES LIMON","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-09"},
    {"hora":"22:10","asunto":"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES ST","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"22:04","asunto":"REPORTE DIARIO CALAVO 08-05-2026","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"21:57","asunto":"08-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"21:21","asunto":"08-05-2026 REPORTES GENERALES CHILE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"20:44","asunto":"REPORTE DE BASCULA 08/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"14:07","asunto":"HortiDaily Newsletter | Friday, May 8, 2026","de":"mail@hortidaily.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"10:13","asunto":"¿Quién es el mayor experto en fútbol del sector internacional de frutas y hortalizas?","de":"mail@hortidaily.es","leido":false,"fecha":"2026-05-08"},
    {"hora":"08:17","asunto":"The Morning — GBM","de":"no-reply@email.gbm.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"07:00","asunto":"The World of Fresh Meets in Asia - Now With Exclusive Buyer Benefits","de":"info@gp-events.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"06:35","asunto":"Haz que tus fotos revivan cada recuerdo (Adobe Lightroom)","de":"mail@mail.adobe.com","leido":false,"fecha":"2026-05-08"},
    {"hora":"05:09","asunto":"Alerta de seguridad para jcbeltranochoa@gmail.com","de":"no-reply@accounts.google.com","leido":false,"fecha":"2026-05-08"},
    { hora:"00:37", asunto:"REPORTE DE BASCULA 07/05/2026 (REZAGA DE TOMATE)",      de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-08" },
    { hora:"00:04", asunto:"REPORTE DE BASCULA 07/05/2026 (LIMON PERSA)",           de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-08" },
    { hora:"00:02", asunto:"REPORTE DE BASCULA 07/05/2026 (TOMATE)",               de:"basculabelher@gmail.com",        leido:false, fecha:"2026-05-08" },
    { hora:"01:44", asunto:"BILL,MANIFIESTO,DATOS DEL TRANSPORTISTA,FACTURAS Y XML,PROFORMAS NOGALES CGG", de:"embarquesbelher@agbelher.com", leido:false, fecha:"2026-05-08" },
    { hora:"01:42", asunto:"REPORTE DIARIO CALAVO 07-05-2026", de:"embarquesbelher@agbelher.com", leido:false, fecha:"2026-05-08" },
    { hora:"01:40", asunto:"07-05-2026 REPORTES GENERALES", de:"embarquesbelher@agbelher.com", leido:false, fecha:"2026-05-08" },
    { hora:"16:24", asunto:"REPORTE DE OUTBOUND TOMATE Y CHILE 06/05/2026", de:"calidad@agbelher.com", leido:false, fecha:"2026-05-07" },
    { hora:"21:48", asunto:"RV: 2026 03-05 Agricola Belher Settle WK19 7 Mayo 2026.xlsx", de:"leima@agbelher.com", leido:false, fecha:"2026-05-07" }
  ],

  ticker: [
    { label:"Outbound Bola Calavo 06/05",   valor:"86.29% 1st / merma 3.05%",   cambio:"mejora sostenida WK19",       dir:"up"      },
    { label:"Outbound Roma Calavo 06/05",   valor:"79.60% 1st / merma 1.60%",   cambio:"excelente — calidad premium", dir:"up"      },
    { label:"Outbound Chile Anaheim 06/05", valor:"88.59% 1st / merma 0.97%",   cambio:"superior",                   dir:"up"      },
    { label:"Settlement WK19",              valor:"~$2.506M a favor",            cambio:"Calavo 07-May",              dir:"up"      },
    { label:"Revenue Calavo acumulado",     valor:"$17,746,742",                 cambio:"WK01–WK18",                  dir:"up"      },
    { label:"Vine Ripe 4x4/4x5 WK20",      valor:"$28–32/cj",                   cambio:"down desde $48 WK19",         dir:"down"    },
    { label:"Roma XL WK20",               valor:"$24–26/cj",                   cambio:"down desde $50.95 WK19",     dir:"down"    },
    { label:"Limes seedless 110s",         valor:"$42/bu",                       cambio:"Peru -30% sostiene",         dir:"up"      },
    { label:"CVGW (Calavo)",               valor:"$26.85",                       cambio:"-4.07% vs prev close",       dir:"down"    },
    { label:"AVO (Mission)",               valor:"$12.39",                       cambio:"-8.96% vs prev close",       dir:"down"    },
    { label:"Sorgo trilla acumulada",      valor:"292 ha",                       cambio:"21 jornadas (31/Mar–06/May)", dir:"up"      },
    { label:"Corbel Seeds última",         valor:"#0039",                        cambio:"30-Abr",                     dir:"neutral" }
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
        titulo: "CAJAS 2LB VIVA PROGRAM — CECSO JULIO",
        prioridad: "Media",
        descripcion: "Calavo requiere muestras de caja pequeña 2lb para programa Viva. Dummies para PMA show. Producción lista para julio. Contacto: Jesús Díaz Ledezma · CECSO. Actualización pendiente 14-May.",
        accion: "Contactar Jesús Díaz Ledezma (CECSO) para confirmar timeline caja 2lb. Deadline: julio 2026."
      },
      {
        titulo: "PRIMERA CARGA ADM WK20 — 4x4/4x5 expecting $20s",
        prioridad: "Alta",
        descripcion: "Primera carga ADM en camino — principalmente 4x4/4x5, expectativa $20s. Romans harvest julio — volumen Charlie solo 20-Jun (limitado, jumbos 4x4/4x5).",
        accion: "Confirmar logística ADM primera carga. Coordinar calidad para 4x4/4x5."
      },
      {
        titulo: "PROYECCIONES CULIACÁN — SIGUIENTE TEMPORADA",
        prioridad: "Alta",
        descripcion: "Calavo pide proyecciones Culiacán esta semana. Target 60-70% volumen programado. Finalizar estrategia octubre/noviembre.",
        accion: "Redactar proyecciones Culiacán esta semana y presentar a Calavo."
      }
    ],
    watchlist: [
      {
        titulo: "Tomate OUTBOUND MEJORA — recuperación continúa 06/05",
        nivel: "success",
        descripcion: "Outbound 06/05: Bola 86.29% (merma 3.05% OK), Roma 79.60% (merma 1.60% excelente), Chile 88.59% (merma 0.97%). Patrón de mejora sostenido. Cargas procesadas satisfactoriamente.",
        accion: "Continuar monitoreo diario. Mantener calidad premium. Patrón de recuperación confirmado en WK19."
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
      { fecha:"14/05/2026",    evento:"Update cajas 2lb Viva Program — llamada con Jesús Díaz Ledezma (CECSO). Confirmar muestras y timeline producción julio.", tipo:"operativo", participantes:"JC · Jesús Díaz Ledezma · CECSO" },
      { fecha:"18-19/05/2026", evento:"Auditoría Cliente Calavo — Buyers Edge (Javier Martínez). Inspeccionará todas las unidades de producción y empaque.", tipo:"auditoria", participantes:"C. Marisol Castro · JC · Calavo Buyers Edge" },
      { fecha:"19/05/2026",    evento:"BPSI F/S Abril 2026 y forecast Q2 2026 — Zoom 11am-12pm (GMT-7)", tipo:"financiero", participantes:"Leima · Jacruz · JC · Armando Llanes" },
      { fecha:"25/05/2026",    evento:"Abril '26 F/S (Tomates/Limones/Granos) — Revisión final · 9:30-10:30am", tipo:"financiero", participantes:"JC · Antonio · Leima · Armando · Jacruz · Despacho Terrazas" },
      { fecha:"25/05/2026",    evento:"ABSA Revisión declaración final ISR 2025 y PTU · 11am-12pm", tipo:"financiero", participantes:"JC · Antonio · Armando · Jacruz · fcalderon@cryasociados.com" },
      { fecha:"25/05/2026",    evento:"Reunión alineación Contrato 2026-2029 — John Lindeman · James Snyder · Irene Amezaga · Armando Llanes", tipo:"reunion", participantes:"Antonio, JC, Calavo, Armando Llanes, Notaría 97" },
      { fecha:"26/05/2026",    evento:"Revisión final OL 10+2 P&L y Cash Flow · 10am-11am", tipo:"financiero", participantes:"Antonio · JC · Flavio · Leima · Juan · Armando · Jacruz" }
    ]
  },

  predicciones: {
    generado:  "17/05/2026 · 12:00",
    modelo:    "Claude claude-haiku-4-5-20251001",
    horizonte: "7 días",
    nota:      "Síntesis Corbel Seeds #0039 (30-Abr) + Outbound mejora WK19 + Mercado WK20 corrección. Vine ripe en corrección clara post-peak hacia $60-65. Roma bajo presión Coachella/Georgia pero calidad premium sostiene valor. Limes Peru -30% cierra ventana final WK20. Bola/Roma outbound recuperados — monitoreo continuo requerido.",
    items: [
      {
        id: "vine-ripe",
        producto: "Tomate Vine-ripe 4x4",
        unidad: "carton 2-layer · FOB Nogales",
        tendencia: "bajista",
        confianza: 76,
        precio_actual:     { min: 28.00, max: 32.00 },
        precio_proyectado: { min: 26.00, max: 30.00 },
        razonamiento: "Corbel #0039 confirmó corrección: WK19 peak $48, WK20 $26-32. Corrección gradual a $26-30 esperada WK20-21. Virginia GH y Coachella supply creciente presiona. Última ventana HOY WK20 antes de presión sostenida.",
        factores: ["Calavo WK20: Vine-ripe $26-32 avg (down desde $48)", "Virginia GH + Coachella supply creciente WK20-21", "Post-peak transition clara", "Prior bookings dominan mercado", "ADM primera carga expecting $20s"],
        riesgo: "Si múltiples GH lanzan volumen spot WK20, caída acelerada a $20-24 posible.",
        accion: "ÚLTIMA OPORTUNIDAD WK20. Embarques máximos HOY/MAÑANA con precio viable. Post-WK20 expect presión sostenida a $20-24 rango."
      },
      {
        id: "roma",
        producto: "Tomate Roma XL",
        unidad: "carton 25lb · FOB Texas",
        tendencia: "bajista",
        confianza: 72,
        precio_actual:     { min: 24.00, max: 26.00 },
        precio_proyectado: { min: 22.00, max: 26.00 },
        razonamiento: "Corbel #0039: Roma $24-26 (WK20). Outbound 06/05 EXCELENTE: Roma Calavo 79.60% primera, merma 1.60% — calidad premium. Presiones Coachella + Georgia visibles pero calidad sostiene. Transición hacia rango $22-25 WK21-22.",
        factores: ["Corbel #0039: Roma $24-26 (presionada vs WK19)", "Outbound 06/05: calidad premium (merma <3%)", "Coachella/Georgia supply increasing WK20-21", "Supply NA todavía firme bajo", "Calidad premium sostiene margen"],
        riesgo: "Si Coachella o Georgia llega acelerado WK20, corrección a $20-22 posible.",
        accion: "Continuar embarques Roma máximos WK20 con enfoque calidad. Presión esperada WK21+ — actuar agresivo esta semana."
      },
      {
        id: "limon-persa",
        producto: "Limón Persa Seedless 110s",
        unidad: "7/10-bu FOB Texas",
        tendencia: "lateral",
        confianza: 68,
        precio_actual:     { min: 36.00, max: 42.00 },
        precio_proyectado: { min: 32.00, max: 42.00 },
        razonamiento: "Corbel #0039: Seedless 110s $42, 150s $36-40. Belher báscula 07/05 registra limón activo. Peru -30% ventana cierres WK20. Flush Colombia/Brasil esperado WK21 presiona fuerte. VENTANA FINAL HOY WK20.",
        factores: ["Corbel #0039: Seedless 110s $42 máximo", "Belher báscula 07/05: limón precio viable", "Peru supply -30% cierra ventana WK20", "Flush Colombia/Brasil mayo-junio cierra oportunidad", "Sniim Veracruz $28 MXN/kg base"],
        riesgo: "Flush primaveral podría presionar a $32-36 rápidamente WK21.",
        accion: "EMBARCAR LIMÓN MÁXIMO HOY/MAÑANA WK20. Ventana se cierra inmediatamente. Decisión báscula 07/05 confirma oportunidad viable final temporada."
      },
      {
        id: "bola-quality",
        producto: "Tomate Bola · OUTBOUND RECUPERADO 06/05",
        unidad: "calidad salida",
        tendencia: "alcista",
        confianza: 78,
        precio_actual:     { min: 28.00, max: 32.00 },
        precio_proyectado: { min: 26.00, max: 32.00 },
        razonamiento: "POSITIVO: Outbound 06/05 Bola 86.29% primera (merma 3.05% OK) — recuperación desde 05/05 (79.74%, merma 4.20%). Deterioro inbound 04/05 (56%, merma 25%) fue localizado en lote/campo específico, NO en empaque. Patrón sostenido de mejora WK19.",
        factores: ["Outbound 06/05: Bola 86.29% primera (OK)", "Outbound 05/05: Bola 79.74% (OK)", "Inbound 04/05 problema localizado — resuelto", "Roma outbound premium — calidad estate", "Monitoreo inbound continuo previene sorpresas"],
        riesgo: "Si nuevo problema inbound WK20, Bola cargas afectadas. Monitoreo diario requerido.",
        accion: "Continuar Bola embarques con confianza. Recuperación confirmada. Monitoreo inbound WK20 previene — problema anterior localizado y resuelto."
      },
      {
        id: "chile-fresh",
        producto: "Chile Jalapeño",
        unidad: "carton FOB Texas",
        tendencia: "bajista",
        confianza: 65,
        precio_actual:     { min: 33.00, max: 35.00 },
        precio_proyectado: { min: 30.00, max: 35.00 },
        razonamiento: "Mercado WK20: Chile Jalapeño $33-35 (Corbel #0039). Presión visible desde picos $54 WK19. Supply aumentando. Corrección hacia $30-33 esperada WK21.",
        factores: ["Corbel #0039: Jalapeño $33-35 (presionado)", "Texas supply creciente", "Post-peak transición clara", "Demanda estable pero supply crece"],
        riesgo: "Corrección a $28-30 si supply llega acelerado.",
        accion: "Embarques Chile optimizados a precio corriente. Presión esperada — actuar esta semana."
      }
    ]
  },

  industria: [
    { cat:"Calidad",   titulo:"OUTBOUND TOMATE EXCELENTE 06/05 — Bola 86.29%, Roma 79.60%, Chile 88.59%", impacto:"Positivo", fuente:"calidad@agbelher.com · 06-May-2026", resumen:"Outbound 06/05: Bola Calavo 86.29% primera (merma 3.05%), Roma Calavo 79.60% (merma 1.60%), Chile Anaheim 88.59% (merma 0.97%). Patrón de mejora sostenido. Cargas procesadas satisfactoriamente — problema inbound 04/05 localizado y resuelto." },
    { cat:"Mercado",   titulo:"WK20: Vine-ripe $26 avg — caída desde $48 WK19. 4x4: $28-32, 6x6: $12-14", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026", resumen:"Corrección confirmada WK20. Vine-ripe $26 promedio (down $48 WK19). 4x4/4x5: $30-32 algunos $28. 5x5: $16-18, 6x6: $12-14. AgBelher promedio $22-23. Primera carga ADM en camino expecting $20s. Calidad se mantiene 2 semanas más." },
    { cat:"Mercado",   titulo:"Romans harvest julio (no junio) — 20-Jun solo volumen limitado Charlie", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026", resumen:"Romans harvest inicia julio, no junio como se estimaba. Excepción: 20 junio volumen muy limitado para programa Charlie (extra large/jumbos 4x4/4x5). Esto retrasa revenue Romans temporada. $24-26 jumbos $20-22." },
    { cat:"Competencia", titulo:"Canadá +300% producción GH NE — duty-free quitando share NY/Baltimore/Chicago", impacto:"Alto", fuente:"Calavo Market Call · 13-May-2026", resumen:"Producción canadiense creció 300% últimos 2 años en Northeast. Invernaderos high-tech, calidad excepcional, libre de aranceles, menos regulación que importaciones MX. Tomando market share en NY, Baltimore, Chicago. Florida también aumentó Roma. España importando Romans a NY." },
    { cat:"Operativo", titulo:"Sorgo Trilla WK19 — Quevedo 1+Aguaruto completada 06/05, 292 ha acumuladas", impacto:"Medio", fuente:"basculabelher@gmail.com · AVANCE DE TRILLA 06/05/2026", resumen:"Jornada 06/05: Quevedo 1+Aguaruto completada (13 ha). Total acumulado: 292 ha en 21 jornadas. Sifón finalizados 02/05 — 15 ha total. Descanso obligatorio 01/May ejecutado. Temporada de trilla en su final — preparación para nuevas siembras GC 2026-2027." }
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
    semana:      "WK20",
    fechas:      "12-17 May 2026",
    fuente:      "Calavo Market Call · 13-May-2026",
    actualizado: "17/05/2026",

    acciones: [
      {
        simbolo: "CVGW", nombre: "Calavo Growers", mercado: "NASDAQ",
        precio: 26.85, prevClose: 27.99, cambio: -1.14, cambioPct: -4.07,
        h52: 28.98, l52: 18.40, volumen: null,
        fuente: "Yahoo Finance · latest"
      },
      {
        simbolo: "AVO", nombre: "Mission Produce", mercado: "NASDAQ",
        precio: 12.39, prevClose: 13.61, cambio: -1.22, cambioPct: -8.96,
        h52: 15.53, l52: 10.00, volumen: null,
        fuente: "Yahoo Finance · latest"
      }
    ],

    correos: [
      {
        fecha: "Viernes 15 May 2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher/ADM",
        asunto: "2026 03-05 Agricola Belher Settle WK19 7 Mayo 2026.xlsx",
        tipo: "settlement", nivel: "success",
        resumen: "Leima comparte liquidación WK19 recibida de Calavo (07-May-2026). Revenue estimado según Calavo: ~$2.506M a favor. Análisis y conciliación detallada mañana 08-May."
      },
      {
        fecha: "Viernes 15 May 2026", de: "Leima Leyva", cargo: "Finance Manager · Agrícola Belher/ADM",
        asunto: "Liquidación Calavo al 26 abril '26 — saldo a favor $1,206,806",
        tipo: "settlement", nivel: "success",
        resumen: "Leima comparte liquidación acumulada al 26-Abr. Revenue $17,746,742 · Aranceles $1,775,841 · Comisiones $1,916,508 · Venta neta $12,613,207 · P&P $4,466,620. Saldo S/Belher: $1,639,473. Conciliación S/Calavo: $1,206,806. Quedan cajas por facturar."
      },
      {
        fecha: "Viernes 15 May 2026", de: "Irene Amezaga", cargo: "VP Sales · Tomatoes & Papaya · Calavo",
        asunto: "Canceled: Weekly Tomato Meeting — sin Tomato Weekly Update WK18",
        tipo: "fyi", nivel: "warning",
        resumen: "Irene cancela reunión semanal Teams del 28/04. Sin adjunto Tomato Weekly Update WK17/18. 3 semanas sin reporte formal Calavo."
      }
    ],

    alertas: [
      { nivel: "success", texto: "SETTLEMENT WK19 (07-May): Calavo reporta ~$2.506M a favor. Conciliación detallada 08-May por Leima." },
      { nivel: "warning", texto: "CVGW $26.85 (-4.07%) · AVO $12.39 (-8.96%) — caída acelerada ambas acciones 13-May." },
      { nivel: "warning", texto: "Tomato Weekly Update WK20 pendiente — Irene sin envío. Monitoreo de reporte formal." }
    ],

    kpi: {
      pallets: null, loads: 24, pkgs: 38067,
      fobPromedio: 28.95, fobAnterior: 39.72, pkgsAnterior: 53976,
      revenueWk: 1101951, revenueAnt: 2144379,
      nota: "WK16 — Settle 15-Abr: $1,101,951 / 38,067 pkgs = $28.95/cj. WK19 settle (07-May): ~$2.506M según Calavo."
    },

    belher: {
      rounds: { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      roma:   { proyectado: null, actual: null, loads: null, pkgs: null, diffPct: null },
      total:  { proyectado: null, actual: null, loads: 24, pkgs: 38067 }
    }
  },

  pronostico: {
    generado: "17/05/2026",
    semanas: [
      {
        semana: "WK20", fechas: "12–18 May",
        productos: [
          { producto:"Tomate Vine-ripe",  hectareas:22, estimadoCajas:4500, confianza:76, tendencia:"bajista" },
          { producto:"Tomate Roma",       hectareas:18, estimadoCajas:3200, confianza:72, tendencia:"bajista" },
          { producto:"Chile Jalapeño",    hectareas:8,  estimadoCajas:1400, confianza:70, tendencia:"bajista" },
          { producto:"Limón Persa",       hectareas:7,  estimadoCajas:1200, confianza:68, tendencia:"lateral" }
        ]
      },
      {
        semana: "WK21", fechas: "19–25 May",
        productos: [
          { producto:"Tomate Vine-ripe",  hectareas:20, estimadoCajas:4000, confianza:72, tendencia:"bajista" },
          { producto:"Tomate Roma",       hectareas:16, estimadoCajas:2800, confianza:68, tendencia:"bajista" },
          { producto:"Chile Jalapeño",    hectareas:6,  estimadoCajas:1000, confianza:65, tendencia:"bajista" },
          { producto:"Limón Persa",       hectareas:4,  estimadoCajas:700,  confianza:60, tendencia:"bajista" }
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
