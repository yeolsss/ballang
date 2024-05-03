import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "text-[15px] border-b pb-2.5 mb-2.5 font-bold",
      brandsLink:
        "text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

interface Props
  extends ComponentProps<typeof Link>,
    VariantProps<typeof linkVariants> {
  children: ReactNode;
  className?: string;
}

function CustomLink({ variant, children, className, ...props }: Props) {
  return (
    <Link {...props} className={cn(linkVariants({ variant }), className)}>
      {children}
    </Link>
  );
}

export default CustomLink;
