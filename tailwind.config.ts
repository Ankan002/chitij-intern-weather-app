import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				quicksand: "'Quicksand', sans-serif",
				manrope: "'Manrope', sans-serif",
				"fira-code": "'Fira Code', monospace",
				muli: "'muli', sans-serif",
				oxanium: "'Oxanium', cursive",
			},
			colors: {
				"primary-light": "#FFFFFF",
				"secondary-light": "#FBFBFB",
				"primary-dark": "#232735",
				"primary-gray": "#E0E1E6",
			},
			backgroundImage: {
				mainBg: "url('/some.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
