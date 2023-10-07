import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'dark-gray': '#0F0F0F',
			'gray': '#222222',
			'light-gray': '#3D3D3D',
			'off-white': '#F8F8F8',
		},
	},
	plugins: [],
}
export default config
