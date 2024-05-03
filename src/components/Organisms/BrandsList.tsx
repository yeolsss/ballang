import { CustomLink } from "@/components/Atoms";
import { GetBrandsData } from "@/api/brands";
import { BrandsData } from "@/types/brands.type";

interface Props {
  brandId: number;
}

async function BrandsList({ brandId }: Props) {
  const brands = (await GetBrandsData()) as BrandsData;
  const { success, result } = brands;

  return (
    <nav className="mx-auto max-w-screen-lg mb-16">
      <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
        <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-4">
          <CustomLink
            href={`/brands`}
            variant="brandsLink"
            data-active={!brandId}
          >
            ALL
          </CustomLink>
        </li>
        {result.map((brand) => (
          <li key={brand.id}>
            <CustomLink
              href={`/brands?brandId=${brand.id}`}
              variant="brandsLink"
              data-active={brandId === brand.id}
            >
              {brand.nameKr}
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BrandsList;
