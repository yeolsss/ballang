import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductDetailColValue({ children }: Props) {
  return <div className="col-span-4">{children}</div>;
}

export default ProductDetailColValue;
