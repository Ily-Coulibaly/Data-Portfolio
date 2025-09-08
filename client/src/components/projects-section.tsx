import { useState } from "react";
import { ChevronDown, ExternalLink, Play, FileText, X, Target, BarChart3, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === "all" || project.skills.includes(activeFilter)
  );

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setShowDetailModal(false);
  };

  const showDetailedView = (project: any) => {
    setSelectedProject(project);
    setShowDetailModal(true);
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
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
                      background: 'linear-gradient(90deg, #A5A584, #A5A584, #A5A584)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease'
                    }}
                  />

                  {/* Header Image */}
                  <div 
                    style={{ 
                      height: '160px',
                      position: 'relative',
                      background: `url(${project.headerImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '16px 16px 0 0',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Subtle overlay for better contrast */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3))'
                      }}
                    />
                  </div>

                  {/* Title and Content Below Header */}
                  <div style={{ padding: '20px 24px 0' }}>
                    <h3 
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '6px',
                        lineHeight: 1.3
                      }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      style={{
                        color: '#a0a0a0',
                        fontSize: '13px',
                        lineHeight: 1.4,
                        marginBottom: '16px'
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '0 24px 24px' }}>
                    <div 
                      style={{
                        color: '#c0c0c0',
                        fontSize: '13px',
                        lineHeight: 1.5,
                        marginBottom: '18px'
                      }}
                    >
                      Data analysis of two years of hourly bike share usage patterns, delivering actionable business insights into customer behavior segmentation, seasonal demand forecasting, and weather impact analytics to optimize operational efficiency and drive strategic decision-making.
                    </div>

                    {/* Skill Tags - Minimalistic */}
                    <div style={{ marginBottom: '18px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tags.slice(0, 3).map((tag: string) => (
                          <span 
                            key={tag}
                            style={{
                              background: '#2a2a2a',
                              color: '#d0d0d0',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontSize: '11px',
                              fontWeight: 500,
                              border: '1px solid #404040'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Minimalistic */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                      <button
                        onClick={() => showDetailedView(project)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'opacity 0.2s ease',
                          border: 'none',
                          cursor: 'pointer',
                          background: 'transparent',
                          color: '#A5A584',
                          textDecoration: 'underline',
                          textUnderlineOffset: '2px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '0.7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                      >
                        Read More
                      </button>

                      <a
                        href={project.tableauLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 500,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'opacity 0.2s ease',
                          border: '1px solid #404040',
                          cursor: 'pointer',
                          background: 'transparent',
                          color: '#d0d0d0'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '0.7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                      >
                        <Play className="w-3 h-3" />
                        View Tableau
                      </a>
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

        {/* Detailed Modal */}
        {selectedProject && showDetailModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="flex items-start gap-6 mb-8">
                  <div 
                    style={{
                      width: '120px',
                      height: '90px',
                      borderRadius: '12px',
                      background: `url(${selectedProject.projectImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '2px solid #A5A584',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Key Findings */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                    Key Findings
                  </h4>
                  {selectedProject.keyFindings.map((finding: string, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', fontSize: '14px', lineHeight: 1.6 }}>
                      <span style={{ color: '#A5A584', marginRight: '12px', marginTop: '2px', fontWeight: 'bold' }}>•</span>
                      <span style={{ color: '#d0d0d0' }}>{finding}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '30px',
                    padding: '20px',
                    background: '#222',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#A5A584', display: 'block' }}>
                      {selectedProject.stats.weekdayRides}
                    </span>
                    <span style={{ fontSize: '13px', color: '#a0a0a0', marginTop: '4px' }}>
                      Avg Weekday Rides
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#A5A584', display: 'block' }}>
                      {selectedProject.stats.weatherImpact}
                    </span>
                    <span style={{ fontSize: '13px', color: '#a0a0a0', marginTop: '4px' }}>
                      Weather Impact
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#A5A584', display: 'block' }}>
                      {selectedProject.stats.casualTempSensitivity}
                    </span>
                    <span style={{ fontSize: '13px', color: '#a0a0a0', marginTop: '4px' }}>
                      Casual Temperature Sensitivity
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#A5A584', display: 'block' }}>
                      {selectedProject.stats.registeredTempSensitivity}
                    </span>
                    <span style={{ fontSize: '13px', color: '#a0a0a0', marginTop: '4px' }}>
                      Registered Temperature Sensitivity
                    </span>
                  </div>
                </div>

                {/* Research Questions */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Target className="w-5 h-5" style={{ color: '#A5A584' }} />
                    Research Questions
                  </h4>
                  <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                    {selectedProject.researchQuestions.map((question: string, index: number) => (
                      <div key={index} style={{ 
                        padding: '12px 0', 
                        borderBottom: index < selectedProject.researchQuestions.length - 1 ? '1px solid #333' : 'none'
                      }}>
                        {question}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization Types */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <BarChart3 className="w-5 h-5" style={{ color: '#A5A584' }} />
                    Visualization Types
                  </h4>
                  <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                    {selectedProject.visualizationTypes.map((type: string, index: number) => (
                      <div key={index} style={{ 
                        padding: '12px 0', 
                        borderBottom: index < selectedProject.visualizationTypes.length - 1 ? '1px solid #333' : 'none'
                      }}>
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analysis Approach */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Lightbulb className="w-5 h-5" style={{ color: '#A5A584' }} />
                    Analysis Approach
                  </h4>
                  <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                    {selectedProject.analysisApproach}
                  </div>
                </div>

                {/* Business Impact */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <TrendingUp className="w-5 h-5" style={{ color: '#A5A584' }} />
                    Business Impact
                  </h4>
                  <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                    {selectedProject.businessImpact}
                  </div>
                </div>

                {/* Conclusion */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle className="w-5 h-5" style={{ color: '#A5A584' }} />
                    Conclusion
                  </h4>
                  <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                    {selectedProject.conclusion}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <a
                    href={selectedProject.tableauLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                    style={{ 
                      background: '#A5A584',
                      color: '#000'
                    }}
                  >
                    <Play className="w-6 h-6" />
                    View in Tableau Public
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Project Modal */}
        {selectedProject && !showDetailModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

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
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                </div>
              </div>
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