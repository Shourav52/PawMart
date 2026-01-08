import React, { useEffect, useState } from 'react'
import MyContainer from '../compunents/MyContainer';
import { motion } from "motion/react";
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";


const PetsSupplies = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page change
  };
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
           defaultValue="Pick a color"     className="ml-10 w-40 select mt-6">
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
        ) : (  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-10 p-10 lg:p-0 mb-10'>
          {
            currentItems.map(services =>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="card-wrapper" key={services._id}>
                
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
          
            </motion.div>
            
            )
        }
      </div>
    )}
      
       </MyContainer>
       {/* ===== PAGINATION ===== */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-outline btn-sm"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            className={`btn btn-sm ${
              currentPage === idx + 1 ? "btn-primary" : "btn-outline"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-outline btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PetsSupplies
