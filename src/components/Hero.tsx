import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(124, 58, 237, 0.15), transparent 50%)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900/90 z-0"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-6 animate-fadeInUp">
            <h2 className="text-xl md:text-2xl font-medium text-purple-400">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shubhi Srivastava
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Computer Science Student & Data Enthusiast
            </p>
            <p className="text-gray-400 max-w-lg">
              Passionate about data analytics, machine learning, and web development. 
              Building innovative solutions to real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1_9GvtfiTeDzYZ5IX_yJtbhdv5F7pnRvn/view?usp=sharing" 
                download
                className="px-6 py-3 border border-purple-500 text-purple-500 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} /> Resume
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="www.linkedin.com/in/shubhi-srivastava-b31132292" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Shubhisri20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:shubhisrivastava239@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="tel:+918574446744" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center animate-fadeInRight">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl font-bold text-white">
                  SS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;