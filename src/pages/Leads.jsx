import React, { useEffect, useState } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { ShieldCheck, Zap, ChevronRight } from 'lucide-react';

const PIXEL_ID = '2037806726999750';
const TELEGRAM_LINK = 'https://t.me/+Q5sNXXQFMos3N2Rl';
const AGENCY_LINK = 'https://t.me/Apexad_works';

const Leads = () => {
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        ReactPixel.init(PIXEL_ID, { autoConfig: true, debug: false });
        ReactPixel.pageView();
    }, []);

    useEffect(() => {
        const handleFocus = () => {
            setIsRedirecting(false);
        };
        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    const handleJoinClick = () => {
        setIsRedirecting(true);
        ReactPixel.track('Lead', {
            content_name: 'Telegram Group Join',
            content_category: 'Loss Recovery Access',
            currency: 'USD'
        });

        setTimeout(() => {
            window.location.href = TELEGRAM_LINK;
        }, 600);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">

                {/* Urgent Header Bar */}
                <div className="bg-[#24A1DE] py-2.5 px-4">
                    <p className="text-white text-center text-[10px] font-black uppercase tracking-[0.2em]">
                        Verified Prediction Channel
                    </p>
                </div>

                <div className="p-8">
                    {/* Logo Section */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-pulse" />
                        <div className="relative w-full h-full p-1 bg-white rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                            <img 
                                src="/logo.jpeg" 
                                className="w-full h-full rounded-full object-cover" 
                                alt="Logo" 
                                onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=Hack+Number&background=24A1DE&color=fff"}
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-[#24A1DE] p-1.5 rounded-full shadow-lg border-2 border-white">
                            <ShieldCheck size={14} className="text-white" />
                        </div>
                    </div>

                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-1 text-center">HACK NUMBER</h1>
                        <h2 className="text-lg font-bold text-[#24A1DE] tracking-[0.15em] uppercase opacity-90 text-center">Prediction</h2>
                    </div>

                    {/* Loss Recovery Section */}
                    <div className="space-y-4 mb-8">
                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl">
                            <p className="text-red-600 font-bold text-lg leading-tight mb-1">
                                बड़ा से बड़ा लॉस
                            </p>
                            <p className="text-slate-800 font-black text-2xl">
                                100% यहाँ <span className="text-green-600 underline decoration-2 underline-offset-4">Recover</span> होगा
                            </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                            <p className="text-slate-800 font-bold text-lg flex items-center justify-center gap-2">
                                <Zap size={18} className="text-amber-500 fill-amber-500" />
                                Sure Shot Prediction
                            </p>
                        </div>
                    </div>

                    {/* CTA Button Area */}
                    <div className="space-y-5">
                        <button
                            onClick={handleJoinClick}
                            disabled={isRedirecting}
                            className={`w-full py-5 px-6 rounded-2xl font-black text-white shadow-xl transition-all transform active:scale-[0.98] flex flex-col items-center justify-center leading-tight ${
                                isRedirecting
                                    ? 'bg-slate-400 cursor-wait'
                                    : 'bg-[#24A1DE] hover:bg-[#1e87bb] hover:shadow-[#24a1de]/30 shadow-blue-200'
                            }`}
                        >
                            {isRedirecting ? (
                                <span className="flex items-center gap-3">
                                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    CONNECTING...
                                </span>
                            ) : (
                                <>
                                    <span className="text-xl tracking-tight flex items-center gap-2 uppercase">
                                        Join Telegram Now <ChevronRight size={20} />
                                    </span>
                                    <span className="text-[10px] opacity-90 font-bold tracking-widest mt-1 uppercase text-center">
                                        Limited Free Access Today
                                    </span>
                                </>
                            )}
                        </button>

                        {/* Agency Link */}
                        <div className="text-center py-1">
                            <a 
                                href={AGENCY_LINK}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold text-blue-500/60 hover:text-[#24A1DE] transition-colors tracking-widest uppercase"
                            >
                                Managed by Apexad works
                            </a>
                        </div>

                        {/* Proof Image Section */}
                        <div className="relative group mt-2">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative">
                                <img 
                                    src="/One.jpeg" 
                                    alt="Proof" 
                                    className="rounded-[1.5rem] border border-slate-100 w-full shadow-sm"
                                    onError={(e) => e.target.style.display='none'} 
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    Live Proof
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-slate-50/80 py-4 px-8 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 text-center font-bold tracking-tight uppercase">
                        Admin: <span className="text-slate-600">Sure Shot Accuracy ✅</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Leads;