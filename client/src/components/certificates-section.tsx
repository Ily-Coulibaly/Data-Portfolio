import { useState } from "react";
import { ChevronDown, Award, Star, ExternalLink, X } from "lucide-react";
import { CERTIFICATES, SHOW_SCHOLARSHIPS } from "@/lib/constants";

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("academic");
  const [multiProofOpen, setMultiProofOpen] = useState<number | null>(null);

  const filteredCertificates = CERTIFICATES
    .filter(cert => cert.tab === activeCategory)
    .filter(cert => SHOW_SCHOLARSHIPS || !("isScholarship" in cert && cert.isScholarship))
    .sort((a, b) => {
      if (!a.year && !b.year) return 0;
      if (!a.year) return 1;
      if (!b.year) return -1;
      return b.year - a.year;
    });

  const handleProofClick = (cert: typeof CERTIFICATES[number]) => {
    if (cert.proofType === "link" && "proofUrl" in cert && cert.proofUrl) {
      window.open(cert.proofUrl, "_blank", "noopener,noreferrer");
    } else if (cert.proofType === "file" && "proofFiles" in cert && cert.proofFiles && cert.proofFiles.length > 0) {
      window.open(cert.proofFiles[0], "_blank", "noopener,noreferrer");
    } else if (cert.proofType === "multi") {
      setMultiProofOpen(cert.id);
    }
  };

  const hasProof = (cert: typeof CERTIFICATES[number]) => {
    if (cert.proofType === "none") return false;
    if (cert.proofType === "link" && "proofUrl" in cert && cert.proofUrl) return true;
    if (cert.proofType === "file" && "proofFiles" in cert && cert.proofFiles && cert.proofFiles.length > 0) return true;
    if (cert.proofType === "multi" && "proofLinks" in cert && cert.proofLinks && cert.proofLinks.length > 0) return true;
    return false;
  };

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Certificates & Achievements</h2>
        
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
                  certificate.tab === "academic" ? 'bg-accent' : 'bg-primary'
                }`}>
                  {certificate.tab === "academic" ? (
                    <Star className="w-8 h-8 text-accent-foreground" />
                  ) : (
                    <Award className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{certificate.title}</h3>
                  <p className="text-muted-foreground">{certificate.issuer} • {certificate.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{certificate.shortDescription}</p>

              {"subItems" in certificate && certificate.subItems && certificate.subItems.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {certificate.subItems.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span style={{ color: '#A5A584', fontWeight: 'bold' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {hasProof(certificate) && (
                <button
                  onClick={() => handleProofClick(certificate)}
                  data-testid={`proof-${certificate.id}`}
                  className="px-6 py-2 border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {"proofLabel" in certificate && certificate.proofLabel ? certificate.proofLabel : "See"}
                </button>
              )}
            </div>
          ))}
        </div>

        {multiProofOpen !== null && (() => {
          const cert = CERTIFICATES.find(c => c.id === multiProofOpen);
          if (!cert || cert.proofType !== "multi" || !("proofLinks" in cert) || !cert.proofLinks) return null;
          return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card rounded-2xl max-w-md w-full p-8 relative">
                <button
                  onClick={() => setMultiProofOpen(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">Proof & References</p>
                <div className="space-y-3">
                  {cert.proofLinks.map((proof, idx) => (
                    <a
                      key={idx}
                      href={proof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: '#A5A584' }} />
                      <span className="text-sm">{proof.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
        
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
