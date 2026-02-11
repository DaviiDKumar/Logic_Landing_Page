import React, { useEffect } from 'react';
import { Activity, Radio, Cpu, ChevronRight } from 'lucide-react';

const Main22 = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+B6zODkIocggwMTE1';

  useEffect(() => {
    import('react-facebook-pixel').then((x) => x.default).then((ReactPixel) => {
      ReactPixel.init(PIXEL_ID);
      ReactPixel.pageView();
    });
  }, []);

  const handleLeadAction = () => {
    if (window.fbq) window.fbq('track', 'Lead', { content_name: 'Main Page 2 - Neural' });
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_15px_#3b82f6]" />
      
      <main className="max-w-xl mx-auto px-6 py-12 relative">
        <div className="flex justify-between items-center mb-12 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 tracking-tighter uppercase"><Radio size={14} className="animate-pulse" /> System: Online</div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase"><Activity size={14} /> Latency: 14ms</div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping" />
            <img src="/logo.jpeg" className="relative w-full h-full rounded-full border-4 border-[#050505] shadow-[0_0_40px_rgba(59,130,246,0.15)]" alt="Logo" />
          </div>
          <h1 className="text-4xl font-[1000] tracking-tighter uppercase leading-none">Hack Number <br/><span className="text-blue-500">Prediction</span></h1>
          <p className="bg-blue-500/10 text-blue-400 py-1 font-mono text-xs font-black tracking-widest inline-block px-4 border border-blue-500/20">SURE SHOT PREDICTION ACCESS</p>
          <p className="text-gray-400 text-lg">बड़ा से बड़ा लॉस <span className="text-white font-bold underline decoration-blue-500 decoration-2">100% यहाँ Recover</span> होगा</p>
        </div>

        {/* --- DYNAMIC ACTION BUTTON --- */}
        <button 
          onClick={handleLeadAction} 
          className="group relative w-full py-8 bg-white text-black rounded-3xl transition-all duration-300
                     md:hover:bg-blue-500 md:hover:text-white
                     active:scale-95 active:bg-blue-600 active:text-white"
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-2xl font-[1000] tracking-tighter uppercase">
              JOIN TELEGRAM <Cpu size={24} className="group-active:rotate-90 transition-transform" />
            </div>
            <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] group-active:opacity-100">Click to connect proxy</span>
          </div>
        </button>

        <div className="mt-16 p-2 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group">
           <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <img src="/One.jpeg" className="rounded-2xl w-full brightness-90 group-hover:brightness-100 transition-all" alt="Proof" />
        </div>
      </main>
    </div>
  );
};

export default Main22;