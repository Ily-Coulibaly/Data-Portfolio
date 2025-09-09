import { useState } from "react";
import { ChevronDown, ExternalLink, Play, FileText, X, Target, BarChart3, Lightbulb, TrendingUp, CheckCircle, Maximize2, Minimize2 } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/lib/constants";
import { BikeShareBlogCard } from "@/components/bike-share-blog-card";
import bikeShareBg from "@assets/generated_images/Text-free_bike_analytics_dashboard_d253bcee.png";
import wayfairBg from "@assets/generated_images/Text-free_e-commerce_analytics_dashboard_100cad4c.png";
import olistBg from "@assets/generated_images/Text-free_marketplace_analytics_dashboard_79006fdc.png";
import blueBikesBg from "@assets/generated_images/Text-free_urban_mobility_dashboard_6f2f1928.png";

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

  // Get company name from project title
  const getCompanyName = (project: any) => {
    if (project.id === 1) return "Bike Share";
    if (project.id === 2) return "Wayfair";
    if (project.id === 3) return "Olist";
    if (project.id === 4) return "Blue Bikes";
    return project.title;
  };

  // Get background for company
  const getCompanyBackground = (project: any) => {
    if (project.id === 1) return `url(${bikeShareBg})`;
    if (project.id === 2) return `url(${wayfairBg})`;
    if (project.id === 3) return `url(${olistBg})`;
    if (project.id === 4) return `url(${blueBikesBg})`;
    return `url(${bikeShareBg})`;
  };

  return (
    <section id="projects" style={{ padding: '80px 24px', background: '#1a1a1a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '64px',
          color: '#ffffff'
        }}>
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              data-testid={`filter-${category.id}`}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid #333',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                background: activeFilter === category.id ? '#A5A584' : 'transparent',
                color: activeFilter === category.id ? '#1a1a1a' : '#ffffff'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.background = '#2d2d2d';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '30px',
          marginBottom: '64px'
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              data-testid={`project-card-${project.id}`}
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: '8px',
                border: '1px solid #333',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Front Card - Company Name */}
              <div
                className="front-card"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: getCompanyBackground(project),
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  const front = e.currentTarget;
                  const back = e.currentTarget.nextElementSibling as HTMLElement;
                  front.style.opacity = '0';
                  front.style.transform = 'translateY(-10px)';
                  front.style.zIndex = '1';
                  if (back) {
                    back.style.opacity = '1';
                    back.style.transform = 'translateY(0)';
                    back.style.zIndex = '3';
                  }
                }}
                onMouseLeave={(e) => {
                  const front = e.currentTarget;
                  const back = e.currentTarget.nextElementSibling as HTMLElement;
                  front.style.opacity = '1';
                  front.style.transform = 'translateY(0)';
                  front.style.zIndex = '2';
                  if (back) {
                    back.style.opacity = '0';
                    back.style.transform = 'translateY(10px)';
                    back.style.zIndex = '1';
                  }
                }}
              >
                {/* Light overlay for better text readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.3)',
                  zIndex: 1
                }} />
                <h3 style={{
                  fontSize: '1.8em',
                  fontWeight: 600,
                  color: '#ffffff',
                  textAlign: 'center',
                  margin: 0,
                  position: 'relative',
                  zIndex: 2,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  {getCompanyName(project)}
                </h3>
              </div>

              {/* Back Card - Project Content */}
              <div
                className="back-card"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: '#2d2d2d',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: 'all 0.3s ease',
                  zIndex: 1
                }}
              >
                {/* Title */}
                <div>
                  <h3 style={{
                    fontSize: '1.2em',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                    lineHeight: 1.3
                  }}>
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p style={{
                    fontSize: '0.85em',
                    color: '#b3b3b3',
                    lineHeight: 1.4,
                    margin: '0 0 12px 0',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px'
                  }}>
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <span 
                        key={tag}
                        style={{
                          fontSize: '0.75em',
                          background: '#1a1a1a',
                          color: '#A5A584',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontWeight: 500
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <a
                    href={project.tableauLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '0.85em',
                      fontWeight: 600,
                      textDecoration: 'none',
                      background: '#A5A584',
                      color: '#1a1a1a',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8a8a6b';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#A5A584';
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play className="w-3 h-3" />
                    View in Tableau
                  </a>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showDetailedView(project);
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '0.85em',
                      fontWeight: 600,
                      background: 'transparent',
                      color: '#A5A584',
                      border: '1px solid #A5A584',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#A5A584';
                      e.currentTarget.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#A5A584';
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
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
                  className="bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {selectedProject.id === 1 ? (
                /* Blog Style View for Bike Share */
                <div className={`overflow-y-auto bg-black ${isFullscreen ? 'h-full' : 'max-h-[80vh]'}`}>
                  <BikeShareBlogCard />
                </div>
              ) : (
                <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
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
                  <a
                    href={selectedProject.tableauLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
                    style={{ 
                      background: '#A5A584',
                      color: '#1a1a1a'
                    }}
                  >
                    <Play className="w-6 h-6" />
                    View in Tableau Public
                  </a>
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
            <span className="text-sm mb-2">View Certificates</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;