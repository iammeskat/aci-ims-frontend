/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/app/*.{js,jsx}",
		"./src/app/**/*.{js,jsx}",
		"./src/components/*.{js,jsx}",
		"./src/components/**/*.{js,jsx}",
		"./src/views/*.{js,jsx}",
		"./src/views/**/*.{js,jsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				"2xl": "1600px",
			},
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			screens: {
				"s456": "456px",
				"mdx": "850px",
			},
		},
	},
	plugins: [],
};
