"use client";

import Button from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";

function EmptyCart() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center mx-auto">
      <h6>장바구니가 비어 있습니다.</h6>
      <div className="mt-8">
        <Button
          className="w-64"
          onClick={() => router.push("/")}
          variant={"ghost"}
        >
          쇼핑하러 가기
        </Button>
      </div>
    </section>
  );
}

export default EmptyCart;
