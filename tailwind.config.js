/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FCF9F3',
          DEFAULT: '#F8F1E7',
          dark: '#EFE2D0',
        },
        beige: {
          light: '#EFE5D8',
          DEFAULT: '#E5D0B5',
          dark: '#D4BCA0',
        },
        brown: {
          DEFAULT: '#5A351B',
          dark: '#3C2210',
          light: '#8A6240',
          warm: '#754728',
          muted: '#9E785D',
        },
        cinnamon: '#A05A2C',
        caramel: '#C88E4B',
        parchment: '#FAF5ED',
        ivory: '#FFFDF9',
        sage: {
          light: '#E9EFE3',
          DEFAULT: '#6B7D58',
          dark: '#4F5E40',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.6rem, 5.5vw, 4.8rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.14', letterSpacing: '-0.015em' }],
        'subheading': ['clamp(1.4rem, 2.5vw, 2.1rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(90, 53, 27, 0.08), 0 0 0 1px rgba(90, 53, 27, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(90, 53, 27, 0.16), 0 0 0 1px rgba(90, 53, 27, 0.06)',
        'soft': '0 4px 20px -2px rgba(90, 53, 27, 0.05)',
        'float': '0 25px 50px -12px rgba(90, 53, 27, 0.2)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
