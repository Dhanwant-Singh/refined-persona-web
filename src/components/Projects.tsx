
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Enterprise Platform Redesign",
      category: "UX/UI & Product Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
      description: "Led the complete overhaul of our enterprise platform serving 50,000+ users. Conducted extensive user research, defined the product roadmap, and collaborated with design and engineering teams to deliver a modern, intuitive interface.",
      outcome: "Increased user engagement by 75%, reduced onboarding time by 60%, and improved customer satisfaction scores from 6.8 to 9.2/10.",
      link: "#"
    },
    {
      title: "Mobile App Launch",
      category: "Product Development",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Conceptualized and led the development of a mobile companion app to our main product. Defined MVP features, collaborated with UX researchers to identify key user needs, and managed agile development process.",
      outcome: "Achieved 250,000 downloads in the first quarter, 4.8/5 App Store rating, and decreased customer support inquiries by 35%.",
      link: "#"
    },
    {
      title: "Data Analytics Dashboard",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Initiated and led the development of a comprehensive analytics dashboard to provide actionable insights for business users. Worked with data scientists to identify key metrics and visualizations that would drive business decisions.",
      outcome: "Enabled data-driven decision making that resulted in 15% cost reduction and 23% revenue increase within the first year of implementation.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Projects</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            Showcasing significant initiatives where I've driven impact and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer p-6 rounded-xl transition-all ${
                    activeProject === index 
                      ? "bg-apple-blue/10 border-l-4 border-apple-blue" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <h3 className="text-xl font-bold text-apple-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-apple-blue font-medium mb-3">
                    {project.category}
                  </p>
                  <p className="text-apple-darkgray line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="apple-card h-full overflow-hidden">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-apple-black">
                      {projects[activeProject].title}
                    </h3>
                    <p className="text-apple-blue font-medium">
                      {projects[activeProject].category}
                    </p>
                  </div>
                  <a 
                    href={projects[activeProject].link}
                    className="text-apple-blue hover:text-apple-black transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                
                <p className="text-apple-darkgray mb-6">
                  {projects[activeProject].description}
                </p>
                
                <div className="bg-apple-gray/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-apple-black mb-2">
                    Outcome:
                  </h4>
                  <p className="text-apple-darkgray">
                    {projects[activeProject].outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
