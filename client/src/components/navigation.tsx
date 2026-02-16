import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t('nav.home') },
    { href: "#skills", label: t('nav.skills') },
    { href: "#experience", label: t('nav.experience') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#certificates", label: t('nav.certificates') },
    { href: "#contact", label: t('nav.contact') },
  ];

  useEffect(() => {
    const sections = navItems.map(item => item.href.substring(1));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LanguageToggle />
          </div>
          
          <div className="hidden md:flex justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={`transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#A5A584] font-semibold glow-text'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-background/98 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-1.5 px-6 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                className={`w-full text-center py-3.5 text-lg font-medium rounded-xl transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#A5A584] font-semibold bg-card'
                    : 'text-foreground hover:text-primary hover:bg-card/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
