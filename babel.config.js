module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@presentation": "./src/presentation",
            "@domain": "./src/domain",
            "@application": "./src/application",
            "@data": "./src/data",
            "@feature": "./src/feature",
          },
        },
      ],
    ],
  };
};
