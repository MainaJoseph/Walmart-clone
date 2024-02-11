import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    url: string;
  };
};

async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);

  return <div>Product Page</div>;
}

export default ProductPage;
