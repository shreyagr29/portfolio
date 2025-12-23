import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-portfolio-dark dark:bg-black text-white mb-0 pb-0 transition-colors duration-300">
      <div className="pb-20">
      <SectionHeading title="Get In Touch" subtitle="Contact Me" light center />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-2xl">
        
        {/* Contact Info */}
        <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's talk about your project</h3>
            <p className="text-gray-400 mb-8">
                I'm currently available for freelance work or full-time opportunities. 
                Send me a message and let's create something amazing together.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
                        <a href="mailto:contact@shreyagrawal.com" className="text-lg font-medium hover:text-portfolio-gold transition-colors">contact@shreyagrawal.com</a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Phone</p>
                        <p className="text-lg font-medium">+91-8755769088</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Location</p>
                        <p className="text-lg font-medium">Noida, India</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
            <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors" placeholder="Your Name" />
            </div>
            <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors" placeholder="Your Email" />
            </div>
            <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-portfolio-gold text-portfolio-dark font-black tracking-widest uppercase py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
            </button>
        </form>

      </div>
      </div>
      
      {/* Footer Strip */}
      <div className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Shrey Agrawal. All rights reserved.</p>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
