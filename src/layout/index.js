import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

import theme from '../utils/theme'
import Box from '../components/grid/Box'
import Flex from '../components/grid/Flex'
import NavLink from '../components/navLink'
import Hr from '../components/separator'
import './bootstrap-reboot.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      return (
        <ThemeProvider theme={theme}>
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },
                { name: 'author', content: data.site.siteMetadata.author },
                {
                  name: 'keywords',
                  content: data.site.siteMetadata.keywords,
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
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
            <Hr />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </>
        </ThemeProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
