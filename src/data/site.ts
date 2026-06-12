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
  // Página de reservas de Google Calendar (Appointment Schedule).
  // Mientras esté vacío, los botones "Reservar cita" abren WhatsApp.
  // Para activarlo: pega aquí el enlace tipo https://calendar.google.com/book/...
  bookingUrl: "https://calendar.app.google/3WktyWkTfzgnm13h9",
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

// Destino de los botones "Reservar cita": la página de Google Calendar si
// está configurada; si no, abre WhatsApp como alternativa.
export function reservaHref(): string {
  return site.bookingUrl || linkReserva();
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
