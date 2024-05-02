import { Title } from "@/components/Atoms";
import { ProductCard } from "@/components/Organisms";
import { ProductsData } from "@/types/product.type";
import { GetProductsData } from "@/api/products";

async function ProductsPage() {
  const { success, result } = (await GetProductsData()) as ProductsData;

  return (
    <main className="flex flex-col p-8">
      <Title>Trending</Title>

      <div className="grid grid-cols-6 gap-x-8 gap-y-12">
        {result.map((product) => (
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
    </main>
  );
}

export default ProductsPage;
