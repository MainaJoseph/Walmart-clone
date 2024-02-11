import { Product } from "@/typings/productTypings";

export function groupedBySKU(product: Product[]): Record<string, Product[]> {
  return product?.reduce(
    (accumulator: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;
      if (!accumulator[sku]) {
        accumulator[sku] = [];
      }
      accumulator[sku].push(currentProduct);
      return accumulator;
    },
    {}
  );
}

export default groupedBySKU;
