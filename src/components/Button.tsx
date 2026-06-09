import Link from "next/link";

// Botón/enlace reutilizable. Centraliza los estilos de los CTA del sitio para
// no repetir la clase larga en cada uno. Renderiza un <Link> (navegación
// interna) o un <a> con target/rel (enlaces externos como WhatsApp).
type Variant = "gold" | "outline" | "dark";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center rounded-sm text-sm font-medium uppercase tracking-[0.12em] transition";

const variants: Record<Variant, string> = {
  gold: "gold-bg border border-gold text-on-gold hover:brightness-105",
  outline:
    "border border-line-strong text-ink hover:border-gold hover:text-gold-deep",
  dark: "border border-ink bg-ink text-white hover:bg-black",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5",
  md: "px-8 py-4",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** true → enlace externo (<a target="_blank">), p. ej. WhatsApp. */
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}
