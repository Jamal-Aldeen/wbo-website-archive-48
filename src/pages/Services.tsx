
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import AlternatingServiceLayout from '@/components/services/AlternatingServiceLayout';
// import HeroServiceLayout from '@/components/services/HeroServiceLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const servicesData = [
    {
      title: 'Data Processing',
      description: 'We specialize in data entry services, document scanning, data mining, and cleaning. We ensure that your project becomes less complicated for you. We handle all our projects with high accuracy, utmost data security, and confidentiality.',
      features: [
        'High-volume data entry and processing',
        'Document scanning and digitization',
        'Data mining and cleaning services',
        'Data validation and verification',
        'Form processing and data extraction',
        'Image and document processing'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Data Analysis',
      description: 'Data and document processing captures raw data. We can convert, analyze, and present data for management consideration. Our team of analysts use advanced tools to transform your raw data into meaningful insights that drive business decisions.',
      features: [
        'Statistical analysis and reporting',
        'Trend identification and forecasting',
        'Data visualization and dashboarding',
        'Market research data analysis',
        'Business intelligence solutions',
        'Custom analytics solutions'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Contact Center',
      description: 'We provide inbound and outbound contact center services covering calls. Our trained professionals ensure excellent customer experiences by handling inquiries, supporting technical issues, and facilitating sales processes efficiently.',
      features: [
        'Customer service support',
        'Technical support helpdesk',
        'Telemarketing services',
        'Inbound sales management',
        'Collections and account management',
        'Order processing and management',
        'Event ticketing and bookings'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'HR Outsourcing',
      description: 'HR outsourcing services allow your business to outsource a range of tasks from benefit administration and training to recruiting, hiring, and payroll administration. We are ideal for companies of all sizes who do not have the resources required to expand an in-house HR team or lack the expertise.',
      features: [
        'Recruitment and talent acquisition',
        'Payroll processing and management',
        'Benefits administration',
        'Employee training and development',
        'Performance management systems',
        'HR compliance and documentation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'IT Solutions',
      description: 'With our IT support solutions, you will gain access to multi-level solutions and services ranging from web development, mobile applications development, server data center management and maintenance, and web hosting.',
      features: [
        'Web and mobile application development',
        'Cloud infrastructure management',
        'IT consulting and strategy planning',
        'Network setup and management',
        'Cybersecurity services',
        'Technical support and maintenance'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Our Services</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-center max-w-3xl mx-auto">
            Explore our comprehensive range of business process outsourcing services designed to help your organization thrive in today's competitive landscape.
          </p>
        </div>
      </div>

      {servicesData.map((service, index) => (
                <AlternatingServiceLayout
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  imageUrl={service.imageUrl}
                  reverse={index % 2 === 1}
                  backgroundColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                />
              ))}
      
      <Footer />
    </div>
  );
};

export default Services;