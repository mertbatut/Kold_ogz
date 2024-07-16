import React from 'react';
import Intro from './Intro';

function Hero({ scrollToContact, scrollToProducts }) {
  return (
    <section className="relative text-center h-screen flex bg-black text-white justify-center">
      <div className='HeroText flex flex-col items-center gap-4'>
        <h1 className='mt-28 text-5xl'>
          All-In-One Filmmaking Masterclass<br /> & Network To Help You Kick Start <br />Your Career
        </h1>
        <div className="flex items-center justify-center">
          <Intro 
            videoSrc="Images/intro.mp4" 
            fullVideoSrc="path/to/full-video.mp4" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
