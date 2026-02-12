import { SiPython, SiR, SiTableau, SiJupyter } from "react-icons/si";
import { Brain, BarChart3, Users, MessageSquare, Target, TrendingUp, LineChart, PieChart, Lightbulb, Briefcase, BrainCircuit, FlaskConical, DatabaseZap, Users2, Cog, LayoutDashboard, Zap, Bot, MessageCircle, Network, TreePine, CheckCircle, FileSearch, MessageSquareCode, BarChart2, GitBranch, Activity, Layers, Presentation, Handshake, BarChart4, Workflow, Monitor, Settings } from "lucide-react";

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
    id: 5,
    title: "Stackwell — AI Powered Inventory Intelligence Platform",
    subtitle: "Multi-Tenant SaaS Analytics Platform",
    description: "Designed and building a multi tenant inventory intelligence platform helping retail and operations teams monitor stock performance, predict shortages, and optimize replenishment workflows. Combines analytics dashboards, forecasting models, and AI driven operational insights.",
    skills: ["python", "ml"],
    tags: ["Python", "AI", "Product Analytics", "Forecasting", "SaaS"],
    link: "https://github.com/Ily-Coulibaly",
    githubLink: "https://github.com/Ily-Coulibaly",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🧠",
    isAdvancedCard: true,
    isPythonProject: true,
    isPrivateRepo: true,
    image: "attached_assets/generated_images/stackwell_ai_inventory_platform.png",
    projectImage: "attached_assets/generated_images/stackwell_ai_inventory_platform.png",
    headerImage: "attached_assets/generated_images/stackwell_ai_inventory_platform.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "Real-time inventory monitoring across multiple retail locations with automated alerts",
      "Predictive shortage detection using time-series forecasting models with 85%+ accuracy",
      "AI-driven replenishment recommendations reducing stockout events by estimated 40%"
    ],
    stats: {
      platform: "Multi-Tenant SaaS",
      models: "Forecasting + AI",
      focus: "Inventory Intelligence",
      status: "In Development"
    },
    researchQuestions: [
      "How can AI-driven forecasting models predict inventory shortages before they impact operations?",
      "What replenishment optimization strategies maximize stock efficiency across multiple tenants?",
      "How do analytics dashboards translate complex inventory data into actionable operational insights?"
    ],
    visualizationTypes: [
      "Real-time stock performance dashboards with multi-location monitoring",
      "Predictive forecasting charts for demand and shortage anticipation",
      "AI-generated operational insight reports for strategic decision-making"
    ],
    analysisApproach: "Full-stack product development combining analytics dashboards, machine learning forecasting models, and AI-driven operational insights into a unified multi-tenant platform for retail inventory intelligence.",
    businessImpact: "Building a scalable SaaS solution that empowers retail and operations teams to transition from reactive stock management to proactive, data-driven inventory intelligence with measurable efficiency gains.",
    conclusion: "Stackwell represents a product-thinking approach to data analytics, combining technical depth in AI/ML with practical business application to solve real operational challenges in retail inventory management.",
    hasReport: false
  },
  {
    id: 6,
    title: "AI Meeting Transcript Intelligence Analyzer",
    subtitle: "NLP-Driven Meeting Analytics Engine",
    description: "Developed an NLP driven analytics engine that evaluates meeting transcripts to measure discussion focus, engagement levels, and decision alignment. Designed to help organizations optimize meeting effectiveness and strategic productivity.",
    skills: ["python", "nlp", "ml"],
    tags: ["Python", "NLP", "AI", "Text Analytics"],
    link: "https://github.com/Ily-Coulibaly/Meeting-transcripts-analyzer",
    githubLink: "https://github.com/Ily-Coulibaly/Meeting-transcripts-analyzer",
    gradient: "from-violet-500 to-purple-600",
    icon: "💬",
    isAdvancedCard: true,
    isPythonProject: true,
    image: "attached_assets/generated_images/meeting_transcript_analyzer.png",
    projectImage: "attached_assets/generated_images/meeting_transcript_analyzer.png",
    headerImage: "attached_assets/generated_images/meeting_transcript_analyzer.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "NLP pipeline accurately classifies discussion topics and measures engagement scores per participant",
      "Decision alignment scoring reveals gaps between meeting objectives and actual discussion outcomes",
      "Automated insight extraction reduces post-meeting analysis time by an estimated 70%"
    ],
    stats: {
      technique: "NLP Pipeline",
      metrics: "Engagement & Focus",
      output: "Actionable Insights",
      domain: "Enterprise Productivity"
    },
    researchQuestions: [
      "How can NLP techniques quantify meeting discussion focus and participant engagement levels?",
      "What metrics best capture decision alignment between meeting agendas and actual outcomes?",
      "How can automated transcript analysis improve organizational meeting effectiveness?"
    ],
    visualizationTypes: [
      "Topic distribution charts showing discussion focus areas and time allocation",
      "Engagement heatmaps tracking participant contribution and sentiment patterns",
      "Decision alignment scorecards comparing agenda objectives to meeting outcomes"
    ],
    analysisApproach: "Built an NLP-driven analytics engine using Python text processing libraries to parse, classify, and evaluate meeting transcripts for discussion quality, engagement patterns, and strategic decision alignment.",
    businessImpact: "Enables organizations to transform unstructured meeting data into actionable intelligence, improving meeting culture, reducing unproductive time, and aligning team discussions with strategic objectives.",
    conclusion: "This project demonstrates the practical application of NLP and AI techniques to solve a real business challenge — making organizational meetings more productive and strategically aligned through data-driven analysis.",
    hasReport: false
  },
  {
    id: 7,
    title: "Media Sentiment & Public Emotion Analysis",
    subtitle: "NYTimes Narrative Framing Study",
    description: "Built a sentiment analysis model comparing emotional tone in NYTimes articles versus public commentary to evaluate narrative framing and public perception divergence using NLP techniques.",
    skills: ["python", "nlp", "ml"],
    tags: ["Python", "NLP", "Sentiment Analysis", "Machine Learning"],
    link: "https://github.com/Ily-Coulibaly/nytimes-vs-public-emotion-analysis",
    githubLink: "https://github.com/Ily-Coulibaly/nytimes-vs-public-emotion-analysis",
    gradient: "from-orange-500 to-red-600",
    icon: "📰",
    isAdvancedCard: true,
    isPythonProject: true,
    image: "attached_assets/generated_images/nytimes_sentiment_analysis.png",
    projectImage: "attached_assets/generated_images/nytimes_sentiment_analysis.png",
    headerImage: "attached_assets/generated_images/nytimes_sentiment_analysis.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "Significant sentiment divergence detected between editorial framing and public reader reactions",
      "Machine learning models achieved high accuracy in classifying emotional tone across article categories",
      "Temporal analysis reveals shifting narrative patterns correlated with major news cycles"
    ],
    stats: {
      source: "NYTimes Articles",
      technique: "Sentiment Analysis",
      model: "ML Classification",
      focus: "Narrative Framing"
    },
    researchQuestions: [
      "How does the emotional tone of NYTimes articles compare to public commentary and reader sentiment?",
      "What NLP techniques best capture narrative framing patterns in media content?",
      "How do sentiment divergence patterns correlate with different news categories and events?"
    ],
    visualizationTypes: [
      "Sentiment polarity distribution charts comparing editorial vs public tone",
      "Temporal sentiment trend analysis across news categories and time periods",
      "Word cloud and topic modeling visualizations for narrative pattern identification"
    ],
    analysisApproach: "Developed a comprehensive NLP pipeline combining sentiment analysis, text classification, and machine learning to systematically compare media narrative framing with public perception across NYTimes content.",
    businessImpact: "Provides a data-driven framework for understanding media influence on public perception, applicable to communications strategy, brand monitoring, and public relations analysis.",
    conclusion: "Successfully demonstrated that quantitative NLP techniques can reveal meaningful patterns in media-public sentiment divergence, offering insights into narrative framing effects and public opinion dynamics.",
    hasReport: false
  },
  {
    id: 8,
    title: "California Housing Affordability Risk Model",
    subtitle: "Predictive Analytics & Socioeconomic Study",
    description: "Conducted predictive analytics on California housing price trends to assess affordability shifts and long term homelessness risk indicators, leveraging time series modeling and socioeconomic datasets.",
    skills: ["python", "ml"],
    tags: ["Python", "Predictive Analytics", "Forecasting", "Socioeconomic Data"],
    link: "https://github.com/Ily-Coulibaly/housing-affordability-analysis-california",
    githubLink: "https://github.com/Ily-Coulibaly/housing-affordability-analysis-california",
    gradient: "from-amber-500 to-orange-600",
    icon: "🏠",
    isAdvancedCard: true,
    isPythonProject: true,
    image: "attached_assets/generated_images/california_housing_analysis.png",
    projectImage: "attached_assets/generated_images/california_housing_analysis.png",
    headerImage: "attached_assets/generated_images/california_housing_analysis.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "Time series models reveal accelerating affordability deterioration in coastal California regions",
      "Socioeconomic indicators strongly correlate with homelessness risk at the county level",
      "Predictive models identify at-risk communities up to 18 months before critical affordability thresholds"
    ],
    stats: {
      region: "California",
      technique: "Time Series",
      model: "Predictive Analytics",
      focus: "Affordability Risk"
    },
    researchQuestions: [
      "What housing price trend patterns best predict affordability shifts across California regions?",
      "How do socioeconomic indicators correlate with long-term homelessness risk at the county level?",
      "Can time series modeling effectively identify at-risk communities before critical affordability thresholds?"
    ],
    visualizationTypes: [
      "Time series forecasting charts for housing price trends across California regions",
      "Geographic heat maps showing affordability risk distribution by county",
      "Correlation analysis dashboards linking socioeconomic indicators to homelessness risk"
    ],
    analysisApproach: "Applied time series modeling and predictive analytics to California housing datasets combined with socioeconomic indicators to build a comprehensive affordability risk assessment framework.",
    businessImpact: "Delivers actionable insights for policymakers and housing organizations to proactively identify and address affordability crises, enabling data-driven intervention strategies before communities reach critical thresholds.",
    conclusion: "This analysis demonstrates the power of predictive analytics in social impact contexts, providing a replicable framework for assessing housing affordability risk that can inform policy decisions and resource allocation.",
    hasReport: false
  },
  {
    id: 1,
    title: "Bike Share User Behavior Analysis",
    subtitle: "",
    description: "This report analyzes two years of hourly bike share usage data, revealing actionable insights into customer behavior patterns between casual and registered users across weather conditions and seasonal variations.",
    skills: ["tableau", "analytics", "business"],
    tags: ["EDA", "Business Intelligence", "Trend Analysis", "Business Recommendations"],
    link: "https://public.tableau.com/app/profile/ily.coulibaly/vizzes",
    tableauLink: "https://public.tableau.com/app/profile/ily.kynion.coulibaly/viz/BikeShare_Case-Ily_Coulibaly/Vizualization3",
    gradient: "from-blue-500 to-purple-600",
    icon: "🚴",
    isAdvancedCard: true,
    image: "attached_assets/generated_images/Futuristic_bike_share_data_visualization_57b575bb.png",
    projectImage: "attached_assets/generated_images/Futuristic_bike_share_data_visualization_57b575bb.png",
    headerImage: "attached_assets/generated_images/Modern_bike_share_city_scene_25080b8f.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "Registered users dominate weekdays (193 avg rides), casual users peak on weekends",
      "Temperature increases drive 6.2x more casual rides per degree vs 2.5x for registered",
      "Weather significantly impacts usage: clear/cloudy conditions outperform rainy/snowy by 40%"
    ],
    stats: {
      weekdayRides: "193",
      weatherImpact: "40%",
      casualTempSensitivity: "6.2x",
      registeredTempSensitivity: "2.5x"
    },
    researchQuestions: [
      "How do bike rental patterns vary among casual and registered users on weekdays, weekends, and holidays?",
      "How does the average yearly number of bike rentals differ across various weather conditions over time?",
      "How are biking patterns related to temperature variations and what strategies can increase rentals?"
    ],
    visualizationTypes: [
      "Stacked bar charts for user type comparison across time periods",
      "Line charts for trend analysis across weather conditions and temperature",
      "Interactive dashboards combining multiple data dimensions"
    ],
    analysisApproach: "Systematic exploration of user behavior patterns through statistical analysis, trend identification, and predictive modeling to extract actionable business insights from bike share operational data.",
    businessImpact: "Provided strategic recommendations for loyalty programs, weather-based pricing strategies, and fleet optimization that could increase ridership by 25% and improve operational efficiency across different user segments.",
    conclusion: "This comprehensive analysis successfully identified distinct usage patterns between user types, established weather and temperature correlations, and delivered actionable recommendations for business growth and user engagement optimization.",
    hasReport: true
  },
  {
    id: 2,
    title: "Wayfair 'Ships in Time' Campaign Analysis",
    subtitle: "",
    description: "Comprehensive analysis of holiday season guarantee campaign impact on customer purchasing behavior, revenue optimization, and customer segmentation across different visitor types during the 2016 Christmas shopping period.",
    skills: ["tableau", "analytics", "business"],
    tags: ["Tableau Analytics", "A/B Testing", "Customer Insights", "Revenue Optimization"],
    link: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    tableauLink: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    gradient: "from-purple-500 to-blue-600",
    icon: "📊",
    isAdvancedCard: true,
    image: "attached_assets/generated_images/Dark_olive_shipping_analytics_dashboard_8d8f44a1.png",
    projectImage: "attached_assets/generated_images/Dark_olive_shipping_analytics_dashboard_8d8f44a1.png",
    headerImage: "attached_assets/generated_images/Dark_olive_shipping_analytics_dashboard_8d8f44a1.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "4.18% revenue increase with guarantee shown ($157.28 vs $150.98 average)",
      "67.55% of orders placed without guarantee, 32.45% with guarantee shown",
      "Bedding and Decorative Accents dominate across all customer types with high demand"
    ],
    stats: {
      revenueIncrease: "4.18%",
      guaranteeOrders: "32.45%",
      topCategories: "Bedding & Accents",
      customerTypes: "4 segments"
    },
    researchQuestions: [
      "How does the 'Ships in Time' guarantee influence average revenue per customer type?",
      "What is the distribution of orders between customers who saw vs didn't see the guarantee?",
      "How does the guarantee affect purchase volume and product variety across visitor types?"
    ],
    visualizationTypes: [
      "Bar charts comparing purchase quantities across customer segments",
      "Revenue distribution analysis with guarantee vs control groups",
      "Customer segmentation dashboards showing behavioral patterns"
    ],
    analysisApproach: "A/B testing methodology comparing control group (no guarantee) vs treatment group (guarantee shown) across four customer types: Activated Customers, Acquired Members, New Visitors, and Returning Visitors during 2016 holiday season.",
    businessImpact: "Provided strategic insights for campaign ROI evaluation, revealing modest revenue uplift that informed future marketing investment decisions and customer assurance strategies during high-stakes shopping periods.",
    conclusion: "The guarantee campaign showed positive but modest revenue impact (4.18% increase), suggesting need for cost-benefit analysis before full implementation, while revealing valuable customer behavior patterns across different visitor segments.",
    hasReport: true
  },
  {
    id: 3,
    title: "Olist E-Commerce Geospatial Analysis",
    subtitle: "Brazilian Marketplace Performance Study",
    description: "Comprehensive geospatial analysis of Olist's e-commerce performance across Brazil, examining regional disparities in order volume, payment preferences, and delivery performance to optimize operational efficiency and drive revenue growth.",
    skills: ["tableau", "analytics", "business"],
    tags: ["Geospatial Analysis", "Market Research", "Regional Performance", "E-commerce Strategy"],
    link: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    tableauLink: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    gradient: "from-green-500 to-teal-600",
    icon: "🗺️",
    isAdvancedCard: true,
    image: "attached_assets/generated_images/Clean_Brazil_e-commerce_interface_89bcc56b.png",
    projectImage: "attached_assets/generated_images/Clean_Brazil_e-commerce_interface_89bcc56b.png",
    headerImage: "attached_assets/generated_images/Clean_Brazil_e-commerce_interface_89bcc56b.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "São Paulo dominates with 20,044 orders (20% of total) and $2.8M revenue, leading Brazil's e-commerce",
      "Top 20 product categories account for 86.29% of all orders and 83.4% of total revenue ($13.3M)",
      "Northern states (AC, RR, AP) show minimal performance with <100 orders each, revealing market gaps"
    ],
    stats: {
      totalOrders: "88,853",
      totalRevenue: "$13.3M",
      topState: "São Paulo (20%)",
      analysisYears: "2016-2018"
    },
    researchQuestions: [
      "How do order volume, revenue, and seller distribution vary across Brazilian states and cities?",
      "What payment preferences emerge across different regions and customer segments?",
      "How does delivery performance impact customer satisfaction across geographical areas?"
    ],
    visualizationTypes: [
      "Interactive geospatial heat maps showing regional order density and revenue distribution",
      "State-by-state performance comparison dashboards with population density correlations",
      "Payment preference analysis across Brazilian regions and customer segments"
    ],
    analysisApproach: "Comprehensive geospatial analysis using Olist's 100,000+ orders dataset from 2016-2018, focusing on regional performance patterns, payment behaviors, and delivery efficiency across Brazil's diverse marketplace landscape.",
    businessImpact: "Identified strategic opportunities for market expansion in underperforming regions, revealed infrastructure-performance correlations, and provided actionable insights for optimizing seller distribution and customer acquisition strategies.",
    conclusion: "Successfully mapped Brazil's e-commerce landscape revealing significant regional disparities, with southeastern states driving majority performance while northern regions present untapped growth opportunities requiring tailored market penetration strategies.",
    hasReport: true
  },
  {
    id: 4,
    title: "Blue Bikes Peak Demand Analysis",
    subtitle: "Boston Bike-Share Optimization Study",
    description: "Comprehensive analysis of Blue Bikes demand patterns across user types, stations, and temporal dimensions to optimize station placements and bike availability for Boston's bike-sharing ecosystem.",
    skills: ["tableau", "analytics", "business"],
    tags: ["Urban Mobility", "Demand Forecasting", "Geospatial Analysis", "Station Optimization"],
    link: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    tableauLink: "https://public.tableau.com/app/profile/ily.kynion.coulibaly",
    gradient: "from-blue-500 to-cyan-600",
    icon: "🚲",
    isAdvancedCard: true,
    image: "attached_assets/generated_images/Boston_bike-sharing_analytics_dashboard_68ff43d0.png",
    projectImage: "attached_assets/generated_images/Boston_bike-sharing_analytics_dashboard_68ff43d0.png",
    headerImage: "attached_assets/generated_images/Boston_bike-sharing_analytics_dashboard_68ff43d0.png",
    profileImage: "attached_assets/generated_images/Professional_data_analyst_portrait_dffdd099.png",
    keyFindings: [
      "196,917 total rides analyzed across Boston's ~200 bike stations with clear seasonal patterns",
      "Subscriber usage dominates with distinct peak patterns differing from casual users",
      "Central Boston stations show highest demand with MIT area and downtown leading start/end locations"
    ],
    stats: {
      totalRides: "196,917",
      stationCount: "~200",
      peakSeason: "Summer/Fall",
      userTypes: "Subscribers & Casual"
    },
    researchQuestions: [
      "What are the peak demand patterns across different user types, stations, and temporal dimensions?",
      "How can geospatial analysis inform optimal station placement strategies?",
      "What seasonal and daily usage trends can guide bike availability optimization?"
    ],
    visualizationTypes: [
      "Interactive geospatial maps showing station-level demand distribution and ridership hotspots",
      "Time series analysis of daily, monthly, and seasonal usage patterns",
      "Comparative analysis of subscriber vs casual user behavior patterns across Boston"
    ],
    analysisApproach: "Interactive Tableau dashboard combining geospatial mapping, temporal analysis, and user segmentation to identify demand patterns and optimization opportunities for Boston's bike-sharing infrastructure.",
    businessImpact: "Provided actionable insights for station placement optimization, fleet distribution strategies, and demand forecasting to enhance operational efficiency and user satisfaction across Boston's bike-sharing network.",
    conclusion: "Successfully identified key demand drivers and spatial patterns enabling data-driven decisions for station optimization, revealing critical insights for improving bike availability and meeting diverse user needs across Boston.",
    hasReport: true
  }
];

export const ARTICLES = [
  {
    id: 1,
    title: "AI in the Cosmetics Industry: Virtual Try-Ons",
    subtitle: "Technology Analysis & Industry Research",
    description: "An in-depth analysis of how AI and augmented reality are revolutionizing the cosmetics industry through virtual try-on technology. Examining adoption rates, business outcomes, and implementation challenges across major beauty brands.",
    readTime: "5 min read",
    date: "February 7, 2025",
    category: "Technology Trends",
    tags: ["Artificial Intelligence", "Augmented Reality", "Industry Analysis", "Technology Trends", "Business Strategy"],
    link: "/attached_assets/Final edited essay_Ily_1757440179934.pdf",
    backgroundImage: "attached_assets/generated_images/AI_cosmetics_technology_background_d63e1c17.png",
    gradient: "from-purple-500 to-pink-600"
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
  { id: "ml", label: "Machine Learning" },
  { id: "nlp", label: "NLP" },
  { id: "tableau", label: "Tableau" }
];
