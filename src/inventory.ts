import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
  {
    product: { name: "Motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

export const calcInventoryValue = (
  arrOfInventoryItems: InventoryItem[]
): number => {
  if (arrOfInventoryItems.length === 0) {
    return 0;
  }
  const total = arrOfInventoryItems.reduce((acc, cv) => {
    return (acc += cv.product.price * cv.quantity);
  }, 0);
  return total;
};
