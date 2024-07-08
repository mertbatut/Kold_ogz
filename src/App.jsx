import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import './App.css'; // CSS dosyasını içeri aktarın

function App() {
  const workRef = useRef(null);
  const productsRef = useRef(null);
  const statsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToWork = () => workRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToProducts = () => productsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToStats = () => statsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const mybutton = document.getElementById('myBtn');

    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Clean up the event listener
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <button onClick={topFunction} id="myBtn" title="Go to top" className="fixed bottom-5 right-5 z-50 hidden bg-yellow-500 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V5.414l-4.293 4.293a1 1 0 11-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z" clipRule="evenodd"></path>
        </svg>
      </button>
      <div className="App bg-dark-bg">
        <ProgressBar />
        <Header scrollToWork={scrollToWork} scrollToProducts={scrollToProducts} scrollToStats={scrollToStats} scrollToContact={scrollToContact} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home workRef={workRef} productsRef={productsRef} statsRef={statsRef} contactRef={contactRef} scrollToContact={scrollToContact} scrollToProducts={scrollToProducts} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer scrollToWork={scrollToWork} scrollToProducts={scrollToProducts} scrollToStats={scrollToStats} scrollToContact={scrollToContact} />
      </div>
    </Router>
  );
}

export default App;
