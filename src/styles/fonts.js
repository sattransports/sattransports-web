import { Kanit as MainFont } from "next/font/google"; // Importing the 'Kanit' font from Google fonts via Next.js font loader

// Setting up the font style with a specific weight (400) and subset (latin)
const outfit = MainFont({
  weight: ["400"], // Using only the 400 (regular) weight
  subsets: ["latin"], // Limiting to the 'latin' subset
});

// Creating an object to hold the font class name for easy usage across the app
const fonts = {
  mainFont: outfit.className, // Storing the className from the font configuration
};

export default fonts; // Exporting the font configuration for use in other parts of the app
