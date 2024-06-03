import React from 'react';
import { motion } from 'framer-motion';

const workItems = [
  {
    title: "Films",
    description: "Renowned for pushing his creative limits. Sam's work is best-known for his unique style of video editing that influenced a new era of content creation & storytelling.",
    imageUrl: "https://via.placeholder.com/1080", // Replace with your image URL
  },
  {
    title: "Photography",
    description: "Creative moments from Sam's life and work. Share your brand's story and mission from a new perspective.",
    imageUrl: "https://via.placeholder.com/1080", // Replace with your image URL
  },
];

function Work() {
  return (
    <section className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="work-item group relative overflow-hidden rounded-lg"
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

export default Work;
