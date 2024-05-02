import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function BrandName({ children, className }: Props) {
  const baseStyle = "text-sm font-bold";

  return <h6 className={cn(baseStyle, className)}> {children}</h6>;
}

export default BrandName;
