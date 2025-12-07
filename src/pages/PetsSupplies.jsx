import React, { useEffect, useState } from 'react'
import MyContainer from '../compunents/MyContainer';
import { motion } from "motion/react";
import { Link } from 'react-router';


const PetsSupplies = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      fetch(`https://pawmarkt.vercel.app/services?category=${category}`)
      .then(res=>res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err=>{
        console.log(err); 
        setLoading(false);})
    },[category])
    console.log(category);
  return (
     <div>
      <h1 className='text-3xl font-semibold mt-5 text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent '>All Pet Care Services</h1>
       <MyContainer>
          <select  onChange={(e)=>setCategory(e.target.value)}
           defaultValue="Pick a color"     className="select mt-6">
              <option disabled={true}>Choose Category</option>
            <option value="">All Services</option>
            <option value="Pets" >Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Product">Care Product</option>
          </select>
          {loading ? (
          <div className='flex justify-center items-center h-64'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10 p-10 lg:p-0 mb-10'>
          {
            services.map(services =>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="card bg-base-100 shadow-sm w-full lg:w-[360px] bg-gradient-to-br from-blue-50 to-blue-100">
                
            <figure>
                <img className='w-full h-[300px] object-cover'
                src={services?.image}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-gray-950">{services?.name}</h2>
                <div className='flex justify-between text-gray-600 font-semibold text-[16px]'>
                    <p>Price: {services?.price}</p>
                    <p>Location: {services?.location}</p>
                </div>
                <p className='text-[16] font-semibold text-gray-600'>Category: {services?.category}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${services._id}`} ><button className="btn btn-primary w-full">View Details</button></Link>
                </div>
            </div>
          
            </motion.div>
            
            )
        }
      </div>
    )}
      
       </MyContainer>
    </div>
  )
}

export default PetsSupplies
