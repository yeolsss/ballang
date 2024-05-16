"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/validators/login.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/UI/Toast/context/Toast";
import useDisable from "@/hooks/DisableState";
import { useCallback } from "react";
import { useModal } from "@/context/modalContext";
import { useAuth } from "@/context/auth";

const useLoginForm = () => {
  const { loginMutate } = useAuth();
  const { toast } = useToast();
  const [isDisabled, handleToggleDisable] = useDisable();
  const { handleIsOpen } = useModal();

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
      loginMutate(data, {
        onSuccess: async () => {
          toast({
            title: "로그인에 성공했습니다.",
            variant: "success",
            size: "lg",
            duration: 5000,
          });
          handleToggleDisable(false);
          handleIsOpen(null, false);
          window.location.href = "/";
        },
        onError: () => {
          toast({
            title: "로그인에 실패했습니다.",
            variant: "error",
            size: "lg",
            duration: 5000,
          });
          handleToggleDisable(false);
        },
      });
    },
    [handleIsOpen, handleToggleDisable, loginMutate, toast],
  );

  return { register, handleSubmit, errors, OnSubmit, isDisabled };
};

export default useLoginForm;
