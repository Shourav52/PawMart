import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { percent } from 'motion';
const SuppliesDetails = () => {


  const [service, setService] = useState([])
    const {id} = useParams()
    const {user} = useContext(AuthContext);

    useEffect(()=>{
          fetch(`https://pawmarkt.vercel.app/services/${id}`)
          .then(res=>res.json())
          .then(data => setService(data))
          .catch(err=>console.log(err))
        },[id])

    
   const handleOrder=(e)=>{
    e.preventDefault() 
    const form = e.target;
    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phoneNumber = parseInt(form.phoneNumber.value); 
    const additonalNote = form.additonalNote.value;

    const formData = {
        productId:id,
        productName,
        buyerName,
        buyerEmail,
        quantity,
        price,
        address,
        phoneNumber,
        additonalNote,
        date: new Date()
    }
    axios.post('https://pawmarkt.vercel.app/orders',formData)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>console.log(err));
    
    toast.success("Service Booked Successfully!");
    
  }


  return (
    <div className='flex flex-col items-center mt-10 justify-center'>
        <h1 className=' text-3xl font-semibold mb-5'>Service details</h1>
      <div className="space-y-2 p-10 rounded-2xl">
         <div className="max-w-[700px] bg-white p-5 rounded-lg shadow-md  ">
          <img className='w-full rounded-md ' src={service?.image} alt="" />
        <h2 className="text-xl mt-8 font-semibold text-gray-700"> Name: {service?.name}</h2>
        <p className="text-lg mt-2 font-semibold text-gray-700">Category: {service?.category}</p>
        <p className='text-lg mt-2 font-semibold text-gray-700'>Owner’s Email: {service?.email}</p>
        <p className="text-lg mt-2 font-semibold text-gray-700"> Description: {service?.description}</p>

      <div className="flex items-center justify-between mt-3">
        <span className="text-lg text-gray-700 font-semibold">Price: ${service?.price}</span>
        <span className=" flex gap-1 items-center text-sm text-yellow-600 font-medium">Date: {service?.date}</span>
        </div>
      <div className="text-[18px] mt-2 font-semibold text-gray-700">
        Location: <span className="font-medium">{service?.location}</span>
        </div>
          <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-600'>Click Order Now button to order</span>
              <div className='h-px w-16 bg-gray-400'></div>
           </div>
           <label htmlFor="my_modal_7" className="btn btn-primary flex justify-items-center-safe">Order Now</label>
         </div>
          
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <legend className='fieldset-legend'>
              Order Details
            </legend>
            <div className="modal-box">
              <form onSubmit={handleOrder} className='space-y-2 flex flex-col items-center' action="">
            <div>
                <label htmlFor="">Product Name</label> <br />
                <input readOnly defaultValue={service?.name} className='w-70 border p-2 rounded-sm' type="text"  
                name='productName' placeholder='Product Name'/>
            </div>
            <div>
                <label htmlFor="">Buyer Name</label><br />
                <input defaultValue={user?.displayName} className='w-70 border p-2 rounded-sm' type="text"
                name='buyerName' placeholder='Buyer Name'/>
            </div>
            <div>
                <label htmlFor="">Buyer Email</label><br />
                <input readOnly defaultValue={user?.email} className='w-70 border p-2 rounded-sm' type="email" 
                name='buyerEmail'placeholder='.......@gmail.com'/>
            </div>
            <div>
                <label htmlFor="">Quantity</label><br />
                <input className='w-70 border p-2 rounded-sm' required
                name='quantity' type="number"
                 placeholder='Quantity'/>
            </div>
            <div>
                <label htmlFor="">Price</label><br />
                <input readOnly defaultValue={service?.price} className='w-70 border p-2 rounded-sm'
                name='price' type="number" placeholder='Price'/>
            </div>
            <div>
                <label htmlFor="">Address</label><br />
                <input required className='w-70 border p-2 rounded-sm' type="text"
                name='address' placeholder='Address'/>
            </div>
            <div>
                <label htmlFor="">Phone Number</label><br />
                <input required className='w-70 border p-2 rounded-sm' type="text"
                name='phoneNumber' placeholder='PhoneNumber'/>
            </div>
            <div>
                <label htmlFor="">Additional Note</label><br />
                <textarea  className='w-70 border p-2 rounded-sm' type="text" 
                name='additonalNote' placeholder='Additional Note'/>
            </div>
            <button type="submit" className='btn bg-purple-500 mt-3 w-[200px] rounded-3xl'>Order Confirm</button>

         </form>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>
          
      </div>
         
    </div>
  )
}

export default SuppliesDetails
