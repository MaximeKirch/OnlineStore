import { extendBaseTheme } from '@chakra-ui/react'

const theme = extendBaseTheme({
  fonts: {
    heading: `'Kumbh Sans', sans-serif`,
    body: `'Kumbh Sans', sans-serif`,
  },
  breakpoints : {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  }
})

export default theme