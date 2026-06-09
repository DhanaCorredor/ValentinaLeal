import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Next genera /sitemap.xml a partir de esta función. Lista las URLs públicas
// para que los buscadores las rastreen e indexen.
export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/servicios", "/privacidad", "/terminos"];
  return rutas.map((ruta) => ({
    url: `${site.url}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: ruta === "" ? 1 : 0.7,
  }));
}
