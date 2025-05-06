
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  reverse?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
  layout?: 'standard' | 'stacked' | 'card';
  imagePriority?: boolean;
}

const AlternatingServiceLayout: React.FC<ServiceProps> = ({ 
  title, 
  description, 
  icon, 
  imageUrl = '/placeholder.svg', 
  reverse = false,
  backgroundColor = 'bg-white',
  children,
  layout = 'standard',
  imagePriority = false
}) => {
// Standard layout (side by side)
if (layout === 'standard') {
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
            
            {children}
            
            {!children && (
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stacked layout (image on top, text below)
if (layout === 'stacked') {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 text-wbo-blue mb-4">
            <div className="text-wbo-blue">{icon}</div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <div className="w-20 h-1 bg-wbo-blue mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">{description}</p>
        </div>

        {imagePriority ? (
          <motion.div
            className="max-w-5xl mx-auto mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </motion.div>
        ) : null}

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>

        {!imagePriority && imageUrl !== '/placeholder.svg' ? (
          <motion.div
            className="max-w-5xl mx-auto mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

// Card layout (card-based design)
if (layout === 'card') {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container-custom">
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            {!reverse && imageUrl !== '/placeholder.svg' && (
              <div className="md:w-2/5">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            
            <div className="p-8 md:p-12 md:w-3/5">
              <div className="flex items-center gap-4 text-wbo-blue mb-4">
                <div className="text-wbo-blue">{icon}</div>
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
              <div className="w-20 h-1 bg-wbo-blue mb-6"></div>
              <p className="text-gray-600 text-lg mb-6">{description}</p>
              
              {children}
              
              {!children && (
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
              )}
            </div>
            
            {reverse && imageUrl !== '/placeholder.svg' && (
              <div className="md:w-2/5">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

return null;
};

export default AlternatingServiceLayout;