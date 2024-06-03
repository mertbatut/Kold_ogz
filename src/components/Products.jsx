import React from 'react';
import { motion } from 'framer-motion';

function Products() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="product-item group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="https://via.placeholder.com/1080" alt="Product 1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-semibold text-white mt-4">Master Class</h3>
              <p className="text-white">Sam’s official editing academy. KC is an all-in-one course & community with over 140+ video lessons.</p>
            </div>
          </motion.div>
          <motion.div 
            className="product-item group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="https://via.placeholder.com/1080" alt="Product 2" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-semibold text-white mt-4">Presets and LUTs</h3>
              <p className="text-white">14 unique presets in Sam's signature colour-grading style inspired by his travels around the globe.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Products;
