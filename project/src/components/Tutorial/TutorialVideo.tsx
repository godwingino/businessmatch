import React from 'react';
import { Play } from 'lucide-react';

export default function TutorialVideo() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Watch our quick tutorial to get started with BusinessMatch</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Tutorial thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="h-8 w-8 text-blue-600 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}