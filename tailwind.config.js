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
      animation: {
        blob: "blob 10s infinite",
        blob: "blob 10s infinite",
      },
      fontFamily: {
        aspekta: ['aspekta', 'sans-serif'],
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
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

