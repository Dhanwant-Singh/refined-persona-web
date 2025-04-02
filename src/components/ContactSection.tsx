
import React from "react";
import { Mail, Linkedin, GitHub, MessageSquare } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              
              <div className="flex items-center">
                <GitHub className="text-apple-blue mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-apple-black">GitHub</h4>
                  <a 
                    href="https://github.com/johndoe" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-apple-darkgray hover:text-apple-blue transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-apple-black mb-4">Connect With Me</h3>
              <p className="text-apple-darkgray mb-6">
                Follow me on social media for professional updates and insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-apple-blue flex items-center justify-center text-white hover:bg-apple-black transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-apple-blue flex items-center justify-center text-white hover:bg-apple-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-apple-blue flex items-center justify-center text-white hover:bg-apple-black transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="apple-card p-8">
            <h3 className="text-2xl font-bold text-apple-black mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="apple-btn w-full flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
