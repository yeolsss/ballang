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
    <>
      <ProductDetail>
        <ProductDetail.DetailImage
          src={result.imgSrc}
          alt={result.name}
          width={150}
          height={150}
        />

        <ProductDetail.ProductInfoTotal>
          <ProductDetail.ProductInfoTotal.TitleLink
            variant={"default"}
            href={`/brands?brandId=${result.brandId}`}
          >
            {`${result.brand.nameKr} / ${result.brand.nameEn}`}
          </ProductDetail.ProductInfoTotal.TitleLink>

          <ProductDetail.ProductInfoTotal.Name>
            {result.name}
          </ProductDetail.ProductInfoTotal.Name>

          <ProductDetail.ProductInfoTotal.ProductDetail
            originPrice={result.originalPrice}
            discountPrice={result.price}
            deliveryType={result.deliveryType}
            onlineStock={result.onlineStock}
          />

          <ProductDetail.ProductInfoTotal.Button productId={result.id} />
        </ProductDetail.ProductInfoTotal>
      </ProductDetail>
    </>
  );
}

export default ProductPage;
