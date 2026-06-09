import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site, localBusinessJsonLd } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReserveBar from "@/components/ReserveBar";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const descripcion =
  "Studio de uñas en Palmira: manicura, pedicura y diseño en gel, acrílico y poly gel. Reserva tu cita por WhatsApp.";

export const metadata: Metadata = {
  // Base para resolver URLs absolutas (canonical, OpenGraph, etc.).
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Manicura y pedicura en ${site.city}`,
    // Las subpáginas solo ponen su nombre; aquí se completa la marca.
    template: `%s | ${site.fullName}`,
  },
  description: descripcion,
  keywords: [
    "uñas Palmira",
    "manicura Palmira",
    "pedicura Palmira",
    "uñas acrílicas",
    "poly gel",
    "semipermanente",
    "nail studio Palmira",
    "Valentina Leal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.fullName,
    description: "El arte en tus manos. Reserva tu cita por WhatsApp.",
    url: site.url,
    siteName: site.fullName,
    locale: "es_CO",
    type: "website",
    images: [{ url: "/logo.png", width: 3375, height: 4219, alt: site.fullName }],
  },
  twitter: {
    card: "summary",
    title: site.fullName,
    description: "El arte en tus manos. Reserva tu cita por WhatsApp.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Datos estructurados para SEO local (salón de uñas). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ReserveBar />
      </body>
    </html>
  );
}
