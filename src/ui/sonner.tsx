"use client"

import { useTheme } from "next-themes"
import { Toaster as SonnerPrimitive } from "sonner"

type SonnerProps = React.ComponentProps<typeof SonnerPrimitive>

import { cn } from "../lib/utils"
import { buttonVariants } from "./button"

const Sonner = ({ ...props }: SonnerProps) => {
	const { theme = "system" } = useTheme()

	return (
		<SonnerPrimitive
			theme={theme as SonnerProps["theme"]}
			className="toaster group"
			duration={20000000}
			toastOptions={{
				unstyled: true,
				classNames: {
					toast:
						"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:shadow-lg rounded-none flex items-center p-4",
					title: "text-sm font-medium text-foreground",
					content: "",
					description: "text-muted-foreground text-sm",
					actionButton: cn("ml-2", buttonVariants({ variant: "default" })),
					cancelButton: cn("ml-2", buttonVariants({ variant: "ghost" })),
				},
			}}
			{...props}
		/>
	)
}

export { Sonner }
