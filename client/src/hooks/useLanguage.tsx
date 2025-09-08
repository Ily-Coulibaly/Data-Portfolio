import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Data Analyst & Business Intelligence Expert',
    'hero.subtitle': 'Transforming complex data into actionable insights that drive strategic business decisions and operational excellence.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // Skills Section
    'skills.title': 'Technical Expertise',
    'skills.subtitle': 'Comprehensive skill set spanning data analysis, visualization, and business intelligence',
    'skills.programming': 'Programming',
    'skills.visualization': 'Visualization',
    'skills.ml': 'Machine Learning',
    'skills.ai': 'Artificial Intelligence',
    'skills.business': 'Business',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.readMore': 'Read More',
    'projects.viewTableau': 'View in Tableau',
    'projects.keyFindings': 'Key Findings',
    'projects.researchQuestions': 'Research Questions',
    'projects.visualizationTypes': 'Visualization Types',
    'projects.analysisApproach': 'Analysis Approach',
    'projects.businessImpact': 'Business Impact',
    'projects.conclusion': 'Conclusion',
    'projects.viewProject': 'View Project',
    
    // Project Descriptions
    'project.bikeshare.title': 'Bike Share User Behavior Analysis',
    'project.bikeshare.description': 'Data analysis of two years of hourly bike share usage patterns, delivering actionable business insights into customer behavior segmentation, seasonal demand forecasting, and weather impact analytics to optimize operational efficiency and drive strategic decision-making.',
    
    'project.wayfair.title': 'Wayfair \'Ships in Time\' Campaign Analysis',
    'project.wayfair.description': 'Comprehensive analysis of holiday season guarantee campaign impact on customer purchasing behavior, revenue optimization, and customer segmentation across different visitor types during the 2016 Christmas shopping period.',
    
    // Certificates Section
    'certificates.title': 'Professional Certifications',
    'certificates.subtitle': 'Industry-recognized certifications demonstrating expertise and commitment to continuous learning',
    
    // Articles Section
    'articles.title': 'Latest Articles',
    'articles.subtitle': 'Insights and thought leadership on data analytics and business intelligence',
    'articles.readTime': 'min read',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to transform your data into actionable insights? Let\'s discuss how I can help drive your business forward.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React, TypeScript, and Tailwind CSS'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.certificates': 'Certifications',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Analyste de Données & Expert en Intelligence d\'Affaires',
    'hero.subtitle': 'Transformer des données complexes en insights exploitables qui orientent les décisions stratégiques et l\'excellence opérationnelle.',
    'hero.cta': 'Voir Mon Travail',
    'hero.contact': 'Me Contacter',
    
    // Skills Section
    'skills.title': 'Expertise Technique',
    'skills.subtitle': 'Ensemble complet de compétences couvrant l\'analyse de données, la visualisation et l\'intelligence d\'affaires',
    'skills.programming': 'Programmation',
    'skills.visualization': 'Visualisation',
    'skills.ml': 'Apprentissage Automatique',
    'skills.ai': 'Intelligence Artificielle',
    'skills.business': 'Affaires',
    
    // Projects Section
    'projects.title': 'Projets Phares',
    'projects.readMore': 'Lire Plus',
    'projects.viewTableau': 'Voir dans Tableau',
    'projects.keyFindings': 'Principales Découvertes',
    'projects.researchQuestions': 'Questions de Recherche',
    'projects.visualizationTypes': 'Types de Visualisation',
    'projects.analysisApproach': 'Approche d\'Analyse',
    'projects.businessImpact': 'Impact Commercial',
    'projects.conclusion': 'Conclusion',
    'projects.viewProject': 'Voir le Projet',
    
    // Project Descriptions
    'project.bikeshare.title': 'Analyse du Comportement des Utilisateurs de Vélos Partagés',
    'project.bikeshare.description': 'Analyse de données de deux années d\'utilisation horaire de vélos partagés, fournissant des insights commerciaux exploitables sur la segmentation comportementale des clients, la prévision de demande saisonnière et l\'analyse d\'impact météorologique pour optimiser l\'efficacité opérationnelle et orienter la prise de décision stratégique.',
    
    'project.wayfair.title': 'Analyse de Campagne Wayfair \'Ships in Time\'',
    'project.wayfair.description': 'Analyse complète de l\'impact de la campagne de garantie des fêtes sur le comportement d\'achat des clients, l\'optimisation des revenus et la segmentation des clients à travers différents types de visiteurs pendant la période de magasinage de Noël 2016.',
    
    // Certificates Section
    'certificates.title': 'Certifications Professionnelles',
    'certificates.subtitle': 'Certifications reconnues par l\'industrie démontrant l\'expertise et l\'engagement envers l\'apprentissage continu',
    
    // Articles Section
    'articles.title': 'Derniers Articles',
    'articles.subtitle': 'Insights et leadership éclairé sur l\'analyse de données et l\'intelligence d\'affaires',
    'articles.readTime': 'min de lecture',
    
    // Contact Section
    'contact.title': 'Travaillons Ensemble',
    'contact.subtitle': 'Prêt à transformer vos données en insights exploitables ? Discutons de la façon dont je peux aider à faire avancer votre entreprise.',
    'contact.name': 'Nom',
    'contact.email': 'Courriel',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Construit avec React, TypeScript et Tailwind CSS'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}