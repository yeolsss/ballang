import axiosInstance from "@/lib/axiosAPI";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";
import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const PostSignUp = async (data: z.infer<typeof SignUpFormSchema>) => {
  const response = await axiosInstance.post("/auth/sign-up", {
    email: data.email,
    password: data.password,
  });

  console.log(response);

  return response.data;
};

export const PostSignUpTest = async (
  data: z.infer<typeof SignUpFormSchema>,
) => {
  return await axios.post("/api/auth/signUp", {
    email: data.email,
    password: data.password,
  });
};

export const PostLogin = async (data: z.infer<typeof LoginFormSchema>) => {
  const response = await axios.post(
    "/api/auth",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true },
  );

  return response.data;
};

export const PostLoginTest = async (data: z.infer<typeof LoginFormSchema>) => {
  const response = await axiosInstance.post(
    "/auth/log-in",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true },
  );

  return response.data;
};

export const DeleteLogout = async () => {
  const response = await axios.delete("/api/auth", { withCredentials: true });
  return response.data;
};

export const PostRefreshToken = async (cookie: RequestCookie | undefined) => {
  if (cookie) {
    await axiosInstance.get("/auth/refresh-token");
  }
};
