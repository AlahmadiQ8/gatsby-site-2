import React from 'react'
import Img from 'gatsby-image'

export default ({ fluid, alt, style, ...props }) => {
  const imgstyle = {
    verticalAlign: 'middle',
    ...style,
  }
  // NOTE: this is required for html build step
  return fluid ? (
    <Img fluid={fluid} alt={alt} style={imgstyle} {...props} />
  ) : null
}
