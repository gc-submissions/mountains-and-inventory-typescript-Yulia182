import { calcAverageProductPrice, products } from "./products";
import { findNameOfTallestMountain, mountains } from "./mountains";
import { calcInventoryValue, inventory } from "./inventory";

console.log(findNameOfTallestMountain(mountains));
console.log(findNameOfTallestMountain([]));
console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice([]));
console.log(calcInventoryValue(inventory));
console.log(calcInventoryValue([]));
