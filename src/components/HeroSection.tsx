
import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-apple-gray pt-16">
      <div className="container-custom px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-black leading-tight">
              Hi, I'm John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-apple-darkgray mt-4">
              Professional Leader & Innovator
            </h2>
            <p className="text-lg text-apple-darkgray mt-6 max-w-lg">
              I'm a seasoned professional with a proven track record in leadership,
              innovation, and delivering exceptional results. With over 10 years of
              experience, I've led teams to success across multiple industries.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#experience" className="apple-btn">
                View My Experience
              </a>
              <a 
                href="#contact" 
                className="text-apple-blue font-medium hover:underline px-5 py-2 inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#experience" className="text-apple-darkgray hover:text-apple-black transition-colors">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
