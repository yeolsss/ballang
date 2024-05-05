export interface Brand {
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

export interface Items {
  id: number;
  quantity: number;
  cartId: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

export interface Result {
  id: number;
  items: Items[];
}

export interface CartData {
  success: boolean;
  result: Result;
  error?: any;
}
