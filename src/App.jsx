import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Work />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
