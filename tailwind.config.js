/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				charcoal: "#3E505B",
				violet: "#554162",
				main: "#CFD7C7",
				sunglow: "#ffd046",
				olive: "#1f271b",
				darkpurple: "#331e38",
				neonblue: "#4361ee",
				rose: "#f72585",
			},
			screens: {
				xs: { max: "330px" },
			},
		},
	},
	plugins: [require("tailwindcss-debug-screens")],
};
