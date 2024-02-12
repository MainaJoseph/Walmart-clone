"use client";

import getCartTotal from "@/lib/getCartTotal";
import groupedBySKU from "@/lib/groupedBySKU";
import { useCartStore } from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";

function Basket() {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupedBySKU(cart);
  const basketTotal = getCartTotal(cart);

  return (
    <div className="max-w-4xl mx-auto lg:max-w-7xl px-4">
      <ul className="space-y-5 divide-y divide-gray-200">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCartTotal(grouped[sku]);

          return (
            <li
              key={sku}
              className="py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between"
            >
              {item.images[0] && (
                <div className="flex-shrink-0 mr-0 lg:mr-4">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
              )}

              <div className="flex flex-col w-full lg:w-auto mt-4 lg:mt-0">
                <p className="font-bold text-lg sm:text-md">{item.title}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="font-light text-sm line-clamp-3"
                />
              </div>

              <div className="flex flex-col justify-between lg:ml-auto w-full lg:w-1/4 mt-3 lg:mt-0">
                <AddToCart product={item} />
                <p className="font-bold text-right">{total}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className="font-bold text-2xl text-right text-walmart mb-5">
          Total: {basketTotal}
        </p>

        <Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50 ">
          CheckOut
        </Button>
      </div>
    </div>
  );
}

export default Basket;
