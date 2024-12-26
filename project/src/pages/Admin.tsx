import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Users, BarChart2, Settings } from 'lucide-react';

export default function Admin() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">Total Users</h3>
            </div>
            <p className="text-3xl font-bold">50,234</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">Active Matches</h3>
            </div>
            <p className="text-3xl font-bold">12,543</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">System Status</h3>
            </div>
            <p className="text-lg font-medium text-green-600">All Systems Operational</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              'New premium subscription: John Doe',
              'System update completed',
              'New business match: TechCorp + InnovateLLC',
              'User report generated',
            ].map((activity, index) => (
              <div key={index} className="py-2 border-b border-gray-100">
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}