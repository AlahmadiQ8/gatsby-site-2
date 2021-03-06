import { darken } from 'polished'

const colors = {
  darkBlue: '#1E2029',
  cyan: '#46C9E5',
  cyanDarker: darken(0.2, '#46C9E5'),
  pink: '#D26AC2',
  white: 'white',
  black: '#000',
  gray: '#adb5bd',
}

const colorRange = [
  '#46c9e5',
  '#4d8de1',
  '#5559dd',
  '#895cd9',
  '#ba63d6',
  '#d26ac2',
]

const theme = {
  colors: {
    darkBg: colors.darkBlue,
    primaryVariant: colors.pink,
    secondaryVariant: colors.cyan,
    secondaryVariantDarker: colors.cyanDarker,
    lightText: colors.white,
    darkText: colors.black,
    gray: colors.gray,
    gradient1: `linear-gradient(90deg, ${colors.cyan}, ${colors.pink})`,
    gradient2: `linear-gradient(90deg, ${colors.pink}, ${colors.cyan})`,
  },
  colorRange,
  breakpoints: ['540px', '720px', '960px', '1140px', '1400px'],
}

export default theme
