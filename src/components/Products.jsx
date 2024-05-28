// src/components/Products.jsx
import React from 'react';

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl text-center mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="../Images/main.jpg" alt="Product 1" className="rounded-lg mb-4" />
          <h3 className="text-2xl">Master Class</h3>
          <p>Sam's official editing academy KC...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="../Images/main.jpg" alt="Product 2" className="rounded-lg mb-4" />
          <h3 className="text-2xl">Presets and LUTs</h3>
          <p>14 unique presets in Sam's signature...</p>
        </div>
        {/* Add more product items as needed */}
      </div>
    </section>
  );
};

export default Products;
