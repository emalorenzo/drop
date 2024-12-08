"use server";

import { db } from "~/lib/db";
import { testingProducts, realProducts } from "~/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { generateSlug } from "~/lib/utils";

// Testing Products Actions
export async function createTestingProduct(name: string) {
  const slug = generateSlug(name);
  await db.insert(testingProducts).values({ name, slug });
  revalidatePath("/products");
}

export async function deleteTestingProduct(id: number) {
  // First delete all related real products
  await db.delete(realProducts).where(eq(realProducts.testingProductId, id));
  // Then delete the testing product
  await db.delete(testingProducts).where(eq(testingProducts.id, id));
  revalidatePath("/products");
}

export async function getTestingProducts() {
  return await db.select().from(testingProducts).orderBy(testingProducts.createdAt);
}

export async function getTestingProductBySlug(slug: string) {
  const results = await db
    .select()
    .from(testingProducts)
    .where(eq(testingProducts.slug, slug))
    .limit(1);

  return results[0] || null;
}

// Real Products Actions
export async function createRealProduct(data: {
  testingProductId: number;
  link: string;
  provider: string;
  price: number;
  minQuantity: number;
}) {
  await db.insert(realProducts).values(data);
  revalidatePath(`/products/${data.testingProductId}`);
}

export async function deleteRealProduct(id: number, testingProductId: number) {
  await db.delete(realProducts).where(eq(realProducts.id, id));
  revalidatePath(`/products/${testingProductId}`);
}

export async function getRealProducts(testingProductId: number) {
  return await db
    .select()
    .from(realProducts)
    .where(eq(realProducts.testingProductId, testingProductId))
    .orderBy(realProducts.createdAt);
}
