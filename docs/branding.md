# Guía de marca · Valentina Leal Studio Nails

Documento de referencia para mantener una identidad visual y de tono coherente en
todo el sitio y en cualquier pieza nueva (web, redes, material impreso).

> Los valores técnicos (colores, fuentes) viven en código en
> `src/app/globals.css` (`@theme`) y `src/app/layout.tsx`. **Esta guía explica el
> "porqué" y el "cómo usarlos".** Si cambias un color, cámbialo en `globals.css` y
> actualiza esta tabla para que no se desincronicen.

---

## 1. Esencia de marca

- **Nombre completo:** Valentina Leal Studio Nails
- **Nombre corto / display:** Valentina Leal · iniciales **VL**
- **Tagline:** Studio Nails
- **Lema:** *El arte en tus manos.*
- **Negocio:** studio de uñas en Yopal (Casanare), atención con cita previa.

**Personalidad:** elegante, cálida, cuidada y cercana. Lujo accesible, no
recargado. El protagonista siempre es el trabajo de uñas; la marca lo enmarca con
sobriedad (blanco + negro) y un toque de distinción (dorado).

---

## 2. Paleta de color

Tres bloques: **blanco / crema** (fondo), **negro / tinta** (texto) y **dorado**
(acento). El dorado es el sello de la marca; úsalo con moderación para que destaque.

### Tokens (definidos en `globals.css` con `@theme`)

| Token            | Hex       | Uso principal                                              |
| ---------------- | --------- | --------------------------------------------------------- |
| `paper`          | `#faf9f7` | Fondo crema suave de secciones alternas                   |
| (blanco puro)    | `#ffffff` | Fondo base del `body` y tarjetas                          |
| `ink`            | `#141210` | Texto principal (casi negro, cálido)                      |
| `ink-soft`       | `#5c574f` | Texto secundario, párrafos, etiquetas                     |
| `ink-deep`       | `#0a0a0a` | Negro más profundo — fondo del footer                     |
| `line`           | `#ece7df` | Bordes y divisores suaves (hairlines)                     |
| `line-strong`    | `#d8d2c8` | Borde más marcado (botón *outline*)                       |
| `gold`           | `#c9a24b` | Dorado base — acentos, anillo de foco                     |
| `gold-deep`      | `#a9842f` | Dorado oscuro — antetítulos, enlaces, hover               |
| `gold-light`     | `#e7c873` | Dorado claro — inicio del degradado, texto sobre negro    |
| `on-gold`        | `#1a1407` | Texto sobre fondo dorado (botón principal)                |

### Cómo se usan en Tailwind

Cada token es una utilidad: `bg-paper`, `text-ink`, `text-ink-soft`,
`text-gold-deep`, `border-line`, etc. Para opacidades se usa la sintaxis `/`,
p. ej. `border-gold/35` (dorado al 35 %).

### Degradados dorados (clases utilitarias)

Definidos en `globals.css`. Dan el efecto "dorado pulido" característico:

- **`.gold-text`** — texto con degradado dorado (titulares destacados). Va sobre la
  palabra a resaltar dentro de un `<h1>`/`<h2>`, p. ej. *El arte en* **tus manos**.
- **`.gold-bg`** — fondo dorado para botones principales y la rayita divisoria.

Ambos usan el mismo eje: `135deg`, de `gold-light` → `gold` → `gold-deep`.

### Reglas de color

- ✅ Fondos en blanco/crema; texto en `ink`/`ink-soft`; dorado solo para acentos.
- ✅ Sobre fondo dorado usa **`on-gold`** (no negro puro) para un contraste cálido.
- ✅ Sobre fondo negro (CTA, footer) el dorado claro (`gold-light`) es el que mejor
  se lee.
- ❌ No uses el dorado para bloques grandes de texto ni como fondo de secciones
  enteras (pierde el valor de "acento").
- ❌ No mezcles otros colores de acento (azules, rosados, etc.): rompen la paleta.

---

## 3. Tipografía

Dos familias cargadas con `next/font` (Google Fonts) en `layout.tsx`:

### Cormorant Garamond — *serif, titulares*

- Variable CSS: `--font-cormorant` · utilidad: **`font-serif`**.
- Pesos disponibles: 400, 500, 600, 700.
- Uso: `<h1>`, `<h2>`, `<h3>`, precios destacados, nombre de marca.
- Aporta el aire editorial y elegante de la marca. Tamaños generosos
  (`text-4xl`–`text-6xl`) y `font-semibold` (600) como peso habitual.

### Jost — *sans, cuerpo*

- Variable CSS: `--font-jost` · utilidad: **`font-sans`** (es la fuente por defecto
  del `body`).
- Pesos disponibles: 300, 400, 500, 600.
- Uso: párrafos, botones, navegación, etiquetas. El `body` arranca en **300**
  (light) para un aire ligero y limpio.

### Convenciones de texto

- **Antetítulos / etiquetas:** mayúsculas, `tracking` amplio (`tracking-[0.12em]` a
  `0.18em`), tamaño pequeño, color `gold-deep` o `ink-soft`.
- **Jerarquía:** serif grande para el título → antetítulo dorado encima → párrafo
  sans en `ink-soft`. Este patrón está encapsulado en `SectionHeading`.
- Idioma siempre en **español**, trato de **"tú"**.

---

## 4. Logo e isotipo

- **Archivo:** `public/logo.png` — PNG dorado con **fondo transparente**.
- **Proporción:** vertical, 3375 × 4219 px (mantener el aspect ratio; nunca
  deformar).
- **Isotipo de texto:** las iniciales **"VL"** en serif (`text-gold-deep`) se usan
  en la barra de navegación junto al nombre "VALENTINA LEAL".
- **Favicon:** `src/app/icon.svg` (las iniciales VL, sin fondo).

### Uso del logo

- ✅ Sobre fondo blanco, crema o negro (el dorado funciona en los tres).
- ✅ Deja aire alrededor; no lo apretujes contra bordes o texto.
- ❌ No le cambies el color, no le pongas sombras ni lo encierres en una caja de
  color.
- ❌ No lo uses sobre fondos con mucho ruido visual que resten legibilidad.

---

## 5. Tono de voz

- **Elegante pero cercano:** hablamos de "consentirte", "mimar tus manos", sin caer
  en lo cursi ni en lo técnico frío.
- **Claro y breve:** frases cortas, directas. El móvil manda (~90 % del tráfico).
- **Cálido y femenino:** trato de "tú", segunda persona, en español.
- **Orientado a la acción:** los CTA invitan suave pero claro — *"Reservar cita"*,
  *"Agenda tu cita"*, *"Ver servicios"*.

Ejemplos de la propia web: *"El arte en tus manos."* · *"Donde el detalle lo es
todo"* · *"¿Lista para consentirte?"*

---

## 6. Componentes y patrones visuales

Piezas reutilizables que mantienen la coherencia (todas en `src/components/`):

- **Botones (`Button`):** tres variantes — `gold` (principal, fondo dorado),
  `outline` (borde claro) y `dark` (fondo negro). Bordes apenas redondeados
  (`rounded-sm`), texto en mayúsculas con `tracking`.
- **Encabezado de sección (`SectionHeading`):** rayita dorada + antetítulo +
  título serif. Es el patrón de apertura de cada sección.
- **Divisores:** hairlines finos en `line`/`gold/35`; rayita dorada de 12 px
  (`w-12 h-0.5 gold-bg`) como adorno de encabezado.
- **Esquinas:** radios pequeños y sutiles. Nada muy redondeado; la marca es sobria.
- **Espaciado:** secciones con `py-14`/`py-16`, generosas; el aire es parte del
  lujo.

---

## 7. Datos del negocio (fuente única)

Toda esta información vive centralizada en **`src/data/site.ts`**. Si cambia algo
(teléfono, dirección, redes), se edita ahí y se actualiza en todo el sitio.

- **Dirección:** Cra. 20 #12-40, Yopal, Casanare
- **WhatsApp / teléfono:** 316 050 2149
- **Instagram:** [@valentinaleal.studionails](https://www.instagram.com/valentinaleal.studionails)
- **Horario:** Lunes a Sábado · con cita previa
- **Reservas:** Google Calendar (cita en línea) + WhatsApp como canal alterno
