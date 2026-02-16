import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    document.title = "Ily Coulibaly — Resume";
  }, []);

  return (
    <div style={{
      background: '#fff',
      color: '#1a1a1a',
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      maxWidth: '850px',
      margin: '0 auto',
      padding: '40px 50px',
      lineHeight: 1.45,
      fontSize: '11px',
    }}>
      <style>{`
        @media print {
          body { margin: 0; padding: 0; background: #fff; }
          .no-print { display: none !important; }
          .resume-container { padding: 20px 30px !important; max-width: 100% !important; }
        }
        .resume-container a { color: #2563eb; text-decoration: none; }
        .resume-container a:hover { text-decoration: underline; }
      `}</style>

      <div className="resume-container">
        <div className="no-print" style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: '10px 24px',
              background: '#A5A584',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              marginRight: '12px',
            }}
          >
            Print / Save as PDF
          </button>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: '10px 24px',
              background: '#e5e5e5',
              color: '#333',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Back to Portfolio
          </button>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '16px', borderBottom: '2px solid #A5A584', paddingBottom: '12px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, letterSpacing: '-0.5px', color: '#111' }}>
            ILY COULIBALY
          </h1>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#555', margin: '4px 0 8px', letterSpacing: '0.5px' }}>
            Data & AI Analyst | Business Intelligence | Machine Learning | Strategy
          </p>
          <p style={{ fontSize: '10.5px', color: '#666', margin: 0 }}>
            Boston, MA &nbsp;|&nbsp;{" "}
            <a href="mailto:k.ilycoulibaly@gmail.com">k.ilycoulibaly@gmail.com</a> &nbsp;|&nbsp;{" "}
            <a href="https://www.linkedin.com/in/ily-kynion-coulibaly-05602a189/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;|&nbsp;{" "}
            <a href="https://github.com/Ily-Coulibaly" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;{" "}
            <a href="https://public.tableau.com/app/profile/ily.kynion.coulibaly/vizzes" target="_blank" rel="noopener noreferrer">Tableau Public</a>
          </p>
        </div>

        {/* Summary */}
        <Section title="PROFESSIONAL SUMMARY">
          <p style={{ margin: 0, fontSize: '11px', lineHeight: 1.55 }}>
            Data analyst and AI strategist with 3.5 years of experience translating complex datasets into actionable business intelligence. Proven track record building scalable analytics infrastructure, AI-powered decision systems, and executive dashboards across industries including SaaS, insurance, agriculture, and consulting. Combines deep technical proficiency in Python, SQL, and machine learning with strategic thinking, stakeholder communication, and product-oriented problem solving. Experienced in leading cross-functional projects from data architecture design through production deployment.
          </p>
        </Section>

        {/* Technical Skills */}
        <Section title="TECHNICAL SKILLS">
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '4px 12px', fontSize: '11px' }}>
            <SkillRow label="Languages & Tools" value="Python, R, SQL, MATLAB, Jupyter Notebook, Git" />
            <SkillRow label="Data & BI" value="Tableau, Power BI, Excel (Advanced), ETL Pipelines, PostgreSQL, Data Modeling, Automated Reporting" />
            <SkillRow label="Machine Learning" value="Regression, Classification, Clustering, Ensemble Methods, Predictive Analytics, Time-Series Forecasting" />
            <SkillRow label="AI & NLP" value="Neural Networks, Deep Learning, NLP (TF-IDF, Vector Embeddings, Sentiment Analysis), Prompt Engineering, LLM Orchestration (GPT-4o, Gemini), Microsoft Copilot Studio" />
            <SkillRow label="Business" value="Strategic Analysis, Data Storytelling, Stakeholder Management, A/B Testing, Financial Modeling, Competitive Intelligence, Cross-functional Collaboration" />
          </div>
        </Section>

        {/* Experience */}
        <Section title="PROFESSIONAL EXPERIENCE">
          <ExperienceEntry
            title="Strategy & Analytics Analyst"
            company="Mac Unlimited INC."
            location="Oreland, PA (Remote)"
            dates="Jul 2025 – Present"
            bullets={[
              "Led complete business model transformation redesigning revenue structure from 80% active coaching to 70% passive revenue; developed 3-year strategic roadmap through capability optimization and process redesign",
              "Optimized organizational processes diagnosing conversion funnel issues; designed improved customer journey framework projected to double conversion rates from 10–15% to 20–30%",
              "Built AI-driven analytics tracking frameworks and performance dashboards leveraging predictive modeling to monitor funnel behavior, customer acquisition efficiency, and revenue performance",
              "Performed comprehensive competitive intelligence analysis evaluating 5+ market competitors; developed strategic positioning framework and differentiation strategy",
            ]}
          />
          <ExperienceEntry
            title="Founder & AI Solutions Lead"
            company="KYN LLC"
            location="Boston, MA"
            dates="Jan 2023 – Present"
            bullets={[
              "Founded and scaled a data-driven consumer brand integrating analytics across operations, marketing, and customer intelligence; designed AI copilot automating customer service and marketing workflows",
              "Built AI-powered product recommendation systems and customer insight pipelines using NLP and structured data analysis",
              "Designed marketing analytics dashboards tracking acquisition, retention, and campaign ROI; led A/B testing and funnel optimization initiatives driving measurable conversion improvements",
            ]}
          />
          <ExperienceEntry
            title="Insights & Data Analyst"
            company="Entrepreneurial Solutions Partners (ESP)"
            location="Abidjan, Côte d'Ivoire"
            dates="Jan 2024 – Aug 2024"
            bullets={[
              "Built scalable BI infrastructure and automated ETL pipelines processing 10K+ daily records across 10-country operation; created 10+ executive dashboards reducing manual reporting by 50%",
              "Led financial forecasting initiative using predictive analytics and time-series modeling; developed strategic business case securing $500K USADF grant supporting 300+ agricultural entrepreneurs",
              "Built enterprise AI search solution using NLP techniques (TF-IDF, vector embeddings) indexing 1,000+ organizational documents, reducing information retrieval time by 80%",
            ]}
          />
          <ExperienceEntry
            title="Business Development Analyst"
            company="Entrepreneurial Solutions Partners (ESP)"
            location="Abidjan, Côte d'Ivoire"
            dates="Jan 2023 – Dec 2023"
            bullets={[
              "Led strategic transformation partnering with government stakeholders to design Equatorial Guinea's 5-year national tourism strategy; presented recommendations to 40+ senior officials",
              "Performed business diagnostics and program redesign for entrepreneurship training initiative serving 450+ participants; produced strategic recommendations informing program Version 2.0",
              "Recruited and evaluated investment-ready businesses for €1.4M Orange Corners venture program; developed assessment frameworks and delivered strategic recommendations",
            ]}
          />
          <ExperienceEntry
            title="Data & Actuarial Intern"
            company="NSIA Group"
            location="Abidjan, Côte d'Ivoire"
            dates="Jun 2022 – Dec 2022"
            bullets={[
              "Created actuarial pricing models analyzing 500+ insurance policies using SQL and time-series forecasting; enhanced pricing accuracy by 25% through predictive analytics and risk segmentation",
              "Automated monthly reporting processes reducing manual compilation time by 35% and improving report accuracy across departments",
            ]}
          />
          <ExperienceEntry
            title="Mathematics Tutor & Analytics Developer"
            company="International University of Grand-Bassam (IUGB)"
            location="Grand-Bassam, Côte d'Ivoire"
            dates="Jan 2020 – May 2022"
            bullets={[
              "Delivered tutoring in Statistics, Probability, and Linear Algebra to 100+ undergraduate students; built student performance analytics platform using Python and SQL",
              "Developed predictive models identifying at-risk students early using assignment and attendance data; improved performance outcomes through data-driven intervention strategies",
            ]}
          />
        </Section>

        {/* Key Projects */}
        <Section title="KEY PROJECTS">
          <ProjectEntry
            title="Stackwell — AI-Powered Inventory & Decision Intelligence Platform"
            description="Sole architect of multi-tenant SaaS platform with 40+ PostgreSQL tables, 212+ REST API endpoints, demand forecasting, retailer churn prediction, and explainable AI decision engine with LLM orchestration (GPT-4o + Gemini)."
            tech="Python, PostgreSQL, React, REST APIs, XAI, LLM Orchestration"
            link="stackwellapp.com"
          />
          <ProjectEntry
            title="AI Copilot Agent for Role Automation & Augmentation"
            description="Designed AI copilot using Microsoft Copilot Studio fully automating customer service recommendations and augmenting marketing operations with content scheduling and campaign optimization."
            tech="Microsoft Copilot Studio, GenAI, Automation Design"
          />
          <ProjectEntry
            title="Enterprise AI Search Solution (NLP)"
            description="Built full-text search engine using TF-IDF and vector embeddings indexing 1,000+ documents; reduced information retrieval time by 80% across 10-country operation."
            tech="Python, NLP, TF-IDF, Vector Embeddings"
          />
          <ProjectEntry
            title="GenAI-Driven Analytics for Smart Agriculture"
            description="Developed comprehensive data strategy for urban farming IoT company; proposed 5 AI-powered tools including Flavor Optimizer and Growth Prediction Engine from environmental sensor analysis."
            tech="Python, Machine Learning, IoT Analytics, Strategic Planning"
          />
          <ProjectEntry
            title="Enterprise AI Transformation Strategy — Sephora"
            description="Co-developed 36-month AI implementation plan covering recommendation engines (BERT4Rec/DLRM), virtual try-on (GANs), demand forecasting (XGBoost/Prophet), and comprehensive AI governance framework."
            tech="AI Strategy, BERT4Rec, GANs, XGBoost, Prophet, Governance Design"
          />
          <ProjectEntry
            title="Bike-Share Operations Intelligence Dashboard"
            description="Analyzed 28M+ rides across Divvy and Blue Bikes systems using Python; built interactive Tableau dashboards revealing seasonal patterns and operational optimization opportunities."
            tech="Python, Tableau, Pandas, Data Visualization"
          />
        </Section>

        {/* Education */}
        <Section title="EDUCATION">
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: '11.5px' }}>M.S. in Business Analytics</span>
                <span style={{ color: '#666', fontSize: '10.5px' }}> — Grade: A</span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#666' }}>Aug 2024 – May 2025</span>
            </div>
            <p style={{ margin: '1px 0', fontSize: '10.5px', color: '#555' }}>
              Babson College, F.W. Olin Graduate School of Business — Wellesley, MA
            </p>
            <p style={{ margin: '1px 0', fontSize: '10px', color: '#777' }}>
              Coursework: AI for Business, Machine Learning, Advanced Python & SQL, Data Visualization with Tableau, Econometrics, Financial Modeling
            </p>
            <p style={{ margin: '1px 0', fontSize: '10px', color: '#777' }}>
              Lead of Operations, Babson Women in Business Club
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: '11.5px' }}>B.S. in Mathematics</span>
                <span style={{ color: '#666', fontSize: '10.5px' }}> — Concentration: Actuarial Science — Grade: A</span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#666' }}>Sep 2018 – May 2022</span>
            </div>
            <p style={{ margin: '1px 0', fontSize: '10.5px', color: '#555' }}>
              International University of Grand-Bassam (IUGB) — Grand-Bassam, Côte d'Ivoire
            </p>
            <p style={{ margin: '1px 0', fontSize: '10px', color: '#777' }}>
              Coursework: Probability & Statistics, Linear Algebra, Calculus I–III, Actuarial Mathematics, Statistical Modeling, Numerical Methods
            </p>
          </div>
        </Section>

        {/* Certifications & Awards */}
        <Section title="CERTIFICATIONS & AWARDS">
          <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '10.5px', lineHeight: 1.6 }}>
            <li>Deloitte — Data Analytics Job Simulation (Forage, 2025)</li>
            <li>Second Place, Babson Case Consulting Competition (2025)</li>
            <li>BETA Challenge Graduate Track Grand Winner, Social Impact Award, and High Impact Woman Founder Award (Babson, 2025)</li>
            <li>Leadership Across Difference Certificate (Babson College, 2025)</li>
            <li>Impact Scholarship Award & Women's Masters Leadership Scholarship (Babson College)</li>
          </ul>
        </Section>

        {/* Additional */}
        <Section title="ADDITIONAL">
          <p style={{ margin: 0, fontSize: '10.5px' }}>
            <strong>Languages:</strong> English (Fluent), French (Native) &nbsp;|&nbsp; <strong>Interests:</strong> AI for Social Impact, Entrepreneurship, Data-Driven Strategy
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '14px' }}>
    <h2 style={{
      fontSize: '12px',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: '#111',
      borderBottom: '1.5px solid #ccc',
      paddingBottom: '3px',
      marginBottom: '8px',
      marginTop: 0,
    }}>
      {title}
    </h2>
    {children}
  </div>
);

const SkillRow = ({ label, value }: { label: string; value: string }) => (
  <>
    <span style={{ fontWeight: 700, fontSize: '10.5px', color: '#333' }}>{label}:</span>
    <span style={{ fontSize: '10.5px', color: '#555' }}>{value}</span>
  </>
);

const ExperienceEntry = ({ title, company, location, dates, bullets }: {
  title: string; company: string; location: string; dates: string; bullets: string[];
}) => (
  <div style={{ marginBottom: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span style={{ fontWeight: 700, fontSize: '11.5px' }}>{title}</span>
      <span style={{ fontSize: '10.5px', color: '#666', whiteSpace: 'nowrap', marginLeft: '12px' }}>{dates}</span>
    </div>
    <p style={{ margin: '0', fontSize: '10.5px', color: '#555' }}>
      {company} — {location}
    </p>
    <ul style={{ margin: '3px 0 0', paddingLeft: '16px', fontSize: '10.5px', lineHeight: 1.5 }}>
      {bullets.map((b, i) => <li key={i} style={{ marginBottom: '1px' }}>{b}</li>)}
    </ul>
  </div>
);

const ProjectEntry = ({ title, description, tech, link }: {
  title: string; description: string; tech: string; link?: string;
}) => (
  <div style={{ marginBottom: '6px' }}>
    <span style={{ fontWeight: 700, fontSize: '11px' }}>{title}</span>
    {link && <span style={{ fontSize: '10px', color: '#666' }}> — <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">{link}</a></span>}
    <p style={{ margin: '1px 0', fontSize: '10.5px', color: '#555' }}>
      {description}
    </p>
    <p style={{ margin: '0', fontSize: '10px', color: '#888' }}>
      <em>Tech: {tech}</em>
    </p>
  </div>
);

export default ResumePage;
