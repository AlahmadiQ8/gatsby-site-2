import React from 'react'
import Img from 'gatsby-image'

export default ({ fluid, alt, style, ...props }) => {
  const imgstyle = {
    verticalAlign: 'middle',
    ...style,
  }
  return <Img fluid={fluid} alt={alt} style={imgstyle} {...props} />
}
