import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import basketball from '../designs/basketball.jpg';
import biking from '../designs/biking.jpg';
import runner from '../designs/runner.jpg';
import running from '../designs/running.jpg';
import skiing from '../designs/skiing.jpeg';
import soccer from '../designs/soccer.jpg';
import swimming from '../designs/swimming.jpg';
import volleyball from '../designs/volleyball.jpg';

const images = [
  { src: basketball, alt: 'Basketball players in action' },
  { src: runner, alt: 'Runner in motion' },
  { src: running, alt: 'Athletes running' },
  { src: skiing, alt: 'Skier on slopes' },
  { src: soccer, alt: 'Soccer match moment' },
  { src: swimming, alt: 'Swimmer in pool' },
  { src: volleyball, alt: 'Volleyball game in action' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#4e73b2]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 