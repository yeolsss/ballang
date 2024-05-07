import axiosInstance from "@/lib/axiosAPI";
import { NextResponse } from "next/server";

interface FetchResponse {
  success: boolean | null;
  result: null;
  header?: string | null;
  error: boolean | null;
}

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  const axiosResponse = await axiosInstance.post("/auth/sign-up", {
    email,
    password,
  });

  const token = axiosResponse.headers["set-cookie"];
  if (Array.isArray(token) && token.length !== 0) {
    const cookieString = token[0];
  }

  return NextResponse.json({ result: axiosResponse.data } as FetchResponse);
};
