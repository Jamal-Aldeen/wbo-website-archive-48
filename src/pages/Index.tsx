
import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import CoreValues from '@/components/home/CoreValues';
import CallCenterSolutions from '@/components/home/CallCenterSolutions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Statistics />
      <CoreValues />
      <Testimonials />
      <CallCenterSolutions />
      <Footer />
    </div>
  );
};

export default Index;
