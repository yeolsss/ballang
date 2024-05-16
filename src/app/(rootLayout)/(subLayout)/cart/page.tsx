"use client";

import { Title } from "@/components/Atoms";
import EmptyCart from "@/app/(rootLayout)/(subLayout)/cart/_components/emptyCart/EmptyCart";
import useCart from "@/hooks/Cart";
import CartPage from "@/components/Pages/CartPage";

function Cart() {
  const { cartData } = useCart();

  return (
    <>
      <Title>장바구니</Title>
      {cartData?.result?.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartPage>
          {cartData?.result?.items.map((item) => (
            <CartPage.CartItem
              href={`/products/${item.product.id}`}
              key={item.product.id}
            >
              <CartPage.CartItem.Image
                src={item.product.imgSrc}
                alt={item.product.name}
                width={300}
                height={300}
              />
              <CartPage.CartItem.CartDetail
                brandKr={item.product.brand.nameKr}
                brandEn={item.product.brand.nameEn}
                productName={item.product.name}
                originPrice={item.product.originalPrice}
                discountPrice={item.product.price}
                deliveryType={item.product.deliveryType}
                onlineStock={item.product.onlineStock}
              />

              <CartPage.CartItem.Buttons
                productId={item.product.id}
                quantity={item.quantity}
              />
            </CartPage.CartItem>
          ))}
        </CartPage>
      )}
    </>
  );
}

export default Cart;
