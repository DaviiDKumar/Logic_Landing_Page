import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const Leads = () => {
  const PIXEL_ID = '1556362512084241';
  const TELEGRAM_LINK = 'https://t.me/+B6zODkIocggwMTE1';

  useEffect(() => {
    // Initialize Pixel
    ReactPixel.init(PIXEL_ID);
    ReactPixel.pageView();
    
    // Tracking page load for quality analysis
    ReactPixel.track('ViewContent', {
      content_name: 'Game Rules Page',
      category: 'Information'
    });
  }, []);

  const handleJoinClick = (e) => {
    e.preventDefault();

    // Trigger Lead event on button click
    ReactPixel.track('Lead', {
      content_name: 'Telegram Join Button',
      source: 'Rules_Page'
    });

    // 500ms delay to ensure Pixel fires before redirect
    setTimeout(() => {
      window.location.href = TELEGRAM_LINK;
    }, 500);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center justify-center font-sans p-4">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-blue-600 p-6 text-center">
          <h1 className="text-white text-xl font-bold uppercase tracking-wide">
            Official Game Rules
          </h1>
        </div>

        {/* Instructions Body */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-700">How to Participate:</h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-md px-2 py-1 text-xs mt-0.5">STEP 1</div>
              <p className="text-sm leading-relaxed text-gray-600">
                Join our official community channel for the latest updates and schedules.
              </p>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-md px-2 py-1 text-xs mt-0.5">STEP 2</div>
              <p className="text-sm leading-relaxed text-gray-600">
                Read the pinned rules carefully to understand the game mechanics and point system.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-md px-2 py-1 text-xs mt-0.5">STEP 3</div>
              <p className="text-sm leading-relaxed text-gray-600">
                Contact the support admin inside the group if you have any questions regarding your account.
              </p>
            </li>
          </ul>

          {/* Simple Button */}
          <button 
            onClick={handleJoinClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            JOIN TELEGRAM NOW
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase font-semibold">
            Community Managed Access • Link Updated Today
          </p>
        </div>
      </div>
      
      <p className="mt-6 text-gray-400 text-xs">
        © 2026 Game Support Group. All Rights Reserved.
      </p>
    </div>
  );
};

export default Leads;