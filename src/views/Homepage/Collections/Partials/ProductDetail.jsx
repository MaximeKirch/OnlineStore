import { Container, Button } from '@chakra-ui/react'
import ProductCard from '../../../../components/Product/ProductCard'


export default function ProductDetail() {

  return (
    <Container mt={25} pt={25} maxW={'container.lg'}>
        <ProductCard />
    </Container>
  )
}



