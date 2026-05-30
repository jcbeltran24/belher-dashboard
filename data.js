window.BELHER = {
  meta: {
    fecha: "Viernes 29 May 2026",
    semana: "WK 22",
    actualizado: "29/05/2026 · 13:15"
  },

  alertas: [
    {"nivel":"success","texto":"📎 ADJUNTOS BELHER 29/05 — 4 archivos descargados a Drive (07:53): Settlement Calavo WK22 (28-May-2026), Acarreo Diario 28-05 (Limón Persa), Diario de Báscula 28-05 (Limón Persa), Listado Diario 28-05 (Limón Persa). Carpeta: Belher Adjuntos."},
    {"nivel":"success","texto":"✅ AUDITORÍA BUYERS EDGE-CALAVO 27/05 — Resultado FAVORABLE: Empaque 94.3% (8 NC) · Álamo 96.2% (4 NC) · La 25 96.4% (4 NC). Belher permanece en lista de proveedores aprobados. Plazo acciones correctivas: 8 de junio 2026."},
    {"nivel":"success","texto":"🤝 CONTRATO BELTRAN-CALAVO 26/05 — JC envió versión final del contrato. Confirmación de recibido por Irene Amezaga (VP Sales, Calavo) y Armando Llanes (CFO, Don Memo). Contrato en proceso de cierre con Calavo, Antonio, JC y Armando."},
    {"nivel":"warning","texto":"⚖️ ACCIONES CORRECTIVAS AUDITORÍA SMETA — Resultado preliminar compartido por Marisol Castro. Incluye No conformidades, Observaciones, Buenas Prácticas y Datos Generales (doc Excel). Reunión con involucrados directos pendiente. Equipo: Carlos Castro, Juan Aviles, Samantha González y otros. Deadline acciones correctivas Buyers Edge-Calavo: 8 de junio 2026."},
    {"nivel":"info","texto":"🧾 FACTURA MATRAZ LAB 26/05 — CONTPAQ i emitió factura UUID: ae6be09e-e338-42e6-966d-5599f836078b. Disponible para descarga por 30 días en portal CFDI."},
    {"nivel":"success","texto":"📊 CALIDAD OUTBOUND TOMATE 23/05 — Bola Yameto: Primera 72.29% · Segunda 14.57% · Tercera 10.29% · Merma 2.86% · Peso promedio 31.62g. Reporte emitido por calidad@agbelher.com."},
    {"nivel":"info","texto":"💰 LIQUIDACIÓN CALAVO al 16-May-26 — 962K cajas enviadas / 933K facturadas / 4K en piso / 11K por facturar / 14K rework. Saldo a favor Belher: USD 3,225K. Precio promedio mayo: USD 21.94. Ventas brutas: USD 21.1M | Aranceles: $2.19M | Comisiones: $2.27M | Venta neta: $15.09M."},
    {"nivel":"warning","texto":"🔍 CONCILIACIÓN CALAVO $2.3M — 4 puntos pendientes representan ~$453K. Armando urge contactar a Irene en conjunto la próxima semana (historial: semanas en resolver). Coordinación: Armando + Antonio + JC + Leima en Culiacán."},
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
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 4 archivos (29-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-29"},
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 5 archivos (28-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-28"},
    {"hora":"10:53","asunto":"✅ Belher Adjuntos — 5 archivos (27-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-27"},
    {"hora":"16:49","asunto":"Auditoría de segunda parte (Buyers Edge-Calavo) — Resultado","de":"c.marisol@agbelher.com","leido":false,"fecha":"2026-05-26"},
    {"hora":"16:59","asunto":"REPORTE DE BASCULA 26/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-26"},
    {"hora":"14:27","asunto":"REPORTE DE BASCULA 26/05/2026 (LIMON PERSA)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-26"},
    {"hora":"10:59","asunto":"Fwd: Beltran-Calavo Contract Update","de":"antonio@agbelher.com","leido":false,"fecha":"2026-05-26"},
    {"hora":"15:24","asunto":"Transferencia Interbancaria SPEI — Banbajío","de":"Banbajioinforma@bb.com.mx","leido":false,"fecha":"2026-05-26"},
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 1 archivos (26-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-26"},
    {"hora":"14:42","asunto":"Factura MATRAZ LAB — UUID: ae6be09e-e338-42e6-966d-5599f836078b","de":"facturacion@cfdi.com.mx","leido":false,"fecha":"2026-05-26"},
    {"hora":"00:09","asunto":"Invitación actualizada: Corbel Seeds (Comunicacion) lun 25 de may 9:30am–11:30am","de":"ray@agbelher.com","leido":false,"fecha":"2026-05-25"},
    {"hora":"19:13","asunto":"23-05-2026 REPORTES GENERALES","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-23"},
    {"hora":"07:53","asunto":"✅ Belher Adjuntos — 6 archivos (23-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-23"},
    {"hora":"20:18","asunto":"22-05-2026 REPORTES GENERALES","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-22"},
    {"hora":"16:41","asunto":"REPORTE DE BASCULA 22/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-22"},
    {"hora":"16:31","asunto":"Informe de Pago — Folio 16220520260001","de":"server_send@agbelher.com","leido":false,"fecha":"2026-05-22"},
    {"hora":"16:13","asunto":"REPORTE DE BASCULA 22/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-22"},
    {"hora":"13:19","asunto":"Contrato Calavo 2026-2029 — Versión final con comentarios y minuta","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-22"},
    {"hora":"18:20","asunto":"21-05-2026 REPORTES GENERALES TOMATE","de":"embarquesbelher@agbelher.com","leido":false,"fecha":"2026-05-21"},
    {"hora":"16:50","asunto":"REPORTE DE BASCULA 21/05/2026 (REZAGA DE TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-21"},
    {"hora":"15:36","asunto":"REPORTE DE BASCULA 21/05/2026 (TOMATE)","de":"basculabelher@gmail.com","leido":false,"fecha":"2026-05-21"},
    {"hora":"07:54","asunto":"✅ Belher Adjuntos — 9 archivos (21-May-2026 07:53)","de":"juancarlos@agbelher.com","leido":false,"fecha":"2026-05-21"},
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
    {"hora":"10:22","asunto":"REPORTE DE OUTBOUND TOMATE 13/05/2026","