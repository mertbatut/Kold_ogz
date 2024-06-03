import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative text-center py-20 bg-hero-pattern bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.img 
        src="https://via.placeholder.com/2160x1080" 
        alt="Hero" 
        className="relative mx-auto w-full max-w-screen-lg animate-slideInFromTop" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 
        className="relative text-4xl font-bold mt-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sam Kolder is a world-renowned filmmaker
      </motion.h1>
      <motion.div 
        className="relative mt-4 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="/contact" className="px-8 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition">Get in touch</a>
        <a href="https://www.koldercreative.com/" className="px-8 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition">Master Class</a>
      </motion.div>
    </section>
  );
}

export default Hero;
