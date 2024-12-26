import React from 'react';
import MarqueeContent from './MarqueeContent';

export default function Marquee() {
  return (
    <div className="bg-blue-600 py-4 overflow-hidden border-y border-blue-500">
      <div className="animate-marquee whitespace-nowrap">
        <MarqueeContent />
      </div>
    </div>
  );
}