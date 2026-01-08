import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this order?",
      text: "This order will be permanently removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/orders/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(() => {
            setOrders(orders.filter(order => order._id !== id));
            Swal.fire("Deleted!", "Order removed successfully", "success");
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading orders...</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl text-center font-bold mb-6 text-blue-600">
        All Orders
      </h2>

      {/* ================= Desktop Table ================= */}
      <div className="hidden lg:block overflow-x-auto bg-white rounded-xl shadow">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Product</th>
              <th>Buyer</th>
              <th>Email</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td className="font-medium">{order.productName}</td>
                <td>{order.buyerName}</td>
                <td className="text-sm">{order.buyerEmail}</td>
                <td className="text-center">{order.quantity}</td>
                <td className="font-semibold">${order.price}</td>
                <td>{order.phoneNumber || "N/A"}</td>
                <td className="text-sm text-gray-500">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ================= Mobile Card ================= */}
      <div className="lg:hidden grid gap-4">
        {orders.map(order => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow p-4"
          >
            <h3 className="font-semibold text-lg">
              {order.productName}
            </h3>

            <p className="text-sm text-gray-500">
              {order.buyerName} • {order.buyerEmail}
            </p>

            <div className="grid grid-cols-2 gap-2 text-sm mt-3">
              <p><b>Qty:</b> {order.quantity}</p>
              <p><b>Price:</b> ${order.price}</p>
              <p><b>Phone:</b> {order.phoneNumber || "Not Added"}</p>
              <p><b>Date:</b> {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="text-sm mt-2">
              <b>Address:</b> {order.address}
            </p>

            {order.additonalNote && (
              <p className="text-xs text-gray-500 mt-1">
                Note: {order.additonalNote}
              </p>
            )}

            <button
              onClick={() => handleDelete(order._id)}
              className="text-white font-bold btn btn-xs btn-error w-full mt-3"
            >
              Delete Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
