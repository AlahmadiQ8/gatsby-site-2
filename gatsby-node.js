const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const PagesLinkExtractor = require('./gatsby/pagesLinkExractor')

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)/

let images

const folders = ['posts', 'wiki']

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

  const pagesLinkExtractor = new PagesLinkExtractor(
    allMarkdown.data.allMarkdownRemark.edges
  )
  const pages = allMarkdown.data.allMarkdownRemark.edges.filter(
    edge => !folders.some(str => edge.node.fields.slug.includes(str))
  )
  pages.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      path: slug,
      component: blogTemplate,
      context: {
        slug,
        images,
        type: 'page',
      },
    })
  })

  const blogLinks = pagesLinkExtractor.getPages('posts')
  blogLinks.forEach(({ slug, next, previous }) => {
    createPage({
      path: slug,
      component: blogTemplate,
      context: {
        slug,
        images,
        previous,
        next,
        type: 'post',
      },
    })
  })

  const wikiLinks = pagesLinkExtractor.getPages('wiki')
  wikiLinks.forEach(({ slug, next, previous }) => {
    createPage({
      path: slug,
      component: blogTemplate,
      context: {
        slug,
        images,
        previous,
        next,
        type: 'wiki',
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
    const folder = folders.find(str => filePath.includes(str))
    if (folder != null) {
      const match = BLOG_POST_FILENAME_REGEX.exec(filePath)
      const year = match[1]
      const month = match[2]
      const day = match[3]
      const filename = match[4]
      if (!year || !month || !day || !filename) {
        throw Error(`blog markdown filename format is incorrect: ${filePath}`)
      }
      const slug = `/${folder}/${filename}`
      const date = new Date(Number(year), Number(month) - 1, Number(day))
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
