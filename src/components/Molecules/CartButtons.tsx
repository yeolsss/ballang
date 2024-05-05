import CartButton from "@/components/Atoms/CartButton";
import useCart from "@/hooks/Cart";

interface Props {
  productId: number;
  quantity: number;
}

function CartButtons({ productId, quantity }: Props) {
  const { postCartMutate, deleteCart, reFetchCart } = useCart();

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    postCartMutate(productId, {
      onSuccess: async () => {
        await reFetchCart();
      },
    });
  };

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteCart(productId, {
      onSuccess: async () => {
        await reFetchCart();
      },
    });
  };

  return (
    <div className="grid grid-cols-3 border border-black self-center h-4 w-12 sm:h-8 sm:w-24 items-stretch shrink-0">
      <CartButton onClick={handleDecrease}>-</CartButton>
      <span className="flex items-center justify-center text-[15px] font-bold">
        {quantity}
      </span>
      <CartButton onClick={handleIncrease}>+</CartButton>
    </div>
  );
}

export default CartButtons;
