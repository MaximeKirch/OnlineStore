import React from "react";
import { Flex, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import AddToCard from "../../hooks/AddToCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";

export default function ProductCard() {
  const products = useSelector((state) => state.products.products);
  const { id } = useParams();
  const product = products && products.find((product) => product.id === id);

  return (
    <>
      {product && (
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Box w={["100%", "100%", "50%"]} px={50}>
            <Box py={10} px={20} bg="white" boxShadow="md" rounded="xl">
              <Image maxW="100%" src={product.image} />
            </Box>
          </Box>
          <Box w={["100%", "100%", "50%"]} px={50} pt={25}>
            <Text mb={5} fontSize="24px">
              {product.title}
            </Text>
            <Text mb={5} color="hsl(219, 9%, 45%)">
              {product.description}
            </Text>
            <Text fontSize="30px" as="b">
              ${product.price}
            </Text>
            <AddToCard product={product} />
          </Box>

          <Link as={ReachLink} to={`/dashboard/product/update/${product.id}`}>
            <Button backgroundColor="teal.100">As admin, update product</Button>
          </Link>
        </Flex>
      )}
    </>
  );
}
