/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#165DFF", // 领星/企业级常用蓝色
          foreground: "#FFFFFF",
          50: '#E8F3FF',
          100: '#D1E5FF',
          200: '#A3CCFF',
          300: '#75B3FF',
          400: '#4799FF',
          500: '#165DFF',
          600: '#0E42D2',
          700: '#082DA6',
        },
        secondary: {
          DEFAULT: "#F2F3F5",
          foreground: "#1D2129",
        },
        success: "#00B42A",
        warning: "#FF7D00",
        danger: "#F53F3F",
        muted: {
          DEFAULT: "#86909C",
          foreground: "#4E5969",
        },
      },
      boxShadow: {
        'erp': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'erp-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
