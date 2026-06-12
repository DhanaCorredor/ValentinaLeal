// Carta de servicios. Precios en pesos colombianos (COP).
export type Service = {
  name: string;
  // Precio fijo en COP. Es opcional porque algunos ítems son una nota sin precio.
  price?: number;
  // Si existe, el precio es un rango: desde `price` hasta `priceMax`.
  priceMax?: number;
  // Texto que reemplaza al precio (ej. aclaraciones que no tienen costo fijo).
  note?: string;
};

export type ServiceCategory = {
  title: string;
  items: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Manicura & Pedicura",
    items: [
      { name: "Limpieza de manos", price: 20000 },
      { name: "Limpieza de pies", price: 25000 },
      { name: "Manicura tradicional", price: 26000 },
      { name: "Pedicure tradicional", price: 30000 },
      { name: "Pedicure semipermanente", price: 55000 },
      { name: "Pedí spa", price: 40000 },
    ],
  },
  {
    title: "Esmaltado & Recubrimiento",
    items: [
      { name: "Semipermanente", price: 45000, priceMax: 50000 },
      { name: "Soft gel", price: 90000 },
      { name: "Base rubber", price: 65000 },
      { name: "Recubrimiento poly gel", price: 80000 },
      { name: "Dipping", price: 75000 },
    ],
  },
  {
    title: "Uñas esculpidas",
    items: [
      { name: "Esculpidas poly gel", price: 110000 },
      { name: "Esculpidas acrílico", price: 115000 },
      { name: "Retoque poly gel", price: 60000 },
      { name: "Retoque acrílicas", price: 80000 },
    ],
  },
  {
    title: "Retiros",
    items: [
      { name: "Retiro semipermanente", price: 10000 },
      { name: "Retiro soft gel", price: 15000 },
      { name: "Retiro poly gel", price: 15000 },
      { name: "Retiro acrílico", price: 15000 },
    ],
  },
  {
    title: "Adicionales",
    items: [
      { name: "Efecto espejo", price: 10000 },
      { name: "Diseño a mano alzada", price: 5000 },
      { name: "Diseño", note: "Incluye 2 uñas por mano" },
    ],
  },
];

// Formatea un número como precio en COP: 40000 -> "$40.000 COP"
export function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO")} COP`;
}

// Texto que se muestra a la derecha de cada servicio en la carta. Puede ser un
// precio fijo, un rango ("$45.000–$50.000 COP") o una nota cuando no hay precio.
export function servicePriceLabel(service: Service): string {
  if (service.note) return service.note;
  if (service.price !== undefined && service.priceMax !== undefined) {
    return `$${service.price.toLocaleString("es-CO")}–${formatCOP(
      service.priceMax,
    )}`;
  }
  return formatCOP(service.price ?? 0);
}
