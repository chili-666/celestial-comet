/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-olive': '#4C4B16',
				'olive': '#898121',
				'sand': '#E6C767',
				'salmon': '#F87A53',
				'hot-pink': '#FF69B4',
				'dark-purple': '#1F1A38',
				'ghost': '#F4F4F9',
				'dark-grey': '#717568'
			},
			fontFamily: {
				karla: ['Karla', 'sans-serif'],
				inconsolata: ['Inconsolata', 'sans-serif'],
			},
			fontSize: {
				'h2': '2rem', // You can change '2rem' to whatever size you want
			},
		},
	},
	plugins: [],
}
