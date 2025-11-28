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
				'dark-grey': 'hsl(214, 17%, 51%)',
				'glass-white': 'rgba(255, 255, 255, 0.1)',
				'glass-dark': 'rgba(15, 23, 42, 0.6)'
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'sans-serif']
			},
			backgroundImage: {
				'pattern-header': "url('/assets/desktop/bg-pattern-header.svg')",
				'pattern-mobile-header': "url('/assets/mobile/bg-pattern-header.svg')",
				'pattern-tablet-header': "url('/assets/tablet/bg-pattern-header.svg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
			},
			boxShadow: {
				'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
			}
		}
	},
	plugins: []
};