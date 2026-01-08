import React from 'react'
import { NavLink } from 'react-router'

const MyLink = ({to, className, children}) => {
  return (
   <NavLink to={to} className={({isActive})=> (isActive ? `text-red-300 flex items-center gap-2 px-2 py-1 
         leading-none underline font-semibold` : `${className} font-semibold`)}>
      {children} 
    </NavLink>
  )
}

export default MyLink
