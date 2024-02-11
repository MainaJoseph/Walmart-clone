import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";

function Product({ product }: { product: Organic }) {
  return (
    <Link
      href={{
        pathname: "/produc",
        query: { url: product.url },
      }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
    </Link>
  );
}

export default Product;
