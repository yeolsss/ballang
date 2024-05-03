"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { PostSignUp } from "@/api/auth";
import { useToast } from "@/components/UI/Toast/context/Toast";
import { useRouter } from "next/navigation";

const useSignUpForm = () => {
  const { mutate, isPending } = useMutation({ mutationFn: PostSignUp });
  const { toast } = useToast();
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
      mutate(data, {
        onSuccess: () => {
          toast({
            title: "회원가입에 성공했습니다.",
            variant: "success",
            size: "lg",
            duration: 5000,
          });
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
        },
      });
    },
    [mutate, toast],
  );

  return { register, handleSubmit, errors, isPending, OnSubmit };
};

export default useSignUpForm;
