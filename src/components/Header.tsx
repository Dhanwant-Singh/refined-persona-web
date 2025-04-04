
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const scrollTimerRef = useRef<number | null>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Throttle the active section updates to prevent rapid changes on mobile
      if (isMobile) {
        const currentScrollTop = window.scrollY;
        // Only update if we've scrolled at least 50px to avoid small scroll jitters
        if (Math.abs(currentScrollTop - lastScrollTop.current) > 50) {
          lastScrollTop.current = currentScrollTop;
          
          if (scrollTimerRef.current !== null) {
            window.clearTimeout(scrollTimerRef.current);
          }
          
          scrollTimerRef.current = window.setTimeout(() => {
            updateActiveSection();
            scrollTimerRef.current = null;
          }, 100);
        }
      } else {
        // For desktop, update immediately
        updateActiveSection();
      }
    };

    const updateActiveSection = () => {
      // Arrange sections by their position in the document
      const sections = Array.from(document.querySelectorAll("section[id]"))
        .sort((a, b) => {
          const aTop = a.getBoundingClientRect().top;
          const bTop = b.getBoundingClientRect().top;
          return aTop - bTop;
        });
      
      // Find the first section that's close to the viewport center
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Section is in view if its top is above the middle of the viewport
        // and its bottom is below the middle of the viewport
        if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {
          const newActiveSection = section.getAttribute("id") || "";
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current !== null) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, [activeSection, isMobile]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4 px-6">
        <a 
          href="#home" 
          className={`font-semibold text-xl transition-colors ${
            isScrolled ? "text-apple-black" : "text-apple-black"
          }`}
        >
          <span className="text-gradient">Dhanwant Singh</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-apple-darkgray hover:text-apple-black transition-colors text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-apple-blue after:origin-left after:transition-transform ${
                activeSection === link.href.replace("#", "") 
                  ? "text-apple-black after:scale-x-100" 
                  : "after:scale-x-0"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative z-20 p-2 rounded-full ${
            mobileMenuOpen ? "bg-apple-blue text-white" : "text-apple-black"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-10 transform transition-all duration-300 flex flex-col items-center justify-center ${
          mobileMenuOpen 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-apple-darkgray hover:text-apple-black transition-colors text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
