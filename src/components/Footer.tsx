import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shubhi.dev
            </a>
            <p className="text-gray-400 mt-2">Computer Science Student & Data Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/shubhi-srivastava-b31132292" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Shubhisri20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="mailto:shubhisrivastava239@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
            <a href="tel:+918574446744" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Shubhi Srivastava. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;