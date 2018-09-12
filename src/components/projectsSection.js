import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './img'
import Grid from './grid/Grid'
import Box from './grid/Box'
import Flex from './grid/Flex'
import { getImageFluid, getProjects } from '../utils/dataExtractors'
import { Post, SocialIcon } from './icons'

const H1 = Box.withComponent('h1')
const H2 = Box.withComponent('h2')
const P = Box.withComponent('p')

const ProjectsSection = ({ pageData, containerStyles }) => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsYaml {
          ...AllProjects
        }
      }
    `}
    render={data => {
      const projects = getProjects(data)
      const projectProps = {
        target: '_blank',
        rel: 'noopener noreferrer',
        style: { borderBottom: 'none' },
      }
      return (
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
          {...containerStyles}
        >
          <H1
            justifySelf="center"
            width={['100%', null, null, '650px']}
            mt="0"
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
            gridTemplateColumns="repeat(auto-fit, minmax(auto, 250px))"
            gridRowGap="20px"
            gridColumnGap={['20px', null, '40px', null, null, '60px']}
            justifyContent="center"
          >
            {projects.map(pr => (
              <Grid
                id={pr.id}
                gridTemplateColumns="1fr"
                gridTemplateRows="repeat(4, auto)"
                gridRowGap="20px"
                borderRadius="10"
                borderColor="secondaryVariantDarker"
                border="1px solid"
                px="2"
                py="2"
              >
                <Img
                  fluid={getImageFluid(pageData, pr.image)}
                  style={{ borderRadius: 7 }}
                />
                <H2
                  my="0"
                  fontSize={[2, null, 3, 4]}
                  mb="0"
                  justifySelf="center"
                >
                  {pr.name}
                </H2>
                <P my={0} mx={[0, null, 2]} color="gray">
                  {pr.description}
                </P>
                <Flex mx={[0, null, 2]} justifyContent="space-around">
                  {pr.github && (
                    <a href={pr.github} {...projectProps}>
                      <Box color="secondaryVariantDarker">
                        <SocialIcon social="Github" mx="auto" size={50} />
                      </Box>
                    </a>
                  )}
                  {pr.post && (
                    <a href={pr.post} {...projectProps}>
                      <Box color="secondaryVariantDarker">
                        <Post mx="auto" size={40} />
                      </Box>
                    </a>
                  )}
                </Flex>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )
    }}
  />
)

export default ProjectsSection
