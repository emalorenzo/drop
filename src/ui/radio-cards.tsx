import { cn } from "../lib/utils"
import { FormControl, FormItem, FormLabel } from "./form"
import { RadioGroupItem } from "./radio-group"

interface Props extends React.PropsWithChildren {
	value: string
	disabled?: boolean
}

export function RadioCardItem(props: Props) {
	return (
		<FormItem>
			<FormLabel className="[&:has([data-state=checked])>div]:border-primary">
				<FormControl>
					<RadioGroupItem disabled={props.disabled} value={props.value} className="sr-only" />
				</FormControl>
				<div
					className={cn(
						"items-center rounded-lg border-2 border-muted hover:border-accent p-3 space-y-2",
						props.disabled && "opacity-50",
					)}
				>
					{props.children}
				</div>
			</FormLabel>
		</FormItem>
	)
}
