import { Product } from "@/types/product.type";

export interface Brands {
  id: number;
  nameKr: string;
  nameEn: string;
}

export interface BrandProducts {
  id: number;
  nameKr: string;
  nameEn: string;
  products: Product[];
}

export interface BrandProductsData {
  success: boolean;
  result: BrandProducts;
  error: null | string;
}

export interface BrandsData {
  success: boolean;
  result: Brands[];
  error: null | string;
}
