import React, { useEffect } from 'react';
import { ShieldCheck, Zap, Terminal, ChevronRight, Lock, LayoutGrid } from 'lucide-react';

const Main11 = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+4_-7zkyD88Y5MjFl';

  useEffect(() => {
    import('react-facebook-pixel').then((x) => x.default).then((ReactPixel) => {
      ReactPixel.init(PIXEL_ID);
      ReactPixel.pageView();
    });
  }, []);

  const handleLeadAction = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead', { 
        content_name: 'Direct Landing Page', 
        content_category: 'Telegram' 
      });
    }
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Subtle Background HUD */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,#0ea5e90a,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] -z-10" />

      <main className="max-w-xl mx-auto px-6 py-12 relative">
        
        {/* Verification Badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black tracking-widest uppercase">
            <ShieldCheck size={12} className="animate-pulse" /> Verified Signal Source
          </div>
        </div>

        {/* --- MAIN PARAGRAPH 1 --- */}
        <section className="space-y-6 mb-12">
          <div className="flex items-center gap-3 text-cyan-500 mb-2">
            <Terminal size={20} />
            <h2 className="text-xs font-black tracking-[0.3em] uppercase">Sequence Analysis</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Digital pattern recognition involves studying historical data to identify recurring sequences in color-based distributions. 🧪 By analyzing frequency and variance, enthusiasts can develop a structured approach to understanding how certain outcomes follow specific mathematical trends. 📈 This method shifts the focus from simple guessing to **data-driven logic**. 🧠
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mastering these patterns requires patience and a keen eye for detail, as small shifts in the sequence can indicate a change in the overall trend. 📉 Developing a **strategic mindset** is essential for anyone looking to understand the mechanics behind digital probability and sequence forecasting. 💎
          </p>
        </section>

        {/* --- DYNAMIC ACTION BUTTON --- */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-cyan-500 blur opacity-10 group-hover:opacity-30 transition duration-500" />
          <button 
            onClick={handleLeadAction} 
            className="relative w-full overflow-hidden py-8 bg-[#0a0a0a] border border-cyan-400/50 rounded-2xl group transition-all 
                       active:scale-[0.96] active:bg-cyan-900/40"
          >
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-2xl font-[1000] italic tracking-tighter text-cyan-400 uppercase">
                Join Telegram Now <Zap size={28} fill="#22d3ee" className="animate-bounce" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Access Live Predictions</span>
            </div>
          </button>
        </div>

        {/* --- MAIN PARAGRAPH 2 --- */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-amber-500 mb-2">
            <Lock size={20} />
            <h2 className="text-xs font-black tracking-[0.3em] uppercase">Secure Protocol</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            To engage with the platform safely, always prioritize using verified and encrypted channels. 🛡️ Start by creating a secure account and linking a protected digital wallet or **UPI interface** for seamless transactions. 💸 Ensure you are operating within a high-speed network to maintain real-time synchronization with **live signals**. 📡
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When participating, it is vital to follow a strict **budget management plan** to ensure a sustainable experience. 💰 Using two-factor authentication adds an extra layer of security to your profile. 🔒 By staying informed through the official community updates, you can navigate the environment with confidence and maintain full control over your digital interactions. 🚀
          </p>
        </section>

        {/* Footer Identity */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-4 opacity-40">
           <LayoutGrid size={24} />
           <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Encrypted Signal Terminal</span>
        </div>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% {top: 0} 100% {top: 100%} }
        .animate-scan { animation: scan 3.5s linear infinite; }
      `}} />
    </div>
  );
};

export default Main11;