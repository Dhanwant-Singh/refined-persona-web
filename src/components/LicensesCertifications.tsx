
import React from "react";
import { Award, Calendar, ExternalLink, BookOpen, ChevronRight } from "lucide-react";

const LicensesCertifications = () => {
  const certifications = [
    {
      title: "Google Digital Marketing & E-commerce Certificate",
      issuer: "Coursera (Issued by Google)",
      date: "Issued Mar 2025",
      credentialId: "Q6RIGTGBYEGL",
      credentialURL: "https://www.coursera.org/account/accomplishments/professional-cert/Q6RIGTGBYEGL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      topics: [
        "SEO & SEM strategy",
        "Email & content marketing",
        "Google Ads, Analytics",
        "E-commerce store management"
      ]
    },
    {
      title: "JPMorgan Chase – Investment Banking Job Simulation",
      issuer: "Forage",
      date: "Issued Jun 2024",
      credentialId: "wgcH34SRyvvs6E2k7",
      credentialURL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_hjtSz55daP2R9s72X_1719360543718_completion_certificate.pdf"
    },
    {
      title: "CBRE – Commercial Real Estate Job Simulation",
      issuer: "Forage",
      date: "Issued Jul 2024",
      credentialId: "6isMcNXLqZ2q4E3w2",
      credentialURL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/CBRE/HQHwY7yGLujTjjdrF_CBRE_hjtSz55daP2R9s72X_1720646411402_completion_certificate.pdf"
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
                  
                  {cert.topics && (
                    <div className="mt-4">
                      <h4 className="font-medium text-apple-black flex items-center mb-2">
                        <BookOpen size={14} className="mr-1 text-apple-blue" />
                        Covered Topics:
                      </h4>
                      <ul className="space-y-1">
                        {cert.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-apple-darkgray flex items-start">
                            <ChevronRight size={12} className="text-apple-blue mr-1 mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <a 
                  href={cert.credentialURL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-apple-blue hover:underline transition-all text-sm font-medium group"
                >
                  Show Credential
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
