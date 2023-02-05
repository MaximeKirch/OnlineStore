import React, { useState } from 'react'
import Navbar from './Layout/Navbar'
import Collections from './views/Collections'
import Men from './views/Men'
import Women from './views/Women'
import Home from './views/Home'
import Contact from './views/Contact'
import About from './views/About'
import Account from './views/Account'
import ProductDetail from './views/ProductDetail'
import { Routes, Route} from 'react-router-dom'
import {Container, Text} from '@chakra-ui/react'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/collections/:id' element={<ProductDetail />} />
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  )
}

export default App
