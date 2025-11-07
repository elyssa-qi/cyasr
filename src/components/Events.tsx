import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

interface EventsPost {
    id: number;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
  }
  
  const Events = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  
    const navigateToArticle = (slug: string) => {
      navigate(`/events/${slug}`);
    };
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-16">
          {/* Interview with Grace Hu */}
          <section className="py-4 mt-8">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[0.43fr_0.57fr] gap-4">
                  <div className="h-32 md:h-80">
                    <img
                      src="https://images.unsplash.com/photo-1487491523440-5b24289ed510?w=1200&q=80"
                      alt="Interview with Grace Hu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-sm text-[#4e73b2] font-semibold mb-2">
                      INTERVIEW
                    </span>
                    <h2 className="text-[22px] md:text-2xl font-bold mb-4">
                        Lucas Hu (Co-Founder) Interviews Grace Hu, college fencer for UPenn
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        Grace Hu, a junior at the University of Pennsylvania studying finance and marketing at Wharton, speaks on the recruitment process for college fencing. She details her high school experiences at Bayview Secondary School’s IB program as a student athlete—balancing athletics, competitions, her grades, and other academic endeavours. Listen here to learn more about her college life, high school stress factors, and more!
                    </p>
                    <div>
                      <Button 
                        className="bg-[#4e73b2] hover:bg-[#3b5a8e] text-white"
                        onClick={() => navigateToArticle("interview-fencer-grace-hu")}
                      >
                        Watch Full Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interview with Angel Xiao */}
          <section className="py-4 mb-8">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[0.43fr_0.57fr] gap-4">
                  <div className="h-32 md:h-80">
                    <img
                      src="https://images.unsplash.com/photo-1505619656705-59ebc350b547?w=1200&q=80"
                      alt="Interview with Grace Hu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-sm text-[#4e73b2] font-semibold mb-2">
                      INTERVIEW
                    </span>
                    <h2 className="text-[22px] md:text-2xl font-bold mb-4">
                        Evelyn Su (Founder) Interviews Angel Xiao, college fencer for Princeton
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        Angel Xiao, a first-year student at Princeton University who represented Canada in the 2024 Paris Olympics, talks about her experience in college fencing. She reflects on her physical setbacks, mental resilience, and the lessons she has learned. In this interview, Angel provides insight into the demands of high-level competition as well as the determination and adaptability that define athletes at the highest level.
                    </p>
                    <div>
                      <Button 
                        className="bg-[#4e73b2] hover:bg-[#3b5a8e] text-white"
                        onClick={() => navigateToArticle("interview-fencer-angel-xiao")}
                      >
                        Watch Full Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  const eventsPosts: EventsPost[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
      category: "INTERVIEW",
      title: "Lucas Hu (Co-Founder) Interviews Grace Hu, College Fencer for UPenn",
      excerpt: "Grace Hu, a junior at the University of Pennsylvania studying finance and marketing at Wharton, speaks on the recruitment process of college fencing. She details her high school experience at Bayview Secondary School’s IB program as a student athlete, balancing athletics, competitions, her grades, and other academic statistics. Listen here to learn more about her college life, high school stress factors, and more!",
      date: "September 23, 2025",
      slug: "interview-fencer-grace-hu"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
      category: "INTERVIEW",
      title: "Evelyn Su (Founder) Interviews Angel Xiao, College Fencer for Princeton",
      excerpt: "Angel Xiao, a first-year student at Princeton University, who represented Canada in the 2024 Paris Olympics talks about her experience in college fencing. She reflects on her physical setbacks, mental resilience and the lessons she has learned. In this interview, Angel provides insight into demands of high-level competition, but also into the determination and adaptability that define athletes at the highest level.",
      date: "September 23, 2025",
      slug: "interview-fencer-angel-xiao"
    }
  ];
  export default Events;