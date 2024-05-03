import { Title } from "@/components/Atoms";
import { BrandsPage } from "@/components/Pages";
import BrandsList from "@/components/Organisms/BrandsList";
import { Suspense } from "react";

interface Props {
  searchParams: {
    [key: string]: string;
  };
}

function Brands({ searchParams }: Props) {
  const { brandId } = searchParams;
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      <Title>Brands</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandsList brandId={Number(brandId)} />
      </Suspense>
      <BrandsPage brandId={Number(brandId)} />
    </main>
  );
}

export default Brands;
