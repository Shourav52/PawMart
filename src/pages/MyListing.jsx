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
    fetch(`http://localhost:3000/myservices?email=${user?.email}`)
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
        axios.delete(`http://localhost:3000/delete/${id}`)
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
    <div className='mb-15'>
      {loading ? (
          <div className='flex justify-center items-center h-64'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) :(       <MyContainer>
      <div className="overflow-x-auto text-white">
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
         <Link to={`/update-listing/${service?._id}`}>
            <button className="btn btn-primary btn-xs">Edit</button>
         </Link>
        </th>
      </tr>
        )
       }
    </tbody>
  </table>
</div>
</MyContainer>)}

    </div>
  )
}

export default MyListing
