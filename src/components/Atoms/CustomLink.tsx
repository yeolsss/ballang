import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<typeof Link> {
  children: ReactNode;
  className?: string;
}

function CustomLink({ children, className, ...props }: Props) {
  const baseStyle = "text-[15px] border-b pb-2.5 mb-2.5 font-bold";

  return (
    <Link {...props} className={cn(baseStyle, className)}>
      {children}
    </Link>
  );
}

export default CustomLink;
