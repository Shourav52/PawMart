import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { FaUsers, FaBoxOpen, FaShoppingCart, FaBullhorn } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    users: 0,
    services: 0,
    orders: 0,
  });

  const [feeds, setFeeds] = useState([
  {
    id: 1,
    title: "New Pet Food Arrived",
    description: "We just added premium dog food with vitamins and minerals for your pets.",
  },
  {
    id: 2,
    title: "Weekend Discount",
    description: "Get 10% off on all pet accessories this weekend only. Hurry up!",
  },
  {
    id: 3,
    title: "Pet Care Tips",
    description: "Learn how to groom your pet effectively and keep them healthy.",
  },
  // new 10 feeds
  {
    id: 4,
    title: "Cat Toys Collection",
    description: "New playful cat toys are now available to keep your feline friends active and entertained."
  },
  {
    id: 5,
    title: "Dog Grooming Workshop",
    description: "Join our weekend workshop to learn professional grooming tips for your dogs at home."
  },
  {
    id: 6,
    title: "Pet Vaccination Camp",
    description: "Free vaccination camp for pets this Saturday. Ensure your pets are healthy and protected."
  },
  {
    id: 7,
    title: "Summer Pet Care Tips",
    description: "Keep your pets cool and hydrated during the hot summer days with our expert tips."
  },
  {
    id: 8,
    title: "Aquarium Accessories Sale",
    description: "Special discounts on aquariums and fish accessories for all aquatic pet lovers this week."
  },
  {
    id: 9,
    title: "New Bird Feed Arrived",
    description: "Premium quality bird feed now in stock. Ensure your birds get balanced nutrition daily."
  },
  {
    id: 10,
    title: "Pet Photography Contest",
    description: "Participate in our fun photography contest and showcase adorable moments of your pets."
  },
  {
    id: 11,
    title: "Adopt a Pet",
    description: "Looking for a furry friend? Check out pets available for adoption and give them a loving home."
  },
  {
    id: 12,
    title: "Healthy Treats Launch",
    description: "Introducing new healthy treats for dogs and cats, made with natural ingredients and no preservatives."
  },
  {
    id: 13,
    title: "Pet Travel Essentials",
    description: "Get all the travel accessories for your pets: carriers, harnesses, water bottles, and more."
  }
]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch stats from backend
    fetch("http://localhost:3000/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          users: data.usersCount || 0,
          services: data.servicesCount || 0,
          orders: data.ordersCount || 0,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const chartData = [
    { name: "Users", value: stats.users },
    { name: "Services", value: stats.services },
    { name: "Orders", value: stats.orders },
  ];

  const lineChartData = [
    { name: "Users", count: stats.users || 5 },
    { name: "Services", count: stats.services || 8 },
    { name: "Orders", count: stats.orders || 12 },
  ];

  const handleAddFeed = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (feeds.length >= 10) return;

    setFeeds([
      {
        id: Date.now(),
        title,
        description,
      },
      ...feeds,
    ]);

    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-10">

      {/* ===== WELCOME ===== */}
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome, <span className="text-indigo-500">{user?.displayName || "Admin"}</span>
      </h1>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard icon={<FaUsers />} label="Total Users" value={stats.users} />
        <StatCard icon={<FaBoxOpen />} label="Total Services" value={stats.services} />
        <StatCard icon={<FaShoppingCart />} label="Total Orders" value={stats.orders} />
      </div>

      {/* ===== GRAPHS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Platform Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Growth Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#6366F1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== NEWS FEED ===== */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Customer News Feed</h2>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            ➕ Add Customer Feed
          </button>
        </div>

        {/* ADD FORM */}
        {showForm && (
          <form onSubmit={handleAddFeed} className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">
            <input name="title" placeholder="Feed Title" required className="input input-bordered w-full" />
            <textarea name="description" placeholder="Description (max 50 words)" required maxLength={300} className="textarea textarea-bordered w-full" />
            <button className="btn btn-success w-full">Publish Feed</button>
          </form>
        )}

        {/* FEED CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeds.map(feed => (
            <div key={feed.id} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FaBullhorn />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{feed.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{feed.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ===== SMALL COMPONENT ===== */
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl p-6 shadow flex items-center gap-4">
    <div className="text-3xl text-indigo-500">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
    </div>
  </div>
);

export default AdminHome;
