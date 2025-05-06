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
      description: 'Our IT services empower your business with robust, scalable, and secure technology solutions, allowing your team to focus on innovation and growth.',
      features: [
        'Managed Services: We handle daily IT operations including remote monitoring, network administration, and robust cybersecurity to ensure seamless function and reduced downtime.',
        'Cloud Computing Services: Move your infrastructure to scalable and secure cloud platforms with support for SaaS, PaaS, and IaaS, leveraging solutions like Google Workspace, Heroku, and AWS.',
        'Network Services: We design and secure IT networks to ensure stable connectivity, prevent failures, optimize performance, and protect your data.',
        'Software Development and Implementation: Custom software tailored to your needs, seamlessly integrated with existing infrastructure for enhanced productivity and automation.',
        'Support and Help Desk Services: Multi-tiered support resolving minor glitches to critical outages, keeping your business running smoothly.',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageUrl: undefined,
    },
    {
      title: 'Call Center Services',
      description: 'Our call center services enhance customer experiences and reduce operational costs through professional, efficient, and technology-driven solutions.',
      features: [
        'Outsourcing Call Center Agencies: Reduce costs and improve service by outsourcing inbound and outbound call operations with trained agents using advanced communication tools.',
        'Telemarketing Agents: Dedicated professionals generate leads, qualify prospects, and drive sales with tailored scripts, performance tracking, and optimization.',
        'Admin and Remote Office Services: We manage back-office functions like data entry, scheduling, virtual assistance, and document handling for smooth operations at a lower cost.',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      imageUrl: undefined,
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
          <motion.ul 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-lg text-gray-600">
                <svg className="w-5 h-5 mt-1 text-wbo-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>
        </AlternatingServiceLayout>
      ))}
      
      <Footer />
    </div>
  );
};

export default Services;