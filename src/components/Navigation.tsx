import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        // If we're not on the home page, don't track sections
        return;
      }

      const sections = ["about", "services", "contact"];
      const scrollPosition = window.scrollY;

      // Check if we're in the home section (before the about section)
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - 150;
        if (scrollPosition < aboutTop) {
          setActiveSection("home");
          return;
        }
      }

      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset - 150;
          const elementBottom = bottom + window.pageYOffset - 150;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Update active section when pathname changes
  useEffect(() => {
    if (location.pathname === "/blog") {
      setActiveSection("blog");
    } else if (location.pathname === "/") {
      // Trigger a scroll check to set the correct section
      const scrollPosition = window.scrollY;
      window.scrollTo(scrollPosition, scrollPosition);
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 60; // Reduced space between nav and section
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 60; // Reduced space between nav and section
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const navigateToBlog = () => {
    navigate("/blog");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  scrollToTop();
                } else {
                  navigate("/");
                }
              }}
              className="text-2xl font-bold bg-gradient-to-r from-[#1e4883] via-[#4e73b2] to-[#c58dc9] text-transparent bg-clip-text"
            >
              CASR
            </button>
            <span className="ml-2 text-sm text-gray-600">
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  scrollToTop();
                } else {
                  navigate("/");
                }
              }}
              className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-semibold pb-1 ${
                activeSection === "home" ? "border-b-2 border-[#4e73b2]" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-semibold pb-1 ${
                activeSection === "about" ? "border-b-2 border-[#4e73b2]" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-semibold pb-1 ${
                activeSection === "services" ? "border-b-2 border-[#4e73b2]" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={navigateToBlog}
              className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-semibold pb-1 ${
                activeSection === "blog" ? "border-b-2 border-[#4e73b2]" : ""
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-semibold pb-1 ${
                activeSection === "contact" ? "border-b-2 border-[#4e73b2]" : ""
              }`}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 