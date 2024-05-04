import axiosInstance from "@/lib/axiosAPI";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";
import axios from "axios";

export const PostSignUp = async (data: z.infer<typeof SignUpFormSchema>) => {
  return await axiosInstance.post(
    "/auth/sign-up",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true },
  );
};

export const PostLogin = async (data: z.infer<typeof LoginFormSchema>) => {
  const response = await axios.post("/api/auth", {
    email: data.email,
    password: data.password,
  });

  return response.data;
};

export const DeleteLogout = async () => {
  const response = await axios.delete("/api/auth");
  return response.data;
};

export const GetIsLogin = async () => {
  const response = await axios.get("/api/auth");
  return response.data;
};
