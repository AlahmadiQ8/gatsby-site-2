import React from 'react'
import Grid from './grid/Grid'
import Box from './grid/Box'
import SocialIcon from './socialIcon'

const Jumbotron = () => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[3, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
  >
    <Grid gridTemplateRows="repeat(3, 1fr)" alignItems="center">
      <Box fontSize={[4, 5, 6, 7]}>Mohammad Alahmadi</Box>
      <Box fontSize={[2, 3, 4]}>
        I'm a software engineer focusing primarly on the front end side of the
        web. I enjoy solving problems and making great web experiences for
        people.
      </Box>
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(50px, 1fr))">
        <SocialIcon
          colorRange={0}
          social="Linkedin"
          mx="auto"
          size={[30, 75, 90]}
        />
        <SocialIcon
          colorRange={1}
          social="Github"
          mx="auto"
          size={[30, 75, 90]}
        />
        <SocialIcon
          colorRange={2}
          social="Email"
          mx="auto"
          size={[30, 75, 90]}
        />
        <SocialIcon
          colorRange={3}
          social="Codepen"
          mx="auto"
          size={[30, 75, 90]}
        />
        <SocialIcon
          colorRange={4}
          social="Twitter"
          mx="auto"
          size={[30, 75, 90]}
        />
        <SocialIcon colorRange={5} social="Dev" mx="auto" size={[30, 75, 90]} />
      </Grid>
    </Grid>
  </Grid>
)

export default Jumbotron
