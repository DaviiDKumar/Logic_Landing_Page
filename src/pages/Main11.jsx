import React, { useEffect } from 'react';
import { ShieldCheck, ChevronRight, Crosshair } from 'lucide-react';

const Main11 = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+B6zODkIocggwMTE1';

  // 1. Initialize Pixel and track PageView
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.pageView();
      });
  }, []);

  // 2. High-Reliability Lead Tracking on Click
  const handleLeadAction = () => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track('Lead', { 
          content_name: 'Main Page 1 - CyberVoid',
          content_category: 'Telegram'
        });
      });

    // 500ms delay to allow Pixel to fire before navigation
    setTimeout(() => { 
      window.location.href = TELEGRAM_LINK; 
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- BACKGROUND HUD ELEMENTS --- */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_30%,#0ea5e910,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] -z-10" />
      
      {/* Decorative Corner Brackets */}
      <div className="fixed top-4 left-4 w-12 h-12 border-t border-l border-cyan-500/30" />
      <div className="fixed bottom-4 right-4 w-12 h-12 border-b border-r border-cyan-500/30" />

      <main className="max-w-xl mx-auto px-6 py-12 relative z-10">
        
        {/* Profile with Scanner Ring */}
        <div className="relative w-40 h-40 mx-auto mb-12">
           <div className="absolute inset-[-10px] border border-cyan-500/20 rounded-full animate-spin-slow" />
           <div className="absolute inset-[-20px] border-t-2 border-cyan-400/40 rounded-full animate-spin-fast" />
           <div className="relative w-full h-full p-2 bg-black rounded-full overflow-hidden border border-cyan-500/50">
             <img src="/logo.jpeg" className="w-full h-full rounded-full object-cover transition-all duration-700" alt="Logo" />
             <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent pointer-events-none" />
           </div>
           <div className="absolute -bottom-2 right-4 bg-cyan-500 p-2 rounded shadow-[0_0_15px_#22d3ee]">
             <ShieldCheck size={18} className="text-black" />
           </div>
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Hack Number <br/> Prediction
            </h1>
            <Crosshair size={40} className="absolute -top-6 -right-6 text-cyan-500/20 animate-pulse" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-cyan-400 font-black text-xs tracking-[0.3em] uppercase bg-cyan-950/40 px-4 py-1.5 border-x border-cyan-400/50">
              Sure Shot Prediction Access
            </p>
          </div>

          <p className="text-gray-400 text-lg max-w-sm mx-auto">
            बड़ा से बड़ा लॉस <br />
            <span className="text-white font-bold px-2 py-0.5 ">100% यहाँ Recover</span> होगा
          </p>
        </div>

        {/* --- DYNAMIC ACTION BUTTON --- */}
        <div className="relative group p-1 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
          <button 
            onClick={handleLeadAction} 
            className="relative w-full overflow-hidden py-8 bg-[#0a0a0a] border border-cyan-400/50 rounded-xl transition-all duration-300
                       md:hover:bg-cyan-950/30 md:hover:border-cyan-400
                       active:scale-[0.96] active:bg-cyan-900/50 active:shadow-[0_0_20px_#22d3ee50]"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] active:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-3xl font-black italic tracking-tighter text-cyan-400 uppercase transition-all
                            md:group-hover:text-cyan-300 md:group-hover:scale-105
                            active:text-white">
                Join Telegram Now <ChevronRight size={32} className="animate-bounce" fill="#22d3ee" />
              </div>
            </div>
          </button>
        </div>

        {/* Proof Section */}
        <div className="mt-16 relative">
          <div className="absolute -top-4 left-0 text-[9px] text-cyan-500/50 font-bold uppercase tracking-widest">
            | Status: Verified
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400/40 shadow-[0_0_20px_#22d3ee] animate-scan z-20" />
             <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <img src="/One.jpeg" className="w-full opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Proof" />
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% {top: 0} 100% {top: 100%} }
        @keyframes spin-slow { from {transform: rotate(0deg)} to {transform: rotate(360deg)} }
        @keyframes spin-fast { from {transform: rotate(360deg)} to {transform: rotate(0deg)} }
        
        .animate-scan { animation: scan 3.5s linear infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-fast { animation: spin-fast 6s linear infinite; }
      `}} />
    </div>
  );
};

export default Main11;