import axiosInstance from "@/lib/axiosAPI";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";

export const PostSignUp = async (data: z.infer<typeof SignUpFormSchema>) => {
  return await axiosInstance.post("/auth/sign-up", {
    email: data.email,
    password: data.password,
  });
};
