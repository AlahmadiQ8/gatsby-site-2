import get from 'just-safe-get'

export const getPosts = props =>
  get(props, 'data.allMarkdownRemark.edges').map(({ node }) => ({
    id: node.id,
    title: get(node, 'frontmatter.title'),
    slug: get(node, 'fields.slug'),
    timeToRead: node.timeToRead,
    date: get(node, 'fields.date'),
  }))
