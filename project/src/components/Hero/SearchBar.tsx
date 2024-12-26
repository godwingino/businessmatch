import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
          placeholder="Business niche"
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
          placeholder="Location"
        />
      </div>
      <button
        type="button"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap"
      >
        <Search className="h-4 w-4" />
        Search
      </button>
    </div>
  );
}