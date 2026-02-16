import { useState } from "react";
import { ChevronDown, ExternalLink, Play, FileText, X, Target, BarChart3, Lightbulb, TrendingUp, CheckCircle, Maximize2, Minimize2, Github } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";
import { BikeShareBlogCard } from "@/components/bike-share-blog-card";
import bikeShareBg from "@assets/generated_images/Dark_tech_bike_analytics_dashboard_f691e25c.png";
import wayfairBg from "@assets/generated_images/Dark_Wayfair_analytics_dashboard_0212aec8.png";
import stackwellBg from "@assets/generated_images/stackwell_ai_inventory_platform.png";
import meetingBg from "@assets/generated_images/meeting_transcript_analyzer.png";
import nytimesBg from "@assets/generated_images/nytimes_sentiment_analysis.png";
import housingBg from "@assets/generated_images/california_housing_analysis.png";
import olistBg from "@assets/generated_images/Clean_Brazil_e-commerce_interface_89bcc56b.png";
import blueBikesBg from "@assets/generated_images/Boston_bike-sharing_analytics_dashboard_68ff43d0.png";
import aiCopilotBg from "@assets/generated_images/ai_copilot_agent_zu.png";
import genaiIotBg from "@assets/generated_images/genai_iot_agriculture.png";
import aiMonetizationBg from "@assets/generated_images/ai_monetization_strategy.png";
import enterpriseAiBg from "@assets/generated_images/enterprise_ai_transformation.png";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === "all" || project.skills.includes(activeFilter)
  );

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setShowDetailModal(false);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
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

                  {/* Featured Badge */}
                  {project.isFeatured && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      zIndex: 2,
                      background: '#A5A584',
                      color: '#000',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase' as const
                    }}>
                      Featured
                    </div>
                  )}

                  {/* Header Image */}
                  <div 
                    style={{ 
                      height: '160px',
                      position: 'relative',
                      backgroundImage: `url(${
                        project.id === 1 ? bikeShareBg : 
                        project.id === 2 ? wayfairBg : 
                        project.id === 3 ? olistBg :
                        project.id === 4 ? blueBikesBg :
                        project.id === 5 ? stackwellBg : 
                        project.id === 6 ? meetingBg : 
                        project.id === 7 ? nytimesBg : 
                        project.id === 8 ? housingBg : 
                        project.id === 9 ? aiCopilotBg :
                        project.id === 10 ? genaiIotBg :
                        project.id === 11 ? aiMonetizationBg :
                        project.id === 12 ? enterpriseAiBg :
                        wayfairBg
                      })`,
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
                      {project.description}
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
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

                      {project.isStackwell ? (
                        <a
                          href={project.livePlatformLink}
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
                            border: '1px solid #A5A584',
                            cursor: 'pointer',
                            background: 'transparent',
                            color: '#A5A584'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.7';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Platform
                        </a>
                      ) : project.isAIProject ? (
                        <a
                          href={project.reportLink}
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
                            border: '1px solid #A5A584',
                            cursor: 'pointer',
                            background: 'transparent',
                            color: '#A5A584'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.7';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        >
                          <FileText className="w-3 h-3" />
                          View Report
                        </a>
                      ) : project.isPythonProject ? (
                        <a
                          href={project.githubLink}
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
                          <Github className="w-3 h-3" />
                          View Project
                        </a>
                      ) : (
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
                          View in Tableau
                        </a>
                      )}
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
            <div className={`bg-black overflow-hidden relative ${
              isFullscreen 
                ? 'fixed inset-0 w-full h-full' 
                : 'rounded-2xl max-w-6xl w-full max-h-[90vh]'
            }`}>
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {selectedProject.id === 1 && (
                  <button
                    onClick={toggleFullscreen}
                    className="bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-5 h-5 text-white" />
                    ) : (
                      <Maximize2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                )}
                <button
                  onClick={closeProjectModal}
                  aria-label="Close"
                  className="bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {selectedProject.id === 1 ? (
                <div className={`overflow-y-auto bg-black ${isFullscreen ? 'h-full' : 'max-h-[80vh]'}`}>
                  <BikeShareBlogCard />
                </div>
              ) : selectedProject.isStackwell ? (
                <div className="p-4 sm:p-8 overflow-y-auto max-h-[80vh]">
                  <div className="mb-8">
                    <div style={{ display: 'inline-block', background: '#A5A584', color: '#000', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Featured
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Target className="w-5 h-5" style={{ color: '#A5A584' }} />
                      Platform Scope
                    </h4>
                    {selectedProject.platformScope?.map((item: string, index: number) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', lineHeight: 1.6 }}>
                        <span style={{ color: '#A5A584', marginRight: '12px', fontWeight: 'bold' }}>•</span>
                        <span style={{ color: '#d0d0d0' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '30px', padding: '20px', background: '#1a1a1a', borderRadius: '12px', border: '1px solid #333' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Lightbulb className="w-5 h-5" style={{ color: '#A5A584' }} />
                      My Role & Ownership
                    </h4>
                    <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic' }}>
                      {selectedProject.role}
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <BarChart3 className="w-5 h-5" style={{ color: '#A5A584' }} />
                      Data & Analytics Infrastructure
                    </h4>
                    {selectedProject.dataInfrastructure?.map((item: string, index: number) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', lineHeight: 1.6 }}>
                        <span style={{ color: '#A5A584', marginRight: '12px', fontWeight: 'bold' }}>•</span>
                        <span style={{ color: '#d0d0d0' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Lightbulb className="w-5 h-5" style={{ color: '#A5A584' }} />
                      AI & Predictive Intelligence Layer
                    </h4>
                    {selectedProject.aiIntelligence?.map((item: string, index: number) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', lineHeight: 1.6 }}>
                        <span style={{ color: '#A5A584', marginRight: '12px', fontWeight: 'bold' }}>•</span>
                        <span style={{ color: '#d0d0d0' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Target className="w-5 h-5" style={{ color: '#A5A584' }} />
                      System Architecture
                    </h4>
                    {selectedProject.architectureSignals?.map((item: string, index: number) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', lineHeight: 1.6 }}>
                        <span style={{ color: '#A5A584', marginRight: '12px', fontWeight: 'bold' }}>•</span>
                        <span style={{ color: '#d0d0d0' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TrendingUp className="w-5 h-5" style={{ color: '#A5A584' }} />
                      Business Impact
                    </h4>
                    <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6 }}>
                      {selectedProject.businessImpact}
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px', padding: '20px', background: '#1a1a1a', borderRadius: '12px', border: '1px solid #A5A584' }}>
                    <div style={{ color: '#d0d0d0', fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic' }}>
                      {selectedProject.conclusion}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      href={selectedProject.livePlatformLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                      style={{ background: '#A5A584', color: '#000' }}
                    >
                      <ExternalLink className="w-6 h-6" />
                      Live Platform
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                      style={{ background: 'transparent', color: '#A5A584', border: '1px solid #A5A584' }}
                    >
                      <Github className="w-6 h-6" />
                      View Codebase
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-8 overflow-y-auto max-h-[80vh]">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
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
                  {selectedProject.isAIProject ? (
                    <a
                      href={selectedProject.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                      style={{ 
                        background: '#A5A584',
                        color: '#000'
                      }}
                    >
                      <FileText className="w-6 h-6" />
                      View Full Report
                    </a>
                  ) : selectedProject.isPythonProject ? (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                      style={{ 
                        background: '#A5A584',
                        color: '#000'
                      }}
                    >
                      <Github className="w-6 h-6" />
                      View on GitHub
                    </a>
                  ) : (
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
                  )}
                </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Regular Project Modal */}
        {selectedProject && !showDetailModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              <button
                onClick={closeProjectModal}
                aria-label="Close"
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
            href="#experience" 
            data-testid="scroll-to-experience"
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