import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "./foundations";

const overrides = {
  colors,
  fonts,
};

export default extendTheme(overrides);
