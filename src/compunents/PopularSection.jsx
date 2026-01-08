import React, { useEffect, useState } from 'react'
import MyContainer from './MyContainer'
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

const PopularSection = () => {

  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');


  useEffect(() => {
    setLoading(true);
    fetch(`https://pawmarkt.vercel.app/services?category=${category}&location=${location}`)
      .then(res => res.json())
      .then(data => { setServices(data); setLoading(false) })
      .catch(err => { console.log(err); setLoading(false); })
  }, [category,location])
  console.log(category);
  console.log(location);

  return (

    <div className='mt-4'>
      <div className='mb-4'>
        <h3 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-3xl text-center '>Pet Care Services</h3>
      </div>
      {loading ? (<div className='flex justify-center items-center h-64'>
        <span className="loading loading-spinner loading-xl"></span>
      </div>) : (
        <MyContainer>
          <div className="flex pl-10 flex-col pr-10 md:flex-row gap-4
                w-full max-w-sm
                mx-auto mt-8">

  {/* Category */}
  <div className="w-full">
    <h3 className="font-semibold text-gray-500">Select Category</h3>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="select select-bordered mt-1 w-full"
    >
      <option value="">All Services</option>
      <option value="Pets">Pets</option>
      <option value="Food">Pet Food</option>
      <option value="Accessories">Accessories</option>
      <option value="Care Product">Pet Care Products</option>
    </select>
  </div>

  {/* Location */}
  <div className="w-full">
    <h3 className="font-semibold text-gray-500">Select Location</h3>
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="select select-bordered mt-1 w-full"
    >
      <option value="">All Locations</option>
      <option value="Dhaka">Dhaka</option>
      <option value="Chattogram">Chattogram</option>
      <option value="Rajshahi">Rajshahi</option>
      <option value="Sylhet">Sylhet</option>
    </select>
  </div>

</div>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 p-10 lg:p-0'>
            {
              services.slice(0, 8).map(services =>
                <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto">

                  <figure className="overflow-hidden">
                    <img
                      src={services?.image}
                      alt={services?.name}
                      className=" w-full h-52 sm:h-56 md:h-60 object-cover transition-transform duration-300 hover:scale-105" />
                  </figure>

                  <div className="card-body p-5">
                    <h2 className="card-title text-lg font-bold">
                      {services?.name}
                    </h2>
                    <div className="flex justify-between items-center text-sm font-medium opacity-80">
                      <p className="flex items-center gap-1">
                        <MdOutlineAttachMoney className="text-primary" />
                        {services?.price}
                      </p>

                      <p className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-error" />
                        {services?.location}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-sm font-medium opacity-70">
                      <FaTag className="text-success" />
                      {services?.category}
                    </p>
                    <div className="card-actions mt-4">
                      <Link to={`/details/${services._id}`} className="w-full">
                        <button className="btn btn-primary btn-sm w-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>


              )
            }
          </div>
        </MyContainer>

      )}


    </div>
  )
}

export default PopularSection;