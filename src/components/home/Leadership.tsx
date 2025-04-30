
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const leadershipTeam = [
  {
    id: 1,
    image: 'public/lovable-uploads/608e9585-2f5d-4bb6-b524-e8e5da70a798.png',
  },
  {
    id: 2,
    image: 'public/lovable-uploads/de0ab30f-e0d8-49f2-a0dc-3bf3a9c19ffa.png',
  },
  {
    id: 3,
    image: 'public/lovable-uploads/9a72b338-5d68-48ea-8ad5-fc8eba7f48d2.png',
  },
];

const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="relative py-24 bg-purple-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-500/30 mix-blend-multiply"></div>

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
          onSelect={(index) => setActiveIndex(index)}
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
            <CarouselPrevious className="relative mr-2 bg-white/30 hover:bg-white/50" />
            <div className="flex space-x-2 mx-4">
              {leadershipTeam.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <CarouselNext className="relative ml-2 bg-white/30 hover:bg-white/50" />
          </div>
        </Carousel>
        
        <div className="text-center mt-10">
          <Link to="/about">
            <Button className="bg-white text-purple-800 hover:bg-white/90 rounded-full">
              MEET OUR TEAM
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
