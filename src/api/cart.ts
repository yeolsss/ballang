import { CartData } from "@/types/cart.type";
import axiosInstance from "@/lib/axiosAPI";

export const GetCart = async () => {
  try {
    const response = await axiosInstance.get("/cart");
    return response.data as CartData;
  } catch (error) {
    throw new Error("카트호출에 실패했습니다.");
  }
};

export const DeleteCart = async (productId: number) => {
  try {
    const response = await axiosInstance.delete(`/cart/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("카트삭제에 실패했습니다.");
  }
};

export const DeleteClearCart = async (productId: number) => {
  try {
    const response = await axiosInstance.delete(
      `/cart/products/${productId}/clear`,
    );
    return response.data;
  } catch (error) {
    throw new Error("카트삭제에 실패했습니다.");
  }
};

export const PostCart = async (productId: number) => {
  try {
    const response = await axiosInstance.post(`/cart/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("카트추가에 실패했습니다.");
  }
};
