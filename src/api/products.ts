import { ProductsData } from "@/types/product.type";
import axiosInstance from "@/lib/axiosAPI";

export const GetProductsData = async () => {
  const response = await axiosInstance.get("/products", {
    withCredentials: true,
  });

  return response.data as ProductsData;
};

export const GetProductData = async (productId: number) => {
  const response = await axiosInstance.get(`/products/${productId}`, {
    withCredentials: true,
  });
  return response.data;
};
