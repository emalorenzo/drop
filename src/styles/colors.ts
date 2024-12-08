import type { ThemeConfig } from "tailwindcss/types/config"

export const colors = {
	white: "#ffffff",
	black: "#000000",
	gray: {
		50: "#f9f9f9",
		100: "#f2f2f2",
		200: "#e6e6e6",
		300: "#d1d1d1",
		400: "#b8b8b8",
		500: "#adadad",
		600: "#777777",
		700: "#444444",
		800: "#2c2c2c",
		900: "#171717",
	},
	red: {
		50: "#ffeff1",
		100: "#ffd6d9",
		200: "#ffb0b7",
		300: "#ff8a94",
		400: "#ff6170",
		500: "#f83b4f",
		600: "#e51a2f",
		700: "#c11426",
		800: "#9d0f1e",
		900: "#7a0a15",
	},
	green: {
		50: "#e6f7ec",
		100: "#c1ecd2",
		200: "#9de2b9",
		300: "#78d7a0",
		400: "#54cc86",
		500: "#2ecc71",
		600: "#00b16a",
		700: "#009d5d",
		800: "#008950",
		900: "#007544",
	},
	yellow: {
		50: "#fff8e1",
		100: "#ffedb5",
		200: "#ffe28a",
		300: "#ffd75f",
		400: "#ffcc34",
		500: "#ffd700",
		600: "#ffc300",
		700: "#ffb200",
		800: "#ffa100",
		900: "#ff9000",
	},
} satisfies ThemeConfig["colors"]