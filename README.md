# Valentina Leal Studio Nails

Sitio web del studio de uñas **Valentina Leal** (Palmira, Valle del Cauca). Mobile-first,
con carta de servicios y reservas por WhatsApp.

🌐 **En vivo:** [valentina-leal.vercel.app](https://valentina-leal.vercel.app)

## Tecnologías

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Gestor de paquetes: **pnpm**

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Servidor de desarrollo               |
| `pnpm build`   | Compilación de producción            |
| `pnpm start`   | Sirve la versión compilada           |
| `pnpm lint`    | Linter (ESLint)                      |

## Estructura

```
src/
  app/
    page.tsx            Inicio (hero, datos, nosotras, ubicación, CTA)
    servicios/page.tsx  Carta completa de servicios (pestaña aparte)
    layout.tsx          Layout raíz (fuentes, navbar, footer, barra de reserva)
    globals.css         Estilos y tokens de marca (blanco/negro/dorado)
  components/           Navbar, Footer, ReserveBar
  data/                 site.ts (negocio) y services.ts (carta)
public/logo.png         Logo
```

## Despliegue

Alojado en **[Vercel](https://vercel.com)**. Cada `git push` a la rama `main` se
publica automáticamente en producción; cada rama o PR genera una *preview* propia.

## Contacto del negocio

- **Dirección:** Cra. 29 #23-9, Palmira, Valle del Cauca
- **WhatsApp:** 316 050 2149
- **Instagram:** [@valentinaleal.studionails](https://www.instagram.com/valentinaleal.studionails)
