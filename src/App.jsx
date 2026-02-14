import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

import Page3 from './Page3';
 // Your new high-conversion page

function App() {
  useEffect(() => {
    const options = {
      autoConfig: false, 
      debug: false,
    };
    
    ReactPixel.init('1270375368329499', options);
    ReactPixel.pageView();
  }, []);

  // Fix: The opening bracket must be on the same line as 'return'
  return (
    <Router>
      <Routes>
        {/* Your Home Page */}
        <Route path="/" element={<Page3 />} />

        {/* Your Custom Funnel Path */}
        <Route path="/mainpage/ads/join/tele" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;