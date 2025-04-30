
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Collaborating with leading technology providers to deliver cutting-edge solutions."
    },
    {
      title: "Service Delivery Partners",
      description: "Working with specialized service providers to enhance our outsourcing capabilities."
    },
    {
      title: "Training & Development Partners",
      description: "Partnering with educational institutions to develop our talent pool."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Partners & Clients</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Our Partnership Approach</h2>
            
            <p className="text-lg mb-8 text-center">
              WorldBridge Outsourcing Solutions values strategic partnerships that enhance our service delivery 
              capabilities and provide added value to our clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {partnerCategories.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-wbo-blue">{category.title}</h3>
                    <p>{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Become a Partner</h3>
              <p className="mb-6">
                Interested in partnering with WorldBridge Outsourcing Solutions? 
                Contact us to explore potential collaboration opportunities.
              </p>
              <a href="/contact" className="inline-block bg-wbo-blue hover:bg-wbo-darkblue text-white px-6 py-2 rounded-md transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Partners;
