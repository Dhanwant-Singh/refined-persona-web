
import React from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0 bg-dark-background"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Avatar with letter D */}
        <div className="lg:col-span-12 flex justify-center mb-5">
          <Avatar className="h-24 w-24 border-4 border-dark-border shadow-xl bg-gradient-to-br from-blue-800 to-blue-500">
            <AvatarFallback className="text-3xl font-bold text-white">
              D
            </AvatarFallback>
          </Avatar>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-7 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dhanwant Singh</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Aspiring entrepreneur with a passion for building scalable systems, leading high-performing teams, and turning bold ideas into real-world impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10 text-gray-300 text-base md:text-lg">
            <div className="flex items-center">
              <Mail size={isMobile ? 16 : 20} className="mr-2 text-blue-400" />
              <span>dhanwantsomal73@outlook.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={isMobile ? 16 : 20} className="mr-2 text-blue-400" />
              <span>Brampton, Ontario</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-5 md:px-7 py-3 md:py-4 flex items-center justify-center text-base md:text-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              Get in touch
              <ArrowRight size={isMobile ? 16 : 20} className="ml-2" />
            </a>
            <a
              href="#experience"
              className="bg-dark-card text-gray-200 font-medium rounded-full px-5 md:px-7 py-3 md:py-4 inline-block transition-all hover:bg-dark-accent text-base md:text-lg border border-dark-border"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
