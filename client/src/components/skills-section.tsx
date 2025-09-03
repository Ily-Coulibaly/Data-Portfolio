import { ChevronDown } from "lucide-react";
import { SKILLS } from "@/lib/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {SKILLS.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="skill-logo text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 bg-card rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <IconComponent className={`w-12 h-12 ${skill.color}`} />
                </div>
                <p className="text-sm font-medium">{skill.name}</p>
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
