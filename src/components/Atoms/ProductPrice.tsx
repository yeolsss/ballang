import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatNumber } from "@/lib/utils";

const priceVariants = cva("", {
  variants: {
    variant: {
      default: "font-bold",
      originPrice: "text-red-500 line-through font-semibold",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

interface Props extends VariantProps<typeof priceVariants> {
  children: ReactNode;
  className?: string;
}

function ProductPrice({ variant, children, className }: Props) {
  return (
    <span className={cn(priceVariants({ variant }), className)}>
      ₩{formatNumber(children as string)}
    </span>
  );
}

export default ProductPrice;
