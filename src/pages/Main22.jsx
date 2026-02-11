import React, { useEffect } from 'react';
import { Activity, Radio, Cpu } from 'lucide-react';

const Main22 = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+B6zODkIocggwMTE1';

  // 1. Initialize Pixel on Page Load (Page View)
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.pageView();
      });
  }, []);

  // 2. Track Lead Event on Button Click
  const handleLeadAction = () => {
    // We use the imported library to ensure the 'Lead' event is sent to Meta
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track('Lead', { 
          content_name: 'Main Page 2 - Neural',
          content_category: 'Telegram'
        });
      });

    // 500ms delay gives the Pixel enough time to "fire" before the page redirects
    setTimeout(() => { 
      window.location.href = TELEGRAM_LINK; 
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Top Neon Border */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_15px_#3b82f6] z-50" />
      
      <main className="max-w-xl mx-auto px-6 py-12 relative">
        
        {/* Status Dashboard Header */}
        <div className="flex justify-between items-center mb-12 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 tracking-tighter uppercase">
            <Radio size={14} className="animate-pulse" /> 
            System: Online
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
            <Activity size={14} /> 
            Latency: 14ms
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping" />
            <img 
              src="/logo.jpeg" 
              className="relative w-full h-full rounded-full border-4 border-[#050505] shadow-[0_0_40px_rgba(59,130,246,0.15)] object-cover" 
              alt="Logo" 
            />
          </div>
          
          <h1 className="text-4xl font-[1000] tracking-tighter uppercase leading-none">
            Neural Analytics <br/>
            <span className="text-blue-500">Forecasting</span>
          </h1>
          
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded">
            <p className="text-blue-400 font-mono text-xs font-black tracking-widest uppercase">
              Predictive Logic Access Enabled
            </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Advanced pattern recognition and <br />
            <span className="text-white font-bold underline decoration-blue-500 decoration-2 italic">
              Strategic Signal Synchronization
            </span>
          </p>
        </div>

        {/* --- DYNAMIC ACTION BUTTON --- */}
        <div className="relative group">
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-blue-500 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
          
          <button 
            onClick={handleLeadAction} 
            className="relative w-full py-8 bg-white text-black rounded-3xl transition-all duration-300
                       md:hover:bg-blue-500 md:hover:text-white
                       active:scale-95 active:bg-blue-600 active:text-white shadow-xl"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 text-2xl font-[1000] tracking-tighter uppercase">
                JOIN TELEGRAM <Cpu size={24} className="group-active:rotate-90 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] group-active:opacity-100">
                Execute Connection Protocol
              </span>
            </div>
            
            {/* Hover Shimmer Line */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent pointer-events-none" />
          </button>
        </div>

        {/* Proof Section */}
        <div className="mt-16 p-2 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group shadow-2xl">
           <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <img 
             src="/One.jpeg" 
             className="rounded-2xl w-full brightness-90 transition-all duration-700 group-hover:brightness-100 group-hover:scale-[1.02]" 
             alt="Data Visualization" 
           />
           <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-blue-400 uppercase tracking-widest">
             Verified Analysis
           </div>
        </div>

        {/* Footer Technical Detail */}
        <div className="mt-20 text-center opacity-20">
          <p className="text-[8px] font-black tracking-[0.6em] uppercase">Neural_Link_Terminal_v4.0.2</p>
        </div>
      </main>
    </div>
  );
};

export default Main22;