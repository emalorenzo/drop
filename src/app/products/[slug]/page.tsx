import { getTestingProductBySlug, getRealProducts } from "~/lib/actions/products";
import { notFound } from "next/navigation";
import { RealProductsTable } from "~/components/RealProductsTable";
import { AddRealProductForm } from "~/components/AddRealProductForm";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getTestingProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const realProducts = await getRealProducts(product.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500">Testing Product ID: {product.id}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Real Products</h2>
        <AddRealProductForm testingProductId={product.id} />
        <RealProductsTable products={realProducts} />
      </div>
    </div>
  );
}
