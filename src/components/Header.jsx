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
    <header className={`fixed w-full top-0 left-0 z-10  ${scrolled ? 'bg-dark-bg text-white shadow-lg' : 'bg-transparent text-white'}`}>
      <nav className="container mx-auto p-4 flex justify-between items-center  ">
        <Link to="/" className="text-2xl font-bold">Køld</Link>
        <ul className="flex space-x-4 gap-40">
          <li><Link to="/work" className="hover:underline">Work</Link></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Master Class</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Presets</a></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
