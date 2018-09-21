import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import ProjectSection from '../components/projectsSection'

const Projects = props => {
  return (
    <Layout pageData={props.data}>
      <ProjectSection
        pageData={props.data}
        containerStyles={{ py: [3, 4], gridRowGap: ['30px'] }}
      />
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery($images: [String]!) {
    allImageSharp(filter: { fixed: { originalName: { in: $images } } }) {
      ...AllImages
    }
  }
`
