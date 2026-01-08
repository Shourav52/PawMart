import React from 'react';
import { FaShippingFast, FaHeart, FaShieldAlt } from 'react-icons/fa';
import MyContainer from './MyContainer';

const Features = () => {
  const features = [
    { icon: <FaShippingFast />, title: 'Fast Delivery', desc: 'Get your pet products delivered fast and safely.' },
    { icon: <FaHeart />, title: 'Quality Products', desc: 'We ensure all products are safe and high-quality.' },
    { icon: <FaShieldAlt />, title: 'Secure Payments', desc: 'Shop securely with trusted payment options.' },
  ];

  return (
    <MyContainer>
      <section className=" py-16 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-3xl text-center mb-12">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white shadow-md hover:shadow-xl transition-transform duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2  ">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </MyContainer>
  );
};

export default Features;
