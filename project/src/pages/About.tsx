import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Target, Users, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BusinessMatch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing how businesses connect and grow together through our innovative matching platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Target className="h-8 w-8 text-blue-600" />,
              title: 'Our Mission',
              description: 'To empower businesses worldwide by creating meaningful connections that drive growth.',
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: 'Our Team',
              description: 'A diverse group of experts dedicated to transforming business networking.',
            },
            {
              icon: <Globe2 className="h-8 w-8 text-blue-600" />,
              title: 'Our Impact',
              description: 'Supporting over 50,000 businesses across 100+ countries.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}