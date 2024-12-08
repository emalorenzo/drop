import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const testingProducts = sqliteTable("testing_products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const realProducts = sqliteTable("real_products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  testingProductId: integer("testing_product_id")
    .notNull()
    .references(() => testingProducts.id),
  link: text("link").notNull(),
  provider: text("provider").notNull(),
  price: integer("price").notNull(), // Price in cents
  minQuantity: integer("min_quantity").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
