import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { ArrowLeft, User, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import bluePurpleBanner from "../designs/bluePurpleAbstract.jpg";

import angelInterview from "../videos/Angel Xiao Interview.mp4";
import graceInterview from "../videos/Grace Hu Interview.mp4";

import coachIan from "../designs/CoachIan.jpg";
import coachIsaacInterview from "../videos/CoachIsaacInterview.mp4";
import coachJTInterview from "../videos/CoachJTInterview.mp4";
import coachCraigInterview from "../videos/CoachCraigInterview.mp4";
import coachPrimeInterview from "../videos/CoachPrimeInterview.mp4";
import owfl from "../designs/OWFL Provincials.jpg";
import CYASRstand from "../designs/WorkingAtStand.jpg";
import peelPanthers from "../designs/PeelPantherGirls.jpg";
import working from "../designs/AshleyMiyaWorking.jpg";
import interviewingCoachIan from "../designs/CoachIanInterview.jpg";

interface Section {
  title: string;
  description: string;
  images?: string[];
  video?: string;
}


interface EventsVideo {
  id: number;
  title: string;
  author: string;
  date: string;
  content?: React.ReactNode;
  image: string;
  category: string;
  readTime: string;
  slug: string;
  sections?: Section[];
}


const EventsVideoPage: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [currentSection, setCurrentSection] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  


  const Events: EventsVideo[] = [

    {
      id: 1,
      title: "Lucas Hu (Co-Founder) Interviews Grace Hu, College Fencer for UPenn",
      author: "Lucas Hu",
      date: "September 23, 2025",
      content: (
        <video controls className="w-full rounded-lg shadow-lg">
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
        <video controls className="w-full rounded-lg shadow-lg">
          <source src={angelInterview} type="video/mp4" />
        </video>
      ),
      image: bluePurpleBanner,
      category: "Interview",
      readTime: "10 min watch",
      slug: "interview-fencer-angel-xiao"
    },


    {
      id: 3,
      title: "CYASR at OWFL Provincials",
      author: "CYASR",
      date: "July 11, 2026",
      image: owfl,
      category: "Event",
      readTime: "15 min read",
      slug: "owfl-provincials",

      sections: [

        {
          title: "Highlights",
          description:
            "",
          images: [
            coachIan,
            owfl,
            CYASRstand,
            peelPanthers,
            interviewingCoachIan,
            working
          ]
        },

        {
          title: "Interview with Coach J.T. Harris",
          description:
            `\tWhat does it take to build an environment where athletes can succeed without sacrificing their well-being? In this thoughtful conversation, Coach JT shares his perspective on recognizing burnout, supporting athletes through challenges, and redefining what success in sport truly means.

    Drawing from years of coaching experience, Coach JT explores the warning signs of burnout and explains why it often develops gradually, making it easy to overlook. He emphasizes the importance of balancing athletics with school, relationships, and personal life, reminding us that sustainable success comes from taking care of both our physical and mental health. Throughout the interview, he also reflects on the crucial role coaches play in shaping team culture by fostering trust, encouraging honest conversations, and creating spaces where athletes feel comfortable asking for help.
    
    Whether you're an athlete, coach, parent, or simply passionate about youth mental health, Coach JT offers valuable insights into building healthier and more supportive sports communities. His message is a refreshing reminder that resilience isn't about pushing through every obstacle alone—it's about knowing when to lean on others, prioritizing well-being, and remembering that the strongest athletes are those who are supported both on and off the field.
            `,
          video: coachJTInterview
        },

        {
          title: "Interview with Coach Craig Clarke",
          description:
            `\tHow can coaches create environments where athletes feel supported both as competitors and as people? Coach Isaac Smith from Peel Lady Panthers shares his experiences coaching at the provincial level and offers meaningful insights into the importance of prioritizing mental health in sport.
            
    Throughout the interview, Isaac reflects on the unique pressures athletes face and explains why burnout can look different for everyone. He discusses the importance of recognizing changes in motivation, confidence, and behaviour while encouraging coaches to take the time to understand each athlete as an individual. Rather than focusing solely on performance, Isaac advocates for a coaching philosophy rooted in empathy, communication, and trust, where athletes can feel safe speaking openly about their challenges without fear of judgment.
            
    This conversation highlights how strong leadership extends far beyond the scoreboard. Isaac reminds us that success is measured not only by wins and losses but also by the positive impact coaches have on the lives of the athletes they mentor. Whether you're involved in sport as an athlete, coach, parent, or supporter, this interview offers practical advice and inspiring perspectives on fostering resilience, preventing burnout, and creating team cultures where everyone has the opportunity to thrive.
            `,
          video: coachCraigInterview
        },

        {
          title: "Interview with Coach Prime",
          description:
            `\tWhat kind of legacy does a coach leave behind? CYASR discusses the responsibility that comes with leadership with Coach Prime of Sheridan College’s Women’s Flag Football team. She emphasizes that the greatest coaches do much more than develop skilled athletes—they help shape confident, resilient people.
    
    Throughout the interview, Coach Prime speaks passionately about the importance of setting high expectations while building genuine relationships with those he coaches. He explains that confidence grows through preparation, discipline, and accountability, but it also depends on having mentors who believe in their athletes during both successes and setbacks. His message challenges athletes to approach every practice, competition, and opportunity with intention, while encouraging coaches to create environments where effort, integrity, and personal growth are celebrated alongside performance.
    
    This conversation offers a powerful perspective on the lasting impact of leadership in sport. Coach Prime reminds us that championships eventually fade, but the values instilled through positive coaching can influence athletes for a lifetime. Whether you're stepping onto the field as a competitor or leading from the sidelines, this interview provides motivating insights into building confidence, inspiring others, and pursuing excellence with purpose.
            `,
          video: coachPrimeInterview
        },

        {
          title: "Interview with Coach Isaac Smith",
          description:
            `\tHow can coaches create environments where athletes feel supported both as competitors and as people? Coach Isaac Smith from Peel Lady Panthers shares his experiences coaching at the provincial level and offers meaningful insights into the importance of prioritizing mental health in sport.
            
    Throughout the interview, Isaac reflects on the unique pressures athletes face and explains why burnout can look different for everyone. He discusses the importance of recognizing changes in motivation, confidence, and behaviour while encouraging coaches to take the time to understand each athlete as an individual. Rather than focusing solely on performance, Isaac advocates for a coaching philosophy rooted in empathy, communication, and trust, where athletes can feel safe speaking openly about their challenges without fear of judgment.
            
    This conversation highlights how strong leadership extends far beyond the scoreboard. Isaac reminds us that success is measured not only by wins and losses but also by the positive impact coaches have on the lives of the athletes they mentor. Whether you're involved in sport as an athlete, coach, parent, or supporter, this interview offers practical advice and inspiring perspectives on fostering resilience, preventing burnout, and creating team cultures where everyone has the opportunity to thrive.
            `,
          video: coachIsaacInterview
        }

      ]
    }

  ];


  const EventsVideo = Events.find(
    (event) => event.slug === slug
  );

  useEffect(() => {
    const section = EventsVideo?.sections?.[currentSection];
  
    if (!section?.images) return;
  
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        (prev + 1) % section.images!.length
      );
    }, 3000);
  
    return () => clearInterval(timer);
  
  }, [currentSection, EventsVideo]);

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
            className="w-full h-52 object-cover"
          />



          <div className="p-8">


            <div className="flex items-center gap-4 mb-6">


              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                {EventsVideo.author}
              </div>


              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {EventsVideo.date}
              </div>


              <div className="flex items-center text-gray-600">
                <Tag className="h-4 w-4 mr-2" />
                {EventsVideo.category}
              </div>


            </div>



            <h1 className="text-4xl font-bold mb-6">
              {EventsVideo.title}
            </h1>





            {EventsVideo.sections ? (

              <div>


                <h2 className="text-2xl font-bold mb-4">
                  {EventsVideo.sections[currentSection].title}
                </h2>



                {
                  EventsVideo.sections[currentSection].images ? (

                    <div className="relative">


                      <img
                        src={
                          EventsVideo.sections[currentSection]
                            .images![currentImage]
                        }
                        alt=""
                        className="w-full h-[500px] object-cover rounded-lg"
                      />



                      <Button
                        className="absolute left-4 top-1/2"
                        onClick={() =>
                          setCurrentImage((prev) =>
                            prev === 0
                              ? EventsVideo.sections![currentSection]
                                  .images!.length - 1
                              : prev - 1
                          )
                        }
                      >
                        <ChevronLeft />
                      </Button>



                      <Button
                        className="absolute right-4 top-1/2"
                        onClick={() =>
                          setCurrentImage((prev) =>
                            (prev + 1) %
                            EventsVideo.sections![currentSection]
                              .images!.length
                          )
                        }
                      >
                        <ChevronRight />
                      </Button>


                    </div>


                  ) : (


                    <video
                      controls
                      className="w-full rounded-lg shadow-lg"
                    >
                      <source
                        src={
                          EventsVideo.sections[currentSection].video
                        }
                        type="video/mp4"
                      />
                    </video>


                  )
                }




                <p className="mt-6 text-base whitespace-pre-wrap">
                  {
                    EventsVideo.sections[currentSection]
                      .description
                  }
                </p>





                <div className="flex justify-between items-center mt-8">


                  <Button
                    disabled={currentSection === 0}
                    onClick={() => {
                      setCurrentSection(currentSection - 1);
                      setCurrentImage(0);
                    }}
                  >
                    <ChevronLeft />
                    Previous
                  </Button>



                  <span>
                    {currentSection + 1} / {EventsVideo.sections.length}
                  </span>




                  <Button
                    disabled={
                      currentSection === EventsVideo.sections.length - 1
                    }
                    onClick={() => {
                      setCurrentSection(currentSection + 1);
                      setCurrentImage(0);
                    }}
                  >
                    Next
                    <ChevronRight />
                  </Button>



                </div>



              </div>


            ) : (


              <div className="prose max-w-none text-lg">
                {EventsVideo.content}
              </div>


            )}



          </div>

        </div>

      </div>

    </div>

  );

};


export default EventsVideoPage;