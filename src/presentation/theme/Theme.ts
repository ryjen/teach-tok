import type { ThemeColors } from "./Colors";
import type { Scheme } from "./Scheme";

import { darkColors, lightColors } from "./Colors";
import scheme from "./Scheme";

export interface Theme {
  colors: ThemeColors;
  scheme: Scheme;
}

export default <Theme>{
  colors: scheme.name !== "light" ? darkColors : lightColors,
  scheme,
};
