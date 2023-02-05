import React, {useState} from 'react'
import {Container, Link, Text, Image} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'


export default function ProductDetail() {

 
  
  return (
    <Container mt={25} pt={25} maxW={'container.lg'}>
        <ProductCard />
    </Container>
  )
}


