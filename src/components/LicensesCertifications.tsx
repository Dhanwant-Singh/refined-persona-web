
import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

const LicensesCertifications = () => {
  const certifications = [
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "Issued Jun 2022 · Expires Jun 2025",
      credentialId: "12345678",
      credentialURL: "#"
    },
    {
      title: "Certified ScrumMaster® (CSM)",
      issuer: "Scrum Alliance",
      date: "Issued Sep 2021 · No Expiration",
      credentialId: "CSM-123456",
      credentialURL: "#"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Mar 2022 · Expires Mar 2025",
      credentialId: "AWS-123456789",
      credentialURL: "#"
    }
  ];

  return (
    <section id="certifications" className="section bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 animate-slide-up" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Licenses & Certifications</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            Professional credentials that validate my expertise and commitment to excellence.
          </p>
          <div className="fancy-line"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift opacity-0 animate-slide-up"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Award className="text-apple-blue mr-3" size={24} />
                    <h3 className="font-bold text-xl text-apple-black">{cert.title}</h3>
                  </div>
                  <p className="text-apple-darkgray mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-apple-darkgray mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-apple-darkgray">Credential ID: {cert.credentialId}</p>
                </div>
                
                <a 
                  href={cert.credentialURL} 
                  className="mt-4 flex items-center text-apple-blue hover:underline transition-all text-sm font-medium group"
                >
                  View credential
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensesCertifications;
