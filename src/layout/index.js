import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'

import reboot from './reboot'
import theme from '../utils/theme'
import Box from '../components/grid/Box'
import Grid from '../components/grid/Grid'
import NavBar from '../components/navBar'
import Hr from '../components/separator'
import Footer from '../components/footer'

injectGlobal`
  ${reboot}
  a {
    text-decoration: none;
    color: unset; 
    border-bottom: 3px solid ${theme.colors.primaryVariant};
  }
  a:hover {
    text-decoration: none;
    color: unset;
    text-decoration: unset;
  }
  .gatsby-resp-image-link {
    border-bottom: none;
  }
`

const Header = Box.withComponent('header')
const Foot = Box.withComponent('footer')

const Layout = ({ children, pageData, bg }) => (
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
            <Grid
              height="100vh"
              gridTemplateColumns="1fr"
              gridTemplateRows="min-content 1fr min-content"
              gridTemplateAreas={'"g-nav" "g-main" "g-footer"'}
            >
              <Header gridArea="g-nav">
                <NavBar />
                <Hr />
              </Header>
              <Box bg={bg} gridArea="g-main">
                {children}
              </Box>
              <Foot gridArea="g-footer">
                <Hr />
                <Footer pageData={pageData} />
              </Foot>
            </Grid>
          </>
        </ThemeProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  bg: 'darkBg',
}

export default Layout
