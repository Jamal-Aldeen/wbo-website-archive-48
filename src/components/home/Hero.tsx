
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-wbo-darkblue to-wbo-blue pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeIn">
            WORLDBRIDGE OUTSOURCING SOLUTIONS
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            BPO EXPERTS IN SOUTHEAST ASIA
          </p>
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button className="bg-white text-wbo-blue hover:bg-wbo-accent hover:text-white text-lg px-8 py-6">
                Contact us now!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
