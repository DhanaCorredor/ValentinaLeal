# Valentina Leal Studio Nails 💅

Sitio web **mobile-first** para un studio de uñas en Yopal (Casanare).
Muestra la marca, la carta de servicios con precios y permite **reservar por
WhatsApp**, sin backend ni base de datos.

🌐 **En vivo:** [valentina-leal.vercel.app](https://valentina-leal.vercel.app)

<!-- Sugerencia: añade aquí una captura o GIF del sitio en móvil -->
<!-- ![Vista del sitio](docs/preview.png) -->

---

## ✨ Características

- **Diseño de marca** elegante en blanco, negro y dorado, con tokens de color
  centralizados.
- **Mobile-first**: ~90 % del tráfico es móvil, así que se diseñó primero para
  el celular y se escaló a escritorio con breakpoints.
- **Reserva por WhatsApp en un toque**: el botón abre el chat con el mensaje ya
  escrito → menos fricción, más citas.
- **Carta de servicios** por categoría con precios en pesos colombianos (COP).
- **Botón flotante (FAB)** de WhatsApp siempre accesible.
- **Ubicación con mapa** embebido y enlaces a redes.
- **SEO local**: metadatos OpenGraph, `sitemap.xml`, `robots.txt` y datos
  estructurados JSON-LD (`NailSalon`) para Google y Maps.
- **Páginas legales** (privacidad y términos) conforme a la Ley 1581 de 2012.
- **Accesibilidad**: navegación por teclado con foco visible y enlace activo
  en el menú.

## 🛠️ Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de marca con `@theme`)
- Fuentes: Cormorant Garamond + Jost vía `next/font`
- Gestor de paquetes: **pnpm** · Despliegue en **Vercel**

## 🧠 Decisiones técnicas

- **Sin backend ni base de datos.** El negocio gestiona las citas por WhatsApp,
  así que un sitio estático cubre el 100 % de la necesidad: más rápido, más
  barato de mantener y sin superficie de seguridad.
- **Datos del negocio centralizados** en `src/data/`. Cambiar un precio, el
  teléfono o la dirección se hace en un solo lugar y se refleja en todo el sitio.
- **Componentes reutilizables** (`Button`, `SectionHeading`) para evitar repetir
  estilos y mantener una UI consistente.
- **JSON-LD para SEO local**: le da a Google contexto que el HTML visible no
  transmite (tipo de negocio, dirección, teléfono), clave para aparecer en Maps.

## 📂 Estructura

```
src/
  app/
    page.tsx            Inicio (hero, servicios, estudio, ubicación, CTA)
    servicios/page.tsx  Carta completa de servicios
    privacidad, terminos  Páginas legales
    sitemap.ts, robots.ts JSON SEO generados por Next
    layout.tsx          Layout raíz (fuentes, metadatos, JSON-LD)
    globals.css         Tokens de marca y estilos base
  components/           Navbar, Footer, ReserveBar, Button, SectionHeading, LegalPage
  data/                 site.ts (negocio) y services.ts (carta)
```

## 🚀 Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

| Comando        | Descripción                  |
| -------------- | ---------------------------- |
| `pnpm dev`     | Servidor de desarrollo       |
| `pnpm build`   | Compilación de producción    |
| `pnpm start`   | Sirve la versión compilada   |
| `pnpm lint`    | Linter (ESLint)              |

## 📦 Despliegue

Alojado en **Vercel**. Cada `git push` a `main` se publica automáticamente en
producción; cada rama o PR genera una *preview* propia.

---

Desarrollado por **Dhana Corredor** — Marketing & Desarrollo Web.
