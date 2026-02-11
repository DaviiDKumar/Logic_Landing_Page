import React, { useEffect } from 'react';

const Main3 = () => {
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
      window.fbq('track', 'Lead', { content_name: 'Main Page 3', content_category: 'Telegram' });
    }
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30">
      
      {/* --- PREMIUM BACKGROUND EFFECTS --- */}
      {/* Top Gold Glow */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[40%] bg-amber-600/10 blur-[140px] rounded-full -z-10"></div>
      {/* Bottom Subtle Mesh */}
      <div className="fixed bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <main className="max-w-xl mx-auto px-6 pt-16 pb-32">
        
        {/* Animated Status Badge */}
       

        {/* Profile Image with Ring Effect */}
        <div className="relative mx-auto w-36 h-36 mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 animate-spin-slow blur-sm opacity-30"></div>
          <div className="relative w-full h-full p-1.5 bg-[#050505] rounded-full">
             <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center space-y-5 mb-12">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Hack Number <br/> Prediction
          </h1>
          
          <div className="inline-block px-4 py-1 border-y border-amber-500/30 bg-amber-500/5">
             <p className="text-amber-400 font-mono font-black text-sm tracking-widest uppercase">
               SURE SHOT PREDICTION FREE GIFT CODE
             </p>
          </div>

          <p className="text-gray-400 text-xl font-medium max-w-[280px] mx-auto leading-relaxed">
            बड़ा से बड़ा लॉस <span className="text-white font-extrabold border-b-2 border-amber-500/50">100% यहाँ Recover</span> होगा
          </p>
        </div>

        {/* The Premium CTA Button */}
        <div className="relative group">
          {/* External Shadow Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur-md opacity-25 group-hover:opacity-60 transition duration-500"></div>
          
          <button
            onClick={handleLeadAction}
            className="relative w-full py-7 bg-gradient-to-b from-amber-400 to-amber-600 text-black rounded-[2rem] transition-all active:scale-[0.97] overflow-hidden group shadow-2xl"
          >
            {/* Glossy Overlay */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000"></div>
            
            <div className="flex flex-col items-center justify-center relative z-10">
              <span className="text-2xl font-[1000] tracking-tighter uppercase">Join Telegram Now</span>
             
            </div>
          </button>
        </div>

        {/* Winning Proof Image */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-0.5 bg-white/5 rounded-3xl -z-10"></div>
          <img 
            src="/One.jpeg" 
            alt="Proof" 
            className="relative rounded-3xl border border-white/10 w-full shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
          />
          {/* Image Overlay Label */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-amber-400">
            VERIFIED PROOF
          </div>
        </div>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Main3;