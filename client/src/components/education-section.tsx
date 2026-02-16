import { GraduationCap, MapPin, Calendar, ChevronDown, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

interface Course {
  name: string;
  nameFr: string;
}

const GRAD_COURSEWORK: Course[] = [
  { name: "AI for Business", nameFr: "IA pour les Affaires" },
  { name: "Machine Learning for Business", nameFr: "Machine Learning pour les Affaires" },
  { name: "Advanced Programming with Python & SQL", nameFr: "Programmation Avancée Python & SQL" },
  { name: "Storytelling & Data Visualization with Tableau", nameFr: "Storytelling & Visualisation de Données avec Tableau" },
  { name: "Econometrics", nameFr: "Économétrie" },
  { name: "Investment Banking & Financial Modeling", nameFr: "Banque d'Investissement & Modélisation Financière" },
];

const UNDERGRAD_COURSEWORK: Course[] = [
  { name: "Probability & Statistics", nameFr: "Probabilités & Statistiques" },
  { name: "Linear Algebra", nameFr: "Algèbre Linéaire" },
  { name: "Calculus I, II & III", nameFr: "Calcul I, II & III" },
  { name: "Actuarial Mathematics", nameFr: "Mathématiques Actuarielles" },
  { name: "Statistical Modeling", nameFr: "Modélisation Statistique" },
  { name: "Numerical Methods", nameFr: "Méthodes Numériques" },
];

const ExpandableCourses = ({ courses, isEn }: { courses: Course[]; isEn: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-primary"
        style={{ color: expanded ? "#A5A584" : "rgba(165,165,132,0.7)" }}
      >
        <BookOpen className="w-3.5 h-3.5" />
        {isEn ? "Relevant Coursework" : "Cours Pertinents"}
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform duration-300"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? "300px" : "0px",
          opacity: expanded ? 1 : 0,
          marginTop: expanded ? "10px" : "0px",
        }}
      >
        <div className="flex flex-wrap gap-2">
          {courses.map((course, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs rounded-full font-medium"
              style={{
                backgroundColor: "rgba(165,165,132,0.12)",
                color: "#A5A584",
                border: "1px solid rgba(165,165,132,0.2)",
              }}
            >
              {isEn ? course.name : course.nameFr}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({
  school,
  degree,
  concentration,
  location,
  dates,
  grade,
  courses,
  isEn,
}: {
  school: string;
  degree: string;
  concentration?: string;
  location: string;
  dates: string;
  grade: string;
  courses: Course[];
  isEn: boolean;
}) => (
  <div
    className="rounded-xl p-6 sm:p-7 transition-all duration-300"
    style={{
      backgroundColor: "rgba(165,165,132,0.04)",
      border: "1px solid rgba(165,165,132,0.15)",
    }}
  >
    <div className="flex items-start gap-4">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: "rgba(165,165,132,0.15)" }}
      >
        <GraduationCap className="w-5 h-5" style={{ color: "#A5A584" }} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold tracking-tight" style={{ color: "#A5A584" }}>
          {school}
        </h3>

        <div className="mt-2.5">
          <p className="text-base sm:text-lg font-semibold text-foreground leading-tight">
            {degree}
          </p>
          {concentration && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {concentration}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" style={{ color: "rgba(165,165,132,0.6)" }} />
            {dates}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" style={{ color: "rgba(165,165,132,0.6)" }} />
            {location}
          </span>
          <span
            className="px-2 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wider"
            style={{
              backgroundColor: "rgba(165,165,132,0.15)",
              color: "#A5A584",
            }}
          >
            {grade}
          </span>
        </div>

        <div className="mt-5">
          <ExpandableCourses courses={courses} isEn={isEn} />
        </div>
      </div>
    </div>
  </div>
);

const EducationSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          {isEn ? "Education" : "Formation"}
        </h2>

        <div className="space-y-6">
          <EducationCard
            school="Babson College, F.W. Olin Graduate School of Business"
            degree={isEn ? "M.S. in Business Analytics" : "M.S. en Analytique d'Affaires"}
            location="Wellesley, MA"
            dates="Aug 2024 – May 2025"
            grade={isEn ? "Grade: A" : "Note : A"}
            courses={GRAD_COURSEWORK}
            isEn={isEn}
          />

          <EducationCard
            school="International University of Grand-Bassam (IUGB)"
            degree={isEn ? "B.S. in Mathematics" : "B.S. en Mathématiques"}
            concentration={isEn ? "Concentration: Actuarial Science" : "Concentration : Science Actuarielle"}
            location="Grand-Bassam, Côte d'Ivoire"
            dates="Sep 2018 – May 2022"
            grade={isEn ? "Grade: A" : "Note : A"}
            courses={UNDERGRAD_COURSEWORK}
            isEn={isEn}
          />
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
