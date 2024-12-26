import React from 'react';
import FeatureCard from './FeatureCard';
import { Search, BarChart3, Zap, Shield, Users2, Crown } from 'lucide-react';

export default function BentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Smart Search"
          description="Advanced algorithms to find the perfect business match"
          icon={Search}
          className="md:col-span-2 hover:shadow-xl transition-shadow"
        />
        <FeatureCard
          title="Analytics"
          description="Detailed insights and market analysis"
          icon={BarChart3}
          className="hover:shadow-xl transition-shadow"
        />
        <FeatureCard
          title="Real-time Updates"
          description="Stay informed with instant notifications"
          icon={Zap}
          className="hover:shadow-xl transition-shadow"
        />
        <FeatureCard
          title="Secure Platform"
          description="Enterprise-grade security for your data"
          icon={Shield}
          className="md:col-span-2 hover:shadow-xl transition-shadow"
        />
        <FeatureCard
          title="Premium Features"
          description="Unlock advanced capabilities"
          icon={Crown}
          className="md:col-span-2 hover:shadow-xl transition-shadow"
        />
        <FeatureCard
          title="Community"
          description="Connect with other business owners"
          icon={Users2}
          className="hover:shadow-xl transition-shadow"
        />
      </div>
    </div>
  );
}