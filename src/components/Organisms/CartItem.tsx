import { ReactNode } from "react";
import CartDetail from "@/components/Molecules/CartDetail";
import CartButtons from "@/components/Molecules/CartButtons";
import CartImg from "@/components/Atoms/CartImg";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  href: string;
}

function CartItem({ children, href }: Props) {
  const router = useRouter();

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <li>
      <a
        className="flex h-40 sm:h-56 border-t py-5 gap-x-5 cursor-pointer"
        onClick={(e) => handleClickLink(e)}
      >
        {children}
      </a>
    </li>
  );
}

CartItem.Image = CartImg;
CartItem.CartDetail = CartDetail;
CartItem.Buttons = CartButtons;

export default CartItem;
