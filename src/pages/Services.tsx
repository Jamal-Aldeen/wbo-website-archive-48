
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart, 
  Phone, 
  Users, 
  ServerCog,
} from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: 'Data Processing',
      description: 'We specialize in data entry services, document scanning, data mining, and cleaning. We ensure that your project becomes less complicated for you. We handle all our projects with high accuracy, utmost data security, and confidentiality.',
      icon: <FileText className="w-10 h-10 text-wbo-blue" />,
      color: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Data Analysis',
      description: 'Data and document processing captures raw data. We can convert, analyze, and present data for management consideration.',
      icon: <BarChart className="w-10 h-10 text-wbo-teal" />,
      color: 'from-teal-50 to-teal-100',
      iconBg: 'bg-teal-100'
    },
    {
      title: 'Contact Center',
      description: 'We provide inbound and outbound contact center services covering calls, emails, chats, and social media to ensure an omnichannel customer experience.',
      icon: <Phone className="w-10 h-10 text-wbo-purple" />,
      color: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-100'
    },
    {
      title: 'HR Outsourcing',
      description: 'HR outsourcing services allow your business to outsource a range of tasks from benefit administration and training to recruiting, hiring, and payroll administration. We are ideal for companies of all sizes who do not have the resources required to expand an in-house HR team or lack the expertise.',
      icon: <Users className="w-10 h-10 text-wbo-orange" />,
      color: 'from-orange-50 to-orange-100',
      iconBg: 'bg-orange-100'
    },
    {
      title: 'IT Solutions',
      description: 'With our IT support solutions, you will gain access to multi-level solutions and services ranging from web development, mobile applications development, server data center management and maintenance, and web hosting.',
      icon: <ServerCog className="w-10 h-10 text-wbo-indigo" />,
      color: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-100'
    },
  ];

  // Animation variants
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
    <div className="min-h-screen bg-wbo-gray">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 rounded-full bg-white/30 blur-3xl -top-10 -right-10"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white/20 blur-3xl -bottom-10 -left-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-wbo-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-blue-100">
              We deliver exceptional business process outsourcing solutions tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Services Grid Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className={`bg-gradient-to-br ${service.color} h-full card-hover`}
                  iconClassName={`${service.iconBg}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-wbo-darkblue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <div className="w-24 h-1 bg-wbo-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We understand your goals and challenges" },
              { step: "02", title: "Strategy", desc: "We develop a customized solution for your needs" },
              { step: "03", title: "Implementation", desc: "We deploy resources and technology to deliver results" },
              { step: "04", title: "Optimization", desc: "We continuously improve and refine the process" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 -top-4 text-5xl font-bold text-white/10">{item.step}</div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg h-full">
                  <h3 className="text-2xl font-bold mb-3 text-wbo-accent">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
