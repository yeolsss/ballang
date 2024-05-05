import axiosInstance from "@/lib/axiosAPI";
import { ProductData } from "@/types/product.type";
import { BrandProductsData } from "@/types/brands.type";

export const GetBrandsData = async () => {
  const response = await axiosInstance.get("/brands");
  return response.data;
};

export const GetBrandProductsData = async (brandId: number) => {
  if (brandId) {
    const response = await axiosInstance.get(`/brands/${brandId}`);
    const { result } = response.data as BrandProductsData;
    const { products } = result;
    return products;
  }

  const response = await axiosInstance.get(`/products`);

  const { result } = response.data as ProductData;

  return result;
};
