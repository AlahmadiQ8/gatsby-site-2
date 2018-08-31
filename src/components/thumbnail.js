import React from 'react'
import styled from 'react-emotion'
import withProps from 'recompose/withProps'
import Box from './grid/Box'
import photo from '../images/my-photo.jpg'

const RADIUS = 20

export const Img = withProps({
  mb: 0,
  maxWidth: '100%',
  height: 'auto',
})(styled(Box.withComponent('img'))())

const ImgWrapper = styled(Box)`
  background: ${props => props.theme.colors.gradient1};
  height: auto;
`

export default ({ img = photo, borderWidth = [2, 3], ...props }) => (
  <ImgWrapper
    p={borderWidth}
    borderRadius={RADIUS}
    alignSelf="start"
    justifySelf="center"
    {...props}
  >
    <Img src={img} borderRadius={RADIUS} alt="Responsive" />
  </ImgWrapper>
)