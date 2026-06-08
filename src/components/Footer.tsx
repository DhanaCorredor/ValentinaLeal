import Image from "next/image";
import { site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-5 py-12 text-center text-[#cfc8bb]">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/logo.png"
          alt={site.fullName}
          width={3375}
          height={4219}
          className="mx-auto mb-4 h-auto w-36"
        />
        <p className="text-sm">El arte de unas uñas perfectas.</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
              Contacto
            </h4>
            <a
              href={whatsappLink(`Hola 👋, quiero reservar una cita en ${site.fullName}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm transition-colors hover:text-gold-light"
            >
              WhatsApp {site.phone}
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="block text-sm transition-colors hover:text-gold-light"
            >
              Llamar
            </a>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
              Ubicación
            </h4>
            <p className="text-sm">{site.addressShort}</p>
            <p className="text-sm">{site.city}</p>
            <p className="text-sm">{site.hours}</p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
              Síguenos
            </h4>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold-light transition-colors hover:underline"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" />
              </svg>
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-gold-light/20 pt-6 text-xs text-[#867f73]">
          © {new Date().getFullYear()} {site.fullName} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
