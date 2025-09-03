import { useState } from "react";
import { ChevronDown, Award, Star } from "lucide-react";
import { CERTIFICATES } from "@/lib/constants";

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("academic");

  const filteredCertificates = CERTIFICATES.filter(cert => 
    activeCategory === "academic" ? cert.type === "achievement" : cert.type === "certification"
  );

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Certificates & Achievements</h2>
        
        {/* Categories */}
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={() => setActiveCategory("academic")}
            data-testid="category-academic"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === "academic" 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card text-card-foreground hover:bg-primary/20'
            }`}
          >
            Academic Excellence
          </button>
          <button 
            onClick={() => setActiveCategory("professional")}
            data-testid="category-professional"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === "professional" 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card text-card-foreground hover:bg-primary/20'
            }`}
          >
            Professional Certifications
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCertificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="bg-card rounded-lg p-8 shadow-lg"
              data-testid={`certificate-${certificate.id}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                  certificate.type === "achievement" ? 'bg-accent' : 'bg-primary'
                }`}>
                  {certificate.type === "achievement" ? (
                    <Star className="w-8 h-8 text-accent-foreground" />
                  ) : (
                    <Award className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{certificate.title}</h3>
                  <p className="text-muted-foreground">{certificate.issuer} • {certificate.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{certificate.description}</p>
              {certificate.type === "certification" && (
                <button 
                  data-testid={`view-certificate-${certificate.id}`}
                  className="px-6 py-2 border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Certificate
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 text-center scroll-indicator">
          <a 
            href="#kyn" 
            data-testid="scroll-to-kyn"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
