
import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/150x60?text=Client+1' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/150x60?text=Client+2' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/150x60?text=Client+3' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/150x60?text=Client+4' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/150x60?text=Client+5' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/150x60?text=Client+6' },
  { name: 'Client 7', logo: 'https://via.placeholder.com/150x60?text=Client+7' },
  { name: 'Client 8', logo: 'https://via.placeholder.com/150x60?text=Client+8' },
];

const ClientLogos = () => {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-red-500">OUR CLIENTS</h2>
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
