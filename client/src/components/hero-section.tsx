import { FileText, ChevronDown, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiTableau } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 -mt-12">
          <img 
            src="/profile.jpg" 
            alt="Ily Coulibaly Profile Picture" 
            className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl"
            data-testid="profile-picture"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          Ily Coulibaly
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-3 text-primary" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          Data Analyst & AI Enthusiast
        </p>
        <p className="text-base font-medium text-gray-300 mb-3" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          B.S. Mathematics | M.S. Business Analytics
        </p>
        <p className="text-sm font-medium text-primary mb-4 flex items-center justify-center" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          <a 
            href="https://www.google.com/maps/place/Boston,+MA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors duration-300"
            data-testid="location-link"
          >
            <MapPin className="w-3 h-3 mr-1" />
            Boston, MA
          </a>
        </p>
        <p className="text-lg font-semibold text-primary mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          Transforming Data into Business Insights
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-linkedin"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300 group relative"
          >
            <SiLinkedin className="w-6 h-6" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
              LinkedIn
            </span>
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-github"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300 group relative"
          >
            <SiGithub className="w-6 h-6" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
              GitHub
            </span>
          </a>
          <a 
            href={SOCIAL_LINKS.tableau} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-tableau"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300 group relative"
          >
            <SiTableau className="w-6 h-6" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
              Tableau Public
            </span>
          </a>
          <a 
            href="Resume_Ily_Coulibaly_Data_Analyst.pdf" 
            download 
            data-testid="social-resume"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300 group relative"
          >
            <FileText className="w-6 h-6" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
              View Full Resume (PDF Download)
            </span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 scroll-indicator">
        <a 
          href="#about" 
          data-testid="scroll-to-about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
