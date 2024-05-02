import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductDetailColName({ children }: Props) {
  return <div className="text-slate-900 font-bold">{children}</div>;
}

export default ProductDetailColName;
