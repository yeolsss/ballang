import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function ProductDescription({ children, className }: Props) {
  const baseStyle = "text-[15px]";

  return <p className={cn(baseStyle, className)}>{children}</p>;
}

export default ProductDescription;
