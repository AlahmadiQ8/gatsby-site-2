import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import { getImageFluid } from '../utils/dataExtractors'
import Box from './grid/Box'

const RADIUS = 20

const ImgWrapper = styled(Box)`
  background: ${props => props.theme.colors.gradient1};
`

export default ({ borderWidth = [2, 3], pageData, ...props }) => {
  return (
    <ImgWrapper
      p={borderWidth}
      borderRadius={RADIUS}
      alignSelf="start"
      justifySelf="center"
      {...props}
    >
      <Img
        fluid={getImageFluid(pageData, 'my-photo.jpg')}
        alt="Responsive"
        style={{ borderRadius: RADIUS }}
      />
    </ImgWrapper>
  )
}
