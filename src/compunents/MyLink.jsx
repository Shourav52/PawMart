import React from 'react'
import { NavLink } from 'react-router'

const MyLink = ({to, className, children}) => {
  return (
   <NavLink to={to} className={({isActive})=> (isActive ? "text-red-400 underline font-semibold" : `${className} font-semibold`)}>
      {children} 
    </NavLink>
  )
}

export default MyLink
