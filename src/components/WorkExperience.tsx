
import React, { useState } from "react";
import { Calendar, Building2, Award, ChevronRight, Users, Lightbulb, Target, Briefcase } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "Tech Innovations Inc",
      period: "2020 - Present",
      description:
        "Leading a team of 15 across product development, design, and engineering. Launched 3 successful products generating $10M in revenue. Implemented agile methodologies that increased team productivity by 35%.",
      achievements: [
        "Spearheaded the development of our flagship product, increasing market share by 28%",
        "Reduced development lifecycle by 40% through process optimization",
        "Fostered cross-functional collaboration, improving team cohesion and employee satisfaction"
      ],
      responsibilities: [
        "Define product vision, strategy and roadmap based on market research and customer needs",
        "Lead cross-functional teams through all stages of product development lifecycle",
        "Present product strategies to executive leadership and stakeholders",
        "Analyze market trends and competitive landscape to identify growth opportunities"
      ],
      leadership: [
        "Transformed an underperforming team into a high-functioning unit by implementing clear communication channels",
        "Championed the development of a new product line that generated $4.5M in its first year",
        "Led crisis management efforts during a critical production issue, preserving $12M in annual contracts"
      ]
    },
    {
      title: "Product Manager",
      company: "Digital Solutions Corp",
      period: "2017 - 2020",
      description:
        "Managed product roadmap and development for enterprise SaaS platform. Worked closely with engineering and design teams to deliver features that increased user engagement by 45%.",
      achievements: [
        "Led successful product redesign that improved user retention by 60%",
        "Introduced customer feedback loops that resulted in 90% satisfaction rate",
        "Developed strategic partnerships that expanded the product ecosystem"
      ],
      responsibilities: [
        "Developed and maintained product roadmap with clear priorities and timelines",
        "Collaborated with UX/UI designers to create intuitive user experiences",
        "Conducted user research and usability testing to validate product decisions",
        "Created detailed product specifications and user stories for development team"
      ],
      leadership: [
        "Mentored junior team members in agile methodologies and product management best practices",
        "Initiated cross-department collaboration that broke down organizational silos",
        "Advocated for user-centered design principles that became company standard"
      ]
    },
    {
      title: "Project Coordinator",
      company: "Global Tech Services",
      period: "2015 - 2017",
      description:
        "Coordinated cross-functional teams to deliver client projects on time and within budget. Managed stakeholder communications and project documentation.",
      achievements: [
        "Delivered 12 major projects with 100% client satisfaction",
        "Implemented project management tools that improved efficiency by 25%",
        "Mentored junior team members in project management methodologies"
      ],
      responsibilities: [
        "Tracked project progress and ensured deadlines were met",
        "Facilitated communication between team members, stakeholders, and clients",
        "Prepared project status reports and presentations for management review",
        "Managed project documentation and knowledge repository"
      ],
      leadership: [
        "Volunteered to lead a struggling project and turned it around to meet all deadlines",
        "Created documentation templates that were adopted company-wide",
        "Initiated weekly team-building activities that improved team morale and productivity"
      ]
    }
  ];

  const leadershipIcons = {
    teamTransformation: <Users className="w-12 h-12 text-apple-blue" />,
    strategicInnovation: <Lightbulb className="w-12 h-12 text-apple-blue" />,
    crisisManagement: <Target className="w-12 h-12 text-apple-blue" />
  };

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Professional Experience</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            A track record of leadership, innovation, and measurable results across various roles.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="apple-card p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold text-apple-black">{exp.title}</h3>
                  <div className="flex items-center text-apple-darkgray mt-2">
                    <Building2 size={18} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-apple-darkgray mt-2">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-apple-black text-lg">{exp.description}</p>
                  
                  <div className="mt-6">
                    <Tabs defaultValue="achievements" className="w-full">
                      <TabsList className="mb-4 bg-apple-gray/20">
                        <TabsTrigger value="achievements" className="text-sm">Key Achievements</TabsTrigger>
                        <TabsTrigger value="responsibilities" className="text-sm">Responsibilities</TabsTrigger>
                        <TabsTrigger value="leadership" className="text-sm">Leadership Highlights</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="achievements">
                        <h4 className="font-semibold text-apple-black flex items-center">
                          <Award size={18} className="mr-2 text-apple-blue" />
                          Key Achievements
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="responsibilities">
                        <h4 className="font-semibold text-apple-black flex items-center">
                          <Briefcase size={18} className="mr-2 text-apple-blue" />
                          Core Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="leadership">
                        <h4 className="font-semibold text-apple-black flex items-center">
                          <Users size={18} className="mr-2 text-apple-blue" />
                          Leadership Highlights
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {exp.leadership.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight size={16} className="text-apple-blue mr-2 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
