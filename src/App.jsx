import React, { useState } from "react";
import { Container, Text, Button } from "@chakra-ui/react";
// import { getDb } from "./firebase.js"
//import {collection, getDocs} from 'firebase/firestore'
import Todo from './components/Todo'

function App() {

  return (
    <Container maxW="100%">
      <Text>Hello World</Text>
      <Button>Click</Button>
      <Todo />
    </Container>
  );
}

export default App;
