import React from 'react';
import HeroSection from './HeroSection';

const About = () => {

  const data = {
    name: "My Store",
  };

  return (
    <HeroSection myData={data}/>
  )
};

export default About;
