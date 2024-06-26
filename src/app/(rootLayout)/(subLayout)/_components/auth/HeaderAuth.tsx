"use client";

import Link from "next/link";
import { useModal } from "@/context/modalContext";
import { useAuth } from "@/context/auth";

function HeaderAuth() {
  const { handleIsOpen } = useModal();
  const { handleClickLogout, isLogin } = useAuth();

  const baseStyle =
    "text-[15px] text-gray-800 hover:text-black transition font-medium";

  if (isLogin === null) return null;

  return (
    <div className="ml-auto flex gap-x-4 items-center text-[15px]">
      {!isLogin ? (
        <>
          <Link href={"/sign-up"} className={baseStyle}>
            회원가입
          </Link>
          <button className={baseStyle} onClick={(e) => handleIsOpen(e, true)}>
            로그인
          </button>
        </>
      ) : (
        <>
          <Link href={"/cart"} className={baseStyle}>
            장바구니
          </Link>
          <button className={baseStyle} onClick={handleClickLogout}>
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderAuth;
