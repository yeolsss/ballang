import { ReactNode } from "react";
import { CustomLink, ProductDetailName } from "@/components/Atoms";
import ProductDetail from "@/components/Molecules/ProductDetail";
import ProductDetailButton from "@/components/Molecules/ProductDetailButton";

interface Props {
  children: ReactNode;
}

function ProductInfoTotal({ children }: Props) {
  return <div className="flex py-8 flex-col">{children}</div>;
}

ProductInfoTotal.TitleLink = CustomLink;
ProductInfoTotal.Name = ProductDetailName;
ProductInfoTotal.ProductDetail = ProductDetail;
ProductInfoTotal.Button = ProductDetailButton;

export default ProductInfoTotal;
