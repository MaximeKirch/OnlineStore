import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartLine from "./CartLine";
import TotalPrice from "../../hooks/TotalPrice";

export default function CartModal() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      position="absolute"
      right="10"
      display="flex"
      borderRadius="8px"
      flexDirection="column"
      backgroundColor="#fff"
      boxShadow="xl"
      zIndex="99"
    >
      <Box width="100%" borderBottom="1px solid hsl(223, 64%, 92%)" p="30px">
        <Text textAlign="left" fontSize="24px">
          Cart
        </Text>
      </Box>

      <Box width="100%" p="30px">
        {cart &&
          cart.map((item) => {
            return <CartLine key={item.id} item={item} />;
          })}
      </Box>

      <Flex width="100%" p="30px" justify="end">
        <TotalPrice />
      </Flex>

      <Flex width="100%" px="30px" pb="40px" justify="center">
        <Button
          minH="50px"
          w="60%"
          bg="hsl(26, 100%, 55%)"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          boxShadow="md"
          color="#fff"
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  );
}
