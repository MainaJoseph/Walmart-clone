import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    url: string;
  };
};

async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);

  if (!product) return notFound();

  return (
    <div>
      <div>
        {product.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={product.title + "" + i}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
