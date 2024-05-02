import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: Props) {
  const baseStyle =
    "border border-slate-700 py-4 px-12 text-[15px] font-semibold transition h" +
    "over:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-black text-white";

  return (
    <button {...props} className={cn(baseStyle, className)}>
      {children}
    </button>
  );
}

export default Button;
