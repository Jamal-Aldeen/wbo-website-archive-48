
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Award, 
  Shield, 
  TrendingDown, 
  Gauge
} from 'lucide-react';

const benefits = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Located in Top-tier Offshore CX Destinations",
    description: ""
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "ISO & PCI-DSS Certified",
    description: ""
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Ranked as a Major Contender & Star Performer",
    description: "by Everest Group"
  },
  {
    icon: <TrendingDown className="h-8 w-8" />,
    title: "Reduced TCO by over 40%",
    description: "for our clients"
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Increased efficiency by 20%",
    description: "for our clients"
  }
];

const BenefitsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Southeast Asia's BPO Expert
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Where technology powers exceptional customer experiences
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              {benefit.description && (
                <p className="text-sm text-white/70">{benefit.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all">
            CONNECT WITH OUR EXPERTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
