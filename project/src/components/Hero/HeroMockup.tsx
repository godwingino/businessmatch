import React from 'react';

export default function HeroMockup() {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-[640px]">
        {/* MacBook frame */}
        <div className="relative mx-auto bg-[#1d1d1f] rounded-[20px] pt-[20px] pb-[40px] px-[20px] shadow-2xl">
          {/* Screen bezel */}
          <div className="relative bg-[#1d1d1f] rounded-[10px] overflow-hidden">
            {/* Camera notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[150px] bg-[#1d1d1f] rounded-b-lg z-10">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-2 w-2 rounded-full bg-[#333]" />
            </div>
            
            {/* Screen content */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#333]">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="BusinessMatch Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-150" />
      </div>
    </div>
  );
}