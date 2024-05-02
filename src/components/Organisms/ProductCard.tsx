import { ReactNode } from "react";
import { ProductImg } from "@/components/Atoms";
import { ProductInfo } from "@/components/Molecules";
import Link from "next/link";

interface Props {
  children: ReactNode;
  productId: number;
}

function ProductCard({ children, productId }: Props) {
  return (
    <Link href={`/products/${productId}`}>
      <div className="relative group flex flex-col">{children}</div>
    </Link>
  );
}

ProductCard.ProductImage = ProductImg;
ProductCard.ProductInfo = ProductInfo;

export default ProductCard;
