/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
        textPrimary: "var(--text)",
        muted: "var(--muted)",
        borderLine: "var(--border)",
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, var(--accent), var(--accent2))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
