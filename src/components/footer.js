import React from 'react'
import { css } from 'emotion'
import Grid from './grid/Grid'
import Box from './grid/Box'
import Img from './img'
import { getImageFluid } from '../utils/dataExtractors'

const P = Box.withComponent('p')

const Footer = ({ pageData }) => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, null, null, 5]}
    bg="darkBg"
    color="lightText"
    gridTemplateRows="repeat(auto-fit, 1fr)"
    justifyContent="center"
    textAlign="center"
    fontSize={1}
  >
    <P mb="0" color="gray">
      © 2018 Mohammad Alahmadi. All Rights Reserved.
    </P>
    <P mb="0" color="gray">
      Made with{' '}
      <span role="img" aria-label="heart">
        ❤
      </span>{' '}
      &{' '}
      <span role="img" aria-label="coffee">
        ☕
      </span>{' '}
      with{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </P>
    <P mb="0" color="gray">
      Color Scheme inspired by{' '}
      <a href="https://emotion.sh/" target="_blank" rel="noopener noreferrer">
        emotion
      </a>{' '}
      <Img
        fluid={getImageFluid(pageData, 'emotion.png')}
        alt="emotion"
        style={{ display: 'inline-block', width: '25px' }}
        outerWrapperClassName={css`
          display: inline;
        `}
      />
    </P>
  </Grid>
)

export default Footer
