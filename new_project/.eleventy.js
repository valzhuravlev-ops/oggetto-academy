module.exports = function (eleventyConfig) {

  // Копирование статики без обработки
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "components",
      layouts: "layouts"
    }
  };
};