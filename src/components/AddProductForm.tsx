"use client";

import { createTestingProduct } from "~/lib/actions/products";
import { useState } from "react";
import { Button } from "~/ui/button";
import { Input } from "~/ui/input";
import { Label } from "~/ui/label";
import { toast } from "sonner";

export function AddProductForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await createTestingProduct(name);
      setName("");
      toast.success("Testing product created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create testing product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">New Testing Product</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
      </div>
      <Button type="submit" className="w-full">
        Add Product
      </Button>
    </form>
  );
}
