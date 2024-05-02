import { ReactNode } from "react";
import { BrandName, ProductDescription } from "@/components/Atoms";
import ProductPrices from "@/components/Molecules/ProductPrices";

interface Props {
  children: ReactNode;
}

function ProductInfo({ children }: Props) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

ProductInfo.BrandName = BrandName;
ProductInfo.ProductDescription = ProductDescription;
ProductInfo.ProductPrices = ProductPrices;

export default ProductInfo;
