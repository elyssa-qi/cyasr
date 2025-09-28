import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Evelyn from "../designs/evelyn.png";
import Lucas from "../designs/lucas.png";
import Jessica from "../designs/jessica.png";
import Miya from "../designs/miya.png";
import Eason from "../designs/eason.png";
import Ashley from "../designs/ashley.png";   
import JessicaSong from "../designs/jessicasong.png";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Evelyn Su",
      role: "Director, Founder",
      image: Evelyn,
      bio: "Hi! I'm Evelyn Su, a competitive fencer from the Class of 2027. I started the CYASR to help other young athletes prevent and recover from sport injuries, inspired by my own experiences in high performance sports. I hope to make a real difference in your athletic journey!",
    },
    {
      name: "Lucas Hu",
      role: "Director, Co-Founder",
      image: Lucas,
      bio: "Nice to meet you! I'm Lucas Hu, a student of the Class of 2028 at Bayview Secondary School located in Richmond Hill, Canada. It is difficult to find solutions to the many obstacles we may encounter in our athletic career, but as a competitive fencer, I gain valuable experience in overcoming the challenges I face. I feel motivated to share these lessons and partake in a journey with CYASR to inspire other student athletes. My team and I at CYASR are committed to helping anyone in need or simply to sharing our experiences with others interested.",
    },
    {
      name: "Jessica Lee",
      role: "Director, Co-Founder",
      image: Jessica,
      bio: "Hi! I'm Jessica Lee, from the class of 2029 at the University of Toronto Schools in Toronto, Canada. I absolutely LOVE sports, and I play rep volleyball and tackle football. I want to help other kids like me stay injury free, and healthy both mentally and physically. Outside of sports, I'm also a science enthusiast as well as a speedcuber.",
    },
    {
      name: "Jessica Song",
      role: "Event Manager",
      image: JessicaSong,
      bio: "Hi! My name is Jessica Song, and I'm a member of the Class of 2026 at the University of Toronto Schools. I love playing all kinds of sports for fun with my friends, but my personal favourites are table tennis and badminton. Through my own experience, I've seen how something as small as wearing the wrong shoes can cause discomfort and affect how you play. I want to help athletes, whether casual or competitive, realize that taking care of your body goes beyond just training hard; it also includes the little things you might not always think about.",
    },
    {
      name: "Miya Gao",
      role: "Editor-in-Chief",
      image: Miya,
      bio: "Hi! I'm Miya Gao, Class of 2028 at University of Toronto Schools based in Toronto, Canada. After personally experiencing burnout and other mental challenges, I've become passionate about helping others, especially when it comes to athletics. I love playing basketball and soccer, and in my free time, you can find me curled up with a good book.",
    },
    {
      name: "Eason Du",
      role: "Tech Coordinator",
      image: Eason,
      bio: "Hi! I'm Eason, part of the Class of 2028 at University of Toronto Schools. Competitive swimming has been a significant part of my life for many years. My journey in the sport inspired me to help athletes understand that recovery is an essential part of the process and that injury doesn't mean the end of their journey. Having experienced the frustration of being sidelined due to injury myself, I'm passionate about supporting others through their own challenges. Outside of swimming, I enjoy playing basketball and reading.",
    },
    {
      name: "Ashley Ma",
      role: "Marketing Manager",
      image: Ashley,
      bio: "Hi! I'm Ashley Ma, from the Class of 2027 of the IB program at Bayview Secondary School! Over the course of my athletic journey, I've done dance, individual rhythmic gymnastics (RGI), and aesthetic group gymnastics (AGG). I want to bring more awareness to the mental aspect of sports, and its relation to injuries and burnout.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Team
              </h2>
              <div className="w-20 h-1 bg-[#4e73b2] mx-auto mb-6"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <h4 className="text-[#4e73b2] font-semibold mb-4">
                      {member.role}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurTeam; 
