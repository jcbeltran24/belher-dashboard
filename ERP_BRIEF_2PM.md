# Brief ERP API — Reunión 2:00 PM · 30 Abr 2026

## Objetivo en una línea
> Conectar el ERP directamente al dashboard ejecutivo para eliminar actualizaciones manuales y tener información en tiempo real.

---

## Las 3 preguntas más importantes para abrir

1. **¿El ERP tiene API REST?** (si no, ¿puede exponer vistas de base de datos o archivos JSON?)
2. **¿Con qué frecuencia se actualizan los datos?** (¿es batch nocturno o tiempo real?)
3. **¿Tienen documentación existente o hay que definir endpoints juntos?**

---

## Datos que necesito — en orden de prioridad

| # | Módulo | Lo mínimo que necesito |
|---|--------|------------------------|
| 1 | **Embarques** | fecha, cargas, cajas, transportista, variedad, precio $/caja, destino |
| 2 | **Báscula** | fecha, producto, kg cosechados, rancho, calidad (1a/2a) |
| 3 | **Inventario** | stock actual por producto, ubicación (campo/empaque/tránsito) |
| 4 | **Compras** | proveedor, concepto, monto, cultivo destino, estado (pagado/pendiente) |
| 5 | **Granos** | ha trilladas, toneladas, precio mercado, comprador |
| 6 | **Limón** | kg cosechados, cajas, precio $/caja, comprador |
| 7 | **Jalapeño** | kg, precio $/lb o $/kg, destino |
| 8 | **Finanzas** | saldos bancarios, CxC, CxP, EBITDA real vs budget |
| 9 | **Personal** | trabajadores por día por área |
| 10 | **Flota** | tractores/camiones activos vs mantenimiento |

---

## Lo que necesito técnicamente (para el equipo de sistemas)

```
- Formato:      JSON
- Auth:         API Key (Bearer token)
- Fechas:       ISO 8601 — YYYY-MM-DD
- Números:      sin formato (sin comas, sin $)
- Ambiente:     staging primero, luego producción
- Historial:    mínimo 3 temporadas atrás
```

---

## Ideal: Webhooks (si el ERP puede enviarlos)

Que el sistema **llame a mi URL** cuando pase algo importante:
- Nuevo embarque registrado
- Báscula cierra el día
- Compra > $50,000 MXN autorizada
- Saldo bancario cambia

---

## Si el ERP no tiene API todavía

Opciones alternativas en orden de preferencia:

1. **Vista SQL / query** que pueda correr desde un script
2. **Exportación automática a JSON** en un servidor (cada hora)
3. **Google Sheets** conectado al ERP → nosotros leemos el Sheet
4. **Excel/CSV en carpeta compartida** → parseamos nosotros

---

## Lo que NO necesito (para no complicar la llamada)

- Interfaz gráfica del ERP
- Reportes PDF
- Acceso completo al sistema
- Datos de RH sensibles (nómina individual)

---

## Al final de la llamada, confirmar:

- [ ] ¿Cuándo podemos tener un primer endpoint de prueba?
- [ ] ¿Quién es el contacto técnico de sistemas?
- [ ] ¿Hay ambiente de staging disponible?
- [ ] ¿Qué datos tienen historial completo y cuáles no?
