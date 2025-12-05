import React, { useEffect, useState } from 'react'
import MyContainer from './MyContainer'
import { Link } from 'react-router';
const PopularSection = () => {

  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  
  useEffect(()=>{
        fetch(`http://localhost:3000/services?category=${category}`)
        .then(res=>res.json())
        .then(data => setServices(data))
        .catch(err=>console.log(err))
      },[category])
      console.log(category);

  return (
    <div className='mt-4'>
        <div className='mb-4'>
            <h3 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-3xl text-center '>Pet Care Services</h3>
        </div>
       <MyContainer>
        <div className='mt-8'>
          <h3 className='font-semibold text-gray-500'>Select your Cetegory</h3>
          <select  onChange={(e)=>setCategory(e.target.value)}
           defaultValue="Pick a color"     className="select mt-1">
              <option disabled={true}>Choose Category</option>
            <option value="">All Services</option>
            <option value="Pets" >Pets</option>
            <option value="Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Product">Pet Care Products</option>
          </select>
        </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-10 lg:p-0'>
          {
            services.slice(0,6).map(services =>
              <div className="card bg-base-100 shadow-sm w-full lg:w-[360px] bg-gradient-to-br from-blue-50 to-blue-100">
            <figure>
                <img className='w-full h-[300px] object-cover'
                src={services?.image}
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{services?.name}</h2>
                <div className='flex justify-between text-gray-600'>
                    <p >Price: {services?.price}</p>
                    <p>Location: {services?.location}</p>
                </div>
                <p className='text-gray-600'>Category: {services?.category}</p>
                
                <div className="card-actions justify-end">
                <Link to={`/details/${services._id}`} ><button className="btn btn-primary w-full">View Details</button></Link>
                </div>
            </div>
            </div>
            )
        }
      </div>
       </MyContainer>
     
      
    </div>
  )
}

export default PopularSection;