
import React from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0" // Added padding-top for mobile
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Avatar with letter D */}
        <div className="lg:col-span-12 flex justify-center mb-5">
          <Avatar className="h-24 w-24 border-4 border-white shadow-xl bg-gradient-to-br from-purple-500 to-blue-600">
            <AvatarFallback className="text-3xl font-bold text-white">
              D
            </AvatarFallback>
          </Avatar>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-7 text-apple-black">
            <span className="text-gradient">Dhanwant Singh</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl text-apple-darkgray mb-10 max-w-4xl mx-auto leading-relaxed">
            Aspiring entrepreneur with a passion for building scalable systems, leading high-performing teams, and turning bold ideas into real-world impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10 text-apple-darkgray text-base md:text-lg">
            <div className="flex items-center">
              <Mail size={isMobile ? 16 : 20} className="mr-2 text-apple-blue" />
              <span>dhanwantsomal73@outlook.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={isMobile ? 16 : 20} className="mr-2 text-apple-blue" />
              <span>Brampton, Ontario</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#contact"
              className="apple-btn px-5 md:px-7 py-3 md:py-4 flex items-center justify-center text-base md:text-lg"
            >
              Get in touch
              <ArrowRight size={isMobile ? 16 : 20} className="ml-2" />
            </a>
            <a
              href="#experience"
              className="bg-gray-100 text-apple-black font-medium rounded-full px-5 md:px-7 py-3 md:py-4 inline-block transition-all hover:bg-gray-200 text-base md:text-lg"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
