const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  const blogTemplate = path.resolve(__dirname, './src/templates/post.js')

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields

    let template
    if (slug.includes('blog/')) {
      template = blogTemplate
    }

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode })
    if (filePath.includes('blog')) {
      const match = BLOG_POST_FILENAME_REGEX.exec(filePath)
      const year = match[1]
      const month = match[2]
      const day = match[3]
      const filename = match[4]
      if (!year || !month || !day || !filename) {
        throw Error(`blog markdown filename format is incorrect: ${filePath}`)
      }
      const slug = `/blog/${filename}`
      const date = new Date(year, month - 1, day)
      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      })
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    }
  }
}
