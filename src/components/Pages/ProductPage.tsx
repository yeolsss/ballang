import { ProductCard } from "@/components/Organisms";
import { Product } from "@/types/product.type";
import { GetProductsData } from "@/api/products";

interface Props {
  brandId?: number;
}

async function ProductPage({ brandId }: Props) {
  const products = (await GetProductsData(brandId)) as Product[];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} productId={product.id}>
          <ProductCard.ProductImage
            src={product.imgSrc}
            alt={product.name}
            width={200}
            height={200}
          />
          <ProductCard.ProductInfo>
            <ProductCard.ProductInfo.BrandName>
              {product.brand.nameEn}
            </ProductCard.ProductInfo.BrandName>

            <ProductCard.ProductInfo.ProductDescription>
              {product.name}
            </ProductCard.ProductInfo.ProductDescription>

            <ProductCard.ProductInfo.ProductPrices>
              <ProductCard.ProductInfo.ProductPrices.OriginPrice
                variant={"originPrice"}
              >
                {product.originalPrice}
              </ProductCard.ProductInfo.ProductPrices.OriginPrice>

              <ProductCard.ProductInfo.ProductPrices.DiscountPrice
                variant={"default"}
              >
                {product.price}
              </ProductCard.ProductInfo.ProductPrices.DiscountPrice>
            </ProductCard.ProductInfo.ProductPrices>
          </ProductCard.ProductInfo>
        </ProductCard>
      ))}
    </div>
  );
}

export default ProductPage;
