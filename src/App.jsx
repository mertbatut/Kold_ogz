import React, { useState } from 'react';
import './App.css';

import Main from './pages/MainPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Main/>
    
    </>
  );
}

export default App;
