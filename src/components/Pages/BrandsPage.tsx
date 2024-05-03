import { GetBrandProductsData } from "@/api/brands";
import { Product } from "@/types/product.type";
import ProductPrintPage from "@/components/Pages/ProductPrintPage";
import { Suspense } from "react";

interface Props {
  brandId: number;
}
async function BrandsPage({ brandId }: Props) {
  const response = (await GetBrandProductsData(brandId)) as Product[];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPrintPage products={response} />
    </Suspense>
  );
}

export default BrandsPage;
