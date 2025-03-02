import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  image: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      title: "Movie Recommendation System",
      description: "Designed a content-based recommendation system using ML to suggest movies based on user preferences. Implemented in Python with Streamlit, leveraging NumPy and Pandas for efficient data processing.",
      technologies: ["Python", "Machine Learning", "Streamlit", "NumPy", "Pandas"],
      period: "08/2024 – 08/2024",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      github: "https://github.com/Shubhisri20"
    },
    {
      title: "Health Guard: Multiple Disease Prediction System",
      description: "Developed a machine learning model to predict diseases like Diabetes, Heart Disease, and Parkinson's with 85% accuracy. Built using Python, Pandas, NumPy, Scikit-learn, and Streamlit for an interactive user interface.",
      technologies: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "Pandas"],
      period: "07/2024 – 07/2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/Shubhisri20"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-500 hover:shadow-purple-500/20 animate-fadeIn"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs text-gray-400">{project.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              {/* Hover effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;