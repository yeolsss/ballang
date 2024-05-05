import ProductDetailName from "../Atoms/ProductDetailName";
import { ProductPrice } from "@/components/Atoms";

interface Props {
  brandKr: string;
  brandEn: string;
  productName: string;
  originPrice: number;
  discountPrice: number;
  deliveryType: string;
  onlineStock: number;
}

function CartDetail({
  brandKr,
  brandEn,
  productName,
  originPrice,
  discountPrice,
  deliveryType,
  onlineStock,
}: Props) {
  return (
    <div className="flex flex-col gap-y-1 sm:gap-y-2.5 grow">
      <ProductDetailName className="text-sm sm:text-base font-bold">
        {brandKr} / {brandEn}
      </ProductDetailName>
      <ProductDetailName>{productName}</ProductDetailName>
      <div className="flex gap-x-2.5 items-center text-sm sm:text-base">
        <ProductPrice variant={"originPrice"}>{originPrice}</ProductPrice>
        <ProductPrice className="font-semibold">{discountPrice}</ProductPrice>
      </div>
      <div className="flex text-xs sm:text-sm">
        <div>
          {deliveryType} | 잔여재고 {onlineStock}ea
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
