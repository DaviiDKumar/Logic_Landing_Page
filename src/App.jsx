import React, { useEffect } from 'react';

const App = () => {
  // YOUR NEW PIXEL ID
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://telegram.me/+uEWhmljkjB1jYWI1'; // Replace this


  useEffect(() => {
    // Dynamic import of the pixel library
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.pageView();
      });
  }, []);

  const handleLeadAction = () => {
    // Standard Lead Tracking
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Hack Prediction Join',
        content_category: 'Telegram'
      });
    }

    // Small delay ensures Meta receives the data before the redirect
    setTimeout(() => {
      window.location.href = TELEGRAM_LINK;
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 overflow-x-hidden">

      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full -z-10"></div>

      <main className="max-w-xl mx-auto px-5 pt-12 pb-32">

        {/* Live Status Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-300">LIVE SIGNALS ACTIVE</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <img src="/logo.jpeg" alt="Logo" className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/30 p-1 bg-[#0a0a0a]" />
        </div>

        <div className="text-center space-y-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase">
            Hack Number Prediction
          </h1>
          <p className="text-cyan-400 font-mono font-bold text-lg italic">
            SURE SHOT PREDICTION FREE GIFT CODE
          </p>
          <p className="text-gray-400 text-lg">
            बड़ा से बड़ा लॉस <span className="text-white font-bold  decoration-cyan-500">100% यहाँ Recover</span> होगा
          </p>
        </div>

        {/* The Animated < JOIN > Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
          <button
            onClick={handleLeadAction}
            className="relative w-full py-6 bg-blue-800 text-white rounded-2xl transition-all active:scale-95 shadow-2xl flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter">
           
              <span>JOIN TELEGRAM NOW</span>
         
            </div>
            <div className="text-[10px] uppercase tracking-[.3em] font-bold opacity-70 mt-1">Click Here TO Join</div>
          </button>
        </div>

        {/* Winning Proof Image */}
        <div className="mt-12 group relative">
          <img src="/One.jpeg" alt="Winning Proof" className="relative rounded-2xl border border-white/10 w-full shadow-2xl" />
        </div>
      </main>

    

      

    </div>
  );
};

export default App;