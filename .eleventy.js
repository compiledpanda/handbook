module.exports = function(eleventyConfig) {
  return {
    dir: {
      data: "_data",
      input: ".",
      includes: "_includes",
      markdownTemplateEngine: "njk",
      output: "_site",
    }
  }
};