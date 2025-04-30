
import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import CoreValues from '@/components/home/CoreValues';
import CallCenterSolutions from '@/components/home/CallCenterSolutions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <CoreValues />
      <CallCenterSolutions />
      <Footer />
    </div>
  );
};

export default Index;
