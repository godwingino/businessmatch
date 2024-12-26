import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Business Networking',
      excerpt: 'Discover how AI is transforming the way businesses connect and collaborate.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'Success Stories: Small Business Edition',
      excerpt: 'Learn how small businesses are thriving through strategic partnerships.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'Maximizing Your Business Profile',
      excerpt: 'Tips and tricks to make your BusinessMatch profile stand out.',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Latest Updates</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <button className="mt-4 text-blue-600 font-medium">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}