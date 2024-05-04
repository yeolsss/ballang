import axiosInstance from "@/lib/axiosAPI";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { parse } from "cookie";

interface FetchResponse {
  success: boolean | null;
  result: null;
  error: boolean | null;
}

export const POST = async (req: Request) => {
  const { email, password } = await req.json();
  const response = await axiosInstance.post(
    "/auth/log-in",
    { email, password },
    { withCredentials: true },
  );

  const token = response.headers["set-cookie"];
  if (Array.isArray(token) && token.length !== 0) {
    const cookieString = token[0];
    const parsedCookies = parse(cookieString);
    const accessToken = parsedCookies.accessToken;

    if (accessToken) {
      cookies().set("accessToken", accessToken, { httpOnly: true });
    }
  }
  return NextResponse.json({
    result: response.data,
  } as FetchResponse);
};

export const DELETE = async () => {
  const response = await axiosInstance.delete("/auth/log-out");

  cookies().delete("accessToken");

  return NextResponse.json({
    result: response.data,
  } as FetchResponse);
};

export const GET = () => {
  const token = cookies().get("accessToken");
  console.log("token = ", token?.value);
  return NextResponse.json({
    isLogin: !!token,
  });
};