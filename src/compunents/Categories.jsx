import React from 'react';
import { FaDog, FaCat, FaCarrot, FaPaw } from 'react-icons/fa';

const categoriesData = [
  { icon: <FaDog />, title: 'Dogs' },
  { icon: <FaCat />, title: 'Cats' },
  { icon: <FaCarrot />, title: 'Food' },
  { icon: <FaPaw />, title: 'Accessories' },
];

const Categories = () => {
  return (
    <section className="py-16  dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent text-3xl font-semibold text-center mb-12">
          Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className=" dark:bg-gray-800 border border-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-4xl text-blue-500 mb-3">{category.icon}</div>
              <h3 className="card-title text-lg font-bold">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
