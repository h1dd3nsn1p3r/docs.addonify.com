import type { Config } from "tailwindcss";

export default {
	content: [
		"./theme.config.tsx",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["DM Mono", "monospace"],
				serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
				system: ["Helvetica", "Arial", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
	darkMode: "class",
} satisfies Config;
