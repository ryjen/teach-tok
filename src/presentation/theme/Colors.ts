export interface ThemeColors {
  foreground: string;
  background: string;
  playlistBackground: string;
  backgroundAlternate: string;
  foregroundAlternate: string;
  backgroundInverse: string;
  foregroundInverse: string;
  warning: string;
  error: string;
}

const commonColors = {
  error: "red",
  warning: "orange",
};

export const darkColors = <ThemeColors>{
  ...commonColors,
  backgroundInverse: "rgba(200,200,200, 0.75)",
  foregroundInverse: "black",
  foreground: "white",
  background: "black",
  backgroundAlternate: "rgba(52, 52, 52, 0.8)",
  foregroundAlternate: "white",
};

export const lightColors = <ThemeColors>{
  ...commonColors,
  backgroundInverse: "rgba(55, 55, 55, 0.75)",
  foregroundInverse: "white",
  foreground: "black",
  background: "white",
  backgroundAlternate: "rgba(200, 200, 200, 0.8)",
  foregroundAlternate: "black",
};
