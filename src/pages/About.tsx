import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import TeamMember from '@/components/about/TeamMember';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageGallery from '@/components/about/ImageGallery';
import AboutStats from '@/components/about/AboutStats';

const About = () => {
  const headerRef = useRef(null);
  const missionVisionRef = useRef(null);
  const clientsRef = useRef(null);
  const contentRef = useRef(null);

  const tabsRef = useRef(null);
  const coreValuesRef = useRef(null);
  const leadershipRef = useRef(null);
  const facilitiesRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });
  const isMissionVisionInView = useInView(missionVisionRef, { once: false, amount: 0.3 });
  const isClientsInView = useInView(clientsRef, { once: false, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: false, amount: 0.3 });
  const isTabsInView = useInView(tabsRef, { once: false, amount: 0.3 });
  const isCoreValuesInView = useInView(coreValuesRef, { once: false, amount: 0.3 });
  const isLeadershipInView = useInView(leadershipRef, { once: false, amount: 0.3 });
  const isFacilitiesInView = useInView(facilitiesRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreValues = [
    {
      title: 'Excellence',
      description: 'We are committed to delivering top-quality service, exceeding expectations through precision, innovation, and continual improvement.',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, accountability, and ethical practices in every partnership and transaction.',
    },
    {
      title: 'Customer-Centricity',
      description: 'Our clients’ success drives everything we do. We tailor our solutions to meet unique needs and foster long-term relationships.',
    },
    {
      title: 'Efficiency',
      description: 'We prioritize smart, streamlined processes that maximize value and minimize waste—for our clients and our teams.',
    },
    {
      title: 'Innovation',
      description: 'We embrace change, invest in technology, and cultivate creativity to stay ahead in a rapidly evolving global market.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork—within our organization, with our partners, and across borders.',
    },
    {
      title: 'Empowerment',
      description: 'We invest in our people, fostering a culture of growth, learning, and opportunity—especially within Egypt’s emerging talent.',
    },
  ];

  const clientLogos = [
    { name: 'We telecomegypt', logo: 'we.jpg' },
    { name: 'Bank Audi', logo: 'bank-audi.png' },
    { name: 'FTI', logo: 'fti.png' },
    { name: 'Commvault', logo: 'comm.png' },
    { name: 'FAB', logo: 'fab.png' },
    { name: 'CIB', logo: 'cib.png' },
    { name: 'vmware', logo: 'vmware.png' },
    { name: 'ACT', logo: 'act.png' },
  ];

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1600&q=80')" }}
      ></div>

      <Navbar />

      <motion.div
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
        className="pt-32 pb-16 bg-wbo-blue text-white"
      >
        <div className="container-custom">
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            About Us
          </motion.h1>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-white mx-auto"></motion.div>
        </div>
      </motion.div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate={isContentInView ? 'visible' : 'hidden'}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Global-Bridge is an outsourcing agency founded in 2023, with over 40 years of combined experience. Delivering tailored local outsourcing solutions through a highly talented team. Our professionals bring extensive expertise from multinational companies such as:
              </motion.p>
              <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <motion.li variants={itemVariants}>VMWare</motion.li>
                <motion.li variants={itemVariants}>Commvault</motion.li>
                <motion.li variants={itemVariants}>FTI Touristik</motion.li>
                <motion.li variants={itemVariants}>CIB Bank</motion.li>
                <motion.li variants={itemVariants}>FAB Bank</motion.li>
              </motion.ul>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                We are committed to understanding your goals and providing services that truly serve your needs and ensure success.
              </motion.p>
              {/* <motion.h2 
              variants={itemVariants} 
              className="text-2xl font-bol mb-10 text-center text-wbo-darkblue"
            >
              Our Expertise
            </motion.h2> */}
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
              >
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 md:h-16"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* <motion.div
              ref={tabsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isTabsInView ? 'visible' : 'hidden'}
            >
              <Tabs defaultValue="overview" className="w-full">
                <motion.div variants={itemVariants}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="overview">Company Overview</TabsTrigger>
                    <TabsTrigger value="history">Our History</TabsTrigger>
                  </TabsList>
                </motion.div>

                <TabsContent value="overview" className="space-y-6">
                  <motion.div variants={containerVariants} className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div variants={itemVariants} className="md:w-1/2">
                      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4 text-wbo-blue">
                        Company Overview
                      </motion.h2>
                      <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
                        Global-Bridge is a premier outsourcing partner dedicated to delivering innovative solutions that drive business growth.
                        Specializing in call center services, IT support, software development, marketing operations, and business consultancy,
                        we leverage Egypt’s exceptional talent pool to provide high-quality, cost-effective services.
                      </motion.p>
                      <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
                        Our commitment to excellence, innovation, and customer success ensures that every partnership delivers measurable value
                        and sustainable growth.
                      </motion.p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="md:w-1/2">
                      <motion.img
                        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80"
                        alt="Global-Bridge Headquarters"
                        className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full h-auto"
                      />
                    </motion.div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <motion.div variants={containerVariants} className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div variants={itemVariants} className="md:w-1/2">
                      <motion.img
                        src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80"
                        alt="Company Growth"
                        className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full h-auto"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="md:w-1/2">
                      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4 text-wbo-blue">
                        Our Journey
                      </motion.h2>
                      <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
                        Global-Bridge was founded with a vision to transform the outsourcing landscape by harnessing Egypt’s unique advantages.
                        Over the years, we have built a reputation for excellence, serving clients across diverse industries with tailored solutions.
                      </motion.p>
                      <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
                        Our growth is fueled by a commitment to innovation, a passion for empowering businesses, and a dedication to positioning
                        Egypt as a global outsourcing hub.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div> */}

          {/* <AboutStats /> */}

          {/* <motion.div
              ref={coreValuesRef}
              variants={containerVariants}
              initial="hidden"
              animate={isCoreValuesInView ? 'visible' : 'hidden'}
              className="mt-16"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center text-wbo-blue">
                Our Core Values
              </motion.h2>
              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-wbo-accent"
                    whileHover={{ y: -5 }}
                  >
                    <motion.h3 variants={itemVariants} className="text-xl font-bold text-wbo-blue mb-3">
                      {value.title}
                    </motion.h3>
                    <motion.p variants={itemVariants}>{value.description}</motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}

          {/* <motion.div
              ref={leadershipRef}
              variants={containerVariants}
              initial="hidden"
              animate={isLeadershipInView ? 'visible' : 'hidden'}
              className="mt-16"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center text-wbo-blue">
                Our Leadership Team
              </motion.h2>
              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={itemVariants}>
                  <TeamMember
                    name="John Smith"
                    position="Chief Executive Officer"
                    imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TeamMember
                    name="Sarah Johnson"
                    position="Chief Operations Officer"
                    imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TeamMember
                    name="Michael Chen"
                    position="Chief Technology Officer"
                    imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={facilitiesRef}
              variants={containerVariants}
              initial="hidden"
              animate={isFacilitiesInView ? 'visible' : 'hidden'}
              className="mt-16"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center text-wbo-blue">
                Our Facilities
              </motion.h2>
              <motion.div variants={itemVariants}>
                <ImageGallery />
              </motion.div>
            </motion.div> 
          </motion.div>*/}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;