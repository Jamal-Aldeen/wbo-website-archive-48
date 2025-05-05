
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const leadershipTeam = [
  {
    id: 1,
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    id: 2,
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    id: 3,
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
];

const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="relative py-24 bg-wbo-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-wbo-darkblue/30 mix-blend-multiply"></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Leadership
          </h2>
        </motion.div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          setApi={(api) => {
            api?.on("select", () => {
              // Update the active index using the API's selectedScrollSnap method
              setActiveIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {leadershipTeam.map((leader, index) => (
              <CarouselItem key={leader.id} className="md:basis-4/5 lg:basis-3/4">
                <div className="p-2">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={leader.image} 
                      alt={`Leadership team member ${index + 1}`}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2 bg-wbo-offwhite/30 hover:bg-wbo-offwhite/50 text-wbo-offwhite" />
            <div className="flex space-x-2 mx-4">
              {leadershipTeam.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-wbo-offwhite" : "bg-wbo-offwhite/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <CarouselNext className="relative ml-2 bg-wbo-offwhite/30 hover:bg-wbo-offwhite/50 text-wbo-offwhite" />
          </div>
        </Carousel>
        
        <div className="text-center mt-10">
          <Link to="/about">
            <Button className="bg-wbo-offwhite text-wbo-darkblue hover:bg-wbo-offwhite/90 rounded-full">
              MEET OUR TEAM
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;