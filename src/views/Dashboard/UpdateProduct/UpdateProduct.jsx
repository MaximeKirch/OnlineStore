import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Input, Image, Button, Text, Flex, Stack } from "@chakra-ui/react";

export default function UpdateProduct() {
  const products = useSelector((state) => state.products.products);
  const { id } = useParams();
  const product = products && products.find((product) => product.id === id);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const companyRef = useRef(null);
  const categoryRef = useRef(null);
  const genderRef = useRef(null);
  const priceRef = useRef(null);
  const productId = product.id;

  const objectToUpdate = {
    titleRef,
    descriptionRef,
    companyRef,
    categoryRef,
    genderRef,
    priceRef,
    productId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(objectToUpdate)
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" w="100%">
      <Flex justifyContent="center">
        <Image src={product.image} w="200px" h="auto" />
      </Flex>

      <Flex mt={5} w="60%" direction="column">
        <Stack spacing={3}>
          <Input placeholder={product.id} isReadOnly={true} />
          <Input placeholder={product.title} onChange={(e)=> titleRef.current = e.target.value} />
          <Input type="text" placeholder={product.description} onChange={(e) => descriptionRef.current = e.target.value}/>
          <Input placeholder={product.company} onChange={(e) => companyRef.current = e.target.value}/>
          <Input placeholder={product.category} onChange={(e) => categoryRef.current = e.target.value}/>
          <Input placeholder={product.gender} onChange={(e) => genderRef.current = e.target.value}/>
          <Input type='number'placeholder={product.price} onChange={(e) => priceRef.current = e.target.value}/>
        </Stack>
      </Flex>
      <Button 
        onClick={handleSubmit}
        mt={5} 
        _hover={{ backgroundColor: "teal.400", color: "white" }}>
        Update my product
      </Button>
    </Box>
  );
}
