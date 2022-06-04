module.exports = {
  darkMode: 'media',
  theme: {
    ripple: theme => ({
      colors: theme('colors')
  }),
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      transitionProperty: {
        'width': 'width'
    },
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0'
            },
            '100%': {
                opacity: '1'
            },
        }
    },
    animation: {
        'fade-in': 'fade-in 0.5s ease-in',
    }
,
      colors: {
        primary: {
          300: "#4caf50",
          500: "#1565c0",
          800: "#003c8f",
        }
      },
    },
  },
  plugins: [    require('@tailwindcss/forms'),
  require('tailwindcss-ripple')()

],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
