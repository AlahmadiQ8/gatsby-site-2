import styled from 'react-emotion'

const NavLink = styled('a')`
  position: relative;
  display: inline-block;
  outline: none;
  border-bottom: none;
  text-decoration: none;
  color: ${props => props.theme.colors.lightText};
  transition: color 0.3s;
  &:hover,
  &:visited {
    color: unset;
    text-decoration: none;
    cursor: pointer;
  }
  &:before,
  &:after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.primaryVariant};
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
  &:before {
    top: -3px;
    transform: translateY(-10px);
  }
  &:after {
    bottom: -3px;
    transform: translateY(10px);
  }
  &:hover:before,
  &:focus:before,
  &:hover:after,
  &:focus:after {
    opacity: 1;
    transform: translateY(0px);
  }
`

export default NavLink
