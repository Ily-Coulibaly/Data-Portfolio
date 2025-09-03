import { Download, FileText, ChevronDown } from "lucide-react";
import { SiLinkedin, SiGithub, SiTableau } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8">
          <img 
            src="/profile.jpg" 
            alt="Ily Coulibaly Profile Picture" 
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl"
            data-testid="profile-picture"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Ily Coulibaly
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          Data Analyst & AI Enthusiast
        </p>
        <p className="text-lg text-muted-foreground mb-2">
          B.S. Mathematics | M.S. Business Analytics
        </p>
        <p className="text-base text-muted-foreground mb-2">
          📍 Boston, MA
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transforming Data into Business Insights
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-linkedin"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-github"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a 
            href={SOCIAL_LINKS.tableau} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-tableau"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300"
          >
            <SiTableau className="w-6 h-6" />
          </a>
          <a 
            href="Resume_Ily_Coulibaly_Data_Analyst.pdf" 
            download 
            data-testid="social-resume"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300 group relative"
            title="View Full Resume (PDF Download)"
          >
            <FileText className="w-6 h-6" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              View Full Resume (PDF Download)
            </span>
          </a>
        </div>
        
        {/* Resume Download Button */}
        <div className="mb-12">
          <a 
            href="Resume_Ily_Coulibaly_Data_Analyst.pdf" 
            download 
            data-testid="download-resume"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
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
