import React from 'react'

import Box from './grid/Box'
import Flex from './grid/Flex'
import { NavLink, NavLinkExt } from './links'

const NavBar = () => (
  <Flex flexDirection={['column', 'row']}>
    <Box
      bg="darkBg"
      color="lightText"
      px={[3, 4, 5, 6, 7]}
      pt={[3, 3]}
      fontSize={[2, 3]}
      alignSelf="stretch"
      textAlign="center"
    >
      <NavLink to="/">Home</NavLink>
    </Box>
    <Flex
      alignItems={['center', 'flex-start']}
      justifyContent={['flex-start', 'flex-end']}
      flexDirection={['column', 'row']}
      bg="darkBg"
      color="lightText"
      px={[3, 4, 5, 6, 7]}
      py={[3, 3]}
      fontSize={[2, 3]}
      flex="1 0"
    >
      <Box flex="0 1 auto" mb={[3, 0]}>
        <NavLink to="about-me">About Me</NavLink>
      </Box>
      <Box ml={[0, 5]} mb={[3, 0]} flex="0 1 auto">
        <NavLink to="posts">Posts</NavLink>
      </Box>
      <Box ml={[0, 5]} mb={[3, 0]} flex="0 1 auto">
        <NavLink to="projects">Projects</NavLink>
      </Box>
      <Box ml={[0, 5]} flex="0 1 auto">
        <NavLinkExt to="https://docs.google.com/document/d/1NAE5MnPNrRv4c0WQlr47kv99ddYumVxQWyb7EdjkoXU/edit?usp=sharing">
          Resume
        </NavLinkExt>
      </Box>
      <Box ml={[0, 5]} mb={[3, 0]} flex="0 1 auto">
        <NavLink to="wiki">Wiki</NavLink>
      </Box>
    </Flex>
  </Flex>
)

export default NavBar
