import { SiPython, SiR, SiTableau, SiJupyter } from "react-icons/si";
import { Brain, BarChart3, Users, MessageSquare, Target, TrendingUp, LineChart, PieChart, Lightbulb, Briefcase, BrainCircuit, FlaskConical, DatabaseZap, Users2, Cog, LayoutDashboard, Zap, Bot, MessageCircle, Network, TreePine, CheckCircle, FileSearch, MessageSquareCode, BarChart2, GitBranch, Activity, Layers, Presentation, Handshake, BarChart4, Workflow, Monitor, Settings, Users3, Handshake as CollaborationIcon } from "lucide-react";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ily-kynion-coulibaly-05602a189/",
  github: "https://github.com/Ily-Coulibaly",
  tableau: "https://public.tableau.com/app/profile/ily.kynion.coulibaly/vizzes",
  medium: "https://medium.com/@k.ilycoulibaly",
  email: "icoulibaly1@babson.edu",
  kyn: "https://kyn-care.com/"
};

// Custom icon components for external logos - using reliable CDN links
const ExcelIcon = () => (
  <img src="https://img.icons8.com/fluency/48/microsoft-excel-2019.png" alt="Excel logo" title="Excel" className="skills-logo w-12 h-12 object-contain" />
);

const PowerBIIcon = () => (
  <img src="https://img.icons8.com/fluency/48/power-bi-2021.png" alt="Power BI logo" title="Power BI" className="skills-logo w-12 h-12 object-contain" />
);

const MatlabIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt="MATLAB logo" title="MATLAB" className="skills-logo w-12 h-12 object-contain" />
);

const SASIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg" alt="SAS logo" title="SAS" className="skills-logo w-12 h-12 object-contain" />
);

// Professional SVG icons for Data Skills
const DataAnalyticsIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    <circle cx="5.25" cy="10.5" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="6" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="18.75" cy="2.25" r="1.5" fill="currentColor" opacity="0.6"/>
  </svg>
);

const MachineLearningIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const StatisticalModelingIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" opacity="0.3"/>
    <circle cx="9" cy="11.25" r="1.5" fill="currentColor"/>
    <circle cx="13.306" cy="15.557" r="1.5" fill="currentColor"/>
    <circle cx="19.12" cy="10.038" r="1.5" fill="currentColor"/>
  </svg>
);

const PredictiveAnalyticsIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0V21m0-4.5h3m-3 0h-3m15-11.25v7.5a2.25 2.25 0 01-2.25 2.25H9.75a2.25 2.25 0 01-2.25-2.25v-7.5m15 0a2.25 2.25 0 00-2.25-2.25H9.75A2.25 2.25 0 007.5 3.75m15 0V2.25A.75.75 0 0021.75 1.5h-1.5a.75.75 0 00-.75.75v1.5m0 0V9m0-5.25v5.25m0 0h-3m3 0h-3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 13.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM15.75 15.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" fill="currentColor"/>
  </svg>
);

const DataVisualizationIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853L15.75 14.25M9 15l3-3m3 3l-3-3" opacity="0.4"/>
  </svg>
);

const ArtificialIntelligenceIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" opacity="0.4"/>
  </svg>
);

const ABTestingIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.169.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    <circle cx="8" cy="12" r="2" fill="currentColor" opacity="0.3"/>
    <circle cx="16" cy="12" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Professional SVG icons for Business Skills
const StrategicLeadershipIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12.75v3.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-3.75m0 0V9a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v3.75m0 0h1.5m-1.5 0h-1.5" opacity="0.4"/>
    <circle cx="8.625" cy="9.375" r="1.875" fill="currentColor"/>
  </svg>
);

const CriticalThinkingIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478v-.037c0-4.414-4.03-9.437-9.75-9.437s-9.75 5.023-9.75 9.437v.037c0 .21.022.4.053.59m0 0a12.05 12.05 0 019.643 0m0 0c.032-.19.054-.38.054-.59" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" opacity="0.5"/>
    <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

const CommunicationIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    <circle cx="9.5" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="14.5" cy="10.5" r="1.5" fill="currentColor"/>
  </svg>
);

const TeamworkIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    <circle cx="12" cy="6.75" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ConsultingIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    <circle cx="12" cy="12.75" r="1" fill="currentColor"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5m-4.5 2.25h4.5" opacity="0.4"/>
  </svg>
);

export const PROGRAMMING_TOOLS = [
  { name: "Python", icon: SiPython, color: "text-blue-500", title: "Python", proficiency: 5, certified: true, certificateId: 2 },
  { name: "R", icon: SiR, color: "text-blue-600", title: "R", proficiency: 5 },
  { name: "SQL", icon: DatabaseZap, color: "text-orange-500", title: "SQL", proficiency: 4 },
  { name: "MATLAB", icon: MatlabIcon, color: "", title: "MATLAB", proficiency: 4 }
];

export const VISUALIZATION_SKILLS = [
  { name: "Tableau", icon: SiTableau, color: "text-blue-400", title: "Tableau", proficiency: 5, certified: true, certificateId: 1 },
  { name: "Power BI", icon: PowerBIIcon, color: "", title: "Power BI", proficiency: 4 },
  { name: "Excel", icon: ExcelIcon, color: "", title: "Excel", proficiency: 4 }
];

// Machine Learning Skills with realistic professional icons
export const MACHINE_LEARNING_SKILLS = [
  { name: "Regression", icon: LineChart, color: "text-blue-600", title: "Regression Analysis", proficiency: 5 },
  { name: "Classification", icon: GitBranch, color: "text-green-600", title: "Classification", proficiency: 5 },
  { name: "Clustering", icon: Network, color: "text-purple-600", title: "Clustering", proficiency: 4 },
  { name: "Predictive Analytics", icon: BarChart4, color: "text-orange-600", title: "Predictive Analytics", proficiency: 5 },
  { name: "Ensemble Methods", icon: Workflow, color: "text-teal-600", title: "Ensemble Methods", proficiency: 4 }
];

// Hugging Face icon component
const HuggingFaceIcon = () => (
  <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02s4.5 10.02 10 10.02 10-4.49 10-10.02S17.5 2.04 12 2.04zm3.54 6.8l-1.51 1.51c.91.91.91 2.4 0 3.31s-2.4.91-3.31 0l-1.51-1.51c-.91-.91-.91-2.4 0-3.31s2.4-.91 3.31 0l1.51 1.51c.91.91.91 2.4 0 3.31z"/>
  </svg>
);

export const AI_SKILLS = [
  { name: "Neural Networks", icon: Brain, color: "text-blue-600", title: "Neural Networks", proficiency: 4 },
  { name: "Deep Learning", icon: Layers, color: "text-indigo-600", title: "Deep Learning", proficiency: 4 },
  { name: "Chatbot Building", icon: Bot, color: "text-green-600", title: "Chatbot Building", proficiency: 4 },
  { name: "Prompt Engineering", icon: Settings, color: "text-orange-600", title: "Prompt Engineering", proficiency: 4 }
];

// Business Skills - Top 5 most relevant for Data Analyst position
export const BUSINESS_CATEGORY = [
  { name: "Data Storytelling", icon: Presentation, color: "text-blue-600", title: "Data Storytelling" },
  { name: "Business Intelligence", icon: Monitor, color: "text-green-600", title: "Business Intelligence" },
  { name: "Stakeholder Management", icon: Users2, color: "text-purple-600", title: "Stakeholder Management" },
  { name: "Strategic Analysis", icon: BarChart3, color: "text-orange-600", title: "Strategic Analysis" },
  { name: "Cross-functional Collaboration", icon: Handshake, color: "text-teal-600", title: "Cross-functional Collaboration" }
];

export const SKILLS_CATEGORIES = [
  { id: "programming", label: "Programming", skills: PROGRAMMING_TOOLS },
  { id: "visualization", label: "Visualization", skills: VISUALIZATION_SKILLS },
  { id: "ml", label: "Machine Learning", skills: MACHINE_LEARNING_SKILLS },
  { id: "ai", label: "Artificial Intelligence", skills: AI_SKILLS },
  { id: "business", label: "Business", skills: BUSINESS_CATEGORY }
];

// Legacy SKILLS array for backward compatibility
export const SKILLS = PROGRAMMING_TOOLS;

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
