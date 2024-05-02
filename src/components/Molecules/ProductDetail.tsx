import { ProductDetailColName, ProductPrice } from "@/components/Atoms";
import ProductDetailColValue from "@/components/Atoms/ProductDetailColValue";

interface Props {
  originPrice: number;
  discountPrice: number;
  deliveryType: string;
  onlineStock: number;
}

function ProductDetail({
  originPrice,
  discountPrice,
  deliveryType,
  onlineStock,
}: Props) {
  return (
    <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
      <ProductDetailColName>정가</ProductDetailColName>
      <ProductDetailColValue>
        <ProductPrice variant={"originPrice"}>{originPrice}</ProductPrice>
      </ProductDetailColValue>
      <ProductDetailColName>판매가</ProductDetailColName>
      <ProductDetailColValue>
        <ProductPrice className="font-semibold">{discountPrice}</ProductPrice>
      </ProductDetailColValue>
      <ProductDetailColName>배송</ProductDetailColName>
      <ProductDetailColValue>{deliveryType}</ProductDetailColValue>
      <ProductDetailColName>잔여 재고</ProductDetailColName>
      <ProductDetailColValue>{onlineStock}</ProductDetailColValue>
    </div>
  );
}

export default ProductDetail;
