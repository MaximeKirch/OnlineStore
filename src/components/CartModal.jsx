import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartLine from "./CartLine";
import TotalPrice from "../hooks/TotalPrice";

export default function CartModal() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      position="absolute"
      right="10"
      width="500px"
      height="700px"
      display="flex"
      border="2px solid #eee"
      flexDirection="column"
      backgroundColor="#fff"
      zIndex="99"
    >
      <Box width="100%">
        <Text textAlign="center" fontSize="24px">
          Votre panier
        </Text>
      </Box>

      <Box p="20px">
        {cart &&
          cart.map((item) => {
            return <CartLine key={item.id} item={item} />;
          })}
      </Box>

      <TotalPrice />
    </Box>
  );
}
