module.exports = {
  eleventyNavigation: {
    key: data => data.title,
    parent: data => data.parent,
    order: data => data.page.url === '/'? 0 : 1,
  }
};