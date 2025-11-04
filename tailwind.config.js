/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF7',
        foreground: '#1E1E1C',
        rule: '#E6E2DA',
        charcoal: '#2A2A27',
        fitness: '#E86A33',
        eco: '#2F855A',
        tech: '#3A6EA5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1': ['42px', { lineHeight: '1.2' }],
        'h2': ['30px', { lineHeight: '1.3' }],
        'h3': ['22px', { lineHeight: '1.4' }],
        'body': ['18px', { lineHeight: '1.6' }],
      },
      spacing: {
        'base': '8px',
      },
      maxWidth: {
        'container': '1160px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
