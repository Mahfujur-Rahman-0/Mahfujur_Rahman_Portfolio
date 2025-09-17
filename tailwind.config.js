/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			maskImage: {
				"radial-spotlight":
					"radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)",
			},
			screens: {
				"3xl": "1800px",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".mask-radial-spotlight": {
					maskImage:
						"radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)",
					WebkitMaskImage:
						"radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)",
				},
			});
		},
	],
};
