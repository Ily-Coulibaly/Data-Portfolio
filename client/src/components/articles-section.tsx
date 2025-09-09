import { ChevronDown } from "lucide-react";
import { ARTICLES } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";

const ArticlesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="articles" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('articles.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div 
              key={article.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`article-card-${article.id}`}
            >
              {/* Article thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">{article.icon}</div>
                  <div className="font-semibold">{article.title}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid={`article-link-${article.id}`}
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
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
