import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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