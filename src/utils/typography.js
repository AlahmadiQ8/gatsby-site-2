import Typography from 'typography'
import UsWebDesign from 'typography-theme-us-web-design-standards'

UsWebDesign.baseLineHeight = 1.5

const typography = new Typography({
  headerFontFamily: ['Merriweather', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
