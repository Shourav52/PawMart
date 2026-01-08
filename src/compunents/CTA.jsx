import React from 'react';
import { Link } from 'react-router';
import { FaPaw, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Decorative blur shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 md:p-14 shadow-xl">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/20 rounded-full  text-3xl">
              <FaPaw />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold  mb-4 leading-snug bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Give Your Pet the Care They Truly Deserve
          </h2>

          {/* Subtitle */}
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            From grooming to premium food & accessories — PawMart connects you
            with trusted services and quality products, all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/petsSupplies">
              <button className="group btn bg-white text-blue-600 hover:bg-gray-100 px-10 text-base flex items-center gap-2 transition-all duration-300">
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link to="/login">
              <button className="btn text-black bg-white  hover:bg-white hover:text-blue-600 px-10 text-base transition-all duration-300">
                Join PawMart
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
