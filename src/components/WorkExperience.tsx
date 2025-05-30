
import React, { useState, useEffect, useRef } from "react";
import { Calendar, Building2, Award, ChevronRight, Users, Lightbulb, Target, Briefcase, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [visibleExps, setVisibleExps] = useState<number[]>([]);
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  const experiences = [
    {
      title: "Head of Operations",
      company: "United Sports Club",
      period: "March 2025 - Present",
      description:
        "Leading a team of 30+ across operations, events, and community engagement. Successfully secured new sponsorships while improving operational efficiency and club participation.",
      achievements: [
        "Secured 5+ new sponsorships, increasing funding and community outreach",
        "Improved scheduling efficiency by 40% through custom workflow systems",
        "Increased overall club participation by 25% with optimized operations"
      ],
      responsibilities: [
        "Manage daily operations: budgeting, logistics, staffing, inventory, and scheduling",
        "Oversee facility management, event planning, and vendor coordination",
        "Ensure league compliance, safety standards, and growth planning"
      ],
      leadership: [
        "Recruited, trained, and managed a 30+ person team",
        "Built strategic partnerships with local businesses and organizations",
        "Scaled club operations during peak seasons with zero disruptions"
      ]
    },
    {
      title: "Assistant Manager",
      company: "A&W Food Services of Canada Inc.",
      period: "March 2025 - Present",
      description:
        "Managing daily restaurant operations with a strategic focus on business growth metrics, profit optimization, and system scalability. Developing comprehensive business acumen while mastering the operational blueprint of this successful franchise model.",
      achievements: [
        "Led daily operations using established franchise systems and SOPs",
        "Maintained consistent quality standards across all food preparation",
        "Optimized labor scheduling to match sales forecasts and business needs"
      ],
      responsibilities: [
        "Assist with day-to-day operations including food prep, order taking, and maintaining service flow",
        "Control food/labor costs and minimize waste through inventory management",
        "Ensure brand consistency and quality standards across all customer touchpoints",
        "Track KPIs: sales, margins, speed of service, and customer satisfaction metrics"
      ],
      leadership: [
        "Assist with handling inventory, ordering, and vendor relations",
        "Learn full P&L and budgeting responsibilities for career advancement",
        "Train and develop team members on operational procedures and standards"
      ]
    },
    {
      title: "Lead Generation Researcher",
      company: "AYD Internet Marketing",
      period: "March 2025 - Present",
      description:
        "Conducted in-depth market research to identify qualified prospects for SaaS products. Created comprehensive databases and strategic reports to support marketing efforts.",
      achievements: [
        "Created lead database with 150+ qualified prospects",
        "Developed strategic market reports to support SaaS expansion",
        "Boosted marketing precision with better structured data"
      ],
      responsibilities: [
        "Researched industries and platforms for high-potential lead targeting",
        "Structured contact and company data into marketing-ready systems",
        "Evaluated market alignment with company strengths"
      ],
      leadership: [
        "Led development of internal research processes",
        "Delivered reports that influenced lead generation strategy",
        "Initiated collaboration between research and outreach teams"
      ]
    },
    {
      title: "Partnership & AI Content Coordinator",
      company: "XPD Direct Inc.",
      period: "September 2024 - October 2024",
      description:
        "Developed partnerships while implementing AI-driven content generation solutions. Created frameworks for content quality and ethical considerations.",
      achievements: [
        "Initiated outreach with 20+ brand partners",
        "Reduced manual work with AI-driven content tools",
        "Developed ethical frameworks for content bias detection"
      ],
      responsibilities: [
        "Researched and contacted strategic partners",
        "Supported AI content generation and quality control",
        "Compiled performance reports for internal use"
      ],
      leadership: [
        "Standardized content evaluation processes",
        "Spearheaded use of AI review frameworks",
        "Collaborated across departments on digital outreach"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleExps(prev => [...prev, index].filter((v, i, a) => a.indexOf(v) === i));
          }
        });
      },
      { threshold: 0.2 }
    );

    expRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      expRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="section bg-dark-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 animate-slide-up" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A journey defined by hands-on leadership, strategic thinking, and an entrepreneurial drive — across operations, marketing, and growth-focused partnerships.
          </p>
          <div className="fancy-line"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={el => expRefs.current[index] = el}
              data-index={index}
              className={`glass-card p-8 md:p-10 transition-all duration-700 transform ${
                visibleExps.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold text-white relative inline-block">
                    {exp.title}
                    <span className="absolute -bottom-2 left-0 w-20 h-1 bg-apple-blue/30 rounded-full"></span>
                  </h3>
                  <div className="flex items-center text-gray-300 mt-6 transform transition-all hover:translate-x-1">
                    <Building2 size={18} className="mr-2 text-apple-blue" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mt-2 transform transition-all hover:translate-x-1">
                    <Calendar size={18} className="mr-2 text-apple-blue" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-white text-lg">{exp.description}</p>
                  
                  <div className="mt-6">
                    <Tabs defaultValue="achievements" className="w-full enhanced-tabs">
                      <div className="overflow-x-auto">
                        <TabsList className="mb-4 bg-dark-accent/80 p-1 rounded-full inline-flex whitespace-nowrap min-w-full">
                          <TabsTrigger value="achievements" className="tab text-sm py-2 px-4">Key Achievements</TabsTrigger>
                          <TabsTrigger value="responsibilities" className="tab text-sm py-2 px-4">Responsibilities</TabsTrigger>
                          <TabsTrigger value="leadership" className="tab text-sm py-2 px-4">Leadership</TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="achievements" className="animate-fade-in">
                        <h4 className="font-semibold text-white flex items-center">
                          <Award size={18} className="mr-2 text-apple-blue" />
                          Key Achievements
                        </h4>
                        <ul className="mt-3 space-y-2 text-gray-200">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                              <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="responsibilities" className="animate-fade-in">
                        <h4 className="font-semibold text-white flex items-center">
                          <Briefcase size={18} className="mr-2 text-apple-blue" />
                          Core Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2 text-gray-200">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                              <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="leadership" className="animate-fade-in">
                        <h4 className="font-semibold text-white flex items-center">
                          <Users size={18} className="mr-2 text-apple-blue" />
                          Leadership Highlights
                        </h4>
                        <div className="mt-3 overflow-x-auto pb-2">
                          <div className="flex space-x-4">
                            {exp.leadership.map((item, i) => (
                              <div key={i} className="flex-shrink-0 max-w-xs bg-dark-accent p-3 rounded-lg transform transition-all duration-300 hover:translate-y-[-2px]">
                                <div className="flex items-start text-gray-200">
                                  <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* LinkedIn reference section */}
        <div 
          className="text-center mt-16 glass-card p-6 transform transition-all duration-700 opacity-0 translate-y-20"
          ref={el => {
            if (el) {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-20");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  });
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
              return () => observer.unobserve(el);
            }
          }}
        >
          <p className="text-xl text-gray-200 flex items-center justify-center gap-2">
            View many more experiences on my{" "}
            <a 
              href="https://linkedin.com/in/dhanwants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-apple-blue font-medium hover:underline flex items-center"
            >
              LinkedIn <ExternalLink size={18} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
