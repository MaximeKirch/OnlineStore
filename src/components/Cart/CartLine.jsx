import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../Redux/Reducers/cart";
import IconTrash from "../../assets/svg/icon-delete.svg";

export default function CartLine({ item }) {
  const { id, name, image_url, price, quantity, image, title } = item;
  const total = quantity * price;

  const dispatch = useDispatch();
  return (
    <Box display="flex" height="auto" w="100%">
      <Image
        maxHeight="80px"
        w="auto"
        src={image_url || image}
        alt="Image produit"
        borderRadius="8px"
      />
      <Flex flexDirection="column" pl="20px">
        <Text alignSelf="center" fontSize="16px" w="100%" mb="5px">
          {name || title}
        </Text>
        <Flex direction="row" justifyContent="space-between">
            <Flex alignItems="end">
            <Text alignSelf="center" pr="10px">
                {price}$
            </Text>
            <Flex align="center" gap="10px">
                <FaAngleLeft
                color="hsl(26, 100%, 55%)"
                onClick={() => dispatch(decrementQuantity(id))}
                />
                <Text alignSelf="center">{quantity}</Text>
                <FaAngleRight
                color="hsl(26, 100%, 55%)"
                onClick={() => dispatch(incrementQuantity(id))}
                />
            </Flex>
            </Flex>
            <Flex>
                <Text alignSelf="center" pl="15px" mr="10px" fontWeight={700}>
                {total}$
                </Text>
                <Box alignSelf="center">
                    <Image src={IconTrash} onClick={() => dispatch(removeItem(id))} />
                </Box>
            </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
