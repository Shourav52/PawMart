import React, {  useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';


const UpdateListing = () => {
     
  const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState()
    const [category, setCategory] = useState(service?.category);
    const navigation = useNavigate();


    useEffect(()=>{
        axios.get(`https://pawmarkt.vercel.app/services/${id}`)
        .then(res=>{
            setService(res.data)
            setCategory(res.data.category)
        })
    },[id])
    console.log(service);
    

    const handleUpdate = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt: service?.createdAt
        }
        console.log(formData);

        axios.put(`https://pawmarkt.vercel.app/update/${id}`,formData)
        .then(res=>{
            console.log(res.data);
            navigation('/mylisting');
        })
        .catch(err=>console.log(err))
        
        
    }


  return (

     <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-6">
      <h2 className="text-2xl font-semibold mb-4"> Update Product</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-medium">Product / Pet Name</label>
          <input defaultValue={service?.name}
            type="text"
            name="name"
            
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            name="category"
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full p-2 border rounded-lg"
          > 
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Product</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            defaultValue={service?.price}
            type="number"
            name="price"
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            defaultValue={service?.location}
            type="text"
            name="location"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            defaultValue={service?.description}
            name="description"
            className="w-full p-2 border rounded-lg"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            defaultValue={service?.image}
            type="text"
            name="image"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Pick Up Date</label>
          <input
            defaultValue={service?.date}
            type="date"
            name="date"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email (Read Only)</label>
          <input
          value={user?.email || ""}
            type="email"
            name="email"
            readOnly
            className="w-full p-2 border rounded-lg text-black bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  )
}
export default UpdateListing;
