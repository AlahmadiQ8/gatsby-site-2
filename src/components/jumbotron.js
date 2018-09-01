import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getSocialLinks, getShortInfo } from '../utils/dataExtractors'
import Grid from './grid/Grid'
import Box from './grid/Box'
import { SocialLink } from './links'
import { SocialIcon } from './icons'
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

const H1 = Box.withComponent('h1')

const Jumbotron = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataYaml {
          edges {
            node {
              shortIntro
            }
          }
        }
        allSocialYaml {
          edges {
            node {
              name
              link
            }
          }
        }
      }
    `}
    render={data => {
      const social = getSocialLinks(data)
      const shortIntro = getShortInfo(data)
      return (
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
          <H1
            mb="0"
            textAlign={['center', null, null, null, 'start']}
            gridArea="jumborton-title"
            fontSize={[5, null, 6, 7]}
            fontWeight="bold"
          >
            Mohammad Alahmadi
          </H1>
          <Box gridArea="jumborton-desc" fontSize={[2, null, 3, 4]}>
            {shortIntro}
          </Box>
          <Grid
            gridArea="jumborton-social"
            gridTemplateColumns="repeat(6, 1fr)"
          >
            {social.map(({ name, link }, index) => (
              <SocialLink href={link} target="_blank" rel="noopener noreferrer">
                <SocialIcon
                  key={index}
                  colorRange={index}
                  social={name}
                  mx="auto"
                  size={[45, null, 75, 90]}
                />
              </SocialLink>
            ))}
          </Grid>
          <Thumbnail
            gridArea="jumborton-img"
            maxWidth="600px"
            minWidth="300px"
            borderWidth={['10px', null, '12px']}
          />
        </Grid>
      )
    }}
  />
)

export default Jumbotron
