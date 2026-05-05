import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, User, Clock, Tag } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_ukxgkcm";
const EMAILJS_TEMPLATE_ID = "template_rhnec5m";
const EMAILJS_PUBLIC_KEY = "kCq8gqyZAnkxc2Knv";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubscribe = async () => {
    if (honeypot) return;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setSubStatus("error");
      return;
    }

    setSubStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { subscriber_email: email },
        EMAILJS_PUBLIC_KEY
      );

      setSubStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong.");
      setSubStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-gray-600 mb-8">
              Get the latest news, tips, and stories delivered directly to your inbox.
            </p>

            {subStatus === "success" ? (
              <p className="text-green-600 text-lg">
                You're subscribed.
              </p>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`px-4 py-3 rounded-lg border flex-grow max-w-md ${
                      subStatus === "error" ? "border-red-400" : "border-gray-300"
                    }`}
                  />

                  <Button
                    onClick={handleSubscribe}
                    disabled={subStatus === "loading"}
                    className="bg-[#4e73b2] text-white px-6"
                  >
                    {subStatus === "loading" ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>

                {subStatus === "error" && (
                  <p className="text-red-500 mt-2 text-sm">{errorMsg}</p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  ); 
};

export default Newsletter;