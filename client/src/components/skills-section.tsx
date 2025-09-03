import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const currentSkills = SKILLS_CATEGORIES.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-card rounded-lg p-1">
            {SKILLS_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
          {currentSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="skill-logo text-center flex flex-col items-center">
                <div 
                  className="w-20 h-20 mb-4 bg-card rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  title={skill.name}
                >
                  <IconComponent 
                    className={`w-12 h-12 ${skill.color}`}
                  />
                </div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 text-center scroll-indicator">
          <a 
            href="#projects" 
            data-testid="scroll-to-projects"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
