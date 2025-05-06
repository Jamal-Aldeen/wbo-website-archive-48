import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const headerRef = useRef(null);
  const partnersRef = useRef(null);
  const becomePartnerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });
  const isPartnersInView = useInView(partnersRef, { once: false, amount: 0.3 });
  const isBecomePartnerInView = useInView(becomePartnerRef, { once: false, amount: 0.3 });

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

  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Collaborating with leading technology providers to deliver cutting-edge solutions.',
    },
    {
      title: 'Service Delivery Partners',
      description: 'Working with specialized service providers to enhance our outsourcing capabilities.',
    },
    {
      title: 'Training & Development Partners',
      description: 'Partnering with educational institutions to develop our talent pool.',
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
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Partners & Clients
          </motion.h1>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-white mx-auto"></motion.div>
        </div>
      </motion.div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.h2 variants={itemVariants} className="heading-2 mb-8 text-center">
              Our Partnership Approach
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg mb-8 text-center">
            Global Bridge Outsourcing Solutions values strategic partnerships that enhance our service delivery capabilities and provide added value to our clients.
            </motion.p>

            <motion.div
              ref={partnersRef}
              variants={containerVariants}
              initial="hidden"
              animate={isPartnersInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {partnerCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-wbo-blue">{category.title}</h3>
                      <p>{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={becomePartnerRef}
              variants={containerVariants}
              initial="hidden"
              animate={isBecomePartnerInView ? 'visible' : 'hidden'}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            >
              <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">
                Become a Partner
              </motion.h3>
              <motion.p variants={itemVariants} className="mb-6">
                Interested in partnering with Global Bridge Outsourcing Solutions? Contact us to explore potential collaboration opportunities.
              </motion.p>
              <motion.a
                variants={itemVariants}
                href="/contact"
                className="inline-block bg-wbo-blue hover:bg-wbo-darkblue text-white px-6 py-2 rounded-md transition-colors"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;