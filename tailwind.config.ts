import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        'warm-brown': '#6b4f3a',
        sage: '#8a9e8a',
        blush: '#e8d5cb',
        charcoal: '#2c2c2c',
      },
    },
  },
  plugins: [],
}

export default config
