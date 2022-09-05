/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  primary: ['Raleway', 'sans-serif'],
		  secondary: ['Poppins', 'sans-serif']
		},
		extend: {
		  colors: {
			'primary': '#201191',
			'secondary': '#FF9F00',
			'tertiary': '#197278',
		  },
		}
	  },
	plugins: [],
}
