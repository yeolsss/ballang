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
    <>
      <Title>Brands</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandsList brandId={Number(brandId)} />
      </Suspense>
      <BrandsPage brandId={Number(brandId)} />
    </>
  );
}

export default Brands;
