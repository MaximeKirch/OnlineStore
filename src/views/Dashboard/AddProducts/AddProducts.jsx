import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase";

import {
  Container,
  Heading,
  Flex,
  Text,
  Box,
  Image,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addArticle } from "../../../Redux/Reducers/products";

export default function AddProducts() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState();

  const [error, setError] = useState("")

  const article = {
    title: title,
    image: imgUrl,
    description: description,
    category: category,
    company: company,
    gender: gender,
    price: price,
  };

  const dispatch = useDispatch()

  const isValid = Object.values(article).every(value => value !== '');


  const registerNewArticle = () => {

    if(isValid) {
        setError('')
        dispatch(addArticle(article))
    } else {
        setError("Les champs ne peuvent pas être vide.")
    }
    
  }

 

  return (
    <Box w="100%">
      <Text p={5} textAlign="center">
        Add a product
      </Text>
      <Box>
        {error && error.length > 2 && 
            <Box m={2}>
                <Text color='red' fontSize='16px'>{error}</Text>
            </Box>
        }
        <Box>
          <Stack spacing={3}>
            <Input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Image url"
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Category (Pants, Shirts, Objects)"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Gender (Men/Women)"
              onChange={(e) => setGender(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Price in $"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Stack>

          <Box justifySelf="center" mt={5}>
            <Button
              type="submit"
              className="btn"
              onClick={registerNewArticle}
              backgroundColor={"orange.400"}
              color="white"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
