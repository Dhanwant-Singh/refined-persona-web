
import React, { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const resetCardRotation = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section id="contact" className="section bg-apple-gray">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Get in Touch</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            I'm always open to conversations around entrepreneurship, partnerships, or innovative opportunities. Let's build something.
          </p>
          <div className="fancy-line"></div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div 
            ref={cardRef}
            className="glass-card p-8 transition-all duration-300 hover:shadow-xl" 
            onMouseMove={handleMouseMove}
            onMouseLeave={resetCardRotation}
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-apple-black mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center transform transition-all hover:translate-x-2">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm mr-4">
                    <Mail className="text-apple-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-apple-black">Email</h4>
                    <a 
                      href="mailto:dhanwantsomal73@outlook.com" 
                      className="text-apple-darkgray hover:text-apple-blue transition-colors"
                    >
                      dhanwantsomal73@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center transform transition-all hover:translate-x-2">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm mr-4">
                    <Linkedin className="text-apple-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-apple-black">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/dhanwants" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-apple-darkgray hover:text-apple-blue transition-colors"
                    >
                      linkedin.com/in/dhanwants
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-apple-black mb-4">Connect With Me</h3>
                <p className="text-apple-darkgray mb-6">
                  Follow me on LinkedIn for updates, insights, and future ventures.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://linkedin.com/in/dhanwants" 
                    className="w-16 h-16 rounded-full bg-apple-blue flex items-center justify-center text-white hover:bg-apple-black transition-colors animate-float shadow-lg group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
