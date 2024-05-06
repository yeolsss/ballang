import { cookies } from "next/headers";
import axiosInstance from "@/lib/axiosAPI";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
  const cookie = cookies().get("accessToken");
  const { productId } = await req.json();

  const response = await axiosInstance.delete(
    `/cart/products/${productId}/clear`,
    {
      headers: {
        "Content-Type": "application/json",
        cookie: `${cookie?.name}=${cookie?.value}`,
      },
    },
  );
  return NextResponse.json({
    data: response.data,
  });
};
