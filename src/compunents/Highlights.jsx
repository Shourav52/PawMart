import React from 'react';
import { FaUsers, FaPaw, FaStar, FaMapMarkedAlt } from 'react-icons/fa';

const highlightsData = [
  {
    icon: <FaUsers />,
    title: '10K+ Happy Customers',
    desc: 'Thousands of pet lovers trust PawMart for daily pet care needs.',
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    icon: <FaPaw />,
    title: '500+ Pet Services',
    desc: 'Wide range of grooming, food, accessories & health services.',
    accent: 'from-green-500 to-emerald-600',
  },
  {
    icon: <FaStar />,
    title: '4.9 Average Rating',
    desc: 'Top-rated services reviewed by real customers.',
    accent: 'from-yellow-400 to-orange-500',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: '20+ Cities',
    desc: 'Serving major cities across Bangladesh with fast delivery.',
    accent: 'from-purple-500 to-pink-500',
  },
];

const Highlights = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-3xl text-center mb-12">
          Platform Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border border-white border-t-0  border-b-2 border-l-0 border-r-0 shadow-md hover:shadow-2xl "
            >
              {/* Top Gradient Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${item.accent}`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${item.accent} text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold  mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
