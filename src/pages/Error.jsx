import React from 'react'
import error from '../assets/Error.webp'
const Error = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <img className='w-full h-full' src={error} alt="" />
      
    </div>
  )
}

export default Error
