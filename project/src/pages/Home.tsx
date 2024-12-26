import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import BentoGrid from '../components/Features/BentoGrid';
import About from '../components/About/About';
import TutorialVideo from '../components/Tutorial/TutorialVideo';
import ReviewSection from '../components/Reviews/ReviewSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <About />
      <TutorialVideo />
      <ReviewSection />
      <Footer />
    </div>
  );
}