import { ChevronDown } from "lucide-react";
import { ARTICLES } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";

const ArticlesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="articles" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('articles.title')}</h2>
        
        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          {ARTICLES.map((article) => (
            <div 
              key={article.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`article-card-${article.id}`}
            >
              {/* Article thumbnail */}
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${article.backgroundImage}), linear-gradient(135deg, #7c3aed, #ec4899)`,
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-sm text-blue-200 mb-2">{article.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <div className="text-blue-100">{article.subtitle}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid={`article-link-${article.id}`}
                  className="inline-flex items-center gap-2 bg-[#A5A584] hover:bg-[#8a8a6b] text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 text-center scroll-indicator">
          <a 
            href="#certificates" 
            data-testid="scroll-to-certificates"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
