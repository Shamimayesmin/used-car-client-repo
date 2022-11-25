/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	themes: [
		{
			mytheme: {
				primary: "#5099b2",

				secondary: "#54d3a2",

				accent: "#b7eef7",

				neutral: "#251A2D",

				"base-100": "#FCFCFD",

				info: "#9AC8DF",

				success: "#166041",

				warning: "#D9A408",

				error: "#E43C1B",
			},
		},
	],
	plugins: [require("daisyui")],
};
