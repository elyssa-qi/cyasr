import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1200&q=80",
      alt: "Young hockey players on ice",
    },
    {
      url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80",
      alt: "Youth soccer team celebrating",
    },
    {
      url: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=1200&q=80",
      alt: "Young athlete running track",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentSlide].url}
              alt={heroImages[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-[2px] h-[5px]"></div>
        <div className="max-w-4xl text-center relative">
          {/* Maple leaf accent */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-20">
            <svg width="60" height="60" viewBox="0 0 512 512" fill="#ff0000">
              <path d="M256,0c-16.5,32.3-32.9,64.6-49.4,96.9c-10.3-6.9-20.6-13.8-30.9-20.7c-5.5,9.6-10.9,19.1-16.4,28.7 c10.3,6.9,20.6,13.8,30.9,20.7c-10.3,20.2-20.6,40.4-30.9,60.6c-20.6-6.9-41.2-13.8-61.8-20.7c-5.5,9.6-10.9,19.1-16.4,28.7 c10.3,6.9,20.6,13.8,30.9,20.7c-10.3,20.2-20.6,40.4-30.9,60.6c-20.6-6.9-41.2-13.8-61.8-20.7c-5.5,9.6-10.9,19.1-16.4,28.7 c20.6,6.9,41.2,13.8,61.8,20.7c-5.5,9.6-10.9,19.1-16.4,28.7c-20.6-6.9-41.2-13.8-61.8-20.7c-5.5,9.6-10.9,19.1-16.4,28.7 c30.9,10.3,61.8,20.6,92.7,30.9c0,20.6,0,41.2,0,61.8c10.3,0,20.6,0,30.9,0c0-20.6,0-41.2,0-61.8c10.3,0,20.6,0,30.9,0 c0,20.6,0,41.2,0,61.8c10.3,0,20.6,0,30.9,0c0-20.6,0-41.2,0-61.8c10.3,0,20.6,0,30.9,0c0,20.6,0,41.2,0,61.8c10.3,0,20.6,0,30.9,0 c0-20.6,0-41.2,0-61.8c10.3,0,20.6,0,30.9,0c0,20.6,0,41.2,0,61.8c10.3,0,20.6,0,30.9,0c0-20.6,0-41.2,0-61.8 c30.9-10.3,61.8-20.6,92.7-30.9c-5.5-9.6-10.9-19.1-16.4-28.7c-20.6,6.9-41.2,13.8-61.8,20.7c-5.5-9.6-10.9-19.1-16.4-28.7 c20.6-6.9,41.2-13.8,61.8-20.7c-5.5-9.6-10.9-19.1-16.4-28.7c-20.6,6.9-41.2,13.8-61.8,20.7c-10.3-20.2-20.6-40.4-30.9-60.6 c10.3-6.9,20.6-13.8,30.9-20.7c-5.5-9.6-10.9-19.1-16.4-28.7c-20.6,6.9-41.2,13.8-61.8,20.7c-10.3-20.2-20.6-40.4-30.9-60.6 c10.3-6.9,20.6-13.8,30.9-20.7c-5.5-9.6-10.9-19.1-16.4-28.7c-10.3,6.9-20.6,13.8-30.9,20.7C288.9,64.6,272.5,32.3,256,0z" />
            </svg>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Supporting Canada's Young Athletes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            CASR is dedicated to empowering the next generation of Canadian
            sports talent through mentorship, resources, and community support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-6 rounded-md text-lg"
            >
              Discover Our Programs
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
