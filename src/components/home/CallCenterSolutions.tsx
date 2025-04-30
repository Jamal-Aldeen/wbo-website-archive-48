
import React from 'react';

const CallCenterSolutions = () => {
  const services = [
    'Customer Service',
    'Technical Support',
    'Telemarketing – Sales',
    'Inbound Sales',
    'Collections',
    'Order Management',
    'Ticketing – Bookings',
  ];

  const industries = [
    'BPO and Outsourcing',
    'Financial Services',
    'Market Research',
    'Entertainment',
    'Healthcare',
  ];

  return (
    <section className="section-padding bg-wbo-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Call Center Solutions</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            WBO Services, through its partners and suppliers, can offer next-generation platforms 
            that power millions of interactions for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Services We Offer</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-wbo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Industries We Serve</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-wbo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallCenterSolutions;
