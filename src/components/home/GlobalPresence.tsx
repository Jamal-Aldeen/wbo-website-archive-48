
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { value: 22, label: "Countries", suffix: "", color: "red-500" },
  { value: 18, label: "Employees Globally", suffix: "K+", color: "purple-700" },
  { value: 36, label: "Active Sites", suffix: "", color: "orange-400" },
  { value: 50, label: "Transactions Per Month", suffix: "M+", color: "green-500" },
  { value: 500, label: "Customers Served", suffix: "M+", color: "indigo-800" }
];

const CountUp = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = duration / 50;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const GlobalPresence = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 leading-tight">
              A global industry leader who thinks local and acts global to orchestrate outcomes
            </h2>
          </motion.div>
          
          {/* Right side content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <p className="text-gray-600 mb-8">
              WorldBridge Outsourcing Solutions is a premier, global CX management company with a
              dominant presence in Southeast Asia and expanding globally. Ranked among the top BPO leaders
              in the region, we offer a range of data-driven solutions.
            </p>
            
            {/* World Map */}
            <div className="relative mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Global Presence Map" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </motion.div>
              
              {/* Animated dots for locations */}
              {[
                { left: '20%', top: '30%' }, 
                { left: '30%', top: '40%' }, 
                { left: '50%', top: '30%' },
                { left: '70%', top: '40%' }, 
                { left: '80%', top: '50%' }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute w-3 h-3 bg-red-500 rounded-full"
                  style={{ 
                    left: position.left, 
                    top: position.top,
                    boxShadow: '0 0 0 rgba(239, 68, 68, 0.4)',
                    animation: 'pulse 2s infinite'
                  }}
                />
              ))}
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center p-1`}>
                    <div className={`text-${stat.color} text-4xl md:text-5xl font-bold`}>
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
