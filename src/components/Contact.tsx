'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setResultMessage('');

    // Basic Client-side Validation
    if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus('error');
        setResultMessage('Please fill in all fields.');
        setIsSubmitting(false);
        return;
    }

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setSubmitStatus('error');
        setResultMessage('Please enter a valid email address.');
        setIsSubmitting(false);
        return;
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, 
                name: formData.name,
                email: formData.email,
                message: formData.message,
                subject: `One New Submission from ${formData.name}`,
                from_name: "Portfolio Contact Form",
                botcheck: false // Honeypot field (handled automatically by Web3Forms if sent as checkbox, but custom implementation below)
            }),
        });

        const result = await response.json();

        if (result.success) {
            setSubmitStatus('success');
            setResultMessage('Message sent successfully! I will get back to you shortly.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSubmitStatus('error');
            setResultMessage(result.message || 'Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus('error');
        setResultMessage('Failed to send message. Please check your connection.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-portfolio-dark dark:bg-black text-white mb-0 pb-0 transition-colors duration-300">
      <div className="pb-20">
      <SectionHeading title="Get In Touch" subtitle="Contact Me" light center />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 bg-white/5 p-4 md:p-12 rounded-2xl backdrop-blur-sm shadow-2xl overflow-hidden">
        
        {/* Contact Info */}
        <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-white break-words">Let's talk about your project</h3>
            <p className="text-gray-400 mb-8 text-sm md:text-base">
                I'm currently available for freelance work or full-time opportunities. 
                Send me a message and let's create something amazing together.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold shrink-0">
                        <Mail size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
                        <a href="mailto:contact@shreyagrawal.com" className="text-base md:text-lg font-medium hover:text-portfolio-gold transition-colors break-all">contact@shreyagrawal.com</a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold shrink-0">
                        <Phone size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Phone</p>
                        <p className="text-base md:text-lg font-medium">+91-8755769088</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-gold/10 rounded-full flex items-center justify-center text-portfolio-gold shrink-0">
                        <MapPin size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Location</p>
                        <p className="text-base md:text-lg font-medium">Noida, India</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Web3Forms Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Honeypot Field - Hidden */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors text-sm md:text-base placeholder-gray-500" 
                    placeholder="John Doe" 
                />
            </div>
            
            <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors text-sm md:text-base placeholder-gray-500" 
                    placeholder="john@example.com" 
                />
            </div>
            
            <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea 
                    id="message"
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-gold transition-colors text-sm md:text-base placeholder-gray-500" 
                    placeholder="How can I help you?"
                ></textarea>
            </div>

            {/* Status Message */}
            {submitStatus && (
                <div className={`p-4 rounded-lg text-sm font-bold ${submitStatus === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {resultMessage}
                </div>
            )}

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-gold text-portfolio-dark font-black tracking-widest uppercase py-4 rounded-lg hover:bg-yellow-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
            >
                {isSubmitting ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                    <>Send Message <Send size={18} /></>
                )}
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

