import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../layout'

const IndexPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
