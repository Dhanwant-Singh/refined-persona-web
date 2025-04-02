
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for subtle parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 10; // -5 to 5
    const yPos = (clientY / window.innerHeight - 0.5) * 10; // -5 to 5
    setMousePosition({ x: xPos, y: yPos });
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-apple-gray pt-16 overflow-hidden parallax-container"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom px-6 py-20 md:py-32 relative">
        {/* Animated background elements */}
        <div 
          className="absolute top-[10%] right-[25%] w-64 h-64 rounded-full bg-gradient-to-br from-apple-blue/10 to-transparent blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
            transition: "transform 0.3s ease-out"
          }}
        ></div>
        
        <div 
          className="absolute bottom-[20%] left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-purple-400/10 to-transparent blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out"
          }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`order-2 md:order-1 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-black leading-tight">
              Hi, I'm <span className="text-gradient">John Doe</span>
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
              <a href="#experience" className="apple-btn micro-btn group">
                View My Experience
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="#contact" 
                className="text-apple-blue font-medium relative overflow-hidden px-5 py-2 inline-block
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                 after:bg-apple-blue after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div 
            className={`order-1 md:order-2 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div 
              className="relative mx-auto w-full max-w-md aspect-square rounded-full overflow-hidden shadow-xl hover-lift"
              style={{ 
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                transition: "transform 0.3s ease-out"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-apple-blue/20 to-transparent opacity-50 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#experience" className="text-apple-darkgray hover:text-apple-black transition-colors p-3 rounded-full hover:bg-white/50">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
