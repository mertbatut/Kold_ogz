import React from 'react';
import { motion } from 'framer-motion';

const productItems = [
  {
    title: "Master Class",
    description: "Sam’s official editing academy. KC is an all-in-one course & community. With over 140+ video lessons covering DaVinci Resolve, Premiere Pro, & After Effects. Plus business insights that will help creators start their six-figure filmmaking career.",
    imageUrl: "https://via.placeholder.com/1080", // Replace with your image URL
  },
  {
    title: "Presets and LUTs",
    description: "14 unique presets in Sam's signature colour-grading style inspired by his travels around the globe.",
    imageUrl: "https://via.placeholder.com/1080", // Replace with your image URL
  },
];

function Products() {
  return (
    <section className="py-20 bg-light-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="product-item group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
