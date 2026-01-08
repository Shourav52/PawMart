import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import MyContainer from '../compunents/MyContainer';


const MyListing = () => {
  const [myservices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://pawmarkt.vercel.app/myservices?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyServices(data);
        setLoading(false);
        
  })
      .catch(err => {
        console.log(err);
        setLoading(false);})
  }, [user?.email])

  console.log(myservices);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://pawmarkt.vercel.app/delete/${id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filterData = myservices.filter(service => service._id !== id);
              setMyServices(filterData);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }


          })
          .catch(err => console.log(err))

      }
    });

  }

  return (
    <div className='mb-15 mt-8'>
      <h1 className='mb-6 text-center text-3xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent'>My Listing</h1>
      {loading ? (
          <div className='flex justify-center items-center h-64'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) :(       <MyContainer>
      <div className="hidden md:block overflow-x-auto text-white">
  <table className="table">
    <thead className=''>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
       { 
        myservices?.map(service=>
     <tr >

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={service?.image} />
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-500">{service?.name}</div>
              
            </div>
          </div>
        </td>
        <td>
            <div className="text-sm text-gray-500 opacity-80">{service?.category}</div>  
        </td>
        <td className='text-gray-500'><p>{service?.price}</p></td>
        <th className='flex gap-3 mt-6'>
          <button onClick={()=>handleDelete(service._id)} className="btn btn-error btn-xs mb-2">Delete</button>
         <Link to={`/dashboard/update-listing/${service?._id}`}>
            <button className="btn btn-primary btn-xs">Edit</button>
         </Link>
        </th>
      </tr>
        )
       }
    </tbody>
  </table>
</div>


<div className="block md:hidden space-y-4">
        {myservices.map(service => (
          <div
            key={service._id}
            className="bg-white rounded-xl shadow p-4 flex gap-4"
          >
            <img
              src={service?.image}
              alt=""
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-bold text-gray-800">
                {service?.name}
              </h3>
              <p className="text-sm text-gray-500">
                Category: {service?.category}
              </p>
              <p className="text-sm text-gray-500">
                Price: ${service?.price}
              </p>

              <div className="flex justify-between gap-2 mt-3">
                <Link to={`/dashboard/update-listing/${service?._id}`}>
                  <button className="btn btn-primary btn-xs">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>


</MyContainer>)}

    </div>
  )
}

export default MyListing;