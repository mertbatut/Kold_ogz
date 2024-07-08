import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ scrollToWork, scrollToProducts, scrollToStats, scrollToContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ${scrolled ? 'bg-dark-bg text-white shadow-lg' : 'bg-none text-white'}`}>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Køld</Link>
        <div className="hidden md:flex space-x-4 gap-28">
          <a onClick={scrollToWork} className="hover:underline cursor-pointer">Work</a>
          <a onClick={scrollToProducts} className="hover:underline cursor-pointer">Master Class</a>
          <a onClick={scrollToStats} className="hover:underline cursor-pointer">Presets</a>
          <a onClick={scrollToContact} className="hover:underline cursor-pointer">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-dark-bg text-white`}>
        <ul className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 p-4">
          <li><a onClick={scrollToWork} className="hover:underline cursor-pointer">Work</a></li>
          <li><a onClick={scrollToProducts} className="hover:underline cursor-pointer">Master Class</a></li>
          <li><a onClick={scrollToStats} className="hover:underline cursor-pointer">Presets</a></li>
          <li><a onClick={scrollToContact} className="hover:underline cursor-pointer">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
