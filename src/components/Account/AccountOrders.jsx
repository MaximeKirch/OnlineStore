import {Box,Text, Link} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link as ReachLink} from "react-router-dom"

export default function AccountOrders() {
    const orders = useSelector(state => state.user.user[0].orders)

    return (
       <Box border="1px solid #000" m={30} p={15}>
        <Text textAlign='center'>Orders : </Text>
        {orders && orders.length > 0 ? 
        (
            orders.map((order) => {
                <Text>{order.number}</Text>
            })
        ) 
        :
        (
            <>
                <Text>No order yet :( </Text>
                <Link as={ReachLink} to={'/collections'}>
                    <Text>Let's explore some cool products ! :) </Text>
                </Link>
            </>
        )
        }

        </Box>
    )
} 