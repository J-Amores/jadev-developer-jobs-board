const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Light theme colors
				'primary-light': colors.blue[600],
				'secondary-light': colors.slate[200],
				'accent-light': colors.blue[800],
				'text-light': colors.slate[900],
				'bg-light': colors.white,
				'border-light': colors.slate[300],

				// Dark theme colors
				'primary-dark': colors.blue[400],
				'secondary-dark': colors.slate[700],
				'accent-dark': colors.blue[300],
				'text-dark': colors.slate[100],
				'bg-dark': colors.slate[900],
				'border-dark': colors.slate[600]
			}
		}
	},
	plugins: []
};