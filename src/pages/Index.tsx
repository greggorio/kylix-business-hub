
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Benefits from '@/components/Benefits';
import AISection from '@/components/AISection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <div className="font-nunito">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Benefits />
      <AISection />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingChat />
      <Newsletter />
    </div>
  );
};

export default Index;
