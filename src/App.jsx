import { useState, useEffect } from 'react';
import { Send, Flame, ShieldCheck, Zap, ChevronRight, ChevronLeft } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let target = new Date();
      // Daily reset at 5:00 PM (17:00)
      target.setHours(17, 0, 0, 0);

      if (now >= target) {
        target.setDate(target.getDate() + 1);
      }

      const difference = target - now;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openTelegram = () => {
    window.open('https://telegram.me/+uEWhmljkjB1jYWI1', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Aesthetic Background with Pulsing Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <img 
          src="https://images.unsplash.com/photo-1611974762655-8488033069e6?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-[0.1] mix-blend-overlay scale-110 "
          alt="bg"
        />
      </div>

      {/* Main Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-md bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-3xl border border-white/10 p-8 rounded-[3.5rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] text-center">
        
        {/* Logo Section with 3D Depth and Shadow */}
     <div className="relative mb-10 group flex justify-center">
  {/* The Main Glow Aura */}
  <div className="absolute w-36 h-36 bg-white/10 blur-[40px] rounded-full group-hover:bg-white/20 transition-all duration-700"></div>

  {/* 3D Container with Lifted Shadows */}
  <div className="relative w-32 h-32 rounded-full p-[2px] bg-white transition-all duration-500 
                  /* White Glowing Border */
                  shadow-[0_0_15px_rgba(255,255,255,0.4)]
                  /* 3D Lifted Effect (Right & Bottom) */
                  shadow-[10px_10px_25px_rgba(0,0,0,0.9),4px_4px_10px_rgba(0,0,0,0.5)]
                  group-hover:shadow-[15px_15px_35px_rgba(0,0,0,1)] group-hover:-translate-y-1">
    
    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50 bg-black">
      <img 
        src="/logo.jpeg" 
        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500 shadow-inner" 
        alt="Logo"
        onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=LOGO" }}
      />
    </div>

    {/* Subtle White Highlight on the top-left edge for extra 3D feel */}
    <div className="absolute inset-0 rounded-full border-t border-l border-white/30 pointer-events-none"></div>
  </div>
</div>

        {/* Title */}
        <h1 className="text-4xl font-black text-red-600 mb-8 tracking-tighter uppercase italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          Free Hack Channel <br/> WIN 💯
        </h1>

        {/* PREMIUM BUTTON: Blue by default, Black on Hover */}
        <div className="relative w-full mb-10 group cursor-pointer" onClick={openTelegram}>
          <div className="absolute -inset-[2px] bg-[#24A1DE] rounded-2xl blur-md opacity-20 group-hover:opacity-100 transition-all duration-500"></div>
          
          <button className="relative w-full bg-[#24A1DE] border border-white/20 rounded-2xl py-5 flex items-center justify-center overflow-hidden transition-all duration-500">
            {/* Black Liquid Hover Effect */}
            <div className="absolute inset-0 bg-[#0a0a0a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] skew-x-[-25deg]"></div>
            
            <div className="relative flex items-center justify-center gap-4 w-full px-6 text-white">
              <ChevronLeft className="w-5 h-5 flex-shrink-0" />
              <span className="text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap drop-shadow-md group-hover:scale-105 transition-transform">
                Join TELEGRAM
              </span>
              <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </div>
          </button>
        </div>

        {/* Benefit List */}
        <div className="space-y-3 mb-10">
          {[
            { t: "VIP Sureshots", i: <Flame className="w-5 h-5 text-orange-500" /> },
            { t: "Live Sessions", i: <ShieldCheck className="w-5 h-5 text-green-500" /> },
            { t: "100% Winning", i: <Zap className="w-5 h-5 text-yellow-500" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all">
              <div className="p-2 bg-black/20 rounded-lg">{item.i}</div>
              <p className="text-sm font-black uppercase tracking-widest text-gray-300 text-left">{item.t}</p>
            </div>
          ))}
        </div>

        {/* Aesthetic Timer Grid */}
        <div className="grid grid-cols-4 gap-3 mb-10">
          {[
            { l: 'DAYS', v: timeLeft.days },
            { l: 'HRS', v: timeLeft.hours },
            { l: 'MIN', v: timeLeft.minutes },
            { l: 'SEC', v: timeLeft.seconds }
          ].map((u, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl border border-white/10 shadow-inner">
                <span className="text-2xl sm:text-3xl font-black text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                  {String(u.v).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[9px] text-gray-500 mt-3 font-black tracking-[0.2em]">{u.l}</span>
            </div>
          ))}
        </div>

        {/* Footer with Underlined Bazigar Ads Link */}
      <div className="pt-6 border-t border-white/5">
  <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium leading-relaxed">
    Ads Managed by <br />
    {/* Functional Link Wrapper */}
    <a 
      href="https://telegram.me/Bazigarr02" // Replace with your actual link
      target="_blank" 
      rel="noopener noreferrer"
      className="relative inline-block text-white font-black cursor-pointer group/link mt-1"
    >
      Bazigar ads
      {/* Animated Underline */}
      <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#24A1DE] transition-all duration-300 group-hover/link:h-[2px] shadow-[0_0_8px_rgba(36,161,222,0.5)]"></span>
      {/* Extra hover glow for the text */}
      <span className="absolute inset-0 w-full h-full bg-blue-400/0 group-hover/link:bg-blue-400/5 blur-md transition-all duration-300 rounded-lg"></span>
    </a>
  </p>
</div>
      </div>
    </div>
  );
}

export default App;