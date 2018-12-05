const get = require('just-safe-get')

class PagesLinkExtractor {
  constructor(edges) {
    this.edges = edges
  }

  getPages(directory) {
    return this.edges
      .filter(edge => get(edge, 'node.fields.slug').includes(`${directory}/`))
      .map((edge, index) => {
        const { slug } = edge.node.fields
        const previous =
          index === this.edges.length - 1 ||
          !this.edges[index + 1].node.fields.slug.includes(directory)
            ? null
            : this.edges[index + 1].node
        const next =
          index === 0 ||
          !this.edges[index - 1].node.fields.slug.includes(directory)
            ? null
            : this.edges[index - 1].node
        return {
          slug,
          next,
          previous,
        }
      })
  }
}

module.exports = PagesLinkExtractor
