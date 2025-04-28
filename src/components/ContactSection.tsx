import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setIsError(false);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess && (
                <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    Thank you for your message! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {isError && (
                <Alert className="mb-6 bg-[#4e73b2]/10 border-[#4e73b2] text-[#4e73b2]">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    There was an error sending your message. Please try again.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-[#4e73b2]" : ""}
                  />
                  {errors.name && (
                    <p className="text-[#4e73b2] text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-[#4e73b2]" : ""}
                  />
                  {errors.email && (
                    <p className="text-[#4e73b2] text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-[#4e73b2]" : ""}
                  />
                  {errors.subject && (
                    <p className="text-[#4e73b2] text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-[#4e73b2]" : ""}
                  />
                  {errors.message && (
                    <p className="text-[#4e73b2] text-sm">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4e73b2] hover:bg-[#4e73b2]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <Card className="shadow-lg overflow-hidden">
              <div className="h-64 bg-slate-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1234567890123!2d-79.38922492346847!3d43.64267905260046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4c8c1f1d1d1d1%3A0x1d1d1d1d1d1d1d1d!2s513%20Mcnicoll%20Ave%2C%20North%20York%2C%20ON%20M2H%202C9!5e0!3m2!1sen!2sca!4v1699887654321!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CASR Locations"
                  className="absolute inset-0"
                />
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Our Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly using the information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#4e73b2] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Main Office</h4>
                    <p className="text-slate-600">
                      513 Mcnicoll Ave, North York, ON M2H 2C9, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-[#4e73b2] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-slate-600">(647) 939-9982</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-[#4e73b2] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-slate-600">info@casr.com</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
