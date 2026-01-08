import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rafi Ahmed',
    role: 'Dog Owner',
    image: 'https://i.pravatar.cc/150?img=12',
    review: 'PawMart made pet care super easy. Fast delivery & great quality!',
    rating: 5,
  },
  {
    name: 'Nusrat Jahan',
    role: 'Cat Lover',
    image: 'https://i.pravatar.cc/150?img=32',
    review: 'Everything I need for my cat in one place. Love PawMart!',
    rating: 5,
  },
  {
    name: 'Tanvir Hasan',
    role: 'Pet Grooming Client',
    image: 'https://i.pravatar.cc/150?img=45',
    review: 'Professional grooming service. My pet looks amazing!',
    rating: 4,
  },
  {
    name: 'Sadia Islam',
    role: 'Bird Owner',
    image: 'https://i.pravatar.cc/150?img=47',
    review: 'Great collection of pet accessories. Highly satisfied.',
    rating: 5,
  },
  {
    name: 'Imran Hossain',
    role: 'Veterinary Client',
    image: 'https://i.pravatar.cc/150?img=52',
    review: 'Trusted platform for pet care services in Bangladesh.',
    rating: 4,
  },
  {
    name: 'Mehedi Hasan',
    role: 'Pet Food Buyer',
    image: 'https://i.pravatar.cc/150?img=61',
    review: 'Fresh products and quick delivery every time.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-14 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Trusted by Pet Lovers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-base-100 rounded-2xl p-6 h-full shadow-md hover:shadow-xl">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-2xl text-blue-500 mb-4 opacity-70" />

                {/* Review */}
                <p className="text-sm opacity-80 mb-6">
                  “{item.review}”
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-xs opacity-70">{item.role}</p>
                    <div className="flex gap-1 text-yellow-400 mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
