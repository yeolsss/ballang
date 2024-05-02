import { ReactNode } from "react";
import { ProductPrice } from "@/components/Atoms";

interface Props {
  children: ReactNode;
}

function ProductPrices({ children }: Props) {
  return (
    <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
      {children}
    </div>
  );
}

ProductPrices.OriginPrice = ProductPrice;
ProductPrices.DiscountPrice = ProductPrice;

export default ProductPrices;
