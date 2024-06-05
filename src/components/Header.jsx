import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ${scrolled ? 'bg-dark-bg text-white shadow-lg' : 'bg-transparent text-white'}`}>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Køld</Link>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/work" className="hover:underline">Work</Link></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Master Class</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Presets</a></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="mobile-menu hidden md:hidden">
        <ul className="flex flex-col items-center space-y-4">
          <li><Link to="/work" className="hover:underline">Work</Link></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Master Class</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Presets</a></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
