import { useState } from "react";
import { ChevronDown, ExternalLink, Play, FileText, X } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showReport, setShowReport] = useState(false);

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === "all" || project.skills.includes(activeFilter)
  );

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setShowReport(false);
  };

  const showProjectReport = (project: any) => {
    setSelectedProject(project);
    setShowReport(true);
  };

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
              className={`project-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                project.isNetflixStyle ? 'netflix-card' : 'bg-card'
              }`}
              data-testid={`project-card-${project.id}`}
              onClick={() => openProjectModal(project)}
            >
              {project.isNetflixStyle ? (
                <>
                  {/* Netflix-style Card */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-white/20 text-white text-xs rounded backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Regular Project Card */}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {showReport ? (
                /* Report View */
                <div className="p-8 overflow-y-auto max-h-[80vh]">
                  <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
                  <div 
                    className="text-gray-300 leading-relaxed whitespace-pre-line"
                    style={{ 
                      userSelect: 'none', 
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      WebkitTouchCallout: 'none',
                      WebkitUserDrag: 'none',
                      KhtmlUserSelect: 'none'
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onSelectStart={(e) => e.preventDefault()}
                  >
                    {selectedProject.reportContent}
                  </div>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => setShowReport(false)}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      Back to Project
                    </button>
                  </div>
                </div>
              ) : (
                /* Project Details View */
                <div>
                  <div className="relative h-80">
                    <img 
                      src={selectedProject.image || selectedProject.gradient} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                      <div className="flex gap-2 mb-4">
                        {selectedProject.tags.map((tag: string) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>
                    
                    <div className="flex gap-4">
                      {selectedProject.tableauLink && (
                        <a
                          href={selectedProject.tableauLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                        >
                          <Play className="w-5 h-5" />
                          View in Tableau Public
                        </a>
                      )}
                      
                      {selectedProject.hasReport && (
                        <button
                          onClick={() => showProjectReport(selectedProject)}
                          className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                        >
                          <FileText className="w-5 h-5" />
                          Read Full Report
                        </button>
                      )}
                      
                      {!selectedProject.isNetflixStyle && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                        >
                          <ExternalLink className="w-5 h-5" />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Scroll Indicator */}
        <div className="mt-16 text-center scroll-indicator">
          <a 
            href="#certificates" 
            data-testid="scroll-to-certificates"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>

      <style>{`
        .netflix-card {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          border: 1px solid #333;
        }
        
        .netflix-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;