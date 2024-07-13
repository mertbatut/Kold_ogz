import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Intro from './Intro';
function Hero({ scrollToContact, scrollToProducts }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID lebXp2bZjS1BO4AZFCCUBf9vbIPNnjZUetCI_RAdvdQ`
          }
        });
        setImage(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image from Unsplash', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className="relative text-center h-screen flex  bg-black text-white justify-center">
      <div className='HeroText flex flex-col items-center gap-4'>
        <h1 className='mt-28 text-5xl'>
        All-In-One Filmmaking Masterclass<br></br> & Network To Help You Kick Start <br></br>Your Career
        </h1>
        <div className="flex items-center justify-center">
     <Intro 
        videoSrc="path/to/intro-video.mp4" 
        fullVideoSrc="path/to/full-video.mp4" 
      />
    </div>
      
      </div>
    </section>
  );
}

export default Hero;
