import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => item.href.substring(1)); // Remove # from href
    
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

  const navItems = [
    { href: "#home", label: t('nav.home') },
    { href: "#skills", label: t('nav.skills') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#certificates", label: t('nav.certificates') },

    { href: "#kyn", label: "KYN" },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Language Toggle - Far Left */}
          <div className="flex items-center">
            <LanguageToggle />
          </div>
          
          {/* Navigation Links - Center */}
          <div className="flex justify-center space-x-8 flex-1">
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
          
          {/* Theme Toggle - Far Right */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
