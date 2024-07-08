import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
function Hero({ scrollToContact, scrollToProducts }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID lebXp2bZjS1BO4AZFCCUBf9vbIPNnjZUetCI_RAdvdQ`
          }
        });
        setImage(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image from Unsplash', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className="relative text-center h-screen flex items-center justify-center bg-black text-white">
      {image && (
        <motion.img 
          src={image} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      )}
      <div className="relative z-10 flex flex-col items-center gap-80">
        <div>
          <motion.h1 
            className="Ogztrn text-6xl font-bold mt-8 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Oguzcan Turan
          </motion.h1>
        </div>
        <div>
          <motion.p
            className="mt-4 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Sam Kolder is a world-renowned filmmaker that inspired a generation of content creators from all around the world
          </motion.p>
          <motion.div 
            className="mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button 
              onClick={scrollToContact} 
              className="h-[60px] border rounded-lg px-8 py-2 bg-orange-500 text-white hover:bg-[#1F8998] transition"
            >
              Get in Touch
            </button>
            <button 
              onClick={scrollToProducts} 
              className="h-[60px] px-8 py-2 border bg-inherit border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Master Class
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
