import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import Title from "@/components/UI/Toast/Atoms/Title";
import CloseButton from "@/components/UI/Toast/Atoms/CloseButton";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "relative p-5 rounded-md shadow-lg transition-transform duration-500 text-xl",
  {
    variants: {
      variant: {
        default: "bg-white text-black border border-gray-200 border-solid",
        success: "bg-[#44bd32] text-white",
        error: "bg-[#c23616] text-white",
      },
      size: {
        sm: "w-72",
        md: "w-80",
        lg: "w-96",
      },
      positionY: {
        top: "-translate-y-[150%]",
        bottom: "translate-y-[150%]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface Props extends VariantProps<typeof toastVariants> {
  children: React.ReactNode;
  className?: string;
  toastId?: string;
  handleClickClose?: (id: string) => void;
  positionY?: "top" | "bottom";
}

function Toast({
  variant,
  size,
  children,
  className,
  toastId,
  handleClickClose,
  positionY,
}: Props) {
  const [style, setStyle] = useState(
    cn(toastVariants({ variant, size, positionY }), className),
  );

  useEffect(() => {
    setTimeout(() => {
      setStyle((prev) =>
        cn(
          toastVariants({ variant, size, positionY }),
          `${prev} translate-y-0`,
        ),
      );
    }, 0);
  }, [size, variant, positionY]);

  return (
    <div className={style}>
      {children}
      <CloseButton onClick={() => handleClickClose?.(toastId!)} />
    </div>
  );
}

Toast.Title = Title;

export default Toast;
