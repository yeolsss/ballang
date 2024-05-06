"use client";

import { useAuth } from "@/context/auth";
import Button from "@/components/Atoms/Button";
import { useModal } from "@/context/modalContext";
import { useToast } from "@/components/UI/Toast/context/Toast";
import useCart from "@/hooks/Cart";

interface Props {
  productId: number;
}

function ProductDetailButton({ productId }: Props) {
  const { handleIsOpen } = useModal();
  const { cookie } = useAuth();
  const { toast } = useToast();
  const { clearCartMutate, postCartMutate, cartData, reFetchCart } = useCart();

  const handleDeleteCart = () => {
    clearCartMutate(productId, {
      onSuccess: async () => {
        await reFetchCart();
        toast({
          title: "장바구니에서 삭제되었습니다.",
          variant: "error",
        });
      },
    });
  };

  const handlePostCart = () => {
    postCartMutate(productId, {
      onSuccess: async () => {
        await reFetchCart();
        toast({
          title: "장바구니에 추가되었습니다.",
          variant: "success",
        });
      },
    });
  };

  if (!cookie) {
    return (
      <Button onClick={(e) => handleIsOpen(e, true)}>장바구니에 담기</Button>
    );
  }

  if (cookie) {
    const result = cartData?.result?.items.find(
      (item) => item.product.id === productId,
    );

    if (result)
      return (
        <Button variant={"cart"} onClick={handleDeleteCart}>
          장바구니에 빼기
        </Button>
      );
    else return <Button onClick={handlePostCart}>장바구니에 담기</Button>;
  }
}

export default ProductDetailButton;
