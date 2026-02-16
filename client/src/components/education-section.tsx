import { GraduationCap, MapPin, Calendar, Award, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

type CourseCategory = "all" | "ai_ml" | "programming" | "visualization" | "quantitative" | "finance";

interface Course {
  name: string;
  nameFr: string;
  category: CourseCategory[];
}

const COURSEWORK: Course[] = [
  { name: "AI for Business", nameFr: "IA pour les Affaires", category: ["ai_ml"] },
  { name: "Machine Learning for Business", nameFr: "Machine Learning pour les Affaires", category: ["ai_ml"] },
  { name: "Advanced Programming with Python & SQL", nameFr: "Programmation Avancée Python & SQL", category: ["programming"] },
  { name: "Storytelling & Data Visualization with Tableau", nameFr: "Storytelling & Visualisation de Données avec Tableau", category: ["visualization"] },
  { name: "Econometrics", nameFr: "Économétrie", category: ["quantitative"] },
  { name: "Investment Banking & Financial Modeling", nameFr: "Banque d'Investissement & Modélisation Financière", category: ["finance"] },
];

const CATEGORY_LABELS: Record<CourseCategory, { en: string; fr: string }> = {
  all: { en: "All", fr: "Tous" },
  ai_ml: { en: "AI & ML", fr: "IA & ML" },
  programming: { en: "Programming", fr: "Programmation" },
  visualization: { en: "Visualization", fr: "Visualisation" },
  quantitative: { en: "Quantitative", fr: "Quantitatif" },
  finance: { en: "Finance", fr: "Finance" },
};

const EducationSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [activeFilter, setActiveFilter] = useState<CourseCategory>("all");

  const filteredCourses = activeFilter === "all"
    ? COURSEWORK
    : COURSEWORK.filter((c) => c.category.includes(activeFilter));

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          {isEn ? "Education" : "Formation"}
        </h2>

        <div className="space-y-8">
          <div className="bg-card rounded-lg p-5 sm:p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                  {isEn ? "M.S. in Business Analytics" : "M.S. en Analytique d'Affaires"}
                </h3>
                <p className="text-primary font-medium text-sm sm:text-base mt-1">
                  Babson College, F.W. Olin Graduate School of Business
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Wellesley, MA
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Aug 2024 – May 2025
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                    <Award className="w-3 h-3" />
                    Cum Laude
                  </span>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                    {isEn ? "Grade: A" : "Note : A"}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                    {isEn ? "Relevant Coursework" : "Cours Pertinents"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(Object.keys(CATEGORY_LABELS) as CourseCategory[]).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all duration-200 ${
                          activeFilter === cat
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {isEn ? CATEGORY_LABELS[cat].en : CATEGORY_LABELS[cat].fr}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {filteredCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {isEn ? course.name : course.nameFr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#A5A584" }}
                    />
                    {isEn
                      ? "Lead of Operations, Babson Women in Business Club"
                      : "Responsable des Opérations, Club Women in Business de Babson"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-5 sm:p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                  {isEn ? "B.S. in Mathematics" : "B.S. en Mathématiques"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {isEn ? "Concentration: Actuarial Science" : "Concentration : Science Actuarielle"}
                </p>
                <p className="text-primary font-medium text-sm sm:text-base mt-1">
                  International University of Grand-Bassam (IUGB)
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Grand-Bassam, Côte d'Ivoire
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Sep 2018 – May 2022
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                    <Award className="w-3 h-3" />
                    Summa Cum Laude
                  </span>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                    {isEn ? "Grade: A" : "Note : A"}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#A5A584" }}
                    />
                    {isEn
                      ? "Quantitative foundation in probability, statistics, and modeling"
                      : "Fondation quantitative en probabilités, statistiques et modélisation"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center scroll-indicator">
          <a
            href="#certificates"
            data-testid="scroll-to-certificates"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
