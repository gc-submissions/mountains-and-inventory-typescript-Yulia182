import Product from "./models/Products";
export const products: Product[] = [
  { name: "bread", price: 5 },
  { name: "milk", price: 3 },
  { name: "eggs", price: 10 },
];

export const calcAverageProductPrice = (arrOfProducts: Product[]): number => {
  if (arrOfProducts.length === 0) {
    return 0;
  }
  const average = arrOfProducts.reduce((acc, cv) => {
    const sum = (acc += cv.price);
    return sum / arrOfProducts.length;
  }, 0);
  return parseFloat(average.toFixed(2));
};
