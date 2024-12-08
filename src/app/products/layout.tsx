import { getTestingProducts } from "~/lib/actions/products";
import Link from "next/link";
import { TestingProduct } from "~/lib/db";
import { AddProductForm } from "~/components/AddProductForm";

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const products = await getTestingProducts();

  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen">
      <div className="border-r">
        <div className="p-4 space-y-4">
          <AddProductForm />
          <nav className="space-y-2">
            {products.map((product: TestingProduct) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="block p-2 hover:bg-gray-100 rounded-lg"
              >
                {product.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
