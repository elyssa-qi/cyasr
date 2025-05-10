import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/#about",
      submenu: [
        { name: "Our Team", path: "/our-team" }
      ]
    },
    { name: "Services", path: "/#services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/#contact" },
  ];

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

  const handleNavigation = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      scrollToSection(sectionId);
    } else {
      navigate(path);
      // Always scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold bg-gradient-to-r from-[#4e73b2] via-[#9b4dca] to-[#002a5b] bg-clip-text text-transparent"
            >
              CYASR
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-bold relative ${
                    activeSection === item.path.substring(2) ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e73b2] transition-all duration-300 group-hover:w-full ${
                    activeSection === item.path.substring(2) ? "hidden" : ""
                  }`}></span>
                </button>
                {item.submenu && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.path)}
                        className="block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-[#4e73b2]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold ${
                    activeSection === item.path.substring(2) ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                  }`}
                >
                  {item.name}
                </button>
                {item.submenu && (
                  <div className="pl-8">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.path)}
                        className="block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 