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
    'nav.education': 'Education',
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
    'projects.keyFindings': 'Key Findings',
    'projects.researchQuestions': 'Research Questions',
    'projects.visualizationTypes': 'Visualization Types',
    'projects.analysisApproach': 'Analysis Approach',
    'projects.businessImpact': 'Business Impact',
    'projects.conclusion': 'Conclusion',
    'projects.viewProject': 'View Project',
    'projects.viewReport': 'View Full Report',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewTableau': 'View in Tableau Public',
    'projects.livePlatform': 'Live Platform',
    'certificates.seeProof': 'See',
    
    // Project Descriptions
    'project.bikeshare.title': 'Bike Share User Behavior Analysis',
    'project.bikeshare.description': 'Data analysis of two years of hourly bike share usage patterns, delivering actionable business insights into customer behavior segmentation, seasonal demand forecasting, and weather impact analytics to optimize operational efficiency and drive strategic decision-making.',
    
    'project.wayfair.title': 'Wayfair \'Ships in Time\' Campaign Analysis',
    'project.wayfair.description': 'Comprehensive analysis of holiday season guarantee campaign impact on customer purchasing behavior, revenue optimization, and customer segmentation across different visitor types during the 2016 Christmas shopping period.',
    
    // Certificates Section
    'certificates.title': 'Certificates & Achievements',
    'certificates.subtitle': 'Industry-recognized certifications demonstrating expertise and commitment to continuous learning',
    'certificates.professional': 'Professional Certifications',
    'certificates.academic': 'Academic Excellence',
    'certificates.entrepreneurship': 'Leadership & Entrepreneurship',
    
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
    'hero.description': 'I leverage AI, Machine Learning, and advanced analytics to turn complex data into strategic business decisions. With 3.5 years of experience building predictive models, NLP solutions, and automated BI systems, I bridge the gap between data science and business impact.',
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
    'nav.experience': 'Parcours',
    'nav.education': 'Formation',
    'nav.articles': 'Publications',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Analyste de Données & Expert BI',
    'hero.subtitle': 'Je transforme la donnée brute en leviers de décision stratégique et en performance opérationnelle.',
    'hero.cta': 'Découvrir mes projets',
    'hero.contact': 'Me contacter',
    
    // Skills Section
    'skills.title': 'Expertise Technique',
    'skills.subtitle': 'Un socle de compétences couvrant l\'analyse de données, la visualisation et l\'intelligence décisionnelle',
    'skills.programming': 'Programmation',
    'skills.visualization': 'Visualisation',
    'skills.ml': 'Machine Learning',
    'skills.ai': 'Intelligence Artificielle',
    'skills.business': 'Business',
    
    // Projects Section
    'projects.title': 'Projets Phares',
    'projects.readMore': 'En savoir plus',
    'projects.keyFindings': 'Résultats Clés',
    'projects.researchQuestions': 'Problématiques',
    'projects.visualizationTypes': 'Visualisations',
    'projects.analysisApproach': 'Méthodologie',
    'projects.businessImpact': 'Impact Business',
    'projects.conclusion': 'Conclusion',
    'projects.viewProject': 'Voir le projet',
    'projects.viewReport': 'Voir le rapport complet',
    'projects.viewGithub': 'Voir sur GitHub',
    'projects.viewTableau': 'Voir sur Tableau Public',
    'projects.livePlatform': 'Plateforme Live',
    'certificates.seeProof': 'Voir',
    
    // Project Descriptions
    'project.bikeshare.title': 'Analyse Comportementale des Utilisateurs de Vélos en Libre-Service',
    'project.bikeshare.description': 'Étude approfondie de deux années de données horaires d\'utilisation de vélos partagés, avec segmentation comportementale, prévision de la demande saisonnière et analyse de l\'impact météo pour optimiser les opérations et éclairer la prise de décision.',
    
    'project.wayfair.title': 'Analyse de la Campagne « Ships in Time » de Wayfair',
    'project.wayfair.description': 'Étude complète de l\'impact de la campagne de garantie de livraison sur le comportement d\'achat, l\'optimisation du chiffre d\'affaires et la segmentation client durant la période des fêtes 2016.',
    
    // Certificates Section
    'certificates.title': 'Certifications & Distinctions',
    'certificates.subtitle': 'Certifications reconnues et distinctions témoignant d\'un engagement continu envers l\'excellence',
    'certificates.professional': 'Certifications Professionnelles',
    'certificates.academic': 'Excellence Académique',
    'certificates.entrepreneurship': 'Leadership & Entrepreneuriat',
    
    // Articles Section
    'articles.title': 'Publications',
    'articles.subtitle': 'Réflexions et analyses sur la data, l\'IA et l\'intelligence décisionnelle',
    'articles.readTime': 'min de lecture',
    
    // Contact Section
    'contact.title': 'Collaborons',
    'contact.subtitle': 'Envie de transformer vos données en décisions éclairées ? Échangeons sur la manière dont je peux vous accompagner.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Développé avec React, TypeScript et Tailwind CSS',
    
    // Hero Section Details
    'hero.education': 'B.S. Mathématiques | M.S. Business Analytics',
    'hero.location': 'Boston, MA',
    'hero.description': 'Je m\'appuie sur l\'IA, le Machine Learning et l\'analytique avancée pour transformer des données complexes en décisions stratégiques. Fort de 3,5 ans d\'expérience en modélisation prédictive, NLP et systèmes BI automatisés, je fais le pont entre la data science et l\'impact business.',
    'hero.experience': '3,5 ans d\'expérience',
    'hero.viewProjects': 'Voir mes projets',
    'hero.contactMe': 'Me contacter',
    'hero.resumeTooltip': 'Télécharger mon CV (PDF)',
    
    // Skills Section Details
    'skills.technicalTitle': 'Compétences Techniques & Professionnelles',
    'skills.expertLevel': 'Expert',
    'skills.advancedLevel': 'Avancé',
    'skills.intermediateLevel': 'Intermédiaire',
    
    // Contact Section Details
    'contact.getInTouch': 'Échangeons',
    'contact.reachOut': 'N\'hésitez pas à me contacter pour une collaboration, une question, ou simplement pour échanger.',
    'contact.downloadCV': 'Télécharger le CV',
    'contact.yourEmail': 'Votre email',
    'contact.subject': 'Objet',
    'contact.letsConnect': 'Envoyer',
    'contact.messageSentTitle': 'Message envoyé !',
    'contact.messageSentDesc': 'Merci pour votre message. Je reviens vers vous rapidement.',
    'contact.messageFailedTitle': 'Erreur d\'envoi',
    'contact.messageFailedDesc': 'Veuillez réessayer ou me contacter directement par email.',
    
    // Validation Messages
    'validation.emailInvalid': 'Veuillez saisir une adresse email valide',
    'validation.subjectRequired': 'L\'objet est requis',
    'validation.messageMinLength': 'Le message doit contenir au moins 10 caractères',
    
    // Hero Typing Titles
    'hero.title1': 'Analyste Data & IA',
    'hero.title2': 'Business Analyst',
    'hero.title3': 'Ingénieur Python & ML',
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