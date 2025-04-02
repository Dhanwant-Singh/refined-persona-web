
import React from "react";
import { Users, Lightbulb, Target } from "lucide-react";

const Leadership = () => {
  const leadershipStories = [
    {
      title: "Team Transformation",
      icon: <Users className="w-12 h-12 text-apple-blue" />,
      description:
        "Transformed an underperforming team into a high-functioning unit by implementing clear communication channels, establishing measurable goals, and fostering a culture of trust and collaboration.",
      impact:
        "Within 6 months, team productivity increased by 45%, employee satisfaction improved by 60%, and we delivered our project ahead of schedule and under budget."
    },
    {
      title: "Strategic Innovation",
      icon: <Lightbulb className="w-12 h-12 text-apple-blue" />,
      description:
        "Identified a critical gap in our product offering and championed the development of a new solution. Led cross-functional teams through the entire product lifecycle from ideation to launch.",
      impact:
        "The new product line generated $4.5M in its first year, opened access to previously untapped market segments, and increased company valuation by 15%."
    },
    {
      title: "Crisis Management",
      icon: <Target className="w-12 h-12 text-apple-blue" />,
      description:
        "When faced with a critical production issue affecting our largest clients, I assembled an emergency response team, implemented 24/7 operation protocols, and personally led communication with stakeholders.",
      impact:
        "We resolved the crisis within 48 hours with minimal disruption to clients, preserving $12M in annual contracts and strengthening client trust in our ability to handle challenges."
    }
  ];

  return (
    <section id="leadership" className="section bg-apple-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Leadership</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            Showcasing my approach to leading teams, driving innovation, and navigating challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipStories.map((story, index) => (
            <div 
              key={index} 
              className="apple-card h-full flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-center mb-6">
                  {story.icon}
                </div>
                <h3 className="text-2xl font-bold text-apple-black text-center mb-4">
                  {story.title}
                </h3>
                <p className="text-apple-darkgray mb-6">
                  {story.description}
                </p>
                <div className="bg-apple-gray/50 p-4 rounded-lg mt-auto">
                  <h4 className="font-semibold text-apple-black mb-2">Impact:</h4>
                  <p className="text-apple-darkgray">
                    {story.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
