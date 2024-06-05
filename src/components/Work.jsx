import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const workItems = [
  {
    title: "Films",
    description: "Renowned for pushing his creative limits. Sam's work is best-known for his unique style of video editing that influenced a new era of content creation & storytelling.",
    query: "films",
  },
  {
    title: "Photography",
    description: "Creative moments from Sam's life and work. Share your brand's story and mission from a new perspective.",
    query: "photography",
  },
];

function Work() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await Promise.all(workItems.map(async (item) => {
        try {
          const response = await axios.get(`https://api.unsplash.com/photos/random`, {
            headers: {
              Authorization: `Client-ID lebXp2bZjS1BO4AZFCCUBf9vbIPNnjZUetCI_RAdvdQ`
            },
            params: {
              query: item.query,
              orientation: 'squarish'
            }
          });
          return response.data.urls.regular;
        } catch (error) {
          console.error('Error fetching image from Unsplash', error);
          return "https://via.placeholder.com/1080"; // Default placeholder in case of error
        }
      }));
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <section className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4 flex flex-col items-center  gap-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="work-item group relative overflow-hidden rounded-lg w-full  h-[522px] md:w-[522px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={images[index]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
