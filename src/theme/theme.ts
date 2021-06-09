import { createMuiTheme } from '@material-ui/core/styles'

enum FontFamilies {
  inter = 'Inter, sans-serif',
  open = 'Open Sans, sans-serif',
}

interface CustomTheme {
  common: {
    pinkColor: string
    backgroundGrey: string
    lightGrey: string
    whiteColor: string
    greyBorder: string
    blackColor: string
  }
  figma: {
    backgroundColor: string
    elementBackgroundColor: string
    rangePickerColor: string
    rangePickerHoverColor: string
    toolTipColor: string
    poolPriceEarned: string
  }
}

const typography = {
  fontFamily: FontFamilies.open,
  h2: {
    fontSize: '24px',
    fontWeight: 600,
  },
  h3: {
    fontSize: '16px',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '16px',
    fontWeight: 650,
  },
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: CustomTheme
  }
  interface ThemeOptions {
    custom: CustomTheme
  }
}

const theme = createMuiTheme({
  typography,
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
  custom: {
    common: {
      pinkColor: '#ff007a',
      backgroundGrey: '#22242a',
      lightGrey: '#40444F',
      whiteColor: '#FFFFFF',
      greyBorder: '1px solid #40444F',
      blackColor: '#000000',
    },
    figma: {
      backgroundColor: '#13121A',
      elementBackgroundColor: '#191932',
      rangePickerColor: '#5A5A89',
      rangePickerHoverColor: '#6A6A9F',
      toolTipColor: '#ac1dfc',
      poolPriceEarned: '#5EFF5A',
    },
  },
})

export default theme
