import { useState } from "react";
import { ChevronDown, ExternalLink, Play, FileText, X, Target, BarChart3, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showReport, setShowReport] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

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

  const toggleExpand = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const isExpanded = (projectId: number) => expandedProjects.has(projectId);

  return (
    <section id="projects" className="py-20 px-6" style={{ background: '#0f0f0f' }}>
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
            <div key={project.id}>
              {project.isAdvancedCard ? (
                /* Advanced Portfolio Card */
                <div 
                  className="advanced-portfolio-card"
                  data-testid={`project-card-${project.id}`}
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '16px',
                    maxWidth: '450px',
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                    const borderEl = e.currentTarget.querySelector('.gradient-border') as HTMLElement;
                    if (borderEl) borderEl.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    const borderEl = e.currentTarget.querySelector('.gradient-border') as HTMLElement;
                    if (borderEl) borderEl.style.opacity = '0';
                  }}
                >
                  {/* Gradient Border */}
                  <div 
                    className="gradient-border"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #00ff87, #0099ff, #8b5cf6, #ff6b35)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease'
                    }}
                  />

                  {/* Header */}
                  <div style={{ padding: '24px', position: 'relative' }}>
                    <div 
                      style={{
                        background: 'linear-gradient(135deg, #00ff87, #0099ff)',
                        color: '#000',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        marginBottom: '16px'
                      }}
                    >
                      {project.category}
                    </div>
                    
                    {/* Profile Picture */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '24px',
                        right: '24px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >
                      IC
                    </div>

                    <h3 
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                        paddingRight: '80px'
                      }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      style={{
                        color: '#a0a0a0',
                        fontSize: '14px',
                        lineHeight: 1.4,
                        paddingRight: '80px'
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '0 24px 24px' }}>
                    <div 
                      style={{
                        color: '#d0d0d0',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        marginBottom: '20px'
                      }}
                    >
                      {project.description}
                    </div>

                    {/* Key Findings */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
                        Key Findings
                      </h4>
                      {project.keyFindings.map((finding: string, index: number) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '13px', lineHeight: 1.5 }}>
                          <span style={{ color: '#00ff87', marginRight: '8px', marginTop: '2px', fontWeight: 'bold' }}>•</span>
                          <span>{finding}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {project.tags.map((tag: string) => (
                          <span 
                            key={tag}
                            className="skill-tag-hover"
                            style={{
                              background: '#2a2a2a',
                              color: '#e0e0e0',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: 500,
                              border: '1px solid #404040',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#333';
                              e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 255, 135, 0.2)';
                              e.currentTarget.style.borderColor = '#00ff87';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#2a2a2a';
                              e.currentTarget.style.boxShadow = 'none';
                              e.currentTarget.style.borderColor = '#404040';
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                      <a
                        href={project.tableauLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          padding: '10px 20px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          border: 'none',
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #00ff87, #0099ff)',
                          color: '#000'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <FileText className="w-4 h-4" />
                        View in Tableau
                      </a>
                      
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="btn-secondary"
                        style={{
                          padding: '10px 20px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          border: '1px solid #404040',
                          cursor: 'pointer',
                          background: '#2a2a2a',
                          color: '#e0e0e0'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <span>{isExpanded(project.id) ? 'Read Less' : 'Read More'}</span>
                        <ChevronDown 
                          className="w-4 h-4" 
                          style={{ 
                            transition: 'transform 0.3s ease',
                            transform: isExpanded(project.id) ? 'rotate(180deg)' : 'rotate(0deg)'
                          }} 
                        />
                      </button>
                    </div>

                    {/* Expandable Content */}
                    <div 
                      style={{
                        maxHeight: isExpanded(project.id) ? '1000px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      {/* Stats Grid */}
                      <div 
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '16px',
                          marginBottom: '20px',
                          padding: '16px',
                          background: '#222',
                          borderRadius: '8px'
                        }}
                      >
                        <div style={{ textAlign: 'center' }}>
                          <span style={{ fontSize: '20px', fontWeight: 700, color: '#00ff87', display: 'block' }}>
                            {project.stats.weekdayRides}
                          </span>
                          <span style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '4px' }}>
                            Avg Weekday Rides
                          </span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <span style={{ fontSize: '20px', fontWeight: 700, color: '#00ff87', display: 'block' }}>
                            {project.stats.weatherImpact}
                          </span>
                          <span style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '4px' }}>
                            Weather Impact
                          </span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <span style={{ fontSize: '20px', fontWeight: 700, color: '#00ff87', display: 'block' }}>
                            {project.stats.casualTempSensitivity}
                          </span>
                          <span style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '4px' }}>
                            Casual Temperature Sensitivity
                          </span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <span style={{ fontSize: '20px', fontWeight: 700, color: '#00ff87', display: 'block' }}>
                            {project.stats.registeredTempSensitivity}
                          </span>
                          <span style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '4px' }}>
                            Registered Temperature Sensitivity
                          </span>
                        </div>
                      </div>

                      {/* Research Questions */}
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          color: '#ffffff', 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <Target className="w-4 h-4" />
                          Research Questions
                        </h4>
                        <div style={{ color: '#d0d0d0', fontSize: '13px', lineHeight: 1.5 }}>
                          {project.researchQuestions.map((question: string, index: number) => (
                            <div key={index} style={{ 
                              padding: '8px 0', 
                              borderBottom: index < project.researchQuestions.length - 1 ? '1px solid #333' : 'none'
                            }}>
                              {question}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visualization Types */}
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          color: '#ffffff', 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <BarChart3 className="w-4 h-4" />
                          Visualization Types
                        </h4>
                        <div style={{ color: '#d0d0d0', fontSize: '13px', lineHeight: 1.5 }}>
                          {project.visualizationTypes.map((type: string, index: number) => (
                            <div key={index} style={{ 
                              padding: '8px 0', 
                              borderBottom: index < project.visualizationTypes.length - 1 ? '1px solid #333' : 'none'
                            }}>
                              {type}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Analysis Approach */}
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          color: '#ffffff', 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <Lightbulb className="w-4 h-4" />
                          Analysis Approach
                        </h4>
                        <div style={{ color: '#d0d0d0', fontSize: '13px', lineHeight: 1.5 }}>
                          {project.analysisApproach}
                        </div>
                      </div>

                      {/* Business Impact */}
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          color: '#ffffff', 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <TrendingUp className="w-4 h-4" />
                          Business Impact
                        </h4>
                        <div style={{ color: '#d0d0d0', fontSize: '13px', lineHeight: 1.5 }}>
                          {project.businessImpact}
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          color: '#ffffff', 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <CheckCircle className="w-4 h-4" />
                          Conclusion
                        </h4>
                        <div style={{ color: '#d0d0d0', fontSize: '13px', lineHeight: 1.5 }}>
                          {project.conclusion}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Project Cards */
                <div 
                  className={`project-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-card`}
                  data-testid={`project-card-${project.id}`}
                  onClick={() => openProjectModal(project)}
                >
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
                      {project.tags.map((tag: string) => (
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
                </div>
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
                      
                      {!selectedProject.isAdvancedCard && (
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
    </section>
  );
};

export default ProjectsSection;