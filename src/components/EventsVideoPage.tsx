import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { ArrowLeft, User, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";
import nutritionImg from "../designs/nutrition.jpg";
import angelInterview from "../videos/Angel Xiao Interview.mp4";
import graceInterview from "../videos/Grace Hu Interview.mp4";
import bluePurpleBanner from "../designs/bluePurpleAbstract.jpg";


interface EventsVideo {
  id: number;
  title: string;
  author: string;
  date: string;
  content: React.ReactNode;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

const EventsVideoPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const Events = [
    {
      id: 1,
      title: "Lucas Hu (Co-Founder) Interviews Grace Hu, College Fencer for UPenn",
      author: "Lucas Hu",
      date: "September 23, 2025",
      content: (
        <video controls className="w-full rounded-lg shadow-lg mt-8">
          <source src={graceInterview} type="video/mp4" />
        </video>
      ),
      image: bluePurpleBanner,
      category: "Interview",
      readTime: "15 min watch",
      slug: "interview-fencer-grace-hu"
    },
    {
      id: 2,
      title: "Evelyn Su (Founder) Interviews Angel Xiao, College Fencer for Princeton",
      author: "Evelyn Su",
      date: "September 23, 2025",
      content: (
        <video controls className="w-full rounded-lg shadow-lg mt-8">
          <source src={angelInterview} type="video/mp4" />
        </video>
      ),
      image: bluePurpleBanner,
      category: "Interview",
      readTime: "10 min watch",
      slug: "interview-fencer-angel-xiao"
    }
  ];
  const EventsVideo = Events.find(a => a.slug === slug);

  if (!EventsVideo) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={EventsVideo.image} 
            alt={EventsVideo.title}
            className="w-full h-[20px] object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                <span>{EventsVideo.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{EventsVideo.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-4 w-4 mr-2" />
                <span>{EventsVideo.category}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{EventsVideo.title}</h1>
            <div className="prose max-w-none text-lg">
              {EventsVideo.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsVideoPage; 