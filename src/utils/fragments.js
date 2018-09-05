import { graphql } from 'gatsby'

export const imagesFragment = graphql`
  fragment AllImages on ImageSharpConnection {
    edges {
      node {
        id
        fixed {
          base64
          tracedSVG
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`

export const projectsQuery = graphql`
  fragment AllProjects on ProjectsYamlConnection {
    edges {
      node {
        id
        name
        description
        image
        github
        post
      }
    }
  }
`
