import { ReactNode } from "react";
import { ProductImg } from "@/components/Atoms";
import { ProductInfoTotal } from "@/components/Molecules";

interface Props {
  children: ReactNode;
}

function ProductDetail({ children }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">{children}</div>
  );
}

ProductDetail.DetailImage = ProductImg;
ProductDetail.ProductInfoTotal = ProductInfoTotal;

export default ProductDetail;
