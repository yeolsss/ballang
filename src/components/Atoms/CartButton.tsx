import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

function CartButton({ className, children, ...props }: Props) {
  const baseStyle =
    "bg-black text-white flex items-center justify-center text-lg font-bold";

  return (
    <button className={cn(baseStyle, className)} {...props}>
      {children}
    </button>
  );
}

export default CartButton;
