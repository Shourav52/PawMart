import React, { useContext, useState } from 'react'
import MyContainer from './MyContainer'
import logo from '../assets/logo.jpeg'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'
import { AuthContext } from '../Provider/AuthProvider'
import { signOut } from 'firebase/auth'
import auth from '../firebase/firebase.config'
const Navbar = () => {
    const {user} = useContext(AuthContext)
    const [isChecked, setIsChecked] =useState(true);

     const handleSignOut =()=>{
        signOut(auth)
     }

  return (
    <div className='bg-blue-500  text-white py-2 border-b' >
        <MyContainer className="flex items-center justify-between ">
            <div className='flex items-center justify-center gap-1.5'>
                <figure>
                    <Link to={"/"}>
                <img className='w-[50px] rounded-4xl' src={logo}  alt="" />
                </Link>
            </figure>
            <Link to={"/"}>
            <h2 className='text-2xl font-extrabold'>PawMart</h2>
            </Link>
             
            </div>
            <ul className={"flex items-center gap-2 text-md"}>
                <li>
                    <MyLink to={"/"}>Home</MyLink>
                </li>
                <li>
                   <MyLink to={"/petsSupplies"}>Pets & Supplies</MyLink>
                </li>
                { user &&(<><li>
                   <MyLink to={"/myProfile"}>MyProfile</MyLink>
                </li>
                <li>
                    <MyLink to={"/add-listing"}>Add Listing</MyLink>
                </li>
                 <li>
                    <MyLink to={"/mylisting"}>My Listings</MyLink>
                </li>
                <li>
                    <MyLink to={"/myorders"}>My Orders</MyLink>
                </li>
               </>)}

            </ul>
            <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
            {
                user &&  <div className='bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold
         transition-all duration-150
         hover:bg-blue-100 hover:scale-105'>
                <button className='cursor-pointer' onClick={handleSignOut}  >Logout</button>
            </div>
            }
            {
                 !user &&  <div className='bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold
         transition-all duration-150
         hover:bg-blue-100 hover:scale-105'>
                 <Link to={"/login"}>Login</Link>
            </div>
            }


        </MyContainer>
       
    </div>
  )
}

export default Navbar
