import { Title } from "@/components/Atoms";
import axios from "axios";
import { ProductData } from "@/app/api/products/route";
import { ProductCard } from "@/components/Organisms";

const GetProductData = async () => {
  const response = await axios.get("http://localhost:3000/api/products");

  return response.data;
};

async function ProductPage() {
  const { success, result } = (await GetProductData()) as ProductData;

  return (
    <main className="flex flex-col p-8">
      <Title>Trending</Title>

      <div className="grid grid-cols-6 gap-x-8 gap-y-12">
        {result.map((product) => (
          <ProductCard key={product.id}>
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

export default ProductPage;
