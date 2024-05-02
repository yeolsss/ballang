import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Title({ children }: Props) {
  return <h2 className="font-bold text-3xl text-center my-12">{children}</h2>;
}

export default Title;
