import { Title } from "@/components/Atoms";
import { Suspense } from "react";
import { ProductsPageContainer } from "@/components/Pages";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <Title>Trending</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPageContainer />
      </Suspense>
    </main>
  );
}
