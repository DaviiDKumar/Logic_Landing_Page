import React, { useEffect } from 'react';

const Main2 = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+4_-7zkyD88Y5MjFl';

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.pageView();
      });
  }, []);

  const handleLeadAction = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: 'Main Page 2', content_category: 'Telegram' });
    }
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white font-sans overflow-x-hidden selection:bg-blue-500">
      
      {/* Grid Pattern Background Overlay */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none -z-10"></div>
      
      {/* Animated Spotlight Glow */}
      <div className="fixed top-[-20%] right-[-10%] w-[70%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>

      <main className="max-w-xl mx-auto px-6 pt-14 pb-32">
    
        {/* Profile Image with Hexagon Border Concept */}
        <div className="relative mx-auto w-32 h-32 mb-10 group">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-45 scale-95 opacity-20 group-hover:rotate-90 transition-transform duration-700"></div>
          <img 
            src="/logo.jpeg" 
            alt="Logo" 
            className="relative w-full h-full object-cover rounded-2xl border-2 border-blue-500/50 p-1 bg-[#080c14] shadow-2xl" 
          />
        </div>

        {/* Headline Section */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase leading-tight">
            Hack Number <span className="text-blue-500 block">Prediction</span>
          </h1>
          
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-blue-500/20 blur-md"></div>
             <p className="relative px-3 py-1 text-blue-400 font-mono text-sm font-black tracking-wider border border-blue-500/20">
               SURE SHOT PREDICTION FREE GIFT CODE
             </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            बड़ा से बड़ा लॉस <br />
            <span className="text-white font-bold px-2  rounded">100% यहाँ Recover</span> होगा
          </p>
        </div>

        {/* Action Button */}
        <div className="relative group">
          {/* Inner Glow */}
          <div className="absolute -inset-0.5 bg-blue-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
          
          <button
            onClick={handleLeadAction}
            className="relative w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-2xl transition-all active:scale-[0.98] shadow-xl overflow-hidden"
          >
            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <div className="flex flex-col items-center">
              <span className="tracking-tighter">JOIN TELEGRAM NOW</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Instant Access Link</span>
            </div>
          </button>
        </div>

        {/* Proof Image with Frame */}
        <div className="mt-16 relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50"></div>
          
          <div className="p-2 bg-blue-900/10 border border-blue-500/10 rounded-lg">
            <img 
              src="/One.jpeg" 
              className="rounded-md w-full shadow-2xl opacity-90 hover:opacity-100 transition-opacity" 
              alt="Proof" 
            />
          </div>
          <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-bold">
            Recent Winning Results
          </p>
        </div>

      </main>
    </div>
  );
};

export default Main2;