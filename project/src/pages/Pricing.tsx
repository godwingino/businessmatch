import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600">Choose the plan that's right for your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-8">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
            <div className="space-y-4 mb-8">
              {['Basic search functionality', 'Limited connections', 'Standard support'].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4">Premium</h2>
            <p className="text-4xl font-bold mb-8">$29<span className="text-lg font-normal text-gray-600">/month</span></p>
            <div className="space-y-4 mb-8">
              {[
                'Advanced search features',
                'Unlimited connections',
                'Priority support',
                'Analytics dashboard',
                'Custom profile',
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold">
              Get Premium
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}