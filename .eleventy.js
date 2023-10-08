const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("{,!(_site)/**/}*.png");
  eleventyConfig.addPassthroughCopy("src/prism.css");
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