
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Years of Experience', value: 15 },
  { id: 2, name: 'Satisfied Clients', value: 120 },
  { id: 3, name: 'Team Members', value: 250 },
  { id: 4, name: 'Countries Served', value: 30 },
];

const AboutStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const statSection = document.getElementById('stats-section');
    if (statSection) {
      observer.observe(statSection);
    }
    
    return () => {
      if (statSection) {
        observer.unobserve(statSection);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(
              newCounts[index] + Math.ceil(stat.value / 30),
              stat.value
            );
          }
          return newCounts;
        });
      }, 50);
    });
    
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <div id="stats-section" className="mt-20 scroll-reveal opacity-0">
      <h2 className="text-2xl font-bold mb-8 text-center text-wbo-blue">Our Impact in Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-wbo-blue to-wbo-darkblue text-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {counts[index]}+
            </div>
            <div className="text-sm md:text-base text-gray-200">{stat.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
