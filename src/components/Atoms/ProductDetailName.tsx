import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function ProductDetailName({ children, className }: Props) {
  const baseStyle = "text-lg";

  return <h1 className={cn(baseStyle, className)}>{children}</h1>;
}

export default ProductDetailName;
