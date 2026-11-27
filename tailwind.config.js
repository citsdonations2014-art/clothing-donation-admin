/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Screen sizes for different devices.
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },

      // Fluid sizes scale from mobile through laptop to desktop widths.
      // Use with utilities such as `text-display`, `text-heading-1`, or `text-body`.
      fontSize: {
        display: [
          "clamp(2.5rem, 1.75rem + 2.5vw, 4.5rem)",
          { lineHeight: "1.1" },
        ],
        "heading-1": [
          "clamp(2rem, 1.5rem + 1.5vw, 3rem)",
          { lineHeight: "1.15" },
        ],
        "heading-2": [
          "clamp(1.5rem, 1.25rem + 0.8vw, 2rem)",
          { lineHeight: "1.25" },
        ],
        "heading-3": [
          "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)",
          { lineHeight: "1.3" },
        ],
        body: ["clamp(1rem, 0.95rem + 0.2vw, 1.125rem)", { lineHeight: "1.6" }],
        small: [
          "clamp(0.875rem, 0.84rem + 0.12vw, 1rem)",
          { lineHeight: "1.5" },
        ],
      },
    },
  },
};
