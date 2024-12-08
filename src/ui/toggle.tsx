"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/utils"

const toggleVariants = cva(
	"inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent hover:bg-accent hover:text-accent-foreground relative after:absolute after:inset-0 after:border data-[state=on]:after:border-transparent",
	{
		variants: {
			size: {
				default: "h-10 px-3",
				sm: "h-9 px-2.5",
				lg: "h-11 px-5",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, size, ...props }, ref) => (
	<TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ size, className }))} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
