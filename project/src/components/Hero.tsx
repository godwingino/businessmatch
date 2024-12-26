import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Office background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-400/20">
            Announcing $3 Million Series A Funding
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find the Perfect Business Match
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover and connect with businesses across any niche, anywhere in the world.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Business niche"
              />
            </div>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Location"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}