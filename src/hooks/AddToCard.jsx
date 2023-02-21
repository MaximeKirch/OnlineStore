import React, { useState } from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducers/cart";

export default function AddToCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id, title, price, image } = product;

  const incremCount = () => {
    setQuantity(quantity + 1);
  };

  const decremCount = () => {
    quantity > 0 ? setQuantity(quantity - 1) : null;
  };

  const add = () => {
    dispatch(addToCart({ id, title, price, image, quantity }))
  };

  return (
    <Flex justifyContent="space-between" mt={5}>
      <Flex
        minH="60px"
        w="40%"
        bg="hsl(223, 64%, 98%)"
        borderRadius="8px"
        alignItems="center"
        justifyContent="center"
        mr={4}
      >
        <Button onClick={decremCount} bg="none" w="100%" h="100%">
          <svg
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
          </svg>
        </Button>
        <Flex
          minW="35px"
          alignItems="center"
          justifyContent="center"
          fontWeight={700}
        >
          {quantity}
        </Flex>
        <Button
          onClick={incremCount}
          bg="none"
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
              />
            </defs>
            <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
          </svg>
        </Button>
      </Flex>

      <Flex
        minH="50px"
        w="60%"
        bg="hsl(26, 100%, 55%)"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        boxShadow="md"
      >
        <Button
          bg="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          onClick={add}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
          <Text color="white" ml={4}>
            Add to cart
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
