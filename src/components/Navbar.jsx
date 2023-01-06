import React from 'react'
import {Box,Flex,Text,Link, Image} from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";
import Avatar from "../assets/image-avatar.png"

export default function Navbar() {
  return (
    <Flex  width="100%">
        <Box w='100px'>
            <Text>
                <Link href="/"> Sneakers</Link>
            </Text>
        </Box>
        <Box flex='1'>
            <Text>
                <Link href="/"> Collections</Link>
            </Text>
            <Text>
                <Link href="/"> Men</Link>
            </Text>
            <Text>
                <Link href="/"> Women</Link>
            </Text>
            <Text>
                <Link href="/"> About</Link>
            </Text>
            <Text>
                <Link href="/"> Contact</Link>
            </Text>
        </Box>
        <Box w='200px'>
            <Text>
                <Link href="/"> <IoCartOutline /> </Link>
                
            </Text>
            <Text>
                <Link href="/"> <Image src={Avatar} alt="Profile" /></Link>
            </Text>
        
        </Box>
    </Flex>
  )
}
