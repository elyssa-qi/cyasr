import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface SuccessStory {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  stories?: SuccessStory[];
}

const ImageGallery = ({ stories = defaultStories }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length,
    );
  };

  const openStory = (story: SuccessStory) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <div className="w-full py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the young Canadian athletes who have achieved their dreams with
            CYASR's support
          </p>
          <div className="relative w-16 h-16 mx-auto mt-4">
            <svg
              className="w-full h-full text-red-600"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256,397.16,0,256,0ZM419.91,165.55,362.1,157,336.5,104.38a6.41,6.41,0,0,0-11,0L300,157l-57.81,8.52a6.4,6.4,0,0,0-3.55,10.92l41.85,40.82-9.88,57.6a6.39,6.39,0,0,0,9.27,6.74L331,256l51.18,26.6a6.39,6.39,0,0,0,9.27-6.74l-9.88-57.6,41.85-40.82A6.4,6.4,0,0,0,419.91,165.55Z" />
            </svg>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Main Gallery Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                animate={{ x: `-${currentIndex * 100}%` }}
              >
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="min-w-full md:min-w-[33.333%] p-2"
                    onClick={() => openStory(story)}
                  >
                    <Card className="overflow-hidden cursor-pointer group h-64 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 z-10"></div>
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                        <h3 className="font-bold text-lg">{story.title}</h3>
                        <div className="flex items-center mt-2">
                          <span className="text-sm">Read story</span>
                          <svg
                            className="w-4 h-4 ml-1 text-red-500"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path d="M256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256,397.16,0,256,0ZM419.91,165.55,362.1,157,336.5,104.38a6.41,6.41,0,0,0-11,0L300,157l-57.81,8.52a6.4,6.4,0,0,0-3.55,10.92l41.85,40.82-9.88,57.6a6.39,6.39,0,0,0,9.27,6.74L331,256l51.18,26.6a6.39,6.39,0,0,0,9.27-6.74l-9.88-57.6,41.85-40.82A6.4,6.4,0,0,0,419.91,165.55Z" />
                          </svg>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Story Details */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStory}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-64 object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  onClick={closeStory}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="absolute top-2 left-2 bg-red-600 text-white p-1 rounded-md">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256,397.16,0,256,0ZM419.91,165.55,362.1,157,336.5,104.38a6.41,6.41,0,0,0-11,0L300,157l-57.81,8.52a6.4,6.4,0,0,0-3.55,10.92l41.85,40.82-9.88,57.6a6.39,6.39,0,0,0,9.27,6.74L331,256l51.18,26.6a6.39,6.39,0,0,0,9.27-6.74l-9.88-57.6,41.85-40.82A6.4,6.4,0,0,0,419.91,165.55Z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedStory.title}
                </h2>
                <p className="text-gray-700">{selectedStory.description}</p>
              </CardContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Default success stories with Canadian youth athletes
const defaultStories: SuccessStory[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80",
    title: "Sarah Thompson - Junior Hockey Champion",
    description:
      "Sarah Thompson from Vancouver started playing hockey at age 6. With CYASR's support, she received specialized coaching and equipment that her family couldn't afford. Today, at 16, she's the youngest player on Canada's Junior National Women's Hockey team and dreams of Olympic gold. CYASR provided not just financial assistance but mentorship from former Olympians who guided her development both on and off the ice. Sarah now volunteers with younger players, passing on what she's learned to the next generation of Canadian hockey talent.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    title: "Marcus Chen - Track & Field Prodigy",
    description:
      "Marcus Chen from Toronto discovered his passion for running at age 10. Despite his natural talent, his family struggled to afford competition fees and travel expenses. CYASR stepped in with a comprehensive support package, including coaching, equipment, and travel assistance. Now 17, Marcus holds three national junior records in sprinting events and represented Canada at the World Youth Championships. CYASR's mental performance coaching helped him overcome performance anxiety and develop the confidence needed to compete at the highest levels. Marcus is now on track for a university athletic scholarship.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535469420027-517674dad7a1?w=800&q=80",
    title: "Emma Lafleur - Rising Basketball Star",
    description:
      "Emma Lafleur from Montreal showed exceptional basketball skills from an early age, but opportunities for development were limited in her neighborhood. CYASR provided access to elite training camps, skill development programs, and academic support to help her balance sports and education. At 15, Emma was selected for Quebec's provincial team and caught the attention of national scouts. CYASR's nutrition and strength training programs helped her develop physically to compete against older players. Emma credits CYASR's holistic approach for helping her grow as both an athlete and a student.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    title: "Jordan Wilson - Swimming Champion",
    description:
      "Jordan Wilson from Halifax faced significant challenges accessing quality swimming facilities and coaching. CYASR provided pool time, expert coaching, and transportation assistance to help Jordan pursue his swimming dreams. After two years with CYASR's support, Jordan qualified for the Canadian Junior Swimming Championships and won two gold medals in freestyle events. CYASR's sports psychology services helped him develop the mental toughness needed for competitive swimming. Now 16, Jordan is working toward qualifying for senior national competitions with his sights set on international representation.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    title: "Olivia Singh - Gymnastics Medalist",
    description:
      "Olivia Singh from Edmonton showed extraordinary flexibility and strength at age 7, but her family couldn't afford the intensive training gymnastics requires. CYASR provided a comprehensive scholarship covering coaching, facility access, competition fees, and specialized equipment. Now 14, Olivia has won multiple medals at national competitions and is training with Olympic-level coaches. CYASR's injury prevention program has helped her stay healthy despite the physical demands of elite gymnastics. Olivia's story has inspired many young girls in her community to pursue their athletic dreams regardless of financial circumstances.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&q=80",
    title: "Noah Tremblay - Soccer Prodigy",
    description:
      "Noah Tremblay from Winnipeg showed exceptional soccer skills playing in local parks, but organized leagues and development programs were financially out of reach. CYASR provided league fees, equipment, and access to elite development camps. Their transportation assistance ensured Noah could attend practices and games across the city. At 15, Noah was selected for a provincial all-star team and participated in national showcase tournaments. CYASR's academic support helped him maintain excellent grades while pursuing soccer excellence. Noah hopes to earn a university scholarship and eventually represent Canada internationally.",
  },
];

export default ImageGallery;
