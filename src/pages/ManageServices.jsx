import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This service will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              setServices(services.filter(s => s._id !== id));
              Swal.fire("Deleted!", "Service removed.", "success");
            }
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
     <div className="mt-8">
            <h1 className="text-center text-2xl font-bold text-blue-700 mb-4">All Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {services.map(service => (
        <div
          key={service._id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.name}
            className="h-40 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-gray-600">{service.category}</p>
            <p className="text-blue-600 font-semibold mt-1">
              ৳ {service.price}
            </p>

            <div className="flex gap-3 mt-4">
              <Link
                to={`/dashboard/update-listing/${service._id}`}
                className="btn btn-sm btn-primary"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(service._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ManageServices;
