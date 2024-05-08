import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteCart, DeleteClearCart, GetCart, PostCart } from "@/api/cart";
import { useAuth } from "@/context/auth";

const useCart = () => {
  const queryClient = useQueryClient();
  const { isLogin } = useAuth();
  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: GetCart,
    retry: 3,
    enabled: !!isLogin,
  });

  const { mutate: clearCartMutate } = useMutation({
    mutationFn: DeleteClearCart,
  });

  const { mutate: postCartMutate } = useMutation({
    mutationFn: PostCart,
  });

  const { mutate: deleteCart } = useMutation({
    mutationFn: DeleteCart,
  });

  const reFetchCart = async () => {
    await queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return { clearCartMutate, postCartMutate, deleteCart, cartData, reFetchCart };
};

export default useCart;
