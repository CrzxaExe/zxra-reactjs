/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      prime: '#0f172a',
      darkprime: '#020617',
      tprime: '#e2e8f0',
      tsec: '#2dd4bf',
      tter: '#64748b',
      nav: '#1e293b',
      navlogo: '#334155',
      active: '#22d3ee',
      inactive: '#fdba74'
    },
    container: {
      center: true
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      transitionProperty: {
        'aspect': 'aspect-ratio',
      },
    },
  },
  plugins: [],
}