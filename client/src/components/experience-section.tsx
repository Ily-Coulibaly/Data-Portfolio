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
    role: "Strategy & Analytics Analyst",
    roleFr: "Analyste Stratégie & Analytique",
    company: "Mac Unlimited INC.",
    location: "Oreland, PA (Remote)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Led complete business model transformation redesigning revenue structure from 80% active coaching to 70% passive revenue; developed 3-year strategic roadmap through capability optimization and process redesign",
      "Optimized organizational processes diagnosing conversion funnel issues; designed improved customer journey framework projected to double conversion rates from 10–15% to 20–30%",
      "Performed comprehensive competitive intelligence analysis evaluating 5+ market competitors; developed strategic positioning framework and differentiation strategy",
      "Built analytics tracking frameworks and performance dashboards to monitor funnel behavior, customer acquisition efficiency, and revenue performance",
    ],
    bulletsFr: [
      "Dirigé la transformation complète du modèle d'affaires, restructurant les revenus de 80% coaching actif vers 70% revenus passifs; développé une feuille de route stratégique sur 3 ans",
      "Optimisé les processus organisationnels en diagnostiquant les problèmes de conversion; conçu un cadre de parcours client projeté pour doubler les taux de conversion",
      "Réalisé une analyse concurrentielle complète évaluant 5+ compétiteurs; développé un cadre de positionnement stratégique",
      "Construit des cadres de suivi analytique et des tableaux de bord de performance pour surveiller le comportement de l'entonnoir et l'efficacité d'acquisition",
    ],
  },
  {
    id: 2,
    role: "Insights and Data Analyst",
    roleFr: "Analyste de Données et Insights",
    company: "Entrepreneurial Solutions Partners (ESP)",
    location: "Abidjan, Côte d'Ivoire",
    dates: "Dec 2023 – Aug 2024",
    bullets: [
      "Built scalable BI infrastructure and automated ETL pipelines processing 10K+ daily records across 10-country operation; created 10+ executive dashboards reducing manual reporting by 50%",
      "Led financial forecasting initiative using predictive analytics and time-series modeling; developed strategic business case securing $500K USADF grant supporting 300+ agricultural entrepreneurs",
      "Built enterprise AI search solution using NLP techniques (TF-IDF, vector embeddings) indexing 1,000+ organizational documents, reducing information retrieval time by 80%",
    ],
    bulletsFr: [
      "Construit une infrastructure BI évolutive et des pipelines ETL automatisés traitant 10K+ enregistrements quotidiens dans 10 pays; créé 10+ tableaux de bord réduisant le reporting manuel de 50%",
      "Dirigé une initiative de prévision financière utilisant l'analytique prédictive et la modélisation de séries temporelles; obtenu une subvention USADF de 500K$ soutenant 300+ entrepreneurs agricoles",
      "Construit une solution de recherche IA d'entreprise utilisant des techniques NLP indexant 1 000+ documents, réduisant le temps de recherche de 80%",
    ],
  },
  {
    id: 3,
    role: "Business Development Analyst",
    roleFr: "Analyste Développement d'Affaires",
    company: "Entrepreneurial Solutions Partners (ESP)",
    location: "Abidjan, Côte d'Ivoire",
    dates: "Jan 2023 – Dec 2023",
    bullets: [
      "Led strategic transformation partnering with government stakeholders to design Equatorial Guinea's 5-year national tourism strategy; presented recommendations to 40+ senior officials",
      "Performed business diagnostics and program redesign for entrepreneurship training initiative serving 450+ participants; produced strategic recommendations informing program Version 2.0",
      "Recruited and evaluated investment-ready businesses for €1.4M Orange Corners venture program; developed assessment frameworks and delivered strategic recommendations",
    ],
    bulletsFr: [
      "Dirigé une transformation stratégique en partenariat avec des parties prenantes gouvernementales pour concevoir la stratégie nationale de tourisme sur 5 ans de la Guinée Équatoriale",
      "Réalisé des diagnostics d'entreprise et la refonte de programmes de formation à l'entrepreneuriat pour 450+ participants",
      "Recruté et évalué des entreprises prêtes pour l'investissement dans le programme Orange Corners de 1,4M€; développé des cadres d'évaluation",
    ],
  },
  {
    id: 4,
    role: "Data and Actuary Intern",
    roleFr: "Stagiaire Données et Actuariat",
    company: "NSIA Group (KALA Assurance)",
    location: "Abidjan, Côte d'Ivoire",
    dates: "Jun 2022 – Dec 2022",
    bullets: [
      "Created actuarial pricing models analyzing 500+ insurance policies using SQL and time-series forecasting; enhanced pricing accuracy by 25% through predictive analytics and risk segmentation",
      "Automated monthly reporting processes reducing manual compilation time by 35% and improving report accuracy",
    ],
    bulletsFr: [
      "Créé des modèles de tarification actuarielle analysant 500+ polices d'assurance avec SQL et prévision de séries temporelles; amélioré la précision de tarification de 25%",
      "Automatisé les processus de reporting mensuel réduisant le temps de compilation manuelle de 35%",
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
