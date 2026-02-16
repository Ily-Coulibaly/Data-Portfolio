import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface ExperienceItem {
  id: number;
  role: string;
  roleFr: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  bulletsFr: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Analyst",
    roleFr: "Analyste de Données",
    company: "Babson College",
    location: "Wellesley, MA",
    dates: "2024 – Present",
    bullets: [
      "Analyzed institutional datasets using Python, R, and SQL to support strategic decision-making across academic and operational teams",
      "Built automated reporting dashboards in Tableau and Power BI, reducing manual reporting time and improving data accessibility",
      "Collaborated with cross-functional stakeholders to translate complex data findings into actionable business recommendations",
    ],
    bulletsFr: [
      "Analysé des ensembles de données institutionnelles avec Python, R et SQL pour appuyer la prise de décision stratégique",
      "Créé des tableaux de bord automatisés dans Tableau et Power BI, réduisant le temps de reporting manuel",
      "Collaboré avec des parties prenantes interfonctionnelles pour traduire des résultats complexes en recommandations d'affaires",
    ],
  },
  {
    id: 2,
    role: "Technology Consulting Intern",
    roleFr: "Stagiaire en Consultation Technologique",
    company: "Deloitte",
    location: "Boston, MA",
    dates: "Summer 2024",
    bullets: [
      "Supported client-facing analytics projects using Python and SQL to identify operational inefficiencies and revenue opportunities",
      "Developed data-driven presentations and strategy decks for Fortune 500 clients in collaboration with senior consultants",
      "Gained exposure to enterprise data systems, ETL pipelines, and client engagement methodologies",
    ],
    bulletsFr: [
      "Soutenu des projets d'analytique client avec Python et SQL pour identifier des inefficacités opérationnelles",
      "Développé des présentations et des plans stratégiques basés sur les données pour des clients Fortune 500",
      "Acquis une exposition aux systèmes de données d'entreprise, aux pipelines ETL et aux méthodologies d'engagement client",
    ],
  },
  {
    id: 3,
    role: "Business Analyst Intern",
    roleFr: "Stagiaire Analyste d'Affaires",
    company: "KYN",
    location: "Boston, MA",
    dates: "2023 – 2024",
    bullets: [
      "Led market research and competitive analysis to inform product strategy for a health-tech startup",
      "Designed and analyzed surveys and user data to drive product-market fit decisions using Excel and Python",
      "Presented data-backed insights to founding team, contributing to pitch deck development and investor relations",
    ],
    bulletsFr: [
      "Dirigé des recherches de marché et analyses concurrentielles pour orienter la stratégie produit d'une startup santé-tech",
      "Conçu et analysé des sondages et données utilisateurs pour guider les décisions d'adéquation produit-marché",
      "Présenté des insights basés sur les données à l'équipe fondatrice, contribuant au développement du pitch deck",
    ],
  },
  {
    id: 4,
    role: "Actuarial Science Intern",
    roleFr: "Stagiaire en Science Actuarielle",
    company: "NSIA Group",
    location: "Abidjan, Côte d'Ivoire",
    dates: "Summer 2023",
    bullets: [
      "Assisted in actuarial modeling and statistical analysis of insurance risk portfolios using Excel and SAS",
      "Processed and cleaned large datasets to support pricing models and financial forecasting",
    ],
    bulletsFr: [
      "Assisté dans la modélisation actuarielle et l'analyse statistique de portefeuilles de risques d'assurance",
      "Traité et nettoyé de grands ensembles de données pour appuyer les modèles de tarification et les prévisions financières",
    ],
  },
];

const ExperienceSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          {isEn ? "Experience" : "Expérience"}
        </h2>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="relative pl-12 sm:pl-16">
                <div className="absolute left-1.5 sm:left-3.5 top-1 w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-primary flex items-center justify-center z-10">
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="bg-card rounded-lg p-5 sm:p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 leading-tight">
                    {isEn ? exp.role : exp.roleFr}
                  </h3>
                  <p className="text-primary font-medium text-sm sm:text-base mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.dates}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {(isEn ? exp.bullets : exp.bulletsFr.length > 0 ? exp.bulletsFr : exp.bullets).map(
                      (bullet, idx) => (
                        <li
                          key={idx}
                          className="text-sm sm:text-base text-muted-foreground flex items-start gap-2"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#A5A584" }}
                          />
                          {bullet}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center scroll-indicator">
          <a
            href="#projects"
            data-testid="scroll-to-projects"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
