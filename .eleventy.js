module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("{,!(_site)/**/}*.png");
  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      markdownTemplateEngine: "njk",
      output: "_site",
    }
  }
};