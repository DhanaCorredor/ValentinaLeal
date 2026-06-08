// Datos centrales del negocio. Si algo cambia (teléfono, dirección, redes),
// se edita aquí y se actualiza en todo el sitio.
export const site = {
  name: "Valentina Leal",
  fullName: "Valentina Leal Studio Nails",
  tagline: "Studio Nails",
  phone: "316 050 2149",
  phoneIntl: "+573160502149",
  whatsapp: "573160502149", // formato internacional sin "+" para wa.me
  instagram: "https://www.instagram.com/valentinaleal.studionails",
  instagramHandle: "@valentinaleal.studionails",
  address: "Cra. 29 #23-9, Palmira, Valle del Cauca",
  addressShort: "Cra. 29 #23-9",
  city: "Palmira, Valle del Cauca",
  mapsQuery: "Cra. 29 #23-9, Palmira, Valle del Cauca, Colombia",
  hours: "Lunes a Sábado · con cita previa",
} as const;

// Construye un enlace de WhatsApp con un mensaje opcional ya escrito.
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Enlace al mapa embebido de Google Maps (no requiere API key).
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&z=16&output=embed`;
