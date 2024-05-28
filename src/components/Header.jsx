// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center fixed w-full top-0 z-10">
      <div className="text-2xl font-bold">køld</div>
      <nav className="space-x-6">
        <a href="#work" className="hover:underline">Work</a>
        <a href="#masterclass" className="hover:underline">Master Class</a>
        <a href="#presets" className="hover:underline">Presets</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
