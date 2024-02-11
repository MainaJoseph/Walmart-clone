import { Organic } from "@/typings/searchTypings";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

function Product({ product }: { product: Organic }) {
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
      )}
    </Link>
  );
}

export default Product;
