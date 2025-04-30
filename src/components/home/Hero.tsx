
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative bg-gradient-to-r from-wbo-darkblue to-wbo-blue pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            WORLDBRIDGE OUTSOURCING SOLUTIONS
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-medium text-white/90 mb-8"
            variants={itemVariants}
          >
            BPO EXPERTS IN SOUTHEAST ASIA
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/contact">
              <Button className="bg-white text-wbo-blue hover:bg-wbo-accent hover:text-white text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105">
                Contact us now!
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-white/20"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0.5
              }}
              animate={{
                x: [
                  `${Math.random() * 20 + 40}%`,
                  `${Math.random() * 20 + 60}%`,
                  `${Math.random() * 20 + 40}%`
                ],
                y: [
                  `${Math.random() * 20 + 40}%`,
                  `${Math.random() * 20 + 60}%`,
                  `${Math.random() * 20 + 40}%`
                ],
                scale: [0.7, 1.3, 0.7]
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
            ></motion.div>
          ))}
        </motion.div>

        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0
              }}
              initial={{ scaleX: 0, originX: Math.random() > 0.5 ? 0 : 1 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      {/* Digital Connection Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-wbo-accent to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
