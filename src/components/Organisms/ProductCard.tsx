import { ReactNode } from "react";
import { ProductImg } from "@/components/Atoms";
import { ProductInfo } from "@/components/Molecules";

interface Props {
  children: ReactNode;
}

function ProductCard({ children }: Props) {
  return <div className="relative group flex flex-col">{children}</div>;
}

ProductCard.ProductImage = ProductImg;
ProductCard.ProductInfo = ProductInfo;

export default ProductCard;
