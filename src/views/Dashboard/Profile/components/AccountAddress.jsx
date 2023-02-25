import { useState } from "react";
import { Box, Text, Input, Button, Flex, CloseButton } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function AccountAddress() {

  const userAddress = useSelector((state) => state.user.user[0].address);

  const [toggleModify, setToggleModify] = useState(false);
  const [address, setAddress] = useState(userAddress?.address);
  const [city, setCity] = useState(userAddress?.city);
  const [postalCode, setPostalCode] = useState(userAddress?.postalCode);
  const [state, setState] = useState(userAddress?.state);

  const applyChanges = () => {
    console.log("changes", address, city, postalCode, state)
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
      {!toggleModify ? (
        <>
          <Text>Address : {userAddress.address}</Text>
          <Text>City : {userAddress.city}</Text>
          <Text>Postal code : {userAddress.postalCode}</Text>
          <Text>State : {userAddress.state}</Text>
        </>
      ) : (
        <>
          <Box>
            <form>
              <Flex>
                <Text>Address :</Text>
                <Input
                  placeholder={userAddress.address}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>City :</Text>
                <Input
                  placeholder={userAddress.city}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>Postal code :</Text>
                <Input
                  placeholder={userAddress.postalCode}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Flex>
              <Flex>
                <Text>State :</Text>
                <Input
                  placeholder={userAddress.State}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Flex>
            </form>
            <Button onClick={applyChanges}>Apply changes</Button>
          </Box>
        </>
      )}
    </Box>
  );
}
