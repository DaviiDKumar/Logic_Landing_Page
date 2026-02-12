import React, { useEffect, useState } from 'react';
import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = '2037806726999750';
const TELEGRAM_LINK = 'https://t.me/+Q5sNXXQFMos3N2Rl';

const Leads = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    ReactPixel.init(PIXEL_ID, { autoConfig: true, debug: false });
    ReactPixel.pageView();
  }, []);

  const handleJoinClick = () => {
    setIsRedirecting(true);
    ReactPixel.track('Lead', {
      content_name: 'Telegram Group Join',
      content_category: 'Conversion',
      currency: 'USD'
    });

    setTimeout(() => {
      window.location.href = TELEGRAM_LINK;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-white">
        
        {/* Top Accent Bar */}
        <div className="h-2 bg-[#24A1DE]"></div>

        <div className="p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3 shadow-sm">
              <svg className="w-10 h-10 text-[#24A1DE]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.76-3.35 3.7-1.51 4.46-1.77 4.96-1.78.11 0 .35.03.51.16.14.12.18.28.19.45.01.07.01.18 0 .24z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">COLOR PREDICTION</h1>
            <p className="text-slate-500 text-sm mt-1">Official Community Access</p>
          </div>

          {/* Rules/Info Grid */}
          <div className="space-y-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">How to Play</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose <span className="text-red-500 font-bold">Red</span>, <span className="text-green-500 font-bold">Green</span>, or <span className="text-purple-500 font-bold">Violet</span>. Predict the color drawn by the RNG every 30-60 seconds to win payouts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Violet Rule</p>
                <p className="text-slate-700 text-xs font-medium">Rare color, higher bonus payout.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Fair Play</p>
                <p className="text-slate-700 text-xs font-medium">100% RNG based independence.</p>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="space-y-4">
            <button
              onClick={handleJoinClick}
              disabled={isRedirecting}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white shadow-xl shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center gap-3 animate-pulse-slow ${
                isRedirecting ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#24A1DE] hover:bg-[#1e87bb] hover:-translate-y-1'
              }`}
            >
              {isRedirecting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  VERIFYING...
                </span>
              ) : (
                <>
                  <span className="tracking-wide">JOIN TELEGRAM NOW</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                4.8k Members Online Now
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 py-4 px-8 border-t border-slate-100">
          <p className="text-[9px] text-slate-400 text-center leading-tight">
            Must be 18+. Play Responsibly. By joining, you agree to our community guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leads;