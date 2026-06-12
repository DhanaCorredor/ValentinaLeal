import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Valentina Leal Studio Nails.",
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="12 de junio de 2026">
      <p>
        Al usar el sitio web de <strong>{site.fullName}</strong> aceptas estos
        términos. Te pedimos leerlos con calma.
      </p>

      <h2>1. Objeto del sitio</h2>
      <p>
        Este sitio es <strong>informativo</strong>: presenta el estudio, su
        carta de servicios y facilita la reserva de citas en línea a través de
        Google Calendar y WhatsApp. No es una tienda en línea ni procesa pagos.
      </p>

      <h2>2. Servicios y precios</h2>
      <p>
        Los precios se muestran en <strong>pesos colombianos (COP)</strong> y
        son de referencia. Pueden cambiar sin previo aviso y el valor final se
        confirma al momento de agendar, según el servicio y tus necesidades.
        Las imágenes son ilustrativas.
      </p>

      <h2>3. Reservas</h2>
      <p>
        Las reservas se gestionan a través de Google Calendar y WhatsApp, y
        están sujetas a disponibilidad. Agendar una cita implica un compromiso
        de asistencia; si
        no puedes asistir, te agradecemos avisarnos con anticipación.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        La marca, el logotipo, los textos y las imágenes de este sitio
        pertenecen a {site.fullName}. No está permitido copiarlos ni usarlos sin
        nuestra autorización.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        El sitio enlaza a servicios externos como Google Calendar, WhatsApp e
        Instagram, que se rigen por sus propias políticas y condiciones. No nos hacemos
        responsables de su contenido o disponibilidad.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes dudas sobre estos términos, escríbenos por WhatsApp al{" "}
        {site.phone} o en Instagram {site.instagramHandle}.
      </p>
    </LegalPage>
  );
}
