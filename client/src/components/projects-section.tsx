import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === "all" || project.skills.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              data-testid={`filter-${category.id}`}
              className={`px-6 py-3 rounded-lg border border-border font-medium transition-all duration-300 ${
                activeFilter === category.id ? 'filter-active' : 'hover:bg-card'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-card rounded-lg overflow-hidden shadow-lg"
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <div className="font-semibold">{project.title}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid={`project-link-${project.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 text-center scroll-indicator">
          <a 
            href="#articles" 
            data-testid="scroll-to-articles"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
