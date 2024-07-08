import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Products from '../components/Products';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

function Home({ workRef, productsRef, statsRef, contactRef, scrollToContact, scrollToProducts }) {
  return (
    <div>
      <Hero scrollToContact={scrollToContact} scrollToProducts={scrollToProducts} />
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={statsRef}>
        <Stats />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
