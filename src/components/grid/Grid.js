import styled from 'react-emotion'
import {
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  alignItems,
  justifyContent,
  style,
} from 'styled-system'

import Box from './Box'

const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
  cssProperty: 'gridTemplateAreas',
})

const Grid = styled(Box)`
  display: grid;
  ${gridGap};
  ${gridRowGap};
  ${gridColumnGap};
  ${gridColumn};
  ${gridRow};
  ${gridAutoFlow};
  ${gridAutoRows};
  ${gridAutoColumns};
  ${gridTemplateRows};
  ${gridTemplateColumns};
  ${alignItems};
  ${justifyContent};
  ${gridTemplateAreas};
`

Grid.displayName = 'Grid'

export default Grid
