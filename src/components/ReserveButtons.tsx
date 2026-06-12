import Button from "@/components/Button";
import { activeBookings, reservaHref } from "@/data/site";

// Botón(es) de reserva que se adaptan al número de manicuristas con agenda:
//   - 0 o 1 agenda activa → un solo botón (con WhatsApp como alternativa).
//   - 2 o más → un botón por manicurista, para poder reservar en paralelo.
// Solo renderiza los <Button>; el contenedor (flex y separación) lo pone quien
// lo usa, para encajar con el layout de cada sección.
export default function ReserveButtons({
  label = "Reservar cita",
  size = "md",
  variant = "gold",
}: {
  label?: string;
  size?: "sm" | "md";
  variant?: "gold" | "outline" | "dark";
}) {
  const bookings = activeBookings();

  if (bookings.length <= 1) {
    return (
      <Button href={reservaHref()} external size={size} variant={variant}>
        {label}
      </Button>
    );
  }

  return (
    <>
      {bookings.map((b) => (
        <Button key={b.name} href={b.href} external size={size} variant={variant}>
          Reservar con {b.name}
        </Button>
      ))}
    </>
  );
}
