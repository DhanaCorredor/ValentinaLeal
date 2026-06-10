"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { reservaHref } from "@/data/site";
import Button from "@/components/Button";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Ubicación", href: "/#ubicacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold text-gold-deep">VL</span>
          <span className="font-serif text-base font-semibold tracking-[0.18em] text-ink">
            VALENTINA LEAL
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.href === pathname ? "page" : undefined}
              className={`text-xs uppercase tracking-[0.12em] transition-colors hover:text-gold-deep ${
                l.href === pathname ? "text-gold-deep" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button href={reservaHref()} external size="sm" className="text-xs">
            Reservar
          </Button>
        </div>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menú desplegable (móvil) */}
      {open && (
        <div className="border-t border-line bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={l.href === pathname ? "page" : undefined}
                className={`py-2.5 text-sm uppercase tracking-[0.12em] transition-colors hover:text-gold-deep ${
                  l.href === pathname ? "text-gold-deep" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button
              href={reservaHref()}
              external
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Reservar cita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
