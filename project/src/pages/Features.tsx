import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BentoGrid from '../components/Features/BentoGrid';
import Footer from '../components/Footer';

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Platform Features</h1>
        <BentoGrid />
      </div>
      <Footer />
    </div>
  );
}