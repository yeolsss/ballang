import { ProductPage } from "@/components/Pages";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />
    </Suspense>
  );
}
