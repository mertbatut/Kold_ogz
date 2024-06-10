import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../ProgressBar.css'; 

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressRef.current.style.setProperty('--progress', `${scrollPercent}%`);
    };

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: updateProgress,
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className={`progress-bar fixed top-0 left-0 w-full h-1 sm:h-2 z-50 ${isVisible ? 'visible' : 'invisible'}`}>
      <div ref={progressRef} className="progress-bar-inner h-full"></div>
    </div>
  );
};

export default ProgressBar;
