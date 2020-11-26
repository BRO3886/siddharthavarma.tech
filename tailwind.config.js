module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			cabin: ["Cabin"],
		},
		transitionDuration: {
			0: "0ms",
			100: "100ms",
			200: "200ms",
			300: "300ms",
			400: "400ms",
			500: "500ms",
			600: "600ms",
			700: "700ms",
			800: "800ms",
			900: "900ms",
			1000: "1000ms",
			1100: "1100ms",
			1200: "1200ms",
			1300: "1300ms",
			1400: "1400ms",
			1500: "1500ms",
			2000: "2000ms",
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		fontWeight: {
			hairline: "100",
			thin: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		extend: {
			colors: {
				blue: "#2B8BFC",
				lightblue: "#D3E7FF",
				black: "#000000",
				grey: "#C4C4C4",
				darkgrey: "#6B6B6B",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
