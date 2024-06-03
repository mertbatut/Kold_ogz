import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Products from '../components/Products';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Products />
      <Stats />
      <Contact />
    </>
  );
}

export default Home;
