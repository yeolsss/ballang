interface Brand {
  id: number;
  nameKr: string;
  nameEn: string;
}

export interface Product {
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
export interface ProductsData {
  success: boolean;
  result: Product[];
  error: null | string;
}

export interface ProductData {
  success: boolean;
  result: Product;
  error: null | string;
}
