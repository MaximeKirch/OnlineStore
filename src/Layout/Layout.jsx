import React from 'react'
import Navbar from './Navbar'
import { Container } from '@chakra-ui/react'

const Layout = ({children}) => {
  return (
    <Container maxW="1440px" px="30px">
      <Navbar/>
      <main>{children}</main> 
    </Container>
  )
}

export default Layout;
