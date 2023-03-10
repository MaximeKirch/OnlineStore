import React, { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import { db } from "../../../utils/firebase/firebase"; 

import { addDoc, collection } from "firebase/firestore";

import { addForm } from "../../../Redux/Reducers/contact";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const message = useRef();
  const object = useRef();

  const dispatch = useDispatch();

  const contactMessage = {
    email,
    firstName,
    lastName,
    message,
    object
  };

  const handleInputChange = (text, ref) => (ref.current = text);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addForm(contactMessage)); // <-- dispatch the action
  };

  const registerMessage =  (c) => {
    const dbRef = collection(db, 'contact-form')
    return async (c) => {
        try {
            // Ajout de l'article à Firebase
            await addDoc(dbRef, {c})
                .then(docRef => { 
                    alert('Produit ajouté avec succès !')
        });
        } catch (error) {
            console.log('erreur', error)
        }
    }
  }

  const user = useSelector((state) => state.contact.name);

  return (
    <Box>
      <Heading as="h2">Contact</Heading>

      <FormControl as="form">
        <FormControl as="fieldset">
          <FormLabel>Firstname</FormLabel>
          <Input
            type="text"
            required
            ref={firstName}
            onChange={(e) => handleInputChange(e.target.value, firstName)}
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel>Lastname</FormLabel>
          <Input
            type="text"
            required
            ref={lastName}
            onChange={(e) => handleInputChange(e.target.value, lastName)}
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            required
            ref={email}
            onChange={(e) => handleInputChange(e.target.value, email)}
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel>Message</FormLabel>
          <Input
            type="textarea"
            required
            ref={message}
            onChange={(e) => handleInputChange(e.target.value, message)}
          />
        </FormControl>

        <Button onClick={registerMessage({contactMessage})}>Submit</Button>
      </FormControl>

      <Box mt="60px">
        <Heading>Mon form :</Heading>
        <Text>Firstname : {firstName.current}</Text>
        <Text>Lastname : {lastName.current}</Text>
        <Text>E-mail : {email.current}</Text>
        <Text>Message : {message.current}</Text>
      </Box>
    </Box>
  );
}
