
import React from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-apple-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-apple-black mb-4">Get in Touch</h2>
          <p className="text-apple-darkgray text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="apple-card p-8">
            <h3 className="text-2xl font-bold text-apple-black mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-apple-blue mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-apple-black">Email</h4>
                  <a 
                    href="mailto:john.doe@example.com" 
                    className="text-apple-darkgray hover:text-apple-blue transition-colors"
                  >
                    john.doe@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="text-apple-blue mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-apple-black">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/johndoe" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-apple-darkgray hover:text-apple-blue transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-bold text-apple-black mb-4">Connect With Me</h3>
              <p className="text-apple-darkgray mb-6 text-center">
                Follow me on LinkedIn for professional updates and insights.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  className="w-10 h-10 rounded-full bg-apple-blue flex items-center justify-center text-white hover:bg-apple-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
