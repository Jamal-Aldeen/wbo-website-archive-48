
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const WhyOutsource = () => {
  const whyChooseUs = [
    'Proven expertise across multiple industries',
    'High-quality service with a focus on cost control and efficiency',
    'Agile teams and customized solutions tailored to your business goals',
    'Over 40 years of experience in multinational organizations in different industries',
    'Flexible, multilingual support with global standards',
  ];

  const whyEgypt = [
    {
      title: 'Youthful Talent Pool',
      description: 'Over 60% of Egypt’s population is under the age of 30, providing a vibrant, educated, and tech-savvy workforce.'
    },
    {
      title: 'Cost Advantage',
      description: 'The average salary cost in Egypt is 50–70% lower than in North America and Western Europe for comparable roles—without compromising quality.'
    },
    {
      title: 'Favorable Currency',
      description: 'With the Egyptian Pound (EGP) offering significant foreign exchange benefits, companies enjoy greater value for every dollar spent.'
    },
    {
      title: 'Strategic Location',
      description: 'Egypt’s geographic position bridges Europe, the Middle East, and Africa, making it ideal for time zone alignment and service delivery.'
    },
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
            <h2 className="heading-2 mb-6">Global-Bridge: Your Partner in Outsourcing</h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              At Global-Bridge, we provide smart outsourcing solutions that empower businesses to scale, streamline, and succeed. Specializing in call center services, IT support, software development, marketing operations, and business consultancy, we are your trusted partner for operational excellence.
            </p>
            
            <h3 className="font-bold text-xl mb-4 text-wbo-blue">Why Choose Us?</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {whyChooseUs.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <h3 className="font-bold text-xl mb-4 text-wbo-blue">Why Egypt?</h3>
            <p className="text-lg mb-8 leading-relaxed">
              Egypt is one of the most promising outsourcing destinations in the world today. Here’s why:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {whyEgypt.map((reason, index) => (
                <Card key={index} className="border-l-4 border-l-wbo-blue">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-wbo-blue">{reason.title}</h4>
                    <p>{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-lg mb-8 leading-relaxed text-center font-semibold">
              Let Global-Bridge connect your business to growth, innovation, and success.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyOutsource;