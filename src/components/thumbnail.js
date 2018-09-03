import React from 'react'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import withProps from 'recompose/withProps'
import ImgProccessor from 'gatsby-image'
import { getImageFixed } from '../utils/dataExtractors'
import Box from './grid/Box'

const RADIUS = 20

const ImgContainer = withProps({
  mb: 0,
  maxWidth: '100%',
  height: 'auto',
})(styled(Box.withComponent('div'))())

export const Img = ({ img, ...props }) => {
  return (
    <ImgContainer {...props}>
      {img && <ImgProccessor fixed={img} />}
    </ImgContainer>
  )
}

const ImgWrapper = styled(Box)`
  background: ${props => props.theme.colors.gradient1};
  height: auto;
`

export default ({ borderWidth = [2, 3], ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp(
          filter: { fluid: { originalName: { regex: "/my-photo.jpg/" } } }
        ) {
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
            }
          }
        }
      }
    `}
    render={data => {
      const myPhoto = getImageFixed(data)
      return (
        <ImgWrapper
          p={borderWidth}
          borderRadius={RADIUS}
          alignSelf="start"
          justifySelf="center"
          {...props}
        >
          <Img img={myPhoto} borderRadius={RADIUS} alt="Responsive" />
        </ImgWrapper>
      )
    }}
  />
)
