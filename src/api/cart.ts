import { CartData } from "@/types/cart.type";
import axios from "axios";

export const GetCart = async () => {
  const response = await axios.get("/api/cart");
  return response.data.data as CartData;
};

export const DeleteCart = async (productId: number) => {
  const response = await axios.delete("/api/cart", {
    data: {
      productId,
    },
  });
};

export const DeleteClearCart = async (productId: number) => {
  const response = await axios.delete("/api/cart/clear", {
    data: {
      productId,
    },
  });
};

export const PostCart = async (productId: number) => {
  const response = await axios.post("/api/cart", {
    productId,
  });
};
