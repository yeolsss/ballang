import { Title } from "@/components/Atoms";
import { Suspense } from "react";
import { ProductPage } from "@/components/Pages";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Title>Trending</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPage />
      </Suspense>
    </>
  );
}
