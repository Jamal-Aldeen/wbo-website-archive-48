
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Users,
  Zap,
  Lightbulb,
  Handshake,
  Rocket
} from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We are committed to delivering top-quality service, exceeding expectations through precision, innovation, and continual improvement.',
      icon: <Award className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, accountability, and ethical practices in every partnership and transaction.',
      icon: <ShieldCheck className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Customer-Centricity',
      description: "Our clients' success drives everything we do. We tailor our solutions to meet unique needs and foster long-term relationships.",
      icon: <Users className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Efficiency',
      description: 'We prioritize smart, streamlined processes that maximize value and minimize waste—for our clients and our teams.',
      icon: <Zap className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Innovation',
      description: 'We embrace change, invest in technology, and cultivate creativity to stay ahead in a rapidly evolving global market.',
      icon: <Lightbulb className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork—within our organization, with our partners, and across borders.',
      icon: <Handshake className="h-10 w-10" />,
      link: '/about',
    },
    {
      title: 'Empowerment',
      description: "We invest in our people, fostering a culture of growth, learning, and opportunity—especially within Egypt's emerging talent.",
      icon: <Rocket className="h-10 w-10" />,
      link: '/about',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, #31708E 2%, transparent 0%), radial-gradient(circle at 75px 75px, #31708E 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="container-custom relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">Our Core Values</h2>
          <motion.div 
            className="w-24 h-1 bg-wbo-blue mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <Link to={value.link} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-wbo-blue/50 overflow-hidden bg-white">
                  <CardHeader>
                    <motion.div 
                      className="text-wbo-blue mb-4 group-hover:text-wbo-accent transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-wbo-blue transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
