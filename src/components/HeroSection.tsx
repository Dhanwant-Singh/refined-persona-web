
import React from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Image first, now smaller and above the content */}
        <div className="lg:col-span-12 flex justify-center mb-5">
          <div 
            className="rounded-full overflow-hidden border-4 border-white shadow-xl"
            style={{ width: '130px', height: '130px' }} 
          >
            <img
              src="/lovable-uploads/8166c535-9fd7-47e4-a272-8b82da2418d0.png"
              alt="Dhanwant Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-7 text-apple-black">
            <span className="text-gradient">Dhanwant Singh</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-apple-darkgray mb-10 max-w-4xl mx-auto leading-relaxed">
            Aspiring entrepreneur with a passion for building scalable systems, leading high-performing teams, and turning bold ideas into real-world impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-apple-darkgray text-lg">
            <div className="flex items-center">
              <Mail size={20} className="mr-2 text-apple-blue" />
              <span>dhanwantsomal73@outlook.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-2 text-apple-blue" />
              <span>Brampton, Ontario</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="apple-btn px-7 py-4 flex items-center justify-center text-lg"
            >
              Get in touch
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="#experience"
              className="bg-gray-100 text-apple-black font-medium rounded-full px-7 py-4 inline-block transition-all hover:bg-gray-200 text-lg"
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
