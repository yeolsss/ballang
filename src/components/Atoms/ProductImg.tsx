import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<typeof Image> {
  alt: string;
}

function ProductImg({ alt, ...props }: Props) {
  const baseStyle = "object-cover";

  return (
    <div className="aspect-[3/4] relative mb-4">
      <Image
        alt={alt}
        {...props}
        className={cn(baseStyle, props.className)}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
      />
    </div>
  );
}

export default ProductImg;
