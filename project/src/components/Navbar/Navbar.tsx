import React, { useState } from 'react';
import { Search, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Search className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">BusinessMatch</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600">Sign In</button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600">
              <Sparkles className="h-4 w-4 mr-2" />
              Get Premium
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="block w-full text-left px-3 py-2 text-gray-600">
                Sign In
              </button>
              <button className="block w-full text-left px-3 py-2 text-white bg-blue-600 rounded-md">
                <span className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get Premium
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}