import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'just-safe-get'
import styles from '../utils/contentStyles'
import Box from '../components/grid/Box'
import Layout from '../layout'

const H1 = Box.withComponent('h1')

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Box my="0" mx="0" bg="white">
          <Box
            my="0"
            bg="white"
            maxWidth={[740]}
            mx="auto"
            px="3"
            py={[3, 4, null, 5]}
          >
            <H1 fontSize={[5, 5, null, 6]} mt="0">
              {post.frontmatter.title}
            </H1>
            {/* <p
              style={{
                display: 'block',
              }}
            >
              {post.frontmatter.date}
            </p> */}
            <div
              className={styles}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Box>
        </Box>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
