import React from 'react'
import Navbar from "./Layout"
import { Outlet } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        {/* Footer */}
        <Outlet />
    </>
  )
}
