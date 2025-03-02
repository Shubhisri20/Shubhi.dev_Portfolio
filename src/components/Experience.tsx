import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experienceData: ExperienceItem[] = [
    {
      title: "Big Data",
      company: "Samsung Innovation Campus",
      period: "08/2024 – 10/2024",
      location: "Remote",
      description: [
        "Gained proficiency in data science tools, machine learning, and mathematical algorithms for big data analysis.",
        "Developed skills in data extraction, transformation, and visualization to derive insights from large datasets."
      ]
    },
    {
      title: "Python with Machine Learning",
      company: "Softpro India Computer Technologies pvt.ltd.",
      period: "07/2024 – 08/2024",
      location: "Lucknow, India",
      description: [
        "Gained hands-on experience in frontend technologies like HTML, CSS, JavaScript, and Bootstrap 5 for building responsive web interfaces.",
        "Learned Python programming with libraries like NumPy, Pandas, Scikit-learn, and Pickle to develop and train machine learning models for data analysis and predictions."
      ]
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          {/* Timeline items */}
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item opacity-0 mb-12 md:mb-0 relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-purple-600 border-4 border-gray-900 z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right">
                <div className={`bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-purple-500/10 ${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                }`}>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-lg font-medium text-purple-400 mb-2">{item.company}</h4>
                    <div className="flex flex-col md:flex-row md:justify-end gap-2 mb-4">
                      <span className="text-sm text-gray-400">{item.period}</span>
                      <span className="hidden md:inline text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{item.location}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 md:text-right">
                      {item.description.map((desc, i) => (
                        <li key={i} className="md:list-none">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;