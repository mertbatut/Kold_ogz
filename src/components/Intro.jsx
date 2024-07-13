import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

const Intro = ({ videoSrc, fullVideoSrc }) => {
  const videoRef = useRef(null);
  const [width, setWidth] = useState(940); // Initial width
  const [height, setHeight] = useState(528); // Initial height
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Scroll progress calculation with amplified effect
      const scrollProgress = Math.min(scrollTop / (documentHeight - windowHeight), 1);
      const amplifiedProgress = Math.pow(scrollProgress, 0.2);

      // Calculate width and height based on the scroll
      const newWidth = 940 + amplifiedProgress * 200; // 200 is an arbitrary number to amplify the effect
      const newHeight = 528 + amplifiedProgress * 112; // Maintain aspect ratio
      setWidth(newWidth);
      setHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Intro Video</h1>
      <div className="relative w-full flex justify-center">
        <video 
          ref={videoRef} 
          className="transition-all duration-300"
          style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }} // Restrict vertical growth
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={openModal}
      >
        Learn More
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Full Video"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full">
          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
            &times;
          </button>
          <video controls style={{ width: '100%' }}>
            <source src={fullVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default Intro;
