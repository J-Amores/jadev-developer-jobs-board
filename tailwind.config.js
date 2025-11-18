/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				violet: 'hsl(235, 69%, 61%)',
				'light-violet': 'hsl(235, 82%, 77%)',
				'very-dark-blue': 'hsl(219, 29%, 14%)',
				midnight: 'hsl(220, 29%, 10%)',
				'light-grey': 'hsl(212, 23%, 89%)',
				grey: 'hsl(210, 22%, 49%)',
				'dark-grey': 'hsl(214, 17%, 51%)'
			},
			backgroundImage: {
				'pattern-header': "url('/assets/desktop/bg-pattern-header.svg')",
				'pattern-mobile-header': "url('/assets/mobile/bg-pattern-header.svg')",
				'pattern-tablet-header': "url('/assets/tablet/bg-pattern-header.svg')"
			}
		}
	},
	plugins: []
};