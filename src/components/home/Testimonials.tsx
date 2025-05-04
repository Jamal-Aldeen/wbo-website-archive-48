import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Testimonial = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  const testimonials = [
    {
      quote: 'Global-Bridge transformed our customer support operations, delivering exceptional service at a fraction of the cost.',
      author: 'Jane Doe, CEO of TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'Their IT solutions team built a custom platform that scaled with our growth. Highly recommend their expertise!',
      author: 'John Smith, CTO of InnovateX',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'The team’s professionalism and dedication made outsourcing our marketing operations a seamless experience.',
      author: 'Emily Chen, CMO of GrowEasy',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isSectionInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-wbo-blue mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-wbo-accent mx-auto mb-8"></motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-bold text-wbo-blue">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;