export default {
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
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "serif"],
        clash: ["Clash Display", "san serif"]
      },
    },
  },
  plugins: [],
};

