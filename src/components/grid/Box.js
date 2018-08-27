import styled from 'react-emotion'
import {
  width,
  maxWidth,
  minWidth,
  maxHeight,
  space,
  fontSize,
  fontWeight,
  color,
  flex,
  order,
  alignSelf,
  borders,
  borderRadius,
  borderColor,
  justifySelf,
  textAlign,
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
  ${fontWeight};
  ${textAlign};
  ${maxHeight};
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
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...maxHeight.propTypes,
}

Box.displayName = 'Box'

export default Box
