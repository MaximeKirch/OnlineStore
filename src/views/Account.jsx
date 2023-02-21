import {Flex, Box, Text, Image, Button} from '@chakra-ui/react'
import AccountPersonnalInfos from '../components/Account/AccountPersonnalInfos'
import AccountAddress from '../components/Account/AccountAddress'
import AccountOrders from '../components/Account/AccountOrders'
import { useSelector } from 'react-redux'

import Avatar from '../assets/image-avatar.png'

export default function Account() {

  const user = useSelector(state => state.user.user[0])
    
  return (
    <Flex my={30} height='auto' flexDirection='column'>
      <Image src={user.image ? user.image : Avatar } h='200px' w='200px' alignSelf='center'/>
      <Text textAlign='center'my="15px" fontSize="28px">Hello {user.firstName}</Text>
      <Box>
        <AccountPersonnalInfos/>
        <AccountAddress />
        <AccountOrders />

      </Box>
        <Button alignSelf="center" onClick={() => alert("Non désolé tu pars pas.")}> Sign Out </Button>
    </Flex>
  )
}
