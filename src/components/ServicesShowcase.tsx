import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Award,
  Users,
  Calendar,
  TrendingUp,
  Medal,
  HeartHandshake,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  detailedDescription = "",
}: ServiceCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <Card className="h-full bg-white border-2 border-gray-100 hover:border-red-100">
            <CardHeader>
              <div className="flex justify-center mb-4 text-red-600">
                {icon}
              </div>
              <CardTitle className="text-center text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-red-600">{icon}</span>
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription>{detailedDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-gray-600">
            At CASR, we're committed to providing comprehensive support for
            young Canadian athletes. Contact us today to learn more about how we
            can help your athletic journey.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ServicesShowcase = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Award size={40} />,
      title: "Athletic Scholarships",
      description:
        "Financial support for promising young athletes to pursue their sports careers while continuing education.",
      detailedDescription:
        "Our athletic scholarship program identifies and supports talented young Canadian athletes with financial assistance to balance their academic and athletic pursuits. We provide funding for training, equipment, competition fees, and educational expenses. Our scholarships are awarded based on athletic achievement, academic performance, and financial need.",
    },
    {
      icon: <Users size={40} />,
      title: "Mentorship Programs",
      description:
        "Connecting young athletes with experienced mentors who provide guidance and support.",
      detailedDescription:
        "Our mentorship program pairs young athletes with accomplished sports professionals, including former Olympians and professional athletes. Mentors provide personalized guidance on training techniques, competition preparation, career planning, and personal development. Regular one-on-one sessions and group workshops help build lasting relationships and transfer valuable knowledge.",
    },
    {
      icon: <Calendar size={40} />,
      title: "Training Camps",
      description:
        "Intensive training experiences led by professional coaches to develop skills and techniques.",
      detailedDescription:
        "CASR organizes seasonal training camps across Canada, providing intensive skill development opportunities for athletes of all levels. Our camps feature professional coaches, state-of-the-art facilities, and comprehensive programs covering technical skills, physical conditioning, mental preparation, and team building. Camps are available for various sports and age groups throughout the year.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Performance Analysis",
      description:
        "Advanced analytics and assessment to help athletes understand and improve their performance.",
      detailedDescription:
        "Our performance analysis service uses cutting-edge technology and expert evaluation to help athletes understand their strengths and areas for improvement. We provide detailed biomechanical analysis, statistical performance tracking, competition review, and personalized improvement plans. Our analysts work closely with athletes and their coaches to implement data-driven training strategies.",
    },
    {
      icon: <Medal size={40} />,
      title: "Competition Support",
      description:
        "Assistance with registration, travel, and preparation for local and international competitions.",
      detailedDescription:
        "CASR provides comprehensive support for athletes participating in competitions at all levels. Our services include assistance with registration and qualification processes, travel and accommodation arrangements, equipment transportation, on-site support, and post-competition analysis. We help Canadian athletes focus on their performance while we handle the logistics.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Community Outreach",
      description:
        "Programs that bring sports opportunities to underserved communities across Canada.",
      detailedDescription:
        "Our community outreach initiatives aim to make sports accessible to all young Canadians, regardless of geographic location or socioeconomic background. We organize sports clinics, equipment donation drives, facility improvement projects, and coach training programs in underserved communities. Our goal is to remove barriers to participation and discover untapped athletic potential across Canada.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-gray-800"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              CASR offers comprehensive support programs designed to help young
              Canadian athletes excel in their sports and personal development.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                detailedDescription={service.detailedDescription}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
