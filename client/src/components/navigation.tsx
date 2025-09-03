import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Universe" },
    { href: "#projects", label: "Projects" },
    { href: "#articles", label: "Articles" },
    { href: "#certificates", label: "Certificates" },
    { href: "#kyn", label: "KYN" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
