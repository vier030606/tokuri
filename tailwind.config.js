/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFF1F2',        // Very light rose background
          primary: '#E11D48',   // Vibrant Rose
          secondary: '#FB7185', // Soft Pink
          cta: '#2563EB',       // Bright Blue
          yellow: '#FBBF24',    // Playful Yellow
          text: '#000000',      // Solid Black
          border: '#000000',    // Solid Black
          darkRose: '#881337'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.6rem, 5.5vw, 4.8rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'heading': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.4rem, 2.5vw, 2.1rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        '4xl': '0px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
