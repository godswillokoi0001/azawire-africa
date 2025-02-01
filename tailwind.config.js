module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Include all files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13409A',
        black: '#000000',
        secondary: '#06D6A0',
        variant: '#031335',
        privariant: '#00072D',
        accent: '#ffffff'  
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins
        clash: ["Clash Display", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};

