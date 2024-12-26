import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4">BusinessMatch</h3>
            <p className="text-sm text-blue-100">Building the future of business connections.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#">Features</a></li>
              <li><a href="/premium">Premium</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/admin">Admin</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-100">© 2024 BusinessMatch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#"><Github className="h-5 w-5" /></a>
            <a href="#"><Twitter className="h-5 w-5" /></a>
            <a href="#"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}