import { Kanit as MainFont } from "next/font/google";

const outfit = MainFont({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  mainFont: outfit.className,
};
export default fonts;
