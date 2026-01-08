import React, { useContext, useEffect, useState } from 'react'
import MyContainer from './MyContainer'
import logo from '../assets/logo.jpeg'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'
import { AuthContext } from '../Provider/AuthProvider'
import { signOut } from 'firebase/auth'
import auth from '../firebase/firebase.config'
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { SiMicrodotblog } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isChecked, setIsChecked] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? false : true; // true = light, false = dark
});
  const handleThemeChange = () => {
    setIsChecked(prev => !prev);
  }

  useEffect(() => {
  const theme = isChecked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // save theme to persist
}, [isChecked]);

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div className='bg-blue-500  text-white py-2 border-b' >
      <MyContainer className="flex items-center justify-between ">
        <div className='flex items-center justify-center gap-1.5'>

          <div className="dropdown md:hidden ">
            {/* Dropdown toggle */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow z-10"
            >
              <li>
                <MyLink to={"/"}><FaHome />Home</MyLink>
              </li>
              <li>
                <MyLink to={"/petsSupplies"}><FaServicestack />Pets & Supplies</MyLink>
              </li>
              <li>
                <MyLink to={'/contact'} ><IoIosContact />Contact</MyLink>
              </li>
              {user && (<>


                <li>
                  <MyLink to={'/blog'} ><SiMicrodotblog />Blog</MyLink>
                </li>
                <li>
                  <MyLink to={'/support'} ><MdOutlineSupportAgent />Support</MyLink>
                </li>
                <li>
                  <MyLink to={'/privacy'} ><MdPrivacyTip />Privacy</MyLink>
                </li>
              </>)}
            </ul>
          </div>
          <figure>
  <Link to="/">
    <img
      className="w-8 md:w-[50px] rounded-full"
      src={logo}
      alt="PawMart Logo"
    />
  </Link>
</figure>

<Link to="/">
  <h2 className="text-lg md:text-2xl font-extrabold">
    PawMart
  </h2>
</Link>

        </div>
        <ul className="hidden md:flex items-center gap-4 text-md">
          <li>
            <MyLink to="/" className="flex items-center gap-2">
              <FaHome className="text-lg" />
              <span>Home</span>
            </MyLink>
          </li>

          <li>
            <MyLink to="/petsSupplies" className="flex items-center gap-2">
              <FaServicestack className="text-lg" />
              <span>Pets & Supplies</span>
            </MyLink>
          </li>

          <li>
            <MyLink to="/contact" className="flex items-center gap-2">
              <IoIosContact className="text-lg" />
              <span>Contact</span>
            </MyLink>
          </li>

          {user && (
            <>
              <li>
                <MyLink to="/blog" className="flex items-center gap-2">
                  <SiMicrodotblog className="text-lg" />
                  <span>Blog</span>
                </MyLink>
              </li>

              <li>
                <MyLink to="/support" className="flex items-center gap-2">
                  <MdOutlineSupportAgent className="text-lg" />
                  <span>Support</span>
                </MyLink>
              </li>

              <li>
                <MyLink to="/privacy" className="flex items-center gap-2">
                  <MdPrivacyTip className="text-lg" />
                  <span>Privacy</span>
                </MyLink>
              </li>
            </>
          )}
        </ul>

        <label className="swap swap-rotate ">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleThemeChange} className="theme-controller" value="synthwave" />

          {/* sun icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <Link
  to="/dashboard"
  className="
    btn btn-outline ml-2 md:ml-10
    p-2 md:px-5
    rounded-full md:rounded-lg
  "
>
  <MdDashboard className="text-xl" />
  <span className="hidden md:inline ml-2">Dashboard</span>
</Link>

        {
          user && (
            <div className=' flex items-center gap-3'>
              <Link to="/myProfile" className="hidden md:block">
  <img
    src={user?.photoURL}
    className="w-10 h-10 rounded-full border-2 border-white"
    alt="Profile"
  />
</Link>

              <div className=' text-blue-500 px-4 py-2 rounded-lg font-semibold
         transition-all duration-150
         hover: hover:scale-105'>
                <Link
  to="/"
  onClick={handleSignOut}
  title="Logout"
  className="
    flex items-center gap-2
    px-3 py-2
    rounded-full
    bg-white
    text-red-500 font-medium
    text-sm md:text-base
    shadow-md
    hover:shadow-lg hover:scale-105
    transition-all duration-300
  "
>
  <TbLogout className="text-lg md:text-xl" />
  <span className="hidden sm:inline">Logout</span>
</Link>


              </div>
            </div>
          )
        }
        {
          !user && 
          <div className="bg-transparent">
  <Link
    to="/login"
    title="Login"
    className="
      flex items-center gap-2
      px-4 py-2
      rounded-full bg-white
      text-blue-700  font-medium
      text-sm md:text-base
      shadow-md
      hover:shadow-lg hover:scale-105
      transition-all duration-300
    "
  >
    <CiLogin className="text-lg md:text-xl" />
    <span className="hidden sm:inline">Login</span>
  </Link>
</div>

        }


      </MyContainer>

    </div>
  )
}

export default Navbar
