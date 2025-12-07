import axios from 'axios'
import React, { useEffect, useState } from 'react'
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import MyContainer from '../compunents/MyContainer';
import { FaDownload } from "react-icons/fa";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([])
   const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('https://pawmarkt.vercel.app/orders')
      .then(res => {
        setMyOrders(res.data);
        setLoading(false);
      })
      .catch(err =>{
         console.log(err);
         setLoading(false);
      })
  }, [])
  console.log(myOrders);
  
const handleDownloadPDF = () => {
  const doc = new jsPDF();

  doc.text("My Orders Report", 14, 15);

  autoTable(doc, {
    head: [["No", "Product", "Price", "Qty", "Phone", "Address", "Date"]],
    body: myOrders.map((o, index) => [
      index + 1,
      o.productName,
      o.price,
      o.quantity,
      o.phoneNumber,
      o.address,
      new Date(o.date).toLocaleDateString(),
    ]),
    startY: 25,
  });

  doc.save("my-orders.pdf");
};


  return (
    <div className='mb-80'>
      <MyContainer>
        <div className="overflow-x-auto ">
         {loading ? (
          <div className='flex justify-center items-center h-64'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
           <table className="table table-xs ">
          <thead className='bg-gray-400'>
            <tr className='text-black'>
              <th>Order No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th className="hidden sm:table-cell">Phone</th>
              <th className="hidden md:table-cell">Location</th>
              <th>Quantity</th>
              <th className='hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              myOrders.map((order, index) =>
                <tr key={order._id || index} className='font-medium font-semibold'>
                  <th>{index + 1}</th>
                  <td>{order?.productName}</td>

                  <td>{order?.price}</td>
                  <td className="hidden sm:table-cell">{order?.phoneNumber}</td>
                  <td className="hidden md:table-cell">{order?.address}</td>
                  <td>{order?.quantity}</td>
                  <td className="hidden sm:table-cell">
                    {new Date(order?.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true
                    })}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        )}
       
        <div className='flex justify-center'>
          <button
          onClick={handleDownloadPDF}
          className="mt-10 btn btn-primary mb-4"
        >
         <FaDownload /> Download Report
        </button>
        </div>
      </div>
      </MyContainer>
    </div>
  )
}

export default MyOrders
