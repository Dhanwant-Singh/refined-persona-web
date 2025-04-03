
import React from "react";
import { ArrowRight, Mail, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Image first, now smaller and above the content */}
        <div className="lg:col-span-12 flex justify-center mb-6">
          <div 
            className="rounded-full overflow-hidden border-4 border-white shadow-xl"
            style={{ width: '150px', height: '150px' }} 
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-apple-black">
            <span className="text-gradient">John Doe</span>
          </h1>
          <p className="text-2xl md:text-3xl text-apple-darkgray mb-8 max-w-3xl mx-auto">
            Senior Product Manager with a passion for building innovative products that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-apple-darkgray">
            <div className="flex items-center">
              <Mail size={18} className="mr-2 text-apple-blue" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-apple-blue" />
              <span>Available from June 2023</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2 text-apple-blue" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="apple-btn px-6 py-3 flex items-center justify-center"
            >
              Get in touch
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#experience"
              className="bg-gray-100 text-apple-black font-medium rounded-full px-6 py-3 inline-block transition-all hover:bg-gray-200"
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
