import React from 'react'

import Box from './grid/Box'
import Flex from './grid/Flex'
import NavLink from './navLink'

const NavBar = () => (
  <Flex
    alignItems={['center', 'flex-start']}
    justifyContent={['flex-start', 'flex-end']}
    flexDirection={['column', 'row']}
    bg="darkBg"
    color="lightText"
    px={[3, 4, 5, 6, 7]}
    py={[3, 3]}
    fontSize={[2, 3]}
  >
    <Box flex="0 1 auto" mb={[3, 0]}>
      <NavLink href="#">About Me</NavLink>
    </Box>
    <Box ml={[0, 5]} mb={[3, 0]} flex="0 1 auto">
      <NavLink href="#">Blog</NavLink>
    </Box>
    <Box ml={[0, 5]} flex="0 1 auto">
      <NavLink href="#">Projects</NavLink>
    </Box>
  </Flex>
)

export default NavBar
