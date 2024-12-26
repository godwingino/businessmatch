import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Crown, Check } from 'lucide-react';

export default function Premium() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Premium Features</h1>
          <p className="text-gray-600">Unlock the full potential of BusinessMatch</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
          <div className="flex items-center mb-8">
            <Crown className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">Premium Plan</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {[
              'Advanced business analytics',
              'Priority matching algorithm',
              'Unlimited business connections',
              'Direct messaging system',
              'Custom business profile',
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold">
            Get Premium Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}