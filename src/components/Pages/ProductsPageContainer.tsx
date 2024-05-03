import { ProductsData } from "@/types/product.type";
import { GetProductsData } from "@/api/products";
import ProductPrintPage from "@/components/Pages/ProductPrintPage";

async function ProductsPageContainer() {
  const { success, result } = (await GetProductsData()) as ProductsData;

  return <ProductPrintPage products={result} />;
}

export default ProductsPageContainer;
