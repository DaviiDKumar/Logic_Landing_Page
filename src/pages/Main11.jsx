import React, { useEffect } from 'react';
import { ShieldCheck, Zap, Terminal, ChevronRight, Gamepad2, Trophy } from 'lucide-react';

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
        content_name: 'Gaming Strategy Page', 
        content_category: 'Telegram' 
      });
    }
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* HUD Background Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,#6366f115,transparent_50%)] pointer-events-none" />
      
      <main className="max-w-xl mx-auto px-6 py-12 relative">
        
        {/* Gaming Status Badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black tracking-widest uppercase">
            <Gamepad2 size={12} className="animate-bounce" /> Skill-Based Strategy Active
          </div>
        </div>

        {/* --- STRATEGY PARAGRAPH --- */}
        <section className="space-y-6 mb-12">
          <div className="flex items-center gap-3 text-indigo-400 mb-2">
            <Terminal size={20} />
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-gray-400">Pattern Recognition</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mastering digital sequence games involves studying historical data to identify recurring patterns in color-based distributions. 🎮 By analyzing the frequency and variance of shifts, players can develop a structured approach to understanding how certain rounds follow specific mathematical trends. 📈 This method shifts the focus from simple guessing to **logical forecasting**. 🧠
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Success in these skill-based challenges requires patience and a keen eye for detail. Small shifts in the sequence often indicate a change in the overall gameplay trend. 📉 Developing a **strategic mindset** is essential for anyone looking to understand the mechanics behind probability and sequence analysis in modern digital environments. 💎
          </p>
        </section>

        {/* --- INTERACTIVE ACTION BUTTON --- */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-indigo-500 blur opacity-20 md:group-hover:opacity-40 transition duration-500" />
          <button 
            onClick={handleLeadAction} 
            className="relative w-full overflow-hidden py-8 bg-indigo-600 text-white rounded-2xl transition-all duration-300
                       md:hover:bg-indigo-500 md:hover:scale-[1.01]
                       active:scale-[0.96] active:bg-indigo-700 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="flex items-center gap-3 text-2xl font-[1000] italic tracking-tighter uppercase">
                Join Community <Zap size={28} fill="white" />
              </div>
              <span className="text-[10px] font-bold opacity-70 uppercase tracking-[0.3em]">Unlock Live Strategy Guide</span>
            </div>
          </button>
        </div>

        {/* --- GAMEPLAY SECURITY PARAGRAPH --- */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-indigo-400 mb-2">
            <Trophy size={20} />
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-gray-400">Player Guidelines</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            To engage with the community safely, always prioritize using verified and secure channels. 🛡️ Start by setting up your profile and ensuring your connection is synchronized for real-time updates. 📡 Staying updated with the latest **live game signals** allows you to navigate the sequence shifts with better precision and control. 🚀
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When participating in these logic-based challenges, it is vital to follow a disciplined gameplay plan to ensure a consistent experience. 🎮 Using secure authentication adds an extra layer of protection to your session. 🔒 By following official community strategies, you can master the environment with confidence and maintain a steady approach to digital sequence mastering. ✨
          </p>
        </section>

        {/* Footer */}
        <div className="mt-20 py-8 flex flex-col items-center gap-2 opacity-20 border-t border-white/5">
           <span className="text-[9px] font-black tracking-[0.6em] uppercase">Strategy Terminal v1.1</span>
        </div>

      </main>
    </div>
  );
};

export default Main11;