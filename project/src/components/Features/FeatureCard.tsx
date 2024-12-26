import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export default function FeatureCard({ title, description, icon: Icon, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl border-2 border-blue-100 shadow-md ${className}`}>
      <Icon className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}