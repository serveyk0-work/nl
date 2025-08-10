import {
  Outfit,
  Mulish,
  Syne,
  Poppins,
  Roboto,
  Montserrat,
} from "next/font/google";

export const OutfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const MulishFont = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
export const SyneFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400"],
});

export const PoppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
});

export const RobotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400"],
});

export const MontserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});
