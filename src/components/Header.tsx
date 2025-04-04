
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
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Skip active section updates if we're in the middle of scrolling
      if (isScrollingRef.current) return;
      
      // Throttle the active section updates
      const currentScrollTop = window.scrollY;
      
      // More significant threshold for mobile to reduce sensitivity
      const scrollThreshold = isMobile ? 100 : 50;
      
      if (Math.abs(currentScrollTop - lastScrollTop.current) > scrollThreshold) {
        lastScrollTop.current = currentScrollTop;
        
        if (scrollTimerRef.current !== null) {
          window.clearTimeout(scrollTimerRef.current);
        }
        
        scrollTimerRef.current = window.setTimeout(() => {
          updateActiveSection();
          scrollTimerRef.current = null;
        }, 150); // Increased debounce time
      }
    };

    const updateActiveSection = () => {
      // Get all sections with IDs
      const sections = Array.from(document.querySelectorAll("section[id]"));
      
      // Exit if no sections found
      if (sections.length === 0) return;
      
      // Calculate viewport midpoint
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight / 2;
      
      // Find the section closest to the viewport midpoint
      let closestSection = null;
      let closestDistance = Infinity;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionMidpoint = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMidpoint - viewportMidpoint);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      }
      
      if (closestSection) {
        const newActiveSection = closestSection.getAttribute("id") || "";
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    // Handle clicks on navigation links to prevent glitches
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        // Mark that we're actively scrolling to prevent section updates
        isScrollingRef.current = true;
        
        // Reset the scrolling state after animation completes
        setTimeout(() => {
          isScrollingRef.current = false;
          // Update active section once scrolling is complete
          updateActiveSection();
        }, 1000); // Matches scroll-behavior: smooth duration
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("click", handleNavLinkClick);
    
    // Initial check
    updateActiveSection();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("click", handleNavLinkClick);
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

  // Function to manually set active section and handle smooth scrolling
  const handleNavClick = (sectionId: string) => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Mark that we're actively scrolling to prevent section updates
    isScrollingRef.current = true;
    
    // Manually set the active section immediately for better UX
    setActiveSection(sectionId.replace('#', ''));
    
    // Reset the scrolling state after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Matches scroll-behavior: smooth duration
  };

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
          onClick={() => handleNavClick('home')}
        >
          <span className="text-gradient">Dhanwant Singh</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href.replace('#', ''))}
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
              onClick={() => {
                handleNavClick(link.href.replace('#', ''));
                setMobileMenuOpen(false);
              }}
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
