import { Suspense } from "react";
import { Title } from "@/components/Atoms";
import { ProductsPageContainer } from "@/components/Pages";

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
