import styled from 'react-emotion'

const Hr = styled('div')`
  height: 10px;
  z-index: 50;
  background: ${props => props.theme.colors.gradient};
`

export default Hr
