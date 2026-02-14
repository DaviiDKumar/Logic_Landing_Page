import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import Page from './Page';

function App() {
  useEffect(() => {
    const options = {
      autoConfig: false, // STOPS duplicate automatic button tracking
      debug: false,
    };
    
    // Initializing with your Pixel ID: 1270375368329499
    ReactPixel.init('1270375368329499', options);
    ReactPixel.pageView();
  }, []);

  return <Page />;
}

export default App;