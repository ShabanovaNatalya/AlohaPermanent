module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 12px)',
				xs: 'calc(var(--radius) - 16px)',
				xss: 'calc(var(--radius) - 20px)',
			},
			colors: {
				background: 'hsl(var(--background))',

				common: {
					black: 'hsl(var(--common-black))',
					white: 'hsl(var(--common-white))',
				},
				primaryText: 'hsl(var(--grey-800))', 
				secondaryText: 'hsl(var(--grey-600))',
			},
			fontFamily: {
				sans: ['NunitoSans', ...defaultTheme.fontFamily.sans],
				manrope: ['Forum', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}