
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070"
            alt="BPO Professional Team" 
            className="w-full h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wbo-darkblue/80 to-wbo-blue/30"></div>
          
          {/* Floating elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-10 left-10 backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20 text-white max-w-xs"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-wbo-teal animate-pulse"></div>
              <span className="text-sm font-medium">Southeast Asia's BPO Leader</span>
            </div>
            <p className="text-sm opacity-80">Serving global enterprises with innovative solutions since 2005</p>
          </motion.div>
        </motion.div>
        
        {/* Right content section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-wbo-blue/5"></div>
          <div className="absolute right-32 top-16 w-24 h-24 rounded-full bg-wbo-teal/5"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-wbo-teal font-semibold uppercase tracking-wider">Business Process Outsourcing</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wbo-darkblue mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-wbo-darkblue to-wbo-lightblue">Connecting your customers</span> to your brand and making them your advocates
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Understand how we deliver and build value across all channels, leveraging
              end-to-end customer lifecycle management to acquire, retain and facilitate
              superior customer experiences by reimagining great and making it happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <Link to="/contact">
                  <Button className="bg-wbo-blue hover:bg-wbo-darkblue text-white rounded-full px-8 py-3 text-lg">
                    REIMAGINE YOUR CX
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-wbo-blue to-wbo-teal rounded-full blur opacity-30 group-hover:opacity-50 transition"></div>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/services">
                  <Button variant="outline" className="text-wbo-blue hover:text-wbo-darkblue border-wbo-blue hover:border-wbo-darkblue rounded-full px-8 py-3 text-lg">
                    OUR SERVICES
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
