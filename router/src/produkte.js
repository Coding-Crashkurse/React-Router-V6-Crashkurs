const produkte = [
  {
    id: 1,
    produkt: "Handtasche",
    preis: 200,
  },
  {
    id: 2,
    produkt: "Hose",
    preis: 60,
  },
  {
    id: 3,
    produkt: "Jacke",
    preis: 150,
  },
  {
    id: 4,
    produkt: "Lederjacke",
    preis: 220,
  },
];

export function getProducts() {
  return produkte;
}

export function getProduct(id) {
  return produkte.find((item) => item.id == id);
}
