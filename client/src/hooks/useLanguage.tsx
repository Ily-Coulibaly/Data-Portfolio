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
    'nav.experience': 'Experience',
    'nav.articles': 'Writings',
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
    'articles.title': 'Writings',
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
    'footer.builtWith': 'Built with React, TypeScript, and Tailwind CSS',
    
    // Hero Section Details
    'hero.education': 'B.S. Mathematics | M.S. Business Analytics',
    'hero.location': 'Boston, MA',
    'hero.description': 'I leverage AI, Machine Learning, and advanced analytics to turn complex data into strategic business decisions. With 3 years of experience building predictive models, NLP solutions, and automated BI systems, I bridge the gap between data science and business impact.',
    'hero.experience': '3 years of experience',
    'hero.viewProjects': 'View My Projects',
    'hero.contactMe': 'Contact Me',
    'hero.resumeTooltip': 'View Full Resume (PDF Download)',
    
    // Skills Section Details
    'skills.technicalTitle': 'Technical & Professional Skills',
    'skills.expertLevel': 'Expert',
    'skills.advancedLevel': 'Advanced', 
    'skills.intermediateLevel': 'Intermediate',
    
    // Contact Section Details
    'contact.getInTouch': 'Get in Touch',
    'contact.reachOut': 'Feel free to reach out for collaboration, questions, or just to connect!',
    'contact.downloadCV': 'Download CV',
    'contact.yourEmail': 'Your Email',
    'contact.subject': 'Subject',
    'contact.letsConnect': 'Let\'s Connect',
    'contact.messageSentTitle': 'Message sent successfully!',
    'contact.messageSentDesc': 'Thank you for reaching out. I\'ll get back to you soon.',
    'contact.messageFailedTitle': 'Failed to send message',
    'contact.messageFailedDesc': 'Please try again later or contact me directly via email.',
    
    // Validation Messages
    'validation.emailInvalid': 'Please enter a valid email address',
    'validation.subjectRequired': 'Subject is required',
    'validation.messageMinLength': 'Message must be at least 10 characters long',
    
    // Hero Typing Titles
    'hero.title1': 'Data Analyst & AI Specialist',
    'hero.title2': 'Business Analyst',
    'hero.title3': 'Python & ML Engineer',
    'hero.title4': 'Statistician'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.certificates': 'Certifications',
    'nav.experience': 'Expérience',
    'nav.articles': 'Écrits',
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
    'articles.title': 'Écrits',
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
    'footer.builtWith': 'Construit avec React, TypeScript et Tailwind CSS',
    
    // Hero Section Details
    'hero.education': 'B.S. Mathématiques | M.S. Analytique d\'Affaires',
    'hero.location': 'Boston, MA',
    'hero.description': 'J\'utilise l\'IA, le Machine Learning et l\'analytique avancée pour transformer des données complexes en décisions stratégiques. Avec 3 ans d\'expérience en modèles prédictifs, solutions NLP et systèmes BI automatisés, je fais le lien entre la science des données et l\'impact business.',
    'hero.experience': '3 ans d\'expérience',
    'hero.viewProjects': 'Voir Mes Projets',
    'hero.contactMe': 'Me Contacter',
    'hero.resumeTooltip': 'Voir CV Complet (Téléchargement PDF)',
    
    // Skills Section Details
    'skills.technicalTitle': 'Compétences Techniques et Professionnelles',
    'skills.expertLevel': 'Expert',
    'skills.advancedLevel': 'Avancé',
    'skills.intermediateLevel': 'Intermédiaire',
    
    // Contact Section Details
    'contact.getInTouch': 'Entrer en Contact',
    'contact.reachOut': 'N\'hésitez pas à me contacter pour une collaboration, des questions, ou simplement pour échanger !',
    'contact.downloadCV': 'Télécharger CV',
    'contact.yourEmail': 'Votre Courriel',
    'contact.subject': 'Sujet',
    'contact.letsConnect': 'Connectons-nous',
    'contact.messageSentTitle': 'Message envoyé avec succès !',
    'contact.messageSentDesc': 'Merci de m\'avoir contacté. Je vous répondrai bientôt.',
    'contact.messageFailedTitle': 'Échec de l\'envoi du message',
    'contact.messageFailedDesc': 'Veuillez réessayer plus tard ou me contacter directement par courriel.',
    
    // Validation Messages
    'validation.emailInvalid': 'Veuillez entrer une adresse courriel valide',
    'validation.subjectRequired': 'Le sujet est requis',
    'validation.messageMinLength': 'Le message doit contenir au moins 10 caractères',
    
    // Hero Typing Titles
    'hero.title1': 'Analyste de Données et Spécialiste IA',
    'hero.title2': 'Analyste d\'Affaires',
    'hero.title3': 'Ingénieur Python et ML',
    'hero.title4': 'Statisticien'
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