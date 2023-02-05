import React from 'react'

import ProductList from "../components/ProductList";
import { Container, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Collections() {
  
  const products = useSelector((state) => state.products.products);
  console.log("Collection products", products);
  return products ? (
    <Container maxW="100%">
      {products.map((item) => {
        return <ProductList item={item} key={item.id} />;
      })}
    </Container>
  ) : <Spinner />;
}