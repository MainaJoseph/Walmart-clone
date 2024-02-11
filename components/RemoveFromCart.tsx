"use client";

import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";

function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => [state.removeFromCart]);
  return <div></div>;
}

export default RemoveFromCart;
