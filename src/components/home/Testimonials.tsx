
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "WorldBridge Outsourcing Solutions has been a game-changer for our customer service operations. Their team has consistently exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Operations Director, TechGlobal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Working with WBO has allowed us to scale our operations efficiently while maintaining exceptional quality standards across all our processes.",
    author: "Michael Chen",
    position: "CEO, DataFlow Systems",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The team at WorldBridge brings a level of expertise and cultural understanding that has been invaluable for our expansion into Southeast Asian markets.",
    author: "Emma Rodriguez",
    position: "Global Expansion Manager, MarketWave",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-wbo-darkblue to-wbo-blue text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 + '%',
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: ['-20%', '120%'],
                transition: {
                  repeat: Infinity,
                  duration: Math.random() * 15 + 15,
                  ease: "linear",
                  delay: Math.random() * 10
                }
              }}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="relative h-80 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <Card className="border-none bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto opacity-60 mb-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl">{testimonials[active].quote}</p>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <div className="mr-4">
                      <img 
                        src={testimonials[active].image} 
                        alt={testimonials[active].author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white" 
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{testimonials[active].author}</p>
                      <p className="text-sm opacity-75">{testimonials[active].position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${index === active ? 'bg-white scale-125' : 'bg-white/40'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
