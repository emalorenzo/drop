import { type VariantProps, cva } from "class-variance-authority"
import type * as React from "react"

import { cn } from "../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const badgeVariants = cva(
	"inline-flex gap-2 items-center px-2 text-sm border-dashed transition-colors border-transparent",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground border-primary-border",
				secondary: "border bg-muted text-foreground border-border-strong",
				warning: "bg-warning text-warning-foreground border-yellow-600 border",
				destructive: "bg-destructive text-destructive-foreground",
				success: "border border-green-600 bg-success text-success-foreground",
				outline: "text-foreground border-secondary border",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
