import { Download, Mail, ChevronDown } from "lucide-react";
import { SiLinkedin, SiGithub, SiTableau, SiMedium } from "react-icons/si";
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
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ily Coulibaly
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Data Analyst & AI Enthusiast
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transforming complex data into actionable insights through advanced analytics, machine learning, and strategic decision-making
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
            href={SOCIAL_LINKS.medium} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="social-medium"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300"
          >
            <SiMedium className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            data-testid="social-email"
            className="p-3 bg-card rounded-full hover:bg-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
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
