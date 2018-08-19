import styled from 'react-emotion'
import {
  width,
  maxWidth,
  minWidth,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borders,
  borderRadius,
  borderColor,
  justifySelf,
  style,
} from 'styled-system'

const gridArea = style({
  prop: 'gridArea',
  cssProperty: 'gridArea',
})

const Box = styled('div')`
  ${width};
  ${space};
  ${fontSize};
  ${color};
  ${flex};
  ${order};
  ${alignSelf};
  ${borders};
  ${borderRadius};
  ${borderColor};
  ${gridArea};
  ${maxWidth};
  ${minWidth};
  ${justifySelf};
`

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...justifySelf.propTypes,
}

Box.displayName = 'Box'

export default Box
