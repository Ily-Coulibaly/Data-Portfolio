import { ArrowLeft, GraduationCap, Briefcase, Award, Users } from "lucide-react";

const MoreAboutMePage = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <a 
            href="/"
            className="inline-flex items-center text-primary hover:text-primary-foreground transition-colors duration-300"
            data-testid="back-to-home"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">More About Me</h1>
          <p className="text-xl text-muted-foreground">
            A deeper look into my background, education, and professional journey
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Master of Science in Business Analytics</h3>
              <p className="text-primary font-medium mb-2">Babson College</p>
              <p className="text-muted-foreground">
                Advanced coursework in statistical modeling, machine learning, data visualization, 
                and business strategy. Focused on applying analytical methods to solve real-world business problems.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Mathematics</h3>
              <p className="text-primary font-medium mb-2">University</p>
              <p className="text-muted-foreground">
                Strong foundation in mathematical theory, statistics, and quantitative analysis. 
                Developed critical thinking and problem-solving skills essential for data analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Data Analyst & Consultant</h3>
              <p className="text-primary font-medium mb-2">2.5 Years Experience</p>
              <p className="text-muted-foreground mb-4">
                Specialized in transforming complex datasets into actionable business insights. 
                Worked across multiple industries including analytics, consulting, and actuarial sciences.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Built AI-powered solutions that improved business efficiency by 30%</li>
                <li>Secured business funding through data-driven presentations and projections</li>
                <li>Delivered measurable results using Python, SQL, R, and machine learning algorithms</li>
                <li>Created interactive dashboards and visualizations using Tableau</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Entrepreneur & Founder</h3>
              <p className="text-primary font-medium mb-2">KYN Sustainable Skincare</p>
              <p className="text-muted-foreground mb-4">
                Founded and scaled a sustainable skincare brand focused on wellness, community, 
                and ethical innovation while maintaining analytics consulting work.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Developed brand strategy and market positioning using data analysis</li>
                <li>Built customer acquisition funnels and analyzed user behavior</li>
                <li>Managed product development and supply chain optimization</li>
                <li>Created marketing campaigns based on customer segmentation analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Core Competencies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python (Pandas, NumPy, Scikit-learn, TensorFlow)</li>
                <li>• SQL (PostgreSQL, MySQL, BigQuery)</li>
                <li>• R (Statistical Analysis, Data Visualization)</li>
                <li>• Machine Learning & AI</li>
                <li>• Tableau & Power BI</li>
                <li>• Statistical Modeling & Forecasting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Strategic Business Analysis</li>
                <li>• Project Management</li>
                <li>• Stakeholder Communication</li>
                <li>• Entrepreneurship & Innovation</li>
                <li>• Cross-functional Collaboration</li>
                <li>• Actuarial Science Principles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages & Personal */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Additional Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• English (Native/Fluent)</li>
                <li>• French (Native/Fluent)</li>
                <li>• Bilingual Communication Skills</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sustainable Business Practices</li>
                <li>• AI & Machine Learning Innovation</li>
                <li>• Community Building & Wellness</li>
                <li>• Ethical Technology Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discuss how my analytical expertise and entrepreneurial experience 
            can drive impact for your organization?
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-lg font-semibold"
            data-testid="contact-cta"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMePage;