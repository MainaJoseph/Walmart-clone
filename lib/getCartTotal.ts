import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
  if (products.length === 0) {
    return "USD 0.00";
  }

  const currency = products[0]?.currency; // Get currency from the first product
  if (!currency) {
    return "Currency undefined";
  }

  const total = products.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  );

  return `${currency} ${total.toFixed(2)}`;
}

export default getCartTotal;
