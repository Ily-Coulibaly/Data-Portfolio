import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const TypingBanner = () => {
  const titles = [
    "Data Analyst",
    "Python & ML Engineer", 
    "AI Innovator",
    "Business Analyst",
    "Bilingual Problem Solver",
    "Entrepreneur"
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentTitle) {
      // Finished typing, wait 2 seconds before deleting
      setIsTypingComplete(true);
      timeout = setTimeout(() => {
        setIsTypingComplete(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next title
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    } else {
      // Continue typing or deleting
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  return (
    <div 
      className="flex items-center justify-center h-20"
      style={{ minHeight: '80px' }}
    >
      <div className="text-center">
        <span 
          className="font-semibold typing-text"
          style={{ 
            color: 'hsl(0, 0%, 45%)',
            fontSize: '1.4rem'
          }}
        >
          {currentText}
          <span 
            className="typing-cursor"
            style={{
              borderRight: '3px solid hsl(0, 0%, 45%)',
              animation: 'blink 1s infinite'
            }}
          >
            &nbsp;
          </span>
        </span>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        
        {/* Animated Typing Banner */}
        <div className="mb-6">
          <TypingBanner />
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-foreground leading-relaxed mb-6">
            I'm <span className="font-semibold">Ily</span>, a data analyst with a foundation in <span className="font-semibold">Mathematics and Actuarial Science</span>, and <span className="font-semibold">2.5 years of experience</span> spanning analytics, tech consulting, data strategy, and entrepreneurship.
          </p>
          <p className="text-base text-foreground leading-relaxed mb-6">
            I specialize in solving real-world problems and building scalable solutions with <span className="font-semibold">data and artificial intelligence</span>.
          </p>
          <p className="text-base text-foreground leading-relaxed mb-12">
            I am also the founder of <span className="font-semibold">KYN</span>, a sustainable and ethical skincare brand.
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
