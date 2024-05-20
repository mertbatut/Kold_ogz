import React, { useState } from 'react';
import UnsplashRandomImage from './Image/MainRandom';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <UnsplashRandomImage />
    </>
  );
}

export default App;
