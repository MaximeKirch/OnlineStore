import React from 'react'
import {Box, Text, Image} from '@chakra-ui/react'
import {FaAngleLeft, FaAngleRight, FaTrashAlt} from "react-icons/fa" 
import { useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from '../../Redux/Reducers/cart'
export default function CartLine({item}) {

    const {id, name, image_url, price, quantity, image, title} = item
    const total = quantity * price

    const dispatch = useDispatch()
  return (
    <Box 
        display="flex"
        height="auto" 
        flexDirection='row'
        w="100%"
    >
        <Image 
            h="80px" 
            w="80px" 
            src={image_url || image} 
            alt="Image produit" 
        />
        <Text 
            alignSelf="center"
            fontSize="16px"
            w="50%"
            pl="10px"
        >
            {name || title}
        </Text>
        <Text 
            alignSelf="center"
            px="10px"
        >
            {price}$
        </Text>
        <Box alignSelf="center">
            <Text alignSelf="center">
                <FaAngleLeft onClick={() => dispatch(decrementQuantity(id))}/>
                    {quantity}
                <FaAngleRight onClick={() => dispatch(incrementQuantity(id))}/>
            </Text>
        </Box>

        <Text alignSelf="center" pl="15px">
            {total}$
        </Text>
    
        <Box alignSelf="center">
            <FaTrashAlt onClick={() => dispatch(removeItem(id))} />
        </Box>

    </Box>
  )
}
