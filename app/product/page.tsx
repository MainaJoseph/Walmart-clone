import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  searchParams: {
    url: string;
  };
};

async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);

  if (!product) return notFound();

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4 ">
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

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={image}
                    src={image}
                    alt={product.title + "" + i}
                    width={400}
                    height={400}
                    className="border rounded-sm"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="space-x-2">
          {product.breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              className={breadcrumb}
              variant="outline"
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="py-5"
        />

        {product.rating && (
          <p className="text-slate-500 text-md">
            {product.rating.rating}{" "}
            <span className="text-xl text-yellow-500"> ★</span>{" "}
            <span className="text-gray-400 ml-2">
              ({product.rating.count}) reviews
            </span>
          </p>
        )}

        <p className="text-2xl font-bold mt-2">
          {product?.currency} {product.price}
        </p>

        {/* Add to cart Button*/}

        <hr />

        <h3 className="font-bold text-xl pt-">Specifications</h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Specification</TableHead>
              <TableHead className="font-semibold">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((spec) => (
              <TableRow key={spec.key}>
                <TableCell className="font-medium">{spec.key}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductPage;
