import { SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-6">
          &copy; 2024 Ily Coulibaly. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="footer-github"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href={SOCIAL_LINKS.tableau} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="footer-tableau"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Tableau
          </a>
          <a 
            href={SOCIAL_LINKS.medium} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="footer-medium"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Medium
          </a>
          <a 
            href={SOCIAL_LINKS.kyn} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="footer-kyn"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            KYN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
