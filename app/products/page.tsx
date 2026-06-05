import { prisma } from "@/lib/prisma";
import { getAuthWhereClause } from "@/lib/auth";
import ProductsClient from "@/components/ProductsClient";

async function getProducts() {
  const where = await getAuthWhereClause() as any;
  return await (prisma as any).product.findMany({
    where,
    include: {
      stocks: {
        include: {
          warehouse: true
        }
      }
    }
  });
}

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsClient products={products} />;
}
