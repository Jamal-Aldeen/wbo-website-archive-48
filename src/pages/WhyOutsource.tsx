import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Globe, DollarSign, Clock, BarChart } from 'lucide-react';

const WhyOutsource = () => {
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-wbo-blue text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Why Outsource?</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="heading-2 mb-6">Why Outsource with Global-Bridge?</h2>
              <p className="text-lg mb-6 leading-relaxed">
                At Global-Bridge, we provide smart outsourcing solutions that empower businesses to scale,
                streamline, and succeed. Specializing in call center services, IT support, software development,
                marketing operations, and business consultancy, we are your trusted partner for operational
                excellence.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="font-bold text-wbo-blue mb-4">Why choose us?</h3>
                <ul className="space-y-3">
                  {[
                    'Proven expertise across multiple industries',
                    'High-quality service with a focus on cost control and efficiency',
                    'Agile teams and customized solutions tailored to your business goals',
                    'Over 40 years of experience in multinational organizations in different industries',
                    'Flexible, multilingual support with global standards'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-wbo-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-lg font-medium text-wbo-darkblue">
                Let Global-Bridge connect your business to growth, innovation, and success.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="heading-2 mb-6">Why Egypt?</h2>
              
              <motion.div
                variants={itemVariants}
                className="p-6 bg-wbo-offwhite rounded-lg shadow-sm mb-8"
              >
                <p className="mb-4">
                  Egypt is one of the most promising outsourcing destinations in the world today. Here's why:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-wbo-blue/10 mr-3 text-wbo-blue">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wbo-darkblue mb-1">Youthful Talent Pool</h4>
                      <p className="text-sm text-gray-600">Over 60% of Egypt's population is under the age of 30, providing a vibrant, educated, and tech-savvy workforce.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-wbo-blue/10 mr-3 text-wbo-blue">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wbo-darkblue mb-1">Cost Advantage</h4>
                      <p className="text-sm text-gray-600">The average salary cost in Egypt is 50-70% lower than in North America and Western Europe for comparable roles-without compromising quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-wbo-blue/10 mr-3 text-wbo-blue">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wbo-darkblue mb-1">Favorable Currency</h4>
                      <p className="text-sm text-gray-600">With the Egyptian Pound (EGP) offering significant foreign exchange benefits, companies enjoy greater value for every dollar spent.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-wbo-blue/10 mr-3 text-wbo-blue">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wbo-darkblue mb-1">Strategic Location</h4>
                      <p className="text-sm text-gray-600">Egypt's geographic position bridges Europe, the Middle East, and Africa, making it ideal for time zone alignment and service delivery.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="heading-2 mb-6">Client Benefits from Outsourcing</h2>
              
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <p className="mb-4">
                  Outsourcing with Global-Bridge delivers measurable business value and operational excellence. Our clients enjoy:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Up to 50% cost savings on employment, infrastructure, and operations',
                    'Access to highly skilled professionals without recruitment overhead',
                    'Increased focus on core business functions',
                    'Flexibility to scale operations quickly and efficiently',
                    'Enhanced service quality, speed, and customer satisfaction',
                    'Round-the-clock productivity with global time zone alignment',
                    'Reduced risk and improved compliance through industry-standard practices'
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="flex items-start p-4 bg-wbo-offwhite rounded-md"
                    >
                      <Check className="w-5 h-5 mr-3 text-wbo-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">How We Work</h2>
              <p className="mb-8">
                At Global-Bridge, we simplify outsourcing. You provide the job description, and we take care of the rest:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    step: "Understanding Your Needs",
                    description: "We start by aligning with your goals and understanding the required roles and skill sets."
                  },
                  {
                    step: "Talent Acquisition",
                    description: "Our experienced recruitment team sources, interviews, and selects the best candidates from Egypt's top talent pool."
                  },
                  {
                    step: "Onboarding & Training",
                    description: "We onboard your team quickly and equip them with tools, resources, and training tailored to your business."
                  },
                  {
                    step: "Execution & Oversight",
                    description: "We manage your outsourced team end-to-end, ensuring KPIs, efficiency, and continuous improvement."
                  },
                  {
                    step: "Transparent Reporting",
                    description: "You receive regular updates, insights, and full visibility into performance without the day-to-day hassle."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-wbo-blue text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-wbo-darkblue mb-1">{item.step}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center p-6 bg-wbo-blue/10 rounded-lg">
                <p className="text-xl font-medium text-wbo-darkblue">
                  With Global-Bridge, outsourcing is not just a service—it's a seamless extension of your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyOutsource;
