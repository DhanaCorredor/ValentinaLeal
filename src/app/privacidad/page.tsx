import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
};

export default function PrivacidadPage() {
  const contacto = whatsappLink(
    "Hola 👋, quiero hacer una solicitud sobre mis datos personales.",
  );

  return (
    <LegalPage title="Política de privacidad" updated="12 de junio de 2026">
      <p>
        En <strong>{site.fullName}</strong> respetamos tu privacidad. Esta
        política explica cómo tratamos los datos personales de acuerdo con la{" "}
        <strong>Ley 1581 de 2012</strong> (Habeas Data) y el{" "}
        <strong>Decreto 1377 de 2013</strong> de Colombia.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        {site.fullName}, ubicado en {site.address}. Puedes contactarnos por
        WhatsApp al {site.phone}
        {site.email ? <> o al correo {site.email}</> : null}.
      </p>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Este sitio web es <strong>solo informativo</strong>: no tiene
        formularios ni recoge datos por sí mismo. Cuando decides agendar tu
        cita, recibimos únicamente los datos que compartes de forma voluntaria,
        como tu nombre, tu número de teléfono o correo y los detalles de la cita
        que deseas, ya sea a través de <strong>Google Calendar</strong> o de{" "}
        <strong>WhatsApp</strong>. Si reservas por Google Calendar, esos datos
        también se procesan en los servidores de Google conforme a su propia
        política de privacidad.
      </p>

      <h2>3. Finalidad</h2>
      <p>Usamos esos datos solo para:</p>
      <ul>
        <li>Agendar, confirmar y gestionar tus citas.</li>
        <li>Responder tus consultas sobre los servicios.</li>
        <li>Coordinar y prestar el servicio que solicitas.</li>
      </ul>
      <p>
        No vendemos ni compartimos tus datos con terceros con fines
        comerciales.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Este sitio <strong>no utiliza cookies de seguimiento</strong> ni
        herramientas de analítica de terceros. Por eso no verás un aviso de
        cookies al navegar. La página de reservas de Google Calendar es un
        servicio externo y se rige por las cookies y políticas de Google.
      </p>

      <h2>5. Tus derechos</h2>
      <p>Como titular de los datos, en cualquier momento puedes:</p>
      <ul>
        <li>Conocer, actualizar y rectificar tus datos.</li>
        <li>Solicitar prueba de la autorización que nos diste.</li>
        <li>Ser informada sobre el uso que damos a tus datos.</li>
        <li>Revocar la autorización y solicitar la supresión de tus datos.</li>
      </ul>

      <h2>6. Cómo ejercer tus derechos</h2>
      <p>
        Escríbenos por{" "}
        <a href={contacto} target="_blank" rel="noopener noreferrer">
          WhatsApp al {site.phone}
        </a>
        {site.email ? <> o al correo {site.email}</> : null} con tu solicitud.
        Atenderemos tu petición en los plazos que establece la ley.
      </p>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política cuando sea necesario. La versión
        vigente siempre estará publicada en esta página con su fecha de
        actualización.
      </p>
    </LegalPage>
  );
}
