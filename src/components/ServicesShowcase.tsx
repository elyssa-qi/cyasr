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
  Shield,
  Brain,
  HeartPulse,
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
          <Card className="h-full bg-white border-2 border-gray-100 hover:border-[#4e73b2]">
            <CardHeader>
              <div className="flex justify-center mb-4 text-[#4e73b2]">
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
                className="text-[#4e73b2] border-[#4e73b2] hover:bg-[#4e73b2]/10 hover:text-[#4e73b2]"
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
            <span className="text-[#4e73b2]">{icon}</span>
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription className="whitespace-pre-line">
            {detailedDescription}
          </DialogDescription>
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
      icon: <Shield size={40} />,
      title: "Injury Prevention and Education",
      description:
        "Comprehensive programs to help athletes prevent injuries through training and education.",
      detailedDescription: [
        "At CASR, we prioritize keeping young athletes safe and informed. Our Injury Prevention and Education programs include:",
        "",
        "• Community Events",
        "• Workshops",
        "• Educational Resources"
      ].join("\n"),
    },
    {
      icon: <Brain size={40} />,
      title: "Mental Health and Resilience Building",
      description:
        "Support programs to help athletes develop mental toughness and maintain psychological well-being.",
      detailedDescription: [
        "Mental health is just as important as physical health.",
        "Our Mental Health and Resilience Building programs include:",
        "",
        "• Support Groups",
        "• Counseling Services",
        "• Workshops"
      ].join("\n"),
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Rehabilitation and Recovery",
      description:
        "Professional guidance and support for athletes recovering from injuries and returning to sport.",
      detailedDescription: [
        "For athletes recovering from injuries, our Rehabilitation and Recovery programs provide personalized support:",
        "",
        "• Educational Resources",
        "• Recovery Plans",
        "• Expert Guidance"
      ].join("\n"),
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
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
