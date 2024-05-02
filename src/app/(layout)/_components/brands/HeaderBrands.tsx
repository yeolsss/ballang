import Link from "next/link";

function HeaderBrands() {
  return (
    <nav className="ml-20">
      <ul>
        <li>
          <Link href={"/brands"} className="text-[15px] font-medium">
            BRANDS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderBrands;
