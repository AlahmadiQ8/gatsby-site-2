import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { getMarkdownPages } from '../utils/dataExtractors'
import Layout from '../layout'
import Hr from '../components/separator'
import Jumbotron from '../components/jumbotron'
import PostsSection from '../components/postsSection'
import ProjectsSection from '../components/projectsSection'

const IndexPage = props => {
  const posts = getMarkdownPages(props).filter(node => {
    return node.slug.includes('posts/')
  })
  const wikis = getMarkdownPages(props).filter(node => {
    return node.slug.includes('wiki/')
  })
  return (
    <Layout pageData={props.data}>
      <Jumbotron pageData={props.data} />
      <Hr />
      <PostsSection posts={posts} />
      <Hr />
      <ProjectsSection pageData={props.data} />
      <Hr />
      <PostsSection title="Personal Wiki" posts={wikis} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery($images: [String]!) {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp(filter: { fixed: { originalName: { in: $images } } }) {
      ...AllImages
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
