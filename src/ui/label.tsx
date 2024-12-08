"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/utils"

const labelVariants = cva(
	"text-[13px] text-foreground leading-[14px] font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }