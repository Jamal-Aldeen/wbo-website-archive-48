
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-wbo-offwhite">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-wbo-blue">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-wbo-blue/10 mr-4">
                    <Target className="h-8 w-8 text-wbo-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-wbo-darkblue">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 flex-grow">
                  Empowering global businesses to reduce costs, improve quality, and scale with confidence.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-wbo-accent">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-wbo-accent/10 mr-4">
                    <Eye className="h-8 w-8 text-wbo-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-wbo-darkblue">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 flex-grow">
                  To become a leading global partner in intelligent outsourcing—bridging businesses with innovation, 
                  efficiency, and exceptional talent—while positioning Egypt as a world-class hub for digital and 
                  operational excellence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;