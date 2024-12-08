"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { RealProduct } from "~/lib/db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/ui/table";
import { Button } from "~/ui/button";
import { deleteRealProduct } from "~/lib/actions/products";
import { toast } from "sonner";

const columnHelper = createColumnHelper<RealProduct>();

const columns = [
  columnHelper.accessor("provider", {
    header: "Provider",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("link", {
    header: "Link",
    cell: (info) => (
      <a
        href={info.getValue()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Product
      </a>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => `$${(info.getValue() / 100).toFixed(2)}`,
  }),
  columnHelper.accessor("minQuantity", {
    header: "Min Quantity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    cell: (info) => (
      <Button
        variant="destructive"
        size="sm"
        onClick={async () => {
          try {
            await deleteRealProduct(info.row.original.id, info.row.original.testingProductId);
            toast.success("Product deleted successfully");
          } catch (error) {
            console.error(error);
            toast.error("Failed to delete product");
          }
        }}
      >
        Delete
      </Button>
    ),
  }),
];

interface RealProductsTableProps {
  products: RealProduct[];
}

export function RealProductsTable({ products }: RealProductsTableProps) {
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No products found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
