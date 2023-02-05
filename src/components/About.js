import React from 'react';
import { useProductContext } from '../context/productcontext';
import HeroSection from './HeroSection';

const About = () => {

  const {myStoreName} = useProductContext();

  const data = {
    name: "My Store",
  };

  return (
    <>
    {myStoreName}
    <HeroSection myData={data}/>
    </>
  )
};

// Custom Hooks


export default About;
