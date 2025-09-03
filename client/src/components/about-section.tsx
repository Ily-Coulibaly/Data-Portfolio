import { ChevronDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate data analyst with a strong foundation in mathematics and a Master's in Business Analytics from Babson College. 
            My expertise lies in transforming complex datasets into strategic insights that drive business growth and innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            With a deep understanding of statistical modeling, machine learning, and data visualization, I help organizations make data-driven decisions. 
            I'm particularly interested in the intersection of artificial intelligence and business strategy, constantly exploring new ways to leverage emerging technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not analyzing data, I'm actively contributing to the analytics community through technical writing and open-source projects, 
            sharing insights that help fellow data professionals advance their careers.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-12 scroll-indicator">
          <a 
            href="#skills" 
            data-testid="scroll-to-skills"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
