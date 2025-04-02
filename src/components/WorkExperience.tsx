
import React from "react";
import { Calendar, Building2, Award } from "lucide-react";

const WorkExperience = () => {
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
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Work Experience</h2>
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
                    <h4 className="font-semibold text-apple-black flex items-center">
                      <Award size={18} className="mr-2 text-apple-blue" />
                      Key Achievements
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-apple-blue mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
