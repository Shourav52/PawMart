import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../assets/pet1.jpg'
import img2 from '../assets/pet2.jpeg'
import img3 from '../assets/3.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="relative">
          <img className='w-full h-[400px] object-cover' src={img1} alt="" />
          <div className="absolute inset-0 bg-black/40"></div>
          <h2 className='absolute inset-0 flex items-center justify-center text-center px-4 text-3xl md:text-5xl font-bold text-white'>
            Find Your Furry Friend Today!
          </h2>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img className='w-full h-[400px] object-cover' src={img2} alt="Adoptions" />
          <div className="absolute inset-0 bg-black/30"></div>
          <h2 className='absolute inset-0 flex items-center justify-center text-center px-4 text-3xl md:text-5xl font-bold text-white'>
            Adopt, Don’t Shop — Give a Pet a Home
          </h2>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img className='w-full h-[400px] object-cover' src={img3} alt="Happy Owners" />
          <div className="absolute inset-0 bg-black/30"></div>
          <h2 className='absolute inset-0 flex items-center justify-center text-center px-4 text-3xl md:text-5xl font-bold text-white'>
            Because Every Pet Deserves Love and Care.
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
