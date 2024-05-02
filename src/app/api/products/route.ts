import axios from "axios";
import { NextResponse } from "next/server";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

interface Brand {
  id: number;
  nameKr: string;
  nameEn: string;
}

interface Product {
  id: number;
  name: string;
  imgSrc: string;
  onlineStock: number;
  price: number;
  originalPrice: number;
  deliveryType: string;
  brandId: number;
  brand: Brand;
}
export interface ProductData {
  success: boolean;
  result: Product[];
  error: null | string;
}

export const GET = async () => {
  const response = await axios.get("/products");
  return NextResponse.json(response.data as ProductData);
};
