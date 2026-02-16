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

  const navItems = [
    { href: "#home", label: t('nav.home') },
    { href: "#skills", label: t('nav.skills') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#experience", label: t('nav.experience') },
    { href: "#education", label: t('nav.education') },
    { href: "#certificates", label: t('nav.certificates') },
    { href: "#contact", label: t('nav.contact') },
  ];

  useEffect(() => {
    const sectionIds = ["home", "skills", "projects", "experience", "education", "certificates", "contact"];
    const navHeight = 80;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const scrollY = window.scrollY + navHeight + 40;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (window.scrollY + winHeight >= docHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          if (scrollY >= top) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="md:hidden fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40" onClick={handleNavClick}>
          <div
            className="mx-4 mt-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  className={`mx-2 my-0.5 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#A5A584] font-semibold bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
