
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">About Us</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-wbo-blue mb-8">GROW TOGETHER WITH OUTSOURCING SERVICES!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-wbo-blue mb-3">Goal</h3>
                <p>We are looking to further develop the Cambodia outsourcing industry by creating a professional, respected, and prosperous industry.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-wbo-blue mb-3">Mission</h3>
                <p>WBO targets the highest levels of international standards, confidential processes and information, enterprise-level data encryption, and secure communications.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-wbo-blue mb-3">Vision</h3>
                <p>We are developing the outsourcing industry in Cambodia. We will provide outsourcing services with a high level of productivity, broad language capacity, cultural diversity, and an established infrastructure.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-wbo-blue">Company Overview</h2>
              <p className="text-lg leading-relaxed mb-6">
                WorldBridge Outsourcing Solutions Co., Ltd. (WBO) is a member of the WorldBridge Group of companies. 
                We have a skilled professional team, equipped with reliable support systems to carry out all types 
                of BPO activities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Customer concerns are our concerns. Our quality management system ensures standard performance 
                equivalent to international standard ISO 9001:2000. All processes and information are kept confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
