import axiosInstance from "@/lib/axiosAPI";
import { ProductData } from "@/types/product.type";
import { BrandProductsData } from "@/types/brands.type";

export const GetBrandsData = async () => {
  try {
    const response = await axiosInstance.get("/brands");
    return response.data;
  } catch (error) {
    throw new Error("브랜드 데이터를 불러오는데 실패했습니다.");
  }
};

export const GetBrandProductsData = async (brandId: number) => {
  try {
    if (brandId) {
      const response = await axiosInstance.get(`/brands/${brandId}`);
      const { result } = response.data as BrandProductsData;
      const { products } = result;
      return products;
    }

    const response = await axiosInstance.get(`/products`);

    const { result } = response.data as ProductData;

    return result;
  } catch (error) {
    throw new Error("브랜드 상품 데이터를 불러오는데 실패했습니다.");
  }
};
