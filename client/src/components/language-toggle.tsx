import { useLanguage, Language } from '@/hooks/useLanguage';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <button
        onClick={() => toggleLanguage('en')}
        className={`transition-all duration-300 ${
          language === 'en' 
            ? 'text-[#A5A584] font-semibold glow-text' 
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to English"
        data-testid="language-en"
      >
        EN
      </button>
      <span className="text-foreground/50">|</span>
      <button
        onClick={() => toggleLanguage('fr')}
        className={`transition-all duration-300 ${
          language === 'fr' 
            ? 'text-[#A5A584] font-semibold glow-text' 
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to French"
        data-testid="language-fr"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;