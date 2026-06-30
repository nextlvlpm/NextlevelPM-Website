module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets":"assets"});
  eleventyConfig.addPassthroughCopy({"admin":"admin"});
  eleventyConfig.addPassthroughCopy("_headers");
  return {
    dir: { input: "src", output: "dist", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
