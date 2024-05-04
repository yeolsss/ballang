import { FormInput } from "@/components/Molecules";
import Button from "@/components/Atoms/Button";
import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"form"> {
  children: ReactNode;
}

function LoginForm({ children, ...props }: Props) {
  return (
    <form
      {...props}
      className="flex flex-col items-center gap-y-8 max-w-sm mx-auto w-full"
    >
      {children}
    </form>
  );
}

LoginForm.FormInput = FormInput;
LoginForm.SubmitButton = Button;

export default LoginForm;
