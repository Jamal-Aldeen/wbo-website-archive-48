
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    alt: "WBO Office Building",
    description: "Our main headquarters in Phnom Penh"
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
    alt: "Modern Office Space",
    description: "Our collaborative workspace environment"
  },
  {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=600&q=80",
    alt: "Conference Room",
    description: "State-of-the-art meeting facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    alt: "Call Center Operations",
    description: "Our dedicated customer service team"
  }
];

const ImageGallery: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div 
          key={index}
          className={`relative rounded-lg overflow-hidden cursor-pointer shadow-md transition-all duration-300
            ${expandedIndex === index ? 'col-span-2 row-span-2 z-10' : ''}`}
          onClick={() => toggleExpand(index)}
          layoutId={`gallery-item-${index}`}
        >
          <motion.img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover"
            layoutId={`gallery-image-${index}`}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/0 flex items-end p-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">
              <p className="font-medium">{image.alt}</p>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
