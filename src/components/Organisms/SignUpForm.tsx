"use client";

import { ComponentProps, ReactNode } from "react";
import Button from "@/components/Atoms/Button";
import { FormInput } from "@/components/Molecules";

interface Props extends ComponentProps<"form"> {
  children: ReactNode;
}

function SignUpForm({ children, ...props }: Props) {
  return (
    <form
      {...props}
      className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
    >
      {children}
    </form>
  );
}

SignUpForm.FormInput = FormInput;
SignUpForm.SubmitButton = Button;

export default SignUpForm;
