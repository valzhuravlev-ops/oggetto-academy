const bundlePlugin = require("@11ty/eleventy-plugin-bundle");

module.exports = function (eleventyConfig) {
  // Бандлинг CSS и JS из компонентов
  eleventyConfig.addPlugin(bundlePlugin.default);

  // Копирование статики без обработки
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "components",
      layouts: "layouts",
    },
  };
};
