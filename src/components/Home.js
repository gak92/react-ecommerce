import React from 'react';
import HeroSection from './HeroSection';

const Home = () => {

  const data = {
    name: "My Ecommerce",
  };

  return (
    <HeroSection myData={data}/>
  )
}

export default Home