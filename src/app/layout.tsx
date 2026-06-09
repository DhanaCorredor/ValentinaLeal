import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
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

export const metadata: Metadata = {
  title: `${site.fullName} | Manicura y pedicura en ${site.city}`,
  description:
    "Studio de uñas en Palmira: manicura, pedicura y diseño en gel, acrílico y poly gel. Reserva tu cita por WhatsApp.",
  openGraph: {
    title: site.fullName,
    description:
      "El arte de unas uñas perfectas. Reserva tu cita por WhatsApp.",
    type: "website",
  },
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ReserveBar />
      </body>
    </html>
  );
}
