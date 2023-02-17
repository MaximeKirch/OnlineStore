import React, { useState } from "react";
import { Container, Text, Button } from "@chakra-ui/react";
import { getDb } from "./firebase.js"
//import {collection, getDocs} from 'firebase/firestore'

function App() {
  const [data, setData] = useState(null);

  //const products = database.collection('products')

  // const getData = async () => {
  //     await getDocs(collection(getDb(),"products"))
  //       .then((querySnapshot) => {
  //         const newData = querySnapshot.docs
  //           .map((doc) => ({...doc.data(), id:doc.id }))
  //           setData(newData)
  //           console.log(newData)
  //       })
  // };

  return (
    <Container maxW="100%">
      <Text>Hello World</Text>
      <Button>Click</Button>
    </Container>
  );
}

export default App;
