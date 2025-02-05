/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        llbrown: "#5C3516",
        llblack: "#3A3A3A",
        llcream: "#F0E2D5",
        llbeige: "#CEC2AC",
      },

      fontFamily:{
        bodyFont: ["var(--font-body)"],
        headingFont:["var(--font-heading)"],
      },
         backgroundImage: {
        "hero-bg": "url('/villa-images/mint-villa-2.webp')",
        "featured-bg":"url('/villa-images/Mint Villa-19.webp')",
        "mint-hero":"url('/villa-images/Mint Villa-21.webp')",
        "booking-hero":"url('/villa-images/Mint Villa-11.webp')",
        "salt-hero":"url('/villa-images/salt-villa/salt_villa_1.jpeg')"
      },

    },
  },
  plugins: [],
};
