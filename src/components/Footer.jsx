import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ scrollToWork, scrollToProducts, scrollToStats, scrollToContact }) {
  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="Logo text-2xl font-bold">oct.</Link>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4 md:mb-0">
            <a href="https://www.youtube.com/user/koldstudios" target="_blank" rel="noopener noreferrer" className="hover:underline mb-2 md:mb-0">YouTube</a>
            <a href="https://www.instagram.com/samkolder/" target="_blank" rel="noopener noreferrer" className="hover:underline mb-2 md:mb-0">Instagram</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-12 mb-4 md:mb-0">
            <a onClick={scrollToWork} className="hover:underline cursor-pointer">Work</a>
            <a onClick={scrollToProducts} className="hover:underline cursor-pointer">Master Class</a>
            <a onClick={scrollToStats} className="hover:underline cursor-pointer">Presets</a>
            <a onClick={scrollToContact} className="hover:underline cursor-pointer">Contact</a>
          </div>
          <div>
            <a href="mailto:management@samkolder.com" className="hover:underline">marulspor@dahadamarul.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
