// Encabezado de sección reutilizable: rayita dorada + antetítulo + título.
// Centraliza el patrón que se repetía en varias secciones del inicio.
// El título se pasa como children para permitir resaltar palabras en dorado.
export default function SectionHeading({
  eyebrow,
  children,
  align = "center",
  divider = true,
}: {
  eyebrow: string;
  children: React.ReactNode;
  align?: "center" | "left";
  divider?: boolean;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : undefined}>
      {divider && (
        <div
          className={`mb-4 h-0.5 w-12 rounded gold-bg ${centered ? "mx-auto" : ""}`}
        />
      )}
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-deep">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-semibold sm:text-5xl">{children}</h2>
    </div>
  );
}
