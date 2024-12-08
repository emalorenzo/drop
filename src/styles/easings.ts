import type { ThemeConfig } from "tailwindcss/types/config"

export const easings: ThemeConfig["transitionTimingFunction"] = {
	"in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
	"in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
	"in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	"in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
	"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
	"in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
	"out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
	"out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
	"out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
	"out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
	"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
	"out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
	"in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
	"in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
	"in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
	"in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
	"in-out-expo": "cubic-bezier(1, 0, 0, 1)",
	"in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
}