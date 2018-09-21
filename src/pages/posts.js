import React from 'react'
import { graphql, Link } from 'gatsby'

import { getPosts } from '../utils/dataExtractors'
import Layout from '../layout'
import PostsSection from '../components/postsSection'

const Posts = props => {
  const posts = getPosts(props)

  return (
    <Layout pageData={props.data}>
      <PostsSection
        posts={posts}
        containerStyles={{ py: [3, 4], gridRowGap: ['30px'] }}
      />
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query PostsQuery($images: [String]!) {
    allImageSharp(filter: { fixed: { originalName: { in: $images } } }) {
      ...AllImages
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/posts/" } } }
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
