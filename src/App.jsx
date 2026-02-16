import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page3 from './Page3';
import Page2 from './Page2';

function App() {
  useEffect(() => {
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', '1384293956357388'); 
    }
    
    window.fbq('track', 'PageView');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page3 />} />
        <Route path="/mainpage/ads/join/teleGRAM" element={<Page3 />} />
        <Route path="/mainpage/ads/join/teleGRAM-2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;