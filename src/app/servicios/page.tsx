import type { Metadata } from "next";
import { serviceCategories, servicePriceLabel } from "@/data/services";
import { whatsappLink } from "@/data/site";
import Button from "@/components/Button";
import ReserveButtons from "@/components/ReserveButtons";

export const metadata: Metadata = {
  title: "Servicios y precios",
  description:
    "Carta completa de servicios de uñas con precios: manicura, pedicura, semipermanente, gel, acrílico, poly gel, retiros y adicionales.",
};

export default function ServiciosPage() {
  return (
    <div className="px-5 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-0.5 w-12 rounded gold-bg" />
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">
            Nuestros <span className="gold-text">servicios</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Precios en pesos colombianos (COP). Toca cualquier servicio para
            reservar tu cita por WhatsApp.
          </p>
        </div>

        {/* Categorías */}
        <div className="mt-10 space-y-10">
          {serviceCategories.map((category) => (
            <section key={category.title}>
              <div className="mb-4 flex items-center gap-4">
                <h2 className="whitespace-nowrap font-serif text-2xl font-semibold text-gold-deep">
                  {category.title}
                </h2>
                <span className="h-px flex-1 bg-gold/35" />
              </div>

              <ul className="space-y-2.5">
                {category.items.map((service) => (
                  <li key={service.name}>
                    <a
                      href={whatsappLink(
                        service.note
                          ? `Hola 👋, quiero reservar: ${service.name}.`
                          : `Hola 👋, quiero reservar: ${service.name} (${servicePriceLabel(
                              service,
                            )}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-baseline justify-between gap-3 rounded border border-line bg-white px-4 py-4 transition hover:border-gold hover:shadow-sm"
                    >
                      <span className="text-[15px]">{service.name}</span>
                      <span className="min-w-0 flex-1 translate-y-[-4px] border-b border-dotted border-[#cfc8bb]" />
                      {service.note ? (
                        <span className="whitespace-nowrap text-sm italic text-ink-soft">
                          {service.note}
                        </span>
                      ) : (
                        <span className="gold-text whitespace-nowrap font-serif text-lg font-semibold">
                          {servicePriceLabel(service)}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 rounded border border-gold/35 bg-paper px-6 py-10 text-center">
          <h2 className="font-serif text-3xl font-semibold">
            ¿Tienes <span className="gold-text">dudas</span>?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-ink-soft">
            Escríbenos y te asesoramos sobre el servicio ideal para ti.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ReserveButtons />
            <Button href="/" variant="outline">
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
