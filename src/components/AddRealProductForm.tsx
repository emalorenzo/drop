"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/ui/form";
import { Input } from "~/ui/input";
import { createRealProduct } from "~/lib/actions/products";
import { toast } from "sonner";

const formSchema = z.object({
  link: z.string().url("Please enter a valid URL"),
  provider: z.string().min(1, "Provider is required"),
  price: z.string().transform((val) => Math.round(parseFloat(val) * 100)),
  minQuantity: z.string().transform((val) => parseInt(val, 10)),
});

type FormValues = {
  link: string;
  provider: string;
  price: string;
  minQuantity: string;
};

interface AddRealProductFormProps {
  testingProductId: number;
}

export function AddRealProductForm({ testingProductId }: AddRealProductFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
      provider: "",
      price: "",
      minQuantity: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await createRealProduct({
        testingProductId,
        link: values.link,
        provider: values.provider,
        price: Math.round(parseFloat(values.price) * 100),
        minQuantity: parseInt(values.minQuantity, 10),
      });
      form.reset();
      toast.success("Real product created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create real product");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Link</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provider</FormLabel>
              <FormControl>
                <Input placeholder="Enter provider name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (USD)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="0.00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="minQuantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Quantity</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter minimum quantity" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Add Real Product
        </Button>
      </form>
    </Form>
  );
}
