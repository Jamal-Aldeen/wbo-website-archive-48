import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';

const WhyOutsource = () => {
  const headerRef = useRef(null);
  const chooseUsRef = useRef(null);
  const egyptRef = useRef(null);
  const benefitsRef = useRef(null);
  const howWeWorkRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isChooseUsInView = useInView(chooseUsRef, { once: true, amount: 0.5 });
  const isEgyptInView = useInView(egyptRef, { once: true, amount: 0.5 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.5 });
  const isHowWeWorkInView = useInView(howWeWorkRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.5, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const whyChooseUs = [
    'Proven expertise across multiple industries',
    'High-quality service with a focus on cost control and efficiency',
    'Agile teams and customized solutions tailored to your business goals',
    'Over 40 years of experience in multinational organizations in different industries',
    'Flexible, multilingual support with global standards',
  ];

  const whyEgypt = [
    {
      title: 'Youthful Talent Pool',
      description: 'Over 60% of Egypt’s population is under the age of 30, providing a vibrant, educated, and tech-savvy workforce.',
    },
    {
      title: 'Cost Advantage',
      description: 'The average salary cost in Egypt is 50–70% lower than in North America and Western Europe for comparable roles—without compromising quality.',
    },
    {
      title: 'Favorable Currency',
      description: 'With the Egyptian Pound (EGP) offering significant foreign exchange benefits, companies enjoy greater value for every dollar spent.',
    },
    {
      title: 'Strategic Location',
      description: 'Egypt’s geographic position bridges Europe, the Middle East, and Africa, making it ideal for time zone alignment and service delivery.',
    },
  ];

  const clientBenefits = [
    'Up to 50% cost savings on employment, infrastructure, and operations',
    'Access to highly skilled professionals without recruitment overhead',
    'Increased focus on core business functions',
    'Flexibility to scale operations quickly and efficiently',
    'Enhanced service quality, speed, and customer satisfaction',
    'Round-the-clock productivity with global time zone alignment',
    'Reduced risk and improved compliance through industry-standard practices',
  ];

  const workSteps = [
    {
      title: 'Understanding Your Needs',
      description: 'We start by aligning with your goals and understanding the required roles and skill sets.',
    },
    {
      title: 'Talent Acquisition',
      description: 'Our experienced recruitment team sources, interviews, and selects the best candidates from Egypt’s top talent pool.',
    },
    {
      title: 'Onboarding & Training',
      description: 'We onboard your team quickly and equip them with tools, resources, and training tailored to your business.',
    },
    {
      title: 'Execution & Oversight',
      description: 'We manage your outsourced team end-to-end, ensuring KPIs, efficiency, and continuous improvement.',
    },
    {
      title: 'Transparent Reporting',
      description: 'You receive regular updates, insights, and full visibility into performance without the day-to-day hassle.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <motion.div
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
        className="pt-32 pb-16 bg-wbo-blue text-white"
      >
        <div className="container-custom">
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            Why Outsource?
          </motion.h1>
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-white mx-auto mb-6"
          />
        </div>
      </motion.div>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.h2 variants={itemVariants} className="heading-2 mb-6">
              Global-Bridge: Your Partner in Outsourcing
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed">
              At Global-Bridge, we provide smart outsourcing solutions that empower businesses to scale, streamline, and succeed. Specializing in call center services, IT support, software development, marketing operations, and business consultancy, we are your trusted partner for operational excellence.
            </motion.p>

            <motion.div
              ref={chooseUsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isChooseUsInView ? 'visible' : 'hidden'}
            >
              <motion.h3 variants={itemVariants} className="font-bold text-xl mb-4 text-wbo-blue">
                Why Choose Us?
              </motion.h3>
              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <motion.ul variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whyChooseUs.map((benefit, index) => (
                    <motion.li key={index} variants={itemVariants} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div
              ref={egyptRef}
              variants={containerVariants}
              initial="hidden"
              animate={isEgyptInView ? 'visible' : 'hidden'}
            >
              <motion.h3 variants={itemVariants} className="font-bold text-xl mb-4 text-wbo-blue">
                Why Egypt?
              </motion.h3>
              <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed">
                Egypt is one of the most promising outsourcing destinations in the world today. Here’s why:
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {whyEgypt.map((reason, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="border-l-4 border-l-wbo-blue">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2 text-wbo-blue">{reason.title}</h4>
                        <p>{reason.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              ref={benefitsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isBenefitsInView ? 'visible' : 'hidden'}
            >
              <motion.h3 variants={itemVariants} className="font-bold text-xl mb-4 text-wbo-blue">
                Client Benefits from Outsourcing
              </motion.h3>
              <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed">
                Outsourcing with Global-Bridge delivers measurable business value and operational excellence. Our clients enjoy:
              </motion.p>
              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <motion.ul variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {clientBenefits.map((benefit, index) => (
                    <motion.li key={index} variants={itemVariants} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-wbo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
              <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed text-center font-semibold">
                Let Global-Bridge connect your business to growth, innovation, and success.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        ref={howWeWorkRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHowWeWorkInView ? 'visible' : 'hidden'}
        className="py-12 bg-white"
      >
        <div className="container-custom">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-8">
            <motion.h2 variants={itemVariants} className="heading-2 mb-4">
              How We Work
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              At Global-Bridge, we simplify outsourcing. You provide the job description, and we take care of the rest.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <motion.div variants={containerVariants} className="space-y-8">
              {workSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-wbo-blue text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-wbo-blue mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {index < workSteps.length - 1 && (
                      <div className="hidden md:block h-16 w-px bg-gray-200 ml-6 my-2"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-8">
            <motion.p variants={itemVariants} className="text-lg font-semibold text-wbo-darkblue">
              With Global-Bridge, outsourcing is not just a service—it's a seamless extension of your business.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default WhyOutsource;