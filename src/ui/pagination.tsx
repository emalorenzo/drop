import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { cn } from "../lib/utils"
import { type ButtonProps, buttonVariants } from "./button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
	<nav aria-label="pagination" className={cn("flex justify-center mx-auto w-full", className)} {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
	({ className, ...props }, ref) => (
		<ul ref={ref} className={cn("flex flex-row gap-1 items-center", className)} {...props} />
	),
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
	isActive?: boolean
} & Pick<ButtonProps, "size"> &
	React.ComponentProps<"a">

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
	<a
		aria-current={isActive ? "page" : undefined}
		className={cn(
			buttonVariants({
				variant: isActive ? "outline" : "ghost",
				size,
			}),
			"font-sans text-sm font-normal normal-case border-border",
			className,
		)}
		{...props}
	/>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, size = "default", ...props }: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink aria-label="Go to previous page" size={size} className={cn("gap-1 pl-2.5", className)} {...props}>
		<ChevronLeft className="w-[15px] h-[15px] text-accent-foreground" />
		<span className="text-[20px] leading-7">Previous</span>
	</PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, size = "default", ...props }: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink aria-label="Go to next page" size={size} className={cn("gap-1 pr-2.5", className)} {...props}>
		<span className="text-[20px] leading-7">Next</span>
		<ChevronRight className="w-4 h-4" />
	</PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
	<span aria-hidden className={cn("flex justify-center items-center w-9 h-9", className)} {...props}>
		<MoreHorizontal className="w-4 h-4" />
		<span className="sr-only">More pages</span>
	</span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
}
