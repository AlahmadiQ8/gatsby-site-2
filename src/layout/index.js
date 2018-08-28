import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'

import theme from '../utils/theme'
import NavBar from '../components/navBar'
import Hr from '../components/separator'
import Jumbotron from '../components/jumbotron'
import PostsSection from '../components/postsSection'
import ProjectsSection from '../components/projectsSection'
import Footer from '../components/footer'
import './bootstrap-reboot.css'

injectGlobal`
  a {
    color: unset; 
    border-bottom: 2px solid ${theme.colors.primaryVariant}
  }
  a:hover {
    color: unset;
    text-decoration: unset;
  }
`

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
            <NavBar />
            <Hr />
            <Jumbotron />
            <Hr />
            <PostsSection />
            <Hr />
            <ProjectsSection />
            <Hr />
            <Footer />
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
