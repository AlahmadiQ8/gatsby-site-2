import React from 'react'
import Grid from './grid/Grid'
import Box from './grid/Box'
import Flex from './grid/Flex'
import { Post, SocialIcon } from './icons'
import { Img } from './thumbnail'
import photo from '../images/my-photo.jpg'

const H1 = Box.withComponent('h1')
const H2 = Box.withComponent('h2')
const P = Box.withComponent('p')

const ProjectsSection = () => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateColumns={['100%', null, null, null, '1200px']}
    gridTemplateRows="repeat(auto-fit, 1fr)"
    justifyContent="center"
    gridRowGap={['60px']}
    flex="0 1 auto"
  >
    <H1
      justifySelf="center"
      width={['100%', null, null, '650px']}
      mb={['0', null, null, '30px']}
      pb={[3]}
      fontSize={[5, null, 6, 7]}
      textAlign="center"
      borderColor="primaryVariant"
      borderBottom="2px solid"
    >
      Projects
    </H1>
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(auto, 350px))"
      gridRowGap="20px"
      gridColumnGap={['20px', null, '40px', null, null, '60px']}
      justifyContent="center"
    >
      <Grid
        gridTemplateColumns="1fr"
        gridTemplateRows="repeat(4, auto)"
        gridRowGap="20px"
        borderRadius="10"
        borderColor="secondaryVariantDarker"
        border="1px solid"
        px="2"
        py="2"
      >
        <Img src={photo} borderRadius="10" />
        <H2 fontSize={[2, null, 3, 4]} mb="0" justifySelf="center">
          Connect-4 Game
        </H2>
        <P mb={0} mx={[0, null, 2]} color="gray">
          An Implementation of Connect 4 Game with Reactjs and Redux.
        </P>
        <Flex mx={[0, null, 2]} justifyContent="space-around">
          <Box color="secondaryVariantDarker">
            <SocialIcon social="Github" mx="auto" size={50} />
          </Box>
          <Box color="secondaryVariantDarker">
            <Post mx="auto" size={40} />
          </Box>
        </Flex>
      </Grid>
      <Grid
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr"
        gridRowGap="20px"
        borderColor="secondaryVariantDarker"
        borderRadius="10"
        border="1px solid"
        px="2"
        py="2"
      >
        <H1>Thumbnail</H1>
        <H2 fontSize={[2, null, 3, 4]} mb="0" justifySelf="center">
          Fear of Looking Stupid
        </H2>
        <Flex>
          <Box color="gray" fontSize={[0, null, 1, 2]} mr={4}>
            <Post mr="2" />
            <span>Mon, May 21, 2018</span>
          </Box>
          <Box color="gray" fontSize={[0, null, 1, 2]}>
            ,mr="2" />
            <span>2 min read</span>
          </Box>
        </Flex>
      </Grid>
      <Grid
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr"
        gridRowGap="20px"
        borderRadius="10"
        borderColor="cyan"
        border="1px solid"
        px="2"
        py="2"
      >
        <H1>Thumbnail</H1>
        <H2 fontSize={[2, null, 3, 4]} mb="0" justifySelf="center">
          Fear of Looking Stupid
        </H2>
        <Flex>
          <Box color="gray">
            <SocialIcon social="Dev" mx="auto" size={16} />
          </Box>
          <Box color="gray">,mr="2" /></Box>
        </Flex>
      </Grid>
    </Grid>
  </Grid>
)

export default ProjectsSection
