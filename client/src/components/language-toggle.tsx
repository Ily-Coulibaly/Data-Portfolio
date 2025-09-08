import { useLanguage, Language } from '@/hooks/useLanguage';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center rounded-lg border border-border bg-card overflow-hidden">
      <button
        onClick={() => toggleLanguage('en')}
        className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
          language === 'en' 
            ? 'bg-[#A5A584] text-black' 
            : 'text-foreground hover:bg-accent'
        }`}
        aria-label="Switch to English"
        data-testid="language-en"
      >
        EN
      </button>
      <div className="w-px h-6 bg-border"></div>
      <button
        onClick={() => toggleLanguage('fr')}
        className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
          language === 'fr' 
            ? 'bg-[#A5A584] text-black' 
            : 'text-foreground hover:bg-accent'
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