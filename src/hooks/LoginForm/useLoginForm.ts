"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/validators/login.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostLogin } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/UI/Toast/context/Toast";
import useDisable from "@/hooks/DisableState";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/modalContext";
import { useAuth } from "@/context/auth";

const useLoginForm = () => {
  const { mutate } = useMutation({ mutationFn: PostLogin });
  const { toast } = useToast();
  const [isDisabled, handleToggleDisable] = useDisable();
  const { handleIsOpen } = useModal();
  const { checkLogin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const OnSubmit = useCallback(
    (data: z.infer<typeof LoginFormSchema>) => {
      handleToggleDisable(true);
      mutate(data, {
        onSuccess: async () => {
          toast({
            title: "로그인에 성공했습니다.",
            variant: "success",
            size: "lg",
            duration: 5000,
          });
          handleToggleDisable(false);
          handleIsOpen(null, false);
          checkLogin();
          router.push("/");
        },
        onError: () => {
          toast({
            title: "로그인에 실패했습니다.",
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
    [handleIsOpen, handleToggleDisable, mutate, router, toast],
  );

  return { register, handleSubmit, errors, OnSubmit, isDisabled };
};

export default useLoginForm;
