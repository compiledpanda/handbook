const markdownIt = require('markdown-it');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// https://github.com/11ty/eleventy-plugin-syntaxhighlight/issues/38
const md = markdownIt({
  html: true,
});
md.renderer.rules.code_inline = (tokens, idx, { langPrefix = '' }) => {
  const token = tokens[idx];
  return `<code class="${langPrefix}">${token.content}</code>`;
};

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('md', md);
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