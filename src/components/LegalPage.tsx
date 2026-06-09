import Link from "next/link";

// Marco visual compartido por las páginas legales (privacidad, términos).
// Recibe el título, la fecha de actualización y el contenido (los <section>).
// Los estilos de h2/p/a/strong se aplican aquí con selectores de descendientes
// para no repetir clases en cada párrafo del texto legal.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-12">
      <article className="mx-auto max-w-3xl">
        <header className="text-center">
          <div className="mx-auto mb-4 h-0.5 w-12 rounded gold-bg" />
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-soft">Última actualización: {updated}</p>
        </header>

        <div className="mt-10 space-y-4 leading-relaxed text-ink-soft [&_a]:text-gold-deep [&_a]:underline [&_h2]:mb-2 [&_h2]:mt-9 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-1 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.12em] text-gold-deep transition-colors hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </article>
    </div>
  );
}
