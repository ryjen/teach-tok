type SchemeName = "dark" | "light";

export interface Scheme {
  name: SchemeName;
  inverse: SchemeName;
}

const getScheme = (): SchemeName => {
  // TODO: enable theme from image brightness or from device
  //const result = Appearance.getColorScheme();
  return "dark";
};

const getInverse = (): SchemeName =>
  getScheme() === "dark" ? "light" : "dark";

export default <Scheme>{
  name: getScheme(),
  inverse: getInverse(),
};
