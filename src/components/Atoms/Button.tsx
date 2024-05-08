import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "border border-slate-700 font-semibold py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        ghost: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, variant, ...props }: Props) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}

export default Button;
