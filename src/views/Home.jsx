import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import ProductDetail from './ProductDetail'
import {Container, Text} from "@chakra-ui/react"

export default function Home() {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>{
            setData(json)
            setIsLoading(false)
        })
    }, [])
    
  return (
    <Container maxW="100%">
      <Navbar/>

        { isLoading 
                ? 
            <Text>Loading...</Text> 
                :
            <ProductDetail product={data}/>
        }   
    </Container>
  )
}
