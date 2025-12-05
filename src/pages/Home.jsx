import React from 'react'
import Slider from '../compunents/Slider';
import PopularSection from '../compunents/PopularSection';
import ExpartSection from '../compunents/ExpartSection';
import TipsSection from '../compunents/TipsSection';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <TipsSection></TipsSection>
      <ExpartSection></ExpartSection>
    </div>
  )
}

export default Home;

