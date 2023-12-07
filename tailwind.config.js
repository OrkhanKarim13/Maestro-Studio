/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        '1': '0.01', 
      },
      backdropBlur: {
        '12': '12.4px', 
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-opacity-1': {
          'background-color': 'rgba(255, 255, 255, var(--background-opacity-1))',
        },
        '.backdrop-blur-12': {
          'backdrop-filter': 'blur(var(--backdrop-blur-12))',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
}

