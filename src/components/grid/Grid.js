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
} from 'styled-system'

import Box from './Box'

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
`

Grid.displayName = 'Grid'

export default Grid
