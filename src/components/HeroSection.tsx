import React from "react";
import { motion } from "framer-motion";
import grainybkg from "../designs/grainybkg.png";
import runningwoman from "../designs/runningwoman.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick = () => {} }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Static Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={grainybkg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl relative flex flex-col items-end">
          <div className="relative w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[200px] md:text-[300px] lg:text-[320px] font-bold text-white/80 tracking-tight leading-none w-full text-center"
            >
              CYASR
            </motion.h1>
            {/* Running Woman */}
            <motion.img
              src={runningwoman}
              alt="Running Woman"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6,
                duration: 1 
              }}
              className="absolute bottom-[-11%] left-[18%] transform -translate-y-1/2 -translate-x-1/2 h-[120%] w-auto z-10"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-4xl lg:text-4xl text-white/80 tracking-wide text-right -mt-8 font-semibold"
          >
            Supporting Recovery,
            <br />
            Building Champions.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
