
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left image section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070"
            alt="BPO Professional" 
            className="w-full h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wbo-darkblue/60 to-transparent"></div>
        </motion.div>
        
        {/* Right content section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wbo-darkblue mb-6">
          Connecting your business to growth, innovation and success
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Empowering businesses to scale, streamline, and succeed. Specializing in call center services, 
            IT support, software development, marketing operations, and business consultancy, we are 
            your trusted partner for operational excellence.
          </p>
          <div className="mb-8">
            <p className="text-xl font-semibold text-wbo-blue">
              Global bridge is a leader who thinks local and acts global
            </p>
            <p className="mt-2 text-gray-700">
              We simplify outsourcing. You provide the job description, and we take care of the rest.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/contact">
              <Button className="bg-wbo-accent hover:bg-wbo-darkblue text-white rounded-full px-8 py-3 text-lg">
              START OUTSOURCING TODAY
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;