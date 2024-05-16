import { Suspense } from "react";
import { ProductDetailPage } from "@/components/Pages";

interface Props {
  params: {
    productId: number;
  };
}

function Product({ params }: Props) {
  const { productId } = params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailPage productId={productId} />
    </Suspense>
  );
}

export default Product;
