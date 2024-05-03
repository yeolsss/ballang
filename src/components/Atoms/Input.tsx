"use client";

import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"input"> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const baseStyle =
      "block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300";

    return <input className={cn(baseStyle, className)} {...props} ref={ref} />;
  },
);

Input.displayName = "Input";

export default Input;
