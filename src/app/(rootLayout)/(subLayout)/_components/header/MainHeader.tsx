import Link from "next/link";
import HeaderAuth from "@/app/(rootLayout)/(subLayout)/_components/auth";
import HeaderBrands from "@/app/(rootLayout)/(subLayout)/_components/brands";

function MainHeader() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <Link href={"/"} className="font-bold text-2xl">
        발랑
      </Link>
      <HeaderBrands />
      <HeaderAuth />
    </header>
  );
}

export default MainHeader;
