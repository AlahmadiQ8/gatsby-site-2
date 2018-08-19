import styled from 'react-emotion'
import {
  width,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borders,
} from 'styled-system'

const Box = styled('div')`
  ${width}
  ${space}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
`

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}

Box.displayName = 'Box'

export default Box
