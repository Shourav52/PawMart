import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import MyContainer from '../compunents/MyContainer';
import { 
  FaDownload, 
  FaBoxOpen, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign
} from "react-icons/fa";
const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://pawmarkt.vercel.app/orders')
      .then(res => {
        setMyOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders Report", 14, 15);

    autoTable(doc, {
      head: [["#", "Product", "Price", "Qty", "Phone", "Address", "Date"]],
      body: myOrders.map((o, index) => [
        index + 1,
        o.productName,
        `$${o.price}`,
        o.quantity,
        o.phoneNumber,
        o.address,
        new Date(o.date).toLocaleDateString(),
      ]),
      startY: 25,
    });

    doc.save("my-orders.pdf");
  };

  const totalItems = myOrders.reduce((a, b) => a + b.quantity, 0);
  const totalSpend = myOrders.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className="mb-40">
      <MyContainer>
        <div className="mb-10">
          <h1
            className="text-4xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent"
          >
            My Orders
          </h1>

          <p className="mt-2 text-gray-500 max-w-xl">
            Track your purchases, monitor spending and download order reports anytime.
          </p>

          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Total Orders</p>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent">{myOrders.length}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Total Items</p>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent">{totalItems}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Total Spend</p>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent">${totalSpend}</h2>
          </div>

          <div className="bg-white  rounded-2xl p-5 shadow-lg">
            <p className="text-sm opacity-80">Account Status</p>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent">Active</h2>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        {!loading && (
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow bg-white">
            <table className="table">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Qty</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((order, index) => (
                  <tr key={order._id || index} className="hover:bg-gray-50">
                    <td>{index + 1}</td>
                    <td className="font-medium">{order.productName}</td>
                    <td>${order.price}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.address}</td>
                    <td>{order.quantity}</td>
                    <td>
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!loading && (
          <div className="md:hidden space-y-6">
            {myOrders.map((order, index) => (
              <div
                key={order._id || index}
                className="relative bg-white rounded-3xl p-6 shadow-lg border overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-blue-300" />

                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-blue-600 flex items-center gap-2">
                    <FaBoxOpen />
                    {order.productName}
                  </h3>
                  <span className="text-xs text-gray-400">#{index + 1}</span>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaDollarSign className="text-green-500" />
                    <span className="font-medium">${order.price}</span> × {order.quantity}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-blue-500" />
                    {order.phoneNumber}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    {order.address}
                  </p>

                  <p className="flex items-center gap-2 text-gray-500">
                    <FaCalendarAlt />
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleDownloadPDF}
            className="
              flex items-center gap-3 px-7 py-4 rounded-full
              bg-gradient-to-r from-blue-600 to-blue-400
              text-white font-semibold shadow-lg
              hover:shadow-2xl hover:-translate-y-1
              transition-all duration-200
            "
          >
            <FaDownload />
            Download Report
          </button>
        </div>


      </MyContainer>
    </div>
  );
};

export default MyOrders;
