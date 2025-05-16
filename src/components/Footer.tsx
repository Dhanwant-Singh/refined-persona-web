
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-600/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div data-aos="fade-right">
            <h3 className="text-xl font-bold mb-2">Dhanwant Singh</h3>
            <p className="text-gray-300">
              Entrepreneur in Progress | Builder of Teams & Systems
            </p>
          </div>
          
          <div className="mt-6 md:mt-0" data-aos="fade-left">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-accent hover:bg-dark-accent/70 transition-colors hover:scale-110 transform"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Dhanwant Singh. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Back to top button (fixed position) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
