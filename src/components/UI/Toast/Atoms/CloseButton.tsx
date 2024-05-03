import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {}

function CloseButton({ ...props }: Props) {
  return (
    <button className="absolute top-2 right-2 z-20 h-5 w-5" {...props}>
      <div
        className="relative after:content-[''] after:h-[10px] after:w-[1px] after:bg-black after:absolute after:left-[50%] after:top-[50%]
        after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
    before:content-[''] before:h-[10px] before:w-[1px] before:bg-black before:absolute before:left-[50%] before:top-[50%]
        before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[-45deg]
    "
      ></div>
    </button>
  );
}

export default CloseButton;
