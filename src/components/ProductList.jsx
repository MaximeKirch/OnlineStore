import React from 'react'
import {Heading, Flex, Text, Box, Image, Button, Link} from "@chakra-ui/react"
import { TitleSeparator } from '../hooks/TitleSeparator'
import { Link as ReachLink} from "react-router-dom"

export default function ProductList({item}) {

  return (
    <Flex w="100%" mb="50px" boxShadow='md' align="center" p={8} borderRadius="8px" maxH="200px">
      <Flex w="30%" justifyContent='center'>
        <Image src={item.image} alt="mon image" w="auto" h="100%" maxH="150px" maxW="150px" />
      </Flex>
      <Flex p={5} align="center" w="70%" justifyContent='space-between'>
          <Flex direction="column" justify="center" mr={5}>
            <Text fontSize='24px'>{item.title}</Text>
            <Text pt={5} fontSize='18px' fontWeight='bold'>{item.price} $</Text>
          </Flex>
          <Flex>
            <Link as={ReachLink} to={`/collections/${item.id}`} textDecoration="none">
              <Button backgroundColor="hsl(26, 100%, 55%)" color='white'>More infos</Button>
            </Link>
          </Flex>
      </Flex>
    </Flex>
  )
}
