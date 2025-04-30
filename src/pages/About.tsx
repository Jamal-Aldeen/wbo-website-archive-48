
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import TeamMember from '@/components/about/TeamMember';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageGallery from '@/components/about/ImageGallery';
import AboutStats from '@/components/about/AboutStats';

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-5"
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1600&q=80')"}}></div>
      
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-r from-wbo-blue to-wbo-darkblue text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-custom relative z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">About Us</h1>
          <div className="w-24 h-1 bg-wbo-accent mx-auto"></div>
        </motion.div>
      </div>
      
      <section className="section-padding bg-white" ref={scrollRef}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-wbo-blue mb-8">
              <span className="relative inline-block">
                GROW TOGETHER WITH OUTSOURCING SERVICES!
                <span className="absolute bottom-0 left-0 w-full h-1 bg-wbo-accent transform origin-left scale-x-100"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Goal",
                  description: "We are looking to further develop the Cambodia outsourcing industry by creating a professional, respected, and prosperous industry.",
                  delay: 0.3
                },
                {
                  title: "Mission",
                  description: "WBO targets the highest levels of international standards, confidential processes and information, enterprise-level data encryption, and secure communications.",
                  delay: 0.5
                },
                {
                  title: "Vision",
                  description: "We are developing the outsourcing industry in Cambodia. We will provide outsourcing services with a high level of productivity, broad language capacity, cultural diversity, and an established infrastructure.",
                  delay: 0.7
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-wbo-accent"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-wbo-blue mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 scroll-reveal opacity-0">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="overview">Company Overview</TabsTrigger>
                  <TabsTrigger value="history">Our History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-4 text-wbo-blue">Company Overview</h2>
                      <p className="text-lg leading-relaxed mb-6">
                        WorldBridge Outsourcing Solutions Co., Ltd. (WBO) is a member of the WorldBridge Group of companies. 
                        We have a skilled professional team, equipped with reliable support systems to carry out all types 
                        of BPO activities.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        Customer concerns are our concerns. Our quality management system ensures standard performance 
                        equivalent to international standard ISO 9001:2000. All processes and information are kept confidential.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80" 
                        alt="WorldBridge Headquarters" 
                        className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80" 
                        alt="Company Growth" 
                        className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full h-auto"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-4 text-wbo-blue">Our Journey</h2>
                      <p className="text-lg leading-relaxed mb-6">
                        Since our inception, WorldBridge Outsourcing has been dedicated to creating a professional 
                        outsourcing environment in Cambodia. Through strategic partnerships and continuous improvement, 
                        we have grown to become a leader in the Southeast Asian BPO industry.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        Our commitment to excellence and customer satisfaction has enabled us to expand our services 
                        and reach clients across various industries globally.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <AboutStats />
            
            <div className="mt-16 scroll-reveal opacity-0">
              <h2 className="text-2xl font-bold mb-8 text-center text-wbo-blue">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TeamMember 
                  name="John Smith" 
                  position="Chief Executive Officer" 
                  imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" 
                />
                <TeamMember 
                  name="Sarah Johnson" 
                  position="Chief Operations Officer" 
                  imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                />
                <TeamMember 
                  name="Michael Chen" 
                  position="Chief Technology Officer" 
                  imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" 
                />
              </div>
            </div>
            
            <div className="mt-16 scroll-reveal opacity-0">
              <h2 className="text-2xl font-bold mb-8 text-center text-wbo-blue">Our Facilities</h2>
              <ImageGallery />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
