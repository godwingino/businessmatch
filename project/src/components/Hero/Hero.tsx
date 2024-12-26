import React from 'react';
import SearchBar from './SearchBar';
import HeroMockup from './HeroMockup';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-100 text-blue-700 mb-8">
              <span className="mr-2">🎉</span>
              Announcing $3 Million Series A Funding
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Find the Perfect Business Match
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Discover and connect with businesses across any niche, anywhere in the world.
            </p>
            
            <SearchBar />
          </div>
          
          <div className="hidden lg:block">
            <HeroMockup />
          </div>
        </div>
      </div>
    </div>
  );
}