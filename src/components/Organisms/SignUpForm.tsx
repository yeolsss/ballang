"use client";

import { ReactNode } from "react";
import Button from "@/components/Atoms/Button";
import { FormInput } from "@/components/Molecules";

interface Props {
  children: ReactNode;
}

function SignUpForm({ children }: Props) {
  return (
    <form className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
      {children}
    </form>
  );
}

SignUpForm.FormInput = FormInput;
SignUpForm.SubmitButton = Button;

export default SignUpForm;
