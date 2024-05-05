import axiosInstance from "@/lib/axiosAPI";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";
import axios from "axios";
import { getCookie } from "cookies-next";

export const PostSignUp = async (data: z.infer<typeof SignUpFormSchema>) => {
  return await axiosInstance.post("/auth/sign-up", {
    email: data.email,
    password: data.password,
  });
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
  const cookie = getCookie("accessToken");

  if (!!cookie) {
    await axiosInstance.get("/auth/refresh-token", {
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${cookie}`,
      },
    });
  }
  return { isLogin: !!cookie } as { isLogin: boolean };
};
