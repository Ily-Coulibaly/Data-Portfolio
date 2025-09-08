import { FileText, ChevronDown, MapPin, ArrowRight, FolderOpen } from "lucide-react";
import { SiLinkedin, SiGithub, SiTableau } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const HeroTypingBanner = () => {
  const { t } = useLanguage();
  const titles = [
    t('hero.title1'),
    t('hero.title2'),
    t('hero.title3'),
    t('hero.title4')
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentTitle) {
      // Finished typing, wait 2 seconds before deleting
      setIsTypingComplete(true);
      timeout = setTimeout(() => {
        setIsTypingComplete(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next title
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    } else {
      // Continue typing or deleting
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  return (
    <div 
      className="flex items-center justify-center h-16"
      style={{ minHeight: '64px' }}
    >
      <div className="text-center">
        <span 
          className="text-2xl md:text-3xl font-semibold typing-text text-primary"
          style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
        >
          {currentText}
          <span 
            className="typing-cursor"
            style={{
              borderRight: '3px solid hsl(var(--primary))',
              animation: 'blink 1s infinite'
            }}
          >
            &nbsp;
          </span>
        </span>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();
  
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
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          Ily Coulibaly
        </h1>
        <div className="mb-3">
          <HeroTypingBanner />
        </div>
        <p className="text-base font-medium text-white mb-3" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          {t('hero.education')}
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
            {t('hero.location')}
          </a>
        </p>
        <p className="text-base text-primary leading-relaxed mb-10 max-w-3xl mx-auto" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
          {t('hero.description')}
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
            <SiLinkedin className="w-6 h-6 text-[#A5A584]" />
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
            <SiGithub className="w-6 h-6 text-[#A5A584]" />
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
            <SiTableau className="w-6 h-6 text-[#A5A584]" />
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
            <FileText className="w-6 h-6 text-[#A5A584]" />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
              {t('hero.resumeTooltip')}
            </span>
          </a>
        </div>
        
        {/* Action Buttons */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              data-testid="view-projects-button"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-primary/30 relative overflow-hidden min-w-[180px] justify-center"
              style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
            >
              {/* Subtle background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <FolderOpen className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
              <span className="relative z-10">{t('hero.viewProjects')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-lg font-semibold text-center min-w-[180px]"
              data-testid="contact-me-button"
              style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
            >
              {t('hero.contactMe')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 scroll-indicator">
        <a 
          href="#skills" 
          data-testid="scroll-to-skills"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
