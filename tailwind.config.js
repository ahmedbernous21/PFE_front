/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: {
		enabled: true,
		content: ['./src/**/*.{html,ts}']
	},
	theme: {
	  extend: {
		colors: {
			'agroGreen': '#A7D397',
			'agroYellow': '#F5EEC8',
			'agroGrey': '#D0D4CA',
			'agroBrown': '#555843',
		  },
	  },
	},
	plugins: [],
  }