import Image from "next/image";
import { site, mapsEmbedUrl, reservaHref } from "@/data/site";
import { serviceCategories } from "@/data/services";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  const reservar = reservaHref();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper px-5 pb-16 pt-10 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(201,162,75,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl">
          <Image
            src="/logo.png"
            alt={site.fullName}
            width={3375}
            height={4219}
            priority
            className="mx-auto mb-2 h-auto w-56 sm:w-64"
          />
          <h1 className="font-serif text-[2.75rem] font-semibold leading-[1.1] sm:text-6xl">
            El arte en{" "}
            <span className="gold-text block sm:inline">tus manos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-soft sm:text-lg">
            Manicura, pedicura y diseño en gel, acrílico y poly gel. Cada
            detalle cuidado para que tus manos hablen por ti.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/servicios">Ver servicios</Button>
          </div>
        </div>
      </section>

      {/* FRANJA DE DATOS */}
      <section className="hidden border-y border-gold/35 md:grid md:grid-cols-4">
        {[
          { big: "+20", small: "Servicios" },
          { big: "Gel · Acrílico", small: "Poly gel · Dipping" },
          { big: site.addressShort, small: "Palmira, V. del Cauca" },
          { big: site.phone, small: "Citas" },
        ].map((s, i) => (
          <div
            key={i}
            className="border-b border-line px-3 py-5 text-center last:border-b-0 odd:border-r odd:border-line md:border-b-0 md:[&:not(:last-child)]:border-r"
          >
            <div className="gold-text font-serif text-xl sm:text-2xl">{s.big}</div>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-ink-soft">
              {s.small}
            </span>
          </div>
        ))}
      </section>

      {/* SERVICIOS (resumen → pestaña aparte) */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="Carta de servicios">
            Nuestros <span className="gold-text">servicios</span>
          </SectionHeading>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Más de 20 servicios de manicura, pedicura y diseño de uñas. Mira la
            carta completa con precios.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {serviceCategories.map((c) => (
              <span
                key={c.title}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
              >
                {c.title}
              </span>
            ))}
          </div>

          <Button href="/servicios" className="mt-9">
            Ver todos los servicios →
          </Button>
        </div>
      </section>

      {/* NOSOTRAS */}
      <section id="nosotras" className="bg-paper px-5 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          {/* Foto temporal de Unsplash — reemplazar por una del estudio. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-gold/35 md:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80"
              alt="Manos con manicura cuidada"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Sobre el estudio" align="left" divider={false}>
              Donde el <span className="gold-text">detalle</span> lo es todo
            </SectionHeading>
            <p className="mt-5 text-ink-soft">
              En {site.fullName} creemos que unas uñas bien cuidadas son un
              gesto de elegancia. Trabajamos con productos premium y técnicas de
              larga duración en un espacio pensado para tu comodidad.
            </p>
            <p className="mt-3 text-ink-soft">
              Bioseguridad, materiales de primera calidad y un acabado impecable
              en cada cita.
            </p>
            <Button href={reservar} external variant="dark" className="mt-6">
              Agenda tu cita
            </Button>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <SectionHeading eyebrow="Cómo llegar">
              Nuestra <span className="gold-text">ubicación</span>
            </SectionHeading>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded border border-gold/35">
              <iframe
                src={mapsEmbedUrl}
                title={`Ubicación de ${site.fullName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-square w-full md:aspect-[4/3]"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                {site.fullName}
              </h3>
              <p className="mt-4 text-ink-soft">
                <strong className="font-medium text-ink">Dirección:</strong>{" "}
                {site.address}
              </p>
              <p className="mt-2 text-ink-soft">
                <strong className="font-medium text-ink">Horario:</strong>{" "}
                {site.hours}
              </p>
              <p className="mt-2 text-ink-soft">
                <strong className="font-medium text-ink">Teléfono:</strong>{" "}
                {site.phone}
              </p>
              <Button href={reservar} external className="mt-6">
                Reservar cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="reservar" className="bg-ink px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
            Reserva tu cita
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-6xl">
            ¿Lista para <span className="gold-text">consentirte</span>?
          </h2>
          <p className="mt-4 text-base text-[#bdb6aa] sm:text-lg">
            Reserva tu cita en segundos.
          </p>
          <Button href={reservar} external className="mt-8">
            Reservar cita →
          </Button>
        </div>
      </section>
    </>
  );
}
