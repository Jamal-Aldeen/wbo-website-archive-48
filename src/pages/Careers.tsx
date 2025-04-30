
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Careers</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8">Join Our Team</h2>
            
            <p className="text-lg mb-8">
              Currently, we don't have any open positions listed here, but we're always looking for talented individuals to join our team.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Why Work With Us?</h3>
              <p className="mb-6">
                At WorldBridge Outsourcing Solutions, we offer a dynamic work environment where professionals can grow their skills and advance their careers in the BPO industry.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional development opportunities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  International working environment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Competitive compensation packages
                </li>
              </ul>
              <Button className="bg-wbo-blue hover:bg-wbo-darkblue">Send Us Your Resume</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
