import { SiPython, SiR, SiTableau, SiJupyter, SiPandas } from "react-icons/si";
import { Brain, Database, BarChart3, Users, MessageSquare, Target, TrendingUp, LineChart, PieChart, Lightbulb, Briefcase, BrainCircuit, FlaskConical, Network } from "lucide-react";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ily-kynion-coulibaly-05602a189/",
  github: "https://github.com/Ily-Coulibaly",
  tableau: "https://public.tableau.com/app/profile/ily.kynion.coulibaly/vizzes",
  medium: "https://medium.com/@k.ilycoulibaly",
  email: "icoulibaly1@babson.edu",
  kyn: "https://kyn-care.com/"
};

// Custom icon components for external logos
const ExcelIcon = () => (
  <img src="https://cdn.simpleicons.org/microsoftexcel" alt="Excel logo" title="Excel" className="w-12 h-12" />
);

const PowerBIIcon = () => (
  <img src="https://cdn.simpleicons.org/powerbi" alt="Power BI logo" title="Power BI" className="w-12 h-12" />
);

const MatlabIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt="MATLAB logo" title="MATLAB" className="w-12 h-12" />
);

const SASIcon = () => (
  <img src="https://cdn.simpleicons.org/sas" alt="SAS logo" title="SAS" className="w-12 h-12" />
);

export const TECHNICAL_TOOLS = [
  { name: "Python", icon: SiPython, color: "text-blue-500", title: "Python" },
  { name: "R", icon: SiR, color: "text-blue-600", title: "R" },
  { name: "SQL", icon: Database, color: "text-orange-500", title: "SQL" },
  { name: "Excel", icon: ExcelIcon, color: "", title: "Excel" },
  { name: "Tableau", icon: SiTableau, color: "text-blue-400", title: "Tableau" },
  { name: "Power BI", icon: PowerBIIcon, color: "", title: "Power BI" },
  { name: "Jupyter", icon: SiJupyter, color: "text-orange-400", title: "Jupyter" },
  { name: "Pandas", icon: SiPandas, color: "text-blue-700", title: "Pandas" },
  { name: "MATLAB", icon: MatlabIcon, color: "", title: "MATLAB" },
  { name: "SAS", icon: SASIcon, color: "", title: "SAS" }
];

export const DATA_SKILLS = [
  { name: "Data Analytics", icon: PieChart, color: "text-teal-500", title: "Data Analytics" },
  { name: "Machine Learning", icon: Brain, color: "text-primary", title: "Machine Learning" },
  { name: "Statistical Modeling", icon: LineChart, color: "text-blue-500", title: "Statistical Modeling" },
  { name: "Predictive Analytics", icon: TrendingUp, color: "text-green-500", title: "Predictive Analytics" },
  { name: "Data Visualization", icon: BarChart3, color: "text-purple-500", title: "Data Visualization" },
  { name: "Artificial Intelligence", icon: BrainCircuit, color: "text-indigo-500", title: "Artificial Intelligence" },
  { name: "A/B Testing", icon: FlaskConical, color: "text-orange-500", title: "A/B Testing" }
];

export const BUSINESS_SKILLS = [
  { name: "Strategic Leadership", icon: Target, color: "text-red-500", title: "Strategic Leadership" },
  { name: "Critical Thinking", icon: Lightbulb, color: "text-indigo-500", title: "Critical Thinking" },
  { name: "Communication", icon: MessageSquare, color: "text-green-500", title: "Communication" },
  { name: "Teamwork", icon: Users, color: "text-blue-500", title: "Teamwork" },
  { name: "Consulting", icon: Briefcase, color: "text-purple-500", title: "Consulting" }
];

export const SKILLS_CATEGORIES = [
  { id: "technical", label: "Technical Tools", skills: TECHNICAL_TOOLS },
  { id: "data", label: "Data Skills", skills: DATA_SKILLS },
  { id: "business", label: "Business Skills", skills: BUSINESS_SKILLS }
];

// Legacy SKILLS array for backward compatibility
export const SKILLS = TECHNICAL_TOOLS;

export const PROJECTS = [
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description: "Advanced clustering analysis using K-means and hierarchical clustering to identify distinct customer segments for targeted marketing strategies.",
    skills: ["python", "ml", "tableau"],
    tags: ["Python", "Machine Learning", "Tableau"],
    link: SOCIAL_LINKS.github,
    gradient: "from-blue-500 to-purple-600",
    icon: "📊"
  },
  {
    id: 2,
    title: "Sales Forecasting Model",
    description: "Time series analysis and ARIMA modeling to predict future sales trends with 95% accuracy, enabling proactive inventory management.",
    skills: ["python", "ml", "sql"],
    tags: ["Python", "Machine Learning", "SQL"],
    link: SOCIAL_LINKS.github,
    gradient: "from-green-500 to-blue-600",
    icon: "📈"
  },
  {
    id: 3,
    title: "Social Media Sentiment Analysis",
    description: "NLP pipeline using BERT transformers to analyze customer sentiment from social media data, providing real-time brand perception insights.",
    skills: ["python", "nlp", "ml"],
    tags: ["Python", "NLP", "Machine Learning"],
    link: SOCIAL_LINKS.github,
    gradient: "from-purple-500 to-pink-600",
    icon: "💬"
  },
  {
    id: 4,
    title: "Interactive Financial Dashboard",
    description: "Comprehensive Tableau dashboard tracking KPIs, revenue trends, and profitability metrics with real-time data connections.",
    skills: ["tableau", "sql"],
    tags: ["Tableau", "SQL"],
    link: SOCIAL_LINKS.tableau,
    gradient: "from-yellow-500 to-red-600",
    icon: "💰"
  },
  {
    id: 5,
    title: "Supply Chain Analytics",
    description: "End-to-end supply chain analysis identifying bottlenecks and optimization opportunities, resulting in 20% cost reduction.",
    skills: ["python", "sql", "tableau"],
    tags: ["Python", "SQL", "Tableau"],
    link: SOCIAL_LINKS.github,
    gradient: "from-teal-500 to-green-600",
    icon: "🚛"
  },
  {
    id: 6,
    title: "Product Recommendation Engine",
    description: "Collaborative filtering and matrix factorization techniques to build personalized product recommendations, improving engagement by 35%.",
    skills: ["python", "ml"],
    tags: ["Python", "Machine Learning"],
    link: SOCIAL_LINKS.github,
    gradient: "from-indigo-500 to-purple-600",
    icon: "🎯"
  }
];

export const ARTICLES = [
  {
    id: 1,
    title: "Getting Started with Machine Learning",
    description: "A comprehensive guide for beginners to understand machine learning fundamentals and start their journey in data science.",
    readTime: "5 min read",
    link: SOCIAL_LINKS.medium,
    gradient: "from-blue-500 to-purple-600",
    icon: "📚"
  },
  {
    id: 2,
    title: "Advanced Tableau Techniques",
    description: "Master advanced Tableau features to create compelling visualizations that tell powerful data stories.",
    readTime: "8 min read",
    link: SOCIAL_LINKS.medium,
    gradient: "from-green-500 to-teal-600",
    icon: "📊"
  },
  {
    id: 3,
    title: "The Future of AI in Business Analytics",
    description: "Exploring how artificial intelligence is transforming business analytics and what it means for data professionals.",
    readTime: "6 min read",
    link: SOCIAL_LINKS.medium,
    gradient: "from-purple-500 to-pink-600",
    icon: "🤖"
  }
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "Advanced Data Analytics",
    issuer: "Professional Certification",
    date: "January 2024",
    description: "Gained expertise in data exploration, visualization, and real-time business decision tools.",
    type: "certification"
  },
  {
    id: 2,
    title: "Python for Data Science",
    issuer: "Professional Certification", 
    date: "December 2023",
    description: "Focused on using Python libraries for data wrangling, analysis, and building predictive models.",
    type: "certification"
  },
  {
    id: 3,
    title: "Dean's List",
    issuer: "Babson College",
    date: "2023",
    description: "Academic excellence recognition for maintaining high GPA while pursuing Master's in Business Analytics.",
    type: "achievement"
  },
  {
    id: 4,
    title: "Academic Excellence Award",
    issuer: "Mathematics Department",
    date: "2022", 
    description: "Outstanding performance in advanced mathematics and statistical analysis coursework.",
    type: "achievement"
  }
];

export const FILTER_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "python", label: "Python" },
  { id: "sql", label: "SQL" },
  { id: "tableau", label: "Tableau" },
  { id: "ml", label: "Machine Learning" },
  { id: "nlp", label: "NLP" }
];
