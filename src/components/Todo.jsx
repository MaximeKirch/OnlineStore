import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';

import {Container, Heading, Flex, Text, Box, Image} from "@chakra-ui/react"
 
const Todo = () => {
    const [title, setTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [gender, setGender] = useState("")
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])
   
    const addTodo = async (e) => {
        e.preventDefault();      
        
        try {
          const docRef = await addDoc(collection(db, "products"), {
            title: title, 
            image: imgUrl,
            description: description,
            category: category,
            company: company,
            gender: gender,
            price: price,

          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {
       
      await getDocs(collection(db, "products"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setProducts(newData);                
              console.log(products, newData);
          })
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                <div>
   
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Image url"
                            onChange={(e)=>setImgUrl(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            onChange={(e)=>setCategory(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            onChange={(e)=>setCompany(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Gender"
                            onChange={(e)=>setGender(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
   
                </div>
   
                <div className="product-content">
                    {
                        products?.map((product,i)=>(
                          
                        <Flex flexWrap="wrap" justifyContent='space-between'>
                        <Box  w={['100%', '100%', '50%']} px={50}>
                          <Box py={10} px={20} bg="white" boxShadow='md' rounded='xl'>
                            <Image maxW="10%" src={product.image}/>
                          </Box>
                        </Box>
                        <Box w={['100%', '100%', '50%']} px={50} pt={25}>
                          <Text>{product.title}</Text>
                          <Text mb={5} color='hsl(219, 9%, 45%)'>{product.description}</Text>
                          <Text fontSize="30px" as="b">${product.price}</Text>
                        </Box>
                        </Flex>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
 
export default Todo