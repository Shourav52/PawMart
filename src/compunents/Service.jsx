import React from 'react';
import { FaPaw, FaDog, FaCat, FaCarrot } from 'react-icons/fa';

const servicesData = [
  { icon: <FaPaw />, title: 'Pet Grooming', desc: 'Professional grooming services for your pets.' },
  { icon: <FaDog />, title: 'Pet Walking', desc: 'Daily walks to keep your pets healthy and happy.' },
  { icon: <FaCat />, title: 'Pet Sitting', desc: 'Trusted pet sitting services while you are away.' },
  { icon: <FaCarrot />, title: 'Pet Nutrition', desc: 'Healthy and balanced diet for your pets.' },
];

const Services = () => {
  return (
    <section className="py-16  dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className=" border border-blue-500 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 ">{service.title}</h3>
              <p className="">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
