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
  ${gridTemplateAreas};
`

Grid.displayName = 'Grid'

export default Grid
