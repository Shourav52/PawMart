import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { MdListAlt, MdShoppingCart, MdStars } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomerHome = () => {
  const { user } = useContext(AuthContext);
  const [myListingsCount, setMyListingsCount] = useState(0);
  const [myOrdersCount, setMyOrdersCount] = useState(0);
  const [listingData, setListingData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  // Example pet news data (replace with API fetch if available)
  const petNews = [
    { id: 1, title: 'Pet Adoption Event', description: 'Join our adoption event this weekend!',
         image: 'https://www.southernliving.com/thmb/TLrw5el9U5fRlimcx41XRGRwY94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AnnualMarsPetAdoptionWeekend20231-3619369bfdda4cf793e71ceb1009df64.jpg' },
    { id: 2, title: 'Vaccination Camp', description: 'Get your pets vaccinated for free.',
         image: 'https://arunachaltimes.in/wp-content/uploads/2025/01/Vaccination-camp-for-pets-held.webp' },
    { id: 3, title: 'Pet Care Tips', description: 'Learn the best nutrition for your pets.',
         image: 'https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/d153ca4b-9a77-4dc0-bcd7-beed1b439073/10+Affordable+Pet+Care.png' },
    { id: 4, title: 'New Pet Products', description: 'Check out new toys and accessories.',
         image: 'https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles-20/WoofWell.jpg' },
    { id: 5, title: 'Pet Grooming Workshop', description: 'Learn grooming techniques at home.', 
        image: 'https://www.absolutelyanimals.biz/wp-content/uploads/2019/03/IMG_3044-1024x768.jpeg' },
    { id: 6, title: 'Pet Health Awareness', description: 'Tips for healthy and happy pets.',
         image: 'https://www.hindustantimes.com/ht-img/img/2024/03/11/1600x900/dog_check_up_1710139332293_1710139347446.jpg' },
  ];

  useEffect(() => {
    if (!user) return;

    // Fetch user's listings
    fetch(`http://localhost:3000/myservices?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyListingsCount(data.length);
        const listingByCategory = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});
        const chartData = Object.keys(listingByCategory).map(key => ({
          category: key,
          count: listingByCategory[key],
        }));
        setListingData(chartData);
      });

    // Fetch user's orders
    fetch('http://localhost:3000/orders')
      .then(res => res.json())
      .then(data => {
        const myOrders = data.filter(order => order.buyerEmail === user?.email);
        setMyOrdersCount(myOrders.length);
        const ordersByMonth = myOrders.reduce((acc, order) => {
          const month = new Date(order.date).toLocaleString('default', { month: 'short' });
          acc[month] = (acc[month] || 0) + 1;
          return acc;
        }, {});
        const chartDataOrders = Object.keys(ordersByMonth).map(key => ({
          month: key,
          orders: ordersByMonth[key],
        }));
        setOrdersData(chartDataOrders);
      });
  }, [user]);

  return (
    <div className="p-6 space-y-10 overflow-auto max-h-screen">
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Welcome, <span className='text-red-400'>{user?.displayName || user?.name || 'User'}!</span>
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Link
          to="/dashboard/mylisting"
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center gap-4"
        >
          <MdListAlt className="text-4xl text-blue-500" />
          <span className="text-xl font-semibold">{myListingsCount}</span>
          <span className="text-gray-500">My Listings</span>
        </Link>

        <Link
          to="/dashboard/myorders"
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center gap-4"
        >
          <MdShoppingCart className="text-4xl text-green-500" />
          <span className="text-xl font-semibold">{myOrdersCount}</span>
          <span className="text-gray-500">My Orders</span>
        </Link>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center gap-4">
          <MdStars className="text-4xl text-yellow-500" />
          <span className="text-xl font-semibold">0</span>
          <span className="text-gray-500">Wishlist / Favorites</span>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Listings by Category</h2>
          {listingData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={listingData}>
                <XAxis dataKey="category" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500">No listings yet.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Orders by Month</h2>
          {ordersData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ordersData}>
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500">No orders yet.</p>
          )}
        </div>
      </div>

      {/* Pet News Section */}
      <h2 className=" text-3xl font-semibold text-blue-600">Suggested News</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {petNews.map(news => (
          <div key={news.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-3">
            <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="font-semibold text-lg text-gray-800">{news.title}</h3>
            <p className="text-gray-500 text-sm">{news.description}</p>
            <Link to="#" className="text-blue-500 font-medium hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerHome;
