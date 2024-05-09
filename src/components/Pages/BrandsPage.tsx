import ProductPage from "@/components/Pages/ProductPage";
import { Suspense } from "react";

interface Props {
  brandId: number;
}
async function BrandsPage({ brandId }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage brandId={brandId} />
    </Suspense>
  );
}

export default BrandsPage;
