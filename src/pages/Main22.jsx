import React, { useEffect } from 'react';
import { ShieldCheck, Zap, Terminal, Activity, BrainCircuit, Microscope, Radio } from 'lucide-react';

const Main22 = () => {
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
        content_name: 'Neural Analytics Page', 
        content_category: 'Data Science' 
      });
    }
    setTimeout(() => { window.location.href = TELEGRAM_LINK; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#3b82f610,transparent_50%)] pointer-events-none" />
      
      <main className="max-w-xl mx-auto px-6 py-12 relative">
        
        {/* Technical Status Header */}
        <div className="flex justify-between items-center mb-16 px-4 py-2 bg-blue-500/5 border border-blue-500/10 rounded-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 tracking-tighter uppercase">
            <Radio size={14} className="animate-pulse" /> Data Stream: Active
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
            <Activity size={14} /> Neural Sync: 99%
          </div>
        </div>

        {/* --- SECTION 1: PREDICTIVE LOGIC --- */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3 text-blue-500">
            <BrainCircuit size={24} />
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-white">Neural Synthesis</h2>
          </div>
          <p className="text-slate-400 text-base leading-relaxed border-l-2 border-blue-500/20 pl-4">
            Advanced predictive modeling involves the systematic study of historical data sets to identify recurring sequences in digital distributions. 📊 By quantifying the frequency and variance of algorithmic shifts, analysts can develop a structured framework to understand how specific sequences align with **mathematical probability**. 🧬
          </p>
          <p className="text-slate-400 text-base leading-relaxed pl-4">
            Achieving precision in these logic-based environments requires objective observation and detailed data tracking. Small deviations in the sequence often signal a broader shift in the distribution model. 📈 Developing a **analytical mindset** is vital for anyone exploring the mechanics of probability and sequence logic. ✨
          </p>
        </section>

        {/* --- HIGH-TECH ACTION BUTTON --- */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-blue-500 blur opacity-10 group-hover:opacity-40 transition duration-700" />
          <button 
            onClick={handleLeadAction} 
            className="relative w-full overflow-hidden py-8 bg-[#0a0c10] border border-blue-500/30 rounded-xl transition-all duration-300
                       hover:border-blue-400 group
                       active:scale-[0.97] active:bg-blue-950/30"
          >
            {/* Moving Scanner Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-white uppercase italic">
                Connect To Lab <Zap size={24} fill="#3b82f6" className="text-blue-500" />
              </div>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.5em] opacity-70">Execute Analytics Protocol</span>
            </div>
          </button>
        </div>

        {/* --- SECTION 2: SYSTEM GUIDELINES --- */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Microscope size={24} />
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-white">System Security</h2>
          </div>
          <p className="text-slate-400 text-base leading-relaxed border-l-2 border-blue-500/20 pl-4">
            To explore the analytics environment securely, ensure your interface is synchronized for **real-time data acquisition**. 📡 Monitoring high-fidelity **live logic signals** allows for greater accuracy when navigating complex sequence shifts within the terminal. 🚀
          </p>
          <p className="text-slate-400 text-base leading-relaxed pl-4">
            When engaging with these logic challenges, maintaining a disciplined data-management plan ensures a consistent and controlled experience. 🛡️ Official community protocols provide the necessary tools to navigate digital environments with technical confidence and a steady, analytical approach to sequence mastering. 🔒
          </p>
        </section>

        {/* Technical Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col items-center opacity-30">
           <Terminal size={20} className="mb-2" />
           <span className="text-[8px] font-black tracking-[0.8em] uppercase">Neural_Terminal_v4.0.0</span>
        </div>

      </main>
    </div>
  );
};

export default Main22;