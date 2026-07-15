/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        brand: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#003366", // Dark Navy
          600: "#001f3f", // Pure Dark Navy
          700: "#001830",
          800: "#001122",
          900: "#000811",
          950: "#000000",
        },
        accent: {
          saffron: "#f97316",
          amber: "#f59e0b",
          teal: "#0d9488",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
