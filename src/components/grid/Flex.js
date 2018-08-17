import styled from 'react-emotion'
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system'

import Box from './Box'

const Flex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

export default Flex
