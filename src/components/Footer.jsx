import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ scrollToWork, scrollToProducts, scrollToStats, scrollToContact }) {
  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold">Køld</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/user/koldstudios" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
            <a href="https://www.instagram.com/samkolder/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="space-x-4">
            <a onClick={scrollToWork} className="hover:underline cursor-pointer">Work</a>
            <a onClick={scrollToProducts} className="hover:underline cursor-pointer">Master Class</a>
            <a onClick={scrollToStats} className="hover:underline cursor-pointer">Presets</a>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <a onClick={scrollToContact} className="hover:underline cursor-pointer">Contact</a>
          </div>
          <div>
            <a href="mailto:management@samkolder.com" className="hover:underline">management@samkolder.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
