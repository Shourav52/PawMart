import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../compunents/Navbar'
import Footer from '../compunents/Footer'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default MainLayout
