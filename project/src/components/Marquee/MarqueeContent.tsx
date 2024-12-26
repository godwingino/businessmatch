import React from 'react';
import { Users, TrendingUp, Globe2, Award } from 'lucide-react';

export default function MarqueeContent() {
  const items = [
    { icon: <Users className="h-6 w-6" />, text: "50,000+ Active Users" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "89% Success Rate" },
    { icon: <Globe2 className="h-6 w-6" />, text: "Global Coverage" },
    { icon: <Award className="h-6 w-6" />, text: "#1 Business Search Platform" },
  ];

  return (
    <div className="flex space-x-12">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 text-white">
          {item.icon}
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
}