import React, { useState } from 'react'
import {Container, Text} from '@chakra-ui/react'
import Layout from './Layout/Layout'

function App() {

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  

  
return (
    <Container maxW="100%">
      <Text>Hello World</Text> 
    </Container>
)
}

export default App
