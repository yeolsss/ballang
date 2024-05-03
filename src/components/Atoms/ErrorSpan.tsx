import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function ErrorSpan({ children, className }: Props) {
  const baseStyle = "text-red-500 font-semibold";
  return <span className={cn(baseStyle, className)}>{children}</span>;
}

export default ErrorSpan;
