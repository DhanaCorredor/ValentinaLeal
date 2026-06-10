// Carta de servicios. Precios en pesos colombianos (COP).
export type Service = {
  name: string;
  price: number;
};

export type ServiceCategory = {
  title: string;
  items: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Manicura & Pedicura",
    items: [
      { name: "Limpieza manos y pies", price: 40000 },
      { name: "Manicura tradicional", price: 26000 },
      { name: "Pedicure tradicional", price: 30000 },
      { name: "Pedicure semipermanente", price: 50000 },
    ],
  },
  {
    title: "Esmaltado & Recubrimiento",
    items: [
      { name: "Semipermanente", price: 55000 },
      { name: "Semi + base rubber", price: 85000 },
      { name: "Base rubber", price: 65000 },
      { name: "Soft gel", price: 90000 },
      { name: "Recubrimiento poly gel", price: 90000 },
      { name: "Dipping", price: 60000 },
    ],
  },
  {
    title: "Uñas esculpidas",
    items: [
      { name: "Esculpidas poly gel", price: 110000 },
      { name: "Esculpidas acrílico", price: 110000 },
      { name: "Retoque poly gel", price: 90000 },
      { name: "Retoque acrílicas", price: 90000 },
    ],
  },
  {
    title: "Retiros & Adicionales",
    items: [
      { name: "Retiro semipermanente", price: 10000 },
      { name: "Retiro soft gel", price: 15000 },
      { name: "Retiro poly gel", price: 25000 },
      { name: "Retiro acrílico", price: 25000 },
      { name: "Francés doble por uña", price: 2000 },
      { name: "Efecto espejo", price: 15000 },
      { name: "Piedrería (todas las uñas)", price: 8000 },
    ],
  },
];

// Formatea un número como precio en COP: 40000 -> "$40.000 COP"
export function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO")} COP`;
}
