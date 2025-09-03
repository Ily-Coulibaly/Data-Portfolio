import { ChevronDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm <span className="font-semibold">Ily Kynion Coulibaly</span>, a bilingual data analyst with an actuarial foundation and a passion for solving real-world problems with data and purpose.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm a <span className="font-semibold">M.S. in Business Analytics</span> graduate with <span className="font-semibold">2.5 years of experience</span> spanning analytics, consulting, actuarial sciences, and entrepreneurship. I specialize in transforming complex data into actionable insights using tools like <span className="font-semibold">Python, SQL, R, machine learning, and Tableau</span>.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I have a proven track record in building AI-powered solutions, securing business funding, and delivering measurable results. I'm excited to apply my analytical and startup experience in a dynamic, impact-driven role.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            I'm also the founder of <span className="font-semibold">KYN</span>, a sustainable skincare brand rooted in wellness, community, and ethical innovation, which I've been scaling while working on analytics projects.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/more-about-me"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-lg font-semibold text-center min-w-[160px]"
              data-testid="more-about-me-button"
            >
              More About Me
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-lg font-semibold text-center min-w-[160px]"
              data-testid="contact-me-button"
            >
              Contact Me
            </a>
          </div>
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
