import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AlternatingServiceLayout from '@/components/services/AlternatingServiceLayout';

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const servicesData = [
    {
      title: 'IT Services',
      description: 'With our IT support solutions, you will gain access to multi-level solutions and services ranging from web development, mobile applications development, server data center management and maintenance, and web hosting.',
      features: [
        {
          subtitle: 'Managed Services',
          content: 'We handle the daily IT operations so your internal team can focus on innovation. This includes remote monitoring, network administration, and robust cybersecurity. We ensure seamless IT function and reduced downtime.'
        },
        {
          subtitle: 'Cloud Computing Services',
          content: 'Move your infrastructure to the cloud with scalable and secure platforms. We support Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS). Our expertise spans solutions like Google Workspace, Heroku, and AWS.'
        },
        {
          subtitle: 'Network Services',
          content: 'From designing to securing your IT network, we ensure stable and efficient connectivity. Our services help prevent network failures, optimize performance, and protect your data.'
        },
        {
          subtitle: 'Software Development and Implementation',
          content: 'We develop custom software tailored to your business needs. Our team integrates new systems seamlessly with existing infrastructure for enhanced productivity and automation.'
        },
        {
          subtitle: 'Support and Help Desk Services',
          content: 'Our support team resolves everything from minor glitches to critical system outages. We offer multi-tiered help desk services to keep your business running smoothly.'
        },
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Call Center Services',
      description: 'We provide inbound and outbound contact center services covering calls. Our trained professionals ensure excellent customer experiences by handling inquiries, supporting technical issues, and facilitating sales processes efficiently.',
      features: [
        {
          subtitle: 'Outsourcing Call Center Agencies',
          content: 'Reduce operational costs and improve customer service by outsourcing your inbound and outbound call operations. We provide trained agents equipped with the latest communication tools.'
        },
        {
          subtitle: 'Telemarketing Agents',
          content: 'Our dedicated telemarketing professionals help generate leads, qualify prospects, and drive sales. We offer tailored scripts, performance tracking, and continuous optimization.'
        },
        {
          subtitle: 'Admin and Remote Office Services',
          content: 'We manage essential back-office functions including data entry, scheduling, virtual assistance, and document handling. Our remote admin teams ensure smooth operations at a fraction of the cost.'
        },
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
        className="pt-32 pb-16 bg-wbo-blue text-white"
      >
        <div className="container-custom">
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            Our Services
          </motion.h1>
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-white mx-auto mb-6"
          />
        </div>
      </motion.div>

      {servicesData.map((service, index) => (
        <AlternatingServiceLayout
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          imageUrl={service.imageUrl}
          reverse={index % 2 === 1}
          backgroundColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <div className="space-y-4">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="pl-4 border-l-2 border-wbo-blue">
                {typeof feature === 'string' ? (
                  <>
                    <h4 className="font-semibold text-wbo-darkblue mb-1">{feature}</h4>
                    <p className="text-sm text-gray-600">Comprehensive {service.title.toLowerCase()} solutions tailored to your needs.</p>
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold text-wbo-darkblue mb-1">{feature.subtitle}</h4>
                    <p className="text-sm text-gray-600">{feature.content}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </AlternatingServiceLayout>
      ))}
      
      <Footer />
    </div>
  );
};

export default Services;