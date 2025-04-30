
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const leaders = [
  {
    name: 'Sarah Johnson',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    description: 'With over 20 years of experience in the BPO industry, Sarah leads our global strategy and operations.'
  },
  {
    name: 'Michael Chen',
    title: 'Chief Operations Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    description: 'Michael oversees our day-to-day operations, ensuring excellent service delivery across all divisions.'
  },
  {
    name: 'David Rodriguez',
    title: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    description: 'David drives our technological innovations and digital transformation initiatives.'
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1573497019236-61e1fb96d8fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    description: 'Priya leads our global marketing strategy and brand development across all regions.'
  }
];

const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
  }, []);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  }, []);
  
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-wbo-gray to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wbo-blue">Our Leadership Team</h2>
          <div className="w-24 h-1 bg-wbo-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who drive our vision forward and ensure we deliver exceptional service to our clients.
          </p>
        </motion.div>
        
        <div className="relative px-4 sm:px-8">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 items-center"
          >
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-wbo-blue to-wbo-lightblue p-1">
                  <img 
                    src={leaders[activeIndex].image} 
                    alt={leaders[activeIndex].name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -z-10 w-64 h-64 bg-wbo-accent/20 rounded-2xl -bottom-3 -right-3"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-wbo-darkblue mb-2">{leaders[activeIndex].name}</h3>
              <p className="text-wbo-lightblue font-medium mb-4">{leaders[activeIndex].title}</p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{leaders[activeIndex].description}</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-wbo-blue/10 text-wbo-blue hover:bg-wbo-blue hover:text-white transition-colors"
                  aria-label="Previous leader"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2">
                  {leaders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex ? 'bg-wbo-blue scale-125' : 'bg-wbo-blue/30'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-wbo-blue/10 text-wbo-blue hover:bg-wbo-blue hover:text-white transition-colors"
                  aria-label="Next leader"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
