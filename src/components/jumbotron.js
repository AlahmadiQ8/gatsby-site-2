import React from 'react'
import Grid from './grid/Grid'
import Box from './grid/Box'
import SocialIcon from './socialIcon'
import Thumbnail from './thumbnail'

const gridTemplateAreas = [
  '"jumborton-title" "jumborton-desc" "jumborton-social" "jumborton-img"',
  `"jumborton-title   jumborton-img"
   "jumborton-desc    jumborton-img"
   "jumborton-social  jumborton-social"`,
  `"jumborton-title   jumborton-img"
   "jumborton-desc    jumborton-img"
   "jumborton-social  jumborton-img"`,
]

const Jumbotron = () => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateAreas={[
      gridTemplateAreas[0],
      null,
      null,
      null,
      gridTemplateAreas[1],
      gridTemplateAreas[2],
    ]}
    gridGap={['25px 25px', null, null, null, '30px 40px', '30px 100px']}
  >
    <Box gridArea="jumborton-title" fontSize={[5, null, 6, 7]}>
      Mohammad Alahmadi
    </Box>
    <Box gridArea="jumborton-desc" fontSize={[2, null, 3, 4]}>
      I'm a software engineer focusing primarly on the front end side of the
      web. I enjoy solving problems and making great web experiences for people.
    </Box>
    <Grid gridArea="jumborton-social" gridTemplateColumns="repeat(6, 1fr)">
      <SocialIcon
        colorRange={0}
        social="Linkedin"
        mx="auto"
        size={[45, null, 75, 90]}
      />
      <SocialIcon
        colorRange={1}
        social="Github"
        mx="auto"
        size={[45, null, 75, 90]}
      />
      <SocialIcon
        colorRange={2}
        social="Email"
        mx="auto"
        size={[45, null, 75, 90]}
      />
      <SocialIcon
        colorRange={3}
        social="Codepen"
        mx="auto"
        size={[45, null, 75, 90]}
      />
      <SocialIcon
        colorRange={4}
        social="Twitter"
        mx="auto"
        size={[45, null, 75, 90]}
      />
      <SocialIcon
        colorRange={5}
        social="Dev"
        mx="auto"
        size={[45, null, 75, 90]}
      />
    </Grid>
    <Thumbnail
      gridArea="jumborton-img"
      maxWidth="600px"
      minWidth="300px"
      borderWidth={['10px', null, '12px']}
    />
  </Grid>
)

export default Jumbotron
