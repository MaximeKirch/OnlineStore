import React from 'react'
import Navbar from "./Layout"
import { Outlet } from 'react-router-dom'
import NavbarTest from './NavbarTest'

const Layout = ({children}) => {
  return (
    <>
      <NavbarTest/>
      <Navbar/>
      <main>{children}</main> 
    </>
  )
}

export default Layout;