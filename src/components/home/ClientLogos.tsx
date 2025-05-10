
import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'We telecomegypt', logo: 'we.jpg' },
  { name: 'Bank Audi', logo: 'bank-audi.png' },
  { name: 'FTI', logo: 'fti.png' },
  { name: 'Commvault', logo: 'comm.png' },
  { name: 'FAB', logo: 'fab.png' },
  { name: 'CIB', logo: 'cib.png' },
  { name: 'vmware', logo: 'vmware.png' },
  { name: 'ACT', logo: 'act.png' },
];

const ClientLogos = () => {
  return (
    <section className="bg-wbo-offwhite py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-wbo-darkblue">Our Expertise</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 md:h-16"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;