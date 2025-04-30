
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Globe,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  delay?: number;
  progress?: number;
}

const StatItem = ({ icon, value, label, suffix = "", color, delay = 0, progress = 75 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const step = value / steps;
    
    let current = 0;
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        current += step;
        if (current > value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={cn(
        "rounded-lg p-6 h-full bg-white border shadow-lg hover:shadow-xl transition-all",
        "hover:translate-y-[-5px] duration-300"
      )}>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className={`text-${color} text-4xl font-bold flex items-end`}>
              {count}{suffix} 
            </div>
            <h3 className="text-gray-700 font-medium">{label}</h3>
          </div>
          <div className={`bg-${color}/10 p-3 rounded-full text-${color}`}>
            {icon}
          </div>
        </div>
        <div className="mt-4">
          <Progress value={progress} className={`bg-gray-100 h-2`} />
        </div>
      </div>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-wbo-blue rounded-full blur-[100px]"></div>
        <div className="absolute -left-20 -bottom-20 w-[250px] h-[250px] bg-wbo-accent rounded-full blur-[80px]"></div>
        <div className="pointer-events-none absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 5 + 2}s infinite alternate ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-14">
          <motion.h2 
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Growth & Impact
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-wbo-blue mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Leading the way in Southeast Asian BPO services with measurable results and sustainable growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            icon={<Users size={24} />}
            value={1250}
            label="Skilled Professionals"
            color="wbo-blue"
            delay={100}
            progress={92}
          />
          <StatItem 
            icon={<Building size={24} />}
            value={87}
            label="Business Partners"
            suffix="+"
            color="wbo-accent"
            delay={300}
            progress={78}
          />
          <StatItem 
            icon={<Activity size={24} />}
            value={99.8}
            label="Service Uptime"
            suffix="%"
            color="wbo-lightblue"
            delay={500}
            progress={99}
          />
          <StatItem 
            icon={<Globe size={24} />}
            value={15}
            label="Countries Served"
            color="wbo-darkblue"
            delay={700}
            progress={65}
          />
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-gray-700 font-semibold">Growing stronger every day with our trusted partners</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
