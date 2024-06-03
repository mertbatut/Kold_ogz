import React from 'react';

const Header = () => {
  return (
    <header className="bg-black-500/50 bg-opacity-50 md:bg-opacity-100 text-white p-4 flex flex-col md:flex-row justify-between items-center fixed w-full top-0 z-10 transition-opacity duration-300">
      <div className="text-2xl font-bold mb-2 md:mb-0 pl-[20rem]">køld</div>
      <nav className="space-x-0 md:space-x-6 flex flex-col md:flex-row items-center gap-24 pr-64">
        <a href="#work" className="hover:underline mb-2 md:mb-0">Work</a>
        <a href="#masterclass" className="hover:underline mb-2 md:mb-0">Master Class</a>
        <a href="#presets" className="hover:underline mb-2 md:mb-0">Presets</a>
        <a href="#contact" className="hover:underline">Contact</a>
        
      </nav>
    </header>
  );
};

export default Header;
