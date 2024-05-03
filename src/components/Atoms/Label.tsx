"use client";

import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"label"> {
  children: ReactNode;
  className?: string;
}

function Label({ className, children, ...props }: Props) {
  const baseStyle = "text-sm font-medium text-gray-800";
  return (
    <label className={cn(baseStyle, className)} {...props}>
      {children}
    </label>
  );
}

export default Label;
