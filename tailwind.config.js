// https://www.skcript.com/blog/disable-tailwind-prose-code
const disabledCSS = {
	'code::before': false,
	'code::after': false,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
			typography: {
				DEFAULT: { css: disabledCSS },
				sm: { css: disabledCSS },
				lg: { css: disabledCSS },
				xl: { css: disabledCSS },
				'2xl': { css: disabledCSS },
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

