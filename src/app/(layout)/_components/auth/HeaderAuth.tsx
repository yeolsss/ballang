import Link from "next/link";

function HeaderAuth() {
  return (
    <div className="ml-auto flex gap-x-4 items-center text-[15px]">
      <Link
        href={"/sign-up"}
        className="text-inherit text-gray-800 hover:text-black transition font-medium"
      >
        회원가입
      </Link>
      <button className="text-inherit text-gray-800 hover:text-black transition font-medium">
        로그인
      </button>
    </div>
  );
}

export default HeaderAuth;
