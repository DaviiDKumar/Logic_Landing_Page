import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import Page3 from './Page3';

function App() {
  useEffect(() => {
    const options = {
      autoConfig: false, // Prevents Meta from "guessing" and tracking Leads automatically
      debug: false,
    };
    
    // Initializing with your ID
    ReactPixel.init('1270375368329499', options);
    ReactPixel.pageView();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page3 />} />
        <Route path="/mainpage/ads/join/tele" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;