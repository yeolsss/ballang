import { ProductsData } from "@/types/product.type";
import axiosInstance from "@/lib/axiosAPI";

export const GetProductsData = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data as ProductsData;
  } catch (error) {
    throw new Error("상품 데이터를 불러오는데 실패했습니다.");
  }
};

export const GetProductData = async (productId: number) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("상품 데이터를 불러오는데 실패했습니다.");
  }
};
