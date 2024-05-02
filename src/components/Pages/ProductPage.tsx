import { ProductDetail } from "@/components/Organisms";
import { GetProductData } from "@/api/products";
import { ProductData } from "@/types/product.type";

interface Props {
  productId: number;
}

async function ProductPage({ productId }: Props) {
  const productData = (await GetProductData(productId)) as ProductData;
  const { result } = productData;
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      <ProductDetail>
        <ProductDetail.DetailImage
          src={result.imgSrc}
          alt={result.name}
          width={150}
          height={150}
        />

        <ProductDetail.ProductInfoTotal>
          <ProductDetail.ProductInfoTotal.TitleLink
            href={`/brands?brandId=${result.brandId}`}
          >{`${result.brand.nameKr} / ${result.brand.nameEn}`}</ProductDetail.ProductInfoTotal.TitleLink>
          <ProductDetail.ProductInfoTotal.Name>
            {result.name}
          </ProductDetail.ProductInfoTotal.Name>

          <ProductDetail.ProductInfoTotal.ProductDetail
            originPrice={result.originalPrice}
            discountPrice={result.price}
            deliveryType={result.deliveryType}
            onlineStock={result.onlineStock}
          />

          <ProductDetail.ProductInfoTotal.Button>
            장바구니에 담기
          </ProductDetail.ProductInfoTotal.Button>
        </ProductDetail.ProductInfoTotal>
      </ProductDetail>
    </main>
  );
}

export default ProductPage;
