import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ArticlesSection from "@/components/articles-section";
import CertificatesSection from "@/components/certificates-section";
import KYNSection from "@/components/kyn-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <CertificatesSection />
      <KYNSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
