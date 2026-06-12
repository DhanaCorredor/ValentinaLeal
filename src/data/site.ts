// Datos centrales del negocio. Si algo cambia (teléfono, dirección, redes),
// se edita aquí y se actualiza en todo el sitio.
export const site = {
  name: "Valentina Leal",
  fullName: "Valentina Leal Studio Nails",
  tagline: "Studio Nails",
  // URL de producción. Se usa para SEO (canonical, OpenGraph, sitemap).
  url: "https://valentina-leal.vercel.app",
  phone: "316 050 2149",
  phoneIntl: "+573160502149",
  whatsapp: "573160502149", // formato internacional sin "+" para wa.me
  instagram: "https://www.instagram.com/valentinaleal.studionails",
  instagramHandle: "@valentinaleal.studionails",
  // Opcional: correo para solicitudes de datos personales (Habeas Data).
  // Si se deja vacío, las páginas legales usan WhatsApp como canal.
  email: "",
  // Manicuristas que pueden recibir reservas. Cada una con su enlace de Google
  // Calendar ("appointment schedule" propio: https://calendar.app.google/...),
  // así dos clientas pueden reservar la misma hora con manicuristas distintas.
  // Si una no tiene agenda, deja `url` vacío y el sitio le arma un enlace de
  // WhatsApp con su nombre. Con nombre vacío, el cupo se ignora. Con una sola
  // manicurista, el sitio muestra un único botón "Reservar cita".
  bookings: [
    { name: "Valentina", url: "https://calendar.app.google/3WktyWkTfzgnm13h9" },
    { name: "Tatiana", url: "" }, // sin agenda propia: reserva por WhatsApp
  ],
  address: "Cra. 20 #12-40, Yopal, Casanare",
  addressShort: "Cra. 20 #12-40",
  city: "Yopal, Casanare",
  // Texto de la dirección para geocodificar (formato canónico).
  mapsQuery: "Carrera 20 # 12-40, Yopal, Casanare, Colombia",
  // Coordenadas EXACTAS del local "lat,lng". Cuando se tengan (desde el enlace
  // de Google Maps del negocio), el mapa usa el pin exacto en vez del texto.
  mapsCoords: "", // ej: "3.5256703,-76.3000872"
  hours: "Lunes a Sábado · con cita previa",
} as const;

// Construye un enlace de WhatsApp con un mensaje opcional ya escrito.
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Enlace de WhatsApp con el mensaje de reserva por defecto. Se reutiliza en
// el navbar, footer y barra flotante para no repetir el texto.
export function linkReserva(): string {
  return whatsappLink(`Hola 👋, quiero reservar una cita en ${site.fullName}.`);
}

// Manicuristas que se muestran para reservar (las que tienen nombre), cada una
// con su enlace ya resuelto: su agenda de Google Calendar si la tiene `url`, o
// un chat de WhatsApp con su nombre si reserva por ahí. Los cupos sin nombre
// se ignoran.
export function activeBookings() {
  return site.bookings
    .filter((b) => b.name)
    .map((b) => ({
      name: b.name,
      href:
        b.url ||
        whatsappLink(
          `Hola 👋, quiero reservar una cita con ${b.name} en ${site.fullName}.`,
        ),
    }));
}

// Destino del botón "Reservar" cuando hay UNA sola opción (o como alternativa):
// la primera manicurista activa; si aún no hay ninguna, abre WhatsApp.
export function reservaHref(): string {
  return activeBookings()[0]?.href || linkReserva();
}

// Enlace al mapa embebido de Google Maps (no requiere API key).
// Si hay coordenadas exactas, las usa (pin preciso); si no, geocodifica el texto.
export const mapsEmbedUrl = site.mapsCoords
  ? `https://maps.google.com/maps?q=${site.mapsCoords}&z=18&output=embed`
  : `https://maps.google.com/maps?q=${encodeURIComponent(
      site.mapsQuery,
    )}&z=17&output=embed`;

// Datos estructurados (JSON-LD) para SEO local: le indican a Google que esto
// es un salón de uñas con su nombre, dirección, teléfono y redes. Mejora la
// aparición en Google Maps y en resultados enriquecidos.
export function localBusinessJsonLd() {
  const [lat, lng] = site.mapsCoords.split(",");
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: site.fullName,
    image: `${site.url}/logo.png`,
    url: site.url,
    telephone: site.phoneIntl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressShort,
      addressLocality: "Yopal",
      addressRegion: "Casanare",
      addressCountry: "CO",
    },
    // El geo solo se añade cuando hay coordenadas exactas del local.
    ...(site.mapsCoords
      ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } }
      : {}),
    sameAs: [site.instagram],
  };
}
