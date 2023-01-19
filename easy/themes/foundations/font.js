import { Source_Sans_Pro, DM_Sans } from "@next/font/google";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const DMSans = DM_Sans({
  weight: ["700", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export const fonts = {
  sourceSansPro: sourceSansPro.style.fontFamily,
  dmSans: DMSans.style.fontFamily,
};
