
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CoreValues = () => {
  return (
    <section className="section-padding bg-wbo-offwhite">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-wbo-blue mx-auto mb-6"></div>
        </div>
        
        <Card className="border-none shadow-lg bg-white">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-center md:text-left text-gray-700">
              We have a highly skilled professional team, equipped with reliable support systems 
              to carry out all types of call centre services. Our Quality Management System ensures 
              standard performance that is equivalent to international standard ISO 9001:2000. 
              Internal codes of conduct, agreements with our staff, and monitoring systems ensure 
              that all documents and information are kept confidential.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoreValues;