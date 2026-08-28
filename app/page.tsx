import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { XMCodeSection } from "@/components/xmcode-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <HeroSection />
      <XMCodeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
