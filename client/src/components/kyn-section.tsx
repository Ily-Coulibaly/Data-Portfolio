import { ChevronDown, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const KYNSection = () => {
  return (
    <section id="kyn" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">KYN</h2>
        
        {/* KYN Logo */}
        <div className="mb-12">
          <div className="w-32 h-32 bg-card rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-4xl font-bold text-primary">KYN</span>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I founded KYN to reimagine beauty through sustainability, science, and purpose. Our brand transforms discarded 
            cocoa byproducts into effective skincare solutions—designed especially for melanin-rich skin—while advancing 
            circular economy practices.
          </p>
          <p>
            From eco-conscious moisturizers to gentle exfoliants, each product is ethically sourced, dermatologist-approved, 
            and free of harmful chemicals. Our dual-impact model supports local women-led cooperatives and helps farmers 
            fight agricultural waste by converting cocoa husks into organic fertilizers.
          </p>
          <p>
            More than a beauty brand, <strong className="text-primary">KYN</strong> is a movement—championing clean beauty, skin confidence, and regenerative business.
          </p>
        </div>
        
        {/* KYN Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a 
            href={SOCIAL_LINKS.kyn} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="kyn-website"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Visit KYN Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="kyn-linkedin"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
          >
            LinkedIn
          </a>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            data-testid="kyn-email"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
          >
            Email
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 scroll-indicator">
          <a 
            href="#contact" 
            data-testid="scroll-to-contact"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default KYNSection;
