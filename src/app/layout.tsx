import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "~/components/Header";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drop - Gestión de Dropshipping",
  description: "Aplicación interna para gestión de dropshipping",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={cn(inter.className, "bg-white")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
