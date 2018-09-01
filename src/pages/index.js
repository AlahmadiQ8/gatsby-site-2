import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import { getPosts } from '../utils/dataExtractors'
import Layout from '../layout'
import Hr from '../components/separator'
import Jumbotron from '../components/jumbotron'
import PostsSection from '../components/postsSection'
import ProjectsSection from '../components/projectsSection'

const IndexPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = getPosts(props)

  return (
    <Layout>
      <Jumbotron />
      <Hr />
      <PostsSection posts={posts} />
      <Hr />
      <ProjectsSection />
      {/* <h1>Hi people</h1>
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
      })} */}
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
          id
          fields {
            slug
            date
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`
