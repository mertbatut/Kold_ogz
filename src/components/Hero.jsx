import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4" style={{ backgroundImage: 'url(https://wallpaper.dog/large/17211605.jpg)' }}>
      <h1 className="text-6xl font-bold">køld</h1>
      <p className="text-xl mt-4 text-center max-w-xl">Sam Kolder is a world-renowned filmmaker that inspired a generation of content creators from all around the world</p>
      <div className="mt-8 space-x-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <button className="bg-orange-500 px-6 py-2 rounded-full">Get in touch</button>
        <button className="bg-gray-800 px-6 py-2 rounded-full">Master Class</button>
      </div>
    </section>
  );
};

export default Hero;
