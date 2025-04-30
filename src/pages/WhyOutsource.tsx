
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const WhyOutsource = () => {
  const benefits = [
    'Flexibility',
    'Improved efficiencies',
    'Focus on core business',
    'Lower overhead',
    'Reduced payroll and benefit expenses',
    'Fewer capital investments',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Why Outsource?</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">What is Business Process Outsourcing (BPO)?</h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              Business Process Outsourcing (BPO) is the practice of using a third party, 
              contracted to perform specific, specialized processes on a company's behalf. 
              BPO is typically categorized into:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-wbo-blue">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-wbo-blue">Back Office Outsourcing</h3>
                  <p>Includes internal business functions such as human resources or finance and accounting.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-wbo-blue">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-wbo-blue">Front Office Outsourcing</h3>
                  <p>Includes call center services.</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed">
              BPO is about optimizing business performance to attain value creation. 
              BPO provides quantifiable benefits through:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyOutsource;
