
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  reverse?: boolean;
  backgroundColor?: string;
}

const AlternatingServiceLayout: React.FC<ServiceProps> = ({ 
  title, 
  description, 
  icon, 
  imageUrl = '/placeholder.svg', 
  reverse = false,
  backgroundColor = 'bg-white'
}) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container-custom">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto object-cover aspect-video" 
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-wbo-blue mb-2">
              <div className="text-wbo-blue">{icon}</div>
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <div className="w-20 h-1 bg-wbo-blue"></div>
            <p className="text-gray-600 text-lg">{description}</p>
            <motion.button 
              className="mt-4 bg-wbo-blue hover:bg-wbo-darkblue text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingServiceLayout;
