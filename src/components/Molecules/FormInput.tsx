import { ReactNode } from "react";
import { Input, Label } from "@/components/Atoms";

interface Props {
  children: ReactNode;
}

function FormInput({ children }: Props) {
  return <div className="grid gap-y-1.5 w-full">{children}</div>;
}

FormInput.Label = Label;
FormInput.Input = Input;

export default FormInput;
