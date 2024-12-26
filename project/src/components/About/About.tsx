import React from 'react';
import { Target, Rocket, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose BusinessMatch?</h2>
          <p className="mt-4 text-lg text-gray-600">Transforming how businesses connect and grow together</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Precise Matching</h3>
            <p className="text-gray-600">Our AI-powered algorithm ensures you find the most relevant business matches.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Growth</h3>
            <p className="text-gray-600">Accelerate your business growth with strategic partnerships and connections.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Globe2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-600">Connect with businesses worldwide and expand your market presence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}