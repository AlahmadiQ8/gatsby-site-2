const colors = {
  darkBlue: '#1E2029',
  cyan: '#46C9E5',
  pink: '#D26AC2',
  white: 'white',
  black: '#000',
}

const theme = {
  colors: {
    darkBg: colors.darkBlue,
    primaryVariant: colors.pink,
    SeconsecondaryVariant: colors.blue,
    lightText: colors.white,
    darkText: colors.black,
    gradient: `linear-gradient(90deg, ${colors.cyan}, ${colors.pink})`,
  },
  breakpoints: ['540px', '720px', '960px', '1140px'],
}

export default theme
