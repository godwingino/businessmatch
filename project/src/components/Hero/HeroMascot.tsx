import React from 'react';

export default function HeroMascot() {
  return (
    <div className="relative">
      <img
        src="https://replicate.delivery/pbxt/IJJzODmvFiRMKBIzv1nh8dtYL4wkaYhwGxqNvL2PA4QS9prQA/out-0.png"
        alt="AI Business Assistant"
        className="w-full h-auto rounded-2xl shadow-2xl"
      />
      
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-150" />
    </div>
  );
}