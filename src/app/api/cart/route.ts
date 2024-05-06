import axiosInstance from "@/lib/axiosAPI";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookie = cookies().get("accessToken");

  const response = await axiosInstance.get("/cart", {
    headers: {
      "Content-Type": "application/json",
      cookie: `${cookie?.name}=${cookie?.value}`,
    },
  });
  return NextResponse.json({
    data: response.data,
  });
};

export const POST = async (req: Request) => {
  const cookie = cookies().get("accessToken");
  const { productId } = await req.json();

  const response = await axiosInstance.post(
    `/cart/products/${productId}`,
    {},
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

export const DELETE = async (req: Request) => {
  const cookie = cookies().get("accessToken");
  const { productId } = await req.json();

  const response = await axiosInstance.delete(`/cart/products/${productId}`, {
    headers: {
      "Content-Type": "application/json",
      cookie: `${cookie?.name}=${cookie?.value}`,
    },
  });
  return NextResponse.json({
    data: response.data,
  });
};
