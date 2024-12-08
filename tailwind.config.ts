import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import { colors } from "./src/styles/colors";
import { easings } from "./src/styles/easings";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1920px",
      },
      colors: {
        ...colors,
        border: {
          DEFAULT: colors.gray[200],
          strong: colors.gray[400],
        },
        background: colors.white,
        foreground: colors.black,
        input: colors.gray[300],
        ring: colors.red[500],
        primary: {
          DEFAULT: colors.red[500],
          foreground: colors.white,
          border: colors.red[600],
        },
        secondary: {
          DEFAULT: colors.gray[500],
        },
        muted: {
          DEFAULT: colors.gray[200],
          foreground: colors.gray[600],
        },
        accent: {
          DEFAULT: colors.gray[100],
          foreground: colors.gray[900],
        },
        popover: {
          DEFAULT: colors.white,
          foreground: colors.black,
        },
        card: {
          DEFAULT: colors.white,
          foreground: colors.black,
        },
        success: {
          DEFAULT: colors.green[500],
          foreground: colors.white,
        },
        warning: {
          DEFAULT: colors.yellow[500],
          foreground: colors.black,
        },
        destructive: {
          DEFAULT: colors.black,
          foreground: colors.white,
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        lg: "0 4px 6px rgba(0, 0, 0, 0.09)",
      },
      fontFamily: {
        sans: ["var(--font)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)"],
      },
      transitionTimingFunction: {
        ...easings,
      },
    },
  },
  plugins: [animate],
} satisfies Config;
