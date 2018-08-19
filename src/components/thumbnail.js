import React from 'react'
import styled from 'react-emotion'
import withProps from 'recompose/withProps'
import Box from './grid/Box'
import photo from '../images/my-photo.jpg'

const RADIUS = 20

const Img = withProps({
  borderRadius: RADIUS,
})(styled(Box.withComponent('img'))())

const ImgWrapper = styled(Box)`
  background: ${props => props.theme.colors.gradient1};
`

export default ({ img = photo, borderWidth = [2, 3], ...props }) => (
  <ImgWrapper
    p={borderWidth}
    borderRadius={RADIUS}
    alignSelf="start"
    justifySelf="center"
    {...props}
  >
    <Img src={img} className="img-fluid" alt="Responsive" />
  </ImgWrapper>
)
