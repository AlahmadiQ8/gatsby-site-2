import React from 'react'
import { graphql, Link } from 'gatsby'

import { getMarkdownPages } from '../utils/dataExtractors'
import Layout from '../layout'
import PostsSection from '../components/postsSection'

const Wikis = props => {
  const posts = getMarkdownPages(props)

  return (
    <Layout pageData={props.data}>
      <PostsSection
        title="Personal Wiki"
        posts={posts}
        containerStyles={{ py: [3, 4], gridRowGap: ['30px'] }}
      />
    </Layout>
  )
}

export default Wikis

export const pageQuery = graphql`
  query WikiQuery($images: [String]!) {
    allImageSharp(filter: { fixed: { originalName: { in: $images } } }) {
      ...AllImages
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/wiki/" } } }
    ) {
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
