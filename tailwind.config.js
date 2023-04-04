/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1F2937",
				darkBg: "#111827",
				secdarkBg: "#374151",
				lightBg: "#FDFDFD",
				card: "#F3F4F6",
				fontclr: "#ffffff",
				greenclr: "#1BB55C",
				paraclr: "#485776",
			},
		},
	},
	plugins: [],
};
