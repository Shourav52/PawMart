import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import {IoEyeOff} from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import googleimg from '../assets/images.png'
import {Link, useLocation, useNavigate} from 'react-router'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

   const [show, setshow] = useState(false);
   
     const {setUser,handleGoogleSignin} = useContext(AuthContext)
     const location =useLocation();
     const navigate = useNavigate();
     const [email, setEmail] = useState('')
     console.log(location);
     
    
     
      const handleSubmit = (e)=>{
       e.preventDefault();
         const email = e.target.email.value;
         const pass = e.target.password.value;
       signInWithEmailAndPassword(auth, email, pass)
       .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        toast.success("Log in Successfully!");
        navigate(location.state? location.state:'/')

       })
       .catch((error)=>{
        toast.error(error.message)
        
       });
        
      };
      const googleSignin =()=>{
        handleGoogleSignin()
        .then(result=>{
          const user = result.user
          setUser(user)
          toast.success("Google Login Successful!");
          navigate(location.state? location.state:'/')


        })
        .catch(err=> toast.error(err.message)
)
      }

      const handleForget =()=>{
         navigate(`/forget/${email}`)
      }


      
  return (
    <div className="min-h-screen flex items-center justify-center ">
        <MyContainer className={"flex justify-center items-center gap-20 flex-col md:flex-row"}>
        <div>
            <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-4xl'>Login Your Account</h1>
            <p className='text-gray-700'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100
 w-auto h-auto text-black font-semibold shadow-md p-8 rounded-lg">
          <form onSubmit={handleSubmit}
            className='flex flex-col gap-1' action="">
               <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-4xl text-center text-2xl mb-4'>Login</h1>
             <div>
               <label htmlFor="">Email</label>
              <input 
              name='email'
              onChange={(e)=> setEmail(e.target.value)}
               className='border-white border rounded-[8px] p-2 w-full'  type="email" placeholder='Enter Your Email' />
             </div>
             <div className='relative'>
                <label htmlFor="">Password</label>
                <input name='password' className='border-white border  rounded-[8px] p-2 w-full'  type={show ? "text": "password"} placeholder='Enter Password' />
                <span onClick={()=> setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                  {show? <FaEye /> : <IoEyeOff /> }
                </span>
              </div>
               <div className='text-center cursor-pointer'>
              <button onClick={handleForget}
              type='button'
              className='text-sm text-blue-400 cursor-pointer hover:underline hover:text-blue-700'>Forget Password?
              </button>
             </div>

            <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold 
           hover:bg-blue-600 transition   mt-3 '>
              Login
            </button>
           <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-300'>or</span>
              <div className='h-px w-16 bg-gray-400'></div>
           </div>
           <button onClick={googleSignin}
            type='submit'
             className='flex  bg-white text-black justify-center btn'>
              <img className='w-5' src={googleimg} alt="" />
              Continue With Google
            </button>
            <p className='text-sm  mt-3 text-center'>
              Don't have an account? <Link className='text-blue-400 hover:underline hover:text-blue-700' to={"/signup"} >Register</Link>
            </p>

            </form>
        
         

        </div>

    </MyContainer>
    </div>
  )
}

export default Login
