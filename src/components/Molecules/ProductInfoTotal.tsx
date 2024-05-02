import { ReactNode } from "react";
import { CustomLink, ProductDetailName } from "@/components/Atoms";
import Button from "@/components/Atoms/Button";
import ProductDetail from "@/components/Molecules/ProductDetail";

interface Props {
  children: ReactNode;
}

function ProductInfoTotal({ children }: Props) {
  return <div className="flex py-8 flex-col">{children}</div>;
}

ProductInfoTotal.TitleLink = CustomLink;
ProductInfoTotal.Name = ProductDetailName;
ProductInfoTotal.ProductDetail = ProductDetail;
ProductInfoTotal.Button = Button;

export default ProductInfoTotal;
