import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
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
            <Link to="/work" className="hover:underline">Work</Link>
            <a href="https://www.koldercreative.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Master Class</a>
            <a href="https://samkolderpresets.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Presets</a>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
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
