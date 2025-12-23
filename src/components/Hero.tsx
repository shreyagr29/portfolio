'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [ "FULL STACK DEVELOPER", "MERN STACK EXPERT", "PROBLEM SOLVER", "CREATIVE CODER" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(300);
    } else {
        // Reset speed to normal typing speed if not special case
        if (isDeleting) {
            setTypingSpeed(50); // Deleting speed
        } else {
            setTypingSpeed(150); // Typing speed
        }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 relative overflow-hidden bg-white/50 dark:bg-transparent">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-portfolio-gold/5 skew-x-12 translate-x-1/2 -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-200/20 dark:bg-yellow-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div>
             <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
             >
                <span className="w-12 h-[2px] bg-portfolio-dark dark:bg-portfolio-light"></span>
                <span className="font-bold tracking-widest text-portfolio-dark/70 dark:text-portfolio-light/70 uppercase text-sm">Hello, my name is</span>
             </motion.div>
             
             <h1 className="text-6xl md:text-8xl font-black text-portfolio-dark dark:text-portfolio-light leading-[0.9] tracking-tighter mb-6">
               SHREY <br />
               <span className="text-portfolio-gold drop-shadow-sm">AGRAWAL.</span>
             </h1>
             
             <div className="inline-block bg-portfolio-dark dark:bg-portfolio-light text-white dark:text-portfolio-dark px-6 py-2 transform -skew-x-12 transition-colors duration-300">
                <p className="font-mono text-lg md:text-xl font-bold tracking-wide transform skew-x-12 min-h-[1.5em] flex items-center">
                  {text}
                  <span className="animate-pulse ml-1">|</span>
                </p>
             </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg leading-relaxed">
            I build pixel-perfect, engaging, and accessible digital experiences. 
            Passionate about modern web technologies and creating intuitive user interfaces.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             <Link to="projects" smooth={true} offset={-50} className="px-8 py-4 bg-portfolio-gold text-portfolio-dark font-black tracking-wider rounded shadow-[4px_4px_0px_0px_rgba(33,33,33,1)] hover:shadow-[2px_2px_0px_0px_rgba(33,33,33,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3 cursor-pointer">
                MY WORK <ArrowRight size={20} />
             </Link>
             <button className="px-8 py-4 border-2 border-portfolio-dark dark:border-portfolio-light text-portfolio-dark dark:text-portfolio-light font-bold tracking-wider rounded hover:bg-portfolio-dark hover:text-white dark:hover:bg-portfolio-light dark:hover:text-portfolio-dark transition-all flex items-center gap-3">
                RESUME <Download size={20} />
             </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="relative hidden md:block justify-self-center"
        >
           {/* Abstract Circle Background */}
           <div className="absolute top-5 -right-5 w-[400px] h-[400px] border-2 border-portfolio-gold rounded-full -z-10 bg-portfolio-gold/5" />
           <div className="absolute bottom-5 -left-5 w-[300px] h-[300px] bg-gray-100 dark:bg-gray-800 rounded-full -z-10 mix-blend-multiply dark:mix-blend-normal opacity-50" />
           
           {/* Image Frame */}
           <div className="w-[450px] h-[450px] rounded-full overflow-hidden border-[10px] border-white dark:border-gray-800 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover scale-110" />
           </div>

           {/* Stats Cards */}
           <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-0 left-0 bg-white dark:bg-gray-800 p-6 rounded shadow-xl border-l-4 border-portfolio-gold z-20 max-w-[200px]"
           >
              <h3 className="text-3xl font-black text-portfolio-dark dark:text-portfolio-light">10+</h3>
              <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">Projects Completed</p>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

