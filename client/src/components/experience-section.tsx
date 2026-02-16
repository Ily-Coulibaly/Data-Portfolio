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
  techStack: string;
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
      "Built AI-driven analytics tracking frameworks and performance dashboards leveraging predictive modeling to monitor funnel behavior, customer acquisition efficiency, and revenue performance",
      "Performed comprehensive competitive intelligence analysis evaluating 5+ market competitors; developed strategic positioning framework and differentiation strategy",
    ],
    bulletsFr: [
      "Dirigé la transformation complète du modèle d'affaires, restructurant les revenus de 80% coaching actif vers 70% revenus passifs; développé une feuille de route stratégique sur 3 ans",
      "Optimisé les processus organisationnels en diagnostiquant les problèmes de conversion; conçu un cadre de parcours client projeté pour doubler les taux de conversion",
      "Construit des cadres de suivi analytique pilotés par l'IA et des tableaux de bord de performance utilisant la modélisation prédictive pour surveiller le comportement de l'entonnoir et l'efficacité d'acquisition",
      "Réalisé une analyse concurrentielle complète évaluant 5+ compétiteurs; développé un cadre de positionnement stratégique",
    ],
    techStack: "Python, SQL, Tableau, Predictive Modeling, Funnel Analytics",
  },
  {
    id: 2,
    role: "Founder & AI Solutions Lead",
    roleFr: "Fondateur & Responsable Solutions IA",
    company: "KYN LLC",
    location: "Boston, MA",
    dates: "Jan 2023 – Present",
    bullets: [
      "Founded and scaled a data-driven beauty and consumer brand integrating analytics across operations, marketing, and customer intelligence",
      "Built AI-powered product recommendation systems and customer insight pipelines",
      "Designed marketing analytics dashboards tracking acquisition, retention, and campaign ROI",
      "Led experimentation initiatives including A/B testing and funnel optimization",
    ],
    bulletsFr: [
      "Fondé et développé une marque de beauté axée sur les données, intégrant l'analytique dans les opérations, le marketing et l'intelligence client",
      "Construit des systèmes de recommandation de produits alimentés par l'IA et des pipelines d'insights clients",
      "Conçu des tableaux de bord d'analytique marketing suivant l'acquisition, la rétention et le ROI des campagnes",
      "Dirigé des initiatives d'expérimentation incluant les tests A/B et l'optimisation de l'entonnoir",
    ],
    techStack: "Python, SQL, Shopify API, Marketing Analytics, NLP, Recommendation Systems",
  },
  {
    id: 3,
    role: "Insights & Data Analyst",
    roleFr: "Analyste de Données & Insights",
    company: "Entrepreneurial Solutions Partners (ESP)",
    location: "Abidjan, Côte d'Ivoire",
    dates: "Jan 2024 – Aug 2024",
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
    techStack: "Python, SQL, Power BI, NLP, TF-IDF, Vector Embeddings, ETL",
  },
  {
    id: 4,
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
    techStack: "Excel, SQL, Market Research, Strategic Analysis, Data Visualization",
  },
  {
    id: 5,
    role: "Data & Actuarial Intern",
    roleFr: "Stagiaire Données & Actuariat",
    company: "NSIA Group",
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
    techStack: "SQL, Excel, Time-Series Forecasting, Actuarial Modeling",
  },
  {
    id: 6,
    role: "Mathematics Tutor & Analytics Developer",
    roleFr: "Tuteur en Mathématiques & Développeur Analytique",
    company: "International University of Grand-Bassam (IUGB)",
    location: "Grand-Bassam, Côte d'Ivoire",
    dates: "Jan 2020 – May 2022",
    bullets: [
      "Delivered tutoring in Statistics, Probability, and Linear Algebra to 100+ undergraduate students",
      "Built student performance analytics platform using Python and SQL to track academic outcomes",
      "Developed predictive models identifying at-risk students early using assignment and attendance data",
      "Improved student performance outcomes through data-driven intervention strategies",
    ],
    bulletsFr: [
      "Dispensé du tutorat en Statistiques, Probabilités et Algèbre Linéaire à 100+ étudiants de premier cycle",
      "Construit une plateforme d'analytique de performance étudiante avec Python et SQL pour suivre les résultats académiques",
      "Développé des modèles prédictifs identifiant les étudiants à risque à partir des données de présence et de devoirs",
      "Amélioré les résultats de performance étudiante grâce à des stratégies d'intervention basées sur les données",
    ],
    techStack: "Python, SQL, Predictive Modeling, Data Visualization",
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
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.split(", ").map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
