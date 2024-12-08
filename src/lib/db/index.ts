import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { testingProducts, realProducts } from "./schema";

// Crear la base de datos si no existe
const sqlite = new Database("sqlite.db");

// Crear tablas solo si no existen
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS testing_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS real_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    testing_product_id INTEGER NOT NULL,
    link TEXT NOT NULL,
    provider TEXT NOT NULL,
    price INTEGER NOT NULL,
    min_quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (testing_product_id) REFERENCES testing_products(id)
  );
`);

// Inicializar Drizzle
export const db = drizzle(sqlite);

// Type-safe query builder
export type TestingProduct = typeof testingProducts.$inferSelect;
export type NewTestingProduct = typeof testingProducts.$inferInsert;
export type RealProduct = typeof realProducts.$inferSelect;
export type NewRealProduct = typeof realProducts.$inferInsert;
