# Design Audit — Agrícola Belher Dashboard
**Fecha:** 2026-04-29 · **Auditor:** Claude Design System Skill · **Versión HTML:** 9127 líneas

---

## Puntaje Total: 68 / 100

| Dimensión | Puntaje | Estado |
|---|---|---|
| Color consistency | 7/10 | ⚠ Dos `:root` en conflicto |
| Typography hierarchy | 5/10 | ✕ 40 tamaños únicos |
| Spacing rhythm | 7/10 | ✓ Mayormente en grid 4px |
| Component consistency | 6/10 | ⚠ Demasiadas variantes de card/badge |
| Responsive behavior | 7/10 | ✓ Breakpoints definidos |
| Dark mode | 4/10 | ✕ Sin `prefers-color-scheme` |
| Animation | 7/10 | ⚠ Sin `prefers-reduced-motion` |
| Accessibility | 6/10 | ⚠ Focus solo en `button` |
| Information density | 8/10 | ✓ Denso y legible |
| Polish | 11/13 | ✓ Hover, transitions, empty states |

---

## Hallazgos Críticos

### 1. Dos bloques `:root` en conflicto — CRÍTICO
**Líneas:** 17-51 (original) vs 1513-1528 (override "Apple polish")

El segundo bloque redefine 8 tokens con valores distintos:
```css
/* Bloque 1 (línea 17): */ --r: 12px; --border: #cfe2d6;
/* Bloque 2 (línea 1513): */ --r: 14px; --border: rgba(0,0,0,.08);
```
**Efecto:** Cards encima de la línea 1528 tienen `border-radius: 12px`; debajo usan 14px. El `--bg2` va de `#e4ece4` (verde suave) a `#ffffff` (blanco puro) — las superficies secundarias se ven inconsistentes.

**Fix:** Consolidar en un único bloque `:root` con los valores del bloque 2 (son mejores).

---

### 2. Escala tipográfica: 40 tamaños únicos — CRÍTICO
**Impacto:** Cada componente tiene su propio tamaño arbitrario. La escala definida en `design-tokens.json` tiene 10 pasos pero el CSS los ignora.

Tamaños encontrados (solo en CSS de componentes):
```
.55rem .57rem .58rem .59rem .61rem .62rem .63rem .64rem .65rem .66rem
.67rem .68rem .69rem .70rem .72rem .73rem .74rem .75rem .76rem .78rem
.79rem .82rem .83rem .84rem .86rem .88rem — y más
```

La escala definida en tokens:
```json
"2xs": "0.60rem",  "xs": "0.70rem",  "sm": "0.78rem",
"base": "0.875rem", "md": "1.0rem",   "lg": "1.125rem"
```

**Fix:** Mapear los tamaños del CSS a las 6 variables del scale. Todo lo debajo de 0.60rem → 0.60rem.

---

### 3. Sin `prefers-reduced-motion` — ACCESIBILIDAD
Las animaciones `ticker-scroll` (60s loop), `live-pulse` (2s), `cfPulse` (2s), y `tabFadeIn` corren siempre, incluso para usuarios con epilepsia fotosensible o que simplemente prefieren menos movimiento.

**Fix:** Ver sección CSS abajo.

---

### 4. `focus-visible` solo en `button` — ACCESIBILIDAD
**Línea 1644:**
```css
button:focus-visible { outline: 2px solid var(--green2); }
```
Los `.nav-card` (divs clickeables), tabs, y cualquier elemento con `cursor:pointer` no tienen estado de foco visible para teclado.

---

### 5. Hardcoded hex values en lugar de CSS variables
Conteo de hex directos en backgrounds: `#22c55e` (7), `#16a34a` (6), `#34c759` (4), `#f9fbf9` (5), etc. Deberían ser `var(--green3)`, `var(--green2)`, `var(--green-400)`.

**Línea ejemplo:** `background: #f9fbf9` → debería ser `background: var(--surface)`.

---

### 6. Mixed light/dark — sin estrategia clara
El dashboard no es ni dark-native ni light-native — es híbrido:
- Header, ticker, tabs: dark (`#0c2117`, `#060e09`)
- Main content: light (`#f0f4f0`, `#ffffff`)
- Calavo Weekly tab: dark con backgrounds `#091628`

Sin `@media (prefers-color-scheme: dark)`, en OS dark mode el área de contenido queda light. La decisión es válida estéticamente pero debe ser intencional.

---

## Hallazgos de Calidad

### 7. Proliferación de componentes badge/card
El sistema tiene **7 variantes de badge** y **6 variantes de card**:

Badges: `.badge`, `.kpi-pill`, `.chip`, `.tipo-pill`, `.prod-badge`, `.hoy-watch-nivel`, `.audit-status-badge`
Cards: `.card`, `.kpi-card`, `.donut-card`, `.pc-card`, `.qual-card`, `.cf-kpi`, `.etiq-card`

La mayoría son semánticamente idénticos con variación de color. Consolidar en 2-3 variantes con modificadores.

### 8. Dos sistemas de alerta en paralelo
- `.alert` (light, lines 371-382) — estilo viejo, padding más grande
- `.hoy-alert` (más compacto, Hoy tab) — estilo nuevo

Ambos existen. El componente `.alert` debería eliminarse o actualizarse a `.hoy-alert`.

### 9. Spacing off-grid: 22px de card padding
`.card { padding: 22px }` — la grid es de 4px, entonces 22px está off-grid (debería ser 20px o 24px). `.donut-card { padding: 24px 22px 20px }` mezcla valores on/off grid.

### 10. `tabular-nums` aplicado inconsistentemente
**Línea 1535:** Se aplica a `.kpi-value, .hoy-kpi-val, .hoy-hero-num, .hoy-pulso-val, .dc-pct, .donut-amount` pero no a `.rev-split-val`, `.pc-range`, `.qual-prima`, `.cf-kpi-val` — todos los cuales muestran números que se beneficiarían del alineamiento tabular.

---

## Puntos Fuertes

- **Ticker pause on hover** — detalle excelente de UX
- **Section title con `::before` decorativo** — jerarquía visual clara
- **Transiciones consistentes** — `.18s/.22s cubic-bezier(.25,.46,.45,.94)` en todo
- **Empty states** — CAADES, Calavo Weekly, calidad todos tienen fallbacks
- **Hover lift** — `translateY(-2px) + shadow-md` coherente en cards
- **Scrollbar customizada** — 5px, casi invisible, correcto
- **Tab underline animation** — `scaleX(0→1)` es la solución correcta
- **`aria-selected`** en tabs — accesibilidad semántica correcta
- **Separación de concerns**: `data.js` completamente separado del HTML

---

## Fixes Aplicados Hoy

Ver commits en git. Los siguientes cambios se aplicaron directamente al HTML:

1. ✅ `prefers-reduced-motion` — desactiva ticker, pulse, tabFadeIn
2. ✅ `focus-visible` expandido a links y `.nav-card`
3. ✅ Consolidación parcial del segundo `:root` (shadow tokens)
4. ✅ `tabular-nums` en `.rev-split-val`, `.pc-range`, `.cf-kpi-val`
5. ✅ Floor de font-size: todo debajo de `.60rem` elevado a `.60rem`

---

## Roadmap de Mejoras

### Prioridad Alta (impacto visual inmediato)
1. Consolidar dos bloques `:root` en uno — eliminar ambigüedad de tokens
2. Reducir escala tipográfica a 8 pasos: `.60/.70/.78/.875/1.0/1.125/1.375/2.0rem`
3. Reemplazar hex directos con variables CSS

### Prioridad Media
4. Consolidar `.alert` → usar solo `.hoy-alert`
5. Reducir variantes de badge a: `.badge-sm`, `.badge-md` con modificadores semánticos
6. Agregar `@media (prefers-color-scheme: dark)` con override de content area

### Prioridad Baja
7. Regularizar card padding a 20px o 24px (grid 4px)
8. `tabular-nums` a todo elemento con número
