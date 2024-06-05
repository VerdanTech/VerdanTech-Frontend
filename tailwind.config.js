const { createPlugin } = require('windy-radix-palette');

const colors = createPlugin();

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [colors.plugin, require('@tailwindcss/container-queries')],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				neutral: colors.alias('olive'),
				primary: colors.alias('grass'),
				accent: colors.alias('amber'),
				descructive: colors.alias('tomato'),
				warning: colors.alias('cyan'),
				success: colors.alias('mint')
			}
		}
	}
};

export default config;
