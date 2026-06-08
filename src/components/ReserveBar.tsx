import { site, whatsappLink } from "@/data/site";

// Barra fija inferior visible solo en móvil: llamada rápida + reservar.
export default function ReserveBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-gold/35 bg-white/95 px-4 py-2.5 backdrop-blur-md md:hidden">
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="Llamar"
        className="flex h-12 w-12 flex-none items-center justify-center rounded-sm border border-line"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.2 2.3z" />
        </svg>
      </a>
      <a
        href={whatsappLink(`Hola 👋, quiero reservar una cita en ${site.fullName}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="gold-bg flex flex-1 items-center justify-center rounded-sm border border-gold py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-[#1a1407]"
      >
        Reservar por WhatsApp
      </a>
    </div>
  );
}
