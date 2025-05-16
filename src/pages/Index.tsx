
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WorkExperience from "../components/WorkExperience";
import LicensesCertifications from "../components/LicensesCertifications";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // This handles the animation of elements when they come into view
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-aos]");
      setScrollY(window.scrollY);
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("animate-fade-in");
          section.classList.remove("opacity-0");
        }
      });
    };
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-background overflow-x-hidden">
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(0, 113, 227, 0.8) 0%, rgba(255, 255, 255, 0) 50%)",
          transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)`,
          transition: "transform 0.1s ease-out"
        }}
      ></div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <WorkExperience />
        <LicensesCertifications />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
