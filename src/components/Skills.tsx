import React, { useEffect, useRef } from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      category: "Technical Skills",
      skills: ["Python", "Data Analytics", "Machine Learning", "Front-End Web Development"]
    },
    {
      category: "Tools & Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit Learn", "Seaborn", "Statistical Analysis", "Flask", "Streamlit", "Git", "HTML", "CSS", "JavaScript", "Bootstrap 5"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Interpersonal Skills", "Problem Solving", "Critical Thinking", "Teamwork"]
    }
  ];

  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add('animate-fadeInUp');
                (item as HTMLElement).classList.remove('opacity-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-purple-500/10"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item opacity-0 px-4 py-2 bg-gray-700 rounded-full text-gray-200 text-sm font-medium border border-gray-600 hover:border-purple-500 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;