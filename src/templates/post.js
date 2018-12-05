import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'just-safe-get'
import styles from '../utils/contentStyles'
import Box from '../components/grid/Box'
import Layout from '../layout'
import PostMeta from '../components/postMeta'

const H1 = Box.withComponent('h1')

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next, type } = this.props.pageContext
    return (
      <Layout bg="white" pageData={this.props.data}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Box
          my="0"
          bg="white"
          maxWidth={[1000]}
          mx="auto"
          pt={[4, 4, null, 4]}
          textAlign="center"
        >
          {type === 'post' && (
            <PostMeta
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
              pb={[3, 3, null, 4]}
              justifyContent="center"
            />
          )}
          <H1 fontSize={[5, 5, null, 6]} mt="0" mb={['30px', '38px']}>
            {post.frontmatter.title}
          </H1>
        </Box>
        Î
        <Box
          my="0"
          bg="white"
          maxWidth={[740]}
          mx="auto"
          px="3"
          pb={[3, 4, null, 5]}
        >
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
  query BlogPostBySlug($slug: String!, $images: [String]!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allImageSharp(filter: { fixed: { originalName: { in: $images } } }) {
      ...AllImages
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
