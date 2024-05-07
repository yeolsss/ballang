"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useToast } from "@/components/UI/Toast/context/Toast";
import { useRouter } from "next/navigation";
import useDisable from "@/hooks/DisableState";
import { useAuth } from "@/context/auth";

const useSignUpForm = () => {
  const { signupMutate } = useAuth();
  const { toast } = useToast();
  const [isDisabled, handleToggleDisable] = useDisable();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const OnSubmit = useCallback(
    (data: z.infer<typeof SignUpFormSchema>) => {
      handleToggleDisable(true);
      signupMutate(data, {
        onSuccess: () => {
          toast({
            title: "회원가입에 성공했습니다.",
            variant: "success",
            size: "lg",
            duration: 5000,
          });
          handleToggleDisable(false);
          router.push("/");
        },
        onError: () => {
          toast({
            title: "회원가입에 실패했습니다.",
            variant: "error",
            size: "lg",
            duration: 5000,
            toastPositionY: "bottom",
            toastPositionX: "right",
          });
          handleToggleDisable(false);
        },
      });
    },
    [handleToggleDisable, signupMutate, router, toast],
  );

  return { register, handleSubmit, errors, isDisabled, OnSubmit };
};

export default useSignUpForm;
