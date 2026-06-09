import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Next genera /robots.txt a partir de esta función: permite el rastreo de
// todo el sitio e indica dónde está el sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
