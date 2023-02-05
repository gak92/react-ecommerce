import React from 'react';
import FeatureProduct from './FeatureProduct';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const Home = () => {

  const data = {
    name: "My Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
}

export default Home;