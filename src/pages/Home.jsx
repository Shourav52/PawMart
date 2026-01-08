import React from 'react'
import Slider from '../compunents/Slider';
import PopularSection from '../compunents/PopularSection';
import ExpartSection from '../compunents/ExpartSection';
import TipsSection from '../compunents/TipsSection';
import Features from '../compunents/Features';
import Services from '../compunents/Service';
import Categories from '../compunents/Categories';
import Highlights from '../compunents/Highlights';
import Testimonials from './Testimonials';
import Newsletter from '../compunents/Newsletter';
import FAQ from '../compunents/FAQ';
import CTA from '../compunents/CTA';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <TipsSection></TipsSection>
      <ExpartSection></ExpartSection>
      <Features></Features>
      <Services></Services>
      <Categories></Categories>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  )
}

export default Home;

