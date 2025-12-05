import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddListing = () => {

  const {user} = useContext(AuthContext);
   
    const handleSubmit = (e)=>{
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
            email
        }
        console.log(formData);
        axios.post('http://localhost:3000/services',formData)
        .then(res=>{
            console.log(res);
         if(res.data.acknowledged){
             Swal.fire({
            title: "service added successfully",
            icon: "success",
            draggable: true
            });
            form.reset();
         }
         else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                });
         }
         })
         .catch(err=>
         {
            console.log(err);
            Swal.fire({
                icon: "error",
              title: "Oops...",
                text: "Something went wrong!",
                });
         }
        );

    }


  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl rounded-2xl mt-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Add Product / Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-medium">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            placeholder='Type Your Product / Pet Name'
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            className="w-full p-2 border rounded-lg"
          >
              <option value="Pets" >Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Product">Care Product</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={0}
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder='Type your location'
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder='Describe your Product / Pet '
            className="w-full p-2 border rounded-lg"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="image"

            placeholder='Enter Product / Pet image URL '
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Pick Up Date</label>
          <input
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddListing
