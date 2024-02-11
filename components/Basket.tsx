"use client";

import getCartTotal from "@/lib/getCartTotal";
import groupedBySKU from "@/lib/groupedBySKU";
import { useCartStore } from "@/store";

function Basket() {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupedBySKU(cart);
  const basketTotal = getCartTotal(cart);

  return <div>Basket</div>;
}

export default Basket;
