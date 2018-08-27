import React from 'react'
import Grid from './grid/Grid'
import Box from './grid/Box'
import Flex from './grid/Flex'
import { Calendar, Clock } from '../components/icons'

const H1 = Box.withComponent('h1')
const H2 = Box.withComponent('h2')

const PostsSection = () => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateColumns={['100%', null, '650px']}
    gridTemplateRows="repeat(3, 1fr)"
    // gridTemplateRows="auto .25% .25%"
    justifyContent="center"
    gridRowGap={['60px']}
  >
    <H1
      mb={['0', null, null, '30px']}
      pb={[3]}
      fontSize={[5, null, 6, 7]}
      textAlign="center"
      borderColor="primaryVariant"
      borderBottom="2px solid"
    >
      Writing
    </H1>
    <Grid
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 1fr"
      gridRowGap="20px"
    >
      <H2 fontSize={[3, null, 4, 5]} mb="0">
        Fear of Looking Stupid
      </H2>
      <Flex>
        <Box color="gray" fontSize={[0, null, 1, 2]} mr={4}>
          <Calendar mr="2" />
          <span>Mon, May 21, 2018</span>
        </Box>
        <Box color="gray" fontSize={[0, null, 1, 2]}>
          <Clock mr="2" />
          <span>2 min read</span>
        </Box>
      </Flex>
    </Grid>
    <Grid
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 1fr"
      gridRowGap="20px"
    >
      <H2 fontSize={[3, null, 4, 5]} mb="0">
        On Prioritizing Side Projects
      </H2>
      <Flex>
        <Box color="gray" fontSize={[0, null, 1, 2]} mr={4}>
          <Calendar mr="2" />
          <span>Mon, May 21, 2018</span>
        </Box>
        <Box color="gray" fontSize={[0, null, 1, 2]}>
          <Clock mr="2" />
          <span>2 min read</span>
        </Box>
      </Flex>
    </Grid>
  </Grid>
)

export default PostsSection
