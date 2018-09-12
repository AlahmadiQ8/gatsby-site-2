const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)/

let images

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(
    `
      {
        allImageSharp {
          edges {
            node {
              fixed {
                originalName
              }
            }
          }
        }
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

  images = allMarkdown.data.allImageSharp.edges.map(({ node }) => {
    return node.fixed.originalName
  })

  const posts = allMarkdown.data.allMarkdownRemark.edges
  posts.forEach((edge, index) => {
    const { slug } = edge.node.fields
    const previous =
      index === posts.length - 1 ||
      !posts[index + 1].node.fields.slug.includes('posts')
        ? null
        : posts[index + 1].node
    const next =
      index === 0 || !posts[index - 1].node.fields.slug.includes('posts')
        ? null
        : posts[index - 1].node

    let template
    // if (slug.includes('posts/')) {
    template = blogTemplate // for now, use template for all md docs
    // }
    createPage({
      path: slug,
      component: template,
      context: {
        slug,
        images,
        previous,
        next,
        type: slug.includes('posts/') ? 'post' : null,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  deletePage(oldPage)
  createPage({ ...page, context: { ...page.context, images } })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
      const slug = `/posts/${filename}`
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
    } else {
      const slug = `/${filePath}`
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    }
  }
}
