import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <p className="text-gray-300 leading-relaxed">
              I'm Shubhi Srivastava, a Computer Science and Engineering student at the Institute of Technology and Management, Gorakhpur, passionate about leveraging technology to solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech has led me to develop a strong foundation in data analytics, machine learning, and web development. I enjoy working with Python and its powerful libraries to extract insights from data and build predictive models.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through my internships and projects, I've gained hands-on experience in developing machine learning models and creating responsive web interfaces. I'm particularly interested in the intersection of data science and user-friendly applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects.
            </p>
          </div>
          
          <div className="relative animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Personal Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Name:</div>
                  <div className="text-gray-200">Shubhi Srivastava</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Email:</div>
                  <div className="text-gray-200">shubhisrivastava239@gmail.com</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Phone:</div>
                  <div className="text-gray-200">+91 8574446744</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Location:</div>
                  <div className="text-gray-200">Gorakhpur, India</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Study:</div>
                  <div className="text-gray-200">B.Tech in Computer Science</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-24 text-gray-400">Interests:</div>
                  <div className="text-gray-200">Data Analytics, Machine Learning, Web Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;