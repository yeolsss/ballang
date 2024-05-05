import { ReactNode } from "react";
import CartItem from "@/components/Organisms/CartItem";

interface Props {
  children: ReactNode;
}

function CartPage({ children }: Props) {
  return (
    <section>
      <ul className="border-b">{children}</ul>
    </section>
  );
}

CartPage.CartItem = CartItem;

export default CartPage;
