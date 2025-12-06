import React, { useContext, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const MyProfile = () => {
  const {setUser, user} = useContext(AuthContext)
  console.log(user);
  const [isOpen, setIsOpen] =useState(false)
  const handleOpenFrom=() =>{
    
    setIsOpen(!isOpen)
  }
  const handleUpdate =(e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;

    updateProfile(auth.currentUser,{
            displayName: name , photoURL: photourl
          }).then(()=>{
               setUser({...user,photoURL:photourl, displayName:name})
          }).catch((error)=>{
               console.log(error);
          }); 

  }



  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-10'>
      <div className="avatar">
       <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
       <img src={user?.photoURL} />
       </div>
      </div>
      <h1 className='border-1 pl-10 pr-10 mt-5 text-blue-500 font-bold'>{user?.displayName}</h1>
      <h2 className='mt-3 border-1 p-2 text-blue-500 font-bold'>{user?.email}</h2>
      <button onClick={handleOpenFrom} className='mt-3 btn btn-info'>Update Profile</button>

      {
        isOpen && (
            <form onSubmit={handleUpdate}
            className='flex flex-col gap-1 mt-10 bg-gradient-to-r  from-blue-500 text-white px-5 py-5 rounded-2xl to-purple-500' action="">
               <h1 className='text-center text-2xl mb-4'>Update Profile</h1>
              <div className='relative'>
                <label htmlFor="">Name</label>
                <input defaultValue={user?.displayName} name='name' className='border-white border  rounded-[8px] p-2 w-full'  type= "text" placeholder='Your Name' />
              </div>
               <div className='relative'>
                <label htmlFor="">Photo Url</label>
                <input defaultValue={user?.photoURL} name='photourl' className='border-white border  rounded-[8px] p-2 w-full'  type= "text" placeholder='Photo Url' />
              </div>

             <div>
               <label htmlFor="">Email</label>
              <input  defaultValue={user?.email}
              name='email'
               className='border-white border rounded-[8px] p-2 w-full'  type="email" placeholder='Enter Your Email' />
             </div>
             

            <button className='text-white btn bg-gradient-to-r  from-purple-500 to-purple-800 font-extrabold   mt-3 '>
              Update
            </button>
            </form>
        )
      }
    </div>
  )
}

export default MyProfile
