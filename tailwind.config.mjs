/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-olive': '#4C4B16',
				'olive': '#898121',
				'sand': '#E6C767',
				'salmon': '#F87A53'
			},
			fontFamily: {
				karla: ['Karla', 'sans-serif'],
				inconsolata: ['Inconsolata', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
