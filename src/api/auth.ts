import axiosInstance from "@/lib/axiosAPI";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";

interface RefreshTokenResponse {
  success: boolean | null;
  result: boolean | null;
  error: boolean | null;
}

export const PostSignUp = async (data: z.infer<typeof SignUpFormSchema>) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up", {
      email: data.email,
      password: data.password,
    });

    return response.data;
  } catch (error) {
    throw new Error("회원가입에 실패했습니다.");
  }
};

export const PostLogin = async (data: z.infer<typeof LoginFormSchema>) => {
  try {
    const response = await axiosInstance.post("/auth/log-in", {
      email: data.email,
      password: data.password,
    });

<<<<<<< HEAD
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
=======
  return response.data;
>>>>>>> b434bd67b39f65437715e5253b1cd3bddb561014
};

export const DeleteLogout = async () => {
  try {
    await axiosInstance.delete("/auth/log-out");
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

export const PostRefreshToken = async () => {
  try {
    const response = await axiosInstance.get("/auth/refresh-token");
    return response.data as RefreshTokenResponse;
  } catch (error) {
    throw new Error("토큰 갱신에 실패했습니다.");
  }
};
