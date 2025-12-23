'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    "Certified Full Stack Developer",
    "Fresher & Enthusiastic Learner",
    "Open Source Contributor",
    "Tech Speaker & Mentor"
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-transparent">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image/Visual */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="absolute inset-0 bg-portfolio-gold rounded-lg transform rotate-6 scale-95 opacity-20 -z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Working" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-500" 
            />
        </motion.div>

        {/* Right Content */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <SectionHeading title="About Me" subtitle="My Story" />
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
                I am a driven <span className="font-bold text-portfolio-dark dark:text-portfolio-light">Full Stack Web Developer</span> with a passion for building scalable and user-centric applications. 
                My journey in tech is defined by a relentless curiosity and a commitment to solving complex problems through clean, efficient code.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light">
                My goal is to leverage modern technologies to create impactful digital solutions. Whether it's architecting a robust backend or crafting an intuitive frontend, 
                I strive for excellence in every line of code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="text-portfolio-gold" size={20} />
                        <span className="font-medium text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                ))}
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-portfolio-gold rounded-r-lg transition-colors duration-300">
                <p className="italic text-gray-600 dark:text-gray-400">
                    "Analytical thinking and problem-solving are not just skills; they are a way of life for me. I believe in continuous learning/improvement."
                </p>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;

