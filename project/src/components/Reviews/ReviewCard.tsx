import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function ReviewCard({ name, role, content, rating, image }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="h-12 w-12 rounded-full" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}