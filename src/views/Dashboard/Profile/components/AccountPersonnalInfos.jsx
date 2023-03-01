import {Box,Text, Button, Flex, Input, FormControl, CloseButton} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function AccountPersonnalInfos() {

    const user = useSelector(state => state.user.user)

    const [toggleModify, setToggleModify] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const applyChanges = () => {
        console.log("changes", firstName, lastName, email, phone)
        setToggleModify(!toggleModify)
      }

    return (
        <Box border="1px solid #000" m={30} p={10}>
            {!toggleModify ? (
        <Button onClick={() => setToggleModify(!toggleModify)}>
          Wanna change something ?
        </Button>
      ) : (
        <CloseButton onClick={() => setToggleModify(!toggleModify)} />
      )}

        {!toggleModify ?
            ( 
            <>
            <Text>Personnal informations : </Text>

            <Text>Firstname : {user.firstName}</Text>
            <Text>Lastname : {user.lastName}</Text>
            <Text>Mail : {user.email}</Text>
            <Text>Phone : {user.phone}</Text>
            </>
            ) : (
        <>
          <Box>
            <FormControl as="form">
              <Flex>
                <Text>Firstname :</Text>
                <Input
                  placeholder={user.firstName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>Lastname :</Text>
                <Input
                  placeholder={user.lastName}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>Mail :</Text>
                <Input
                  placeholder={user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>State :</Text>
                <Input
                  placeholder={user.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Flex>
            </FormControl>
            <Button onClick={applyChanges}>Apply changes</Button>
          </Box>
        </>
      )}
        </Box>
    )
}