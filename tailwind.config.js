import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      base: "0.875rem", // 14px
      lg: "1rem", // 16px
      xl: "1.125rem", // 18px
      "2xl": "1.25rem", // 20px
      "3xl": "1.5rem", // 24px
      "4xl": "1.75rem", // 28px
      "5xl": "2rem", // 32px
      "6xl": "2.5rem", // 40px
      "7xl": "3rem", // 48px
      "8xl": "3.75rem", // 60px
      "9xl": "4.5rem", // 72px (nuevo tamaño)
      "10xl": "6rem", // 96px (nuevo tamaño)
    },
    lineHeight: {
      9: '2.25rem', // 36px
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px", // tablet
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          '@screen sm': {
            fontSize: theme("fontSize.6xl"), 
          },
          '@screen md': {
            fontSize: theme("fontSize.8xl"), 
          },
          '@screen lg': {
            fontSize: theme("fontSize.9xl"), 
          },
          '@screen xl': {
            fontSize: theme("fontSize.10xl"), 
          },
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "700",
          '@screen sm': {
            fontSize: theme("fontSize.5xl"), // Size for small screens
          },
          '@screen md': {
            fontSize: theme("fontSize.6xl"), // Size for large screens
          },
          '@screen lg': {
            fontSize: theme("fontSize.7xl"), // Size for extra large screens
          },
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontWeight: "700",
          '@screen sm': {
            fontSize: theme("fontSize.4xl"), // Size for small screens
          },
          '@screen md': {
            fontSize: theme("fontSize.5xl"), // Size for large screens
          },
          '@screen lg': {
            fontSize: theme("fontSize.6xl"), // Size for extra large screens
          },
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "600",
          '@screen sm': {
            fontSize: theme("fontSize.3xl"), 
          },
          '@screen md': {
            fontSize: theme("fontSize.4xl"), 
          },
          '@screen lg': {
            fontSize: theme("fontSize.5xl"), 
          },
        },
        p: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "400",
        },
      });
    }),
  ],
};
