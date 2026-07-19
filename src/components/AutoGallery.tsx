import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";



interface AutoGalleryProps {
    images: string[];
}

const AutoGallery: React.FC<AutoGalleryProps> = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentImage(
      (prev) => (prev + 1) % images.length
    );
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentImage]}
          alt={`Gallery ${currentImage + 1}`}
          className="w-full h-[500px] object-cover transition-all duration-500"
        />

        {/* Left Arrow */}
        <Button
          variant="secondary"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Right Arrow */}
        <Button
          variant="secondary"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-black"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoGallery;