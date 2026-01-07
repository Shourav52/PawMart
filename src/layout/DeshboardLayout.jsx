import React from 'react'
import { Outlet } from 'react-router'
import Aside from '../compunents/Aside'

const DeshboardLayout = () => {
  return (
    <div className='flex'>
       <Aside></Aside>
       <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default DeshboardLayout
